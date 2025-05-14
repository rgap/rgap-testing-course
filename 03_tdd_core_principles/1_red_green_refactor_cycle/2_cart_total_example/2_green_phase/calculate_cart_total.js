// 🟢 GREEN PHASE: Minimal working cart total logic

function calculateCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

module.exports = calculateCartTotal;
