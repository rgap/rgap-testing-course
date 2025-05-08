# ✅ Fixed version — prevents crash by checking divisor

def divide(a, b):
    if b == 0:
        return "Error: Division by zero is not allowed."
    return a / b


# Example usage
print("10 / 2 =", divide(10, 2))
print("10 / 0 =", divide(10, 0))
