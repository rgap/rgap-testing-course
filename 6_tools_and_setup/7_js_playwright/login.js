const USERS = [{ username: "admin", password: "admin123" }];

function isValidUsernameFormat(username) {
  return /^[a-zA-Z0-9]+$/.test(username) && username.length >= 3;
}

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (!username) return (message.textContent = "Username is required");
  if (!isValidUsernameFormat(username)) return (message.textContent = "Invalid username format");

  const user = USERS.find(u => u.username === username);
  if (!user) return (message.textContent = "User not found");

  if (user.password !== password) return (message.textContent = "Incorrect password");

  message.textContent = "Login successful";
});
