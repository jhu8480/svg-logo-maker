
const inquirer = require('inquirer');

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
prompt(questions).then((response) => {
  console.log(response);
})