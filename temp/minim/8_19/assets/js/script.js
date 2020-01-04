$(document).ready(function(e) {
    
   $('video').on('loadeddata', function(e) {
       console.log('onloadeddata', e.target);
       $(this).prop("muted", true);
    });
   var isMuted = true; 
    $('button').click(function(e) {
        isMuted = !isMuted;
        $('video').prop("muted", isMuted);
    });
    
});