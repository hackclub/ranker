const { point_of_contact_name, point_of_contact_slack_id } = require("../data");

const data_not_found_messg = require("./data_not_found");

const get_permission = (is_permitted) => {
  if (is_permitted) return "have the permission";
  else return "don't have the permission";
};

const message_factory = (
  user_id,
  user_name,
  club_name,
  role,
  club_site,
  is_permitted
) => {
  const success_messg = {
    type: "modal",
    text: `Hey there, So you are ${user_name}, your club name is : ${club_name}, your role in the club is of a ${role}, your club's url ( for APAC Leaderboard ) is: ${club_site}, you ${get_permission(
      is_permitted
    )} to edit the contents of your club's site (on APAC Leaderboard)`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Hey <@${user_id}>!* :wave:\nyour name is : ${user_name},\nyour club name is : ${club_name}\nyour role in the club is of a \`${role}\`\nyour club's url is (for APAC Leaderboard) is: ${club_site}\nyou \`${get_permission(
            is_permitted
          )}\` to edit the contents of your club's site (on APAC Leaderboard)`,
        },
      },
    ],
  };

  const fallback_messg = data_not_found_messg(user_id);

  return { success_messg, fallback_messg };
};

module.exports = message_factory;
