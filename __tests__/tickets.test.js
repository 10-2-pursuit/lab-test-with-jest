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
describe('calculateTotalFromTicketNames()', () => {
    test('should return the total priceInCents from the names array', () => {
        const actual = calculateTotalFromTicketNames(tickets, ["Child Matinee", "Adult Matinee"]);
        const expected = 1618;
        expect(actual).toBe(expected);
    });
    test('should return 0 if the array is incorrect', () => {
        const actual = calculateTotalFromTicketNames(tickets, []);
        const expected = 0;
        expect(actual).toBe(expected);
    });
});