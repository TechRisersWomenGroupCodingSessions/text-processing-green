const testAdd = require("./sum.js");

it("a plus b should equal a plus b", () => {
	expect(testAdd(1, 2)).toBe(3);
});
