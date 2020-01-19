$(document).ready(function() {
    
    /* Give everything the before Class first */
    $('.practice a.internal').addClass('before');
    $('.first a.internal').addClass('before');
    $('.second a.internal').addClass('before');
    $('.third a.internal').addClass('before');
    
    /* Make all of the links move together practice */
    $('.practice a.internal').mouseover(function () {
        $('.practice a.internal').removeClass('before');
        $('.practice a.internal').addClass('after');
    });

    $('.practice a.internal').mouseout(function () {
        $('.practice a.internal').removeClass('after');
        $('.practice a.internal').addClass('before');
    });
    
    /* Make all of the links move together section 1 */
    $('.first a.internal').mouseover(function () {
        $('.first a.internal').removeClass('before');
        $('.first a.internal').addClass('after');
    });

    $('.first a.internal').mouseout(function () {
        $('.first a.internal').removeClass('after');
        $('.first a.internal').addClass('before');
    });
    
    /* Make all of the links move together section 2 */
    $('.second a.internal').mouseover(function () {
        $('.second a.internal').removeClass('before');
        $('.second a.internal').addClass('after');
    });

    $('.second a.internal').mouseout(function () {
        $('.second a.internal').removeClass('after');
        $('.second a.internal').addClass('before');
    });
    
    /* Make all of the links move together section 3 */
    $('.third a.internal').mouseover(function () {
        $('.third a.internal').removeClass('before');
        $('.third a.internal').addClass('after');
    });

    $('.third a.internal').mouseout(function () {
        $('.third a.internal').removeClass('after');
        $('.third a.internal').addClass('before');
    });
    
    /* Hide Paragraphs */
    
    $( '.practice .delay' ).css("display","none");
    $( '.main' ).css("display","none");
    
    /* Practice */
    $('.practice .one a.internal').click(function () {
        $( '.practice .one' ).removeClass('visible');
        $( '.practice .one' ).addClass('hidden');
        $( '.practice .two' ).removeClass('hidden');
        $( '.practice .two' ).addClass('visible');
        $( '.practice .delay' ).delay(1000).fadeIn(1000);
        $( '.practice ').delay(3000).fadeOut(500);
        $( '.main' ).delay(3500).fadeIn(500);
    });
    
    /* First */
    $('.first .one a.internal').click(function () {
        $( '.first .one' ).removeClass('visible');
        $( '.first .one' ).addClass('hidden');
        $( '.first .two' ).removeClass('hidden');
        $( '.first .two' ).addClass('visible');
    });
    
    $('.first .two a.internal').click(function () {
        $( '.first .two' ).removeClass('visible');
        $( '.first .two' ).addClass('hidden');
        $( '.first .three' ).removeClass('hidden');
        $( '.first .three' ).addClass('visible');
    });
    
     $('.first .three a.internal').click(function () {
        $( '.first .three' ).removeClass('visible');
        $( '.first .three' ).addClass('hidden');
        $( '.first .four' ).removeClass('hidden');
        $( '.first .four' ).addClass('visible');
    });
    
     $('.first .four a.internal').click(function () {
        $( '.first .four' ).removeClass('visible');
        $( '.first .four' ).addClass('hidden');
        $( '.first .five' ).removeClass('hidden');
        $( '.first .five' ).addClass('visible');
    });
    
     $('.first .five a.internal').click(function () {
        $( '.first .five' ).removeClass('visible');
        $( '.first .five' ).addClass('hidden');
        $( '.first .six' ).removeClass('hidden');
        $( '.first .six' ).addClass('visible');
    });
    
     $('.first .six a.internal').click(function () {
        $( '.first .six' ).removeClass('visible');
        $( '.first .six' ).addClass('hidden');
        $( '.first .seven' ).removeClass('hidden');
        $( '.first .seven' ).addClass('visible');
    });
    
     $('.first .seven a.internal').click(function () {
        $( '.first .seven' ).removeClass('visible');
        $( '.first .seven' ).addClass('hidden');
        $( '.first .eight' ).removeClass('hidden');
        $( '.first .eight' ).addClass('visible');
    });
    
    /* Second */
    $('.second .one a.internal').click(function () {
        $( '.second .one' ).removeClass('visible');
        $( '.second .one' ).addClass('hidden');
        $( '.second .two' ).removeClass('hidden');
        $( '.second .two' ).addClass('visible');
    });
    
    $('.second .two a.internal').click(function () {
        $( '.second .two' ).removeClass('visible');
        $( '.second .two' ).addClass('hidden');
        $( '.second .three' ).removeClass('hidden');
        $( '.second .three' ).addClass('visible');
    });
    
     $('.second .three a.internal').click(function () {
        $( '.second .three' ).removeClass('visible');
        $( '.second .three' ).addClass('hidden');
        $( '.second .four' ).removeClass('hidden');
        $( '.second .four' ).addClass('visible');
    });
    
     $('.second .four a.internal').click(function () {
        $( '.second .four' ).removeClass('visible');
        $( '.second .four' ).addClass('hidden');
        $( '.second .five' ).removeClass('hidden');
        $( '.second .five' ).addClass('visible');
    });
    
     $('.second .five a.internal').click(function () {
        $( '.second .five' ).removeClass('visible');
        $( '.second .five' ).addClass('hidden');
        $( '.second .six' ).removeClass('hidden');
        $( '.second .six' ).addClass('visible');
    });
    
     $('.second .six a.internal').click(function () {
        $( '.second .six' ).removeClass('visible');
        $( '.second .six' ).addClass('hidden');
        $( '.second .seven' ).removeClass('hidden');
        $( '.second .seven' ).addClass('visible');
    });
    
     $('.second .seven a.internal').click(function () {
        $( '.second .seven' ).removeClass('visible');
        $( '.second .seven' ).addClass('hidden');
        $( '.second .eight' ).removeClass('hidden');
        $( '.second .eight' ).addClass('visible');
    });
    
    /* Third */
    $('.third .one a.internal').click(function () {
        $( '.third .one' ).removeClass('visible');
        $( '.third .one' ).addClass('hidden');
        $( '.third .two' ).removeClass('hidden');
        $( '.third .two' ).addClass('visible');
    });
    
    $('.third .two a.internal').click(function () {
        $( '.third .two' ).removeClass('visible');
        $( '.third .two' ).addClass('hidden');
        $( '.third .three' ).removeClass('hidden');
        $( '.third .three' ).addClass('visible');
    });
    
     $('.third .three a.internal').click(function () {
        $( '.third .three' ).removeClass('visible');
        $( '.third .three' ).addClass('hidden');
        $( '.third .four' ).removeClass('hidden');
        $( '.third .four' ).addClass('visible');
    });
    
     $('.third .four a.internal').click(function () {
        $( '.third .four' ).removeClass('visible');
        $( '.third .four' ).addClass('hidden');
        $( '.third .five' ).removeClass('hidden');
        $( '.third .five' ).addClass('visible');
    });
    
     $('.third .five a.internal').click(function () {
        $( '.third .five' ).removeClass('visible');
        $( '.third .five' ).addClass('hidden');
        $( '.third .six' ).removeClass('hidden');
        $( '.third .six' ).addClass('visible');
    });
    
     $('.third .six a.internal').click(function () {
        $( '.third .six' ).removeClass('visible');
        $( '.third .six' ).addClass('hidden');
        $( '.third .seven' ).removeClass('hidden');
        $( '.third .seven' ).addClass('visible');
    });
    
     $('.third .seven a.internal').click(function () {
        $( '.third .seven' ).removeClass('visible');
        $( '.third .seven' ).addClass('hidden');
        $( '.third .eight' ).removeClass('hidden');
        $( '.third .eight' ).addClass('visible');
    });
    
    
/* End */
});