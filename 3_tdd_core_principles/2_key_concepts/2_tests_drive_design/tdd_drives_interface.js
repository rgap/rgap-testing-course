// ✅ Example: Tests shape how the function should behave and what it returns

// Step 1: Start with a test describing expected behavior
function test_formatUser_should_return_full_name_string() {
  const user = { firstName: "Ada", lastName: "Lovelace" };
  const result = formatUser(user); // ❌ formatUser not defined yet
  if (result === "Ada Lovelace") {
    console.log("✅ formatUser passed");
  } else {
    console.log("❌ formatUser failed: got", result);
  }
}

// Step 2: Write minimal implementation based on test
function formatUser(user) {
  return `${user.firstName} ${user.lastName}`;
}

// Run the test
test_formatUser_should_return_full_name_string();
