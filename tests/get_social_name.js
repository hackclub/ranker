const test = require("tape");
const { get_social_name } = require("../lib/utlis/index");

test("test for extracting social media name from slack command name", (t) => {
  t.plan(6);

  t.equal("linkedin", get_social_name("/add-linkedin"));
  t.equal("twitter", get_social_name("/add-twitter"));
  t.equal("instagram", get_social_name("/add-instagram"));
  t.equal("github", get_social_name("/add-github"));
  t.equal("website", get_social_name("/add-website"));
  t.equal("none", get_social_name("/not-valid-command"));
});
