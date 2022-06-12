---
description: 'Author: @wingkwong | https://leetcode.com/problems/broken-calculator/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0991 - Broken Calculator (Medium)

## Problem Link

https://leetcode.com/problems/broken-calculator/

## Problem Statement

There is a broken calculator that has the integer `startValue` on its display initially. In one operation, you can:

* multiply the number on display by `2`, or
* subtract `1` from the number on display.

Given two integers `startValue` and `target`, return _the minimum number of operations needed to display_ `target` _on the calculator_.



**Example 1:**

```
Input: startValue = 2, target = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.
```

**Example 2:**

```
Input: startValue = 5, target = 8
Output: 2
Explanation: Use decrement and then double {5 -> 4 -> 8}.
```

**Example 3:**

```
Input: startValue = 3, target = 10
Output: 3
Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.
```

**Constraints:**

* `1 <= x, y <= 10^9`

## Approach 1: Greedy

We solve it backwards. For operation 1, instead of multiplying the number by $$2$$, we divide it by $$2$$ if possible. Similarly, we add $$1$$ to the number for operation 2. At the end, the number may be less than startValue, in this case we can only use operation 2.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int brokenCalc(int startValue, int target) {
        int ans = 0;
        while (target > startValue) {
            if (target % 2 == 0) {
                // use operation 1
                target /= 2;
            } else {
                // use operation 2
                target += 1;
            }
            // increase number of operations
            ans += 1;
        }
        // target can be less than startValue
        // e.g. right after operation 1
        if (target < startValue) {
            // use operation 2
            ans += startValue - target;
        }
        return ans;
    }
};
```
