
function Shape(text, textColor, backgroundColor) {
  this.text = text;
  this.textColor = textColor;
  this.backgroundColor = backgroundColor;
  this._svgWidth = 300;
  this._svgHeight = 200;
}

Shape.prototype.generateSVG = function() {
  throw new Error('Shapes must have a generateSVG method');
}

module.exports = Shape;

