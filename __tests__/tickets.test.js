const {
    getTicketByName, 
    calculateTotalFromTicketNames
} = require("../src/tickets");

const tickets = require("../data/tickets");

describe("getTicketByName()", () => {
    test("returns a ticket object with a matching name", () => {
      const actual = getTicketByName(tickets, tickets[0].name);
      const expected = tickets[0];
      expect(actual).toBe(expected);
    });
    test("returns null if name does not match", () => {
        const actual = getTicketByName(tickets, "wrong");
        const expected = null;
        expect(actual).toBe(expected);
    });
});

describe("calculateTotalFromTicketNames()", () => {
    test("returns the total value of all tickets from the names array", () => {
        const actual = calculateTotalFromTicketNames(tickets, ["Adult Matinee", "Senior Matinee"]);
        const expected = 1788;
        expect(actual).toBe(expected);
    });
    test("returns 0 if names array is incorrect", () => {
    const actual = calculateTotalFromTicketNames(tickets, []);
        const expected = 0;
        expect(actual).toBe(expected);
    });
});