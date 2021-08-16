const { is_permitted } = require("../utlis/index");

const {
  get_member_club_details,
  get_member_details,
} = require("../firebase/index");
const { who_am_i: who_am_i_message } = require("../messages/index");

const who_am_i = async ({ command, ack, respond }) => {
  await ack();

  const { user_id } = command;

  const club_details = await get_member_club_details(user_id);

  if (club_details) {
    const { doc_id: club_name, path } = club_details;

    const club_url = `https://apac-leaderboard.hackclub.com/club/${path}`;

    const user_is_permitted = is_permitted(user_id, club_details);

    const { name: user_name, role: user_role } = await get_member_details(
      user_id,
      club_name
    );

    respond(
      who_am_i_message(
        user_id,
        user_name,
        club_name,
        user_role,
        club_url,
        user_is_permitted
      ).success_messg
    );
  } else respond(who_am_i_message(user_id).fallback_messg);
};

module.exports = who_am_i;
