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

  test("price of empty basket should be 0", () => {
    expect(price(OrderBasket.empty())).toBe(0);
  });
});
