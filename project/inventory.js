// Capstone project: Product Inventory Dashboard
console.log("--- Initializing Inventory System ---");
// existing products
let inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];
// price limits for categories
let budgetLimit = 50;
let premiumLimit = 500;
// search for a product by name (skips bad items, stops when found)
function findProduct(searchName) {
  let found = null;
  for (let i = 0; i < inventory.length; i++) {
    if (!inventory[i].name) {
      continue; // skip items with no name
    }
    if (inventory[i].name.toLowerCase() === searchName.toLowerCase()) {
      found = inventory[i];
      break; // stop once we find it
    }
  }
  return found;
}
// ask the user until we get valid input (max 3 tries)
let added = false;
let tries = 0;
while (tries < 3) {
  tries++;
  let nameInput = prompt("Enter product name:");
  let priceInput = Number(prompt("Enter product price:"));

  if (nameInput === null || nameInput.trim() === "") {
    console.log("Name is missing, try again.");
    continue;
  }
  if (isNaN(priceInput) || priceInput <= 0) {
    console.log("Price is not valid, try again.");
    continue;
  }
  if (findProduct(nameInput.trim()) !== null) {
    console.log("That product already exists, try again.");
    continue;
  }
  inventory.push({ name: nameInput.trim(), price: priceInput });
  console.log('[Prompt executed: User adds "' + nameInput.trim() + '" at "$' + priceInput + '"]');
  added = true;
  break;
}

if (added === false) {
  console.log("No valid product was added.");
}
// give each product a category
function getCategory(price) {
  let category = "";
  switch (true) {
    case price < budgetLimit:
      category = "Budget";
      break;
    case price <= premiumLimit:
      category = "Standard";
      break;
    default:
      category = "Premium";
  }
  return category;
}
// total value of all products (regular function)
function getTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}
// price after tax and discount (arrow function)
const finalPrice = (price, tax = 0, discount = 0) => {
  return price + (price * tax / 100) - (price * discount / 100);
};
// print all products
console.log("");
console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach(function (item) {
  console.log("* Item: " + item.name + " ($" + item.price + ") -> Category: " + getCategory(item.price));
});
// analytics
console.log("");
console.log("--- Financial Analytics ---");
let total = getTotal(inventory);
console.log("Total Inventory Value: $" + total);

let affordable = inventory.filter(function (item) {
  return item.price < 200;
});
let affordableNames = affordable.map(function (item) {
  return item.name;
});
console.log("Filtered Affordable Items (Under $200): " + JSON.stringify(affordableNames));

let report = inventory.map(function (item) {
  return item.name.toUpperCase() + ": $" + item.price;
});
console.log("Formatted Report List: " + JSON.stringify(report));

// extra: total with 10% tax and 5% discount
console.log("Total with 10% tax and 5% discount: $" + finalPrice(total, 10, 5).toFixed(2));
