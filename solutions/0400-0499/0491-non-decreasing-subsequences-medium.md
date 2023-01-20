---
description: 'Author: @wingkwong | https://leetcode.com/problems/non-decreasing-subsequences/'
tags: [Array, Hash Table, Backtracking, Bit Manipulation]
---

# 0491 - Non-decreasing Subsequences (Medium) 

## Problem Link

https://leetcode.com/problems/non-decreasing-subsequences/

## Problem Statement

Given an integer array `nums`, return *all the different possible non-decreasing subsequences of the given array with at least two elements*. You may return the answer in **any order**.

**Example 1:**

```
Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
```

**Example 2:**

```
Input: nums = [4,4,3,2,1]
Output: [[4,4]]
```

**Constraints:**

- `1 <= nums.length <= 15`
- `-100 <= nums[i] <= 100`

## Approach 1: Set

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// ideas:
// 1. use set to store the subsequences
// 2. iterate each number to compare with the existing subsequences
// 3. if the last element is less than the current element, we can add this number to the subsequence
// 4. we can also do the same if the subsequence is empty
// 5. filter the subsequences to build the final answer
class Solution {
public:
    vector<vector<int>> findSubsequences(vector<int>& nums) {
        vector<vector<int>> ans;
        // use set to store the subsequences
        set<vector<int>> s;
        // init the first subsequence
        // alternatively you can do it with `set<vector<int>> s = {{}};`
        s.insert(vector<int>({}));
        // iterate each number
        for (auto x : nums) {
            // use `tmp_s` for storing the new subsequences
            // because we wants to iterate each subsequence in `s`
            set<vector<int>> tmp_s;
            for (auto cur_s : s) {
                // we can add the current element `x` if
                // 1. the subsequence is empty
                // e.g. x = 4, [] => [4]
                // 2. the last element is less than the current element
                // e.g. x = 6, [4] => [4, 6]
                if (cur_s.empty() || cur_s.back() <= x) {
                    // copy cur_s to new_s
                    // because we want to add the number to the new set `new_s`
                    // while keeping the old one `cur_s` unchanged
                    // e.g. x = 7, cur_s = [4, 6], new_s = [4, 6, 7] 
                    vector<int> new_s = cur_s;
                    // add the number to the new set `new_s`
                    new_s.push_back(x);
                    // add `new_s` to `tmp_s` instead of `s`
                    // because we are iterating `s`
                    tmp_s.insert(new_s);
                    
                }
            }
            // add the result back to `s`
            s.insert(tmp_s.begin(), tmp_s.end());
        }
        // iterate the set to build the final answer
        for (auto x : s) {
            // non-decreasing subsequences at least two elements
            if (x.size() >= 2) {
                ans.push_back(x);
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>