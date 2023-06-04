const {
  getConcessionByID,
  calculateTotalFromIDs,
} = require("../src/concessions");

const concessions = require("../data/concessions");

describe("this will test getConcessionByID", () => {
  it("should return a concession object with matching ID", () => {
    const input = "g9sZdG1hI";
    const actual = getConcessionByID(concessions, input);
    const expected = {
      id: "g9sZdG1hI",
      name: "Small Popcorn",
      priceInCents: 929,
    };
    expect(actual).toEqual(expected);
  });
});

describe("this will test getConcessionByID", () => {
  it("should check to see if object inputted is null", () => {
    const input = "IncorrectID";
    const actual = getConcessionByID(concessions, input);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("this will test calculateTotalFromIDs", () => {
  it("should give total cost of priceInCents from all concessions objects", () => {
    const input = ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD"];
    const actual = calculateTotalFromIDs(concessions, input);
    const expected = 2657;
    expect(actual).toEqual(expected);
  });
});

describe("this will test calculateTotalFromIDs", () => {
  it("should return 0 if ID param does not match concecessions IDs", () => {
    const input = "IncorrectID";
    const actual = calculateTotalFromIDs(concessions, input);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});