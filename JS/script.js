$(document).ready(function() {
    $('.burger__nav-open').click(function(){
        $('.burger__nav-open').toggleClass('open-menu');
        $('.burger__nav-closed').toggleClass('open-menu');
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        
    });
  });

  
