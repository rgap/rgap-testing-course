# ❌ Buggy version — crashes if dividing by zero

def divide(a, b):
    return a / b  # no check for division by zero


# This will cause a ZeroDivisionError
result = divide(10, 0)
print("Result:", result)
