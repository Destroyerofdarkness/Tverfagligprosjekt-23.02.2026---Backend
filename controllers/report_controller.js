const Report = require("../models/Report");

const publish_report = async (req, res) => {
  const { content, user, connection } = req.body;
  console.log(req.body);
  try {
    await Report.publish(content, user, connection);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};

module.exports = { publish_report };
