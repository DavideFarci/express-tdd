// const posts = require("./db/posts.json");
module.exports = function (title, list) {
  let slug = title.toLowerCase().split(" ").join("-");
  let increment = 0;
  while (list.find((el) => el.slug === slug)) {
    increment++;
    slug = title.toLowerCase().split(" ").join("-") + "-" + increment;
  }
  return slug;
};
