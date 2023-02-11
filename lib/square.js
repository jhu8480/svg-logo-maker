const Shape = require('./shape');

function Square(text, textColor, backgroundColor, type) {
  Shape.call(this, text, textColor, backgroundColor);
  this.type = type;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.generateSVG = function() {
  return `<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="150" height="150" fill="${this.backgroundColor}" /><text x="110" y="115" text-anchor="middle" font-family="Times New Roman" font-size="30" fill="${this.textColor}">${this.text}</text></svg>`;
}

module.exports = Square;