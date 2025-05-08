// 🔴 RED PHASE: Failing test — calculateCartTotal is not defined yet

function test_cart_total_basic_items() {
  const cart = [
    { name: "Shirt", price: 20, quantity: 2 },
    { name: "Socks", price: 5, quantity: 3 },
  ];
  const result = calculateCartTotal(cart); // ❌ not defined yet
  if (result === 55) {
    console.log("✅ Cart total passed");
  } else {
    console.log("❌ Cart total failed: got", result);
  }
}

test_cart_total_basic_items();
