var SAVE_ID = 'alba-prettify-export-save';
document.querySelector('.cmd-export').addEventListener('click', function() {
	var saveElement = document.getElementById(SAVE_ID);
	if (saveElement === null) {
		var saveElement = document.createElement('button');
		saveElement.id = SAVE_ID;
		saveElement.title = 'From Alba Prettify';
		var saveText = document.createTextNode('Save backup file');
		saveElement.appendChild(saveText);
		this.parentNode.insertBefore(saveElement, this);
		saveElement.disabled = true;
	}
	document.querySelector('#export').addEventListener('focus', function() {
		saveElement.disabled = false;
	});
	saveElement.addEventListener('click', function(e) {
		// Download the textarea as file.
		var text = document.querySelector('#export').textContent;
		var blob = new Blob([text], {type: 'text/plain'});
		var date = new Date();
		var name = (
				date.toISOString().replace(/T.*$/, '') + ' ' +
				'Alba Backup.txt');
		var link = document.createElement('a');
		link.download = name;
		link.href = window.URL.createObjectURL(blob);
		link.click();
		// Prevent page from reloading.
		e.preventDefault();
	});
});