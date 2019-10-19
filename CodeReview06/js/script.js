// SUPER CLASS LOCATION
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(name, city, zip, adr, img, vis, age) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.adr = adr;
        this.img = img;
        this.vis = vis;
        this.age = age;
    }
    ;
    return Locations;
}());
;
// CHILD CLASS RESTAURANT
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, city, zip, adr, img, vis, age, tel, webAdr) {
        var _this = _super.call(this, name, city, zip, adr, img, vis, age) || this;
        _this.tel = tel;
        _this.webAdr = webAdr;
        return _this;
    }
    ;
    return Restaurants;
}(Locations));
;
// CHILD CLASS EVENTS
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zip, adr, img, vis, age, eDate, eTime) {
        var _this = _super.call(this, name, city, zip, adr, img, vis, age) || this;
        _this.eDate = eDate;
        _this.eTime = eTime;
        return _this;
    }
    ;
    return Events;
}(Locations));
;
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
function displayLocations() {
    for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
        var i = all_1[_i];
        if (i.constructor.name == "Locations") {
            document.getElementById("places").innerHTML += "\n\t\t\t\t<div class=\"card col-md-5 col-lg-3 d-none d-md-block\">\n\t\t\t\t\t<div class=\"imgCont\">\n\t\t\t\t\t\t<img src=\"" + i.img + "\" class=\"card-img-top\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\">" + i.name + "</h5>\n\t\t\t\t\t\t<ul class=\"list-group list-group-flush cContent\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Where:</b> " + i.city + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>ZIP:</b> " + i.zip + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Adr:</b> " + i.adr + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>I was there last:</b> " + i.vis + "</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"card col-12 d-block d-md-none\">\n\t\t\t\t\t<h5 class=\"card-header\">" + i.name + "</h5>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t \t<ul class=\"list-group list-group-flush cContentSmall\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Where:</b> " + i.city + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>ZIP:</b> " + i.zip + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Adr:</b> " + i.adr + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>I was there last:</b> " + i.vis + "</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t";
        }
        else if (i.constructor.name == "Restaurants") {
            document.getElementById("places").innerHTML += "\n\t\t\t\t<div class=\"card col-md-5 col-lg-3 d-none d-md-block\">\n\t\t\t\t\t<div class=\"imgCont\">\n\t\t\t\t\t\t<img src=\"" + i.img + "\" class=\"card-img-top\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\">" + i.name + "</h5>\n\t\t\t\t\t\t<ul class=\"list-group list-group-flush cContent\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Where:</b> " + i.city + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>ZIP:</b> " + i.zip + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Adr:</b> " + i.adr + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>I was there last:</b> " + i.vis + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Tel.:</b> " + i.tel + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>WebAdr:</b> <a href=\"" + i.webAdr + "\">" + i.webAdr + "</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"card col-12 d-block d-md-none\">\n\t\t\t\t\t<h5 class=\"card-header\">" + i.name + "</h5>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t \t<ul class=\"list-group list-group-flush cContentSmall\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Where:</b> " + i.city + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>ZIP:</b> " + i.zip + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Adr:</b> " + i.adr + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>I was there last:</b> " + i.vis + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Tel.:</b> " + i.tel + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>WebAdr:</b> <a href=\"" + i.webAdr + "\">" + i.webAdr + "</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t";
        }
        else if (i.constructor.name == "Events") {
            document.getElementById("places").innerHTML += "\n\t\t\t\t<div class=\"card col-md-5 col-lg-3 d-none d-md-block\">\n\t\t\t\t\t<div class=\"imgCont\">\n\t\t\t\t\t\t<img src=\"" + i.img + "\" class=\"card-img-top\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h5 class=\"card-title\">" + i.name + "</h5>\n\t\t\t\t\t\t<ul class=\"list-group list-group-flush cContent\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Where:</b> " + i.city + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>ZIP:</b> " + i.zip + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Adr:</b> " + i.adr + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>I was there last:</b> " + i.vis + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Takes place at:</b> " + i.eDate + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Opens at:</b> " + i.eTime + "</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"card col-12 d-block d-md-none\">\n\t\t\t\t\t<h5 class=\"card-header\">" + i.name + "</h5>\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t \t<ul class=\"list-group list-group-flush cContentSmall\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Where:</b> " + i.city + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>ZIP:</b> " + i.zip + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Adr:</b> " + i.adr + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>I was there last:</b> " + i.vis + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Takes place at:</b> " + i.eDate + "</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"><b>Opens at:</b> " + i.eTime + "</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t";
        }
    }
    ;
}
;
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
}
;
