const { point_of_contact_slack_id } = require("../data");

const not_permitted_messg = (user_id) => ({
  type: "modal",
  text: `Hey there, you do not have the permission to perform this command, please contact your club leader inorder to get access to this command.`,
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Hey <@${user_id}> you do not have the permission to perform this command, please contact your club leader inorder to get access to this command.`,
      },
    },
  ],
});

module.exports = not_permitted_messg;
