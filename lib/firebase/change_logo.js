const db = require("./firebase");

const change_logo = async (path, logo_url) => {
  let doc_id = [];

  const clubs_ref = db.collection("clubs");

  const query = clubs_ref.where("path", "==", path);

  await query.get().then((qs) => {
    qs.forEach(async (doc) => {
      doc_id.push(await doc.id);
    });
  });

  if (doc_id[0]) {
    await clubs_ref.doc(doc_id[0]).set(
      {
        logo: logo_url,
      },
      { merge: true }
    );
  }
};

module.exports = change_logo;
