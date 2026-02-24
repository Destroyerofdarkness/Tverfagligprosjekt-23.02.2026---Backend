const Comment = require("../models/Comment")


const publish_comment = async(req,res)=>{
    const {content, user, connection} = req.body
    try{
        await Comment.publish(content, user,connection)
        res.status(201).json({success:true})
    }catch(err){
        console.log("Error:",err)
        res.status(400).json({err})
    }
}

module.exports = {publish_comment}