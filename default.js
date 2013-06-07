$(function(){
	$.notification({
		'type'			: 'error',
		'message' 		: 'Testing notify :)',
		'theme'			: 'default',
		'backColor'		: '#ecc',
		'pos'			: 'left',	// position
		'timeout'		: 2500,
		'animationDue'	: 800,
		'effect'		: 'default',
		'autohide'		: true,
		'clallBack'		: function(){
			console.log("delete");
		}
	});

	$.notification({
		'type'			: 'alert',
		'message' 		: 'Testing notify 2 :D',
		'theme'			: 'default',
		'backColor'		: '#ecc',
		'pos'			: 'left',	// position
		'timeout'		: 2500,
		'animationDue'	: 800,
		'effect'		: 'default',
		'autohide'		: true,
		'clallBack'		: function(){
			console.log("delete");
		}
	});
});