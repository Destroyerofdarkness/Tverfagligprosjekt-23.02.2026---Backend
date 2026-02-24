
const send_message = (req,res)=>{
    try{
        res.json({message: "Hello World! I am the best programmer on Earth!"})
    }catch(err){
        console.log(err)
        res.json({err})
    }
}

module.exports = {
    send_message
}