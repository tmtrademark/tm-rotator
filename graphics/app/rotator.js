(function () {
	'use strict';
	var $heart = $('#heart');
	var $slot1 = $('#slot1');
	var $slot2 = $('#slot2');
	var $slot3 = $('#slot3');
	var $slot4 = $('#slot4');
	
	var delay_mins = 7;
	var master_delay = delay_mins * 60 * 1000;

	var $ads = $('.ad');
	var vid = document.getElementById("video"); 

	$("#video").delay(master_delay).fadeIn( 500, function(){
		vid.play();
	});
	
	$("#video").bind("ended", function() {
		$(this).fadeOut();
		setTimeout(function(){
			$("#video").fadeIn(500, function(){
				vid.play();
			});
		}, master_delay );
	});
	
	
})();
