const {
  getConcessionByID,
  calculateTotalFromIDs,
} = require("../src/concessions");
const concessions = require("../data/concessions");
describe("getConcessionByID", () => {
  it("should return the concession object that includes the inputted ID", () => {
    const id = "KzWBehRAD";
    const actual = getConcessionByID(concessions, id);
    const expected = { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 };
    expect(actual).toEqual(expected);
  });

  test('should return "null" if the concession object cannot be found', () => {
    const id = "incorrect-id";
    const actual = getConcessionByID(concessions, id);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("calculateTotalFromIDs", () => {
  it("should return an array of prices whose length is equal to the length of the array of input ids.", () => {
    const ids = ["KzWBehRAD", "NEHAsbTYk", "rNVCeVsri"];
    const actual = ids.length;
    const expected = [699, 749, 569].length;
    expect(actual).toEqual(expected);
  });

  it("should return the sum of the costs of all the concessions attached to the inputed ids", () => {
    const ids = ["KzWBehRAD", "NEHAsbTYk", "rNVCeVsri"];
    const i = ids.length;
    const actual = calculateTotalFromIDs(concessions, ids);
    const expectedPrice = 699 + 759 + 569;
    const expected = 2017;
    expect(actual).toEqual(expected);
  });
});
