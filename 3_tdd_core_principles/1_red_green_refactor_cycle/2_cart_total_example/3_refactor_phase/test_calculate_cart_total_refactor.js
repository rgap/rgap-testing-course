const calculateCartTotal = require("./calculate_cart_total_refactored.js");

const cart = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Socks", price: 5, quantity: 3 },
];

function test_with_discount_code() {
  const result = calculateCartTotal(cart, { discountCode: "SAVE10" });
  console.log(result === 49.5 ? "✅ Discount code passed" : "❌ Discount code failed: got " + result);
}

function test_with_tax() {
  const result = calculateCartTotal(cart, { taxRate: 0.18 });
  console.log(result === 64.9 ? "✅ Tax calculation passed" : "❌ Tax calculation failed: got " + result);
}

function test_with_both_discount_and_tax() {
  const result = calculateCartTotal(cart, { discountCode: "SAVE10", taxRate: 0.18 });
  console.log(result === 58.41 ? "✅ Combined discount and tax passed" : "❌ Combined calculation failed: got " + result);
}

test_with_discount_code();
test_with_tax();
test_with_both_discount_and_tax();
