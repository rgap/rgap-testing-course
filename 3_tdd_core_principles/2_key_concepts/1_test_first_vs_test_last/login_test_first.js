// ✅ Test-First Example: Login Feature using TDD Principles

// Each test below represents a specific behavior we expect from the login function.
// These tests are written BEFORE the login function is implemented — this is the heart of TDD.

// 🔁 IMPORTANT: Every time you change the `login()` function,
// you MUST rerun all test cases to ensure nothing broke (this is part of the TDD cycle).

// RED — Step 1: Write a failing test first

// 🔴 TC1: Successful login with valid credentials
// - The "happy path" — the expected correct behavior
function test_login_should_return_success_for_valid_credentials() {
  const result = login("admin", "admin123");
  if (result === "✅ Login successful") {
    console.log("✅ Passed: valid credentials");
  } else {
    console.log("❌ Failed: expected success, got", result);
  }
}

// 🔴 TC2: Missing username
// - Helps catch null/empty input edge cases early
function test_login_should_fail_if_username_is_missing() {
  const result = login("", "admin123");
  if (result === "❌ Missing username") {
    console.log("✅ Passed: missing username");
  } else {
    console.log("❌ Failed: expected missing username error, got", result);
  }
}

// 🔴 TC3: Missing password
// - Prevents users from logging in with just a username
function test_login_should_fail_if_password_is_missing() {
  const result = login("admin", "");
  if (result === "❌ Missing password") {
    console.log("✅ Passed: missing password");
  } else {
    console.log("❌ Failed: expected missing password error, got", result);
  }
}

// 🔴 TC4: Invalid credentials
// - Ensures security: rejects wrong usernames or passwords
function test_login_should_fail_with_invalid_credentials() {
  const result = login("user", "wrongpass");
  if (result === "❌ Invalid username or password") {
    console.log("✅ Passed: invalid credentials");
  } else {
    console.log("❌ Failed: expected invalid credentials error, got", result);
  }
}

// GREEN — Step 2: Implement just enough to make all tests pass
// - Do not add features the tests don't demand.
// - After any change here, RE-RUN all tests to confirm nothing broke.
function login(username, password) {
  if (!username) return "❌ Missing username"; // TC2
  if (!password) return "❌ Missing password"; // TC3
  if (username === "admin" && password === "admin123") {
    // TC1
    return "✅ Login successful";
  }
  return "❌ Invalid username or password"; // TC4
}

// ✅ Step 3: Run All Tests (manually, or using a test runner)
test_login_should_return_success_for_valid_credentials();
test_login_should_fail_if_username_is_missing();
test_login_should_fail_if_password_is_missing();
test_login_should_fail_with_invalid_credentials();

// ✅ Step 4: Refactor (optional) — If all tests are green, improve structure or naming
// Then rerun ALL tests again to confirm behavior didn't change
