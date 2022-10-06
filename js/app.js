let mainForm = document.getElementById("formMain");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let passWord = document.getElementById("password");
let errorMessage = document.getElementsByClassName("errorMsg");
let validIcon = document.getElementsByClassName("greenIcon");
let invalidIcon = document.getElementsByClassName("redIcon");


mainForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(userName.value === ""){
        errorMessage[0].innerHTML = "username cannot be blank";
        invalidIcon[0].style.opacity = "1"
    } else{
        errorMessage[0].innerHTML = ""
    }
})

