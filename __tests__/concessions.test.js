const { getConcessionByID } = require("../src/concessions");
const concession = require("../data/concessions")


describe('this will test getConcessionByID', () => {
    it('should return a object of user by ID', () => {
        const id = "g9sZdG1hI";
        const actual = getConcessionByID(concession, id);
        expected(actual.id).toEqual(id);
    });
});
