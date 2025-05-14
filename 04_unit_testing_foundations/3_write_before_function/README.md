## 🔴 Writing Tests Before the Function Exists

In TDD, tests are always written **before** the implementation. This might feel backward at first, but it helps define the expected behavior clearly and keeps the code focused.

---

## 🧪 How It Works

- Write a test that **fails** because the function doesn't exist.
- Then implement just enough to make it pass.
- This enforces a “need-only” development style.

---

## 💡 Benefits

- Forces you to think about the interface first
- Encourages simpler, smaller, testable functions
- Confirms the test setup is working

---

## 🧱 Example:

```js
function test_add_returns_sum() {
  const result = add(2, 3); // add() not defined yet
  console.assert(result === 5, "Expected 5, got " + result);
}
```

➡️ Try running this before defining `add()` and see it fail.

Then define:

```js
function add(a, b) {
  return a + b;
}
```

And see it pass.
