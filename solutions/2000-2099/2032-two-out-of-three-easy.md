---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/two-out-of-three
tags: ['Hash Map']
---

# 2032 - Two Out of Three (Easy)

## Problem Link

https://leetcode.com/problems/two-out-of-three

## Problem Statement

Given three integer arrays `nums1`, `nums2`, and `nums3`, return _a **distinct** array containing all the values that are present in **at least two** out of the three arrays. You may return the values in **any** order_.&#x20;

**Example 1:**

```
Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.
```

**Example 2:**

```
Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.
```

**Example 3:**

```
Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.
```

**Constraints:**

* `1 <= nums1.length, nums2.length, nums3.length <= 100`
* `1 <= nums1[i], nums2[j], nums3[k] <= 100`

## Approach 1: Hash Map

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> twoOutOfThree(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3) {
        vector<int> ans;
        // use hash map to all elements from nums1, nums2, and nums3
        map<int, int> m;
        for(auto x : nums1) m[x] = 1;
        for(auto x : nums2) m[x] = 1;
        for(auto x : nums3) m[x] = 1;
        for(auto x : m) {
            // for each element in hash map, check if it exists in nums1, nums2, and nums3
            int c1 = 0, c2 = 0, c3 = 0;
            if (find(nums1.begin(), nums1.end(), x.first) != nums1.end()) c1 = 1;
            if (find(nums2.begin(), nums2.end(), x.first) != nums2.end()) c2 = 1;
            if (find(nums3.begin(), nums3.end(), x.first) != nums3.end()) c3 = 1;
            // if it presents in at least two out of the three arrays,
            // then add it to ans
            if (c1 + c2 + c3 >= 2) ans.push_back(x.first);
        }
        return ans;
    }
};
```