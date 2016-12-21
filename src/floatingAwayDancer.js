// var makeFloatingAwayDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node.addClass('fly');
// };

// makeFloatingAwayDancer.prototype = Object.create(makeDancer.prototype);
// makeFloatingAwayDancer.prototype.constructor = makeFloatingAwayDancer;

// makeFloatingAwayDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this); 
//   this.$node.css({top: '-=30px'});
// };

var makeFloatingAwayDancer = class MakeFloatingAwayDancer extends makeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('fly');
  }
  step () {
    super.step();
    this.$node.css({top: '-=30px'});
  }
};
