angular.module('starter')

.controller('mainCtrl', function($scope) {

})

.controller('registerCtrl',function($scope) {

})

.controller('loginCtrl',function($scope) {

})

.controller('profileCtrl',function($scope) {

})

.controller('homemenuCtrl',function($scope) {

})

.controller('screen1Ctrl',function($scope) {

})

.controller('screen2Ctrl',function($scope) {

})

.controller('screen3Ctrl',function($scope) {

})

.controller('screen4Ctrl',function($scope) {

})

.controller('screen5Ctrl',function($scope) {

})

.controller('screen6Ctrl',function($scope) {

})

.controller('creditsCtrl',function($scope) {
	$scope.persons = [
		{
			name: "Pieter Van Leuven",
			img: "pieter.jpg",
			role: "The Hacker",
			school: "Artesis Plantain"
		},
		{
			name: "Daniel Foth",
			img: "daniel.jpg",
			role: "The Expert",
			school: "Dundalk IT"			
		},		
		{
			name: "Justyna Bernat",
			img: "justina.jpg",
			role: "The Boss",
			school: "Centria Universty of Applied Sciences"			
		},
		{
			name: "Leen Couwenbergh",
			img: "leen.png",
			role: "The Model",
			school: "Artesis Plantain"			
		},
		{
			name: "Marta Silva",
			img: "marta.jpg",
			role: "Video editor",
			school: "Ispgaya"			
		},
		{
			name: "Mariana Silva ",
			img: "mariana.jpg",
			role: "Video editor",
			school: "Ispgaya"			
		}
	];
})

.controller('galleryCtrl',function($scope) {

})

.controller('profileGalleryCtrl',function($scope) {

})
.controller('panda4',function($scope, $timeout, $state, invidedPeople) {
	$scope.invidedpeople = invidedPeople;
	$scope.showChatPersons = false;
	$scope.content = "";
	$scope.btnMesssage = "Next";
	$scope.texts  = [
		"Ok I have gathered my friends.",
		"Feel free to talk to them now."
	];
	var charIndex = 0;
	var txtIndex = 0;
	$scope.pandaSayText = function () {
		var char = $scope.texts[txtIndex][charIndex];
		$scope.content += char;
		if(charIndex < $scope.texts[txtIndex].length-1){
			charIndex++;
			$timeout($scope.pandaSayText, (char===' ')?60:0);
		}
	};
	$scope.nextBtnClick = function () {
		if(txtIndex === $scope.texts.length-1){
			$state.go("screen3");
		}else{
			txtIndex++;
			charIndex = 0;
			$scope.content = "";
			if(txtIndex===$scope.texts.length-1) $scope.btnMesssage =
				 "Chat!";
			if(txtIndex >= $scope.texts.length-1-1)$timeout(function () {
		        $scope.showChatPersons = true;
		    }, 1000);//give NG time to reload the view			
			$scope.pandaSayText();
		}
	}
	$scope.pandaStartDisplayBox = function () {
		$scope.pandaSayText();
	};	
})
.controller('panda1IntroCtrl',function($scope, $timeout, $state) {
	$scope.content = "";
	$scope.btnMesssage = "Next";
	$scope.texts  = [
		"Hey I'm Sam the panda. It's nice to meet ya. Let's go out and have some fun together.",
		"I'll bring you to the main hub in a moment. Feel free to look around and join me in some events!"
	];
	//ng-href="#/homemenu/"
	var charIndex = 0;
	var txtIndex = 0;
	$scope.pandaSayText = function () {
		var char = $scope.texts[txtIndex][charIndex];
		$scope.content += char;
		if(charIndex < $scope.texts[txtIndex].length-1){
			charIndex++;
			$timeout($scope.pandaSayText, (char===' ')?60:0);
		}
	};
	$scope.nextBtnClick = function () {
		if(txtIndex === $scope.texts.length-1){
			$state.go('homemenu');
		}else{
			txtIndex++;
			charIndex = 0;
			$scope.content = "";
			if(txtIndex===$scope.texts.length-1) $scope.btnMesssage =
				 "Let's have some fun!";
			$scope.pandaSayText();
		}
	}
	$scope.pandaStartDisplayBox = function () {
		$scope.pandaSayText();
	};	
})

.controller('panda2',function($scope, $timeout) {
	$scope.content = "";
	$scope.texts  = 
		"You decided to join us. That's cool. We're meeting at "+ 
		"9pm in Manufaktura at the bowling alley. You coming?"
	;
	var charIndex = 0;
	$scope.pandaSayText = function () {
		var char = $scope.texts[charIndex];
		$scope.content += char;
		if(charIndex < $scope.texts.length-1){
			charIndex++;
			$timeout($scope.pandaSayText, (char===' ')?60:0);
		}
	};	
	$scope.pandaStartDisplayBox = function () {
		$scope.pandaSayText();
	};	
})
.controller('panda3',function($scope, $timeout, $state) {
	$scope.content = "";	
	$scope.texts  = [
		"I need some time to get a gang together. It will probably take about "+$scope.timeLeft+" minutes.",
		"You can play a minigame in the meantime to get some points and later redeem them bigger for vouchers.",
		"I'll send you a notification when the chat opens. I still need some time.",
		"Ok everythings ready."
	];
	var charIndex = 0;
	$scope.timeLeft = 15;
	$scope.txtIndex = 0;
	$scope.pandaSayText = function () {
		var char = $scope.texts[$scope.txtIndex][charIndex];
		$scope.content += char;
		if(charIndex < $scope.texts[$scope.txtIndex].length-1){
			charIndex++;
			$timeout($scope.pandaSayText, (char===' ')?60:0);
		}
	};
	$scope.nextBtnClick = function () {
		if($scope.txtIndex === $scope.texts.length-1){
			$state.go('homemenu');
		}else{
			$scope.txtIndex++;
			charIndex = 0;
			$scope.content = "";
			if($scope.txtIndex===$scope.texts.length-1) $scope.btnMesssage =
				 "Let's have some fun!";
			$scope.pandaSayText();
		}
	}
	$scope.pandaStartDisplayBox = function () {
		$scope.pandaSayText();
	};
})

.controller('panda5',function($scope, $timeout, $state) {
	$scope.content = "";
	$scope.btnMesssage = "Next";
	$scope.texts  = [
		"Hey, you agreed to meet up at the bowling alley in 3 hours. Are you still interested in going?"
	];
	var charIndex = 0;
	var txtIndex = 0;
	$scope.pandaSayText = function () {
		var char = $scope.texts[txtIndex][charIndex];
		$scope.content += char;
		if(charIndex < $scope.texts[txtIndex].length-1){
			charIndex++;
			$timeout($scope.pandaSayText, (char===' ')?60:0);
		}
	};
	$scope.nextBtnClick = function () {
		if(txtIndex === $scope.texts.length-1){
			$state.go('homemenu');
		}else{
			txtIndex++;
			charIndex = 0;
			$scope.content = "";
			if(txtIndex===$scope.texts.length-1) $scope.btnMesssage =
				 "Let's have some fun!";
			$scope.pandaSayText();
		}
	}
	$scope.pandaStartDisplayBox = function () {
		$scope.pandaSayText();
	};	
})
.controller('gameCtrl',function($scope, $timeout) {
	$scope.point = 100;
	var width = document.getElementById("game").offsetWidth;
	$scope.won = false;
	$scope.initPuzzle = function () {
		$scope.point = 100;
		$scope.won = false;
		for (var i = 0; i < 5; i++) {
			var index = Math.floor(Math.random()*$scope.side*$scope.side);
			if($scope.checkSwap(index))swap(index);
			else i--;
		}
		$scope.piecesPosUpdate();	
		$timeout($scope.pointCounter,1000);
	};

	$scope.pointCounter = function () {
		$scope.point--;
		if($scope.point<=0 ){
			
		}
		else if($scope.won){

		}
		else{
			$timeout($scope.pointCounter,1000);
		}
	};

	$scope.grow = {"height": width + "px"};
	$scope.side = 3;
	$scope.getNumber = function(num) {
        return new Array(num);   
    };
    var check4Win = function () {
		var counter = 0;
		console.log('check4Win');
		for (var i = 0; i < $scope.side; i++) {
			for (var j = 0; j < $scope.side; j++) {				
				// console.log("c "+counter+"; p1 "+ $scope.pos[counter][0]+"; p2 "+$scope.pos[counter][1]+"; i "+i+"; j "+j+"---> ");
				if( $scope.pos[counter][0] !== i
				 || $scope.pos[counter][1] !== j) return false;
				counter++;			
			}			
		}
		return true;
	};
	$scope.checkSwap = function (index) {
		// if(index === blankpos)return false;//hit blank
		var v1 = Math.abs($scope.pos[index][0] - $scope.pos[blankpos][0]);
		var v2 = Math.abs($scope.pos[index][1] - $scope.pos[blankpos][1]);
		if(v1 > 1 || v2 > 1) return false;
		if(v1 !== v2)
		{
			console.log(($scope.pos[index][0] === $scope.pos[blankpos][0])+"\t: i "+$scope.pos[index][0]+" b "+$scope.pos[blankpos][0]);
			console.log(($scope.pos[index][1] === $scope.pos[blankpos][1])+"\t: i "+$scope.pos[index][1]+" b "+$scope.pos[blankpos][1]);
			return true;
		}
	}
	var swap = function (index) {
		var tmp1 = $scope.pos[index][0],
			tmp2 = $scope.pos[index][1];
		$scope.pos[index][0] = $scope.pos[blankpos][0];
		$scope.pos[index][1] = $scope.pos[blankpos][1];
		$scope.pos[blankpos][0] = tmp1;
		$scope.pos[blankpos][1] = tmp2;
	}
	$scope.clck = function (index) {
		if(!$scope.won&&$scope.checkSwap(index)){
			swap(index);	
			console.log('click');			
			$scope.piecesPosUpdate();
			if(check4Win()){
				document.getElementById('gameDivMissing').removeAttribute("id");
				$scope.won = true;
			}
		}
    };
	var blankpos = 8;//x,y,index
    $scope.pos = [//x,y
    	[0,0],
		[0,1],
		[0,2],
		[1,0],
		[1,1],
		[1,2],
		[2,0],
		[2,1],
		[2,2]
    ];
    $scope.pieces = [
	    	{"top": $scope.pos[0][0]*100/3 +"%", "left": $scope.pos[0][1]*100/3 +"%", "background-position": $scope.pos[0][1]*50+"%"+" "+$scope.pos[0][0]*50+"%"},
	    	{"top": $scope.pos[1][0]*100/3 +"%", "left": $scope.pos[1][1]*100/3 +"%", "background-position": $scope.pos[1][1]*50+"%"+" "+$scope.pos[1][0]*50+"%"},
	    	{"top": $scope.pos[2][0]*100/3 +"%", "left": $scope.pos[2][1]*100/3 +"%", "background-position": $scope.pos[2][1]*50+"%"+" "+$scope.pos[2][0]*50+"%"},
	    	{"top": $scope.pos[3][0]*100/3 +"%", "left": $scope.pos[3][1]*100/3 +"%", "background-position": $scope.pos[3][1]*50+"%"+" "+$scope.pos[3][0]*50+"%"},
	    	{"top": $scope.pos[4][0]*100/3 +"%", "left": $scope.pos[4][1]*100/3 +"%", "background-position": $scope.pos[4][1]*50+"%"+" "+$scope.pos[4][0]*50+"%"},
	    	{"top": $scope.pos[5][0]*100/3 +"%", "left": $scope.pos[5][1]*100/3 +"%", "background-position": $scope.pos[5][1]*50+"%"+" "+$scope.pos[5][0]*50+"%"},
	    	{"top": $scope.pos[6][0]*100/3 +"%", "left": $scope.pos[6][1]*100/3 +"%", "background-position": $scope.pos[6][1]*50+"%"+" "+$scope.pos[6][0]*50+"%"},
	    	{"top": $scope.pos[7][0]*100/3 +"%", "left": $scope.pos[7][1]*100/3 +"%", "background-position": $scope.pos[7][1]*50+"%"+" "+$scope.pos[7][0]*50+"%"},
	    	{"top": $scope.pos[8][0]*100/3 +"%", "left": $scope.pos[8][1]*100/3 +"%", "background-position": $scope.pos[8][1]*50+"%"+" "+$scope.pos[8][0]*50+"%"}
	    ];
    $scope.piecesPosUpdate = function () {
    	console.log('pos_updated');
    	//#hardCoded
    	$scope.pieces[0].top = $scope.pos[0][0]*100/3+"%"; $scope.pieces[0].left = $scope.pos[0][1]*100/3+"%";
    	$scope.pieces[1].top = $scope.pos[1][0]*100/3+"%"; $scope.pieces[1].left = $scope.pos[1][1]*100/3+"%";
    	$scope.pieces[2].top = $scope.pos[2][0]*100/3+"%"; $scope.pieces[2].left = $scope.pos[2][1]*100/3+"%";
    	$scope.pieces[3].top = $scope.pos[3][0]*100/3+"%"; $scope.pieces[3].left = $scope.pos[3][1]*100/3+"%";
    	$scope.pieces[4].top = $scope.pos[4][0]*100/3+"%"; $scope.pieces[4].left = $scope.pos[4][1]*100/3+"%";
    	$scope.pieces[5].top = $scope.pos[5][0]*100/3+"%"; $scope.pieces[5].left = $scope.pos[5][1]*100/3+"%";
    	$scope.pieces[6].top = $scope.pos[6][0]*100/3+"%"; $scope.pieces[6].left = $scope.pos[6][1]*100/3+"%";
    	$scope.pieces[7].top = $scope.pos[7][0]*100/3+"%"; $scope.pieces[7].left = $scope.pos[7][1]*100/3+"%";
    	$scope.pieces[8].top = $scope.pos[8][0]*100/3+"%"; $scope.pieces[8].left = $scope.pos[8][1]*100/3+"%";
    }    
});