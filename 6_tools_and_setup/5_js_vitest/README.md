## ⚡ Setting Up Vitest for Login Testing

**Vitest** is a fast and modern testing framework built for Vite-powered projects. Released in **2022**, it is designed to be Jest-compatible while offering faster performance and tighter integration with modern frontend tooling.

---

## 🛠 How to Use It

### 📁 Folder structure:

```
6_js_vitest/
├── login.js
├── login.test.js
├── package.json
└── vite.config.js (optional for Vite integration)
```

---

## 🔧 Installation

Install with:

```bash
npm install vitest --save-dev
```

To run tests, add this to your `package.json`:

```json
"scripts": {
  "test": "vitest"
}
```

Run tests with:

```bash
npm test
```

No Babel or extra setup is needed if you're already using Vite.

---

## 📑 Features in This Example

- ✅ Compatible `expect()` syntax like Jest
- ✅ Super fast with ES modules
- ✅ Supports `describe`/`it` style blocks
- ✅ Clean and modern developer experience

---

## 🧪 Decision Table Coverage

| Criteria / Test Case | TC1                    | TC2                  | TC3                         | TC4                      |
| -------------------- | ---------------------- | -------------------- | --------------------------- | ------------------------ |
| Username             | "admin"                | ""                   | "hacker!"                   | "admin"                  |
| Password             | "admin123"             | "admin123"           | "admin123"                  | "wrongpass"              |
| ¿Hace Login?         | ✅ login success       | ❌ username missing  | ❌ username format invalid  | ❌ incorrect password    |
| Business Rule (BR)   | BR1: valid credentials | BR2: username needed | BR3: username must be alnum | BR4: password must match |

---

## ⚠️ Drawbacks of Vitest

- ❌ Newer and less widely adopted than Jest
- ❌ Mostly intended for Vite users (may require adaptation in non-Vite setups)
- ❌ Some advanced Jest plugins may not be compatible yet

---

## 🧠 Historical Context

- First released in **2022** by the Vite team
- Aims to replace Jest in modern Vite-based environments
- Fully ESM-native and blazing fast
- Compatible with `expect`, `describe`, `vi.fn()` and more

➡️ See `login.test.js` to explore Vitest in action with a decision table approach.
