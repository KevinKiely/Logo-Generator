
const { Triangle, Square, Circle } = require('./shapes.js');

function generateLogo(data) {
    console.log("This file has been imported correctly");
    console.log(data.shape);

    var finalShape;
    var color = data.shapeColor;

    // Check to see data.shape, log the value
    //For Squares
    if (data.shape === "Square") {
        var shape = new Square(color);
        finalShape = shape.render();
    }

    // For Circles
    else if (data.shape === "Circle") {
        var shape = new Circle(color);
        finalShape = shape.render();
    }

    // For Triangles
    else {
        var shape = new Triangle(color);
        finalShape = shape.render();
    }
    console.log(data.shapeColor);
    console.log(finalShape);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${finalShape}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.text}</text>
</svg>`;
}
module.exports = generateLogo;