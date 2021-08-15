const db = require("./firebase");

// returns details of the member of a club

const get_member_details = async (user_id, club_name) => {
  let result = undefined;

  const query = db
    .collection("clubs")
    .doc(club_name)
    .collection("team")
    .where("slack_id", "==", user_id);

  await query.get().then((qs) => {
    if (!qs.empty) {
      qs.forEach(async (doc) => {
        result = await doc.data();
      });
    }
  });

  return result;
};

module.exports = get_member_details;
