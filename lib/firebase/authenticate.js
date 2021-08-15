const db = require("./firebase");

const authenticate = async (user_id) => {
  let result = undefined;

  const query = db
    .collection("clubs")
    .where("auth_group", "array-contains", user_id);

  await query.get().then((qs) => {
    if (!qs.empty) {
      qs.forEach(async (doc) => {
        result = await doc.data();
      });
    }
  });

  return result;
};

module.exports = authenticate;
