// ✅ Demonstrates various assertion types used in unit tests

// Equality assertion
function sum(a, b) {
  return a + b;
}
console.assert(sum(2, 3) === 5, "❌ sum(2, 3) should equal 5");

// Boolean assertion
const isValid = true;
console.assert(isValid === true, "❌ isValid should be true");

// String inclusion assertion
const word = "apple";
console.assert(word.includes("app"), "❌ 'apple' should include 'app'");

// Exception assertion
function riskyFunction() {
  throw new Error("Boom!");
}

try {
  riskyFunction();
  console.assert(false, "❌ Expected riskyFunction to throw");
} catch (err) {
  console.assert(true, "✅ Exception was caught as expected");
}

console.log("✅ All assertions executed");
