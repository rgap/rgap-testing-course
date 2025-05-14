# Manual test case for the fixed calculator

from fixed_version.calculator_divide_by_zero_fixed import divide

print("Manual Test Case 1: divide(10, 2)")
print("Expected: 5.0")
print("Actual:", divide(10, 2))
print("---")

print("Manual Test Case 2: divide(10, 0)")
print("Expected: Error message")
print("Actual:", divide(10, 0))
