const data_not_found_messg = require("./data_not_found");
const not_permitted_messg = require("./not_permitted");

const message_factory = (user_id, club_name, logo_url, path) => {
  const view_1 = {
    type: "modal",
    title: {
      type: "plain_text",
      text: "Remove members",
    },
    submit: {
      type: "plain_text",
      text: "Submit",
    },
    private_metadata: path,
    callback_id: "remove_member_view_1", // view identifier
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Hey <@${user_id}>!* :wave:\nSelect members from the below dropdown to remove them:`,
        },
      },
      {
        type: "input",
        block_id: "remove_members_input_block",
        element: {
          action_id: "remove_members_input_action",
          type: "multi_static_select",
          placeholder: {
            type: "plain_text",
            text: "Select members",
          },
        },
        label: {
          type: "plain_text",
          text: "Select members to remove(you can't remove yourself)",
          emoji: true,
        },
        hint: {
          type: "plain_text",
          text: "you can select multiple members!",
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
  callback_id: "add_member_view_2", // view identifier
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
  callback_id: "add_member_view_3", // view identifier
  title: {
    type: "plain_text",
    text: "member added",
    emoji: true,
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Hey <@${user_id}>!* :wave:\n\nthe requested *member has been added* :yay:`,
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
