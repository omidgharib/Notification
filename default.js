$(function(){
	$.fn.notification({
		type          : 'alert',
		message       : 'test 1 abas :D',
		theme         : 'default',
		pos           : 'left',
		timeout       : 3000,
		animationDue  : 400,
		effect        : 'default',
		autoHide      : true,
		callBack      : function(){
			console.log("delete1");
		}
  	});

  	$.fn.notification({
		type          : 'success',
		message       : 'test 2 abas kh kh kh :D',
		theme         : 'default',
		pos           : 'left',
		timeout       : 3000,
		animationDue  : 400,
		effect        : 'default',
		autoHide      : false,
		callBack      : function(){
			console.log("delete3");
		}
  	});

  	$.fn.notification({
		type          : 'alert',
		message       : 'test 3 ??? abas :D',
		theme         : 'default',
		pos           : 'left',
		timeout       : 3000,
		animationDue  : 900,
		effect        : 'default',
		autoHide      : true
  	});
});