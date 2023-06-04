const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions");
const concessions = require("../data/concessions");


describe('this will test getConcessionByID', () => {
    it('should return a object of user by ID', () => {
        const id = "g9sZdG1hI";
        const actual = getConcessionByID(concessions, id);
        expect(actual.id).toEqual(id);
    });

    it('should return `null` if no object is found', () => {
        expect(getConcessionByID(concessions, "incorrect-id")).toEqual(null);
    });
});

describe('this will test calculateTotalFromIDs', () => {
    it('should calculate the total of concessions from given ids', () => {
        const ids = ["g9sZdG1hI", "KzWBehRAD"];
        const actual = calculateTotalFromIDs(concessions, ids);
        const expected = 1628;
        expect(actual).toEqual(expected);
    });
});
