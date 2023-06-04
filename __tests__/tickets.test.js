const { getTicketByName } = require("../src/tickets");
const { calculateTotalFromTicketNames } = require("../src/tickets");
const tickets = require("../data/tickets");


describe('this will test getTicketByName', () => {
    it('should return object of ticket by given name', () => {
        const name = "Adult Matinee";
        const actual = getTicketByName(tickets, name);
        expect(actual.name).toEqual(name);
    });

    it('should return `null` if no object is found', () => {
        expect(getTicketByName(tickets, "incorrect-name")).toEqual(null);
    });
    
});

describe('this will test calculateTotalFromTicketNames', () => {
    
});
