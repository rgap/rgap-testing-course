## 🎭 Setting Up Playwright for Login Testing

**Playwright** is a modern end-to-end (E2E) testing framework created by Microsoft, released in **2020**. It allows automated browser testing across Chromium, Firefox, and WebKit with a single API and is known for its reliability and parallelism.

---

## 🛠 How to Use It

### 📁 Folder structure:

```
8_js_playwright/
├── index.html
├── login.js
└── tests/
    └── login.spec.js
```

---

## 🔧 Installation

Install Playwright and its test runner:

```bash
npm install -D playwright @playwright/test
npx playwright install
```

Add this to your `package.json`:

```json
"scripts": {
  "test": "npx playwright test"
}
```

---

## ▶️ Running the Login Tests

To run all tests:

```bash
npm test
```

Playwright runs tests defined in `*.spec.js` files inside the `tests/` folder by default.

---

## 📑 Features in This Example

- ✅ Simulates full browser interaction
- ✅ Uses Playwright Test’s built-in expect API
- ✅ Covers 4 login test cases based on a decision table
- ✅ Works with a local HTML file

---

## 🧪 Decision Table Coverage

| Criteria / Test Case | TC1                    | TC2                  | TC3                         | TC4                      |
| -------------------- | ---------------------- | -------------------- | --------------------------- | ------------------------ |
| Username             | "admin"                | ""                   | "hacker!"                   | "admin"                  |
| Password             | "admin123"             | "admin123"           | "admin123"                  | "wrongpass"              |
| ¿Hace Login?         | ✅ login success       | ❌ username missing  | ❌ username format invalid  | ❌ incorrect password    |
| Business Rule (BR)   | BR1: valid credentials | BR2: username needed | BR3: username must be alnum | BR4: password must match |

---

## ⚠️ Drawbacks of Playwright

- ❌ Not ideal for unit/component testing
- ❌ Slightly heavier than Cypress for small projects
- ❌ Setup can be verbose for basic cases

Despite this, it is widely used in production pipelines for robust cross-browser testing.

---

## 🧠 Historical Context

- Released in **2020** by Microsoft
- Originally developed by the same team that worked on Puppeteer
- Supports Chromium, Firefox, WebKit — ideal for cross-browser tests
- Competes with Cypress in the E2E space

➡️ See `login.spec.js` to explore login testing using Playwright.
