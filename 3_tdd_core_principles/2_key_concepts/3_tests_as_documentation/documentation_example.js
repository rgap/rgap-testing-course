// ✅ Example: Tests show how the function should behave — no comments required

// Imagine you're reading this test before seeing the actual function
function test_formatPrice_should_return_price_with_two_decimals_and_dollar_sign() {
  const result = formatPrice(5);
  if (result === "$5.00") {
    console.log("✅ formatPrice passed");
  } else {
    console.log("❌ formatPrice failed: got", result);
  }
}

// The test tells us:
// - The function is called formatPrice
// - It takes a number (price)
// - It returns a string with two decimals, prefixed with $

function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

test_formatPrice_should_return_price_with_two_decimals_and_dollar_sign();
