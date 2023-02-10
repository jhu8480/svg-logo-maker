
class Shape {
  constructor(text, textColor, backgroundColor) {
    this.text = text;
    this.textColor = textColor;
    this.backgroundColor = backgroundColor;
  }

  get svgTemplate() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    </svg>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, backgroundColor, type) {
    super(text, textColor, backgroundColor);
    this.type = type;
  }

}