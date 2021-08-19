const data_not_found_messg = require("./data_not_found");
const not_permitted_messg = require("./not_permitted");

const message_factory = (user_id, club_name, logo_url, path) => {
  const view_1 = {
    type: "modal",
    title: {
      type: "plain_text",
      text: "Add a new post",
    },
    submit: {
      type: "plain_text",
      text: "Submit",
    },
    private_metadata: path,
    callback_id: "add_post_view_1", // view identifier
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Hey <@${user_id}>!* :wave:\nLet's add a new post for your club:`,
        },
      },
      {
        type: "input",
        block_id: "add_post_desc_input_block",
        element: {
          type: "plain_text_input",
          action_id: "add_post_desc_input_action",
          placeholder: {
            type: "plain_text",
            text: "Enter A small description for this post",
          },
          max_length: 300,
        },
        label: {
          type: "plain_text",
          text: "Enter A small description for this post.",
          emoji: true,
        },
      },
      {
        type: "input",
        block_id: "add_post_image_input_block",
        element: {
          type: "plain_text_input",
          action_id: "add_post_image_input_action",
          placeholder: {
            type: "plain_text",
            text: "enter link for the post's image",
          },
        },
        label: {
          type: "plain_text",
          text: "enter link for the post's image",
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

const view_2 = (user_id, logo_url) => ({
  type: "modal",
  callback_id: "add_post_view_2", // view identifier
  title: {
    type: "plain_text",
    text: "Invalid Image:bangbang:",
    emoji: true,
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Hey <@${user_id}>!* :wave:\n\nThe url you submitted: ~_${logo_url}_~ isn't a valid url, a valid url is one which:\n1. is served over https ( i.e starts with https )\n2. has any of the following extensions: png, gif, jpeg, jpg ( case-sensetive )\nyou can rerun the command with a valid url.`,
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
  callback_id: "add_post_view_3", // view identifier
  title: {
    type: "plain_text",
    text: "post added",
    emoji: true,
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Hey <@${user_id}>!* :wave:\n\nthe requested *post has jeen added* :yay:`,
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
