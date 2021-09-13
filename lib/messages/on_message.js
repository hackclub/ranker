/** @format */

const { a_or_an } = require('../utlis/index');
const data_not_found_messg = require('./data_not_found');

const message_factory = (user_id, points, event_type) => {
  const view_1 = {
    type: 'modal',
    title: {
      type: 'plain_text',
      text: 'Points Updated :yay:',
      emoji: true,
    },
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Hey <@${user_id}>!* :wave:\n\nyour club's stats have been updated!* the number of ${event_type} have been increased by 1\nThese changes can take upto 60mins to reflect!`,
        },
      },
      {
        type: 'image',
        image_url: 'https://media.giphy.com/media/kYnoJzl8aBWIU/giphy.gif',
        alt_text: 'GIF image',
      },
    ],
  };
  const fallback_messg = {
    text: "doesn't looks like a valid operation",
    type: 'modal',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: "doesn't looks like a valid operation",
        },
      },
      {
        type: 'image',
        image_url:
          'https://cloud-7hgy6zfze-hack-club-bot.vercel.app/0image.png',
        alt_text: 'GIF image',
      },
    ],
  };

  const fallback_messg_data_not_found = data_not_found_messg(user_id);

  return {
    view_1,
    fallback_messg,
    fallback_messg_data_not_found,
  };
};

module.exports = message_factory;
