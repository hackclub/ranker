/** @format */

const db = require('./firebase');

const add_points = async (path, event_type, points) => {
  let doc_id = [];

  const clubs_ref = db.collection('clubs');

  const query = clubs_ref.where('path', '==', path);

  const event_key = event_type + 's';

  await query.get().then((qs) => {
    qs.forEach(async (doc) => {
      const doc_data = await doc.data();
      const { t_points, points } = doc_data;
      const id = doc.id;

      doc_id.push({
        ev_points: doc_data[event_key],
        t_points,
        points,
        id,
      });
    });
  });

  if (doc_id[0]) {
    console.log(doc_id[0]);

    const obj = {
      t_points: parseInt(doc_id[0].t_points) + points,
      points: parseInt(doc_id[0].points) + points,
    };

    obj[event_key] = parseInt(doc_id[0].ev_points) + 1;

    await clubs_ref.doc(doc_id[0].id).set(obj, { merge: true });
  }
};

module.exports = add_points;
