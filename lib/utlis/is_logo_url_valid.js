const { trim, contains } = require("ramda");

const is_logo_url_valid = (logo_url) => {
  logo_url = trim(logo_url);
  const logo_url_protocol = logo_url.slice(0, 8);
  const https_str = "https://";

  if (logo_url_protocol != https_str) return false;

  const logo_url_ext_1 = logo_url.slice(-3); // for png,gif,jpg matchcases
  const logo_url_ext_2 = logo_url.slice(-4); // for png, jpeg matchcases

  const allowed_extensions = ["png", "jpg", "gif", "jpeg"];

  if (contains(logo_url_ext_1, allowed_extensions)) return true;
  if (contains(logo_url_ext_2, allowed_extensions)) return true;

  return false;
};

module.exports = is_logo_url_valid;
