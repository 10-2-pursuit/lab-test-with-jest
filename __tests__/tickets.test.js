//connecting it to the src file
const {
    getTicketByName,
    calculateTotalFromTicketNames
  } = require("../src/tickets.js");

  //connecting it to the data
  const tickets = require("../data/tickets.js");

 /* [
    { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
    { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
    { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
    { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
    { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
    { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
  ];*/

  describe("getTicketByName()",() => {
    it("should return the ticket object when given the name",() => {
        const name = "Adult Matinee";
        const actual = getTicketByName(tickets, name);
        const expected = {
            id: "6ha0u__54",
            name: "Adult Matinee",
            priceInCents:949,
        };
        expect (actual) .toEqual(expected)
    })
 
    it("should return null if no object is found", () => {
        const name = "invalidID";
        const actual = getTicketByName(tickets, name);
        const expected = null;
        expect (actual) .toEqual(expected)
    })
});

describe("calculateTotalFromTicketNames()", () => {
    it("should calculate the total value of all tickets included in the 'names' array", () => {
        const names = ["Senior Matinee", "Adult Regular"];
        const total = calculateTotalFromTicketNames(tickets, names); expect(total).toBe(2208)
    })
    it("should return 0 if no concessions are found", () => {
        const names = ["non", "existant"];
        const total = calculateTotalFromTicketNames(tickets, names); expect(total).toBe(0)
    })
})