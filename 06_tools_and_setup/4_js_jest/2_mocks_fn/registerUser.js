// registerUser.js
// 🧾 Registers a user and triggers an external action like sending an email

function registerUser(userData, sendWelcomeEmail) {
  if (!userData?.email) {
    throw new Error("Invalid user data");
  }

  // Simulated saved user
  const user = {
    id: Date.now(),
    email: userData.email,
    name: userData.name || "Anonymous",
  };

  // Trigger a side-effect function (e.g., sending an email)
  sendWelcomeEmail(user);

  return user;
}

module.exports = registerUser;
