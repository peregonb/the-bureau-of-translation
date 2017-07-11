 $(document).ready(function() {
     var owl = $('#owl-carousel-1');
     owl.owlCarousel({
         margin: 10,
         nav: false,
         loop: true,
         dots: false,
         responsive: {
             0: {
                 items: 1
             },
             400: {
                 items: 1
             },
             700: {
                 items: 2
             },
             1000: {
                 items: 3,
                 dots: 3
             }
         }
     })
     var owl = $('#owl-carousel-2');
     owl.owlCarousel({
         margin: 10,
         nav: false,
         loop: true,
         dots: true,
         responsive: {
             0: {
                 items: 1
             },
             400: {
                 items: 1
             },
             700: {
                 items: 2
             },
             1000: {
                 items: 3,
                 dots: 3
             }
         }
     })
 })

 $(window).resize(function() {
     var winwidth = $(window).innerWidth();
     if (winwidth > 480) {
         $('.reviews__control').css("display", "flex");
     } else if (winwidth < 480) {
         $('.reviews__control').css("display", "block");
     }
 });
 $(window).ready(function() {
     var winwidth = $(window).innerWidth();
     if (winwidth > 480) {
         $('.reviews__control').css("display", "flex");
     } else if (winwidth < 480) {
         $('.reviews__control').css("display", "block");
     }
 });
