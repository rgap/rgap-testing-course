// ✅ Write the test BEFORE implementing the function

// 🔴 Test first — this will fail initially
function test_capitalize_returns_string_with_first_letter_uppercase() {
  const result = capitalize("hello"); // ❌ capitalize not yet defined
  console.assert(result === "Hello", `❌ Expected 'Hello', got '${result}'`);
}

test_capitalize_returns_string_with_first_letter_uppercase();

// 🟢 Later: define the function to make the test pass
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
