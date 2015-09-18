

$( document ).ready(function() {

    var visibleHeight = $(document).height() - $(window).height();
    var items;

    storeElements();
    $(window).on('resize', function(e) {
        updateHeight();
    });
    $(window).on('scroll', function(e) {
        loadContent();
    });

 
    $('.menus h3').on('click', function(e) {

        $(this).next('ul').toggleClass('open');

        updateHeight();
    });

    $('.menus li a').on('click', function(e){
    	$('.menus li a').removeClass('current-menu-item');
    	$(this).addClass('current-menu-item');

    });
    

    $('.social a').on("click", function(e){
    //$('.social group a').removeClass('social-visited');
    $('.social a').removeClass('social-visited');
    $(this).addClass('social-visited');
    //e.preventDefault(); return false;
    });

    $('.social a').on("touchstart",function(e){
    //$('.social group a').removeClass('social-visited');
    $('.social a').removeClass('social-visited');
    $(this).addClass('social-visited');
    //e.preventDefault(); return false;
    });
});

function storeElements() {
    items = $('.portfolio-item:lt(3)').clone();
    //Strip the first class from selection
    items.removeClass('first');
}

function updateHeight() {
    visibleHeight = $(document).height() - $(window).height();
}

function loadContent() {
 
    if($(window).scrollTop() >= visibleHeight) {
 
        $(window).unbind('scroll');
         
        var loadingWrap = $('.loading-wrap');
         
        loadingWrap.fadeIn(function() {
            setTimeout(function() {
                loadingWrap.before(items);
                loadingWrap.hide(function() {
                    updateHeight();
                    storeElements();
                    $(window).on('scroll', function() { loadContent(); });
                });
            }, 500);
        });
 
    }
}



/*var main = function(){
	$('.menus h3').click(function(){
		$(this).next('ul').toggle();
	})
}*/

//$(document).ready(main);