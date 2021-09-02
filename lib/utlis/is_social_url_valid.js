const { trim, contains } = require("ramda");

const is_url_valid = (url) => {
  url = trim(url);

  const url_protocol = url.slice(0, 8);
  const https_str = "https://";

  if (url_protocol != https_str) return false;

  return true;
};

module.exports = is_url_valid;
