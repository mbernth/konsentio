jQuery(function( $ ){
if( $('.two.closed h2')){
    $('.two h2').on('click', function() {
        $( '.two' ).removeClass("closed");
        $( '.one' ).addClass("closed");
    });		
}
if( $('.one.closed h2')){
    $('.one h2').on('click', function() {
        $( '.one' ).removeClass("closed");
        $( '.two' ).addClass("closed");
    });		
}
});
/*
jQuery(function( $ ){
   $(window).resize(function(){
    if(window.innerWidth < 768) {
        $( '.two' ).addClass( 'closed' );
        if( $('.two.closed h2')){
            $('.two h2').on('click', function() {
                $( '.two' ).removeClass("closed");
                $( '.one' ).addClass("closed");
            });		
        }
        if( $('.one.closed h2')){
            $('.one h2').on('click', function() {
                $( '.one' ).removeClass("closed");
                $( '.two' ).addClass("closed");
            });		
        }
    }else{
        $( '.two' ).removeClass( 'closed' );
    }
});
});
*/