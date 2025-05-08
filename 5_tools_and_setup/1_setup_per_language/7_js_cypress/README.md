## 🧪 Setting Up Cypress for Login Testing

**Cypress** is an end-to-end (E2E) testing framework for modern web applications. First released in **2017**, Cypress enables testing the full browser experience — not just units or components — by simulating real user behavior in a live browser.

---

## 🛠 How to Use It

### 📁 Folder structure:

```
7_js_cypress/
├── cypress/
│   └── e2e/
│       └── login.cy.js
├── index.html
├── login.js
└── cypress.config.js
```

---

## 🔧 Installation

Install Cypress locally:

```bash
npm install cypress --save-dev
```

Open the Cypress UI:

```bash
npx cypress open
```

Then select or create a test file like `login.cy.js`.

---

## ▶️ Running the Login Tests

To run all tests in headless mode:

```bash
npx cypress run
```

To run with GUI:

```bash
npx cypress open
```

---

## 📑 Features in This Example

This login test example demonstrates:

- ✅ E2E browser interaction with real HTML elements
- ✅ Uses `cy.get()` and `cy.contains()` to find and assert DOM content
- ✅ Decision-table-style coverage of login logic from a UI perspective

---

## 🧪 Decision Table Coverage

| Criteria / Test Case | TC1                    | TC2                  | TC3                         | TC4                      |
| -------------------- | ---------------------- | -------------------- | --------------------------- | ------------------------ |
| Username             | "admin"                | ""                   | "hacker!"                   | "admin"                  |
| Password             | "admin123"             | "admin123"           | "admin123"                  | "wrongpass"              |
| ¿Hace Login?         | ✅ login success       | ❌ username missing  | ❌ username format invalid  | ❌ incorrect password    |
| Business Rule (BR)   | BR1: valid credentials | BR2: username needed | BR3: username must be alnum | BR4: password must match |

---

## ⚠️ Drawbacks of Cypress

- ❌ Not suitable for testing logic-only modules
- ❌ Limited multi-tab or multi-domain support
- ❌ Slightly heavier to set up than unit test tools

Still, Cypress is one of the best choices for **full browser testing** and simulating real user behavior.

---

## 🧠 Historical Context

- Released in **2017**
- Built to replace Selenium for modern JS apps
- Prioritizes speed, reliability, and DX (Developer Experience)
- Frequently used in CI pipelines and full-stack applications

➡️ See `login.cy.js` for Cypress-style login test coverage.
