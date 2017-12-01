



$(window).load(function() { // makes sure the whole site is loaded
	
	
	
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.



$('#name').delay(200).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 700, easing: 'swing' });
    
$('#go').delay(200).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 700, easing: 'swing' });
    
$('.main-img').delay(300).animate({
         'opacity' : '1',
         'top' : '+=20px',         
    }, { duration: 700, easing: 'swing' });      
    
$('#name_about').delay(200).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 700, easing: 'swing' });    
    

$('.wrapper').delay(300).animate({
         'opacity' : '1',        
         'top' : '+=30px'
    }, { duration: 700, easing: 'swing' });
    

    
$('.grid').delay(300).animate({
         'opacity' : '1',        
         'top' : '+=30px'
    }, { duration: 700, easing: 'swing' });
    
    
$('.contact').delay(200).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 700, easing: 'swing' });
    

$('#copyright_wrapper2').delay(1000).animate({
         'opacity' : '1',        
         'top' : '+=0px'
    }, { duration: 700, easing: 'swing' });


    
    
});



/**** NAVSCROLL****/



$(window).scroll(function(){
 
if ($(this).scrollTop() > 65) {
$('#fademenu').fadeIn();
}
else {
$('#fademenu').fadeOut();
}
 

});



