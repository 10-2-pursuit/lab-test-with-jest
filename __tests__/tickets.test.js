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
    test("do something", () => {
        const actual = getTicketByName(ticketsData, "Adult");
        const expected = null;
        expect(actual).toStrictEqual(expected);
    });
});
  
describe("calculateTotalFromTicketNames", () => {
    test("do something", () => {
      const actual = calculateTotalFromTicketNames(ticketsData, "Adult Matinee");
      const expected = 949;
      expect(actual).toStrictEqual(expected);
    });
});

console.log("Matinee");
console.log(calculateTotalFromTicketNames(ticketsData, "Child Regular"));
console.log("Adult Matinee")
console.log(calculateTotalFromTicketNames(ticketsData, "Adult Matinee"));
console.log(calculateTotalFromTicketNames(ticketsData, "6ha0u__54"));

console.log(getTicketByName(ticketsData, "Adult Matinee"));
console.log(getTicketByName(ticketsData, "6ha0u__54"));