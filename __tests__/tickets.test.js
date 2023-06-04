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
    it('should calculate the total of tickets from given names', () => {
        const name = "Adult Matinee";
        const actual = calculateTotalFromTicketNames(tickets, name);
        const expected = 949;
        expect(actual).toEqual(expected);
    });
    
    it('should calculate the total of tickets from given names', () => {
        const name = "Senior Matinee";
        const actual = calculateTotalFromTicketNames(tickets, name);
        const expected = 839;
        expect(actual).toEqual(expected);
    });

    it('should calculate the total of tickets from given names', () => {
        const name = "Child Matinee";
        const actual = calculateTotalFromTicketNames(tickets, name);
        const expected = 669;
        expect(actual).toEqual(expected);
    });

    it('should calculate the total of tickets from given names', () => {
        const name = "Adult Regular";
        const actual = calculateTotalFromTicketNames(tickets, name);
        const expected = 1369;
        expect(actual).toEqual(expected);
    });

    it('should calculate the total of tickets from given names', () => {
        const name = "Senior Regular";
        const actual = calculateTotalFromTicketNames(tickets, name);
        const expected = 1219;
        expect(actual).toEqual(expected);
    });

    it('should calculate the total of tickets from given names', () => {
        const name = "Child Regular";
        const actual = calculateTotalFromTicketNames(tickets, name);
        const expected = 1069;
        expect(actual).toEqual(expected);
    });
});
