$(document).ready(function() {
  window.dancers = [];
  window.backgroundImg = ["img/background_img/1.jpg",
  "img/background_img/2.jpg", 
  "img/background_img/3.jpg",
  "img/background_img/4.jpg"];
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $('body').on('mouseenter', '.dancer', function() {
    $(this).css({'border-radius':'0','border':'20px solid blue'});
  });
  $('body').on('mouseleave', '.dancer', function() {
    $(this).css({'border-radius':'10px','border':'10px solid red'});
  });

  $('.lineUpButton').on('click', function() {
    if (dancers[0].fixed === false) {
      for (var i = 0; i < window.dancers.length; i++) {
        dancers[i].fixed = true;
      }
      setTimeout(function() {
        for (var i = 0; i < window.dancers.length; i++) {
          $(dancers[i].$node).css({top: '50%', position: 'fixed'});
        }
      }, 1000);
    } else {
      for (var i = 0; i < window.dancers.length; i++) {
        dancers[i].fixed = false;
        dancers[i].setPosition(dancers[i].top, dancers[i].left);
        dancers[i].step();
      }
    }

  });

  $('.changeBackground').on('click', function() {
    var current = $('body').css('background-image');
    current = current.slice(-26, -2);
    var currentIndex = backgroundImg.indexOf(current);
    currentIndex === backgroundImg.length-1 ? currentIndex = 0 : currentIndex++;
    $('body').css('background-image','url("'+ backgroundImg[currentIndex] +'")');
  });
});

