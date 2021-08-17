const data_not_found_messg = require("./data_not_found");
const not_permitted_messg = require("./not_permitted");

const message_factory = (user_id, club_name, cover_url, path) => {
  const view_1 = {
    type: "modal",
    title: {
      type: "plain_text",
      text: "Change Your Club's Cover",
    },
    submit: {
      type: "plain_text",
      text: "Submit",
    },
    private_metadata: path,
    callback_id: "change_cover_view_1", // view identifier
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Hey <@${user_id}>!* :wave:\nHere is the current cover of your club:`,
        },
      },
      {
        type: "image",
        title: {
          type: "plain_text",
          text: `${club_name}'s cover'`,
        },
        block_id: `club cover image`,
        image_url: cover_url,
        alt_text: `${club_name}'s cover`,
      },
      {
        type: "input",
        block_id: "cover_input_block",
        element: {
          type: "plain_text_input",
          action_id: "cover_input_action",
          placeholder: {
            type: "plain_text",
            text: "enter new link",
          },
        },
        label: {
          type: "plain_text",
          text: "enter link to new cover",
          emoji: true,
        },
        hint: {
          type: "plain_text",
          text: "the image should be served via https (i.e should start with https) and shoud have one of the following extensions: png,gif,jpeg,jpg (case-sensetive), example: https://cloud-btfq9z0jg-hack-club-bot.vercel.app/0hackclub_bkbiet.png",
        },
      },
    ],
  };

  const fallback_messg_data_not_found = data_not_found_messg(user_id);
  const fallback_messg_not_permitted = not_permitted_messg(user_id);

  return {
    view_1,
    fallback_messg_data_not_found,
    fallback_messg_not_permitted,
  };
};

const view_2 = (user_id, cover_url) => ({
  type: "modal",
  callback_id: "change_logo_view_2", // view identifier
  title: {
    type: "plain_text",
    text: "Invalid url:bangbang:",
    emoji: true,
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Hey <@${user_id}>!* :wave:\n\nThe url you submitted: ~_${cover_url}_~ isn't a valid url, a valid url is one which:\n1. is served over https ( i.e starts with https )\n2. has any of the following extensions: png, gif, jpeg, jpg ( case-sensetive )\nyou can rerun the command with a valid url.`,
      },
    },
    {
      type: "image",
      image_url: "https://media.giphy.com/media/l2JIm1br3jqUbKPVC/giphy.gif",
      alt_text: "GIF image",
    },
  ],
});

const view_3 = (user_id) => ({
  type: "modal",
  callback_id: "change_logo_view_3", // view identifier
  title: {
    type: "plain_text",
    text: "cover update successful",
    emoji: true,
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Hey <@${user_id}>!* :wave:\n\nyour club *cover has been updated :yay:, these changes can take upto 24hrs to reflect* on our leaderboard.`,
      },
    },
    {
      type: "image",
      image_url: "https://media.giphy.com/media/kYnoJzl8aBWIU/giphy.gif",
      alt_text: "GIF image",
    },
  ],
});

module.exports = message_factory;
module.exports.view_2 = view_2;
module.exports.view_3 = view_3;
