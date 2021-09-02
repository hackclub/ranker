const { toLower } = require("lodash");
const { contains } = require("ramda");

const a_or_an = (str) => {
  const first_char = toLower(str[0]);
  const vowels = ["a", "e", "i", "o", "u"];

  if (contains(first_char, vowels)) return "an";

  return "a";
};

module.exports = a_or_an;
