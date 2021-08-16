const test = require("tape");
const { is_logo_url_valid } = require("../lib/utlis/index");

test("checking is_logo_url_valid utility", (t) => {
  t.plan(5);

  const url_1 = "https://some_image.png";
  const url_2 = "https://some_image.jpeg";
  const url_3 = "http://some_image.jpeg";
  const url_4 = "https://some_image.jp";
  const url_5 = "https:/some_image.jp";

  t.true(is_logo_url_valid(url_1));
  t.true(is_logo_url_valid(url_2));
  t.false(is_logo_url_valid(url_3));
  t.false(is_logo_url_valid(url_4));
  t.false(is_logo_url_valid(url_5));
});
