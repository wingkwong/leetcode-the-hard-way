---
description: 'Author: @wkw | https://leetcode.com/problems/modify-the-matrix/'
---

# 3033 - Modify the Matrix (Easy)

## Problem Link

https://leetcode.com/problems/modify-the-matrix/

## Problem Statement

Given a **0-indexed** `m x n` integer matrix `matrix`, create a new **0-indexed** matrix called `answer`. Make `answer` equal to `matrix`, then replace each element with the value `-1` with the **maximum** element in its respective column.

Return _the matrix_ `answer`.

**Example 1:**

```
Input: matrix = [[1,2,-1],[4,-1,6],[7,8,9]]
Output: [[1,2,9],[4,8,6],[7,8,9]]
Explanation: The diagram above shows the elements that are changed (in blue).
- We replace the value in the cell [1][1] with the maximum value in the column 1, that is 8.
- We replace the value in the cell [0][2] with the maximum value in the column 2, that is 9.
```

**Example 2:**

```
Input: matrix = [[3,-1],[5,2]]
Output: [[3,2],[5,2]]
Explanation: The diagram above shows the elements that are changed (in blue).
```

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `2 <= m, n <= 50`
- `-1 <= matrix[i][j] <= 100`
- The input is generated such that each column contains at least one non-negative integer.

## Approach 1: Brute Force

The approach is simply just search the maximum element for each column and replace all $-1$ with correpsonding maximum element.

- Time Complexity: $O(m * n)$
- Space Complexity: $O(m)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<vector<int>> modifiedMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        // mx[j] stores the maximum element in
        vector<int> mx(n);
        // iterate columns first
        for (int j = 0; j < n; j++) {
            // iterate rows
            for (int i = 0; i < m; i++) {
                // getting the maximum element for column `j`
                mx[j] = max(mx[j], matrix[i][j]);
            }
        }
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // if it is -1, then we can replace it with mx[j]
                if (matrix[i][j] == -1) {
                    matrix[i][j] = mx[j];
                }
            }
        }
        return matrix;
    }
};
```

</TabItem>
</Tabs>

As you can see, we can further optimize the above solution. Since we iterate the column first, we can iterate it again to replace the -1 values. In this case, we don't need $mx[j]$ anymore. Therefore, we can achieve $O(1)$ space in this solution.

- Time Complexity: $O(m * n)$
- Space Complexity: $O(1)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```
class Solution {
public:
    vector<vector<int>> modifiedMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        // iterate columns first
        for (int j = 0; j < n; j++) {
            // mx stores the max element in the current column j
            int mx = 0;
            // getting the maximum element for the current column `j`
            for (int i = 0; i < m; i++) mx = max(mx, matrix[i][j]);
            // since we've found the maximum for this column,
            // we can iterate it again and replace for the -1 values
            for (int i = 0; i < m; i++) if (matrix[i][j] == -1) matrix[i][j] = mx;
        }
        return matrix;
    }
};
```

</TabItem>
</Tabs>
