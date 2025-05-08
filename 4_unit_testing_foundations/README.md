## 🧪 Understanding Unit Testing

Unit testing is the foundation of Test-Driven Development. Before diving into tooling, it's critical to understand what unit tests are, how they are structured, and why they're valuable.

---

## ✅ What is a Unit Test?

A **unit test** verifies that a small, isolated piece of code (usually a single function or method) behaves as expected.

---

## 📐 Structure: AAA Pattern

Most unit tests follow the **AAA Pattern**:

1. **Arrange**: Set up the environment and inputs
2. **Act**: Call the function or method being tested
3. **Assert**: Check the output or effect is correct

```js
// Example in JavaScript:
function test_adds_two_numbers() {
  // Arrange
  const a = 2,
    b = 3;

  // Act
  const result = add(a, b);

  // Assert
  console.assert(result === 5, "Expected 5, got " + result);
}
```

---

## 🔍 Types of Assertions

- Equality: `assertEqual(a, b)`
- Boolean: `assertTrue(x)` / `assertFalse(x)`
- Exception raised: `assertThrows(fn)`
- Approximate values (for floats)
- Type checks, string contains, etc.

---

## 💡 Why Write Unit Tests First?

- They clarify expected behavior before implementation
- They prevent regressions later
- They make refactoring safe
- They serve as documentation

---

## 📁 Folder Structure

```
03_unit_testing_foundations/
├── 01_aaa_pattern/
├── 02_assertions/
├── 03_write_before_function/
├── 04_minimal_passing_code/
└── 05_refactor_confidently/
```

Each folder includes:

- A `README.md`
- A simple script with one or two tests
- No testing library required initially
