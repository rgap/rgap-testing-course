// Simulated real email service

function sendWelcomeEmail(user) {
  // In real apps, this might be an API call to an external service
  return {
    success: true,
    messageId: "mocked-uuid-123",
    to: user.email,
  };
}

module.exports = { sendWelcomeEmail };
