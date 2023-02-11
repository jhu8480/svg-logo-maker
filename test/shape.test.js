const Shape = require('../lib/shape');

describe('Shape', () => {
  describe('generateSVG', () => {
    it('should throw an error', () => {
      const error = new Error('Shapes must have a generateSVG method');
      const shape = new Shape('txt', 'red', 'white');
      expect(() => shape.generateSVG()).toThrow(error)
    })
  })
})