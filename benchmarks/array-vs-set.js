const productSKUs = [];

for (let i = 1; i <= 100; i++) {
    productSKUs.push(`SKU${i}`);
}

// Add a duplicate SKU
productSKUs.push("SKU50");

console.log("Total SKU entries:", productSKUs.length);
console.log("First SKU:", productSKUs[0]);
console.log("Last SKU:", productSKUs[productSKUs.length - 1]);
// Array duplicate detection
console.time("Array duplicate detection");

const arrayHasDuplicate = productSKUs.some(
    (sku, index) => productSKUs.indexOf(sku) !== index
);

console.timeEnd("Array duplicate detection");

// Set duplicate detection
console.time("Set duplicate detection");

const uniqueSKUs = new Set(productSKUs);
const setHasDuplicate = uniqueSKUs.size !== productSKUs.length;

console.timeEnd("Set duplicate detection");

// Verify results
console.log("Array detected duplicate:", arrayHasDuplicate);
console.log("Set detected duplicate:", setHasDuplicate);