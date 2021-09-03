const { curry } = require("ramda");
const { is_permitted, get_social_name } = require("../utlis/index");

const { get_member_club_details } = require("../firebase/index");

const { add_social: add_social_messg } = require("../messages/index");

const add_social = async ({ command, ack, respond, client, body }) => {
  await ack();

  const { user_id, command: command_name } = command;
  const key = get_social_name(command_name);

  const club_details = await get_member_club_details(user_id);

  if (club_details) {
    const { path } = club_details;

    const user_is_permitted = is_permitted(user_id, club_details);

    if (user_is_permitted)
      await client.views.open({
        trigger_id: body.trigger_id,
        view: add_social_messg(key, user_id, path).view_1,
      });
    else respond(add_social_messg(user_id).fallback_messg_not_permitted);
  } else respond(add_social_messg(user_id).fallback_messg_data_not_found);
};

module.exports = add_social;
