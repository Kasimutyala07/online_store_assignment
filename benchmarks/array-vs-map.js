const products = [];
for (let i = 1; i <= 100; i++) {
    products.push({
        sku: `SKU${i}`,
        name: `product ${i}`,
        price: 100 + i
    });
}

const productMap = new Map();
for (const product of products) {
    productMap.set(product.sku, product);
}

const searchSKU = "SKU99";
console.log("First product:", products[0]);
console.log("Last product:", products[products.length - 1]);
console.log("Search SKU:", searchSKU);
console.log("Last Map key:", [...productMap.keys()].at(-1));

console.log("Total products:", products.length);
console.log("SKU exists in Array:", products.some(
    product => product.sku === searchSKU
));
console.log("SKU exists in Map:", productMap.has(searchSKU));
console.time("array search");

const arrayresult = products.find(
    product => product.sku === searchSKU
);

console.timeEnd("array search");

console.time("Map search");
const mapresult = productMap.get(searchSKU);
console.timeEnd("Map search");

console.log("array result:", arrayresult);
console.log("map result:", mapresult);