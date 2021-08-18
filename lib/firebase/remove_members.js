const db = require("./firebase");
const { uniq, toLower, without } = require("ramda");

const change_logo = async (path, rm_members) => {
  let doc_id = [];

  const clubs_ref = db.collection("clubs");

  const query = clubs_ref.where("path", "==", path);

  await query.get().then((qs) => {
    qs.forEach(async (doc) => {
      const { members, auth_group } = await doc.data();
      doc_id.push({ id: doc.id, members, auth_group });
    });
  });

  if (doc_id[0]) {
    const members = uniq(without(rm_members, doc_id[0]["members"]));
    const auth_group = uniq(without(rm_members, doc_id[0]["auth_group"]));

    await clubs_ref.doc(doc_id[0].id).set(
      {
        members,
        auth_group,
      },
      { merge: true }
    );

    rm_members.forEach(async (slack_id) => {
      await clubs_ref
        .doc(doc_id[0].id)
        .collection("team")
        .doc(slack_id)
        .delete();
    });
  }
};

change_logo("apac", ["U28HSBVU3", "U01D6E92S7K"]);

module.exports = change_logo;
