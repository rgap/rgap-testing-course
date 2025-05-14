// ✅ Demonstrates refactoring safely after passing tests

function test_greet_returns_correct_message() {
  const result = greet("Ada");
  console.assert(result === "Hello, Ada!", `❌ Expected 'Hello, Ada!', got '${result}'`);
  console.log("✅ test_greet_returns_correct_message passed");
}

// Initial working version (Green phase)
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// Refactored version — cleaner and modern
function greet(name) {
  return `Hello, ${name}!`;
}

test_greet_returns_correct_message();
