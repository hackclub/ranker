const get_social_name = (command_name) => {
  switch (command_name) {
    case "/add-linkedin":
      return "linkedin";
    case "/add-twitter":
      return "twitter";
    case "/add-instagram":
      return "instagram";
    case "/add-github":
      return "github";
    case "/add-website":
      return "website";
    default:
      return "none";
  }
};

module.exports = get_social_name;
