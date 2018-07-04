require("jsdom-global")();
const { expect } = require("chai");
const { AreaCalculator } = require("../src/AreaCalculator");

describe("AreaCalculator", function() {
  it("should calculate area", function() {
    const testDiv = document.createElement("div");
    testDiv.innerHTML = `<svg width="800" height="400">
            <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
            <rect x="100" y="200" width="200" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
            <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" />
        </svg>`;
    const svg = testDiv.children[0];
    const area = new AreaCalculator().calculateArea(svg);
    expect(area).to.equal(40735);
  });
});
