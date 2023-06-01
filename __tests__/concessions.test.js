const { getConcessionByID, calculateTotalFromIDs} = require("../src/concessions");
const concessions = require("../data/concessions.js")

describe("getConcessionByID", () => {
  it("should return ticket object with a matching name", () => {
    const actual = getConcessionByID(concessions, "KzWBehRAD");
    const expected = {
        id: "KzWBehRAD",
        name: "Small Soda",
        priceInCents: 699
    }
    expect(actual).toEqual(expected);
  });
  
  it("should return the null if no concession found", () => {
    const actual = getConcessionByID(concessions, "hgfj765uy");
    const expected = null;
    expect(actual).toEqual(expected);
    });
});

    describe("calculateTotalFromIDs", () => {
        it("return the total value of all concessions with matching `ids`", () => {
            const actual = calculateTotalFromIDs(concessions, ["g9sZdG1hI","0Qs9Yp2NL","KzWBehRAD", "NEHAsbTYk", "rNVCeVsri"]);
            const expected = 3975;
            expect(actual).toEqual(expected);
        });

        it("returns 0 if no matching concessions", () => {
            const actual = calculateTotalFromIDs(concessions, ["hgfj765uy"]);
            const expected = 0;
            expect(actual).toEqual(expected);
        });
    });



    //     it("should return null if no matching concession name is found", () => {
    //         const actual = getConcessionByID(concessions, "Nonexistent concession");
    //         const expected = null;
    //         expect(actual).toEqual(expected);
    //     });
// });

//test driven development

/*npm i jest -- --save dev
test script points to jest
create test folder and file 
import index.js create input  "data" create actual create expected use expect pass actual and toEqual expected*/
