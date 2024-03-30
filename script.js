let email = document.querySelector('#email')
let password = document.querySelector('#password')
let email_error = document.querySelector('#email-error')
let password_error = document.querySelector('#password-error')
let btn = document.querySelector('#btn')


btn.addEventListener("click", (e) =>{
    e.preventDefault();
    validatePassword();

    finalmsg();

});


function validEmail(){

    let emailVal = email.value;

    if(emailVal.length < 3){
        email_error.innerText = `Make sure email is more than 3 characters and has @ and a .`
        return false;
    }
    if(!email.includes('@') || !email.includes('.')){
        email_error.innerText = `Email must contain @ and .`;
        return false;
    }
    return true;
    
}
function validatePassword() {
    let passwordVal = password.value;
    
    if(password.length < 8){
        password_error.innerText = `Make sure password is more than 8 characters.`
        return false;
    }else {
        password_error.innerText = ``;
        return true;
    }
}

function finalmsg(){
    if(validEmail() && validatePassword()){
        email_error.innerText = ``;
        password_error.innerText = `All good to go!`
        clear();
    }
}
function clear(){
    email.value = "";
    password.value = "";
}