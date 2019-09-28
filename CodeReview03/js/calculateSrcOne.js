var name = document.getElementById("formName").value;
var age = Number(document.getElementById("formAge").value);
var power = Number(document.getElementById("formHorse").value);
var country = document.getElementById("countrySelector").value;

function calculate(power, age, country) {
	var name = document.getElementById("formName").value;
	var age = Number(document.getElementById("formAge").value);
	var power = Number(document.getElementById("formHorse").value);
	var country = document.getElementById("countrySelector").value;

	if (country == "Austria"){
		var amount = Math.floor(power * 100 /(age + 50));
	}
	else if (country == "Hungary"){
		var amount = Math.floor(power * 120 /(age +100));
	}
	else if (country == "Greece"){
		var amount = Math.floor(power *150 /((age+3)+50));
	}
	else {
		
	}
	document.getElementById("result").innerHTML= name + ", your insurance costs " + amount + "€";
}

