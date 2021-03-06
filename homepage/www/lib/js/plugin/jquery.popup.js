/*
 * jQuery popup v1.1 - A jQuery popup plugin.
 * By Jordan Thomas - http://labs.wondergroup.com
 * Licensed under the do whatever you want to license.
 * If you like, keep this message intact so 
 * someone else can find the origin.
 http://labs.wondergroup.com/demos/popup/index.html

Basic Usage

		$(".popup").popup({
		    width: 640,
		    height: 480
		});
		

Additional Parameters

		$(".popup").popup({
		    width: 640,
		    height: 480,
		    titlebar: [true/false],
		    status: [true/false],
		    resizable: [true/false],
		    toolbar: [true/false],
		    scrollbars: [true/false],
		    menubar: [true/false]
		});
		
*/
jQuery.fn.popup = function(options) {
	var defaults = {
		width: screen.width/2,
		height: screen.height/2,
		titlebar: true,
		status: true,
		resizable: true,
		toolbar: true,
		scrollbars: true,
		menubar: true
	};
	var options = jQuery.extend(defaults, options);
	
	Boolean.prototype.setProperty = function() {
		if (this == true) { return "yes"; } else { return "no"; }
	};
	
	return this.each( function() {
		jQuery(this).click( function() {
			var target = this.target;
			var href = this.href;
			var posY = (parseInt(screen.height/2)) - (parseInt(options.height/2));
			var posX = (parseInt(screen.width/2)) - (parseInt(options.width/2));
			var win = window.open(href, target, 'titlebar=' + options.titlebar.setProperty() + ', screenX='+ posX +', screenY='+ posY +', left='+ posX +', top='+ posY +', status=' + options.status.setProperty() + ', resizable=' + options.resizable.setProperty() + ', toolbar=' + options.toolbar.setProperty() + ', scrollbars=' + options.scrollbars.setProperty() + ', menubar=' + options.menubar.setProperty() + ', width='+ options.width +', height='+ options.height);
			win.focus();
			return false;
		});
	});
};