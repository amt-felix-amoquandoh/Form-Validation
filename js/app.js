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
    if(!checkAlphabets(firstName)) return;
    return true;
};

//lastName Validation
function validateLastName (){
    if(checkEmptyField(lastName)) return;
    if(!checkAlphabets(lastName)) return;
    return true;
}

//password validation
function validatePassKey (){
    if(checkEmptyField(confirmPassword)) return;
    if(!keyLength(password, 6, 100)) return;
    //checking password against the following
    //at least one letter
    //at least one letter and one number
    //at least one uppercase one lower case and a number
    //at least one uppercase one lower case a number and one special character
    if(!containsCriteria(password, 1)) return;
    return true;
}

//confirm password validation
function validateConfirmPassKey (){
    
}

//email validation
function validateEmail (){
    if(checkEmptyField(email)) return;
    if(!checkAlphabets(email)) return;
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
    // field.nextElementSibling.style.color = validColor;
}



//check on this funvtion later................
function checkAlphabets(field){
    if(/[a-zA-Z]+/.test(field.value)){
        setValid(field);
        return true;
    } else{
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }   
}


function keyLength(field, minLength, maxLength){
    if(field.value.length >= minLength && field.value.length < maxLength){
        setValid(field);
        return true;
    } else if(field.value.length < minLength){
        setInvalid(field, `${field.name} must be at least ${minLength} characters long`)
        return false;
    } else {
        setInvalid(field, `${field.name} must not be shoter than ${maxLength}`);
        return false;
    }

};


