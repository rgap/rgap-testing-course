## 🐍 Setting Up `pytest` for Login Testing

`pytest` is a popular third-party testing framework for Python introduced in **2004**. It was designed to be simpler and more expressive than Python’s built-in `unittest`, enabling a more functional and concise testing style.

It is widely used in both open-source and enterprise environments for its powerful fixtures, assert introspection, and plugin support.

---

## 🛠 How to Use It

### 📁 Folder structure:

```
2_python_pytest/
├── login_utils.py
└── test_login_utils.py
```

---

## 🔧 Installation

To install `pytest`:

```bash
pip install pytest
```

---

## ▶️ Running the Login Tests

From the terminal:

```bash
pytest
```

Or to run just the file:

```bash
pytest test_login_utils.py
```

Files and functions must follow this pattern to be discovered:

- File starts with `test_`
- Test functions also start with `test_`

---

## 📑 Features in This Example

This login testing setup demonstrates:

- ✅ Plain functions with no need for classes
- ✅ Clean assertion syntax using `assert`
- ✅ Tests that align with a clear decision table
- ✅ Immediate readability and clarity without boilerplate

---

## 🧪 Decision Table Coverage

| Criteria / Test Case | TC1                    | TC2                  | TC3                         | TC4                      |
| -------------------- | ---------------------- | -------------------- | --------------------------- | ------------------------ |
| Username             | "admin"                | ""                   | "hacker!"                   | "admin"                  |
| Password             | "admin123"             | "admin123"           | "admin123"                  | "wrongpass"              |
| ¿Hace Login?         | ✅ login success       | ❌ username missing  | ❌ username format invalid  | ❌ incorrect password    |
| Business Rule (BR)   | BR1: valid credentials | BR2: username needed | BR3: username must be alnum | BR4: password must match |

---

## ⚖️ Drawbacks of `pytest`

Although `pytest` is very powerful and user-friendly, it comes with a few considerations:

- ❌ Not included in the standard library (requires installation)
- ❌ Can be overwhelming for beginners due to its advanced features and plugin system
- ❌ Test discovery can be confusing if file/function names aren't correct

---

## 🧠 Historical Context

- Introduced around **2004** to improve `unittest`
- Evolved from the `py` library, part of the testing ecosystem in Python
- Inspired by behavior-driven design and expressive syntax
- Preferred today in most modern Python projects due to its simplicity and power

➡️ See `test_login_utils.py` to explore decision-driven test cases using `pytest`.
