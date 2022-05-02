// https://docs.cypress.io/api/table-of-contents

describe("Open site", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get(".textInput").should("have.value", "# hello world");
  });
});

describe("Check input", () => {
  it("Add some text in textInput", () => {
    cy.get(".textInput").type("\n\n---\n\n* One\n* Two\n* Three");
    cy.contains("One");
    cy.contains("Two");
    cy.contains("Three");
  });

  it("Add special characters", () => {
    cy.get(".textInput").type("\n\nääåéïüþëúøøó©\n\nëëëëëëËËË");
    cy.contains("úøøó©");
  });

  it("Add cite", () => {
    cy.get(".textInput").type("\n> Hello this is a cite");
    cy.get("blockquote")
      .should("be.visible")
      .and("not.contain", ">")
      .contains("Hello this is a cite");
  });

  it("Add bold text with **", () => {
    cy.get(".textInput").type("\n\n**This is a bold text**");
    cy.get("strong").should("have.text", "This is a bold text");
  });

  it("Add bold text with __", () => {
    cy.get(".textInput").type("\n\n__This is a bold text__");
    // cy.get("strong").should("have.text", "this is a bold text");
  });

  it("Add bold between regular text with **", () => {
    cy.get(".textInput").type(
      "\n\nHello **this is a bold text** and that's it"
    );
    // cy.get("strong").should("have.text", "this is a bold text");
  });

  it("Add bold between regular text with __", () => {
    cy.get(".textInput").type(
      "\n\nHello __this is a bold text__ and that's it"
    );
    // cy.get("strong").should("have.text", "This is a bold text");
  });

  it("Add italic text with *", () => {
    cy.get(".textInput").type("\n\n*This is an italic text*");
    cy.get("em").should("have.text", "This is an italic text");
  });

  it("Add italic text with _", () => {
    cy.get(".textInput").type("\n\n_This is an italic text_");
    // cy.get("em").should("have.text", "This is an italic text");
  });

  it("Add italic between regular text with *", () => {
    cy.get(".textInput").type(
      "\n\nHello *this is an italic text* and that's it"
    );
    // cy.get("em").should("have.text", "this is an italic text");
  });

  it("Add italic between regular text with _", () => {
    cy.get(".textInput").type(
      "\n\nHello _this is an italic text_ and that's it"
    );
    // cy.get("em").should("have.text", "this is an italic text");
  });
});

describe("Upload markdown", () => {
  it("Upload file", () => {
    cy.get("input[type=file]").attachFile("example.md");
  });

  it("Check list", () => {
    cy.contains("Cypress");
    cy.contains("Vuejs");
  });

  it("Check blockquote", () => {
    cy.get("blockquote")
      .should("be.visible")
      .and("not.contain", ">")
      .contains("This is a blockquote");
  });
});
