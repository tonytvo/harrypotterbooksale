import {describe, expect, test} from "@jest/globals";

class OrderBasket {
  static empty() {
    return new Order();
  }
}

class Order {
}

describe("HarryPotterBookSale tests", () => {
  function price(order: Order) {
    return 0;
  }

  test("move", () => {
    expect(price(OrderBasket.empty())).toBe(0);
  });
});
