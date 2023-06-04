const {
    getConcessionByID,
    calculateTotalFromIDs
} = require("../src/concessions.js")

const data = require("../data/concessions.js")

describe("getConcessionByID()",() => {
    it("should return an object with a matching ID", () => {
        const actual = getConcessionByID(data,"g9sZdG1hI");
        const expected = { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 };
        expect(actual).toStrictEqual(expected)
    })
    it("should return null if no matching ID is found", () => {
        const actual = getConcessionByID(data,"Invalid");
        const expected = null;
        expect(actual).toStrictEqual(expected)
    })
})
describe("calculateTotalFromIDs", () => {
    it("should return the total price of all tickets", ()=> {
        const actual = calculateTotalFromIDs(data,["g9sZdG1hI","0Qs9Yp2NL"])
        const expected = 1958
        expect(actual).toStrictEqual(expected)
    })
    it("should return 0 if no tickets are input", ()=> {
        const actual = calculateTotalFromIDs(data,[""])
        const expected = 0
        expect(actual).toStrictEqual(expected)
    })
})