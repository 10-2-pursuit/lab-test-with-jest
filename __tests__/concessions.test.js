const { getConcessionByID } = require("../src/concessions");
const { calculateTotalFromIDs } = require("../src/concessions")
const concessions = require("../data/concessions")


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
    it('', () => {
        
    });
    
});
