## ⚖️ Comparing TDD, BDD, and ATDD

Test-Driven Development (TDD), Behavior-Driven Development (BDD), and Acceptance Test-Driven Development (ATDD) are related practices, but each has a different **focus, audience, and style**.

---

## 📚 Quick Comparison

| Feature           | TDD                        | BDD                             | ATDD                                 |
| ----------------- | -------------------------- | ------------------------------- | ------------------------------------ |
| **Focus**         | Code correctness           | Behavior and collaboration      | Business acceptance criteria         |
| **Audience**      | Developers                 | Developers + Product Owners     | Developers + Stakeholders            |
| **Test Format**   | Assertions (`assertEqual`) | DSL-style (`expect`, `should`)  | Natural language (`Given/When/Then`) |
| **Tool Examples** | JUnit, unittest, Mocha     | Jasmine, RSpec, Cucumber.js     | Cucumber, Behave, SpecFlow           |
| **Primary Goal**  | Prevent regressions        | Describe behavior in user terms | Validate business requirements       |

---

## 🧪 Folder Contents

### `1_tdd_example/`

- Traditional unit test (assertion-based)

### `2_bdd_example/`

- Jasmine- or Jest-style BDD test with `describe()` and `expect()`

### `3_atdd_example/`

- Simulated acceptance test using Given/When/Then structure

---

## ✅ Summary

All three approaches aim to improve software quality through testing. TDD drives design at the code level, BDD improves communication with domain language, and ATDD ensures alignment with user expectations.
