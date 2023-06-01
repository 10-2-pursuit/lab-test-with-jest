const concessions = require("../data/concessions.js");

const {
    getConcessionByID,
    calculateTotalFromIDs,
  } = require("../src/concessions.js");

describe("getConcessionByID", () => {
    test("Searching certain name in the data", () => {
      const actual = getConcessionByID(concessions, "g9sZdG1hI");
      const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };
      expect(actual).toStrictEqual(expected);
    });
    test("return null for failur", () => {
        const actual = getConcessionByID(concessions, "HELLLO");
        const expected = null;
        expect(actual).toStrictEqual(expected);
      });
});

describe("calculateTotalFromIDs", () => {
    test("calculate total from an array of IDs", () => {
      const actual = calculateTotalFromIDs(concessions, ["g9sZdG1hI", "0Qs9Yp2NL"]);
      const expected = 2857;
      expect(actual).toStrictEqual(expected);
    });
    test("Omitting false id from calculation", () => {
        const actual = calculateTotalFromIDs(concessions, ["g9sZdG1hI", "hI"]);
        const expected = 929;
        expect(actual).toStrictEqual(expected);
      });
});
