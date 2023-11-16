const { test, expect } = require("@jest/globals");
const { kebabCase } = require("lodash");
const createSlug = require("./createSlug");
// const posts = require("./db/posts.json");
// const title = posts.map((post) => kebabCase(post.title));

test("Dovrebbe restituire una stringa", () => {
  const result = createSlug("ciao");

  expect(typeof result).toBe("string");
});

test("Dovrebbe restituire una stringa in lowerCase", () => {
  const result = createSlug("CIAO");

  expect(result).toBe("ciao");
});
