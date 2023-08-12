import {describe, expect, test} from "@jest/globals";

class OrderBasket {
  static empty() {
    return new Order(new Map<HARRY_POTTER_BOOK, number>());
  }

  static add(harryPotterBook: HARRY_POTTER_BOOK) {
    let quantityByType = new Map<HARRY_POTTER_BOOK, number>();
    quantityByType.set(harryPotterBook, 1);
    return new Order(quantityByType);
  }
}

enum HARRY_POTTER_BOOK {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH,
}

class Order {
  private _quantityByType;

  constructor(quantityByType: Map<HARRY_POTTER_BOOK, number>) {
    this._quantityByType = quantityByType;
  }

  getBooksQuantity() {
    return this._quantityByType.size == 0 ? 0 : 1;
  }
}

describe("HarryPotterBookSale tests", () => {
  function price(order: Order) {
    return order.getBooksQuantity()*8;
  }

  test("price of empty basket should be 0", () => {
    expect(price(OrderBasket.empty())).toBe(0);
  });

  function createOrder(harryPotterBook: HARRY_POTTER_BOOK) {
    return OrderBasket.add(harryPotterBook);
  }

  test("price of basket of 1 copy of any five books ", () => {
    expect(price(createOrder(HARRY_POTTER_BOOK.FIRST))).toBe(8);
    expect(price(createOrder(HARRY_POTTER_BOOK.SECOND))).toBe(8);
    expect(price(createOrder(HARRY_POTTER_BOOK.THIRD))).toBe(8);
    expect(price(createOrder(HARRY_POTTER_BOOK.FOURTH))).toBe(8);
    expect(price(createOrder(HARRY_POTTER_BOOK.FIFTH))).toBe(8);
  });

});
