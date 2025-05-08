// ✅ TDD-style test using assertions only

function isValidLogin(email, password) {
  return email.includes("@") && password.length >= 8;
}

function test_valid_login_returns_true() {
  const result = isValidLogin("user@example.com", "12345678");
  console.log(result === true ? "✅ Valid login passed" : "❌ Valid login failed");
}

function test_invalid_email_returns_false() {
  const result = isValidLogin("userexample.com", "12345678");
  console.log(result === false ? "✅ Invalid email test passed" : "❌ Invalid email test failed");
}

function test_short_password_returns_false() {
  const result = isValidLogin("user@example.com", "123");
  console.log(result === false ? "✅ Short password test passed" : "❌ Short password test failed");
}

// Run tests
test_valid_login_returns_true();
test_invalid_email_returns_false();
test_short_password_returns_false();
