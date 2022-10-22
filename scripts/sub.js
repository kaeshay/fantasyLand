const thing = document.querySelectorAll('.avatar,.wide-avatar,.medium-item');

for (var i = 0; i < thing.length; i++) {
    thing[i].addEventListener('click', function(e) { 
    	if (e.altKey) {
    		console.log(this);
    		this.style.display="none";
    	}
	})	
}

var transformCounter=0;
function transform(makerString,idString){
	element=document.getElementById(idString);
		if(transformCounter==0){
			element.src="../assets/"+makerString+"/"+idString+"2.png";
			transformCounter++;
		} else if(transformCounter==1){
			element.src="../assets/"+makerString+"/"+idString+"1.png";
			transformCounter=0;
		}
}
var showCounter = 0;
function show(idString){
	element = document.getElementById(idString);
	if(showCounter==0){
		element.style.display='block';
		showCounter++;
	} else if (showCounter==1){
		element.style.display='none';
		showCounter=0;
	}
}
var hideCounter = 0;
function hide(idString){
	element = document.getElementById(idString);
	if(hideCounter==0){
		element.style.display='none';
		hideCounter++;
	} else if (hideCounter==1){
		element.style.display='block';
		hideCounter=0;
	}
}
var soundCounter=0;
function playSound(idString){
	var sound=document.getElementById(idString);
	if (soundCounter==0){
		sound.play();
		soundCounter++;
	} else if (soundCounter==1){
		sound.pause();
		soundCounter=0;
	}
}
