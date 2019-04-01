context("Actions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Turns to dogs when the konami code is entered", () => {
    cy.get("#sentence-icon").should("not.have.class", "konami");

    cy.press([
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a"
    ]);

    cy.get("#sentence-icon").should("have.class", "konami");
  });

  it("Should pick a sentence", () => {
    cy.get("#container").contains(/\w+ \w+,.+\w+!/ms);
  });
});
