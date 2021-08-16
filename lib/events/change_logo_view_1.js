const { is_logo_url_valid } = require("../utlis/index");
const { change_logo } = require("../firebase/index");

const { change_logo: change_logo_messg } = require("../messages/index");
const { view_2, view_3 } = change_logo_messg;

const change_logo_view_1 = async ({ ack, body, view, client }) => {
  if (view["state"]["values"]["logo_input_block"]) {
    const { value: logo_url } =
      view["state"]["values"]["logo_input_block"]["logo_input_action"];

    const { id: user_id } = body.user;

    if (!is_logo_url_valid(logo_url)) {
      await ack({
        response_action: "update",
        view: view_2(user_id, logo_url),
      });
    } else {
      const club_path = view["private_metadata"];
      await ack({
        response_action: "update",
        view: view_3(user_id),
      });
      change_logo(club_path, logo_url);
    }
  } else {
    ack();
  }
};

module.exports = change_logo_view_1;
