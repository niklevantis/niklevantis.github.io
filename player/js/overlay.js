	var flag = false;
jQuery(document).ready(function($) {

	
    causeRepaintsOn = $('#overLay-text');

    $(window).resize(function() {
      causeRepaintsOn.css("z-index", 1);
    });

    //overlay bar function
    $('#overLayBar, #show-title').bind('touchend click', function() {
		if (!flag) {
		 	flag = true;
			setTimeout(function(){ flag = false; }, 500);		
			$('#overLay').toggleClass('slideHelper');
			if($('#overLay').hasClass('slideHelper')){
				$('#overLay').transition({left: '-42px'}, 300, 'easeOutQuint');
			}
			else {
				$('#overLay').transition({left: '-100%'}, 300, 'easeOutQuint');
			}
			if($('.essay, .interview').hasClass('active')){
				$('.top_fade, .top_fade-blck').toggleClass('hide');
			}
		}
    });

    //navigation display on overlay page
	

    var linkTitles = $('.reception, .songs, .news, .entries');
    var contentAreas = $('#reception, #songs, #news');

    linkTitles.bind('touchend click', function(){
		if (!flag) {
		 	flag = true;
			setTimeout(function(){ flag = false; }, 500);			
			
			var link = $(this).attr('data-title');
	
			if($(this).hasClass('active')){
				linkTitles.removeClass('active');
				contentAreas.hide();
				$('#show-title').show();
			} else {
				linkTitles.removeClass('active');
				$(this).addClass('active');
				contentAreas.hide();
				$('#' + link).show();
				$('#show-title').hide();
			}
	
			if($(this).attr('data-bg') == 'black' && $(this).hasClass('active')){
				$('#overLay').removeClass('gradient');
				$('#overLay').removeClass('white');
				$('#overLay').addClass('black');
			}
			else if($(this).attr('data-bg') == 'white' && $(this).hasClass('active')){
				$('#overLay').removeClass('gradient');
				$('#overLay').removeClass('black');
				$('#overLay').addClass('white');
			}
			else {
				$('#overLay').addClass('gradient');
				$('#overLay').removeClass('black');
				$('#overLay').removeClass('white');
			}
		}
    });
	$('.first').bind('touchend click', function(){
		if (!flag) {
		 	flag = true;
			setTimeout(function(){ flag = false; }, 500);	
			
			if($(linkTitles).hasClass('active')){
				linkTitles.removeClass('active');
				contentAreas.hide();
				$('#show-title').show();
				$('#overLay').addClass('gradient');
				$('#overLay').removeClass('black');
				$('#overLay').removeClass('white');
			} else {
				linkTitles.removeClass('active');
				$('#show-title').show();
				$('#overLay').addClass('gradient');
				$('#overLay').removeClass('black');
				$('#overLay').removeClass('white');
			}
		}
	});
	
	$(function()
	{
		$('.scroll-pane').jScrollPane();
	});

});