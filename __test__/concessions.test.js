const {
  getConcessionByID,
  calculateTotalFromIDs,
  calculateAffordableConcessions
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


describe('calculateAffordableConcessions', () => {
  const ids = ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD", "NEHAsbTYk", 
"rNVCeVsri"];

  it('should return the correct affordable combinations with a 2000  budget.', () => {
    const budget = 2000;
    const expected = [
      { ids: ['g9sZdG1hI'], concessions: [{ id: 'g9sZdG1hI', name: 'Small Popcorn', priceInCents: 929 }] },
      { ids: ['g9sZdG1hI', 'KzWBehRAD'], concessions: [
        { id: 'g9sZdG1hI', name: 'Small Popcorn', priceInCents: 929 },
        { id: 'KzWBehRAD', name: 'Small Soda', priceInCents: 699 },
      ] },
    ];

    const actual = calculateAffordableConcessions(concessions, budget);
    expect(actual).toEqual(expected);
  });


  it('should return the correct affordable combinations with a 3500 budget ', () => {
    const budget = 3500;
    const expected = [
      { ids: ['g9sZdG1hI'], concessions: [{ id: 'g9sZdG1hI', name: 'Small Popcorn', priceInCents: 929 }] },
      { ids: ['g9sZdG1hI', 'KzWBehRAD'], concessions: [
        { id: 'g9sZdG1hI', name: 'Small Popcorn', priceInCents: 929 },
        { id: 'KzWBehRAD', name: 'Small Soda', priceInCents: 699 },
      ] },
      { ids: ['0Qs9Yp2NL'], concessions: [{ id: '0Qs9Yp2NL', name: 'Large Popcorn', priceInCents: 1029 }] },
      { ids: ['KzWBehRAD'], concessions: [{ id: 'KzWBehRAD', name: 'Small Soda', priceInCents: 699 }] },
      { ids: ['NEHAsbTYk'], concessions: [{ id: 'NEHAsbTYk', name: 'Large Soda', priceInCents: 749 }] },
      { ids: ['rNVCeVsri'], concessions: [{ id: 'rNVCeVsri', name: 'Candy', priceInCents: 569 }] },
    ];

    const actual = calculateAffordableConcessions(concessions, budget);
    expect(actual).toEqual(expected);
  });
});
