const { test, expect } = require("@jest/globals");
const createSlug = require("./createSlug");

test("Dovrebbe restituire una stringa", () => {
  const title = "questo è il mio primo test";
  const result = createSlug(title);

  expect(result).toBe("questo-è-il-mio-primo-test");
});
