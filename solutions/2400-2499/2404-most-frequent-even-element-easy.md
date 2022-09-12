---
description: 'Author: @wingkwong | https://leetcode.com/problems/most-frequent-even-element/'
---

# 2404 - Most Frequent Even Element (Easy) 

## Problem Statement

Given an integer array `nums`, return *the most frequent even element*.

If there is a tie, return the **smallest** one. If there is no such element, return `-1`.

**Example 1:**

```
Input: nums = [0,1,2,2,4,4,1]
Output: 2
Explanation:
The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
We return the smallest one, which is 2.
```

**Example 2:**

```
Input: nums = [4,4,4,9,2,4]
Output: 4
Explanation: 4 is the even element appears the most.
```

**Example 3:**

```
Input: nums = [29,47,21,41,13,37,25,7]
Output: -1
Explanation: There is no even element.
```

**Constraints:**

- `1 <= nums.length <= 2000`
- `0 <= nums[i] <= 10^5`

## Approach 1: Hash Map

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int mostFrequentEven(vector<int>& nums) {
        // init ans to -1 here in case there is no such element
        int ans = -1, mx = 0;
        // use hash map to store the frequency of each element
        map<int, int> m;
        for (auto &x : nums) m[x]++;
        // iterate each element in the hash map
        for (auto &x : m) {
            // x.first is the element
            // x.second is the frequency of that element
            // if the element is even -> x.first % 2 == 0 
            // and if the count is greater than the current maximum -> x.second > mx
            if (x.first % 2 == 0 && x.second > mx) {
                // then we can update the maximum
                mx = x.second;
                // and this element can be the answer
                ans = x.first;
            }
        }
        return ans;
    }
};
```