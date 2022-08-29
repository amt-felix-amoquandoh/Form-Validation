// inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("passKey");
const confirmPassword = document.getElementById("confirmPassKey");
const email = document.getElementById("email");


//form
const form = document.getElementById("signUpForm");

//colors for validation
const valid = "green";
const invalid = "red";


// firstName validation
function validateFirstName (){
    if(checkEmptyField(firstName)) return;
};

function checkEmptyField (field){
    if(isInputEmpty(field.value.trim())){
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else {
        setValid();
        return false;
    };
};

function isInputEmpty(value){
    if(value === "") return true;
    return false;
}