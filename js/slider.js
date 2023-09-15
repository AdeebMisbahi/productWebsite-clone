jQuery.noConflict();
jQuery(document).ready(function () {
    jQuery(".slideshow").slick({
        infinite: true,
        autoplay: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 4000
    });
});

$(document).ready(function(){

    $('#itemslider').carousel({ interval: 3000 });
    
    $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);
    
    for (var i=1;i<6;i++) {
    itemToClone = itemToClone.next();
    
    if (!itemToClone.length) {
    itemToClone = $(this).siblings(':first');
    }
    
    itemToClone.children(':first-child').clone()
    .addClass("cloneditem-"+(i))
    .appendTo($(this));
    }
    });
    });
    