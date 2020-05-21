chrome.storage.local.get("courses", function(items) {
	var aTags = document.getElementsByTagName("a");
	var searchTexts = items["courses"].split("\n");
	var found;

	for (var j = 0; j < searchTexts.length; j++) {
		for (var i = 0; i < aTags.length; i++) {

			if (aTags[i].textContent.includes(searchTexts[j])) {
				aTags[i].parentElement.parentElement.parentElement.remove();;
				break;
			}
		}
	}
});
