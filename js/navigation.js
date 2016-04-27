

function nextPage() {
	if(currentChapter == totalChapters && currentChapterPage[currentChapter-1] == pagesPerChapter[currentChapter-1]+1){
		return
	}else if(currentChapter == 0){
		document.querySelector('nav a:nth-child(1) span').classList.add("selected");
		document.querySelector('nav a:nth-child(1)').classList.add("selected");
		document.querySelector('nav a:nth-child(1) span img').classList.add("selected");
		document.querySelector('nav a:nth-child(1) span').classList.add("done");
		pageTitle.innerHTML = chapterTitles[0];
		progressPage.innerHTML = 1 + "/" + pagesPerChapter[0];
		aud.src = 'audio/audio1.mp3';
		Iframe.src = "./pages/page1.html";
		currentChapter = 1;
		enableControls();
		playSound();
		return;
	};
	for (var e = 0; e < totalChapters; e++) { 
		if(currentChapterPage[e] == pagesPerChapter[e]+1 && currentChapter == e+1 && currentChapter != 1){
			currentChapter = currentChapter + 1;
			e=totalChapters;
		}else if(currentChapterPage[e] == pagesPerChapter[e] && currentChapter == 1){
			currentChapter = currentChapter + 1;
		}
	}
	enableControls();
	TweenMax.fromTo(Iframe, 1, {opacity:0}, {opacity:1});
	if(currentChapter == 1){
		if(arrowClicked){currentChapterPage[currentChapter] = 1 }
		var currentpage = currentChapterPage[currentChapter-1];
		aud.src = 'audio/' + soundContentHolder[currentChapter-1][currentpage] +'.mp3';
		Iframe.src = "./pages/" + pagesContentHolder[currentChapter-1][currentpage] + ".html";
		progressPage.innerHTML = (currentpage + 1).toString() + "/" +pagesPerChapter[currentChapter-1];
		currentChapterPage[currentChapter-1]++;		
	}else{
		document.querySelector('nav a:nth-child(1) .blocker').style.display = "none";
		if(currentChapter > 2){var pageCurrent = pagesPerChapter[currentChapter-2]+1}else{var pageCurrent = pagesPerChapter[currentChapter-2]}
		if(currentChapterPage[currentChapter-2] == pageCurrent){
			changeChapter = false;
			currentChapterPage[currentChapter] = 1;
			document.querySelector('nav a:nth-child(2) .blocker').style.display = "none";
			document.querySelector('nav a:nth-child(' + (currentChapter-1) + ') .blocker').style.display = "none";
			document.querySelector('nav a:nth-child(' + (currentChapter) + ') .blocker').style.display = "block";
			document.querySelector('nav a:nth-child(' + (currentChapter-1) + ') span').classList.remove("selected");
			document.querySelector('nav a:nth-child(' + (currentChapter) + ') span').classList.add("selected");
			document.querySelector('nav a:nth-child(' + (currentChapter-1) + ')').classList.remove("selected");
			document.querySelector('nav a:nth-child(' + (currentChapter) + ')').classList.add("selected");
			document.querySelector('nav a:nth-child(' + (currentChapter) + ') span img').classList.add("selected");
			pageTitle.innerHTML = chapterTitles[currentChapter-1];
		}
		var currentpage = currentChapterPage[currentChapter-1];
		aud.src = 'audio/' + soundContentHolder[currentChapter-1][currentpage] +'.mp3';
		Iframe.src = "./pages/" + pagesContentHolder[currentChapter-1][currentpage] + ".html";
		progressPage.innerHTML = (currentpage).toString() + "/" +pagesPerChapter[currentChapter-1];
		currentChapterPage[currentChapter-1]++;
		if(progressPage.innerHTML == pagesPerChapter[currentChapter-1] + "/" + pagesPerChapter[currentChapter-1]){
			document.querySelector('nav a:nth-child(1) .blocker').style.display = "none";
			document.querySelector('nav a:nth-child(' + (currentChapter) + ') .blocker').style.display = "none";
			document.querySelector('nav a:nth-child(' + (currentChapter) + ') span').classList.add("done");
		}
		pageEnd = (progressPage.innerHTML == pagesPerChapter[totalChapters-1] + "/" + pagesPerChapter[totalChapters-1]) ? true : false;
	}
arrowClicked = true;
checkProgress("next");
}

function backPage() {
	pageEnd = false;
	if(progressPage.innerHTML == "1/" + pagesPerChapter[0]){return;}
	if(arrowClicked){
		if(changeChapter){
			currentChapter = currentChapter - 1;
		}
	}else{
		arrowClicked = true;
	}

	if(currentChapterPage[currentChapter-1] != 1){
		enableControls();
		TweenMax.fromTo(Iframe, 1, {opacity:0}, {opacity:1});
	}
	if(currentChapter==1){
		changeChapter = false;
		currentChapterPage[currentChapter-1]--;
		aud.src = 'audio/' + soundContentHolder[currentChapter-1][currentChapterPage[currentChapter-1]-1] +'.mp3';
		Iframe.src = "./pages/" + pagesContentHolder[currentChapter-1][currentChapterPage[currentChapter-1]-1] + ".html";
		progressPage.innerHTML = currentChapterPage[currentChapter-1].toString() + "/" + pagesPerChapter[currentChapter-1];
	}else{
		changeChapter = true;
		currentChapterPage[currentChapter-1]--;
		if(currentChapterPage[currentChapter-1] == 1){
			if(currentChapter >2){var pageCurrent = currentChapterPage[currentChapter-2]-1}else{var pageCurrent = currentChapterPage[currentChapter-2]}
			document.querySelector('nav a:nth-child(' + (currentChapter) + ') .blocker').style.display = "none";
			document.querySelector('nav a:nth-child(' + (currentChapter-1) + ') .blocker').style.display = "block";
			document.querySelector('nav a:nth-child(' + (currentChapter) + ') span').classList.remove("selected");
			document.querySelector('nav a:nth-child(' + (currentChapter-1) + ') span').classList.add("selected");
			document.querySelector('nav a:nth-child(' + (currentChapter) + ')').classList.remove("selected");
			document.querySelector('nav a:nth-child(' + (currentChapter-1) + ')').classList.add("selected");
			pageTitle.innerHTML = chapterTitles[currentChapter-2];
			aud.src = 'audio/' + soundContentHolder[currentChapter-2][currentChapterPage[currentChapter-2]-1] +'.mp3';
			Iframe.src = "./pages/" + pagesContentHolder[currentChapter-2][currentChapterPage[currentChapter-2]-1] + ".html";
			progressPage.innerHTML = pageCurrent.toString() + "/" + pagesPerChapter[currentChapter-2];
		}else{
			changeChapter = false;
			aud.src = 'audio/' + soundContentHolder[currentChapter-1][currentChapterPage[currentChapter-1]-1] +'.mp3';
			Iframe.src = "./pages/" + pagesContentHolder[currentChapter-1][currentChapterPage[currentChapter-1]-1] + ".html";
			progressPage.innerHTML = (currentChapterPage[currentChapter-1]-1).toString() + "/" + pagesPerChapter[currentChapter-1];
		}
	}
checkProgress("back");
}

function navClick(e){
	document.querySelector('nav a:nth-child(' + (currentChapter) + ') .blocker').style.display = "none";
	TweenMax.fromTo(Iframe, 1, {opacity:0}, {opacity:1});
	arrowClicked = false;
	pageEnd = false;
	isQuiz = false;
	selectedPage(e);
	currentChapter = e;
	if(currentChapter == 1){
		currentChapterPage[currentChapter-1] = 1;
		aud.src = 'audio/' + soundContentHolder[currentChapter-1][0] +'.mp3';
		pageTitle.innerHTML = chapterTitles[currentChapter-1];
		Iframe.src = "./pages/" + pagesContentHolder[currentChapter-1][0] + ".html";
		progressPage.innerHTML = 1 + "/" + pagesPerChapter[0];
	}else{
		currentChapterPage[currentChapter-1] = 2;
		aud.src = 'audio/' + soundContentHolder[currentChapter-1][1] +'.mp3';
		pageTitle.innerHTML = chapterTitles[currentChapter-1];
		Iframe.src = "./pages/" + pagesContentHolder[currentChapter-1][1] + ".html";
		progressPage.innerHTML = 1 + "/" + (pagesPerChapter[currentChapter-1]);
	}
	checkProgress("nav");
}

function navHover(i){
	document.querySelector('nav a:nth-child(' + i + ') span').parentElement.style.color = "#fff";
	document.querySelector('nav a:nth-child(' + i + ') span').parentElement.style.background = "rgba(110, 192, 211, 0.38)";
}

function navOut(i){
	document.querySelector('nav a:nth-child(' + i + ') span').parentElement.style.color = "#546E7A";
	document.querySelector('nav a:nth-child(' + i + ') span').parentElement.style.background = "rgba(0, 0, 0, 0)";
}

function selectedPage(e){
	if(e==1){
		currentChapterPage[e-1] = navigationCurrentPage[e-1]-1;
	}else{
		for (var i = 1; i < totalChapters; i++) {
			currentChapterPage[i] = navigationCurrentPage[i];
		}
	}
	for (var i = 1; i <= totalChapters; i++) {
		document.querySelector('nav a:nth-child('+i+') span').classList.remove("selected");
		document.querySelector('nav a:nth-child('+i+')').classList.remove("selected");
		if($('nav a:nth-child('+i+') span').hasClass("done")){
			document.querySelector('nav a:nth-child('+i+') .blocker').style.display = "none";
		}
	};

	document.querySelector('nav a:nth-child('+e+')').classList.add("selected");
	document.querySelector('nav a:nth-child('+e+') .blocker').style.display = "block";
	document.querySelector('nav a:nth-child('+e+') span').classList.add("selected");
	
}

function callingMrLee(){
	if(document.getElementById("mrlee").style.display == "block"){return;};
	document.getElementById("mrlee").style.display = "block";
	document.getElementById("mrlee").classList.add("animationFadeLeft");
	callingLee();
	setTimeout(function(){
		document.getElementById('mrlee').classList.remove("animationFadeLeft");
	},1000)
}

function exitMrLee(){
	if(document.getElementById("mrlee").style.display == "block"){
		document.getElementById('mrlee').classList.add("animationFadeOutLeft");
		exitLee();
		setTimeout(function(){
			document.getElementById('mrlee').classList.remove("animationFadeOutLeft");
			document.getElementById("mrlee").style.display = "none";
		},1000)
	}
}

function callingLee(){
	var lee = document.querySelector("#mrlee");
	TweenLite.fromTo(lee, 0.3, {x: 0, opacity: 0,ease:Linear.easeNone}, {x: -195, opacity: 1,ease:Linear.easeNone});
	TweenLite.to(lee, 0.3, {x: -145, ease:Linear.easeNone, delay: 0.3});
}

function exitLee(){
	var lee = document.querySelector("#mrlee");
	TweenLite.fromTo(lee, 0.5, {x: -145, ease:Linear.easeNone}, {x: 0, opacity: 0, ease:Linear.easeNone});
}

function checkProgress(clicked){
	isQuiz = false;
	playSound();
	switch(clicked){
		case "back":
			var quizNum = 1;
			if(pageOfQuiz[currentChapter-2] == pagesPerChapter[currentChapter-2]){
				quizNum = 0;
			} 
			//console.log((pageOfQuiz[currentChapter-2]+quizNum) + "/" + pagesPerChapter[currentChapter-2])
			if(progressPage.innerHTML == ((pageOfQuiz[currentChapter-2]+quizNum) + "/" + pagesPerChapter[currentChapter-2]) && (pageOfQuiz[currentChapter-2] !=0)){
				callingMrLee()
			}else{
				if(progressPage.innerHTML == ((pageOfQuiz[currentChapter-1]) + "/" + pagesPerChapter[currentChapter-1]) && (pageOfQuiz[currentChapter-1] !=0)){
					callingMrLee();
				}else{
					//console.log(pageOfQuiz[currentChapter-1] +" vs "+ (currentChapterPage[currentChapter-1]-1))
					if(currentChapter == totalChapters && pageOfQuiz[currentChapter-1] != (currentChapterPage[currentChapter-1])){return}
					exitMrLee();
				}
			}
		break;
		default:
			if(progressPage.innerHTML == ((pageOfQuiz[currentChapter-1] + "/" + pagesPerChapter[currentChapter-1])) && (pageOfQuiz[currentChapter-1] !=0)){
				callingMrLee()
			}else{
				//console.log((pageOfQuiz[currentChapter-1]+1) + "/" + pagesPerChapter[currentChapter-1])
				if(progressPage.innerHTML == ((pageOfQuiz[currentChapter-1]+1) + "/" + pagesPerChapter[currentChapter-1]) && (pageOfQuiz[currentChapter-1] !=0)){
					callingMrLee();
				}else{
					var i = 1;
					//console.log("how many quiz "+((pagesPerChapter[currentChapter-1] - pageOfQuiz[currentChapter-1]+1)));
					//console.log((pageOfQuiz[currentChapter-1]+i) + "/" + pagesPerChapter[currentChapter-1]);
					//console.log(progressPage.innerHTML)
					i = (((pagesPerChapter[currentChapter-1] - pageOfQuiz[currentChapter-1]+1)) > 2) ? 2 : 1;
					if(progressPage.innerHTML == (1 + "/" + pagesPerChapter[currentChapter-1])){
						exitMrLee();
					}
				}
			}
		break;
	}
}

function playSound(){
	muted = true;
	isPlaying = false;
	togglePlayPause();
	//console.log("play audio");
}

function closeWindow(){
	window.close();
	//console.log("close window")
}

closeX.addEventListener("click",closeWindow);

loadScript("js/soundControls.js", jsLoaded);

window.onmessage = function(e){
    if (e.data == 'correct') {
    	aud.src = 'audio/correct.mp3';
    	aud.play();
        disableControls();
    }else if(e.data == 'quizActive'){
    	isQuiz = true;
    }
};