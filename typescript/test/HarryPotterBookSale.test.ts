import {describe, expect, test} from "@jest/globals";

class OrderBasket {
  quantityByType = new Map<HARRY_POTTER_BOOK, number>();

  static empty() {
    return new Order(new Map<HARRY_POTTER_BOOK, number>());
  }

  add(harryPotterBook: HARRY_POTTER_BOOK) {
    this.quantityByType.set(harryPotterBook, 1);
    return this;
  }

  build() {
    return new Order(this.quantityByType);
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
    return this._quantityByType.size;
  }
}

describe("HarryPotterBookSale tests", () => {
  function price(order: Order) {
    if (order.getBooksQuantity() == 2) {
      return order.getBooksQuantity()*8*0.95;
    }
    return order.getBooksQuantity()*8;
  }

  test("price of empty basket should be 0", () => {
    expect(price(OrderBasket.empty())).toBe(0);
  });

  function createOrder(harryPotterBook: HARRY_POTTER_BOOK) {
    return new OrderBasket().add(harryPotterBook).build();
  }

  test("price of basket of 1 copy of any five books", () => {
    expect(price(createOrder(HARRY_POTTER_BOOK.FIRST))).toBe(8);
    expect(price(createOrder(HARRY_POTTER_BOOK.SECOND))).toBe(8);
    expect(price(createOrder(HARRY_POTTER_BOOK.THIRD))).toBe(8);
    expect(price(createOrder(HARRY_POTTER_BOOK.FOURTH))).toBe(8);
    expect(price(createOrder(HARRY_POTTER_BOOK.FIFTH))).toBe(8);
  });

  test("price of basket of 2 different book should give 5% discount", () => {
    expect(price(new OrderBasket()
        .add(HARRY_POTTER_BOOK.FIRST)
        .add(HARRY_POTTER_BOOK.SECOND)
        .build())).toBe(8 * 2 * 0.95);
  });

});
