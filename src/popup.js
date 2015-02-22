Analytics.recordEvent('popup', 'open');

// Difference between default and user selected is in whether the value is
// undefined or whether it has a value.
chrome.storage.sync.get(Object.keys(Options), function(items) {
	// Iterate over Options since items may not contain all the keys.
	for (var property in Options) {
		// Must use closure here to capture current property value.
		(function(name) {
			var value = items[name];
			if (value === undefined) {
				value = Options[name];
			}
			var optionElement = document.getElementById(name);
			optionElement.checked = value;
			// Must check click event in order to have the checked attribute.
			optionElement.addEventListener('click', function() {
				var items = {};
				items[name] = this.checked;
				chrome.storage.sync.set(items);
			});
		})(property);
	}
});