const add = require("./add");

const data = {
  path: "sias",
  name: "Hack Club SIAS",
  desc: "Hack Club SIAS",
  auth_group: ["U02D1L0J5GT"],
  members: ["U02D1L0J5GT"],
  cover:
    "https://cloud-lzk8azrls-hack-club-bot.vercel.app/0screen_shot_2021-08-05_at_10.58.22.png",
  logo: "https://cloud-i2jaub9dv-hack-club-bot.vercel.app/0icon-masked.png",
  ships: 0,
  meetings: 0,
  events: 0,
  hackathons: 0,
  points: 0,
  t_points: 0,
};

const add_club = (obj) => {
  add("clubs", obj.name, obj);
};

add_club(data);

module.exports = add_club;
