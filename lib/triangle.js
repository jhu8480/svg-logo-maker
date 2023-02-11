const Shape = require('./shape');

function Triangle(text, textColor, backgroundColor, type) {
  Shape.call(this, text, textColor, backgroundColor);
  this.type = type;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.generateSVG = function() {
  return `<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,10 270,190 30,190" fill="${this.backgroundColor}" />
  <text x="150" y="135" text-anchor="middle" font-size="3rem" fill="${this.textColor}">${this.text}</text>
  </svg>`;
}

module.exports = Triangle;