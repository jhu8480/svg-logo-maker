const Square = require('../lib/square');

describe('Square', () => {
  describe('Instantiate', () => {
    it('should be an instance of Square', () => {
      const square = new Square();
      expect(square).toBeInstanceOf(Square);
    });
  });

  describe('initialize text', () => {
    const text = 'txt';
    const square = new Square('txt', 'white', 'red', 'square');
    expect(square.text).toBe(text);
  });

  describe('initialize text color', () => {
    const textColor = 'white';
    const square = new Square('txt', 'white', 'red', 'square');
    expect(square.textColor).toBe(textColor);
  });

  describe('initialize background color', () => {
    const backgroundColor = 'red';
    const square = new Square('txt', 'white', 'red', 'square');
    expect(square.backgroundColor).toBe(backgroundColor);
  });

  describe('generateSVG() method', () => {
    it('should generate string for svg file', () => {
      const square = new Square('txt', 'white', 'red', 'square');
      expect(square.generateSVG()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="150" height="150" fill="red" /><text x="110" y="115" text-anchor="middle" font-family="Times New Roman" font-size="30" fill="white">txt</text></svg>`);
    })
  })
});