const who_am_i = async ({ command, ack, respond, context }) => {
  await ack();

  const { user_id, channel_id, channel_name } = command;
};

module.exports = who_am_i;
