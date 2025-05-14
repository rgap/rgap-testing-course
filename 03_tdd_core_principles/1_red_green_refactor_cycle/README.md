## Emergence of Test-Driven Development (TDD)

As testing practices matured, developers started to realize the value of **writing tests before code**. This gave birth to **Test-Driven Development (TDD)**, a formalized methodology introduced and popularized through Extreme Programming (XP) in the early 2000s.

---

## 🧠 What is TDD?

TDD is a software development practice where you:

1. **Write a failing test** (Red)
2. **Write the minimum code** to pass the test (Green)
3. **Refactor** the code for clarity or performance (Refactor)

This cycle is repeated rapidly for every new feature or behavior.

---

## 🔁 The Red-Green-Refactor Cycle

| Phase       | Description                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------- |
| 🔴 Red      | Write a failing test for a new piece of functionality                                         |
| 🟢 Green    | Write the simplest code necessary to make the test pass                                       |
| 🟡 Refactor | Clean up the code, improve naming, structure, or performance — while keeping the test passing |

This approach emphasizes "baby steps": minimal change with quick feedback.

---

## ✍️ Historical Context

- **Origin**: Part of eXtreme Programming (XP)
- **Kent Beck**: Promoted the method in _TDD by Example_ (2003)
- **Cultural Shift**: Encouraged tests to guide development instead of being an afterthought

---

## 🧪 Why TDD Was Revolutionary

- Encouraged simple, testable designs
- Helped developers clarify requirements before coding
- Made debugging easier — failures appear immediately
- Gave high confidence for refactoring

---

## 🛠 Tools That Supported TDD

- **xUnit** libraries (e.g., JUnit, unittest, NUnit, QUnit)
- **Mocking libraries** for isolating dependencies
- **Continuous Integration (CI)** tools for automation

---

## 📈 Rise in Adoption

- Promoted by Kent Beck’s book _Test-Driven Development: By Example_ (2003)
- Adopted in XP, Agile, and Lean software practices
- Became a staple in enterprise and open-source development

---

## 🧪 Subfolder Contents

### `1_red_phase/`

- Only failing tests exist
- No implementation yet (e.g. `test_add_red.js`)

### `2_green_phase/`

- Just enough code to pass tests
- Example: `add.js` plus matching passing test

### `3_refactor_phase/`

- Code is cleaned and optimized
- Additional test cases may be introduced for edge cases

---

## 🧠 Why it Matters

- Ensures test coverage from the beginning
- Prevents overengineering
- Allows confident refactoring
- Encourages design focused on requirements

