/**
Decision Table for Login

| Criteria / Test Case     | TC1                        | TC2                  | TC3                              | TC4                                |
|--------------------------|----------------------------|----------------------|----------------------------------|------------------------------------|
| Username                 | "admin"                    | ""                   | "hacker!"                        | "admin"                            |
| Password                 | "admin123"                 | "admin123"           | "admin123"                       | "wrongpass"                        |
| ¿Hace Login?             | login success              | username missing     | username format invalid          | incorrect password                 |
| Business Rule (BR)       | BR1: valid credentials     | BR2: username needed | BR3: username must be alnum      | BR4: password must match           |
*/

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import LoginComponent from "./LoginComponent";

describe("LoginComponent - Decision Table Tests", () => {
  it("TC1: should login successfully with valid credentials", () => {
    const handleLogin = jest.fn();
    render(<LoginComponent onLogin={handleLogin} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: "admin" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "admin123" } });
    fireEvent.click(screen.getByText(/login/i));

    expect(handleLogin).toHaveBeenCalledWith({ status: "success", user: "admin" });
  });

  it("TC2: should show error for missing username", () => {
    render(<LoginComponent onLogin={() => {}} />);

    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "admin123" } });
    fireEvent.click(screen.getByText(/login/i));

    expect(screen.getByRole("alert")).toHaveTextContent("Username is required");
  });

  it("TC3: should show error for invalid username format", () => {
    render(<LoginComponent onLogin={() => {}} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: "hacker!" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "admin123" } });
    fireEvent.click(screen.getByText(/login/i));

    expect(screen.getByRole("alert")).toHaveTextContent("Invalid username format");
  });

  it("TC4: should show error for wrong password", () => {
    render(<LoginComponent onLogin={() => {}} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: "admin" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "wrongpass" } });
    fireEvent.click(screen.getByText(/login/i));

    expect(screen.getByRole("alert")).toHaveTextContent("Incorrect password");
  });
});
