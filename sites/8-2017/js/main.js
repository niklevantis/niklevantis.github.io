jQuery(document).ready(function($) {


	/*
	 * Nav / Cycle Loader
	 */
	var doOnce = true;
	$('#nav').onePageNav({
		scrollSpeed: 	250,
		//start cycle
		scrollChange:	function(i){
			if($(i).attr('id')=='trigger-cycle'){
				$('#cycle-loader').removeClass('hide');
				$('#cycle-loader').addClass('active');
				if(doOnce==true) {
					cycle();
					doOnce = false;
				}
			}
			else{
				$('#cycle-loader').addClass('hide');
			}
		}
	});
	// disable #cycle-loader if cycle is stopped
	$('#pager span').on('click', function(e){
		$('#cycle-loader').addClass('disabled');
		setTimeout(function(){
			$('#cycle-loader').removeClass('active');	
		}, 600);
	});
	// manage cycle-loader on nav click events
	$('#trigger-cycle').on('click', function(e){
		$('#cycle-loader').removeClass('hide');
		$('#cycle-loader').addClass('active');
		if(doOnce==true) {
			cycle();
			doOnce = false;
		}
	});
	$('#nav > li').not('#trigger-cycle').on('click', function(e){
		$('#cycle-loader').addClass('hide');
	});	
	
	
	/*
	 * Work Cycle
	 */
	function cycle(){
		var index  = 0;
		var $pager = $('#pager span');
		var $cycle = $('#cycle > a');
		var pagerTimer = setInterval(function() {
			index = (index < $pager.length - 1) ? index + 1 : 0;
			$cycle.removeClass('active').eq(index).addClass('active');
			$pager.removeClass('active').eq(index).addClass('active');
		}, 6000);
		$pager.click(function(e){
			clearInterval(pagerTimer);
			if(!$(this).hasClass('active')) {
				index = $(this).index();
				$cycle.removeClass('active').eq(index).addClass('active');
				$pager.removeClass('active').eq(index).addClass('active');
			}
		});
	};
	
	
	/*
	 * Work Parallax
	 */	
	$('#work').mousemove(function(e){
		if(Modernizr.touch) return;
		// Get Cursor Coordinates
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		// Loop through each element with the data attribute
		$('*[data-mouse-parallax]').each(function(){
			// Calculate mouse position minus the position of the center of each element
			var x = mouseX - $(this).offset().left - ($(this).width() / 2);
			var y = mouseY - $(this).offset().top - ($(this).height() / 2);
			// Get multiplier value from data attribute
			var factor = parseFloat($(this).data('mouse-parallax'));
			// Calculate transform values
			var newX = x * factor;
			var newY = y * factor;
			$(this).css({ 'transform': 'translate3d( '+ newX + 'px, ' + newY + 'px, 0 )' });
		});
	});
	



	/*
	 * Loading
	 */
	$(window).load(function() {
		setTimeout(function(){
			$('#loader').removeClass('loading');
			$('#spinner').removeClass('fade');	
			$('#ink').get(0).play()
			setTimeout(function(){
				$('#spinner').removeClass('loading');	
			}, 900);
		}, 900);
	});


});
