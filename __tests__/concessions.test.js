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

// describe('this will test calculateTotalFromIDs', () => {
//     it('should calculate the total of concessions from given ids', () => {
//         const id = "g9sZdG1hI";
//         const actual = calculateTotalFromIDs(concessions, id);
//         const expected = 929;
//         expect(actual).toEqual(expected);
//     });
    
//     it('should calculate the total of concessions from given ids', () => {
//         const id = "0Qs9Yp2NL";
//         const actual = calculateTotalFromIDs(concessions, id);
//         const expected = 1029;
//         expect(actual).toEqual(expected);
//     });

//     it('should calculate the total of concessions from given ids', () => {
//         const id = "KzWBehRAD";
//         const actual = calculateTotalFromIDs(concessions, id);
//         const expected = 699;
//         expect(actual).toEqual(expected);
//     });

//     it('should calculate the total of concessions from given ids', () => {
//         const id = "NEHAsbTYk";
//         const actual = calculateTotalFromIDs(concessions, id);
//         const expected = 749;
//         expect(actual).toEqual(expected);
//     });

//     it('should calculate the total of concessions from given ids', () => {
//         const id = "rNVCeVsri";
//         const actual = calculateTotalFromIDs(concessions, id);
//         const expected = 569;
//         expect(actual).toEqual(expected);
//     });
// });
