javascript:
	/* Dario Varotto ©2014 */
	(function (mode) {
		var albumPart = document.getElementById("album_photos_pagelet");
		if (!albumPart) {
			alert("Use this tool on a Facebook album.");
			return;
		}
		var thumbs = document.getElementById("album_photos_pagelet").getElementsByClassName('uiMediaThumb');
		if (!thumbs.length) {
			alert("No images found.");
			return;
		}

		var w = window.open('', '', 'width=1024,height=768');
		w.document.write("<h3>" + thumbs.length + " images found.</h3>");
		for (var i = 0; i < thumbs.length; i++) {
			var href = thumbs.item(i).getAttribute('href');
			var src = decodeURIComponent(/src=(.*?)($|&)/.exec(href)[1]);
			var content;
			if (mode=="text") {
				content = src + "?dl=1";
			}
			else if (mode=="link") {
				content = "<a href='" + src + "?dl=1'>image " + (i + 1) + "</a>";
			}
			else {
				/* images is the default mode */
				content = "<img src='" + src + "' alt='image "+(i + 1)+"'>";
			}
			w.document.write(content + "<br>");
		}
		w.focus();
	})
	();