(function () {
	'use strict';
	var $heart = $('#heart');
	var $slot1 = $('#slot1');
	var $slot2 = $('#slot2');
	var $slot3 = $('#slot3');
	var $slot4 = $('#slot4');
	
	var master_delay = 3000;

	var $ads = $('.ad');
	
	var chain = function(toAnimate, ix){
		console.log("Chain triggered " + ix);
		if(toAnimate[ix]){
			if( ix == 0 ) {
				$(toAnimate[ix]).delay(master_delay*4).animate({opacity: 0}, 500, function(){
					chain(toAnimate, ix + 1 );
				});
			} else {
				$(toAnimate[ix]).fadeIn(500, function(){
					if( ix == (toAnimate.length - 1) ) {
						$(toAnimate[ix]).delay(master_delay).fadeOut(500, function(){
							console.log("Trigger heart fade in");
							$heart.animate({opacity: 0.5}, 500);
						});
					} else {
						$(toAnimate[ix]).delay(master_delay).fadeOut(500, function(){
							console.log("Trigger chain after delay");
							chain(toAnimate, ix + 1 );
						});
					}
				});
			}
		}
	};	
	var init_delay = 0;
	function play() {
		setTimeout(function(){
			console.log("Play function triggered");
			chain($ads, 0);
			console.log("After Chain");
			init_delay = (master_delay + 1000) * $ads.length + ( master_delay * 4 ) + 1000;
			play();
		}, init_delay );
	}
	play();
})();
