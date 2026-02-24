const userErrorHandler = (error)=>{

const errors = {name: "", passwd: ""}

if(error.code == 11000){
    errors.name = "Brukeren eksisterer allerede.."
    return errors
}

if(error.message =="Gjentatte passordet er ikke likt.."){
    errors.passwd = error.message
    return errors
}

if(error.message == "User not Found"){
    errors.name = "Brukeren finnes ikke.."
    return errors
}

if(error.message == "Password not correct"){
    errors.passwd = "Passordet er feil.."
    return errors
}

Object.values(error.errors).forEach(({ properties }) => {
    errors[properties.path] = properties.message;
  });
return errors;
}

const reviewErrorHandler = (error)=>{

    const errors = {title: "", content: "", link:"", user:""}
    if(error.code == 11000){
    errors.title = "Titlen eksisterer allerede.."
    return errors
    }

    Object.values(error.errors).forEach(({ properties }) => {
    errors[properties.path] = properties.message;
  });
return errors;
}


module.exports = {userErrorHandler,reviewErrorHandler} 