 const {getConcessionByID,calculateTotalFromIDs} = require ("../src/concessions");

const concessions = require("../data/concessions");


describe('getConcessionByID()', () => {
    test('should return a concession object with a matching id', () => {
        const actual = getConcessionByID(concessions, concessions[0].id);
        const expected = concessions[0];
        expect(actual).toBe(expected);
    });
    test('should return null if id does not match', () => {
        const actual = getConcessionByID(concessions, "1");
        const expected = null;
        expect(actual).toBe(expected);
    });
});

describe('Concessions', () => {
    test("", () => {

    });
});

describe('Concessions', () => {
    test("", () => {

    });
});

describe('Concessions', () => {
    test("", () => {

    });
});
describe('Concessions', () => {
    test("", () => {

    });
});