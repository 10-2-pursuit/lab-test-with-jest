const {
    getTicketByName, 
    calculateTotalFromTicketNames
} = require("../src/tickets");
const tickets = require("../data/tickets");

describe("getTicketByName()", () => {
    test("it returns a concession object by ID", () => {
      const actual = getConcessionByID(concessions, concessions[0].id);
      const expected = concessions[0];
      expect(actual).toBe(expected);
    });
});