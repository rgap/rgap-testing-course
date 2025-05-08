// ❌ Simulates a realistic Big-Bang integration failure in a web app

// Backend: returns user data from a database
function fetchUserFromDB(userId) {
  // 🐞 Backend returns inconsistent structure — missing 'name'
  return {
    id: userId,
    username: "johndoe", // but no 'name' property
  };
}

// Middleware: formats user for frontend (never tested in isolation)
function prepareUserData(rawUser) {
  // ❌ Assumes 'name' is always present
  return {
    id: rawUser.id,
    name: rawUser.name.trim(), // 💥 will throw if 'name' is undefined
    isGuest: false,
  };
}

// Frontend Renderer: shows user greeting
function renderGreeting(user) {
  return `<h1>Welcome, ${user.name.toUpperCase()}!</h1>`; // 💥 again: assumes 'name' exists
}

// Big-Bang Integration Test (done only at end)
// This simulates a scenario where all components (backend, middleware, frontend)
// are integrated at once

try {
  const rawUser = fetchUserFromDB(1);
  const formattedUser = prepareUserData(rawUser);
  const html = renderGreeting(formattedUser);

  console.log(html);
} catch (err) {
  console.log("❌ Integration failed:", err.message);
}
