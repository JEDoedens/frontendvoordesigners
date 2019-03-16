console.log('hela');

var elementImg = document.querySelectorAll('img')[0];
var thailand = "../images/thailand1.jpg";

function sayHello() {
  document.write('hallo')
};

sayHello();


// -----------------Voorbeeld slider!---------------------
//
// var owl = document.getElementById('.owl-carousel');
//
// owl.owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     dots: false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// });
//
// document.getElementById('.custom-owl-next').click(function() {
//   owl.trigger('next.owl.carousel');
// });
//
// document.getElementById('.custom-owl-prev').click(function() {
//   owl.trigger('prev.owl.carousel');
// });

// he dollar sign is commonly used as a shortcut to the function document.getElementById(). Because this function is fairly verbose and used frequently in JavaScript, the $ has long been used as its alias, and many of the libraries available for use with JavaScript create a $() function that references an element from the DOM if you pass it the id of that element.

// -----------------Voorbeeld sliderend!---------------------

$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide-group');
  var $slides = $this.find('.slide');
  var buttonArray = [];
  var currentlndex = 0;
  var timeout;

  //move funtie moet hier komen


  //Einde move functie
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $.each($slides, function(index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo($this.find('.slide-buttons'));
    buttonArray.push($button);
  });

  advance();

});
