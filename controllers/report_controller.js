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

const send_out_reports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(201).json({ reports });
  } catch (err) {
    res.status(500);
    console.log(err);
  }
};

module.exports = { publish_report, send_out_reports };
