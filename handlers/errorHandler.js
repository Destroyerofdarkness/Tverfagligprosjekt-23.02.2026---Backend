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

Object.values(error.errors).forEach(({ properties }) => {
    errors[properties.path] = properties.message;
  });
return errors
}

module.exports = {userErrorHandler} 