describe("sum", function () {
    it("takes an array of numbers and returns sums all the numbers",
        function () {
            assert.equal(15, sum([1,2,3,4,5]));
        });
});

describe("multiply", function () {
    it("takes an array of numbers and returns multiplies all the numbers",
        function () {
            assert.equal(120, multiply([1,2,3,4,5]));
        });
});

describe("reverseMy", function () {
    it("takes an string and returns the reversal of a string",
        function () {
            assert.equal('ratset gaj', reverseMy('jag testar'));
        });
});

describe("filterLongWords", function () {
    it("takes an array of string and an integer i and returns the array of words that are longer than i",
        function () {
            assert.deepEqual(['hello', 'Muba'], filterLongWords(['hello', 'I', 'am', 'Muba'], 3));
        });
});