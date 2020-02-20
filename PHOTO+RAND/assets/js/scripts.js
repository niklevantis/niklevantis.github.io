// function updateViewportDimensions() {
// 	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
// 	return { width:x,height:y };
// }
// // setting the viewport width
// var viewport = updateViewportDimensions();





jQuery(document).ready(function($) {
  		
 

		$("img").mousedown(function(){
		    return false;
		}); 

		$("body").on("contextmenu", "img", function(e) {
		  return false;
		});

		$(".archive > .image > img").hover(function() { // Mouse over
		  $(this).siblings(".caption").stop().fadeTo(50, 1);
		  //alert("hover");
		}, function() { // Mouse out
		  $(this).siblings(".caption").stop().fadeTo(300, 0);
		});

		

 


		

		$("#menu").hover(function() { // Mouse over
		  $("#all-wrapper.index .caption.show").addClass("hide");
		}, function() { // Mouse out
		   $("#all-wrapper.index .caption.hide").removeClass("hide");
		});
 

  		$(window).scroll(function() {   
  			//console.log("im scrolling");
 
		    var scroll = $(window).scrollTop();

		    if (scroll >= 100) {
		        $("#menu").addClass("scroll");
		    }
		     if (scroll < 100) {
		        $("#menu").removeClass("scroll");
		    }
		}); //missing );


		 $('.aes').on('click touchstart', function () {
		 	$("#menu").removeClass("scroll");
		 }); //missing );


		$.fn.isInViewport = function() {
		  var elementTop = $(this).offset().top;
		  var elementBottom = elementTop + $(this).outerHeight();		 
		  var viewportTop = $(window).scrollTop();
		  var viewportBottom = viewportTop + $(window).height();
		  var vw = $(window).height()/3;

		  return elementBottom  > viewportTop + vw && elementTop < viewportBottom - vw;
		};

		$(window).scroll(function() {    

			  $('#all-wrapper.iphone > .image').each(function() {
			    if ($(this).isInViewport()) {
			    $('.caption').css("opacity","0");
			      $(this).find('.caption').css("opacity","1");
			    } else {
			    }
			  });

		});

		

 
}); /* end of as page load scripts */
