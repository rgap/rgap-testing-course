# 05_refactor_confidently/

## ♻️ Refactor with Confidence

Once a test passes (Green), TDD encourages developers to **refactor the code** — improve structure, readability, or performance — while keeping the test green.

This is the third step of the Red-Green-Refactor cycle.

---

## 🧪 Why Refactor?

- Clean up quick fixes from Green phase
- Remove duplication
- Improve naming and clarity
- Apply better design principles

---

## 🔒 Why You Can Refactor Safely

- Your tests act as a safety net
- As long as the tests pass, your changes haven’t broken behavior
- You can improve code quality without fear of regressions

---

## 🧱 Example:

```js
function greet(name) {
  return "Hello, " + name + "!";
}

// Refactor:
function greet(name) {
  return `Hello, ${name}!`;
}
```
