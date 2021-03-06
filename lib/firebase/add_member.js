const db = require("./firebase");
const { uniq, toLower } = require("ramda");

const change_logo = async (path, name, img_url, role, slack_id, is_lead) => {
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
    doc_id[0]["members"].push(slack_id);

    const members = uniq(doc_id[0]["members"]);

    if (is_lead) {
      doc_id[0]["auth_group"].push(slack_id);
    }

    const auth_group = uniq(doc_id[0]["auth_group"]);

    await clubs_ref.doc(doc_id[0].id).set(
      {
        members,
        auth_group,
      },
      { merge: true }
    );

    await clubs_ref
      .doc(doc_id[0].id)
      .collection("team")
      .doc(slack_id)
      .set(
        {
          name,
          img_url,
          role: toLower(role),
          slack_id,
          is_lead,
        },
        { merge: true }
      );
  }
};

module.exports = change_logo;
