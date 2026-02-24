const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    content:{
        type:String,
        required:[true, "Skriv inn en kommentar.."]
    },
    user:{
        type:String,
        required:[true, "User must be provided.."]
    },
    connection:{
        type:String,
        required:[true, "Review connection must pe provided"]
    }
});

const Comment = model("Comments", commentSchema);

module.export = Comment