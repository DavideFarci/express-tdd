// const posts = require("./db/posts.json");
module.exports = function (title, list) {
  const slug = title.toLowerCase().split(" ").join("-");
  return slug;
};
