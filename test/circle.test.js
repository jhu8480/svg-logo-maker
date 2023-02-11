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

  
});
