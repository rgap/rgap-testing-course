// ✅ Demonstrates the Arrange-Act-Assert (AAA) pattern in a unit test

function greet(name) {
  return `Hello, ${name}!`;
}

function test_greet_returns_proper_greeting() {
  // Arrange
  const name = "Ada";

  // Act
  const result = greet(name);

  // Assert
  const expected = "Hello, Ada!";
  console.assert(result === expected, `❌ Expected '${expected}', but got '${result}'`);
  console.log("✅ test_greet_returns_proper_greeting passed");
}

test_greet_returns_proper_greeting();
