//span tag element//
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

// input tag element//
//name valid//
function validateName(){
    const name = document.getElementById('contact-name').value;

    if(name.length === 0){
        nameError.innerHTML ='name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML ='please full name';
        return false; 
    }
    nameError.innerHTML ='<i class="fas fa-check-circle"></i>';
    return true; 
}

// phone number valid //
function validatePhone(){
    const phone = document.getElementById('contact-phone').value;
    if(phone.length === 0){
        phoneError.innerHTML ='Phone number required';
        return false;  
    }
    if(phone.length !==11){
        phoneError.innerHTML ='Phone number 11 digits';
        return false;  
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML='only digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true; 
}

// email valid //
function validateEmail(){
    const email = document.getElementById('contact-email').value;
    if(email.length === 0){
        emailError.innerHTML ='Email is required';
        return false;
    } 
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false; 
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true; 
} 

// message valid //
 function validateMessage(){
    const message = document.getElementById('contact-message').value;
    if(message.length === 0){
        messageError.innerHTML ='message is required';
        return false;
    }
    if(!message.match(/[^a-zA-Z]+/g)){
        messageError.innerHTML ='please full message';
        return false; 
    }
    messageError.innerHTML ='<i class="fas fa-check-circle"></i>';
    return true; 
 }
