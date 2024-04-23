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

function writeToFile(fileName, data) {
    var content = generateLogo(data);
    
}


