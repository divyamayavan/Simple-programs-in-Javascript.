const mathOperations = {
  add: function (a, b) {
    return a + b;
  },

  sub: function (a, b) {
    return a - b;
  },

  product: function (a, b) {
    return a * b;
  },

  division: function (a, b) {
    return a / b;
  }

};

module.exports = {
  mathOperations,
};

test("Adding (2 + 2) = 4", () => {
  expect(mathOperations.add(2, 2)).toBeCloseTo(4);
});

test("Subtracting (10 - 5) = 5", () => {
  expect(mathOperations.sub(10, 5)).toBeCloseTo(5);
});

test("Multiplying (5 * 5) = 25", () => {
  expect(mathOperations.product(5, 5)).toBeCloseTo(25);
});

test("dividing (4 / 2) = 2", () => {
  expect(mathOperations.division(4, 2)).toBeCloseTo(2);
});