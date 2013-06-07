/*jshint strict:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, nonew:true, browser:true, devel:true, indent:2, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, maxparams:3, maxerr:100, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($,undefined){
  "use strict";
  var
	ie = (navigator.appVersion.indexOf("MSIE") !== -1) ? parseFloat(navigator.appVersion.split("MSIE")[1]) : 99,
	body = $("body"),
  	notificationHolder = $("div#notificationHolder"),
  	abas = "Abas";

  console.log(ie);
  $.notification = function(opt){
  	var
  		$this = $(this),
  		markup = null,
  		data = $.extend({
			'type'			: 'alert',
			'message'		: '',
			'theme'			: 'default',
			'backColor'		: 'white',
			'pos'			: 'default',	// position
			'timeout'		: 3000,
			'animationDue'	: 500,
			'effect'		: 'default',
			'autohide'		: true,
			'clallBack'		: null
  		},opt),
  		abas2 = "";

	// Add holder if it doesnt exist yet
	if(!notificationHolder.length){
		$("body").append("<div id='notificationHolder'></div>");
  		notificationHolder = $('div#notificationHolder');
  		if(data.pos == 'left'){
  			notificationHolder.css('bottom','10%')
  			notificationHolder.css('left','0');
  		}
  		else if(data.pos == 'right'){
  			notificationHolder.css('bottom','10%')
  			notificationHolder.css('right','0');
  		}
  		else if(data.pos == 'top'){
  			notificationHolder.css('top','0')
  			notificationHolder.css('left','30%');
  		}
  		else if(data.pos == 'bottom'){
  			notificationHolder.css('bottom','0')
  			notificationHolder.css('left','30%');
  		}
	}

	markup = [
		'<div id="notification" class="' + data.type + ' ' + data.theme + '">',
		'<div class="notifyIcon"></div>',
		'<p class="message">' + data.message + '</p></div>'
	].join('');

	$(markup).appendTo(notificationHolder);
  };
  
//})(window.jQuery);
})(window.Zepto || window.jQuery);