---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/find-closest-number-to-zero/
---

import Authors from '@site/src/components/Authors';

# 2239 - Find Closest Number to Zero (Easy)

## Problem Link

https://leetcode.com/problems/find-closest-number-to-zero/

## Problem Statement

Given an integer array `nums` of size `n`, return _the number with the value **closest** to_ `0` _in_ `nums`. If there are multiple answers, return _the number with the **largest** value_.

**Example 1:**

```
Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
The distance from -4 to 0 is |-4| = 4.
The distance from -2 to 0 is |-2| = 2.
The distance from 1 to 0 is |1| = 1.
The distance from 4 to 0 is |4| = 4.
The distance from 8 to 0 is |8| = 8.
Thus, the closest number to 0 in the array is 1.
```

**Example 2:**

```
Input: nums = [2,-1,1]
Output: 1
Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.
```

**Constraints:**

* `1 <= n <= 1000`
* `-105 <= nums[i] <= 10^5`

## Approach 1:

If we sort the input and check if the absolute value is minimal, the answer would be found in the last round. However, it is not necessary to sort it here. We just need to check if the number is greater that answer or not.

<Authors names="@wingkwong"/>

```cpp
class Solution {
public:
    int findClosestNumber(vector<int>& nums) {
        int ans = INT_MAX, mi = INT_MAX;
        for (auto x : nums) {
            int d = abs(x);
            if (d < mi || (d == mi && x > ans)) {
                mi = d;
                ans = x;
            }
        }
        return ans;
    }
};
```
