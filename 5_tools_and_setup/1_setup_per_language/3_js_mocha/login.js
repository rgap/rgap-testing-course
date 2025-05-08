const USERS = [{ username: "admin", password: "admin123" }];

export function isValidUsernameFormat(username) {
  return typeof username === "string" && /^[a-zA-Z0-9]+$/.test(username) && username.length >= 3;
}

export function isValidPasswordFormat(password) {
  return typeof password === "string";
}

export function findUser(username) {
  return USERS.find(user => user.username.toLowerCase() === username.toLowerCase());
}

export function login(username, password) {
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

  // ✅ Happy path
  return { status: "success", user: user.username };
}
