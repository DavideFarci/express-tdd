const { test, expect } = require("@jest/globals");
const posts = require("./db/posts.json");
const Model = require("./model");

test("Model dovrebbe essere una classe", () => {
  expect(typeof Model).toBe("function");
});

test("L’istanza di model dovrebbe richiedere il nome del file json da usare in fase di creazione dell’istanza", () => {
  expect(() => new Model(posts)).not.toThrow();
});
