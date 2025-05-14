# Early Testing Strategies

## 🔹 Manual Testing by Developers

Developers began writing their own test scripts or manual test cases:

- Functions were tested with actual business-like input/output.
- Assertions used temporarily via `if` or `assert` statements.
- Often deleted or forgotten after debugging.

### Example (Python):

```python
# Function under test: add tax to invoice amount
def add_tax(amount, rate):
    return round(amount * (1 + rate), 2)

# Manual test: verifying behavior
if add_tax(200.00, 0.18) != 236.00:
    print("❌ Test failed: Expected 236.00")
else:
    print("✅ Test passed")
```

---

## 🔹 Ad-Hoc Console Testing

Programs were run and results checked manually:

- Printed intermediate or final results with no pass/fail logic.
- Often used for debugging a single value or flow.

### Example (JavaScript):

```javascript
// Function under test: calculate final price after discount
function applyDiscount(price, discountPercent) {
  return +(price - price * (discountPercent / 100)).toFixed(2);
}

// Ad-hoc test in the console
console.log("🧪 Testing applyDiscount with $100 and 20%:", applyDiscount(100, 20)); // Expected: 80
```

---

## 🔹 Test Scripts (No Frameworks)

As reuse became common, developers began scripting manual tests:

- Hardcoded inputs/outputs, written once and reused.
- No `beforeEach`, teardown, or assertion libraries.

### Example (JavaScript):

```javascript
// Function under test: format customer full name
function formatName(firstName, lastName) {
  return `${lastName.toUpperCase()}, ${firstName}`;
}

// Basic test script
const output = formatName("Jane", "Doe");
const expected = "DOE, Jane";

if (output !== expected) {
  console.log(`❌ formatName test failed. Got: '${output}', expected: '${expected}'`);
} else {
  console.log("✅ formatName test passed");
}
```

---

### More realistic example with batch cases:

```javascript
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const testCases = [
  { input: "user@example.com", expected: true },
  { input: "bad-email@", expected: false },
  { input: "admin@mail.com", expected: true },
];

testCases.forEach(({ input, expected }) => {
  const result = validateEmail(input);
  if (result !== expected) {
    console.log(`❌ validateEmail('${input}') failed. Got ${result}, expected ${expected}`);
  } else {
    console.log(`✅ validateEmail('${input}') passed`);
  }
});
```

---

## 🔹 Emergence of Testing Culture

As these strategies became more common, teams began to:

- Share test files or shell scripts to verify expected behavior
- Add sample output/expected results to README files
- Refuse pull requests that didn’t include at least a manual test

This laid the groundwork for:

- ✅ First unit testing libraries (e.g., **JUnit** in 1997, **unittest** in Python 2.1)
- 🧪 Emergence of **assertions as functions** (`assertEqual`, etc.)
- 🔁 Repeatable test suites and automation
