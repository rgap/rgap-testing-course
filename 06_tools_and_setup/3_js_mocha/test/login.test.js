/**
🧪 Decision Table for Login

| Criteria / Test Case     | TC1                        | TC2                  | TC3                              | TC4                                |
|--------------------------|----------------------------|----------------------|----------------------------------|------------------------------------|
| Username                 | "admin"                    | ""                   | "hacker!"                        | "admin"                            |
| Password                 | "admin123"                 | "admin123"           | "admin123"                       | "wrongpass"                        |
| ¿Hace Login?             | ✅ login success           | ❌ username missing  | ❌ username format invalid       | ❌ incorrect password              |
| Business Rule (BR)       | BR1: valid credentials     | BR2: username needed | BR3: username must be alnum      | BR4: password must match           |
*/

import { expect } from "chai";
import { login } from "../login.js";

describe("Login Form", () => {
  it("TC1: should log in successfully with valid credentials", () => {
    // BR1: Valid credentials
    const result = login("admin", "admin123");
    expect(result).to.deep.equal({ status: "success", user: "admin" });
  });

  it("TC2: should throw error when username is missing", () => {
    // BR2: Username is required
    expect(() => login("", "admin123")).to.throw("Invalid username format");
  });

  it("TC3: should throw error for invalid characters in username", () => {
    // BR3: Username must be alphanumeric
    expect(() => login("hacker!", "admin123")).to.throw("Invalid username format");
  });

  it("TC4: should throw error when password is incorrect", () => {
    // BR4: Password must match
    expect(() => login("admin", "wrongpass")).to.throw("Incorrect password");
  });
});
