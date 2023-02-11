const Shape = require('./shape');

function Circle(text, textColor, backgroundColor, type) {
  Shape.call(this, text, textColor, backgroundColor);
  this.type = type;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.generateSVG = function() {
  return `<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="90" fill="${this.backgroundColor}" /><text x="150" y="120" text-anchor="middle" font-size="20" fill="${this.textColor}"><tspan font-family="Times New Roman" font-weight="bold" font-size="4rem">${this.text}</tspan></text></svg>`;
}

module.exports = Circle;