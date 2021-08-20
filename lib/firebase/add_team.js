const db = require("./firebase");
const _ = require("ramda");

const add_member = require("./add_member");
const remove_members = require("./remove_members");

const person = [
  {
    name: "Shubham Gupta",
    role: "lead/member",
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/1image.png",
    is_lead: true,
    slack_id: "U01F9A5R0R1",
  },
  {
    name: "Keshav Kumar Rohila",
    role: "co-lead/member",
    is_lead: true,
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/3image.png",
    slack_id: "U028APVDDQX",
  },
  {
    name: "Vinay Sharma",
    role: "Secretory/member",
    is_lead: false,
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/1image.png",
    slack_id: "U028WFDPML4",
  },
  {
    name: "Shristi Agarwal",
    role: "Jr. Secretory/member",
    is_lead: false,
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/2image.png",
    slack_id: "U0293069FBK",
  },
];

const person_2 = [
  {
    name: "Fadhil Abdulla",
    role: "lead",
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/1image.png",
    slack_id: "U01TM2KUPCH",
    is_lead: true,
  },
  {
    name: "Aditya Praveen",
    role: "member",
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/3image.png",
    slack_id: "U021TQP729K",
    is_lead: false,
  },

  {
    name: " Amarjith Ajayababu T K",
    role: "member",
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/1image.png",
    slack_id: "U025YGHNV6V",
    is_lead: false,
  },

  {
    name: "Basith",
    role: "member",
    img_url: "https://cloud-rab0ysldi-hack-club-bot.vercel.app/3image.png",
    slack_id: "U021WSW90M8",
    is_lead: false,
  },
];

const add_team = async (path, { name, role, img_url, slack_id, is_lead }) => {
  await add_member(path, name, img_url, role, slack_id, is_lead);
};

const del_mems = [
  "U028RSQ2U5R",
  "U029E17C89W",
  "U028RCQ7S2W",
  "U02B6S2263G",
  "U029F3TFX8Q",
  "U029DV9LQRW",
  "U02BDJYUBM0",
  "U028Q9195B4",
  "U029DM7S6GG",
];

del_mems.forEach(async (obj, idx) => {
  setTimeout(async () => {
    await remove_members("bkbiet", [obj]);
  }, 1000 * (idx + 1));
});

module.exports = add_team;
