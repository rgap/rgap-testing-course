# Rise of QA Engineers

## 📈 From Developer Testing to Dedicated QA Roles

After developers began testing their own code manually or through simple test scripts (as shown in the previous file), software teams quickly realized that relying solely on developers to test their own work led to:

- **Incomplete coverage** of real-world user flows
- **Bias** (developers unintentionally avoid edge cases they didn’t consider)
- **Missed bugs**, especially in the user interface and integration layers

---

## 🔹 Emergence of Quality Assurance (QA)

Around the late 1990s and early 2000s, the role of **QA engineers** became common in software teams. Their purpose was to **test software independently** from the developers who wrote it.

### Key Early QA Tasks:

- Designing test cases based on feature specs or user stories
- Manually testing all UI screens and edge cases
- Logging bugs with reproduction steps, screenshots, or logs
- Verifying bug fixes by developers
- Running regression tests before releases

---

## 🔸 Realistic QA Test Cycle Example

> QAs would maintain spreadsheets or documents with test cases:

| Test Case ID | Input Data           | Expected Output | Status |
| ------------ | -------------------- | --------------- | ------ |
| TC001        | ("john", "password") | Valid           | ✅     |
| TC002        | ("jo", "password")   | Invalid         | ❌     |

- A failed test case would trigger a bug report, often filed in systems like JIRA or Bugzilla.
- QA engineers became the voice of the end-user in the development process.

---

## 🔹 Evolution Toward Automation

As projects scaled:

- Manual testing became **expensive and repetitive**.
- QAs began learning scripting and test automation tools like:
  - `Selenium`, `Cypress`, `Playwright` (for UI automation)
  - `pytest`, `unittest`, `JUnit` (for API/backend automation)

> This gave rise to the modern **QA Automation Engineer** and **SDET** (Software Development Engineer in Test).

---

## 🧠 Summary

The introduction of QA roles:

- Formalized the **testing process**
- Increased **software quality and user satisfaction**
- Led to the **modern test automation practices** we rely on today
