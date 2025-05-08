## 🟨 Setting Up Mocha and Chai for Login Testing

**Mocha** is a flexible JavaScript test framework introduced in **2011** by TJ Holowaychuk. It quickly became the standard for Node.js testing and is often paired with **Chai**, an assertion library that supports BDD and TDD styles.

Together, they shaped how backend and API testing evolved in JavaScript.

---

## 🛠 How to Use It

### 📁 Folder structure:

```
3_js_mocha/
├── login.js
├── test/
│   └── login.test.js
└── package.json
```

---

## 🔧 Installation

```bash
npm init -y
npm install mocha chai --save-dev
```

In `package.json`, add:

```json
"scripts": {
  "test": "mocha"
}
```

---

## ▶️ Running the Login Tests

From the terminal:

```bash
npm test
```

Mocha will look inside the `test/` directory for files ending in `.test.js`.

---

## 📑 Features in This Example

This login test example shows:

- ✅ Use of `describe()` and `it()` blocks
- ✅ Assertions with Chai’s `expect` style
- ✅ Full coverage of a decision table
- ✅ Clear and readable JavaScript test cases

---

## 🧪 Decision Table Coverage

| Criteria / Test Case | TC1                    | TC2                  | TC3                         | TC4                      |
| -------------------- | ---------------------- | -------------------- | --------------------------- | ------------------------ |
| Username             | "admin"                | ""                   | "hacker!"                   | "admin"                  |
| Password             | "admin123"             | "admin123"           | "admin123"                  | "wrongpass"              |
| ¿Hace Login?         | ✅ login success       | ❌ username missing  | ❌ username format invalid  | ❌ incorrect password    |
| Business Rule (BR)   | BR1: valid credentials | BR2: username needed | BR3: username must be alnum | BR4: password must match |

---

## ⚠️ Drawbacks of Mocha

While Mocha is flexible, it also comes with some tradeoffs:

- ❌ Requires pairing with a separate assertion library like Chai
- ❌ Needs configuration for coverage, mocking, etc.
- ❌ Jest has largely replaced Mocha in frontend apps

However, Mocha remains strong in backend Node projects for its low-level control and long-term reliability.

---

## 🧠 Historical Context

- Released in **2011**
- Created by **TJ Holowaychuk**
- One of the first popular Node.js testing tools
- Inspired many newer tools like Jest and Ava

➡️ See `login.test.js` to explore Mocha + Chai testing using a decision table approach.
