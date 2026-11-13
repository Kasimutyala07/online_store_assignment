const product = {
    name: "backpack",
    price: 899,
    category: "accessories",
    color: "black"
};

console.log(product);
console.log("product name:", product.name);
console.log("product price:", product.price);
console.log("product color:", product.color);
product.price = 999;

console.log("updated price:", product.price);