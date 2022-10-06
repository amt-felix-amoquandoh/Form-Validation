let mainForm = document.getElementById("formMain");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let passWord = document.getElementById("password");
let errorMessage = document.getElementsByClassName("errorMsg");
let validIcon = document.getElementsByClassName("greenIcon");
let invalidIcon = document.getElementsByClassName("redIcon");


let formEngine = function (id, number, message){
    if(id.value.trim() === ""){
        errorMessage[number].innerHTML = message;
        invalidIcon[number].style.opacity = "1"
        validIcon[number].style.opacity = "0"
    } else{
        errorMessage[number].innerHTML = "";
        invalidIcon[number].style.opacity = "0"
        validIcon[number].style.opacity = "1"
    }
}

mainForm.addEventListener("submit", function(e){
    e.preventDefault();
    formEngine(userName, 0, "username cannot be blank");
    formEngine(email, 1, "email should not be blank");
    formEngine(passWord, 2, "password must contain letter and numbers");
})

