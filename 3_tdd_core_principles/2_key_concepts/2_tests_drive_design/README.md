# 02_tests_drive_design/

## 🔧 Tests Drive Design

One of the most powerful benefits of TDD is that it forces you to **think about how your code will be used** before writing it.

In this folder, you'll see an example where the test determines the structure of the function, the expected arguments, and even the return format.

---

## 🧪 Example: `formatUser(user)`

The test is written before the implementation:

```js
const user = { firstName: "Ada", lastName: "Lovelace" };
const result = formatUser(user);
```

From the test, we infer:

- `formatUser` must be a function
- It takes an object with `firstName` and `lastName`
- It returns a single string with the full name

---

## 📌 Why This Matters

- Encourages clear, intentional API design
- Forces focus on usage and clarity
- Results in smaller, composable, testable functions
