const productSKUs = ["bp101", "mg102", "sh103",];

const arrayhasduplicate = productSKUs.length !==
    new Set(productSKUs).size;

const unquieSKUs = new Set(productSKUs);

console.log("original SKUs:", productSKUs);
console.log("Unique SKUs:", unquieSKUs);
console.log("Has duplicates:", arrayhasduplicate);