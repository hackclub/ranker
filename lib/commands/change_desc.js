const { is_permitted } = require("../utlis/index");

const { get_member_club_details } = require("../firebase/index");

const { change_desc: change_desc_messg } = require("../messages/index");

const change_desc = async ({ command, ack, respond, client, body }) => {
  await ack();

  const { user_id } = command;

  const club_details = await get_member_club_details(user_id);

  if (club_details) {
    const { doc_id: club_name, desc: club_desc, path } = club_details;

    const user_is_permitted = is_permitted(user_id, club_details);

    if (user_is_permitted)
      await client.views.open({
        trigger_id: body.trigger_id,
        view: change_desc_messg(user_id, club_desc, path).view_1,
      });
    else respond(change_desc_messg(user_id).fallback_messg_not_permitted);
  } else respond(change_desc_messg(user_id).fallback_messg_data_not_found);
};

module.exports = change_desc;
