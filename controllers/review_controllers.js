const Review = require("../models/Review");
const {reviewErrorHandler}= require("../handlers/errorHandler")
const publish_review = async (req, res) => {
  const { title, content, link, user } = req.body;
  try {
    await Review.publish(title, content, link, user);
    res.status(201).json({ success: true });
  } catch (err) {
    console.log("ERRORS:",err.errors);
    const errors = reviewErrorHandler(err)
    res.status(400).json({ errors,success: false });
  }
};

module.exports = {
  publish_review,
};
