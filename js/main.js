$(function() {
	$('#bg-wrapper').hide();

	// SmoothState
	var $body = $('html, body'),
		content = $('#wrapper').smoothState({
			onStart : {
				duration: 800,
				render: function(url, $container) {
					$('#content-wrapper, .img-grid').addClass('hide');
					startTransition(url);
					// $body.animate({	scrollTop: 0}, 150, function() {
					// 	startTransition(url);
					// });
				}
			},
			onEnd : {
				duration: 0, // Duration of the animations, if any.
				render: function (url, $container, $content) {
					$body.css('cursor', 'auto');
					$body.find('a').css('cursor', 'auto');
					$container.html($content);
					initMain();
					$('img').each(function(){
					  new RetinaImage(this);
					});
					$('body').toggleClass('project');
				}
			},
			callback: function(url, $container, $content) {
				$('body').removeClass('startTransition projectTransition');

				if (window.ga)
			    {
			        window.ga('send', 'pageview',
			        undefined !== window.location.pathname ? window.location.pathname : url);
			    }
			},
			prefetch: true,
			pageCacheSize: 4,
			development: false
		}).data('smoothState');

	initMain();
});

function startTransition(url) {
	if (parseUrl(url) == '/') {
		// back to start
		$('body').addClass('projectTransition');
	}
	else {
		// into project
		$('body').addClass('startTransition');
		$('#bg-wrapper div.active').removeClass('active');
	}
}

function parseUrl(url) {
	var parser = document.createElement('a');
	parser.href = url;
	var pn = parser.pathname;
	return pn;
}

function initMain() {
	$('.project-row').on('click', 'a', function() {
		// add active class to clicked link in order to make sure it doesn't hide.
		$(this).addClass('active');
		$(this).parent().addClass('active');
	});

	$(".project-row").hover(function() {
		// hover in
		var slug = $(this).attr('data-slug');
		$('#bg-wrapper div.' + slug).addClass('active');
		
	}, function() {
		// hover out
		$('#bg-wrapper div.active').removeClass('active');		
	});

	imagesLoaded( '#bg-wrapper', function() {
		$('#bg-wrapper').show();
	});
}