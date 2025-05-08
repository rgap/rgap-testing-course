## 🔍 Setting Up React Testing Library for Login Testing

**React Testing Library** (RTL) is a DOM-testing utility for React apps, first released around **2018**. It promotes tests that focus on user behavior rather than implementation details, improving confidence and long-term maintainability.

---

## 🛠 How to Use It

### 📁 Folder structure:

```
5_js_testing_library/
├── LoginComponent.js
├── LoginComponent.test.js
├── package.json
```

---

## 🔧 Installation

Install dependencies:

```bash
npm install react react-dom
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

In `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Ensure that Babel or a suitable environment supports JSX for the component.

---

## ▶️ Running the Login Tests

```bash
npm test
```

Jest will run `.test.js` files automatically.

---

## 📑 Features in This Example

- ✅ User-centric testing (`getByRole`, `getByLabelText`)
- ✅ No reliance on component internals
- ✅ Simulates real login interaction
- ✅ Uses React’s `useState` to simulate form logic

---

## 🧪 Decision Table Coverage

| Criteria / Test Case | TC1                    | TC2                  | TC3                         | TC4                      |
| -------------------- | ---------------------- | -------------------- | --------------------------- | ------------------------ |
| Username             | "admin"                | ""                   | "hacker!"                   | "admin"                  |
| Password             | "admin123"             | "admin123"           | "admin123"                  | "wrongpass"              |
| ¿Hace Login?         | ✅ login success       | ❌ username missing  | ❌ username format invalid  | ❌ incorrect password    |
| Business Rule (BR)   | BR1: valid credentials | BR2: username needed | BR3: username must be alnum | BR4: password must match |

---

## ⚠️ Drawbacks of Testing Library

- ❌ Slight learning curve when coming from Enzyme or Mocha
- ❌ Depends on DOM behavior; not ideal for logic-only modules
- ❌ JSX + Babel setup may be needed

Still, it is the go-to for **React behavior testing** and supports accessibility best practices.

---

## 🧠 Historical Context

- Introduced by Kent C. Dodds in **2018**
- Designed to replace Enzyme’s implementation-heavy testing
- Encourages test readability and robustness
- Supported by a family of libraries: DOM, React, Vue, Angular

➡️ See `LoginComponent.test.js` for behavior-focused login testing.
