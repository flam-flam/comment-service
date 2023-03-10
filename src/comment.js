function processComment(comment) {
    console.info(JSON.stringify({
        "event": "received",
        "data": comment
    }))
  }

module.exports = { processComment };
