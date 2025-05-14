# 🔧 Tests Drive Design

One of the most powerful (and underappreciated) benefits of Test-Driven Development is that writing tests **first** doesn't just validate behavior — it **shapes the design** of your code.

---

## 🧠 What Does "Drive Design" Mean?

When you write the test first:

- You are the first "user" of the function.
- You naturally decide:
  - The function’s name
  - Its expected inputs (types, structure)
  - Its output (return type and format)

You define a clean interface **based on need**, not guesswork.

---

## 🧪 Example: Login Function

Before writing the function, we wrote this test:

```js
login({ username: "admin", password: "admin123" });
```

From this, we infer:

- The function is called `login`
- It takes **one object** with two properties: `username` and `password`
- It returns a string message depending on the result

Because we wrote the test first, we were forced to design an interface that is:

- Clean and predictable
- Easy to validate and mock
- Easy to extend (e.g. later add `rememberMe`, `2FA`, etc.)

---

## ⚡ Why This Matters

When you let the test drive the function design:

- You avoid over-engineering or adding unneeded parameters
- You only implement what the test requires
- You document usage through examples
- You improve consistency across your codebase

---

## 🧱 Folder Contents

- `login_interface_driven_by_test.js`: See how the test leads to an interface-first design
