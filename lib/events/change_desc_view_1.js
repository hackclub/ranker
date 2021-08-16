const { change_desc } = require("../firebase/index");

const { change_desc: change_desc_messg } = require("../messages/index");
const { view_2 } = change_desc_messg;

const change_desc_view_1 = async ({ ack, body, view }) => {
  if (view["state"]["values"]["desc_input_block"]) {
    const { id: user_id } = body.user;

    await ack({
      response_action: "update",
      view: view_2(user_id),
    });

    const { value: club_desc } =
      view["state"]["values"]["desc_input_block"]["desc_input_action"];

    const club_path = view["private_metadata"];

    await change_desc(club_path, club_desc);
  } else {
    ack();
  }
};

module.exports = change_desc_view_1;
