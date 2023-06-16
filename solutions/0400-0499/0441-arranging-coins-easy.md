---
description: "Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/arranging-coins/"
---

# 0441 - Arranging Coins (Easy)

## Problem Link

https://leetcode.com/problems/arranging-coins/

## Problem Statement

You have `n` coins and you want to build a staircase with these coins. The staircase consists of `k` rows where the `ith` row has exactly `i` coins. The last row of the staircase **may be** incomplete.

Given the integer `n`, return _the number of **complete rows** of the staircase you will build_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/04/09/arrangecoins1-grid.jpg)

```
Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/04/09/arrangecoins2-grid.jpg)

```
Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
```

**Constraints:**

- `1 <= n <= 2^31 - 1`

## Approach 1: Math

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int arrangeCoins(int n) {
        // Gauss' formula
        // k * (k + 1) / 2 <= n
        // k * (k + 1 / 2) ^ 2 - 1 / 4 <= n
        // k = sqrt(2 * n + 1 / 4) - 1 / 2
        return sqrt(2 *(long long) n + 0.25) - 0.5;
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Binary Search

:::info Prerequisite

- [Binary Search](../../tutorials/basic-topics/binary-search)

:::

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int arrangeCoins(int n) {
        // init possible range
        long long l = 1, r = n;
        while (l < r) {
            // get the middle one
            // for even number of elements, take the upper one
            long long m = l + (r - l + 1) / 2;
            // for m rows, how many coins can be put?
            long long total = m * (m + 1) / 2;
            // exclude m
            if (n < total) r = m - 1;
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
    def arrangeCoins(self, n: int) -> int:
        left = 1
        right = n
        while left <= right:
            mid = (left + right) // 2
            temp = int(mid * (mid + 1) / 2)
            if temp == n:
                return mid
            elif temp < n:
                left = mid + 1
            else:
                right = mid - 1
        return right
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let temp = Number((mid * (mid + 1)) / 2);
    if (temp == n) {
      return mid;
    } else if (temp < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
```

</TabItem>
</Tabs>
