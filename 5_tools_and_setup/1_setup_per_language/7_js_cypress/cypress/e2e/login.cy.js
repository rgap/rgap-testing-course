describe("Login Form - Decision Table Tests", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("TC1: login succeeds with valid credentials", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get("#message").should("contain", "Login successful");
  });

  it("TC2: shows error when username is missing", () => {
    cy.get("#password").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get("#message").should("contain", "Username is required");
  });

  it("TC3: shows error when username has invalid characters", () => {
    cy.get("#username").type("hacker!");
    cy.get("#password").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get("#message").should("contain", "Invalid username format");
  });

  it("TC4: shows error when password is incorrect", () => {
    cy.get("#username").type("admin");
    cy.get("#password").type("wrongpass");
    cy.get("button[type='submit']").click();
    cy.get("#message").should("contain", "Incorrect password");
  });
});
