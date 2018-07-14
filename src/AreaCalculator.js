//const { Shape } = require("../src/Shape");
class AreaCalculator {
  // Returns the total area of all shapes rounded to the nearest whole number
  calculateArea(svg) {
    let area = 0;
    // let shapeConstructors = {
    //   circle: Circle(),
    //   rect: "Rectangle",
    //   ellipse: "Ellipse"
    // }
    let shapeObj = {
      circle: ["r"],
      rect: ["width", "height"],
      ellipse: ["rx", "ry"],
    };

    for (let shape of svg.children) {
      // let newShape = new [shapeConstructors[shape.tagName]](shape.getAttribute(shapeObj[shape.tagName][0]), shape.getAttribute(shapeObj[shape.tagName][1]));
      // area += newShape.calculateArea();

      if (shape.tagName === "circle") {
        let newShape = new Circle(shape.getAttribute("r"));
        area += newShape.calculateArea();
      }
      if (shape.tagName === "rect") {
        let newShape = new Rectangle(
          shape.getAttribute("width"),
          shape.getAttribute("height")
        );
        area += newShape.calculateArea();
      }
      if (shape.tagName === "ellipse") {
        let newShape = new Ellipse(
          shape.getAttribute("rx"),
          shape.getAttribute("ry")
        );
        area += newShape.calculateArea();
      }

      // shape.tagName) {
      //   case "circle": {
      //     let radius = shape.getAttribute("r");
      //     area += Math.PI * radius * radius;
      //     break;
      //   }
      //   case "rect": {
      //     let width = shape.getAttribute("width");
      //     let height = shape.getAttribute("height");
      //     area += width * height;
      //     break;
      //   }
      //   case "ellipse": {
      //     let r1 = shape.getAttribute("rx");
      //     let r2 = shape.getAttribute("ry");
      //     area += Math.PI * r1 * r2;
      //     break;
      //   }
      //   default:
      //     throw new Error("Type not implemented: " + shape.tagName);
      // }
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
