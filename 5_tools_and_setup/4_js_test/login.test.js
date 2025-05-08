/**
Decision Table for Login

| Criteria / Test Case     | TC1                        | TC2                  | TC3                              | TC4                                |
|--------------------------|----------------------------|----------------------|----------------------------------|------------------------------------|
| Username                 | "admin"                    | ""                   | "hacker!"                        | "admin"                            |
| Password                 | "admin123"                 | "admin123"           | "admin123"                       | "wrongpass"                        |
| ¿Hace Login?             | login success              | username missing     | username format invalid          | incorrect password                 |
| Business Rule (BR)       | BR1: valid credentials     | BR2: username needed | BR3: username must be alnum      | BR4: password must match           |
*/

const { login } = require("./login");

describe("Login Function - Decision Table Tests", () => {
  test("TC1: should login successfully with valid credentials", () => {
    const result = login("admin", "admin123");
    expect(result).toEqual({ status: "success", user: "admin" });
  });

  test("TC2: should fail when username is missing", () => {
    expect(() => login("", "admin123")).toThrow("Invalid username format");
  });

  test("TC3: should fail when username has invalid characters", () => {
    expect(() => login("hacker!", "admin123")).toThrow("Invalid username format");
  });

  test("TC4: should fail when password is incorrect", () => {
    expect(() => login("admin", "wrongpass")).toThrow("Incorrect password");
  });
});
