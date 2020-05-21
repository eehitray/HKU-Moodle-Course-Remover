chrome.storage.local.get("courses", function(items) {
	var divTags = document.querySelectorAll("div[data-courseid]");
	var searchTexts = items["courses"].split("\n");

	for (var i = 0; i < divTags.length; i++) {
		for (var j = 0; j < searchTexts.length; j++) {
			if (divTags[i].innerHTML.includes(searchTexts[j])) {
				divTags[i].remove();
				break;
			}
		}
	}
});
