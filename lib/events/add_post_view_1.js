const { is_logo_url_valid: is_img_url_valid } = require("../utlis/index");
const { add_post } = require("../firebase/index");

const { add_post: add_post_messg } = require("../messages/index");
const { view_2, view_3 } = add_post_messg;

const add_post_view_1 = async ({ ack, body, view }) => {
  const state = view["state"]["values"];

  if (state["add_post_desc_input_block"]) {
    const { id: user_id } = body.user;

    const { value: desc } =
      state["add_post_desc_input_block"]["add_post_desc_input_action"];

    const { value: img_url } =
      state["add_post_image_input_block"]["add_post_image_input_action"];

    console.log(desc, img_url);

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
      add_post(club_path, desc, img_url);
    }
  } else {
    await ack();
  }
};

module.exports = add_post_view_1;
