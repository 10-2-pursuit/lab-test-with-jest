const { 
    getConcessionByID,
    calculateTotalFromIDs 
} = require("../src/concessions");

const concessions = require("../data/concessions.js");


describe("getConcessionByID()", () => {
    test("it returns a concession object by ID", () => {
      const actual = getConcessionByID(concessions, concessions[0].id);
      const expected = concessions[0];
      expect(actual).toBe(expected);
    });
    test('returns null if ID does not match', () => {
        const actual = getConcessionByID(concessions, "1");
        const expected = null;
        expect(actual).toBe(expected); 
    });
  });

  describe("calculateTotalFromIDs()", () => {
    test("it returns the total price in cents from ID's array", () => {
        const actual = calculateTotalFromIDs(concessions, ["g9sZdG1hI", "0Qs9Yp2NL"])
        const expected = 1958
        expect(actual).toBe(expected);
    });
    test("returns 0 if the ID array is empty", () => {
        const actual = calculateTotalFromIDs(concessions, []);
        const expected = 0;
        expect(actual).toBe(expected);
    });
  });


