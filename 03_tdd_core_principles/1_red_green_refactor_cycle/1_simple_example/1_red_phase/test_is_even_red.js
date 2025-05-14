// 🔴 RED PHASE: Failing test — isEven is not defined yet

function test_isEven_should_return_true_for_even_number() {
  const result = isEven(4); // ❌ isEven is not defined yet
  if (result === true) {
    console.log("✅ isEven(4) passed");
  } else {
    console.log("❌ isEven(4) failed");
  }
}

test_isEven_should_return_true_for_even_number();
