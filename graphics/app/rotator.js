(function () {
	'use strict';
	var images;
	var delay_mins = 5;
	var master_delay = delay_mins * 60 * 1000;
	var container = $('#slideshow');
	var transition_speed = 2000;
	var pause_time = 12000;
	nodecg.readReplicant('assets:images', 'tm-rotator', value => {
		images = value;
		images.forEach( function( el ) {
			var image = '<img class="slide" src="' + el.url + '" />';
			container.append( image );
		});
	});

	function do_the_thing() {
		setTimeout( function(){
			container.cycle({
				cleartypeNoBg: true,
				speed: transition_speed,
				delay: 500,
				timeout: pause_time,
				autostop: true,
				nowrap: true,
				end: function(options){rotation_end()}
			});
			container.fadeIn('fast', function(){})
		}, 1500);
	}
	function rotation_end() {
		container.fadeOut('slow', function(){
			container.cycle('destroy');
			console.log( "Rotation ended. Timing out for " + delay_mins + " minutes;")
		});
		setTimeout( function() {
			console.log( "Starting Rotation;" );
			do_the_thing();
		}, master_delay );
	}
	do_the_thing();

})();
