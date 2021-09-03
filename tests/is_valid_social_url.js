const test = require("tape");
const { is_logo_url_valid } = require("../lib/utlis/index");

test("checking is_logo_url_valid utility", (t) => {
  t.plan(3);

  const url_1 = "https://some_link";
  const url_2 = "Http://some_link";
  const url_3 = "http://some_link";

  t.true(is_logo_url_valid(url_1));
  t.false(is_logo_url_valid(url_3));
  t.false(is_logo_url_valid(url_5));
});
