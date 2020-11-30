const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

//Event Handler
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInputs();
});

//Function
function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value;
    const password1Value = password1.value;
    const password2Value = password2.value;

    if(usernameValue === ''){
        showError(username,"Username can't be blank");
    }
    else if(!isUsernameValid(usernameValue)){
        showError(username,"Username is not Valid");
    }
    else{
        showSuccess(username);
    }

    if(emailValue === ''){
        showError(email,"Email-ID can't be blank");
    }
    else if(!isEmailValid(emailValue)){
        showError(email,"Email-ID is not Valid");
    }
    else{
        showSuccess(email);
    }

    if(password1Value === ''){
        showError(password1,"Password can't be blank");
    }
    else{
        showSuccess(password1);
    }

    if(password2Value === ''){
        showError(password2,"Confirm-Password can't be blank");
    }
    else if(password1Value != password2Value){
        showError(password2,"Password's not Matched");
    }
    else{
        showSuccess(password2);
    }
}

function showError(input,msg){
    const parent = input.parentNode;
    parent.className ='form-control error';
    const small = parent.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input){
    const parent = input.parentNode;
    parent.className ='form-control success';
}

function isEmailValid(email){
    return /^([a-zA-Z0-9_\.-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(name){
    return /^([a-zA-Z]+)([0-9]+)$/.test(name);
}