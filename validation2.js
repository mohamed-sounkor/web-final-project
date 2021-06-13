window.onload=pageLoad;
function pageLoad(){
	var contactForm = document.getElementById("myForm");
	contactForm.onsubmit= validate;
}
function validate(){
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;

    if(mail == ""){
		alert('E-mail is required !');
		check= false;
	}

	if(password == ""){
		alert('Password is required !');
		check= false;
	}

    if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
		alert("Email is Not Valid");
		check=false;
	}
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=^*[A-Z])(?=.*[!@#$%^&*]).{8}$/)){
		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least and start with upper case letter");
		check=false;
	}
    if (check==true) {
        alert("Thank you for being part of us!");
    }
    else{
        return check;
    }
}