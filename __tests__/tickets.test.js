const {
  getTicketByName,
  calculateTotalFromTicketNames,
} = require("../src/tickets");

const tickets = require("../data/tickets");

describe("this will test getTicketByName", () => {
  it("should check if any tickets match with name inputted", () => {
    const input = "Adult Matinee";
    const actual = getTicketByName(tickets, input);
    const expected = {
      id: "6ha0u__54",
      name: "Adult Matinee",
      priceInCents: 949,
    };
    expect(actual).toEqual(expected);
  });
});

describe("this will test getTicketByName", () => {
  it("should check incorrect name input for into param", () => {
    const input = "incorrectName";
    const actual = getTicketByName(tickets, input);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("this will test calculateTotalFromTicketNames", () => {
  it("should return total priceInCents for all ticket names inputted", () => {
    const input = ["Adult Matinee", "Senior Matinee", "Child Regular"];
    const actual = calculateTotalFromTicketNames(tickets, input);
    const expected = 2857;
    expect(actual).toEqual(expected);
  });
});

describe("this will test calculateTotalFromTicketNames", () => {
  it("should return 0 if incorrect names are input into parameter", () => {
    const input = "incorrectName";
    const actual = calculateTotalFromTicketNames(tickets, input);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});
