// ❌ Test-Last Example (Traditional approach)

// First write the code
function multiply(a, b) {
  return a * b;
}

// Then test manually — maybe forgotten or incomplete
function test_multiply_returns_correct_total() {
  const result = multiply(3, 4);
  if (result === 12) {
    console.log("✅ multiply(3, 4) passed");
  } else {
    console.log("❌ multiply(3, 4) failed: got", result);
  }
}

test_multiply_returns_correct_total();
