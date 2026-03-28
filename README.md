# 🌟 Portfolio Showcase Contribution Repo

Welcome to the **Research and Innovation Team Portfolio Showcase** 🚀

This repository is created for our GitHub hands-on workshop to help first-year students learn how open-source contributions work in a real project.

Each student will contribute by adding:

* a short **intro card** on the main page
* their own **portfolio page**
* a working **View Portfolio** link

This helps you learn real GitHub contribution workflow in a simple way.

---

## 🎯 Contribution Flow

Every student will work on **only their own section**.

The project structure is:

```text id="h3k9p2"
portfolio-showcase/
│
├── index.html
├── style.css
├── script.js
│
└── portfolios/
    ├── john-doe.html
    ├── karthik.html
    ├── rahul.html
```

---

## 🌐 What You Need to Do

You need to contribute in **2 places only**:

### 1) Add Your Intro Card in `index.html`

```html id="j7m2x5"
<div class="card">
    <h3>John Doe</h3>
    <p>1st Year CSE</p>
    <p>AI enthusiast and web developer</p>
    <p>Passionate about building projects</p>
    <a href="portfolios/john-doe.html">View Portfolio</a>
</div>
```

⚠️ Keep your intro within **4–5 lines only**

---

### 2) Create Your Own Portfolio Page

Inside the `portfolios/` folder, create **your own file only**

Your portfolio must be a **single HTML file only** (write HTML/CSS/JS inside the same file).

✅ valid examples:

```text id="n1p6t4"
portfolios/john-doe.html
portfolios/karthik.html
portfolios/rahul.html
```

❌ do not create portfolio files outside `portfolios/`

Example:

```text id="v8q4t1"
portfolios/john-doe.html
```

---

## 🚨 Important Guidelines

### ✅ Edit Only Your Own Files

Only edit:

```text id="m2c6z8"
index.html
portfolios/your-name.html
```

Example:

```text id="p9x1w3"
index.html
portfolios/john-doe.html
```

---

### ❌ Do NOT Edit Others' Files

Do not touch:

* someone else’s card
* someone else’s portfolio file
* CSS unless assigned

---

## 🔄 ALWAYS PULL LATEST UPDATES

Before you start working, **always run this command first**:

```bash id="r4n7b2"
git pull origin main
```

This gets the **latest file updates from the main branch**.

⚠️ This is compulsory before starting your work.

---

## 🔁 Pull Again Before Pushing

Before you push your changes, always pull once again:

```bash id="w6k3m9"
git pull origin main
```

This ensures you have the latest updates from others and helps avoid merge conflicts.

So the flow is:

```text id="x1v5c8"
pull → edit → status → commit → pull → push
```

---

## 🌿 Check Your Branch First

Always check your branch:

```bash id="t3q8n4"
git branch
```

Example:

```text id="d7m1p6"
* john-doe
  main
```

The `*` means current branch.

---

## 🔁 If You Are in the Wrong Branch

Go back using your branch name.

Example:

```bash id="b2v9k7"
git checkout john-doe
```

---

## 👀 ALWAYS CHECK WHAT IS BEING EDITED

Before committing or pushing, always run:

```bash id="n5w2x8"
git status
```

This shows what files are changed.

Example:

```text id="k8p4q1"
modified: index.html
modified: portfolios/john-doe.html
```

✅ correct

If you see someone else’s file:

```text id="s9v6m3"
portfolios/rahul.html
```

❌ do not commit it

---

## 🚀 Contribution Steps

### 1) Clone Once (Skip if already cloned)

```bash id="c7v3b9"
git clone <repository-url>
cd portfolio-showcase
```

---

### 2) Create Issue First and Get Assigned

Use GitHub website first.

Optional GitHub CLI:

```bash id="k3d8n1"
gh issue create --title "Add your-name portfolio" --body "I will add data/your-name.json and portfolios/your-name.html"
```

---

### 3) Sync Main and Create Your Branch

```bash id="f3t7x1"
git checkout main
git pull origin main
git checkout -b your-name
git pull origin main
```

---

### 4) Make Your Changes Only in These Two Files

```text id="q4w8m2"
portfolios/your-name.html
data/your-name.json
```

---

### 5) Check Changes and Add Only Your Files

```bash id="q6m2v9"
git status

# example
git add portfolios/john-doe.html data/john-doe.json
```

---

### 6) Commit and Push to Your Branch

```bash id="z4p8n5"
git commit -m "Add your-name portfolio"
git push -u origin your-name
```

---

### 7) Raise Pull Request (Use PR Template)

Create PR from `your-name` branch to `main`.

Optional GitHub CLI:

```bash id="t5r2n8"
gh pr create --base main --head your-name --title "Add your-name portfolio files" --body "Closes #issue-number"
```

---

## 🎯 Goal of This Workshop

By contributing here, you will learn:

* Forking
* Branching
* Pulling latest updates
* Checking edited files
* Creating portfolio pages
* Raising Pull Requests

Happy Contributing 🚀
