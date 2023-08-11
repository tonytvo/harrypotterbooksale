# harrypotterbooksale-kata

practice harry potter book sale with domain and functional. Follow this walkthrough https://fsharpforfunandprofit.com/posts/calculator-design/

To try and encourage more sales of the 5 different Harry Potter books they sell, a bookshop has decided to offer discounts of multiple-book purchases.

One copy of any of the five books costs 8 EUR.

If, however, you buy two different books, you get a 5% discount on those two books.

If you buy 3 different books, you get a 10% discount.

If you buy 4 different books, you get a 20% discount.

If you go the whole hog, and buy all 5, you get a huge 25% discount.

Note that if you buy, say, four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs 8 EUR.

Your mission is to write a piece of code to calculate the price of any conceivable shopping basket (containing only Harry Potter books), giving as big a discount as possible.

For example, how much does this basket of books cost?

2 copies of the first book
2 copies of the second book
2 copies of the third book
1 copy of the fourth book
1 copy of the fifth book

One way of group these 8 books is:
 1 group of 5 --> 25% discount (1st,2nd,3rd,4th,5th)
+1 group of 3 --> 10% discount (1st,2nd,3rd)
This would give a total of
 5 books at a 25% discount
+3 books at a 10% discount
Giving
 5 x (8 - 2.00) == 5 x 6.00 == 30.00
+3 x (8 - 0.80) == 3 x 7.20 == 21.60
For a total of 51.60

However, a different way to group these 8 books is:
 1 group of 4 books --> 20% discount  (1st,2nd,3rd,4th)
+1 group of 4 books --> 20% discount  (1st,2nd,3rd,5th)
This would give a total of
 4 books at a 20% discount
+4 books at a 20% discount
Giving
 4 x (8-1.60) == 4 x 6.40 == 25.60
+4 x (8-1.60) == 4 x 6.40 == 25.60
For a total of 51.20

And 51.20 is the price with the biggest discount.

suggested test cases

```
def testBasics
assert_equal(0, price([]))
assert_equal(8, price([1]))
assert_equal(8, price([2]))
assert_equal(8, price([3]))
assert_equal(8, price([4]))
assert_equal(8 * 3, price([1, 1, 1]))
end

def testSimpleDiscounts
assert_equal(8 * 2 * 0.95, price([0, 1]))
assert_equal(8 * 3 * 0.9, price([0, 2, 4]))
assert_equal(8 * 4 * 0.8, price([0, 1, 2, 4]))
assert_equal(8 * 5 * 0.75, price([0, 1, 2, 3, 4]))
end

def testSeveralDiscounts
assert_equal(8 + (8 * 2 * 0.95), price([0, 0, 1]))
assert_equal(2 * (8 * 2 * 0.95), price([0, 0, 1, 1]))
assert_equal((8 * 4 * 0.8) + (8 * 2 * 0.95), price([0, 0, 1, 2, 2, 3]))
assert_equal(8 + (8 * 5 * 0.75), price([0, 1, 1, 2, 3, 4]))
end

def testEdgeCases
assert_equal(2 * (8 * 4 * 0.8), price([0, 0, 1, 1, 2, 2, 3, 4]))
assert_equal(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8),
price([0, 0, 0, 0, 0,
1, 1, 1, 1, 1,
2, 2, 2, 2,
3, 3, 3, 3, 3,
4, 4, 4, 4]))
end
```

# References
- https://www.youtube.com/watch?v=TeYkMIXl73k&list=PLwAX_Bwbts_ec5Z7zVzg3iZCKUX8qE5Ke
