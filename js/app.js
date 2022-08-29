// inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("passKey");
const confirmPassword = document.getElementById("confirmPassKey");
const email = document.getElementById("email");


//form
const form = document.getElementById("signUpForm");

//colors for validation
const validColor = "green";
const invalidColor = "red";


// firstName validation
function validateFirstName (){
    if(checkEmptyField(firstName)) return;
    if(!alphabets(firstName)) return;
    return true;
};

//lastName Validation
function validateLastName (){
    if(checkEmptyField(lastName)) return;
    if(!alphabets(lastName)) return;
    return true;
}

//password validation
function validatePassKey (){
    if(checkEmptyField(password)) return;
    if(!alphabets && digits(password)) return;
    return true;
}

//confirm password validation
function validateConfirmPassKey (){
    if(checkEmptyField(password)) return;
    if(!alphabets && digits(password)) return;
    return true;
}

//email validation
function validateEmail (){
    if(checkEmptyField(password)) return;
    if(!alphabets && digits(password)) return;
    return true;
}


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

function setInvalid(field, message){
    field.className = "invalid"
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = invalidColor;
}

function setValid(field){
    field.className = "valid"
    field.nextElementSibling.innerHTML = " ";
    field.nextElementSibling.style.color = validColor;
}

function alphabets(field){
    if(/^[a-zA-Z ]+ $/.test(field.value)){
        setValid(field);
        return true;
    } else{
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }   
}