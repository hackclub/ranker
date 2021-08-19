const { on_message: event_message } = require("../messages/index");
const { pirates_grp } = require("../data");
const { contains, isEmpty } = require("ramda");

const { get_member_club_details } = require("../firebase/index");

const dict = {
  ship: 30,
  meeting: 50,
  event: 200,
  hackathon: 500,
};

const on_message = async ({ message, say, client }) => {
  const c_id = "C02B4TE8LSZ";

  const {
    parent_user_id,
    user: user_id,
    text: event_type,
    channel,
    thread_ts,
    ts,
  } = message; // parent_user_id = person who started thread, user_id == person who replied in thread

  if (
    channel == c_id &&
    dict[event_type] &&
    contains(user_id, pirates_grp) &&
    parent_user_id
  ) {
    const club_data = await get_member_club_details(parent_user_id);

    if (!club_data) {
      await client.chat.postMessage({
        channel: channel,
        user: user_id,
        ...event_message(parent_user_id).fallback_messg_data_not_found,
        thread_ts,
      });
    } else {
      const { path } = club_data;
      const points = dict[event_type];

      await client.chat.postMessage({
        channel: channel,
        user: user_id,
        ...event_message(parent_user_id, points, event_type).view_1,
        thread_ts,
      });
    }
  } else {
    console.log(message);
    await client.chat.postMessage({
      channel: channel,
      user: user_id,
      ...event_message().fallback_messg,
      thread_ts: thread_ts ?? ts,
    });
  }
};

module.exports = on_message;