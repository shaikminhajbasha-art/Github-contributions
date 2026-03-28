const contributorsGrid = document.getElementById("contributorsGrid");
const statusText = document.getElementById("status");

const DATA_DIR = "data";
const DEFAULT_JSON_FILES = ["john-doe.json", "karthik.json", "rahul.json"];

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildCard(contributor) {
  const card = document.createElement("article");
  card.className = "card";

  const fallbackPortfolio = `portfolios/${contributor.slug}.html`;
  const portfolioPath = contributor.portfolio || fallbackPortfolio;

  card.innerHTML = `
    <h3>${escapeHTML(contributor.name)}</h3>
    <p class="year">${escapeHTML(contributor.year)}</p>
    <p class="intro">${escapeHTML(contributor.intro)}</p>
    <a href="${escapeHTML(portfolioPath)}" aria-label="View ${escapeHTML(contributor.name)} portfolio">View Portfolio</a>
  `;

  return card;
}

function inferSlugFromFile(fileName) {
  return fileName.replace(/\.json$/i, "");
}

async function discoverJsonFiles() {
  const discovered = new Set();

  try {
    const directoryResponse = await fetch(`${DATA_DIR}/`, { cache: "no-store" });
    if (directoryResponse.ok) {
      const directoryHtml = await directoryResponse.text();
      const matches = directoryHtml.matchAll(/href=["']([^"']+\.json)["']/gi);
      for (const match of matches) {
        const filePath = match[1].split("?")[0].split("#")[0];
        const file = filePath.split("/").pop();
        if (file) {
          discovered.add(file);
        }
      }
    }
  } catch (error) {
    // Some static hosts do not expose directory listings; fallback handles this.
  }

  if (discovered.size === 0) {
    DEFAULT_JSON_FILES.forEach((file) => discovered.add(file));
  }

  return Array.from(discovered);
}

async function loadContributors() {
  const files = await discoverJsonFiles();

  const results = await Promise.allSettled(
    files.map(async (file) => {
      const response = await fetch(`${DATA_DIR}/${file}`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Unable to read ${file}`);
      }

      const data = await response.json();
      return {
        slug: inferSlugFromFile(file),
        name: data.name || "Unknown Contributor",
        year: data.year || "Year not provided",
        intro: data.intro || "No intro added yet.",
        portfolio: data.portfolio || "",
      };
    })
  );

  return results
    .filter((item) => item.status === "fulfilled")
    .map((item) => item.value)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function animateReveals() {
  const revealElements = document.querySelectorAll(".reveal, .card");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element, index) => {
    if (element.classList.contains("card")) {
      element.style.transitionDelay = `${Math.min(index * 70, 340)}ms`;
    }
    observer.observe(element);
  });
}

async function renderContributors() {
  try {
    const contributors = await loadContributors();

    contributorsGrid.innerHTML = "";

    if (contributors.length === 0) {
      statusText.textContent = "No contributors found yet. Add JSON files in the data folder.";
      return;
    }

    const cards = contributors.map((contributor) => buildCard(contributor));
    cards.forEach((card) => contributorsGrid.appendChild(card));

    statusText.textContent = `Showing ${contributors.length} contributor${contributors.length > 1 ? "s" : ""}.`;
    animateReveals();
  } catch (error) {
    statusText.textContent = "Unable to load contributors. Make sure you are running with a local server.";
    contributorsGrid.innerHTML = "";
  }
}

animateReveals();
renderContributors();
