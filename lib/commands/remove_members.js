const { is_permitted } = require("../utlis/index");

const { get_member_club_details } = require("../firebase/index");

const { remove_members: remove_members_messg } = require("../messages/index");

const remove_members = async ({ command, ack, respond, client, body }) => {
  await ack();

  const { user_id } = command;

  const club_details = await get_member_club_details(user_id);

  if (club_details) {
    const { doc_id: club_name, logo: logo_url, path } = club_details;

    const user_is_permitted = is_permitted(user_id, club_details);

    if (user_is_permitted)
      await client.views.open({
        trigger_id: body.trigger_id,
        view: remove_members_messg(user_id, club_name, logo_url, path).view_1,
      });
    else respond(remove_members_messg(user_id).fallback_messg_not_permitted);
  } else respond(remove_members_messg(user_id).fallback_messg_data_not_found);
};

module.exports = remove_members;
