context("Actions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('Should pick a sentence', () => {
    cy.get("#container").contains(/\w+ \w+,.+\w+!/ms);
  });

  it('Gives a new sentence when "another?" is clicked', () => {
    cy.get('#container').then(($container) => {
      const firstSentence = $container.text();
      expect(firstSentence).to.match(/\w+ \w+,.+\w+!/ms);

      cy.get('#new-sentence').click();

      cy.get('#container').should(($container) => {
        const secondSentence = $container.text();
        expect(secondSentence).to.match(/\w+ \w+,.+\w+!/ms);

        expect(firstSentence).not.to.equal(secondSentence);
      })
    })
  });

  it("Turns to dogs when the konami code is entered", () => {
    const now = new Date();
    // On April first, konami will be there right away
    // This is bad, I know
    //TODO Real test that mocks out current date
    if (now.getMonth() !== 3 || now.getDate() !== 1) {
      cy.get("#sentence-icon").should("not.have.class", "konami");
    }

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
});
