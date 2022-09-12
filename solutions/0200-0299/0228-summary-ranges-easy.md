---
description: 'Author: @wingkwong | https://leetcode.com/problems/summary-ranges/'
---

# 0228 - Summary Ranges (Easy)

## Problem Link

https://leetcode.com/problems/summary-ranges/

## Problem Statement

You are given a **sorted unique** integer array `nums`.

Return _the **smallest sorted** list of ranges that **cover all the numbers in the array exactly**_. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a,b]` in the list should be output as:

* `"a->b"` if `a != b`
* `"a"` if `a == b`

**Example 1:**

```
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

**Example 2:**

```
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```

**Constraints:**

* `0 <= nums.length <= 20`
* `-2^31 <= nums[i] <= 2^31 - 1`
* All the values of `nums` are **unique**.
* `nums` is sorted in ascending order.

## Approach 1: Iteration

We take a number as an starting point at $$i$$, then search for the next ending point $$j$$ which satisfies $$nums[j] + 1 \ne nums[j + 1]$$. If both pointer is not same, then we can push $$nums[i]$$->$$nums[j]$$ to our answer array, else we just push $$nums[i]$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        vector<string> ans;
        int n = (int) nums.size();
        for(int i = 0; i < n; i++) {
            // take nums[i] as a in range [a, b]
            int a = nums[i];
            // search for the next ending point
            while (i != n - 1 && nums[i] + 1 == nums[i + 1]) i++;
            // take nums[i] as b in range [a, b]
            int b = nums[i];
            // output as "a" if a == b
            if(a == b) ans.push_back(to_string(a));
            // output as "a->b" if a != b
            else ans.push_back(to_string(a) + "->" + to_string(b));
        }
        return ans;
    }
};
```
