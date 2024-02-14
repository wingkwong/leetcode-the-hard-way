---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/rearrange-array-elements-by-sign/
tags: [Array, Two Pointers, Simulation]
---

# 2149 - Rearrange Array Elements by Sign (Medium)

## Problem Link

https://leetcode.com/problems/rearrange-array-elements-by-sign/

## Problem Statement

You are given a **0-indexed** integer array `nums` of **even** length consisting of an **equal** number of positive and negative integers.

You should **rearrange** the elements of `nums` such that the modified array follows the given conditions:

1. Every **consecutive pair** of integers have **opposite signs**.
2. For all integers with the same sign, the **order** in which they were present in `nums` is **preserved**.
3. The rearranged array begins with a positive integer.

Return _the modified array after rearranging the elements to satisfy the aforementioned conditions_.

**Example 1:**

```
Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
```

**Example 2:**

```
Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].
```

**Constraints:**

* $2 <= nums.length <= 2 * 10^5$
* `nums.length` is **even**
* $1 <= |nums[i]| <= 10^5$
* `nums` consists of **equal** number of positive and negative integers.

## Approach 1: Split and Combine

The idea is to split the input into two vectors - positive and negative. Then iterate both vector to build the final answer.

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) {
        vector<int> pos, neg, ans;
        for (auto x : nums) {
            if (x >= 0) pos.push_back(x);
            else neg.push_back(x);
        }
        int i = 0, j = 0, n = pos.size(), m = neg.size();
        while (i < n && j < m) {
            ans.push_back(pos[i++]);
            ans.push_back(neg[j++]);
        }
        return ans;
    }
};
```


</TabItem>
</Tabs>

We can further optimize the space complexity using two pointers to track the index of the pos and neg. In this way, we don't need the extra vectors to hold the positive and negative numbers.

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) {
        vector<int> ans(n);
        int i = 0, j = 1, n = nums.size();
        for (auto x : nums) {
            if (x >= 0) ans[i] = x, i += 2;
            else ans[j] = x, j += 2;
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>