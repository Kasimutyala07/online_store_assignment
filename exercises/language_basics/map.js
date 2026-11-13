const productprices = new Map();
productprices.set("backpack", 899);
productprices.set("mug", 249);
productprices.set("shoes", 1500);

console.log(productprices);
console.log("backpack:", productprices.get("backpack"));
console.log("total product:", productprices.size);
productprices.set("backpack", 999);

console.log("update backpack price:", productprices.get("backpack"));
console.log("total products:", productprices.size);