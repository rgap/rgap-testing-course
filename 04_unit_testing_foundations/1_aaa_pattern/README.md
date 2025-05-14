## 📐 AAA: Arrange, Act, Assert

The **AAA pattern** is a simple, clear structure used in writing unit tests. It ensures tests are readable and focused.

---

## 🧩 The Three Steps

### 1. Arrange

Set up everything you need to run the test: inputs, mocks, or environment.

### 2. Act

Call the function or method being tested.

### 3. Assert

Check that the result is what you expected.

---

## 💡 Why Use AAA?

- Consistent format improves readability
- Reduces chance of mixing setup and logic
- Encourages small, focused tests

---

## 🧪 Example (JavaScript)

```js
function test_uppercase_returns_all_caps() {
  // Arrange
  const input = "hello";

  // Act
  const result = input.toUpperCase();

  // Assert
  console.assert(result === "HELLO", "Expected HELLO, got " + result);
}

test_uppercase_returns_all_caps();
```
