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
describe('calculateTotalFromIDs()', () => {
    test('should return the total (priceInCents)', () => {
        const actual = calculateTotalFromIDs(concessions, ["6ha0u__54","dlb8ka9N_" ]);
        const expected = 1788;
        expect(actual).toBe(expected);
    });
    test('should return 0 if the array is empty', () => {
        const actual = calculateTotalFromIDs(concessions, []);
        const expected = 0;
        expect(actual).toBe(expected);
    });

});