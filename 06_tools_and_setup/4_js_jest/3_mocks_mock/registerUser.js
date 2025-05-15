// registerUser.js

const { sendWelcomeEmail } = require("./emailService");

function registerUser(userData) {
  if (!userData?.email) {
    throw new Error("Invalid user data");
  }

  const user = {
    id: Date.now(),
    email: userData.email,
    name: userData.name || "Anonymous",
  };

  sendWelcomeEmail(user);

  return user;
}

module.exports = registerUser;
