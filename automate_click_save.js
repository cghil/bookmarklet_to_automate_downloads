javascript:(function(){
	var orginal_url = window.location.href;
	var length_url = orginal_url.length;
	var imgValidator = document.getElementsByTagName('img');
	var counter = 0;
	function myWindowOpener(){
		counter +=1;
		new_url = orginal_url.substr(0, length_url - 5) + counter + ".jpg";
		childWindow = window.open(new_url);
		setTimeout(function(){
			if (imgValidator !== null && imgValidator.length === 1){
				imgValidator = childWindow.document.getElementsByTagName('img');
				SaveToDisk(new_url, 'image'+ counter + '.png');
				myWindowOpener();
			}
		}, 500);
	}
	myWindowOpener();
	function SaveToDisk(fileURL, fileName) {
	    if (!window.ActiveXObject) {
	        var save = document.createElement('a');
	        save.href = fileURL;
	        save.target = '_blank';
	        save.download = fileName || 'unknown';

	        var event = document.createEvent('Event');
	        event.initEvent('click', true, true);
	        save.dispatchEvent(event);
	        (window.URL || window.webkitURL).revokeObjectURL(save.href);
	    }
	    else if ( !! window.ActiveXObject && document.execCommand)     {
	        var _window = window.open(fileURL, '_blank');
	        _window.document.close();
	        _window.document.execCommand('SaveAs', true, fileName || fileURL);
	        _window.close();
	    }
	}
})();
