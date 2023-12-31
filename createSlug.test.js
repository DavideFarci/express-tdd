const { test, expect } = require("@jest/globals");
const { kebabCase } = require("lodash");
const createSlug = require("./createSlug");
const posts = require("./db/posts.json");

test("Dovrebbe restituire una stringa", () => {
  const result = createSlug("ciao", posts);

  expect(typeof result).toBe("string");
});

test("Dovrebbe restituire una stringa in lowerCase", () => {
  const result = createSlug("CIAO", posts);

  expect(result).toBe("ciao");
});

test("dovrebbe restituire una stringa con gli spazi sostituiti da -", () => {
  const result = createSlug("Ciao sono Davide", posts);

  expect(result).toBe("ciao-sono-davide");
});

test("dovrebbe incrementare di 1 lo slug quando esiste già", () => {
  const result = createSlug("Cracker alla barbabietola", posts);

  expect(result).toBe("cracker-alla-barbabietola-1");
});

test("dovrebbe lanciare un errore in caso di titolo non presente o formato errato", () => {
  const result = () => createSlug(45, posts);

  expect(result).toThrowError();
});

test("dovrebbe lanciare un errore se manca l’array dei post", () => {
  const result = () => createSlug("Coroddis");

  expect(result).toThrowError();
});
