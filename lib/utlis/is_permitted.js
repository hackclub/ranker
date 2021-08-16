const { contains } = require("ramda");

const is_permitted = (user_id, { auth_group }) => contains(user_id, auth_group);

module.exports = is_permitted;
