const Review = require("../models/Review");

const publish_review = async (req, res) => {
  const { title, content, link, user } = req.body;
  try {
    await Review.publish(title, content, link, user);
    res.status(201).json({ success: true });
  } catch (err) {
    console.log("ERRORS:",err.errors);
    res.status(400).json({ success: false });
  }
};

module.exports = {
  publish_review,
};
