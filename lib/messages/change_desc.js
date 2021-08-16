const data_not_found_messg = require("./data_not_found");
const not_permitted_messg = require("./not_permitted");

const message_factory = (user_id, desc, path) => {
  const view_1 = {
    type: "modal",
    title: {
      type: "plain_text",
      text: "Change Description",
    },
    submit: {
      type: "plain_text",
      text: "Submit",
    },
    private_metadata: path,
    callback_id: "change_desc_view_1", // view identifier
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Hey <@${user_id}>!* :wave:\nHere is the current description of your club:\n\n>${desc}`,
        },
      },
      {
        type: "input",
        block_id: "desc_input_block",
        element: {
          type: "plain_text_input",
          placeholder: {
            type: "plain_text",
            text: "enter new description",
          },
          max_length: 130,
          action_id: "desc_input_action",
        },
        label: {
          type: "plain_text",
          text: "enter your new description:",
          emoji: true,
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

const view_2 = (user_id) => ({
  type: "modal",
  callback_id: "change_desc_view_2", // view identifier
  title: {
    type: "plain_text",
    text: "description update successful",
    emoji: true,
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Hey <@${user_id}>!* :wave\n\nyour club *logo has been update :yay:, these changes can take upto 24hrs to reflect* on our leaderboard.`,
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
