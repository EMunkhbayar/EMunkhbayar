describe("filter", function () {
    it("takes strings that specifies a list of banned words and returns the string after removing all the banned words",
        function () {
            assert.equal("This house is nice!", "This house is not nice!".filter('not'));
        });
    it("takes strings that specifies a list of banned words and returns the string after removing all the banned words",
        function () {
            assert.equal("house not nice!", "This house is not nice!".filter('this is'));
        });
});

describe("bubbleSort", function () {
    it("Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted",
        function () {
            assert.deepEqual([-2, 0, 1, 3, 4, 6], [6,4,0, 3,-2,1].bubbleSort());
        });
});

describe("Inheritance", () => {
    it("a method called teach which receives a string called subject, and returns [teacher's name] is now teaching [subject]", 
        function () {
            const tchr = new Teacher();
            tchr.initialize("Michael", 35);
            assert.strictEqual("Michael is now teaching WAP", tchr.teach("WAP"));
        });
});