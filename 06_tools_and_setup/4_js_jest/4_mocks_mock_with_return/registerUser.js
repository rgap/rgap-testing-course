const { sendWelcomeEmail } = require("./emailService");

function registerUser(userData) {
  if (!userData?.email) throw new Error("Invalid user data");

  const user = {
    id: Date.now(),
    email: userData.email,
    name: userData.name || "Anonymous",
  };

  const emailResult = sendWelcomeEmail(user);

  return {
    user,
    emailResult, // useful for logging, retries, etc.
  };
}

module.exports = registerUser;
