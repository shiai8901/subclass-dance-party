
// var makeDancer = function(top, left, timeBetweenSteps) {
//   this.$node = $('<span class="dancer"></span>');
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.step();
//   this.setPosition(top, left);
//   this.fixed = false;
// };

// makeDancer.prototype.step = function() {
//   // if (this.fixed === false) {
//   var next = setTimeout(this.step.bind(this), this.timeBetweenSteps);
//   // }
//   if (this.fixed === true) {
//     clearTimeout(next);
//   }
// };

// makeDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };

var makeDancer = class MakeDancer {
  constructor (top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>')
    this.top = top
    this.left = left
    this.timeBetweenSteps = timeBetweenSteps
    this.step()
    this.setPosition(top, left)
    this.fixed = false
  }
  step () {
    var next = setTimeout(this.step.bind(this), this.timeBetweenSteps);
    if (this.fixed === true) {
      clearTimeout(next);
    }
  }
  setPosition (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
};