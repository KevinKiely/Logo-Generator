class Shape {
    constructor() {


    }

    setColor() {



    }


  }
  



  // Square class inherits properties defined in Shape class
  class Square extends Shape {



    // THIS IS ALL THE RENDER FUNCTION NEEDS TO DO FOR EACH SHAPE, YOU WILL JUST PLUG THE SHAPE INTO THE GENERATE LOGO FUNCTION WITH THE DATA.PARAMATERS AND YOU'LL BE SET
    render() {
      // Returns square with color input
      return `<rect x="73" y="40" width="160" height="160" fill="${data.shapeColor}" />`;
    }
  }

  
  // Circle class inherits properties defined in Shape class
  class Circle extends Shape {


    render() {
      // Returns circle with color input
      return `<circle cx="150" cy="115" r="80" fill="${data.shapeColor}" />`;
    }
  }

  // Triangle class inherits properties defined in Shape class
  class Triangle extends Shape {


    render() {
      // Returns polygon with color input
      return `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />`;
    }
  }
  
  
  
  // Exports classes (Square, Triangle, Circle)
  module.exports = { Triangle, Square, Circle };

  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill= "pink" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>