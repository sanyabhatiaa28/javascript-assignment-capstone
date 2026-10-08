// Assignment 5: arrays and objects
let products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];
// forEach
console.log("-- All Products (forEach) --");
products.forEach(function (product) {
  console.log("Item: " + product.name + " - Price: $" + product.price);
});
// filter
console.log("");
console.log("-- Filtered Products (Price < $50) --");
let cheapProducts = products.filter(function (product) {
  return product.price < 50;
});
console.log(cheapProducts);
// map
console.log("");
console.log("-- Mapped Product Tags (map) --");
let tags = products.map(function (product) {
  return product.name.toUpperCase() + " costs $" + product.price;
});
console.log(tags);
