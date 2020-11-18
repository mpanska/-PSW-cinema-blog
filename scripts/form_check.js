const form = document.getElementById("sign-up");
const name = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorName = document.getElementById("name-error");


form.addEventListener("submit", (e) => {
	if(!checkInputs())
		e.preventDefault();
});

function checkInputs(){
	let message_name = [];
	if (name.value === '' || name.value == null) {
		message_name.push("Name is required");
	}
	else if(!isNaN(name.value) || !isNaN(lname.value)){
		message_name.push("Name or last name cannot be a number");
	}

	if (message_name.length > 0) {
		errorName.innerText = message_name;
		return false;
	}
	else
		return true;
}









