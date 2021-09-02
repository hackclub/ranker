const test = require("tape");
const { a_or_an } = require("../lib/utlis/index");

test("checking a or an utility", (t) => {
  t.plan(7);

  t.equal(a_or_an("hungary"), "a");
  t.equal(a_or_an("england"), "an");
  t.equal(a_or_an("Australia"), "an");
  t.equal(a_or_an("India"), "an");
  t.equal(a_or_an("Out"), "an");
  t.equal(a_or_an("uganda"), "an");
  t.equal(a_or_an("Bangladesh"), "a");
});
