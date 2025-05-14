// 🟡 REFACTOR PHASE:
const isEven = require("../2_green_phase/is_even.js");

function test_isEven_should_return_true_for_even_number() {
  const result = isEven(4);
  console.log(result === true ? "✅ isEven(4) passed" : "❌ isEven(4) failed");
}

function test_isEven_should_return_false_for_odd_number() {
  const result = isEven(3);
  console.log(result === false ? "✅ isEven(3) passed" : "❌ isEven(3) failed");
}

test_isEven_should_return_true_for_even_number();
test_isEven_should_return_false_for_odd_number();
