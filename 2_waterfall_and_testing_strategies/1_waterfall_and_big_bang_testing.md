# Waterfall and Big-Bang Testing

Before modern testing practices like TDD, software development primarily followed models such as **Waterfall** and **Big-Bang**. Testing in these models was often an afterthought, leading to costly bugs, integration chaos, and unreliable software.

---

## 📐 Waterfall Model

### Description:

A linear and sequential approach where each phase must be completed before the next begins:

1. Requirements
2. Design
3. Implementation
4. **Testing** (usually after coding is 100% complete)
5. Deployment
6. Maintenance

### How Testing Was Done:

- Testing came **only after** full implementation.
- Often referred to as **“Validation and Verification”**.
- Bugs found late were expensive to fix.

### Problems:

- No feedback loop during development.
- Late testing meant developers forgot code logic.
- Changing requirements broke everything.

### Key Insight:

> Testing was **reactive** and postponed until the end.

---

## 💥 Big-Bang Integration Testing

### Description:

A chaotic approach where all components are developed in isolation and then integrated **at once**.

### How Testing Was Done:

- Entire system is “plugged together” with **no prior integration testing**.
- Bugs are hard to isolate because everything fails at once.

### Problems:

- No modular testing or stubs.
- Integration issues masked component-level bugs.
- Debugging was extremely hard.

### Key Insight:

> Big-Bang testing relied on hope: _"we built it all — let's see if it works."_

---

## 🔁 Transitioning Away

Because of these issues, the industry began exploring **incremental**, **iterative**, and eventually **test-first** approaches, such as:

- **Unit Testing** (1980s–1990s)
- **XP / Agile Testing** (1999+)
- **Test-Driven Development** (2003+)

➡️ **Next**: Dive into the evolution of manual testing and the rise of automated test scripts.
