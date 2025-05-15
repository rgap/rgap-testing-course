// registerUser.test.js
// ✅ Unit test using jest.fn() for the sendWelcomeEmail callback

const registerUser = require("./registerUser");

describe("registerUser", () => {
  test("registers a user and triggers sendWelcomeEmail callback", () => {
    const sendWelcomeEmail = jest.fn(); // 🧪 mock function

    const input = { email: "user@example.com", name: "username" };
    const result = registerUser(input, sendWelcomeEmail);

    // ✅ Check user returned
    expect(result).toMatchObject({
      email: "user@example.com",
      name: "username",
    });
    expect(result).toHaveProperty("id");

    // ✅ Check mock was called correctly
    expect(sendWelcomeEmail).toHaveBeenCalledTimes(1);
    expect(sendWelcomeEmail).toHaveBeenCalledWith(result); // called with the user object
  });

  test("throws if email is missing", () => {
    const sendWelcomeEmail = jest.fn();
    expect(() => registerUser({}, sendWelcomeEmail)).toThrow("Invalid user data");
  });
});
