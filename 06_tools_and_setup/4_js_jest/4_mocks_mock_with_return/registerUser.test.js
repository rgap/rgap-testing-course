const registerUser = require("./registerUser");
const { sendWelcomeEmail } = require("./emailService");

jest.mock("./emailService", () => ({
  sendWelcomeEmail: jest.fn(),
}));

test("calls sendWelcomeEmail and returns result object", () => {
  const mockResponse = {
    success: true,
    messageId: "test-msg-001",
    to: "user@example.com",
  };

  sendWelcomeEmail.mockReturnValue(mockResponse);

  const input = { email: "user@example.com", name: "Test User" };
  const result = registerUser(input);

  expect(sendWelcomeEmail).toHaveBeenCalledWith(expect.objectContaining({ email: input.email }));
  expect(result).toEqual({
    user: expect.objectContaining({ email: input.email }),
    emailResult: mockResponse,
  });
});
