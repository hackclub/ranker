const db = require("./firebase");

// returns details of the club memeber belongs to

const get_member_club_details = async (user_id) => {
  let result = undefined;

  const query = db
    .collection("clubs")
    .where("members", "array-contains", user_id);

  await query.get().then((qs) => {
    if (!qs.empty) {
      qs.forEach(async (doc) => {
        result = await doc.data();
        result.doc_id = doc.id;
      });
    }
  });

  return result;
};

module.exports = get_member_club_details;
