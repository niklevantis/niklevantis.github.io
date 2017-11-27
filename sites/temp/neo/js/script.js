



$(window).load(function() { // makes sure the whole site is loaded
	
	
	
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(350).slideUp("slow"); // will fade out the white DIV that covers the website.



$('.bl-expand').delay(200).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 700, easing: 'swing' });
    
$('#go').delay(200).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 700, easing: 'swing' });
    
$('#subline p').delay(300).animate({
         'opacity' : '1',
         'top' : '+=20px',         
    }, { duration: 700, easing: 'swing' });      
    
$('#name_about').delay(200).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 700, easing: 'swing' });    
    

$('#name_imprint').delay(200).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 700, easing: 'swing' });
    

$('.wrapper').delay(300).animate({
         'opacity' : '1',        
         'top' : '+=30px'
    }, { duration: 700, easing: 'swing' });
    

$('#logo_map').delay(200).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 700, easing: 'swing' });
    
    
$('#foot_iphone').delay(300).animate({
         'opacity' : '1',        
         'top' : '+=30px'
    }, { duration: 700, easing: 'swing' });
    
    
$('.contact').delay(200).animate({
         'opacity' : '1',
         'top' : '+=20px'
    }, { duration: 700, easing: 'swing' });
    

$('#copyright_wrapper').delay(1000).animate({
         'opacity' : '1',        
         'top' : '+=0px'
    }, { duration: 700, easing: 'swing' });


$('.marker1').delay(300).animate({
         'opacity' : '1',        
         'top' : '+=30px'
    }, { duration: 700, easing: 'swing' });
    
    
$('.marker-label').delay(300).animate({
         'opacity' : '1',        
         'top' : '+=30px'
    }, { duration: 700, easing: 'swing' });
    
    
$('.marker2').delay(500).animate({
         'opacity' : '1',        
         'top' : '+=30px'
    }, { duration: 700, easing: 'swing' });
    
    
$('.marker-label2').delay(500).animate({
         'opacity' : '1',        
         'top' : '+=30px'
    }, { duration: 700, easing: 'swing' });
    
    
$('.marker3').delay(700).animate({
         'opacity' : '1',        
         'top' : '+=30px'
    }, { duration: 700, easing: 'swing' });
    
    
$('.marker-label3').delay(700).animate({
         'opacity' : '1',        
         'top' : '+=30px'
    }, { duration: 700, easing: 'swing' });
    
    
$('.marker').delay(400).animate({
         'opacity' : '1',        
         'top' : '+=30px'
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



