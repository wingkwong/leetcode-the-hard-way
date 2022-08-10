---
description: 'Author: @wingkwong | https://leetcode.com/problems/contiguous-array/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0525 - Contiguous Array (Medium)

## Problem Link

https://leetcode.com/problems/contiguous-array/

## Problem Statement

Given a binary array `nums`, return _the maximum length of a contiguous subarray with an equal number of_ `0` _and_ `1`.

**Example 1:**

```
Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
```

**Example 2:**

```
Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `nums[i]` is either `0` or `1`.

## Approach 1: Prefix Sum + Hash Map

Since the number only contain either 0 and 1, we can check the balance and calculate the length. Let $$pre$$ be the sum with initial value 0. If $$nums[i]$$ is 1, then $$sum := sum + 1$$. If $$nums[i]$$ is 0, then $$sum := sum - 1$$. We iterate $$nums$$ to calculate $$pre$$. If we get the same $$pre$$ at some point, then it means we have one possible answer.

For example, given the input $$[0, 0, 0, 1, 1, 1]$$, $$pre$$ would be 0 -> -1 -> -2 -> -3 -> -2 -> -1 -> 0. We can see that there are three contiguous subarrays with an equal number of 0 and 1, which are $$nums[0..5], nums[1..4]$$ and $$nums[2..3]$$. The longest contiguous subarray with an equal number of 0 and 1 is $$nums[0..5]$$ which has the length of $$5 - 0 + 1 = 6$$.

Therefore, the approach is to calculate the prefix sum and put it into a hash map. If the prefix sum can be found, then the we can compare the length with the current maximum answer to see if we update it or not. This solution gives both $$O(n)$$time complexity and space complexity.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        int ans = 0, pre = 0, n = nums.size();
        unordered_map<int, int> m;
        for (int i = 0; i < n; i++) {
            pre += 2 * nums[i] - 1;
            if (pre == 0) ans = max(ans, i + 1);
            if (m.count(pre)) ans = max(ans, i - m[pre]);
            else m[pre] = i;            
        }
        return ans;
    }
};
```

Or you can initialise $$m[pre] = -1$$ for $$pre = 0$$.

```cpp
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        int ans = 0, pre = 0, n = nums.size();
        unordered_map<int, int> m;
        m[0] = -1;
        for (int i = 0; i < n; i++) {
            pre += 2 * nums[i] - 1;
            if (m.count(pre)) ans = max(ans, i - m[pre]);
            else m[pre] = i;            
        }
        return ans;
    }
};
```
