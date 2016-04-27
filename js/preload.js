"use strict";
(function(){
	var currentProgress;
	var pageShowed = false;

	var Preload = function(path) {
		this.path = path;
		this.queue = new createjs.LoadQueue(true);
		this.queue.on('complete', this.onComplete);
		this.queue.on('error', this.onError);
		this.queue.on('fileload', this.onFileLoad);
		this.queue.on('fileprogress', this.onFileProgress);
		this.queue.on('progress', this.onProgress);
	}

	Preload.prototype.setPreload = function(){
		this.items = [
			{id:'images/background_final.png',src:this.path+'images/background_final.png'},
			{id:'images/bgpapers.png',src:this.path+'images/bgpapers.png'},
			{id:'images/close.png',src:this.path+'images/close.png'},
			{id:'images/hand-pointer.png',src:this.path+'images/hand-pointer.png'},
			{id:'images/mrlee.png',src:this.path+'images/mrlee.png'},
			{id:'images/next.png',src:this.path+'images/next.png'},
			{id:'images/pause_button.png',src:this.path+'images/pause_button.png'},
			{id:'images/play_button.png',src:this.path+'images/play_button.png'},
			{id:'images/prev.png',src:this.path+'images/prev.png'},
			{id:'images/sound_mute.png',src:this.path+'images/sound_mute.png'},
			{id:'images/sound_unmute.png',src:this.path+'images/sound_unmute.png'},
			{id:'images/thumblock.png',src:this.path+'images/thumblock.png'},
			{id:'pages/images/cognizant.png',src:this.path+'pages/images/cognizant.png'},
			{id:'pages/images/pencil03.png',src:this.path+'pages/images/pencil03.png'},
			{id:'pages/images/signalLight2.png',src:this.path+'pages/images/signalLight2.png'},
			{id:'pages/images/yellowred.png',src:this.path+'pages/images/yellowred.png'},
			{id:'pages/images/distance.png',src:this.path+'pages/images/distance.png'},
			{id:'pages/images/green.png',src:this.path+'pages/images/green.png'},
			{id:'pages/images/pencil02.png',src:this.path+'pages/images/pencil02.png'},
			{id:'pages/images/red.png',src:this.path+'pages/images/red.png'},
			{id:'pages/images/shake.png',src:this.path+'pages/images/shake.png'},
			{id:'pages/images/signalLight.png',src:this.path+'pages/images/signalLight.png'},
			{id:'pages/images/stickman.png',src:this.path+'pages/images/stickman.png'},
			{id:'pages/images/yellow.png',src:this.path+'pages/images/yellow.png'},
			{id:'pages/images/line.png',src:this.path+'pages/images/line.png'},
			{id:'pages/page0.html',src:this.path+'pages/page0.html'},
			{id:'pages/images/pencil01.png',src:this.path+'pages/images/pencil01.png'}
		];

		this.pushItems("thumbmod02c","images/",".png",11);
		this.pushItems("image","pages/images/",".png",12);
		this.pushItems("page","pages/",".html",60);
		this.pushItems("audio","audio/",".mp3",60);
	};

	Preload.prototype.pushItems = function(name,path,ext,count){
		for (var i = 1; i < count; i++) {
			this.items.push({id:path+name+i+ext,src:this.path+path+name+i+ext});
		};
	};
	Preload.prototype.loadManifest = function(){
		this.queue.loadManifest(this.items);
	};

	Preload.prototype.onComplete = function(event){
		 //console.log('Complete', event);
	};

	Preload.prototype.onError = function(event){
		// console.log('Error', event);
	};

	Preload.prototype.onFileLoad = function(event){
		// console.log('File Loaded', event);
	};

	Preload.prototype.onFileProgress = function(event){
		// console.log('File Progress', event.item.id);
	};

	Preload.prototype.onProgress = function(event){
		// console.log(Math.round(event.loaded * 100));
		currentProgress = event.loaded * 1.5;
		//console.log(Math.round(currentProgress * 100));
		var anim = "";
			anim += "-webkit-transition: width 500ms ease-in-out;";
			anim += "-moz-transition: width 500ms ease-in-out;";
			anim += "transition: width 500ms ease-in-out;";
			anim += "width: " + Math.round(currentProgress * 100) + "%;";
		if(Math.round(currentProgress * 100) <= 100){
			document.querySelector('.preloader .progress-bar .mask').style.cssText = anim;
			document.querySelector('.preloader .progress-bar .mask').style.width = Math.round(currentProgress * 100) + "%";
			document.querySelector('.preloader .progress-bar .progress-text').innerHTML = "Initializing Content... " + Math.round(currentProgress * 100) + "%";
		}else if(Math.round(currentProgress * 100) == 101){
			if(!pageShowed){
				pageShowed = true;
				preload.showContent();
			}
		}
	};

	Preload.prototype.showContent = function(){
		setTimeout(function(){
			document.querySelector('.main-wrapper').style.top = "0";
			document.querySelector('.main-wrapper').classList.add("animationFadein");
			document.querySelector('.preloader').style.display = "none";
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'js/variables.js';
			head.appendChild(script);
		},1000)
		setTimeout(function(){
			$("nav a span").after("<div class='blocker'></div>");
		},3000)
	}

	//var preload = new Preload("http://jervindizon.github.io/elearning-2/");
	var preload = new Preload(""); 

	preload.setPreload();
	preload.loadManifest();

	//-- Refresh contents to extend expiration from cache
	setInterval(function(){
		preload.loadManifest();
	},150000)
})();