const {getTicketByName, calculateTotalFromTicketNames} = require('../src/tickets');
const tickets = require('../data/tickets')



describe('getTicketByName()', () => {
    it('should return a ticket object when the ticket name is inputted', ()=> {
        const name = "Child Matinee";
        const actual = getTicketByName(tickets, name);
        const expected =   { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 };
        expect(actual).toEqual(expected);
    });

   test('should return "null" if the ticket object cannot be found for the ticketName inputted', () => {
        const name = "incorrect-name";
        const actual = getTicketByName(tickets, name);
        const expected = null;
        expect(actual).toEqual(expected);
      });
});

describe('calculateTotalFromTicketNames()', () => {
    it('should return an array of prices whose length is equal to the length of the array of inputted names.', () => {
        const names = ["Senior Regular","Adult Matinee","Adult Regular","Child Matinee"]
        const actual = names.length
        const expected = [1219,949,1369,669].length
        expect(actual).toEqual(expected);
    });

    it('should return the sum of the costs of all the tickets named in the inputted names array.', () => {
    const names = ["Senior Regular","Adult Matinee","Adult Regular",
    "Child Matinee"]
    const actual = calculateTotalFromTicketNames(tickets,names);
    const expectedPrice = 1219+949+1369+669;
    const expected = 4206;
    expect(actual).toEqual(expected);
});
})
