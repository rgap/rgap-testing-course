// ✅ ATDD-style: Simulates Given/When/Then acceptance criteria in code

// System under test
function login(email, password) {
  if (!email.includes("@") || password.length < 8) {
    return { success: false, message: "Invalid credentials" };
  }
  return { success: true, message: "Login successful" };
}

// Acceptance Scenario
function acceptanceTest_Login_with_valid_credentials() {
  // Given a registered user with correct credentials
  const email = "user@example.com";
  const password = "strongpass";

  // When the user attempts to login
  const result = login(email, password);

  // Then they should see a success message
  if (result.success && result.message === "Login successful") {
    console.log("✅ Scenario passed: Valid login");
  } else {
    console.log("❌ Scenario failed: Valid login");
  }
}

function acceptanceTest_Login_with_invalid_email() {
  const email = "userexample.com";
  const password = "strongpass";

  const result = login(email, password);
  if (!result.success && result.message === "Invalid credentials") {
    console.log("✅ Scenario passed: Invalid email");
  } else {
    console.log("❌ Scenario failed: Invalid email");
  }
}

// Run acceptance scenarios
acceptanceTest_Login_with_valid_credentials();
acceptanceTest_Login_with_invalid_email();
