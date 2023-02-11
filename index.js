const fsPro = require('fs').promises;
const inquirer = require('inquirer');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter text for the logo',
    validate: function (value) {
      return value.length <= 3 || 'You can only enter up to three characters';
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter a color keyword or a hex value for text color',
  },
  {
    type: 'rawlist',
    name: 'shape',
    message: 'Please pick a shape',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter the background color (keyword or hex value)'
  }
]

const prompt = inquirer.createPromptModule();
prompt(questions).then(async ({text, textColor, shape, shapeColor}) => {
  if (shape === 'circle') {
    const circle = new Circle(text, textColor, shapeColor, shape);
    const svgText = circle.generateSVG();
    await fsPro.writeFile('./circle-logo.svg', svgText);
    console.log('Circle svg file successfully generated!');
  } else if (shape === 'triangle') {
    const triangle = new Triangle(text, textColor, shapeColor, shape);
    const svgText = triangle.generateSVG();
    console.log(svgText);
    await fsPro.writeFile('./triangle-logo.svg', svgText);
    console.log('Triangle svg file successfully generated!');
  } else if (shape === 'square') {
    const square = new Square(text, textColor, shapeColor, shape);
    const svgText = square.generateSVG();
    await fsPro.writeFile('./square-logo.svg', svgText);
    console.log('Square svg fiile successfully generated');
  }
});