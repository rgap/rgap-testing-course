const USERS = [{ username: "admin", password: "admin123" }];

function isValidUsernameFormat(username) {
  return typeof username === "string" && /^[a-zA-Z0-9]+$/.test(username) && username.length >= 3;
}

function isValidPasswordFormat(password) {
  return typeof password === "string";
}

function findUser(username) {
  return USERS.find(user => user.username.toLowerCase() === username.toLowerCase());
}

function login(username, password) {
  if (!isValidUsernameFormat(username)) {
    throw new Error("Invalid username format");
  }

  if (!isValidPasswordFormat(password)) {
    throw new Error("Invalid password format");
  }

  const user = findUser(username);
  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Incorrect password");
  }

  return { status: "success", user: user.username };
}

module.exports = { login };
