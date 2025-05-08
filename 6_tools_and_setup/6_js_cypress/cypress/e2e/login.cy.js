describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("TC1: should log in successfully with valid credentials", () => {
    // BR1: Valid credentials
    cy.get("#username").type("admin");
    cy.get("#password").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get("#message").should("contain", "Login successful");
  });

  it("TC2: should show an error when username is missing", () => {
    // BR2: Username is required
    cy.get("#password").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get("#message").should("contain", "Username is required");
  });

  it("TC3: should show an error for invalid characters in username", () => {
    // BR3: Username must be alphanumeric
    cy.get("#username").type("hacker!");
    cy.get("#password").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get("#message").should("contain", "Invalid username format");
  });

  it("TC4: should show an error when password is incorrect", () => {
    // BR4: Password must match
    cy.get("#username").type("admin");
    cy.get("#password").type("wrongpass");
    cy.get("button[type='submit']").click();
    cy.get("#message").should("contain", "Incorrect password");
  });
});
