const { contains, filter } = require("ramda");

const { remove_members } = require("../firebase/index");

const { remove_members: remove_members_messg } = require("../messages/index");
const { view_2, view_3 } = remove_members_messg;

const remove_members_view_1 = async ({ ack, body, view }) => {
  const state = view["state"]["values"];

  if (state["remove_members_input_block"]) {
    const { id: user_id } = body.user;

    const { selected_users } =
      state["remove_members_input_block"]["remove_members_input_action"];

    const deleting_self = contains(user_id);

    if (deleting_self(selected_users))
      await ack({
        response_action: "update",
        view: view_2(user_id),
      });
    else {
      await ack({
        response_action: "update",
        view: view_3(user_id),
      });

      const club_path = view["private_metadata"];
      await remove_members(club_path, selected_users);
    }
  } else {
    await ack();
  }
};

module.exports = remove_members_view_1;
