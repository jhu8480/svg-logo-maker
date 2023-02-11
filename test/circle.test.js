const Circle = require('../lib/circle');

describe('Circle', () => {
  describe('Instantiate', () => {
    it('should be an instance of Circle', () => {
      const circle = new Circle();
      expect(circle).toBeInstanceOf(Circle);
    });
  });

  describe('initialize text', () => {
    const text = 'txt';
    const circle = new Circle('txt', 'white', 'red', 'circle');
    expect(circle.text).toBe(text);
  });

  describe('initialize text color', () => {
    const textColor = 'white';
    const circle = new Circle('txt', 'white', 'red', 'circle');
    expect(circle.textColor).toBe(textColor);
  });

  describe('initialize background color', () => {
    const backgroundColor = 'red';
    const circle = new Circle('txt', 'white', 'red', 'circle');
    expect(circle.backgroundColor).toBe(backgroundColor);
  });

  describe('generateSVG() method', () => {
    it('should generate string for svg file', () => {
      const circle = new Circle('txt', 'white', 'red', 'circle');
      expect(circle.generateSVG()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="90" fill="red" /><text x="150" y="120" text-anchor="middle" font-size="20" fill="white"><tspan font-family="Times New Roman" font-weight="bold" font-size="4rem">txt</tspan></text></svg>`);
    })
  })
});
