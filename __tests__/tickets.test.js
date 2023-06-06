const {getTicketByName, calculateTotalFromTicketNames} = require("../src/tickets")

const tickets = require("../data/tickets")

describe("this will test getTicketByName", () => {
    it("should return a ticket object when given the name", () => {
      const input = "Adult Matinee"
      const actual = getTicketByName(tickets, input)
      const expected = {
        id: "6ha0u__54", 
        name: "Adult Matinee", 
        priceInCents: 949,
      }
      expect(actual).toEqual(expected)
    })
  })

  describe("this will test getTicketByName", () => {
    it("should check to see if object inputted is null", () => {
      const input = "IncorrectTicket"
      const actual = getTicketByName(tickets, input)
      const expected = null
      expect(actual).toEqual(expected)
    })
  })

  describe("this tests calculateTotalFromTicketNames", () => {
    it("should return a total calculation based on the given ticket names", () => {
      const input = ["Adult Matinee", "Child Regular", "Senior Regular"]
      const actual = calculateTotalFromTicketNames(tickets, input)
      const expected = 3237
      expect(actual).toEqual(expected)
    })
  })

  describe("this tests calculateTotalFromTicketNames", () => {
    it("should return the number 0 if no names are provided", () => {
      const input = []
      const actual = calculateTotalFromTicketNames(tickets, input)
      const expected = 0
      expect(actual).toEqual(expected)
    })
  })