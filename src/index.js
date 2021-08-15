/** @format */

require("dotenv").config();

const { App } = require("@slack/bolt");
const { WebClient, LogLevel } = require("@slack/web-api");

const { who_am_i } = require("../lib/utils/index");

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
