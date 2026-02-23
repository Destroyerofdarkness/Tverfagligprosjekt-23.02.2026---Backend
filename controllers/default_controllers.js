
const send_message = (req,res)=>{
    try{
        res.json({message: "Ts sh so ass"})
    }catch(err){
        console.log(err)
        res.json({err})
    }
}

module.exports = {
    send_message
}