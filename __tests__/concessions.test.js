const { getConcessionByID, calculateTotalFromIDs} = require("../src/concessions")

describe('this will test getConcessionByID', () => {
    const concessions = [
        { id: '1', name: 'concession 1'},
        { id: '2', name: 'concession 2'},
        { id: '3', name: 'concession 3'},
    ];
    test('return the concession value when given a value id', () => {
        const concession = getConcessionByID(concessions, '2');
        expect(concession).toEqual({ id: '2', name: 'concession 2'})
    });
     
    test('return null when no object is found with given id', () => {
        const concession = getConcessionByID(concessions, '4');
        expect(concession).toBeNull()
    });
});