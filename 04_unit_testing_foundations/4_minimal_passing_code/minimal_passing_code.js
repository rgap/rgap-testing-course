// ✅ Demonstrates writing the minimal code required to pass a test

function test_getAnswer_returns_42() {
  const result = getAnswer();
  console.assert(result === 42, `❌ Expected 42, got ${result}`);
  console.log("✅ test_getAnswer_returns_42 passed");
}

// Minimal implementation to pass the test
function getAnswer() {
  return 42; // Just enough to make the test pass
}

test_getAnswer_returns_42();
