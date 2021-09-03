const { a_or_an } = require("../utlis/index");
const data_not_found_messg = require("./data_not_found");
const not_permitted_messg = require("./not_permitted");

const message_factory = (key, user_id, path) => {
  const view_1 = {
    type: "modal",
    title: {
      type: "plain_text",
      text: `Add ${key} link`,
    },
    submit: {
      type: "plain_text",
      text: "Submit",
    },
    private_metadata: `${path} ${key}`,
    callback_id: "add_social_view_1", // view identifier
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Hey <@${user_id}>!* :wave:\nLet's add ${a_or_an(
            key
          )} ${key} link for your club :yay:`,
        },
      },
      {
        type: "input",
        block_id: "add_social_input_block",
        element: {
          type: "plain_text_input",
          action_id: "add_social_input_action",
          placeholder: {
            type: "plain_text",
            text: `enter link for ${key}`,
          },
        },
        label: {
          type: "plain_text",
          text: `enter link for ${key}`,
          emoji: true,
        },
        hint: {
          type: "plain_text",
          text: "enter a valid link in the above input box.",
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

const view_2 = (user_id, url) => ({
  type: "modal",
  callback_id: "add_social_view_2", // view identifier
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
        text: `*Hey <@${user_id}>!* :wave:\n\nThe url you submitted: ~_${url}_~ isn't a valid url, please add valid url!`,
      },
    },
    {
      type: "image",
      image_url: "https://media.giphy.com/media/l2JIm1br3jqUbKPVC/giphy.gif",
      alt_text: "GIF image",
    },
  ],
});

const view_3 = (user_id, key) => ({
  type: "modal",
  callback_id: "add_social_view_3", // view identifier
  title: {
    type: "plain_text",
    text: `url update successful`,
    emoji: true,
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Hey <@${user_id}>!* :wave:\n\nyour club *${key} url has been updated :yay:, these changes can take upto 60mins to reflect* on our leaderboard.`,
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
