---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1281 - Subtract the Product and Sum of Digits of an Integer (Easy)

## Problem Link

https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

## Problem Statement

Given an integer number `n`, return the difference between the product of its digits and the sum of its digits.

**Example 1:**

```
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
```

**Example 2:**

```
Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
```

**Constraints:**

* `1 <= n <= 10^5`

## Approach 1: **Product & Sum of Digits**

If you have done [0258 - Add Digits (Easy)](../0200-0299/add-digits-easy), then you should know how to calculate the sum of digits. If not, it is recommended to solve 0258 before solving this problem. To recap, here's how to calculate the sum of digits.

```cpp
int digitSum(int n) {
    int sum = 0;
    while (n > 0) {
        // get the last digit and add it to sum
        // e.g. 123 % 10 = 3. Add 3 to sum
        sum += n % 10;
        // dividing by 10 for the next run
        // e.g. 123 / 10 -> 12
        n /= 10;
    }
    return sum;
}
```

We can use the same idea to calculate the product of each digit. Instead of adding each digit to $$sum$$, we multiply it with $$product$$.

```cpp
int digitProduct(int n) {
    int product = 1;
    while (n > 0) {
        // get the last digit and multiply with product
        // e.g. 123 % 10 = 3. product = product * 3
        product *= n % 10;
        // dividing by 10 for the next run
        // e.g. 123 / 10 -> 12
        n /= 10;
    }
    return product;
}
```

At the end, we just subtract the product and sum.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int digitSum(int n) {
        int sum = 0;
        while (n > 0) {
            // get the last digit and add it to sum
            // e.g. 123 % 10 = 3. Add 3 to sum
            sum += n % 10;
            // dividing by 10 for the next run
            // e.g. 123 / 10 -> 12
            n /= 10;
        }
        return sum;
    }
    
    int digitProduct(int n) {
        int product = 1;
        while (n > 0) {
            // get the last digit and multiply with product
            // e.g. 123 % 10 = 3. product = product * 3
            product *= n % 10;
            // dividing by 10 for the next run
            // e.g. 123 / 10 -> 12
            n /= 10;
        }
        return product;
    }
    
    int subtractProductAndSum(int n) {
        return digitProduct(n) - digitSum(n);
    }
};
```

Once you got the idea, you should realise that they can be combined together.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int subtractProductAndSum(int n) {
        int product = 1, sum = 0;
        while (n) {
            product *= n % 10;
            sum += n % 10;
            n /= 10;
        }
        return product - sum;
    }
};
```

<SolutionAuthor name="@wingkwong"/>

```go
func subtractProductAndSum(n int) int {
    product, sum := 1, 0
    for n > 0 {
        product *= n % 10
        sum += n % 10
        n /= 10
    }
    return product - sum
}
```
