---
description: 'Author: @wkw | https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/'
tags: [Array, Math, Dynamic Programming]
---

# 2750 - Ways to Split Array Into Good Subarrays (Medium)

## Problem Link

https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/

## Problem Statement

You are given a binary array `nums`.

A subarray of an array is **good** if it contains **exactly** **one** element with the value `1`.

Return _an integer denoting the number of ways to split the array_`nums`_into **good** subarrays_. As the number may be too large, return it **modulo** `109 + 7`.

A subarray is a contiguous **non-empty** sequence of elements within an array.

**Example 1:**

```
Input: nums = [0,1,0,0,1]
Output: 3
Explanation: There are 3 ways to split nums into good subarrays:
- [0,1] [0,0,1]
- [0,1,0] [0,1]
- [0,1,0,0] [1]
```

**Example 2:**

```
Input: nums = [0,1,0]
Output: 1
Explanation: There is 1 way to split nums into good subarrays:
- [0,1,0]
```

**Constraints:**

- $1 <= nums.length <= 10^5$
- $0 <= nums[i] <= 1$

## Approach 1: Counting

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int numberOfGoodSubarraySplits(vector<int>& nums) {
        int M = 1e9 + 7, n = nums.size();
        long long ans = 1;
        vector<long long> ones;
		// we store all the indices `i` where nums[i] is 1
        for (int i = 0; i < n; i++) if (nums[i] == 1) ones.push_back(i);
		// if there is no ones, then the answer is obviously zero
        if (ones.size() == 0) return 0;
		// for each gap, calculate the numbers of ways (ones[i] - ones[i - 1])
		// and multiply the answer
		// and take the mod
        for (int i = 1; i < ones.size(); i++) (ans *= (ones[i] - ones[i - 1])) %= M;
        return ans;
    }
};
```

</TabItem>
</Tabs>
