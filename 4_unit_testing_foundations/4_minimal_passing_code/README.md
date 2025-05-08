## 🟢 Minimal Passing Code

In the Green phase of TDD, once a test fails (Red), the goal is to write **just enough code to make it pass** — no more.

This practice ensures we:

- Avoid overengineering
- Let the test suite shape design
- Maintain short feedback cycles

---

## ⚙️ Principle: “Make it work, then make it right”

> You don't need clever code right away. You need working code.

---

## 🧪 Example

```js
// Red: Test expects 42, but returns undefined
function getAnswer() {
  // return 42; ← eventually
}

// Minimal Green fix:
function getAnswer() {
  return 42; // ✅ Enough to satisfy the test
}
```

Even hardcoded values are acceptable **temporarily**. The focus is passing the test before worrying about flexibility.
