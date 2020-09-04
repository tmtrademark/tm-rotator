(function () {
	'use strict';
	var images;
	var delay_mins = 5;
	var master_delay = delay_mins * 60 * 1000;
	var container = $('#slideshow');
	var transition_speed = 2000;
	var pause_time = 30000;
	nodecg.readReplicant('assets:images', 'tm-rotator', value => {
		images = value;
		images.forEach( function( el ) {
			var image = '<img class="slide" src="' + el.url + '" />';
			container.append( image );
		});
	});

	function do_the_thing() {
		if ( $('img.slide').length > 1 ) {
			setTimeout( function(){
					container.cycle({
						fx: 'custom',
						sync: 1,
						cssBefore: {
							left: '-1000px',
							display: 'block'
						},
						animIn:  {
							left: '0px'
						},
						animOut: {
							left: '-1000px'
						},
						cleartypeNoBg: true,
						speed: transition_speed,
						delay: 500,
						timeout: pause_time,
						autostop: true,
						nowrap: true,
						end: function(options){rotation_end()}
					});
					container.animate({
						left: '0px'
					}, 1500, function(){})
				}, 1500);
		} else {
			container.animate({
				left: '0px'
			}, 1500, function(){
				setTimeout(function(){
					rotation_end();
				}, pause_time);
			});
		}
	}
	function rotation_end() {
		container.animate({
			left: '-850px'
		}, 1500, function(){
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
