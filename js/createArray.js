for (var i = 1; i <= totalChapters; i++) { 
	content += "<a href='#'><span onmouseover='navHover(" + i + ")' onmouseout='navOut(" + i + ")' onclick='navClick(" + i + ")'><img src='images/thumblock.png'></img></span><p class='navigation'>" + i + "</p></a>";
	pagesContentHolder.push([]);
	soundContentHolder.push([]);
	currentChapterPage.push(1);// all chapters into page 1 default
	navigationCurrentPage.push(pagesPerChapter[i-1]+1);
	//console.log(firstPage)
	for (var e = 1; e <= pagesPerChapter[i-1]; e++) { 
		if(firstPage){
			e--;
			firstPage = false;
			pagesContentHolder[i-1].push("blank");
			soundContentHolder[i-1].push("blank");
		}else{
			totalPages++
			pagesContentHolder[i-1].push("page"+totalPages);
			soundContentHolder[i-1].push("audio"+totalPages);
		}
		
	}
	var firstPage = true;
}

loadScript("js/navigation.js", jsLoaded);