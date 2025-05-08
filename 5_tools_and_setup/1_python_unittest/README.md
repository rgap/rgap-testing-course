## 🐍 Setting Up Python's Built-in `unittest` (Login Example)

`unittest` is Python’s built-in testing framework. It was introduced in **Python 2.1 (2001)** and is heavily inspired by Java’s **JUnit**.

It helped standardize automated testing in Python by formalizing test discovery, assertions, and fixtures — and served as the foundation for more modern frameworks like `pytest`.

---

## 🛠 How to Use It

### 📁 Folder structure:

```
1_python_unittest/
├── login_utils.py
└── test_login_utils.py
```

---

## 🔧 Requirements

- Python ≥ 3.3  
  (No need to install anything — `unittest` is part of the standard library.)

---

## ▶️ Running the Login Tests

From the terminal:

```bash
python -m unittest test_login_utils.py
```

Or simply:

```bash
python test_login_utils.py
```

(as long as it includes the line:)

```python
if __name__ == '__main__':
    unittest.main()
```

---

## 📑 Features in This Example

This login test example demonstrates:

- ✅ Decision-table-based testing with `unittest`
- ✅ `assertRaises()` to check for expected login errors
- ✅ Clean use of test cases to match specific business rules
- ✅ Clear separation of validation logic in `login_utils.py`

Each test case maps directly to a condition in the **decision table** included as a docstring in the test file.

---

## 🧪 Decision Table Coverage

This project includes 4 focused test cases:

| Criteria / Test Case | TC1                    | TC2                  | TC3                         | TC4                      |
| -------------------- | ---------------------- | -------------------- | --------------------------- | ------------------------ |
| Username             | "admin"                | ""                   | "hacker!"                   | "admin"                  |
| Password             | "admin123"             | "admin123"           | "admin123"                  | "wrongpass"              |
| ¿Hace Login?         | ✅ login success       | ❌ username missing  | ❌ username format invalid  | ❌ incorrect password    |
| Business Rule (BR)   | BR1: valid credentials | BR2: username needed | BR3: username must be alnum | BR4: password must match |

---

## ⚠️ Drawbacks of `unittest`

While `unittest` is stable and integrated, it has some limitations:

- ❌ Verbose syntax (e.g. `assertEqual()` vs `assert x == y`)
- ❌ Less readable than `pytest` for non-OOP users
- ❌ No native support for parameterized tests
- ❌ Lacks built-in plugin ecosystem or coverage tools

For these reasons, many developers adopt `pytest` for more expressive, functional-style testing — though `unittest` remains common in legacy codebases and large companies.

---

## 🧠 Historical Context

- Built into Python since **version 2.1 (2001)**
- Based on Kent Beck’s **xUnit** architecture used across many languages
- One of the earliest tools to formalize **Test-Driven Development (TDD)** in Python
- Preceded `nose` and `pytest`, and inspired their core APIs

➡️ See `test_login_utils.py` to learn how to write decision-based tests using `unittest`.
