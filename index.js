const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateSVG = require('./')


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


// Writing svg file using the filename, and data from inquirere responses


function writeToFile(fileName, data) {
    var logo = generateLogo(data);

    writeToFile(fileName, logo, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Generated logo.svg");
    });
}



// Getting parameters for logo.svg
function initialize() {
console.log("Taking in parameters for logo");
    inquirer.prompt(questions)


    //Takes in data from inquirer
    .then(function(data) {

    //Logo variable is created using imported generate logo function
    var logo = generateLogo(data);

    console.log("logo created");


    // File is written using logo as the content
    fs.writeFile('./final/logo.svg', logo, 
    (err) => err ? console.log(err) : console.log("File saved to final folder"));

    fs.appendFile('./final/logo.svg', logo, 
    (err) => err ? console.log(err) : console.log("File saved to final folder"));

    




    // 

    //




    /*
    var fileName = "logo.svg";

    writeToFile(fileName,data);
        */
    });
}


// Starts the application
initialize();

