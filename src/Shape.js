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
    return Math.PI * r1 * r2;
  }
}

class Circle extends Ellipse {
  constructor(radius) {
    super(radius, radius);
    return this;
  }
  calculateArea() {
    return this.Ellipse.calculateArea(this.r1, this.r2);
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
