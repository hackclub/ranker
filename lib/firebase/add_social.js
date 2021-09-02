const db = require("./firebase");

const change_logo = async (path, key, url) => {
  let doc_id = [];

  const clubs_ref = db.collection("clubs");

  const query = clubs_ref.where("path", "==", path);

  await query.get().then((qs) => {
    qs.forEach(async (doc) => {
      doc_id.push(await doc.id);
    });
  });

  if (doc_id[0]) {
    const obj = {};
    obj[key] = url;

    await clubs_ref.doc(doc_id[0]).set(obj, { merge: true });
  }
};

module.exports = change_logo;
