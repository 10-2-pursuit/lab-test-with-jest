const concessions = require("../data/concessions")

/**
 * Returns a concession object by ID.
 * @param {Object[]} concessions An array of concession objects
 * @param {String} id A unique ID for a specific concession
 * @returns A concession object with a matching ID or `null` if no object is found.
 */
function getConcessionByID(concessions, id) {
  return concessions.find((concession) => concession.id === id) || null;
}

/**
 * Calculates a total based on the given concession IDs.
 * @param {Object[]} concessions An array of concession objects
 * @param {String[]} ids An array of unique IDs
 * @returns The total value of all concessions from the `ids` array.
 */
function calculateTotalFromIDs(concessions, ids) {
  let total = 0;
  for (let id of ids) {
    const concession = getConcessionByID(concessions, id);
    if (concession) {
      total += concession.priceInCents;
    }
  }
  return total;
}


 /**
 * Generates all combinations of affordable concessions given a budget.
 * @param {Object[]} concessions An array of concession objects
 * @param {Number} budget The budget for the concessions
 * @returns {Object[]} affordableConcessions An array of affordable combinations of concessions
 */
function calculateAffordableConcessions(concessions, budget) {
  const affordableConcessions = [];

  function generateCombinations(currentCombination, remainingBudget, startIndex) {
    if (remainingBudget === 0) {
      affordableConcessions.push(currentCombination.slice());
      return;
    }

    for (let i = startIndex; i < concessions.length; i++) {
      const concession = concessions[i];

      if (concession.priceInCents <= remainingBudget) {
        currentCombination.push(concession.id);
        generateCombinations(currentCombination, remainingBudget - concession.priceInCents, i);
        currentCombination.pop();
      }
    }
  }

  generateCombinations([], budget, 0);
  return affordableConcessions;
}

module.exports = {getConcessionByID,
                  calculateTotalFromIDs,
                  calculateAffordableConcessions}