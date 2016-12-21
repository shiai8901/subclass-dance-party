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


  // $('body').on('mouseenter', '.dancer', function() {
  //   $(this).css({'border-radius':'0','border':'20px solid blue'});
  //   $(this).draggable("enable");
  // });
  // $('body').on('mouseleave', '.dancer', function() {
  //   $(this).css({'border-radius':'10px','border':'10px solid red'});
  // });


  // when mouser over the bouncy dancer, dancer will have a background-color, 
  // border color, and rotate 360 degree
  $('body').on('mouseenter', '.bouncy', function() {
    $(this).css({'border-radius':'60px','border':'10px solid yellow', 'background-color': 'rgba(255,255,255, 0.3)'});
    $(this).css({'transition':'transform 1s','transform':'rotate(360deg)'});
  });
  $('body').on('mouseleave', '.bouncy', function() {
    $(this).css({'border':'none','background-color':'rgba(255,255,255, 0)'});
    $(this).css({'transform':'rotate(0)'});
  });

  $('.groupButton').on('click', function() {
    if (dancers[0].fixed === false) {
      for (var i = 0; i < window.dancers.length; i++) {
        dancers[i].fixed = true;
      }
      setTimeout(function() {
        var distance = ($('body').width()) / dancers.length;
        bouncyArray = document.getElementsByClassName('bouncy');
        blinkyArray = document.getElementsByClassName('blinky');
        floatingArray = document.getElementsByClassName('fly');
        for (var i = 0; i < bouncyArray.length; i++) {
          $(bouncyArray[i]).toggle(true);
          var left = JSON.stringify(distance * i) + 'px';
          $(bouncyArray[i]).css({top: '50%', position: 'fixed'});
          $(bouncyArray[i]).css('left', left);
        }
        for (var i = 0; i < blinkyArray.length; i++) {
          $(blinkyArray[i]).toggle(true);
          var left = JSON.stringify(distance * (i + bouncyArray.length)) + 'px';
          $(blinkyArray[i]).css({top: '50%', position: 'fixed'});
          $(blinkyArray[i]).css('left', left);
        }
        for (var i = 0; i < floatingArray.length; i++) {
          $(floatingArray[i]).toggle(true);
          var left = JSON.stringify(distance * (i + bouncyArray.length + blinkyArray.length)) + 'px';
          $(floatingArray[i]).css({top: '50%', position: 'fixed'});
          $(floatingArray[i]).css('left', left);
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

  $('.lineAndJumpButton').on('click', function() {
    if (dancers[0].fixed === false) {
      for (var i = 0; i < window.dancers.length; i++) {
        dancers[i].fixed = true;
      }
      setTimeout(function() {
        var distance = ($('body').width()) / dancers.length;
        for (var i = 0; i < window.dancers.length; i++) {
          $(dancers[i].$node).toggle(true);
          var left = JSON.stringify(distance * i) + 'px';
          $(dancers[i].$node).css({top: '50%', position: 'fixed'});
          $(dancers[i].$node).css('left', left);
        }
        for (var i = 0; i < window.dancers.length; i++) {
          (function(ind) {
            setTimeout(function(){$(dancers[ind].$node).css({'transition':'transform 1s','transform':'rotate(360deg)'});}, (i + 1) * 500);
          })(i);
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

  $('.lineUpButton').on('click', function() {
    if (dancers[0].fixed === false) {
      for (var i = 0; i < window.dancers.length; i++) {
        dancers[i].fixed = true;
      }
      setTimeout(function() {
        var distance = ($('body').width()) / dancers.length;
        for (var i = 0; i < window.dancers.length; i++) {
          $(dancers[i].$node).toggle(true);
          var left = JSON.stringify(distance * i) + 'px';
          $(dancers[i].$node).css({top: '50%', position: 'fixed'});
          $(dancers[i].$node).css('left', left);
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

  $(document).keydown(function(ev) {
    switch(ev.which) {
        case 37: // left
          for (var i = 0; i < window.dancers.length; i++) {
            $(dancers[i].$node).toggle(true);
            $(dancers[i].$node).css({left: '-=30px'});
          }
        break;

        case 38: // up
          for (var i = 0; i < window.dancers.length; i++) {
            $(dancers[i].$node).toggle(true);
            $(dancers[i].$node).css({top: '-=30px'});
          }
        break;

        case 39: // right
          for (var i = 0; i < window.dancers.length; i++) {
            $(dancers[i].$node).toggle(true);
            $(dancers[i].$node).css({left: '+=30px'});
          }
        break;

        case 40: // down
          for (var i = 0; i < window.dancers.length; i++) {
            $(dancers[i].$node).toggle(true);
            $(dancers[i].$node).css({top: '+=30px'});
          }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  $('.changeBackground').on('click', function() {
    var current = $('body').css('background-image');
    current = current.slice(-26, -2);
    var currentIndex = backgroundImg.indexOf(current);
    currentIndex === backgroundImg.length-1 ? currentIndex = 0 : currentIndex++;
    $('body').css('background-image','url("'+ backgroundImg[currentIndex] +'")');
  });
});
