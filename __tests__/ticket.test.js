const { getTicketByName, calculateTotalFromTicketNames} = require("../src/tickets");
const tickets = require("../data/tickets.js")

describe("getTicketByName", () => {
  it("should return ticket object with a matching name", () => {
    const actual = getTicketByName(tickets, "Adult Matinee");
    const expected = {
      id: "6ha0u__54",
      name: "Adult Matinee",
      priceInCents: 949,
    };
    expect(actual).toEqual(expected);
  });
      test ("Should Return null if no object is found", () => {
          const actual = getTicketByName(tickets, "incorrect input");
          const expected = null;
          expect(actual).toStrictEqual(expected);
        
      });
  })
    

  describe("calculateTotalFromTicketNames", () => {
    test ("Should return the zero from an empty array", () => {
      const actual = calculateTotalFromTicketNames(tickets, []);
      const expected = 0;
      expect(actual).toStrictEqual(expected);;
      
    });    
    
    test ("Should return the price of one ticket", () => {
      const actual = calculateTotalFromTicketNames(tickets, ["Adult Matinee"]);
      const expected = 949;
      expect(actual).toStrictEqual(expected);;
      
    });
    
    test ("Should return the total price of all selected tickets", () => {
      const actual = calculateTotalFromTicketNames(tickets, ["Adult Matinee", "Senior Matinee"]);
      const expected = 949 + 839;
      expect(actual).toStrictEqual(expected);;
      });
  })




//test driven development

/*npm i jest -- --save dev
test script points to jest
create test folder and file 
import index.js create input  "data" create actual create expected use expect pass actual and otEqual expected*/
