// var makeBouncyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node.addClass('bouncy');
// };

// makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
// makeBouncyDancer.prototype.constructor = makeBouncyDancer;

// makeBouncyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this); //oldStep

// };

var makeBouncyDancer = class MakeBouncyDancer extends makeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('bouncy');
  }
};