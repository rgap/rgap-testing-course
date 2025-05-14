// 🟡 REFACTOR PHASE: Includes optional discount code and tax rate

function calculateCartTotal(cart, options = {}) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = options.discountCode === "SAVE10" ? 0.1 * subtotal : 0;
  const tax = options.taxRate ? subtotal * options.taxRate : 0;
  return subtotal - discount + tax;
}

module.exports = calculateCartTotal;
