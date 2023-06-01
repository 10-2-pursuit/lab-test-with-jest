//connecting it to the src file
const  {
    getConcessionByID,
    calculateTotalFromIDs
} = require("../src/concessions.js");

//connecting it to the data
const concessions = require("../data/concessions.js");

/*[
  { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
  { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
  { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
  { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
  { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
];*/

describe("getConcessionByID()",() => {
    it("should return the concession object with the matching ID",() => {
        const id = "g9sZdG1hI";
        const actual = getConcessionByID(concessions, id);
        const expected = {
            id: "g9sZdG1hI",
            name: "Small Popcorn",
            priceInCents:929,
        };
        expect (actual) .toEqual(expected)
    })
    // it("should return the concession object with the matching ID",() => {
    //     const id = "0Qs9Yp2NL";
    //     const actual = getConcessionByID(concessions, id);
    //     const expected = {
    //         id: "0Qs9Yp2NL",
    //         name: "Large Popcorn",
    //         priceInCents:1029,
    //     };
    //     expect (actual) .toEqual(expected)
    // })
    // it("should return the concession object with the matching ID",() => {
    //     const id = "KzWBehRAD";
    //     const actual = getConcessionByID(concessions, id);
    //     const expected = {
    //         id: "KzWBehRAD",
    //         name: "Small Soda",
    //         priceInCents:699,
    //     };
    //     expect (actual) .toEqual(expected)
    // })
    // it("should return the concession object with the matching ID",() => {
    //     const id = "NEHAsbTYk";
    //     const actual = getConcessionByID(concessions, id);
    //     const expected = {
    //         id: "NEHAsbTYk",
    //         name: "Large Soda",
    //         priceInCents:749,
    //     };
    //     expect (actual) .toEqual(expected)
    // })
    it("should return null if no object is found", () => {
        const id = "invalidID";
        const actual = getConcessionByID(concessions, id);
        const expected = null;
        expect (actual) .toEqual(expected)
    })
});

describe("calculateTotalFromIDs()", () => {
    it("should calculate the total value of all concessions from the 'ids' array", () => {
        const ids = ["g9sZdG1hI", "NEHAsbTYk"];
        const total = calculateTotalFromIDs(concessions, ids); expect(total).toBe(1678)
    })
    it("should return 0 if no concessions are found", () => {
        const ids = ["non", "existant"];
        const total = calculateTotalFromIDs(concessions, ids); expect(total).toBe(0)
    })
})