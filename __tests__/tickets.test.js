const {getTicketByName,calculateTotalFromTicketNames} = require("../src/tickets");
const tickets = require("../data/tickets");


describe('getTicketbyName()', () => {
    test('should return an object with a matching name', () => {
        const actual = getTicketByName(tickets, tickets[0].name);
        const expected = tickets[0];
        expect(actual).toBe(expected);
    });
    test('should return null if name does not match', () => {
        const actual = getTicketByName(tickets, "incorrect");
        const expected = null;
        expect(actual).toBe(expected);
    });
});
