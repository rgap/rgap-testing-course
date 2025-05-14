const isEven = require("./is_even.js");

function test_isEven_should_return_true_for_even_number() {
  const result = isEven(4);
  if (result === true) {
    console.log("✅ isEven(4) passed");
  } else {
    console.log("❌ isEven(4) failed");
  }
}

test_isEven_should_return_true_for_even_number();
