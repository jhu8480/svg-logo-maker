const fsPro = require('fs').promises;
const inquirer = require('inquirer');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
const questions = require('./data/data');

const prompt = inquirer.createPromptModule();
prompt(questions).then(async ({text, textColor, shape, shapeColor}) => {
  if (shape === 'circle') {
    const circle = new Circle(text, textColor, shapeColor, shape);
    const svgText = circle.generateSVG();
    await fsPro.writeFile('./circle-logo.svg', svgText);
    console.log('Generated Logo svg!');
  } else if (shape === 'triangle') {
    const triangle = new Triangle(text, textColor, shapeColor, shape);
    const svgText = triangle.generateSVG();
    console.log(svgText);
    await fsPro.writeFile('./triangle-logo.svg', svgText);
    console.log('Generated Logo svg!');
  } else if (shape === 'square') {
    const square = new Square(text, textColor, shapeColor, shape);
    const svgText = square.generateSVG();
    await fsPro.writeFile('./square-logo.svg', svgText);
    console.log('Generated Logo svg!');
  }
});