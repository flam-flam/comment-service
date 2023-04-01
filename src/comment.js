const db = require("./db.js");

async function processComment(comment) {
  console.info(
    JSON.stringify({
      "event": "received",
      "data": comment
    })
  );
  const commentEntry = new db.Comment({
    _id: comment.id,
    createdAt: comment.created_at,
  });
  await commentEntry.save();
}

module.exports = { processComment };
