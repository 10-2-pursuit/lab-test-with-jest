const concessions = require("../data/concessions");

const {getConcessionByID, calculateTotalFromIDs} = require("../src/concessions")

describe("this will test getConcessionByID", () => {
  it("should return a concession object with matching ID", () => {
    const input = "g9sZdG1hI"
    const actual = getConcessionByID(concessions, input)
    const expected = {
      id: "g9sZdG1hI",
      name: "Small Popcorn",
      priceInCents: 929,
    }
    expect(actual).toEqual(expected)
  })
})

describe("this will test getConcessionByID", () => {
  it("should check to see if object inputted is null", () => {
    const input = "IncorrectID"
    const actual = getConcessionByID(concessions, input);
    const expected = null
    expect(actual).toEqual(expected)
  })
})

describe("this will test calculateTotalFromIDs", () => {
    it("should return a total calculation based on the given concession IDs.", () => {
      const input = ["g9sZdG1hI", "NEHAsbTYk"]
      const actual = calculateTotalFromIDs(concessions, input)
      const expected = 1678
      expect(actual).toEqual(expected)
    })
  })

describe("this will test calculateTotalFromIDs", () => {
    it("should return the number 0 if no IDs are provided", () => {
      const input = []
      const actual = calculateTotalFromIDs(concessions, input)
      const expected = 0
      expect(actual).toEqual(expected)
    })
  })