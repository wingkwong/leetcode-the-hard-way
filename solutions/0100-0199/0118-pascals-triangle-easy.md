---
description: 'Author: @ColeB2, @wkw | https://leetcode.com/problems/pascals-triangle/'
tags: [Array, Dynamic Programming]
---

# 0118 - Pascal's Triangle (Easy)

## Problem Link

https://leetcode.com/problems/pascals-triangle/

## Problem Statement

Given an integer `numRows`, return the first numRows of **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

**Example 1:**

```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

**Example 2:**

```
Input: numRows = 1
Output: [[1]]
```

**Constraints:**

- `1 <= numRows <= 30`

## Approach 1: Iterative Dynamic Programming

We know every level is based on the previous level, so we can reuse work from the previous level, to solve the current level.

To create a level, outside of the first, and last numbers of each level, for each position in the triangle, it is equal to the $$jth$$ position plus the $$jth - 1$$ position from the previous level. So we can initialize each level with an array already containing a $$1$$, and then loop from $$1$$ to $$i$$, which will be the length of the row, and finish by adding a $$1$$ to the row before adding it to the triangle.

Time Complexity: $$O(n^2)$$ where $$n$$ is the $$numRows$$, we must compute each element in the triangle, and each one is the sum of two elements from the previous row.

Space Complexity: $$O(n^2)$$, we need to store all the elements we create to return at the end.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # Basecase, intiailize a triangle with 1 row inside
        pascal_triangle = [[1]]
        # initialize with 1 row, we can skip the first iteration start at 1.
        for i in range(1, numRows):
            # first 1 inside the row
            row = [1]
            # Initialized row with our 1, now we can loop from 1 to i, to add
            # the values from j - 1 and current j together to get each number
            # in the triangle.
            for j in range(1, i):
                num = pascal_triangle[i - 1][j - 1] + pascal_triangle[i - 1][j]
                row.append(num)
            # finish by adding the last 1 to the row, and adding row to the triangle
            row.append(1)
            pascal_triangle.append(row)
        return pascal_triangle
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> ans(numRows);
        for(int i = 0; i < numRows; i++) {
            ans[i].resize(i + 1);
            ans[i][0] = ans[i][i] = 1;
            for(int j = 1; j < i; j++) {
                ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
            }
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> firstRow = new ArrayList<>();
        firstRow.add(1);
        res.add(firstRow);
        for (int row = 1; row < numRows; row++) {
            List<Integer> prevRow = res.get(row - 1);
            List<Integer> currentRow = new ArrayList<>();
            currentRow.add(1);
            for (int i = 1; i < row; i++) {
                currentRow.add(prevRow.get(i - 1) + prevRow.get(i));
            }
            currentRow.add(1);
            res.add(currentRow);
        }
        return res;
    }
}
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">
<SolutionAuthor name="@wkw"/>

```kt
class Solution {
    fun generate(numRows: Int): List<List<Int>> {
        val res = mutableListOf<List<Int>>()
        res.add(listOf(1))
        for (row in 1 until numRows) {
            val prevRow = res[row - 1]
            val currentRow = mutableListOf<Int>()
            currentRow.add(1)
            for (i in 1 until row) {
                currentRow.add(prevRow[i - 1] + prevRow[i])
            }
            currentRow.add(1)
            res.add(currentRow)
        }
        return res
    }
}
```

</TabItem>

</Tabs>
