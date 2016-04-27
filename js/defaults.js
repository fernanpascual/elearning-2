if(totalChapters>8){
	document.querySelector('section aside.chapters').style.width = "19%";
	document.querySelector('nav').style.overflow = "auto";
}
document.querySelector('nav').innerHTML = content;

// for (var i = 1; i <= totalChapters; i++) { 
// 	document.querySelector("nav a:nth-child("+ i +") span").style.pointerEvents = "none";
// }

pageTitle.innerHTML = 'Course Agenda';
progressPage.innerHTML = '1/1';
aud.src = 'audio/audio0.mp3';
playSound();

