# 📑 Tests as Living Documentation

Tests are not just tools for verifying correctness — they are also excellent **sources of truth** about how your system is supposed to behave.

When written clearly, tests become **living documentation**: always up-to-date, always executable, and always precise.

---

## 🧠 What Does "Living Documentation" Mean?

Unlike traditional documentation (e.g. comments, wikis, handbooks), tests:

- Are **executable** — they don’t just describe behavior, they _enforce_ it.
- **Fail when wrong** — outdated tests will break, making inconsistencies visible.
- Are usually maintained by developers alongside code, so they evolve naturally.

> If a test passes, then the behavior it describes is still valid.

---

## 💬 Example: Login Function

Imagine you find this test in a codebase:

```js
const result = login({ username: "", password: "secret" });
expect(result).toBe("❌ Missing username");
```

Without even reading the `login()` function’s code, you learn:

- It accepts an object with `username` and `password`
- It returns a message string
- It validates required fields and gives meaningful errors

This **explains the behavior** of the system much more clearly than a comment like:

```js
// This function checks login fields and returns an error if empty
```

---

## 🧪 What Makes a Good Documentation Test?

| Quality                | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| ✅ Descriptive Name    | `test_login_should_fail_if_username_is_missing()` is better than `test1()` |
| ✅ Clear Inputs        | Avoid cryptic values like `"x"` or `123`                                   |
| ✅ Self-contained      | Anyone should be able to understand it without reading other files         |
| ✅ Includes Edge Cases | Shows what happens in uncommon or problematic input scenarios              |

---

## ✨ Benefits of Documentation-Style Tests

- 🧭 **Easy onboarding** for new team members
- 📚 **Usage examples** for your functions
- 💬 **Intentional APIs** — your test defines what matters
- 🛠 **Debugging aid** — failing tests tell you _what broke_

---

## 🧱 Folder Contents

- `login_documentation_test.js`: A realistic login test suite that explains the function’s behavior by example

---

## 🔁 Why This Matters in TDD

In Test-Driven Development, the **test is the specification**.

It acts as the clearest form of documentation:

- What is allowed
- What is forbidden
- What is expected

You don't have to **explain what your code does** if your tests already do.
