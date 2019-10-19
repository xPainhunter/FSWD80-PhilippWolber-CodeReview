var Movie = [{
		"id":"One",
		"src":"../img/pulpFiction.jpg",
		"name":"Pulp Fiction",
		"description":"movie description goes here",
		"genre":"action",
		"timeOfUpload":"",
		"likes":Number(0)
	},
	{
		"id":"Two",
		"src":"../img/django.jpg",
		"name":"Django Unchained",
		"description":"movie description goes here",
		"genre":"action",
		"timeOfUpload":"",
		"likes":Number(0)	
	},
	{
		"id":"Three",
		"src":"../img/johnnyEnglish.jpg",
		"name":"johnny English",
		"description":"movie description goes here",
		"genre":"comedy",
		"timeOfUpload":"",
		"likes":Number(0)
	},
	{
		"id":"Four",
		"src":"../img/deadpool.jpg",
		"name":"Deadpool",
		"description":"movie description goes here",
		"genre":"comedy",
		"timeOfUpload":"",
		"likes":Number(0)
	},
	{
		"id":"Five",
		"src":"../img/goodWillHunting.jpg",
		"name":"Good Will Hunting",
		"description":"movie description goes here",
		"genre":"drama",
		"timeOfUpload":"",
		"likes":Number(0)
	},
	{
		"id":"Six",
		"src":"../img/granTorino.jpg",
		"name":"Gand Torino",
		"description":"movie description goes here",
		"genre":"drama",
		"timeOfUpload":"",
		"likes":Number(0)
	}];

for (i=0; i<Movie.length; i++){
	document.getElementById("movieCards").innerHTML+='<div class="card mb-3 mCard" style="max-width: 450px;">'
	+ '<div class="row no-gutters"><div class="col-md-4">' 
	+ '<img src="' + Movie[i].src + '" class="card-img mImg" alt="Cover Pulp Fiction Movie"></div>'
	+ '<div class="col-md-8"><div class="card-body"><h5 class="card-title">' + Movie[i].name + '</h5>'
	+ '<p class="card-text">' + Movie[i].description + '</p><div class="row justify-content-between like">'
	+ '<a href="#" class="col-6 align-self-start btn btn-primary likeButton">Like &#128077;</a>'
	+ '<span class="align-self-end counter" id="counter">' + Movie[i].likes + '</span>'
	+ '</div></div></div></div></div>';
	// document.getElementById("likeButton").id=Movie[i].id;
	document.getElementById("counter").id="counter" + Movie[i].id;
	console.log(counterOne.id);

};


function like(obj){
	if(obj.id == "One"){
		obj.likes++;
		document.getElementById("counterOne").innerHTML=obj.likes;
	}
	else if(obj.id == "Two"){
		obj.likes++;
		document.getElementById("counterTwo").innerHTML=obj.likes;
	}
	else if(obj.id == "Three"){
		obj.likes++;
		document.getElementById("counterThree").innerHTML=obj.likes;
	}else if(obj.id == "Four"){
		obj.likes++;
		document.getElementById("counterFour").innerHTML=obj.likes;
	}else if(obj.id == "Five"){
		obj.likes++;
		document.getElementById("counterFive").innerHTML=obj.likes;
	}
	else if(obj.id == "Six"){
		obj.likes++;
		document.getElementById("counterSix").innerHTML=obj.likes;
	}
};


var likeBtn = document.getElementsByClassName("likeButton");

for(let i=0; i<likeBtn.length; i++){
	likeBtn[i].addEventListener("click", function() {
		like(Movie[i]);
		console.log(Movie[i].id);
	})
};



var f;

var mostLiked = Movie;
function sortForLikes(obj){
	obj.sort(function(a,b){
		return b.likes - a.likes;
	});
};

console.log(mostLiked);

$(document).ready(function(){
	
	$("select").on("change", function(){
		f = $("option:selected").val();
		$(".mCard").hide();
		switch(f){
			case "all": $(".mCard").show();break;
			case "likes": 
				var mostLiked = Movie;
				function sortForLikes(obj){
					obj.sort(function(a,b){
						return b.likes - a.likes;
					});
				};

				sortForLikes(mostLiked); 
				
				for (i=0; i<Movie.length; i++){
					document.getElementById("movieCards").innerHTML+='<div class="card mb-3 mCard" style="max-width: 450px;">'
					+ '<div class="row no-gutters"><div class="col-md-4">' 
					+ '<img src="' + Movie[i].src + '" class="card-img mImg" alt="Cover Pulp Fiction Movie"></div>'
					+ '<div class="col-md-8"><div class="card-body"><h5 class="card-title">' + Movie[i].name + '</h5>'
					+ '<p class="card-text">' + Movie[i].description + '</p><div class="row justify-content-between like">'
					+ '<a href="#" class="col-6 align-self-start btn btn-primary likeButton">Like &#128077;</a>'
					+ '<span class="align-self-end counter" id="counter">' + Movie[i].likes + '</span>'
					+ '</div></div></div></div></div>';
					// document.getElementById("likeButton").id=Movie[i].id;
					document.getElementById("counter").id="counter" + Movie[i].id;
				};
		};
	});
});	