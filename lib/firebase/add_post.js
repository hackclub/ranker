const firebase = require("firebase");

const db = require("./firebase");
const { uniq, toLower } = require("ramda");

const add_post = async (path, text, img_url) => {
  let doc_id = [];

  const clubs_ref = db.collection("clubs");
  const query = clubs_ref.where("path", "==", path);

  await query.get().then((qs) => {
    qs.forEach(async (doc) => {
      doc_id.push(doc.id);
    });
  });

  if (doc_id[0]) {
    await clubs_ref.doc(doc_id[0]).collection("posts").add({
      text,
      img_url,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
};

module.exports = add_post;
