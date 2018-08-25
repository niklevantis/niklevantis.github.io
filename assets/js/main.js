function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
};

var quote,
    quoteLoop = 0,
    quoteSource,
    quoteSourceLoop = 0,
    introProgress = 0,
    introInterval,
    introSpeed = 45;

var introLoop = function() {
    
    var total = Math.floor((quote.length + quoteSource.length) * 1.5);
    //var total = Math.floor((quote.length + quoteSource.length) * 7);
        
    if ( introProgress == total ) {
        
        clearInterval(introInterval);   
        $('#intro main').removeClass('loaded');
        setTimeout(function(){
            var url = window.location.href;
            window.location.replace(url+"home");
        },1000);
        
    } else {
        
        introProgress++;
        $('#progress').width(Math.round(($(window).width()/total)*introProgress));
    
        if ( quoteLoop < quote.length ) {
            $('blockquote').append(quote[quoteLoop]);
            quoteLoop++;
        } else {
            if ( quoteSource.length < introProgress ) {
                if ( !$('blockquote footer').length ) {
                    $('blockquote').append('<footer></footer>');
                }
                $('blockquote footer').append(quoteSource[quoteSourceLoop]);
                quoteSourceLoop++;
            }
        }
        
    }
    
}

var checkArticlesInView = function() {
    
    var scrollPos = $(window).scrollTop();
    var screenHeight = $(window).height();
    var offset = 0;
    var delay = 100;
            
    $('article.work:not(.in-view), .video:not(.in-view)').each(function(i){
        
        var article = $(this);
        
        if ( !article.hasClass('in-view') ) {
            
            if ( is_touch_device() ) {
                
                setTimeout(function(){
                    article.addClass('in-view');
                }, (delay*i));                
                
            } else {
            
                var thisTopPos = Math.round(article.offset().top);
                
                if ( thisTopPos < (scrollPos+screenHeight+offset) ) {
                    setTimeout(function(){
                        article.addClass('in-view');
                    }, (delay*i));
                }
                
            }
                    
        }
         
    });
    
}

var timeDrag = false;
 
var updatebar = function(x) {
    var progress = $('.progress');
    var maxduration = $('#player').get(0).duration;
    var position = x - progress.offset().left;
    var percentage = 100 * position / progress.width();
 
    if(percentage > 100) {
        percentage = 100;
    }
    if(percentage < 0) {
        percentage = 0;
    }
    
    $('.progress .progressbar').css('width', percentage+'%');
    $('#player').get(0).currentTime = (maxduration * percentage / 100);
};

var correctTime = function(timenow) {
    if (parseInt(timenow)/60>=1) {
        var h = Math.floor(timenow / 3600);
        timenow = timenow - h * 3600;               
        var m = Math.floor(timenow / 60);
        var s = Math.floor(timenow % 60);
        if(h.toString().length<2){h=h;}
        if(m.toString().length<2){m=m;}
        if(s.toString().length<2){s='0'+s;}
        if ( h != '0' ) {    
            var formatedTime = h+':'+m+':'+s;
        } else if ( m != '0' ) {
            var formatedTime = m+':'+s;
        } else {
            var formatedTime = '0:'+s;
        }
    } else {
        var m = Math.floor(timenow / 60);
        var s = Math.floor(timenow % 60);
        if(m.toString().length<2){m='0'+m;}
        if(s.toString().length<2){s='0'+s;}
        var formatedTime = m+':'+s;
    }
    return formatedTime;
}

var loadingCases = false;

var loadMorePosts = function() {
    var url = $('.load-more:last').attr('href');
    $('.load-more').parent('.row').remove();
    loadingCases = true;
    $.get(url, function(data){ 
        var newCases = $(data).find("#cases").html();
        $('#cases').append(newCases);
        checkArticlesInView();
        checkForCaseIDHash();
        loadingCases = false;
    });
}

var checkLoadMore = function() {
    
    var scrollPos = $(window).scrollTop();
    var screenHeight = $(window).height();
    var casesHeight = $('#cases').outerHeight();
    
    if ( !loadingCases && $('.load-more').length && (scrollPos > (casesHeight-(screenHeight*1.5))) ) {
        loadMorePosts();
    }
    
}

var checkForCaseIDHash = function() {
    
    var hash = window.location.hash;
    if ( hash && $(hash).length ) {
        $('html, body').animate({
            scrollTop: ( ($(hash).offset().top - $('nav').outerHeight(true)) )
        }, 500);
    } else if ( hash ) {
        loadMorePosts();
    }
    
}

$(document).ready(function(){
    
    if ( $('#player').length ) {
        
        $('.poster').on('click',function(){
            
            if ( $('#player').get(0).paused ) {
            
                $('body').addClass('video-playing');
                $('body,html').scrollTop(0);
                $('#player').get(0).play();        
                $('.col.wide').removeAttr('style');
            
                if ( !$('body').hasClass('playmode') ) {
                    $('body').addClass('playmode');
                }
                
                var screenHeightMax = ($(window).height() - $('nav').outerHeight() - $('.video-ui').outerHeight() - $('.progress').outerHeight());
                var videoWidth = $('.video').width();
                var videoHeight = Math.round(videoWidth*(9/16));
                
                //if ( videoHeight >= screenHeightMax ) {
                    
                    var difference = screenHeightMax/videoHeight;
                    var newWidth = Math.round(videoWidth*difference);
                    
                    $('.col.wide').css({'max-width':newWidth+'px'});
                    
                //}
            
            } else {
            
                $('body').removeClass('video-playing');
                $('#player').get(0).pause();   
            
            }
            
        });
        
        $('.progress').mousedown(function(e) {
            timeDrag = true;
            updatebar(e.pageX);
        });
        $(document).mouseup(function(e) {
            if(timeDrag) {
                timeDrag = false;
                updatebar(e.pageX);
            }
        });
        $(document).mousemove(function(e) {
            if(timeDrag) {
                updatebar(e.pageX);
            }
        });
        
        $('#player').on('timeupdate', function() {
            var currentPos = $('#player').get(0).currentTime;
            var maxduration = $('#player').get(0).duration;
            var percentage = 100 * currentPos / maxduration;
            $('.progress .progressbar').css('width', percentage+'%');
            
            if ( $('.time.duration').text() == '0:00' ) {
                var duration = $('#player').get(0).duration;
                var timeStr = correctTime(duration);
                $('.time.duration').text(timeStr);
            }            
        });
                        
    }
    
    if ( is_touch_device() ) {
        $('body').addClass('touch');
    }
    
    checkArticlesInView();
    
    $('.single nav a.right').on('click',function(e){
        
        e.stopPropagation();
        
        if ( $('body').hasClass('playmode') ) {
            
            $('body').removeClass('playmode');
            $('.col.wide').removeAttr('style');
            
            if ( $('body').hasClass('video-playing') ) {
                $('body').removeClass('video-playing');
                $('#player').get(0).pause();   
            }     
            
            return false;
            
        } else {
            
            return;
            
        }
         
    });
    
    if ( $('#cases').length ) {
        
        checkForCaseIDHash();
        
        $('#cases').on('mouseenter','article.work',function(){
            var id = $(this).find('video').attr('id');
            if ( id ) {
                var video = $('#'+id).get(0);
                video.play();
            }
        });
        $('#cases').on('mouseleave','article.work',function(){
            var id = $(this).find('video').attr('id');
            if ( id ) {
                var video = $('#'+id).get(0);
                video.pause();
                video.currentTime = 0;
            }
        });
        
    }
    
    var image = new Image();
    image.onload = function () {
        $('body').addClass('on-load');
    }
    image.src = $('').attr('src');
    
});

$(window).load(function(){
    
    if ( $('#intro').length ) {
        
        $('#intro main').addClass('loaded');
        
        quoteSource = $('blockquote footer').text().split("");
        $('blockquote footer').remove();
        quote = $('blockquote').text().split("");
        $('blockquote').empty();
        
        introInterval = setInterval(introLoop, introSpeed);
    
    }
    
    checkLoadMore();
    
});

$(window).resize(function(){
    checkArticlesInView();
    checkLoadMore();
});

$(window).scroll(function(){
    checkLoadMore();
    if ( !is_touch_device() )
        checkArticlesInView(); 
});