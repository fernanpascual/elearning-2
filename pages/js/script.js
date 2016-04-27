var centerValignText = function(target) {
	document.querySelector(target).style.height = document.querySelector(target).offsetHeight + "px";
    document.querySelector(target).style.top = 0;
    document.querySelector(target).style.bottom = 0;
    document.querySelector(target).style.marginTop = "auto";
    document.querySelector(target).style.marginBottom = "auto";
};

centerValignText('.chapter-page h1');