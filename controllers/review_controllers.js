const Review = require("../models/Review");
const { reviewErrorHandler } = require("../handlers/errorHandler");

const publish_review = async (req, res) => {
  const { title, content, link, user } = req.body;
  try {
    await Review.publish(title, content, link, user);
    res.status(201).json({ success: true });
  } catch (err) {
    console.log("ERRORS:", err.errors);
    const errors = reviewErrorHandler(err);
    res.status(400).json({ errors, success: false });
  }
};

const send_out_reviews = async(req,res)=>{
    try{
        const reviews = await Review.find()
        res.status(200).json({reviews})
    }catch(err){
        console.log(err);
        res.status(500).json({err})
    }
}

const get_review_info = async(req,res, next)=>{
    const reviewId = req.params.id
    try {
        const review = await Review.findById(reviewId)
        res.status(201).json({review})
    } catch (err) {
        console.log(err);
        res.status(404).json({err})
        next()
    }
}

module.exports = {
  publish_review,
  send_out_reviews,
  get_review_info
};
