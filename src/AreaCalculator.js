//const { Shape } = require("../src/Shape");
class AreaCalculator {
  // Returns the total area of all shapes rounded to the nearest whole number
  calculateArea(svg) {
    let area = 0;
    let shapeConstructors = {
      circle: Circle,
      rect: Rectangle,
      ellipse: Ellipse,
    };
    let shapeArgs = {
      circle: ["r"],
      rect: ["width", "height"],
      ellipse: ["rx", "ry"],
    };

    for (let shape of svg.children) {
      let newShape = new shapeConstructors[shape.tagName](
        shape.getAttribute(shapeArgs[shape.tagName][0]),
        shape.getAttribute(shapeArgs[shape.tagName][1])
      );
      area += newShape.calculateArea();
    }
    return Math.round(area);
  }
}

class Shape {
  //should I get rid of this class? I'm not really doing anything with it other than categorizing the shapes together with it.
  constructor() {}

  calculateArea() {
    return false;
  }
}

class Ellipse extends Shape {
  constructor(r1, r2) {
    super();
    this.r1 = r1;
    this.r2 = r2;
    return this;
  }

  calculateArea() {
    return Math.PI * this.r1 * this.r2;
  }
}

class Circle extends Ellipse {
  constructor(radius) {
    super(radius, radius);
    return this;
  }
  calculateArea() {
    return super.calculateArea(this.r1, this.r2);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

module.exports = { Shape };

module.exports = { AreaCalculator };
