context("Actions", () => {
  it('Should pick a sentence', () => {
    cy.visit("/");
    cy.get("#container").contains(/\w+ \w+,.+\w+!/ms);
  });

  it('Gives a new sentence when "another?" is clicked', () => {
    cy.visit("/");
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

  it("Turns to dogs when the Konami code is entered", () => {
    cy.clock();
    cy.visit("/");

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
});
