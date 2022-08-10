---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/maximum-split-of-positive-even-integers/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2178 - Maximum Split of Positive Even Integers (Medium)

## Problem Link

https://leetcode.com/problems/maximum-split-of-positive-even-integers/

## Problem Statement

You are given an integer `finalSum`. Split it into a sum of a **maximum** number of **unique** positive even integers.

* For example, given `finalSum = 12`, the following splits are **valid** (unique positive even integers summing up to `finalSum`): `(2 + 10)`, `(2 + 4 + 6)`, and `(4 + 8)`. Among them, `(2 + 4 + 6)` contains the maximum number of integers. Note that `finalSum` cannot be split into `(2 + 2 + 4 + 4)` as all the numbers should be unique.

Return _a list of integers that represent a valid split containing a **maximum** number of integers_. If no valid split exists for `finalSum`, return _an **empty** list_. You may return the integers in **any** order.

**Example 1:**

```
Input: finalSum = 12
Output: [2,4,6]
Explanation: The following are some valid splits: (2 + 10), (2 + 4 + 6), and (4 + 8).
(2 + 4 + 6) has the maximum number of integers, which is 3. Thus, we return [2,4,6].
Note that [2,6,4], [6,2,4], etc. are also accepted.
```

**Example 2:**

```
Input: finalSum = 7
Output: []
Explanation: There are no valid splits for the given finalSum.
Thus, we return an empty array.
```

**Example 3:**

```
Input: finalSum = 28
Output: [6,8,2,12]
Explanation: The following are some valid splits: (2 + 26), (6 + 8 + 2 + 12), and (4 + 24). 
(6 + 8 + 2 + 12) has the maximum number of integers, which is 4. Thus, we return [6,8,2,12].
Note that [10,2,4,12], [6,2,4,16], etc. are also accepted.
```

**Constraints:**

* `1 <= finalSum <= 10^10`

## Approach 1: Greedy

If $$finalSum$$ is odd, then return empty array.

Otherwise, we start from the lowest even number $$x = 2$$. Then add it to our final array. Subtract $$finalSum$$ from $$x$$ and set $$x$$ to the next even number. Do the same logic until $$x$$ cannot be used. At the end, add the remainder to the last element of the array.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<long long> maximumEvenSplit(long long finalSum) {
        vector<long long> ans;
        // final sum is odd, return empty array
        if (finalSum & 1) return ans;
        // add lowest even number
        long long x = 2;
        // check if we can use x
        while (x <= finalSum) {
            // add it to answer
            ans.push_back(x);
            // update finalSum and set x to the next even number
            finalSum -= x, x += 2;
        }
        // add the remainder to the last element
        ans.back() += finalSum;
        return ans;
    }
};
```
