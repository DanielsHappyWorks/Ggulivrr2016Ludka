//angular.module('mines.services', [])
angular.module('starter')
.factory('invidedPeople', function() {
	var invidedPeople = [];
	invidedPeople[0] = {
		userName: "Margarita",
		profilePic : "marta.jpg",
		fact: "I love porto"
	};
	invidedPeople[1] = {
		userName: "Elvisthepelvis",
		profilePic : "elvis.jpg",
		fact: "Back off, man. I'm a scientist."
	};
	invidedPeople[2] = {
		userName: "Justine Henin",
		profilePic : "justina.jpg",
		fact: "I like carrot juice"
	};
	invidedPeople[3] = {
		userName: "Damien Walter",
		profilePic : "daniel.jpg",
		fact: "I am an expert"
	};
	invidedPeople[4] = {
		userName: "Leen",
		profilePic : "leen.png",
		fact: "I'm a true model"
	};
	invidedPeople[5] = {
		userName: "The Hacker",
		profilePic : "pieter.jpg",
		fact: "I actually can't hack"
	};
	invidedPeople[6] = {
		userName: "Taches",
		profilePic : "thomas.jpg",
		fact: "I like my muchtache"
	};
	invidedPeople[7] = {
		userName: "Martinas",
		profilePic : "mariana.jpg",
		fact: "_"
	};
  	return invidedPeople;
});

// "pieter.jpg",
// "daniel.jpg",
// "justina.jpg",
// "leen.png",
// "marta.jpg",
// "mariana.jpg",