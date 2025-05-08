// ✅ BDD-style test using describe/it and expect (mocked)

function isValidLogin(email, password) {
  return email.includes("@") && password.length >= 8;
}

function expect(received) {
  return {
    toBe(expected) {
      if (received === expected) {
        console.log("✅ Passed");
      } else {
        console.log(`❌ Failed: expected ${expected}, got ${received}`);
      }
    },
  };
}

function describe(desc, fn) {
  console.log("\n" + desc);
  fn();
}

function it(desc, fn) {
  process.stdout.write("  - " + desc + ": ");
  fn();
}

describe("Login Validation", () => {
  it("should return true for valid email and password", () => {
    expect(isValidLogin("user@example.com", "12345678")).toBe(true);
  });

  it("should return false for invalid email", () => {
    expect(isValidLogin("userexample.com", "12345678")).toBe(false);
  });

  it("should return false for short password", () => {
    expect(isValidLogin("user@example.com", "123")).toBe(false);
  });
});
