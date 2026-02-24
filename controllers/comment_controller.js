const Comment = require("../models/Comment")


const publish_comment = async(req,res)=>{
    const {content, user, connection} = req.body
    console.log(req.body)
    try{
        await Comment.publish(content, user,connection)
        res.status(201).json({success:true})
    }catch(err){
        console.log("Error:",err)
        res.status(400).json({err})
    }
}

const send_review_comments = async(req,res)=>{
    const review = req.params.id
    try {
        const comments = await Comment.find({connection:review})
        res.status(200).json({comments})
    } catch (err) {
        console.log(err)
        res.status(404).json({err})
    }
}

const delete_comment = async(req,res)=>{
    const {commentId} = req.body
    try {
        await Comment.findByIdAndDelete(commentId)
        res.status(200).json({success:true})
    } catch (err) {
        console.log(err)
        res.status(500)
    }
}


module.exports = {publish_comment, send_review_comments, delete_comment}