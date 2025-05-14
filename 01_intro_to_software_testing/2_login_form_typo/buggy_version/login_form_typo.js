// ❌ Bug: logic checks the wrong field name ('userame')

function login(formData) {
  // Typo here — should be 'username'
  if (!formData.userame || !formData.password) {
    console.log("❌ Login failed: Missing username or password.");
    return;
  }
  console.log("✅ Login successful");
}

// Manual input simulation
const form = { username: "admin", password: "1234" }; // correct fields
login(form); // ❌ Still fails due to the typo in the function
