const { is_logo_url_valid } = require("../utlis/index");
const { change_cover } = require("../firebase/index");

const { change_cover: change_cover_messg } = require("../messages/index");
const { view_2, view_3 } = change_cover_messg;

const change_cover_view_1 = async ({ ack, body, view }) => {
  if (view["state"]["values"]["cover_input_block"]) {
    const { id: user_id } = body.user;
    const { value: club_cover } =
      view["state"]["values"]["cover_input_block"]["cover_input_action"];

    if (!is_logo_url_valid(club_cover)) {
      await ack({
        response_action: "update",
        view: view_2(user_id, club_cover),
      });
    } else {
      const club_path = view["private_metadata"];
      await ack({
        response_action: "update",
        view: view_3(user_id),
      });
      change_cover(club_path, club_cover);
    }
  } else {
    await ack();
  }
};

module.exports = change_cover_view_1;
