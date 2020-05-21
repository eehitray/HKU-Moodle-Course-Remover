chrome.storage.local.get("courses", function(items) {
	var searchTexts = items["courses"].split("\n");

	if (!(searchTexts.length == 1 && searchTexts[0] == '')) {
		var divTagsMain = document.querySelectorAll("div[data-courseid]");
		for (var i = 0; i < divTagsMain.length; i++) {
			for (var j = 0; j < searchTexts.length; j++) {
				if (divTagsMain[i].innerHTML.includes(searchTexts[j])) {
					divTagsMain[i].remove();
					break;
				}
			}
		}

		var divTagsSide = document.querySelectorAll("div[class='column c1']");
		for (var i = 0; i < divTagsSide.length; i++) {
			for (var j = 0; j < searchTexts.length; j++) {
				if (divTagsSide[i].innerHTML.includes(searchTexts[j])) {
					divTagsSide[i].remove();
					break;
				}
			}
		}
	}
});
