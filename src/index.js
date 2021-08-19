/** @format */

require("dotenv").config();

const { App } = require("@slack/bolt");
const { WebClient, LogLevel } = require("@slack/web-api");

const {
  who_am_i,
  change_logo,
  change_desc,
  change_cover,
  add_member,
  remove_members,
} = require("../lib/commands/index");
const {
  change_logo_view_1,
  change_desc_view_1,
  change_cover_view_1,
  add_member_view_1,
  remove_members_view_1,
  on_message,
} = require("../lib/events/index");

const oauth_token = process.env.OAUTH_TOKEN;
const app_token = process.env.APP_TOKEN;

const client = new WebClient(oauth_token, {
  logLevel: LogLevel.DEBUG,
});

const app = new App({
  token: oauth_token,
  appToken: app_token,
  socketMode: true,
});

(async () => {
  await app.start();
  console.log("⚡️ Bolt app started");
})();

app.command("/who-am-i", who_am_i);
app.command("/change-logo", change_logo);
app.command("/change-description", change_desc);
app.command("/change-cover", change_cover);
app.command("/add-member", add_member);
app.command("/remove-members", remove_members);

app.view("change_logo_view_1", change_logo_view_1);
app.view("change_desc_view_1", change_desc_view_1);
app.view("change_cover_view_1", change_cover_view_1);
app.view("add_member_view_1", add_member_view_1);
app.view("remove_members_view_1", remove_members_view_1);

app.message("", on_message);
