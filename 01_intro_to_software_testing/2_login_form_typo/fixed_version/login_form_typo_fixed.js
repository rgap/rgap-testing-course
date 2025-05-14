// ✅ Bug fixed — logic uses correct field name 'username'

function login(formData) {
  if (!formData.username || !formData.password) {
    console.log("❌ Login failed: Missing username or password.");
    return;
  }
  console.log("✅ Login successful");
}

// Manual input simulation
const form = { username: "admin", password: "1234" };
login(form); // ✅ Successful login
