---
title: 'LeetCode 1352 – Product of the Last K Numbers'
description: 'Solve Product of the Last K Numbers efficiently using prefix products, with constant-time add and query operations.'
tags: ['Array', 'Math', 'Design', 'Data Stream', 'Prefix Sum']
---

# 1352 - Product of the Last K Numbers (Medium)

## Problem Link

https://leetcode.com/problems/product-of-the-last-k-numbers

## Problem Statement

Design an algorithm that accepts a stream of integers and retrieves the product of the last `k` integers of the stream.

Implement the `ProductOfNumbers` class:

- `ProductOfNumbers()` Initializes the object with an empty stream.
- `void add(int num)` Appends the integer `num` to the stream.
- `int getProduct(int k)` Returns the product of the last `k` numbers in the current list. You can assume that always the current list has at least `k` numbers.

The test cases are generated so that, at any time, the product of any contiguous sequence of numbers will fit into a single 32-bit integer without overflowing.

**Example:**

```
Input
["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
[[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]

Output
[null,null,null,null,null,null,20,40,0,null,32]

Explanation
ProductOfNumbers productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3);        // [3]
productOfNumbers.add(0);        // [3,0]
productOfNumbers.add(2);        // [3,0,2]
productOfNumbers.add(5);        // [3,0,2,5]
productOfNumbers.add(4);        // [3,0,2,5,4]
productOfNumbers.getProduct(2); // return 20. The product of the last 2 numbers is 5 * 4 = 20
productOfNumbers.getProduct(3); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
productOfNumbers.getProduct(4); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
productOfNumbers.add(8);        // [3,0,2,5,4,8]
productOfNumbers.getProduct(2); // return 32. The product of the last 2 numbers is 4 * 8 = 32
```

**Constraints:**

- `0 <= num <= 100`
- `1 <= k <= 4 * 1e4`
- At most `4 * 1e4` calls will be made to `add` and `getProduct`.
- The product of the stream at any point in time will fit in a **32-bit** integer.

**Follow-up:**Can you implement **both** `GetProduct` and `Add` to work in `O(1)` time complexity instead of `O(k)` time complexity?

## Approach 1: Prefix Product

This solution uses a prefix product list. The list starts with $1$ which acts as a neutral value for multiplication. Whenever we add a non-zero number, we multiply it by the previous prefix product and store the new result.

For example, if the numbers are $2, 5, 4$, the prefix product list becomes $[1, 2, 10, 40]$. To find the product of the last two numbers, we divide the total product $40$ by the product before those two numbers, which is $2$. Therefore, $40 / 2 = 20$.

Zero needs special handling because division by zero is impossible. When a zero is added, the prefix product list is reset to $[1]$. This effectively forgets everything before the most recent zero. If $k$ is greater than or equal to the number of stored non-zero values plus one, the requested range includes that zero, so the answer is $0$.

The time complexity is $O(n)$ and the space complexity is $O(n)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class ProductOfNumbers:
    def __init__(self):
        self.p = [1]

    def add(self, num):
        self.p = [1] if not num else self.p + [self.p[-1] * num]

    def getProduct(self, k):
        return self.p[-1] // self.p[-k - 1] if k < len(self.p) else 0


# Your ProductOfNumbers object will be instantiated and called as such:
# obj = ProductOfNumbers()
# obj.add(num)
# param_2 = obj.getProduct(k)
```

</TabItem>
</Tabs>