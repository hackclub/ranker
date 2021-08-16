/** @format */

require("dotenv").config();

const { App } = require("@slack/bolt");
const { WebClient, LogLevel } = require("@slack/web-api");

const { who_am_i, change_logo, change_desc } = require("../lib/commands/index");
const {
  change_logo_view_1,
  change_desc_view_1,
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

app.view("change_logo_view_1", change_logo_view_1);
app.view("change_desc_view_1", change_desc_view_1);
