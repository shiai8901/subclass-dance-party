// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node.addClass('blinky');
//   // this.$node.draggable();
// };

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this); //oldStep
//   this.$node.toggle();
// };

var makeBlinkyDancer = class MakeBlinkyDancer extends makeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('blinky');
  }
  step () {
    super.step();
    this.$node.toggle();
  }
};

