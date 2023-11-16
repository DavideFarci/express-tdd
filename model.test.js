const { test, expect } = require("@jest/globals");
const model = require("./model");

test("Model dovrebbe essere una classe", () => {
  expect(typeof model).toBe("function");
});
