// registerUser.test.js

const registerUser = require("./registerUser");
const emailService = require("./emailService");

// 🔁 Replace real implementation with a mock
jest.mock("./emailService", () => ({
  sendWelcomeEmail: jest.fn(),
}));

describe("registerUser with mocked module", () => {
  test("registers a user and calls sendWelcomeEmail", () => {
    const input = { email: "user@example.com", name: "username" };

    const result = registerUser(input);

    expect(result).toMatchObject({
      email: "user@example.com",
      name: "username",
    });

    expect(emailService.sendWelcomeEmail).toHaveBeenCalledTimes(1);
    expect(emailService.sendWelcomeEmail).toHaveBeenCalledWith(result);
  });

  test("throws if email is missing", () => {
    expect(() => registerUser({})).toThrow("Invalid user data");
  });
});
