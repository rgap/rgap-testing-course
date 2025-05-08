## 💡 Core Ideas Behind Test-Driven Development

Beyond the Red-Green-Refactor cycle, TDD is grounded in powerful development principles that promote better code quality, clarity, and design. This section explores those guiding ideas.

---

## 📌 Key Concepts

### ✅ Test First, Not After

- Tests are written _before_ implementation.
- Forces the developer to clarify intent and usage early.
- Leads to minimal, focused, and testable code.

### 🔧 Tests Drive Design

- Writing tests first shapes the function’s API.
- Promotes decoupling and separation of concerns.
- Classes/functions emerge only when needed.

### 📑 Tests as Living Documentation

- Tests show how the system is expected to behave.
- Easier to read than code comments.
- Help new team members understand requirements.

### ⚠️ Fail Fast

- A failing test is good: it shows where code breaks.
- Early feedback shortens the debug loop.
- Eliminates the risk of false assumptions.

### ♻️ Always Refactor After Green

- Once a test passes, the next priority is code clarity.
- Prevents technical debt from building.
- Encourages smaller, cleaner, modular design.

---

## 🗂 Subfolders

### `1_test_first_vs_test_last/`

- Compare two identical features: one written using TDD, one post-implementation.

### `2_tests_drive_design/`

- Shows how writing a test leads naturally to defining a better interface.

### `3_tests_as_documentation/`

- Tests as a way to describe expected usage patterns.
