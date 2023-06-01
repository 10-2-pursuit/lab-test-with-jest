const ticketsData = require("../data/tickets.js");

const {
    getTicketByName,
    calculateTotalFromTicketNames,
} = require("../src/tickets.js");

describe("getTicKetsByName", () => {
    test("Searching certain name in the data", () => {
      const actual = getTicketByName(ticketsData, "Adult Matinee");
      const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
      expect(actual).toStrictEqual(expected);
    });
});

describe("getTicKetsByName", () => {
    test("return null for value that cannot be found in the data", () => {
        const actual = getTicketByName(ticketsData, "Adult");
        const expected = null;
        expect(actual).toStrictEqual(expected);
    });
});
  
describe("calculateTotalFromTicketNames", () => {
    test("calculate properly from correct input", () => {
      const actual = calculateTotalFromTicketNames(ticketsData, ["Adult Matinee"]);
      const expected = 949;
      expect(actual).toStrictEqual(expected);
    });
});

describe("calculateTotalFromTicketNames", () => {
    test("calculate properly from correct input w/ more than 2 elements", () => {
      const actual = calculateTotalFromTicketNames(ticketsData, ["Adult Matinee", "Child Regular", "Senior Matinee"]);
      const expected = 2857;
      expect(actual).toStrictEqual(expected);
    });
});

describe("calculateTotalFromTicketNames", () => {
    test("Omitting false names from calculation", () => {
      const actual = calculateTotalFromTicketNames(ticketsData, ["Adult Matinee", "Child"]);
      const expected = 949;
      expect(actual).toStrictEqual(expected);
    });
});

