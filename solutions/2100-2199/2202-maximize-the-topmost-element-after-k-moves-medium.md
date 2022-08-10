---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2202 - Maximize the Topmost Element After K Moves (Medium)

## Problem Link

https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/

## Problem Statement

You are given a **0-indexed** integer array `nums` representing the contents of a **pile**, where `nums[0]` is the topmost element of the pile.

In one move, you can perform **either** of the following:

* If the pile is not empty, **remove** the topmost element of the pile.
* If there are one or more removed elements, **add** any one of them back onto the pile. This element becomes the new topmost element.

You are also given an integer `k`, which denotes the total number of moves to be made.

Return _the **maximum value** of the topmost element of the pile possible after **exactly**_ `k` _moves_. In case it is not possible to obtain a non-empty pile after `k` moves, return `-1`.



**Example 1:**

```
Input: nums = [5,2,2,4,0,6], k = 4
Output: 5
Explanation:
One of the ways we can end with 5 at the top of the pile after 4 moves is as follows:
- Step 1: Remove the topmost element = 5. The pile becomes [2,2,4,0,6].
- Step 2: Remove the topmost element = 2. The pile becomes [2,4,0,6].
- Step 3: Remove the topmost element = 2. The pile becomes [4,0,6].
- Step 4: Add 5 back onto the pile. The pile becomes [5,4,0,6].
Note that this is not the only way to end with 5 at the top of the pile. It can be shown that 5 is the largest answer possible after 4 moves.
```

**Example 2:**

```
Input: nums = [2], k = 1
Output: -1
Explanation: 
In the first move, our only option is to pop the topmost element of the pile.
Since it is not possible to obtain a non-empty pile after one move, we return -1.
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `0 <= nums[i], k <= 10^9`

## Approach 1: Check All Cases

If $$k > n$$, then we can remove all elements and put the maximum element back at the end. However, this cannot be done when $$k - n$$ is an even number when $$n$$ is $$1$$. If $$k > 1$$, we can check the maximum value for the top $$k - 1$$ elements so that we put the maximum value in the last move. The last case is we only remove elements and not putting any of them back, i.e. check $$nums[k]$$ is the maximum.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int maximumTop(vector<int>& nums, int k) {
        int n = nums.size(), mx = -1;
        if (k > n) {
            auto p = max_element(nums.begin(), nums.end());
            if (p != nums.end() && (k - n) % 2 == 0 && n == 1) return -1;
            return *p;
        }
        if (k > 1) mx = *max_element(nums.begin(), nums.begin() + k - 1);
        if (k < n) mx = max(mx, nums[k]);
        return mx;
    }
};
```
