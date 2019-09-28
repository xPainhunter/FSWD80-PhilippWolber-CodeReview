var teamMember = [{
	"name": "Elliot",
	"age": 32,
	"job": "Cybersecurity Engeneer",
	"src": "../img/Elliot.jpg"
},{
	"name": "Darlene",
	"age": 29,
	"job": "Rootkit Writer",
	"src": "../img/Darlene.jpg"
},{
	"name": "Romero",
	"age": 50,
	"job": "Phone Phreak",
	"src": "../img/Romero.jpg"
},{
	"name": "Trenton",
	"age": 21,
	"job": "Student",
	"src": "../img/Trenton.jpg"
},{
	"name": "Mobley",
	"age": 35,
	"job": "Hacker",
	"src": "../img/Mobley.jpg"
}]

for (i=0; i<teamMember.length; i++){
	document.getElementById("employees").innerHTML+="<div class='profile'><div class='profileImg'><img src=" + teamMember[i].src + " width=300px></div><div class='profileInfo'><h2>" + teamMember[i].name +  "</h2><p>" + teamMember[i].age +  "</p><p>" + teamMember[i].job + "</p></div></div>";
}