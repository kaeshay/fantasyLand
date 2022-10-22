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
var slowCounter=0;
function slowDown(){
	element=document.getElementById("containment-wrapper");
	trees=document.getElementById('treeMap');
	toolbox=document.getElementById('toolbox');
	if(slowCounter==0){
		element.style.animation="blur 15s";
		element.style.animationTimingFunction="ease-in";
		element.style.animationFillMode="forwards";
		trees.style.animation="blur 15s";
		trees.style.animationTimingFunction="ease-in";
		trees.style.animationFillMode="forwards";
		toolbox.style.animation="blur";
		toolbox.style.animationFillMode="forwards";
		slowCounter++;
	} else if(slowCounter==1){
		console.log('hi');
		element.style.animation="none";
		trees.style.animation="none";
		toolbox.style.animation="none";
		// element.style.animationFillMode="backwards";
		slowCounter=0;
	}
}
var lightCounter=0;
function lightOff(){
	element=document.getElementById('containment-wrapper');
	trees=document.getElementById('treeMap');
	toolbox=document.getElementById('toolbox');
	if(lightCounter==0){
		// element.style.filter="invert(1)"
		// toolbox.style.filter="invert(1)";
		element.style.animation="hue-rotate 30s";
		element.style.animationTimingFunction="ease-in";
		element.style.animationFillMode="forwards";
		trees.style.animation="hue-rotate 30s";
		trees.style.animationTimingFunction="ease-in";
		trees.style.animationFillMode="forwards";
		toolbox.style.animation="hue-rotate";
		toolbox.style.animationFillMode="forwards";
		lightCounter++;
	} else if(lightCounter==1){
		element.style.filter="hue-rotate(0)"
		trees.style.filter="hue-rotate(0)"
		toolbox.style.filter="hue-rotate(0)"
		element.style.animation="none";
		trees.style.animation="none";
		toolbox.style.animation="none";
		lightCounter=0;
	}
}
function enlarge(idString){
	element=document.getElementById(idString);
	element.style.width='200px';
	element.style.position='absolute';
	element.style.height='auto';
}
var danceCounter=0;
function danceBreak(){
	giantDrop=document.getElementById("giantDrop");
	danceSound=document.getElementById("danceSound");
	if(danceCounter==0){
		giantDrop.style.display="block";
		danceSound.play();
		danceCounter++;
	} else if(danceCounter==1){
		giantDrop.style.display="none";
		danceSound.pause();
		danceCounter=0;
	}
}

var sunCounter=0;
function waterBreak(){
	suns=document.getElementById("sunDrop");
	element=document.getElementById("containment-wrapper");
	waterSound=document.getElementById("waterSound");
	if(sunCounter==0){
		suns.style.display="block";
		element.style.animation="hue-rotate2 5s";
		element.style.animationFillMode="forwards";
		waterSound.play();
		sunCounter++;
	} else if(sunCounter==1){
		element.style.animation="none";
		suns.style.display="none";
		waterSound.pause();
		sunCounter=0;
	}
}

function enlarge(idString){
	element=document.getElementById(idString);
	element.style.width='200px';
	element.style.position='absolute';
	element.style.height='auto';
}