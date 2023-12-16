/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = transactions.reduce((result, transaction) => {
      const { category, price } = transaction;

      // If the category is not in the result, initialize it with the current transaction price
      if (!result[category]) {
          result[category] = { category, totalSpent: price };
      } else {
          // If the category already exists, add the current transaction price to the total
          result[category].totalSpent += price;
      }

      return result;
  }, {});

  // Convert the categoryMap object to an array of values
  const resultArray = Object.values(categoryMap);

  return resultArray;
}
module.exports = calculateTotalSpentByCategory;
