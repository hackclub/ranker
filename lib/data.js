require("dotenv").config();

const point_of_contact_name = process.env.POINT_OF_CONTACT_NAME;
const point_of_contact_slack_id = process.env.POINT_OF_CONTACT_NAME_SLACK_ID;

module.exports.point_of_contact_name = point_of_contact_name;
module.exports.point_of_contact_slack_id = point_of_contact_slack_id;
