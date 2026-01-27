---
description: >-
  Author: @wkw | https://leetcode.com/problems/intersection-of-multiple-arrays/
---

# 2248 - Intersection of Multiple Arrays (Easy)

## Problem Link

https://leetcode.com/problems/intersection-of-multiple-arrays/

## Problem Statement

Given a 2D integer array `nums` where `nums[i]` is a non-empty array of **distinct** positive integers, return _the list of integers that are present in **each array** of_ `nums` _sorted in **ascending order**_.

**Example 1:**

```
Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation:
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].
```

**Example 2:**

```
Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation:
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
```

**Constraints:**

- `1 <= nums.length <= 1000`
- `1 <= sum(nums[i].length) <= 1000`
- `1 <= nums[i][j] <= 1000`
- All the values of `nums[i]` are **unique**.

## Approach 1: Brute Force

Observation: Each element of the final output would have a frequency of $$nums.length$$.

We use hash map to store the frequency for each integer. Iterate the map and look for the those with $$occurrence ==nums.length$$.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> intersection(vector<vector<int>>& nums) {
        int n = nums.size();
        unordered_map<int, int> m;
        vector<int> ans;
        // count each integer
        for (auto x : nums)  for (auto y : x) m[y]++;
        // if the count is equal to n, then take this integer
        for (auto x : m) if (x.second == n) ans.push_back(x.first);
        // sort in ascending order
        sort(ans.begin(), ans.end());
        return ans;
    }
};
```
