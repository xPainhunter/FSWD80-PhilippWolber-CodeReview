// SUPER CLASS LOCATION

class Locations{
	name:string;
	city:string;
	zip:number;
	adr:string;
	img:string;
	vis:string;
	age:number;

	constructor(name:string, city:string, zip:number, adr:string, img:string, vis:string, age:number){
		this.name=name;
		this.city=city;
		this.zip=zip;
		this.adr=adr;
		this.img=img;
		this.vis=vis;
		this.age=age;
	};
};

// CHILD CLASS RESTAURANT

class Restaurants extends Locations{
	tel:string;
	webAdr:string;

	constructor(name:string, city:string, zip:number, adr:string, img:string, vis:string, age:number, tel:string, webAdr:string){
		super(name, city, zip, adr, img, vis, age);
		this.tel=tel;
		this.webAdr=webAdr;
	};
};

// CHILD CLASS EVENTS

class Events extends Locations{
	eDate:string;
	eTime:string;

	constructor(name:string, city:string, zip:number, adr:string, img:string, vis:string, age:number, eDate:string, eTime:string){
		super(name, city, zip, adr, img, vis, age);
		this.eDate=eDate;
		this.eTime=eTime;
	};
};


//----------------------------------------------------------------------------------------------------------------------------------

// OBJECT CONSTRUCTION TAKES PART HERE

var DonauKanal = new Locations("Donaukanal", "Vienna", 1010, "Freda-Meissner-Blau-Promenade", "../img/donaukanal.jpeg", "13. Juli 2019, 14:00", 4);
var Gargellen = new Locations("Schiegebiet", "Gargellen", 6787, "Gargellen 89a", "../img/gargellen.jpg", "12. März 2019, 18:00", 3);

var Hörnlingen = new Restaurants("Hörnlingen", "Rankweil", 6830, "Bahnhofstraße 25", "../img/hörnlingen.png", "2. September 2019, 19:00", 5, "+43 5522 25458", "https://hoernlingen.at/");
var Grace = new Restaurants("Grace", "Vienna", 1040, "Danhausergasse 3", "../img/grace.jpg", "14. November 2018, 20:00", 2, "+43 1 5031022", "https://www.grace-restaurant.at/");

var BurningMan = new Events("Burning Man", "Black Rock Desert", 0, "Black Rock City", "../img/burningman.jpg", "2. September 2013, 23:00", 1, "30. August 2020", "07:00");
var Fusion = new Events("Fusion", "Lärz", 17248, "Flugplatz Lärz", "../img/fusion.jpg", "still trying to get there!", 6, "25. Juni 2020", "07:00");


//----------------------------------------------------------------------------------------------------------------------------------

var all = [DonauKanal, Gargellen, Hörnlingen, Grace, BurningMan, Fusion];

function displayLocations(){
	for(let i of all){
		if(i.constructor.name=="Locations"){
			document.getElementById("places").innerHTML+=`
				<div class="card col-md-5 col-lg-3 d-none d-md-block">
					<div class="imgCont">
						<img src="${i.img}" class="card-img-top">
					</div>
					<div class="card-body">
						<h5 class="card-title">${i.name}</h5>
						<ul class="list-group list-group-flush cContent">
							<li class="list-group-item"><b>Where:</b> ${i.city}</li>
							<li class="list-group-item"><b>ZIP:</b> ${i.zip}</li>
							<li class="list-group-item"><b>Adr:</b> ${i.adr}</li>
							<li class="list-group-item"><b>I was there last:</b> ${i.vis}</li>
						</ul>
					</div>
				</div>

				<div class="card col-12 d-block d-md-none">
					<h5 class="card-header">${i.name}</h5>
					<div class="card-body">
					 	<ul class="list-group list-group-flush cContentSmall">
							<li class="list-group-item"><b>Where:</b> ${i.city}</li>
							<li class="list-group-item"><b>ZIP:</b> ${i.zip}</li>
							<li class="list-group-item"><b>Adr:</b> ${i.adr}</li>
							<li class="list-group-item"><b>I was there last:</b> ${i.vis}</li>
						</ul>
					</div>
				</div>
			`
		}
		else if(i.constructor.name=="Restaurants"){
			document.getElementById("places").innerHTML+=`
				<div class="card col-md-5 col-lg-3 d-none d-md-block">
					<div class="imgCont">
						<img src="${i.img}" class="card-img-top">
					</div>
					<div class="card-body">
						<h5 class="card-title">${i.name}</h5>
						<ul class="list-group list-group-flush cContent">
							<li class="list-group-item"><b>Where:</b> ${i.city}</li>
							<li class="list-group-item"><b>ZIP:</b> ${i.zip}</li>
							<li class="list-group-item"><b>Adr:</b> ${i.adr}</li>
							<li class="list-group-item"><b>I was there last:</b> ${i.vis}</li>
							<li class="list-group-item"><b>Tel.:</b> ${i.tel}</li>
							<li class="list-group-item"><b>WebAdr:</b> <a href="${i.webAdr}">${i.webAdr}</a></li>
						</ul>
					</div>
				</div>

				<div class="card col-12 d-block d-md-none">
					<h5 class="card-header">${i.name}</h5>
					<div class="card-body">
					 	<ul class="list-group list-group-flush cContentSmall">
							<li class="list-group-item"><b>Where:</b> ${i.city}</li>
							<li class="list-group-item"><b>ZIP:</b> ${i.zip}</li>
							<li class="list-group-item"><b>Adr:</b> ${i.adr}</li>
							<li class="list-group-item"><b>I was there last:</b> ${i.vis}</li>
							<li class="list-group-item"><b>Tel.:</b> ${i.tel}</li>
							<li class="list-group-item"><b>WebAdr:</b> <a href="${i.webAdr}">${i.webAdr}</a></li>
						</ul>
					</div>
				</div>
			`
		}
		else if(i.constructor.name=="Events"){
			document.getElementById("places").innerHTML+=`
				<div class="card col-md-5 col-lg-3 d-none d-md-block">
					<div class="imgCont">
						<img src="${i.img}" class="card-img-top">
					</div>
					<div class="card-body">
						<h5 class="card-title">${i.name}</h5>
						<ul class="list-group list-group-flush cContent">
							<li class="list-group-item"><b>Where:</b> ${i.city}</li>
							<li class="list-group-item"><b>ZIP:</b> ${i.zip}</li>
							<li class="list-group-item"><b>Adr:</b> ${i.adr}</li>
							<li class="list-group-item"><b>I was there last:</b> ${i.vis}</li>
							<li class="list-group-item"><b>Takes place at:</b> ${i.eDate}</li>
							<li class="list-group-item"><b>Opens at:</b> ${i.eTime}</li>
						</ul>
					</div>
				</div>

				<div class="card col-12 d-block d-md-none">
					<h5 class="card-header">${i.name}</h5>
					<div class="card-body">
					 	<ul class="list-group list-group-flush cContentSmall">
							<li class="list-group-item"><b>Where:</b> ${i.city}</li>
							<li class="list-group-item"><b>ZIP:</b> ${i.zip}</li>
							<li class="list-group-item"><b>Adr:</b> ${i.adr}</li>
							<li class="list-group-item"><b>I was there last:</b> ${i.vis}</li>
							<li class="list-group-item"><b>Takes place at:</b> ${i.eDate}</li>
							<li class="list-group-item"><b>Opens at:</b> ${i.eTime}</li>
						</ul>
					</div>
				</div>
			`
		}
	};
};

displayLocations();

function sortByDateDesc(a, b) {
    var result;

    result = a.years() < b.years() ? 1 : a.years() > b.years() ? -1 : 0;

    if (result === 0)
        result = a.months() < b.months() ? 1 : a.months() > b.months() ? -1 : 0;

    if (result === 0)
        result = a.date() < b.date() ? 1 : a.date() > b.date() ? -1 : 0;

    if (result === 0)
        result = a.hours() > b.hours() ? 1 : a.hours() < b.hours() ? -1 : 0;

    if (result === 0)
        result = a.minutes() > b.minutes() ? 1 : a.minutes() < b.minutes() ? -1 : 0;

    if (result === 0)
        result = a.seconds() > b.seconds() ? 1 : a.seconds() < b.seconds() ? -1 : 0;

    return result;
};

