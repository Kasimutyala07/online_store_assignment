const test = require('node:test');
const assert = require('node:assert');

function calculateprice(price, quantity) {
    return price * quantity;
}
test("calculate price for mug", () => {
    assert.strictEqual(calculateprice(249, 3), 747);
});
test("calculate price for backpack", () => {

    assert.strictEqual(calculateprice(899, 2), 1798);
});
test("calculate price for another product", () => {
    assert.strictEqual(calculateprice(100, 5), 500);

});