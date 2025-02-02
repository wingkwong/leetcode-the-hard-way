---
description: >-
  Author: @wkw | https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/
---

# 1855 - Maximum Distance Between a Pair of Values (Medium)

## Problem Link

https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/

## Problem Statement

You are given two **non-increasing 0-indexed** integer arrays `nums1`​​​​​​ and `nums2`​​​​​​.

A pair of indices `(i, j)`, where `0 <= i < nums1.length` and `0 <= j < nums2.length`, is **valid** if both `i <= j` and `nums1[i] <= nums2[j]`. The **distance** of the pair is `j - i`​​​​.

Return _the **maximum distance** of any **valid** pair_ `(i, j)`_. If there are no valid pairs, return_ `0`.

An array `arr` is **non-increasing** if `arr[i-1] >= arr[i]` for every `1 <= i < arr.length`.

**Example 1:**

```
Input: nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]
Output: 2
Explanation: The valid pairs are (0,0), (2,2), (2,3), (2,4), (3,3), (3,4), and (4,4).
The maximum distance is 2 with pair (2,4).
```

**Example 2:**

```
Input: nums1 = [2,2,2], nums2 = [10,10,1]
Output: 1
Explanation: The valid pairs are (0,0), (0,1), and (1,1).
The maximum distance is 1 with pair (0,1).
```

**Example 3:**

```
Input: nums1 = [30,29,19,5], nums2 = [25,25,25,25,25]
Output: 2
Explanation: The valid pairs are (2,2), (2,3), (2,4), (3,3), and (3,4).
The maximum distance is 2 with pair (2,4).
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 105`
- `1 <= nums1[i], nums2[j] <= 105`
- Both `nums1` and `nums2` are **non-increasing**.

## Approach 1: Two Pointers

As both arrays are sorted, we can use two pointers $$i$$ and $$j$$ to iterate $$nums1$$ and $$nums2$$ respectively. If $$nums1[i] <= nums2[j]$$, we can update the answer and increase pointer $$j$$ by $$1$$, else increase pointer $$i$$ by $$1$$.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int maxDistance(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size(), m = nums2.size();
        int i = 0, j = 0, ans = 0;
        // nums1 = [55,30,5,4,2], nums2 = [100,20,10,10,5]
        while(i < n && j < m) {
            if(nums1[i] <= nums2[j]) {
                ans = max(ans, j - i);
                j++;
            } else {
                i++;
            }
        }
        return ans;
    }
};
```

## Approach 2: Lower Bound

Using the same idea as approach 1 but with lower bound.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int maxDistance(vector<int>& nums1, vector<int>& nums2) {
        int ans = 0, n = nums1.size(), m = nums2.size();
        for (int i = 0; i < n; i++) {
            auto it = lower_bound(nums2.rbegin(), nums2.rend(), nums1[i]) - nums2.rbegin();
            int j = m - 1 - it;
            ans = max(ans, j - i);
        }
        return ans;
    }
};
```
