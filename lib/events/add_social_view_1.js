const { is_social_url_valid } = require("../utlis/index");
const { add_social } = require("../firebase/index");

const { add_social: add_social_messg } = require("../messages/index");
const { view_2, view_3 } = add_social_messg;

const add_social_view_1 = async ({ ack, body, view }) => {
  if (view["state"]["values"]["add_social_input_block"]) {
    const { value: social_url } =
      view["state"]["values"]["add_social_input_block"][
        "add_social_input_action"
      ];

    const { id: user_id } = body.user;

    if (!is_social_url_valid(social_url)) {
      await ack({
        response_action: "update",
        view: view_2(user_id, social_url),
      });
    } else {
      const [club_path, social_key] = view["private_metadata"].split(" ");

      await ack({
        response_action: "update",
        view: view_3(user_id, social_key),
      });
      add_social(club_path, social_key, social_url);
    }
  } else {
    ack();
  }
};

module.exports = add_social_view_1;
