// ✅ Test-First Example (TDD)

// RED PHASE — write test first
function test_sum_returns_correct_total() {
  const result = sum(3, 4); // ❌ sum not yet defined
  if (result === 7) {
    console.log("✅ sum(3, 4) passed");
  } else {
    console.log("❌ sum(3, 4) failed: got", result);
  }
}

// GREEN PHASE — minimal code to pass
function sum(a, b) {
  return a + b;
}

test_sum_returns_correct_total();
