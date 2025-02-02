---
description: 'Author: @wkw, @radojicic23 | https://leetcode.com/problems/sqrtx/'
---

# 0069 - Sqrt(x) (Easy)

## Problem Link

https://leetcode.com/problems/sqrtx/

## Problem Statement

Given a non-negative integer `x`, compute and return _the square root of_ `x`.

Since the return type is an integer, the decimal digits are **truncated**, and only **the integer part** of the result is returned.

**Note:** You are not allowed to use any built-in exponent function or operator, such as `pow(x, 0.5)` or `x ** 0.5`.

**Example 1:**

```
Input: x = 4
Output: 2
```

**Example 2:**

```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
```

**Constraints:**

- `0 <= x <= 2^31 - 1`

## Approach 1: Binary Search

:::info Prerequisite

- [Binary Search](../../tutorials/basic-topics/binary-search)

:::

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int mySqrt(int x) {
        // init possible range
        long long l = 0, r = x;
        while (l < r) {
            long long m = l + (r - l + 1) / 2;
            // exclude m
            if (x < m * m) r = m - 1;
            // include m
            else l = m;
        }
        return l;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
class Solution:
    def mySqrt(self, x: int) -> int:
        left = 0
        right = x
        while left <= right:
            mid = (left + right) // 2
            if x < mid * mid:
                right = mid - 1
            elif x > mid * mid:
                left = mid + 1
            else:
                return mid
        return right
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (x < mid * mid) {
      right = mid - 1;
    } else if (x > mid * mid) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return right;
};
```

</TabItem>
</Tabs>
