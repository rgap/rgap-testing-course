// ✅ Test-Driven Interface Example
// Here, the shape of the function was determined by the test we wrote first

// TC1: Login with valid credentials (interface defined by test)
// - The test drives the shape: login({ username, password })
// - Forces the function to accept a single object as input
function test_login_should_succeed_when_given_valid_input_object() {
  const result = login({ username: "admin", password: "admin123" });
  if (result === "✅ Login successful") {
    console.log("✅ Passed: interface with object input works");
  } else {
    console.log("❌ Failed: got", result);
  }
}

// TC2: Missing username — test requires object destructuring
function test_login_should_fail_if_username_is_missing() {
  const result = login({ username: "", password: "admin123" });
  if (result === "❌ Missing username") {
    console.log("✅ Passed: empty username detected");
  } else {
    console.log("❌ Failed: got", result);
  }
}

// TC3: Missing password — again, driven by object structure
function test_login_should_fail_if_password_is_missing() {
  const result = login({ username: "admin", password: "" });
  if (result === "❌ Missing password") {
    console.log("✅ Passed: empty password detected");
  } else {
    console.log("❌ Failed: got", result);
  }
}

// TC4: Invalid credentials — the logic is shaped by expectations in test
function test_login_should_fail_with_invalid_credentials() {
  const result = login({ username: "user", password: "123" });
  if (result === "❌ Invalid username or password") {
    console.log("✅ Passed: invalid credentials handled");
  } else {
    console.log("❌ Failed: got", result);
  }
}

// ✅ The function was built to satisfy the structure demanded by tests
function login({ username, password }) {
  if (!username) return "❌ Missing username";
  if (!password) return "❌ Missing password";
  if (username === "admin" && password === "admin123") {
    return "✅ Login successful";
  }
  return "❌ Invalid username or password";
}

// 🔁 Run All Tests
test_login_should_succeed_when_given_valid_input_object();
test_login_should_fail_if_username_is_missing();
test_login_should_fail_if_password_is_missing();
test_login_should_fail_with_invalid_credentials();
