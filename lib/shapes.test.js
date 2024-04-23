// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");


// Unit testing -> testing for a square with a purple background to render
describe("Square Test", () => {
    test("should produce a square with a orange background", () => {
      const shape = new Square();
      shape.setColor("orange");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="orange" />'
      );
    });
  });


// Unit testing -> testing for a circle with a #ca00ca background to render
describe("Circle Test", () => {
    test("should produce a circle with a pink background", () => {
      const shape = new Circle();
      shape.setColor("pink");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="pink" />'
      );
    });
  });


// Unit testing -> testing for a triangle with a blue background to render
describe("Triangle Test", () => {
  test("should produce a triangle with a green background", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});

