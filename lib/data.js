require("dotenv").config();

const point_of_contact_name = process.env.POINT_OF_CONTACT_NAME;
const point_of_contact_slack_id = process.env.POINT_OF_CONTACT_SLACK_ID;

const pirates_grp = ["U010XUNLX40", "U0261EB1EG7", "U01PNGGBBT5", "USNPNJXNX"];

module.exports.point_of_contact_name = point_of_contact_name;
module.exports.point_of_contact_slack_id = point_of_contact_slack_id;
module.exports.pirates_grp = pirates_grp;
