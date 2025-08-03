import { expect } from "chai";

import { add, multiply } from "../src/math.js";

describe("Math functions", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });

  it("multiplies two numbers", () => {
    expect(multiply(2, 3)).to.equal(6);
  });
});
