const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  describe('Instantiate', () => {
    it('should be an instance of Triangle', () => {
      const triangle = new Triangle();
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  describe('initialize text', () => {
    const text = 'txt';
    const triangle = new Triangle('txt', 'white', 'red', 'triangle');
    expect(triangle.text).toBe(text);
  });

  describe('initialize text color', () => {
    const textColor = 'white';
    const triangle = new Triangle('txt', 'white', 'red', 'triangle');
    expect(triangle.textColor).toBe(textColor);
  });

  describe('initialize background color', () => {
    const backgroundColor = 'red';
    const triangle = new Triangle('txt', 'white', 'red', 'triangle');
    expect(triangle.backgroundColor).toBe(backgroundColor);
  });

  describe('generateSVG() method', () => {
    it('should generate string for svg file', () => {
      const triangle = new Triangle('txt', 'white', 'red', 'triangle');
      expect(triangle.generateSVG()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 270,190 30,190" fill="red" /><text x="150" y="135" text-anchor="middle" font-size="3rem" font-family="Times New Roman" fill="white">txt</text></svg>`);
    })
  })
});