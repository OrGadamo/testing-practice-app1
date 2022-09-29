describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });
  it("check h1 red element content", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="children_txt"]').contains("Hello Children");
  });
});
describe("children button test", () => {
  it("check if button exist", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="children-button"]');
  });
  it("check button class", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="children-button"]').should(
      "have.class",
      "button-style"
    );
  });
  it("should have style", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="children-button"]').should(
      "have.css",
      "background-color",
      "rgb(97, 97, 233)"
    );
  });
  it("check button text", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="children-button"]').contains("Get Children");
  });
});
describe("tests for input element", () => {
  before(() => {
    cy.visit("/");
  });
  it("check for input", () => {
    cy.get('[data-testid="name_test_input"]');
  });
  it("check input typeable", () => {
    cy.get('[data-testid="name_test_input"]').type("Or Gadamo");
  });
});
describe("test for submit button", () => {
  it("check if button exist", () => {
    cy.get('[data-testid="submit_btn_test"]');
  });
  it("check no Input button click event", () => {
    cy.get('[data-testid="submit_btn_test"]').click();
    cy.get('[data-testid="h1_welcome_message"]').should("not.exist");
  });
  it("check with Input button click event", () => {
    cy.get('[data-testid="name_test_input"]').type("Or Gadamo");
    cy.get('[data-testid="submit_btn_test"]').click();
    cy.get('[data-testid="h1_welcome_message"]').contains("Hello Or Gadamo");
  });
});
