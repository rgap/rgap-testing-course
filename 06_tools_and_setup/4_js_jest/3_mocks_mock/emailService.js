// emailService.js
// ✉️ Simulates sending an email when a user registers

/**
 * This is the real implementation of the email sending logic.
 *
 * In production: This function is called to perform a side effect (e.g., sending an email).
 * In testing: This function is mocked using `jest.mock()` so the real logic (console.log)
 *             is NOT executed during tests.
 *
 * ➕ Benefit: Tests won't actually run side effects like sending real emails or printing logs,
 *            but you can still verify that the function was called and with what arguments.
 */

function sendWelcomeEmail(user) {
  console.log(`Sending welcome email to ${user.email}`);
  // 📝 In a real app, this is where you'd send a real email using a service like SendGrid or SES.
}

module.exports = { sendWelcomeEmail };
