---
description: 'Author: @wingkwong | https://leetcode.com/problems/sort-the-matrix-diagonally/'
tags: [Array, Sorting, Matrix]
---

# 1329 - Sort the Matrix Diagonally (Medium) 

## Problem Statement

A **matrix diagonal** is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the **matrix diagonal** starting from `mat[2][0]`, where `mat` is a `6 x 3` matrix, includes cells `mat[2][0]`, `mat[3][1]`, and `mat[4][2]`.

Given an `m x n` matrix `mat` of integers, sort each **matrix diagonal** in ascending order and return *the resulting matrix*.

**Example 1:**

```
Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
```

**Example 2:**

```
Input: mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
Output: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]
```

**Constraints:**

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 100`
- `1 <= mat[i][j] <= 100`

## Approach 1: Priority Queue

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<int>> diagonalSort(vector<vector<int>>& mat) {
        int n = mat.size(), m = mat[0].size();
        // observation:
        // for each cell mat[i][j] in the same diagonal,
        // they will have the same value i - j
        
        // if the diagonal line is pointing to upper right direction, 
        // then they will have the same value i + j (see https://leetcode.com/problems/diagonal-traverse/)
        
        // the idea is to use priority queue for each diagonal
        // as priority queue could sort it internally when a value is pushed / popped
        // we use greater<int> as we want the smallest go first
        map<int, priority_queue<int, vector<int>, greater<int>>> diag;
        // iterate each row
        for (int i = 0; i < n; i++) {
            // iterate each col
            for (int j = 0; j < m; j++) {
                // for each mat[i][j] 
                // add it to corresponding priority queue
                diag[i - j].push(mat[i][j]);
            }
        }
        // iterate each row
        for (int i = 0; i < n; i++) {
            // iterate each col
            for (int j = 0; j < m; j++) {
                // diag[i - j].top() would return the smallest number in the current queue
                // we can just perform in-place replacement here
                mat[i][j] = diag[i - j].top();
                // since we don't need this value anymore, pop it out
                // so that next cell would get the smallest value
                diag[i - j].pop();
            }
        }
        return mat;
    }
};
```