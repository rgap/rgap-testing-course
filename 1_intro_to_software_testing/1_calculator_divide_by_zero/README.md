# Calculator Divide-by-Zero Example

This folder illustrates a classic bug in simple programs: dividing a number by zero.

## 🐞 Bug Description

In early software, basic input validation was often overlooked. For example, a calculator app might crash when a user tries to divide by 0, because the developer didn’t handle that case.

### Bug Behavior:

```python
result = divide(10, 0)  # ❌ raises ZeroDivisionError
```

## ✅ Fix Strategy

We add a condition to check whether the divisor is zero before performing the division.

### Fixed Behavior:

```python
if b == 0:
    return "Error: Division by zero is not allowed."
```

## 🔎 Manual Test Cases (No libraries)

We manually call the function with different inputs and print the outputs to check correctness.

## 📁 Folder Structure

```
calculator_divide_by_zero/
├── buggy_version/
│   └── calculator_divide_by_zero.py
├── fixed_version/
│   └── calculator_divide_by_zero_fixed.py
└── manual_test/
    └── test_calculator_divide.py
```

Each script runs independently and prints expected and actual results for educational clarity.
