const { is_logo_url_valid: is_img_url_valid } = require("../utlis/index");
const { add_member } = require("../firebase/index");

const { add_member: add_member_messg } = require("../messages/index");
const { view_2, view_3 } = add_member_messg;

const add_member_view_1 = async ({ ack, body, view }) => {
  const state = view["state"]["values"];

  if (state["add_member_image_input_block"]) {
    const { id: user_id } = body.user;

    const { selected_user } =
      state["add_member_user_input_block"]["add_member_user_input_action"];

    const { value: name } =
      state["add_member_name_input_block"]["add_member_name_input_action"];

    const { value: img_url } =
      state["add_member_image_input_block"]["add_member_image_input_action"];

    const { value: role } =
      state["add_member_role_input_block"]["add_member_role_input_action"];

    const { value: is_lead } =
      state["add_member_is_lead_block"]["add_member_is_lead_action"][
        "selected_option"
      ];

    if (!is_img_url_valid(img_url)) {
      await ack({
        response_action: "update",
        view: view_2(user_id, img_url),
      });
    } else {
      await ack({
        response_action: "update",
        view: view_3(user_id),
      });
      const club_path = view["private_metadata"];
      add_member(
        club_path,
        name,
        img_url,
        role,
        selected_user,
        is_lead == "yes"
      );
    }
  } else {
    await ack();
  }
};

module.exports = add_member_view_1;
