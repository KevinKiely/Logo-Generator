const inquirer = require ("inquirer");
const fs = require ("fs");
const path = require ("path");
const generateLogo = require ('./lib/generateLogo.js');
const { Triangle, Square, Circle } = require('./lib/shapes.js');


// Array of questions for inquirer to use with .prompt
const questions = [
    // Logo Characters
    {
        type: "input",
        name: "text",
        message: "Please enter 3 or less characters to be the text of your logo.",
    },
    // Text Color
    {
        type: "input",
        name: "textColor",
        message: "What color would you like the text of your logo to be? Please enter a color in all lowercase or as a hexadecimal.",
    },
    // Shape
    {
        type: "list",
        name: "shape",
        message: "Please choose which shape you wish your logo background to be.",
        choices: [
            "Square",
            "Circle",
            "Triangle"
        ]
    },
    // Background Color
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your background to be? Please enter a color in all lowercase or as a hexadecimal.",
    },
];



// Getting parameters for logo.svg
function initialize() {
console.log('Taking in parameters for logo');
    inquirer.prompt(questions)

    //Takes in data from inquirer
    .then((responses) => {
        var logo = generateLogo(responses);

    //Logo variable is created using imported generate logo function

    console.log("logo created");

    // File is written using logo as the content

    fs.writeFile('./final/logo.svg', logo, 
    (err) =>  {
    if (err) {
        console.log(err);
    } else {
        console.log("File saved to final folder");
    }
});
    })
    .catch((err) => {
        console.log(`Error ${err} occured during logo generation`);
    });

}
    
// Starts the application
initialize();

