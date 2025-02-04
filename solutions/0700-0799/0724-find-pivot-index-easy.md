---
description: 'Author: @wkw | https://leetcode.com/problems/find-pivot-index/'
tags: [Array, Prefix Sum]
---

# 0724 - Find Pivot Index (Easy)

## Problem Statement

Given an array of integers `nums`, calculate the **pivot index** of this array.

The **pivot index** is the index where the sum of all the numbers **strictly** to the left of the index is equal to the sum of all the numbers **strictly** to the index's right.

If the index is on the left edge of the array, then the left sum is `0` because there are no elements to the left. This also applies to the right edge of the array.

Return \*the **leftmost pivot index\***. If no such index exists, return -1.

**Example 1:**

```
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
```

**Example 2:**

```
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
```

**Example 3:**

```
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
```

**Constraints:**

- `1 <= nums.length <= 10^4`
- `-1000 <= nums[i] <= 1000`

**Note:** This question is the same as 1991: [https://leetcode.com/problems/find-the-middle-index-in-array/](https://leetcode.com/problems/find-the-middle-index-in-array/)

## Approach 1: Prefix Sum

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int n = nums.size(), totalSum = 0;
        vector<int> pref(n + 1, 0);
        // Example 1
        // pref = [0, 1, 8, 11, 17, 22, 28]
        // totalSum = 28
        for (int i = 0; i < n; i++) pref[i + 1] = pref[i] + nums[i], totalSum += nums[i];
        for (int i = 0; i < n; i++) {
            // if the current number is nums[i],
            // then we can get the left part easily - just pref[i]
            // the right part would be the total sum - pref[i] - the current number
            int leftSum = pref[i], rightSum = sum - left - nums[i];
            // if the left sum is same as the right sum,
            // then i is the pivot index
            if(leftSum == rightSum) {
                return i;
            }
        }
        // no such index exists
        return -1;
    }
};
```

## Approach 2: Prefix Sum with Space Optimizated

```cpp
class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int n = nums.size(), leftSum = 0, totalSum = 0;
        // calculate the total sum
        // alternative, we can use `accumulate(nums.begin(), nums.end(), 0);`
        for (int i = 0; i < n; i++) totalSum += nums[i];
        for (int i = 0; i < n; i++) {
            // if the current number is nums[i],
            // then we can get the left part easily - i.e leftSum
            // the right part would be the total sum - leftSum - the current number
            int rightSum = totalSum - leftSum - nums[i];
            // if the left sum is same as the right sum,
            // then i is the pivot index
            if(leftSum == rightSum) {
                return i;
            }
            // add the current number to leftSum
            leftSum += nums[i];
        }
        // no such index exists
        return -1;
    }
};
```
