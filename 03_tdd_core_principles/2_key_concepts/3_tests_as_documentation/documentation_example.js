// ✅ Documentation-Oriented Tests for Login Function

// These tests explain how the login() function behaves —
// just by reading them, you understand the rules and usage.
// You don’t need the function’s internal code to guess its behavior.

// TC1: Valid credentials
// 🔍 Tells us that "admin"/"admin123" are valid,
// and successful logins return a string message.
function test_login_should_return_success_message_for_valid_credentials() {
  const result = login({ username: "admin", password: "admin123" });
  if (result === "✅ Login successful") {
    console.log("✅ TC1 Passed");
  } else {
    console.log("❌ TC1 Failed: got", result);
  }
}

// TC2: Missing username
// 🔍 Shows that username is required and checked before anything else.
function test_login_should_return_error_when_username_is_missing() {
  const result = login({ username: "", password: "admin123" });
  if (result === "❌ Missing username") {
    console.log("✅ TC2 Passed");
  } else {
    console.log("❌ TC2 Failed: got", result);
  }
}

// TC3: Missing password
// 🔍 Confirms that password is validated independently of the username.
function test_login_should_return_error_when_password_is_missing() {
  const result = login({ username: "admin", password: "" });
  if (result === "❌ Missing password") {
    console.log("✅ TC3 Passed");
  } else {
    console.log("❌ TC3 Failed: got", result);
  }
}

// TC4: Invalid credentials
// 🔍 Clarifies that invalid input returns a generic error, not system access.
function test_login_should_return_error_for_invalid_credentials() {
  const result = login({ username: "user", password: "1234" });
  if (result === "❌ Invalid username or password") {
    console.log("✅ TC4 Passed");
  } else {
    console.log("❌ TC4 Failed: got", result);
  }
}

// 🧠 This implementation was likely shaped by previous tests in TDD flow
function login({ username, password }) {
  if (!username) return "❌ Missing username";
  if (!password) return "❌ Missing password";
  if (username === "admin" && password === "admin123") {
    return "✅ Login successful";
  }
  return "❌ Invalid username or password";
}

// ▶️ Run All Tests
test_login_should_return_success_message_for_valid_credentials();
test_login_should_return_error_when_username_is_missing();
test_login_should_return_error_when_password_is_missing();
test_login_should_return_error_for_invalid_credentials();
