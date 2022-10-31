---
description: 'Author: @A-Spiral-Forge | https://leetcode.com/problems/search-a-2d-matrix-ii/ '
tags: [Array, Binary Search, Divide and Conquer, Matrix]
---

# 0240 - Search in a Matrix II

## Problem Link

https://leetcode.com/problems/search-a-2d-matrix-ii/

## Problem Statement

Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix `matrix`. This matrix has the following properties:
* Integers in each row are sorted in ascending from left to right.
* Integers in each column are sorted in ascending from top to bottom.

**Example 1:**

![image](https://user-images.githubusercontent.com/64008676/194871359-d7486080-eed9-4be0-8a25-706c4c08e776.png)
```
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5    
Output: true
```

**Example 2:**

![image](https://user-images.githubusercontent.com/64008676/194871498-df2d293f-780a-46b0-bcf5-b986aa7f6204.png)
```
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20    
Output: false
```

**Constraints:**

* $m$ == matrix.length
* $n$ == matrix[i].length
* 1 <= $n$, $m$ <= 300
* $-10^9 <= matrix[i][j] <= 10^9$
* All the integers in each row are **sorted** in ascending order.
* All the integers in each column are **sorted** in ascending order.
* $-10^9 <= target <= 10^9$

**Realted Topics:**
* Array
* Binary Search
* Divide and Conquer
* Matrix

## Approach 1: Brute Force
Traversal through the matrix and check if the target is present or not.

Time Complexity: $O(m * n)$, where $m$ - number of rows and $n$ - number of columns

Space complexity: $O(1)$, using contant space

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@A-Spiral-Forge"/>

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m = matrix.size();
        if(m == 0) {
            return false;
        }
        int n = matrix[0].size();
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(matrix[i][j] == target) {
                    return true;
                }
            }
        }
        return false;
    }
};
```
</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@A-Spiral-Forge"/>

```py
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix) and len(matrix[0])
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == target:
                    return True
        return False
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@A-Spiral-Forge"/>

```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;
        if(m == 0) {
            return false;
        }
        int n = matrix[0].length;
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(matrix[i][j] == target) {
                    return true;
                }
            }
        }
        return false;
    }
}
```
</TabItem>
</Tabs>

## Approach 2: Optimized Brute Force
* Start iterating the matrix from top right corner of the matrix, that is `matrix[0][size of column -1]`.
* If `matrix[i][j] == target`, return `true`.
* If the target is less than `matrix[i][j]`, then move leftwards (decrease the column), that is `--j`.
* If the target is greater than `matrix[i][j]`, then move downwards (increase the row), that is `++i`.
* If the target element is not found then after exiting the above loop, return `false`.

Time Complexity: $O(m + n)$, where $m$ - number of rows and $n$ - number of columns

Space complexity: $O(1)$, using contant space

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@A-Spiral-Forge"/>

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m = matrix.size();
        if(m == 0) {
            return false;
        }
        int n = matrix[0].size();
        int row = 0, col = n - 1;
        while(row < m && col >= 0) {
            if(matrix[row][col] == target) {
                return true;
            }
            if(matrix[row][col] > target) {
                col--;
            } else {
                row++;
            }
        }
        return false;
    }
};
```
</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@A-Spiral-Forge"/>

```py
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix) and len(matrix[0])
        r, c = 0, n - 1
        while r < m and c >= 0:
            if target > matrix[r][c]:
                r += 1
            elif target < matrix[r][c]:
                c -= 1
            else: 
                return True
        return False
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@A-Spiral-Forge"/>

```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int m = matrix.length;
        if(m == 0) {
            return false;
        }
        int n = matrix[0].length;
        int row = 0, col = n - 1;
        while(row < m && col >= 0) {
            if(matrix[row][col] == target) {
                return true;
            }
            if(matrix[row][col] > target) {
                col--;
            } else {
                row++;
            }
        }
        return false;
    }
}
```
</TabItem>
</Tabs>

## Approach 3: Binary Search
* We can apply binary search to the matrix to find the target element.
* First, we determine the first row where the target might occur (here we implement lower_bound binary search).
* Then we calculate the end row (not included) where the target might occur (using upper_bound binary search).
* Finally, iterate through each row until we find the target and use lower_bound binary search.

Time Complexity: $O(m log(n))$, where $m$ - number of rows and $n$ - number of columns

Space complexity: $O(1)$, using contant space

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@A-Spiral-Forge"/>

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int row = matrix.size(), col = row ? matrix[0].size() : 0;
        int start = 0, end = row, mid, endRow, startRow;
        while (start < end) {
            mid = start + (end - start) / 2;
            if (matrix[mid][col-1] >= target) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        startRow = start;
        start = 0, end = row;
        while (start < end) {
            mid = start + (end - start) / 2;
            if (matrix[mid][0] > target) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        endRow = start;
        for (int i = startRow; i < endRow; ++i) {
            start = 0, end = col;
            while (start < end) {
                mid = start + (end - start) / 2;
                if (matrix[i][mid] >= target) {
                    end = mid;
                } else {
                    start = mid + 1;
                }
            }
            if (start < col && matrix[i][start] == target) {
                return true;
            }
        }
        return false;
    }
};
```
</TabItem>
<TabItem value="python" label="Python">
<SolutionAuthor name="@A-Spiral-Forge"/>

```py
class Solution:
    def searchMatrix(matrix, target):
        m, n = len(matrix), len(matrix) and len(matrix[0])
        start, end = 0, m
        while start < end:
            mid = start + (end - start) // 2
            if matrix[mid][n-1] >= target:
                end = mid
            else:
                start = mid + 1
        startRow = start
        start, end = 0, m
        while start < end:
            mid = start + (end - start) // 2
            if matrix[mid][0] > target:
                end = mid
            else:
                start = mid + 1
        endRow = start
        for i in range(startRow, endRow):
            start, end = 0, n
            while start < end:
                mid = start + (end - start) // 2
                if matrix[i][mid] >= target:
                    end = mid
                else:
                    start = mid + 1
            if start < n and matrix[i][start] == target:
                return True
        return False
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@A-Spiral-Forge"/>

```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int row = matrix.length, col = row > 0 ? matrix[0].length : 0;
        int start = 0, end = row, mid, endRow, startRow;
        while (start < end) {
            mid = start + (end - start) / 2;
            if (matrix[mid][col-1] >= target) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        startRow = start;
        start = 0, end = row;
        while (start < end) {
            mid = start + (end - start) / 2;
            if (matrix[mid][0] > target) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        endRow = start;
        for (int i = startRow;i < endRow;++i) {
            start = 0, end = col;
            while (start < end) {
                mid = start + (end - start) / 2;
                if (matrix[i][mid] >= target) {
                    end = mid;
                } else {
                    start = mid + 1;
                }
            }
            if (start < col && matrix[i][start] == target) {
                return true;
            }
        }
        return false;
    }
}
```
</TabItem>
</Tabs>
