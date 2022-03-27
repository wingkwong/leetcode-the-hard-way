---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
---

# 1337 - The K Weakest Rows in a Matrix (Easy)

## Problem Statement

You are given an `m x n` binary matrix `mat` of `1`'s (representing soldiers) and `0`'s (representing civilians). The soldiers are positioned **in front** of the civilians. That is, all the `1`'s will appear to the **left** of all the `0`'s in each row.

A row `i` is **weaker** than a row `j` if one of the following is true:

* The number of soldiers in row `i` is less than the number of soldiers in row `j`.
* Both rows have the same number of soldiers and `i < j`.

Return _the indices of the_ `k` _ **weakest** rows in the matrix ordered from weakest to strongest_.

**Example 1:**

```
Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].
```

**Example 2:**

```
Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 1 
- Row 1: 4 
- Row 2: 1 
- Row 3: 1 
The rows ordered from weakest to strongest are [0,2,3,1].
```

**Constraints:**

* `m == mat.length`
* `n == mat[i].length`
* `2 <= n, m <= 100`
* `1 <= k <= m`
* `matrix[i][j]` is either 0 or 1.

## Approach 1: Brute Force

Iterate each row to find out the number of soldiers, store the count with the row index. Sort it and take the first $$k$$ counts.

```cpp
class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        vector<int> ans;
        vector<pair<int, int>> a;
        for (int i = 0; i < mat.size(); i++) {
            a.push_back({
                // number of soldiers
                accumulate(mat[i].begin(), mat[i].end(), 0),
                // row index
                i
            });
        }
        sort(a.begin(), a.end());
        // or use partial_sort
        // partial_sort(a.begin(), a.begin() + k, a.end());
        for (int i = 0; i < k; i++) {
            // add the count to answer
            ans.push_back(a[i].second);
        }
        return ans;
    }
};
```

## Approach 2: Binary Search

Instead of searching linearly, we can use binary search to find out the number of soldiers. The rest is same as approach 1.

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int n = nums.size(), l = 0, r = n;
        while (l < r) {
            int m = l + (r - l) / 2;
            if (nums[m] == target) l = m + 1;
            else r = m;
        }
        return l;
    }

    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        vector<int> ans;
        vector<pair<int, int>> a;
        for (int i = 0; i < mat.size(); i++) {
            a.push_back({
                search(mat[i], 1),
                // accumulate(mat[i].begin(), mat[i].end(), 0),
                i
            });
        }
        partial_sort(a.begin(), a.begin() + k, a.end());
        for (int i = 0; i < k; i++) {
            ans.push_back(a[i].second);
        }
        return ans;
    }
};
```
