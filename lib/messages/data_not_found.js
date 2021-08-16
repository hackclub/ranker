const { point_of_contact_name, point_of_contact_slack_id } = require("../data");

const data_not_found_messg = (user_id) => ({
  type: "modal",
  text: `Hey there, so sorry but we couldn't find any information for you in our APAC Leaderboard database, looks like you are not part of a Hack Club that is registered on the leaderboard!, If you want to register your club to the leaderboard contact ${point_of_contact_name}.`,
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Hey <@${user_id}>, so sorry but we couldn't find any information for you in our APAC Leaderboard database, looks like you are not part of a Hack Club that is registered on the leaderboard!\nIf you want to register your club to the leaderboard contact <@${point_of_contact_slack_id}>`,
      },
    },
  ],
});

module.exports = data_not_found_messg;
