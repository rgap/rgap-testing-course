## 🔁 Comparing Test-First vs Test-Last Development

This folder demonstrates the difference in workflow between writing tests **before** implementation (Test-First / TDD) and writing tests **after** the code is done (Test-Last).

---

## ✅ Test-First (TDD Style)

- Starts by writing a test that fails
- Only writes enough code to pass the test
- Encourages small, incremental development
- Example: `test_first_example.js`

### Benefits

- Ensures test coverage
- Helps define interfaces clearly
- Makes refactoring safer

---

## ❌ Test-Last (Traditional Style)

- Starts by writing the function or module
- Tests are added later, or sometimes not at all
- Example: `test_last_example.js`

### Problems

- Tests may be incomplete or missing
- Bugs might remain unnoticed
- Code structure may be harder to test

---

## 🧪 Key Lesson

TDD isn’t just about testing — it’s about **designing software through feedback**. Writing the test first forces clarity and makes your code easier to maintain.
