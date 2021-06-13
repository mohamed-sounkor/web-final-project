window.onload=pageLoad;
function pageLoad(){
	var contactForm = document.getElementById("myForm");
	contactForm.onsubmit= validate;
}
function validate(){
	/*var check = true;*/
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var mail = document.getElementById("mail").value;
	var phone = document.getElementById("phone").value;
	var password = document.getElementById("password").value;
	var adress= document.getElementById("address").value;

    if(fname == ""){
		alert('First Name is required !');
		return false;
	}
	
    if(lname == ""){
		alert('Last Name is required !');
		return false;
	}
	
	if(mail == ""){
		alert('E-mail is required !');
		return false;
	}
	if (phone == "") {
		alert('Phone is required !');
		return false;
	}
	if(password == ""){
		alert('Password is required !');
		return false;
	}
	
	if(adress == ""){
		alert('Address is required !');
		return false;
	}
    if (!fname.match(/^[A-Za-z ]+$/)){
		alert("only letters or space allowed in name field");
		return false;
	}
    if (!lname.match(/^[A-Za-z ]+$/)){ 
		alert("only letters or space allowed in name field");
		return false;
	}
    if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
		alert("Email is Not Valid");
		return false;
	}
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=^*[A-Z])(?=.*[!@#$%^&*]).{8}$/)){
		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least and start with upper case letter");
		return false;
	}
    if (!phone.match(/^[0-9]{11}$/)){

		alert("Phone is not valid");
		return false;
	}
 
        alert("Thank you for being part of us!");

        return true;
}
