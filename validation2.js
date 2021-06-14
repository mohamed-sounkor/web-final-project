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
		return false;
	}

	if(password == ""){
		alert('Password is required !');
		return false;
	}

    if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
		alert("Email is Not Valid");
		return false;
	}
    if (!password.match(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8}$/)){
		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least and start with upper case letter");
		return false;
	}
	var str = password;
	if(!(str[0].toUpperCase() == str[0]))
	{
	   alert('First character Must be an upper case.');  
	   return false;
	}

    alert("Welcom to your page!");
	return true;
}
