# 🧪 Types of Software Tests

Software testing involves many different kinds of tests, each with a unique **scope**, **goal**, and **typical performer** (devs, QAs, automation, etc.).

---

## 🧱 Unit Testing

- ✅ Tests a **single function or method** in isolation
- Written by developers
- Fast and small in scope

> Example: Testing `calculateTotal()` without any database or API calls

---

## 🔗 Integration Testing

- ✅ Verifies that **multiple units/modules work together**
- Tests real-world flows across layers (e.g., API + DB)
- May involve stubs, fakes, or actual services

> Example: Testing a user registration endpoint that writes to a real database

---

## 🧑‍💻 End-to-End (E2E) Testing

- ✅ Simulates **real user scenarios**
- Clicks buttons, fills forms, navigates screens
- Requires full app + backend + DB + network

> Example: Logging in via UI and validating a welcome message

---

## 🌐 API Testing

- ✅ Focuses on **REST, GraphQL, or RPC APIs**
- Sends real requests and checks responses
- Often automated and run in CI

> Tools: Postman, Newman, Supertest, REST Assured

---

## 🔁 Regression Testing

- ✅ Ensures that **new changes don’t break old features**
- Can be manual or automated
- Re-runs all or most tests before deploy

> Usually done before release or after hotfix

---

## 🧭 Smoke Testing

- ✅ Basic check to confirm the app “doesn’t crash”
- Shallow tests of major features
- Often run **right after deployment**

> Example: Verifying that login and homepage load after deploy

---

## 🧨 Load & Performance Testing

- ✅ Measures **response times**, **concurrency**, and **scalability**
- Simulates many users or requests
- Important for backend, APIs, or heavy traffic systems

> Tools: JMeter, Locust, Artillery

---

## 🦺 Security Testing

- ✅ Checks for **vulnerabilities** and exploits
- Includes input validation, auth, injection, etc.
- Done by security engineers or specialized tools

> Tools: OWASP ZAP, Burp Suite, Snyk

---

## ♿ Accessibility Testing

- ✅ Validates **screen readers, keyboard use, ARIA labels**
- Ensures compliance with a11y standards
- Performed manually or using tools

> Tools: Axe, Lighthouse, Wave

---

## 🔍 Manual Testing

- ✅ Human testers explore or follow scripts
- Useful for exploratory, UX, or edge cases
- May be supported by spreadsheets or test plans

---

## 🧠 Summary Table

| Type               | Scope                    | Performed By      | Tools (Common)                |
| ------------------ | ------------------------ | ----------------- | ----------------------------- |
| Unit Test          | Single function/module   | Developer         | Jest, Mocha, Pytest           |
| Integration Test   | Multiple components      | Developer/QA      | Supertest, Unittest, Postman  |
| E2E Test           | Full app                 | QA / Frontend Dev | Cypress, Playwright, Selenium |
| API Test           | API endpoints            | Backend Dev / QA  | Postman, REST Assured, Newman |
| Regression Test    | Old features             | QA / Automation   | CI tools, TestRail            |
| Smoke Test         | Basic sanity check       | QA / DevOps       | Shell scripts, Cypress        |
| Load/Performance   | High traffic             | QA / DevOps       | JMeter, Locust, Artillery     |
| Security Test      | Security vulnerabilities | Security Engineer | OWASP ZAP, Snyk, Burp Suite   |
| Accessibility Test | UI for all users         | QA / Designers    | Axe, Lighthouse, Wave         |
| Manual Test        | Anything                 | QA / Product      | JIRA, Zephyr, TestLink        |
