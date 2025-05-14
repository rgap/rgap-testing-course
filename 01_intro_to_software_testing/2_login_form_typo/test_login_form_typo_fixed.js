// ✅ Self-contained test cases for fixed login logic

function login(formData) {
  if (!formData.username || !formData.password) {
    console.log("❌ Login failed: Missing username or password.");
    return;
  }
  console.log("✅ Login successful");
}

function testLoginCorrectFields() {
  const form = { username: "user", password: "123" };
  console.log("Test with correct fields:");
  login(form);
}

function testLoginMissingUsername() {
  const form = { password: "123" };
  console.log("Test with missing username:");
  login(form);
}

function testLoginMissingPassword() {
  const form = { username: "user" };
  console.log("Test with missing password:");
  login(form);
}

// Run all tests
testLoginCorrectFields();
testLoginMissingUsername();
testLoginMissingPassword();
