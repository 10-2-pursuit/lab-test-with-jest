const {
getTicketByName,
calculateTotalFromTicketNames
} = require("../src/tickets.js")

const data = require ("../data/tickets.js")

describe("getTicketByName()", () => {
    it("should return null if no object is found", () => {
        const actual = getTicketByName(data, "")
        const expected = null
        expect(actual).toStrictEqual(expected)
    })
    it("should return the ticket object with a matching id",() => {
        const actual = getTicketByName(data, "Child Regular")
        const expected = {"id": "B8v5R2nVQ", "name": "Child Regular", "priceInCents": 1069}
        expect(actual).toStrictEqual(expected)
    })
})
describe("calculateTotalFromTicketNames", () => {
    it("should return the total value of all tickets",() => {
        const actual = calculateTotalFromTicketNames(data, ["Child Regular"])
        const expected = 1069
        expect(actual).toStrictEqual(expected)
    })
    it("should retern zero if no tickets are provided", () => {
        const actual = calculateTotalFromTicketNames(data, [""])
        const expected = 0
        expect(actual).toStrictEqual(expected)
    })  

})