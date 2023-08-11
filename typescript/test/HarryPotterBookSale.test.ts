import {describe, expect, test} from "@jest/globals";

class Order {
  static empty() {
    return new Order();
  }
}

describe("HarryPotterBookSale tests", () => {
  function price(order: Order) {
    return 0;
  }

  test("move", () => {
    expect(price(Order.empty())).toBe(0);
  });
});
