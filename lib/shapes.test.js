// Importing Triangle, Square, Circle classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");


// Testing for a square with an orange background
describe("Square Test", () => {
    test("should produce a square with a orange background", () => {
      const shape = new Square();
      const result = shape.render("orange");
      expect(result).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="orange" />'
      );
    });
  });


// Testing for a circle with a pink background
describe("Circle Test", () => {
    test("should produce a circle with a pink background", () => {
      const shape = new Circle();
      const result = shape.render("pink");
      expect(result).toEqual(
        '<circle cx="150" cy="115" r="80" fill="pink" />'
      );
    });
  });


// Testing for a triangle with a green background
describe("Triangle Test", () => {
  test("should produce a triangle with a green background", () => {
    const shape = new Triangle();
    const result = shape.render("green");
    expect(result).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});

