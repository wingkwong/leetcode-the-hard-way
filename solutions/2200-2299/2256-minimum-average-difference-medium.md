---
description: 'Author: @wkw | https://leetcode.com/problems/minimum-average-difference/'
tags: [Array, Prefix Sum]
---

# 2256 - Minimum Average Difference (Medium)

## Problem Link

https://leetcode.com/problems/minimum-average-difference/

## Problem Statement

You are given a **0-indexed** integer array `nums` of length `n`.

The **average difference** of the index `i` is the **absolute** **difference** between the average of the **first** `i + 1` elements of `nums` and the average of the **last** `n - i - 1` elements. Both averages should be **rounded down** to the nearest integer.

Return _the index with the **minimum average difference**_. If there are multiple such indices, return the **smallest** one.

**Note:**

- The **absolute difference** of two numbers is the absolute value of their difference.
- The **average** of `n` elements is the **sum** of the `n` elements divided (**integer division**) by `n`.
- The average of `0` elements is considered to be `0`.

**Example 1:**

```
Input: nums = [2,5,3,9,5,3]
Output: 3
Explanation:
- The average difference of index 0 is: |2 / 1 - (5 + 3 + 9 + 5 + 3) / 5| = |2 / 1 - 25 / 5| = |2 - 5| = 3.
- The average difference of index 1 is: |(2 + 5) / 2 - (3 + 9 + 5 + 3) / 4| = |7 / 2 - 20 / 4| = |3 - 5| = 2.
- The average difference of index 2 is: |(2 + 5 + 3) / 3 - (9 + 5 + 3) / 3| = |10 / 3 - 17 / 3| = |3 - 5| = 2.
- The average difference of index 3 is: |(2 + 5 + 3 + 9) / 4 - (5 + 3) / 2| = |19 / 4 - 8 / 2| = |4 - 4| = 0.
- The average difference of index 4 is: |(2 + 5 + 3 + 9 + 5) / 5 - 3 / 1| = |24 / 5 - 3 / 1| = |4 - 3| = 1.
- The average difference of index 5 is: |(2 + 5 + 3 + 9 + 5 + 3) / 6 - 0| = |27 / 6 - 0| = |4 - 0| = 4.
The average difference of index 3 is the minimum average difference so return 3.
```

**Example 2:**

```
Input: nums = [0]
Output: 0
Explanation:
The only index is 0 so return 0.
The average difference of index 0 is: |0 / 1 - 0| = |0 - 0| = 0.
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^5`

## Approach 1: Prefix Sum

For the example we can see that we need a range of sum of the input. Hence, we can calculate the prefix sum first. Then for each index, we split $$nums$$ into two parts and calculate the average difference.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int minimumAverageDifference(vector<int>& nums) {
        int ans = 0, n = nums.size(), mi = INT_MAX;
        // since we need the sum for first i + 1 and last n - i - 1 elements
        // we can pre-calculate it first
        // it is called prefix sum and suffix sum
        vector<long long> pref(n);
        // prev[0] is the first element
        pref[0] = nums[0];
        // starting from i = 1, pref[i] is the sum + the current element
        for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + nums[i];
        // then we can iterate each number
        for (int i = 0; i < n; i++) {
            // now we know the prefix sum
            // the suffix sum is simply pref[n - 1] - pref[i]
            long long k = abs((pref[i] / (i + 1)) - ((pref[n - 1] - pref[i]) / max(n - i - 1, 1)));
            // check the min and update ans
            if (k < mi) {
                mi = k;
                ans = i;
            }
        }
        return ans;
    }
};
```
