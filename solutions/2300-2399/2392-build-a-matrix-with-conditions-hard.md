---
description: 'Author: @wingkwong | https://leetcode.com/problems/build-a-matrix-with-conditions/'
---

# 2392 - Build a Matrix With Conditions (Hard) 

## Problem Statement

You are given a **positive** integer `k`. You are also given:

- a 2D integer array `rowConditions` of size `n` where `rowConditions[i] = [abovei, belowi]`, and
- a 2D integer array `colConditions` of size `m` where `colConditions[i] = [lefti, righti]`.

The two arrays contain integers from `1` to `k`.

You have to build a `k x k` matrix that contains each of the numbers from `1` to `k` **exactly once**. The remaining cells should have the value `0`.

The matrix should also satisfy the following conditions:

- The number `abovei` should appear in a **row** that is strictly **above** the row at which the number `belowi` appears for all `i` from `0` to `n - 1`.
- The number `lefti` should appear in a **column** that is strictly **left** of the column at which the number `righti` appears for all `i` from `0` to `m - 1`.

Return ***any** matrix that satisfies the conditions*. If no answer exists, return an empty matrix.

**Example 1:**

```
Input: k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]
Output: [[3,0,0],[0,0,1],[0,2,0]]
Explanation: The diagram above shows a valid example of a matrix that satisfies all the conditions.
The row conditions are the following:
- Number 1 is in row 1, and number 2 is in row 2, so 1 is above 2 in the matrix.
- Number 3 is in row 0, and number 2 is in row 2, so 3 is above 2 in the matrix.
The column conditions are the following:
- Number 2 is in column 1, and number 1 is in column 2, so 2 is left of 1 in the matrix.
- Number 3 is in column 0, and number 2 is in column 1, so 3 is left of 2 in the matrix.
Note that there may be multiple correct answers.
```

**Example 2:**

```
Input: k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]
Output: []
Explanation: From the first two conditions, 3 has to be below 1 but the third conditions needs 3 to be above 1 to be satisfied.
No matrix can satisfy all the conditions, so we return the empty matrix.
```

**Constraints:**

- `2 <= k <= 400`
- `1 <= rowConditions.length, colConditions.length <= 10^4`
- `rowConditions[i].length == colConditions[i].length == 2`
- `1 <= abovei, belowi, lefti, righti <= k`
- `abovei != belowi`
- `lefti != righti`

## Approach 1: Kahn's Algorithm

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // there is at least one vertex in the “graph” with an “in-degree” of 0. 
    // if all vertices in the “graph” have non-zero “in-degree”, 
    // then all vertices need at least one vertex as a predecessor. 
    // In this case, no vertex can serve as the starting vertex.
    template<typename T_vector, typename T_vector_vector>
      T_vector kahn(int n, T_vector_vector &edges){
          vector<int> ordering, indegree(n, 0);
          vector<vector<int> > g(n);
          for (auto e : edges) {
            --e[0], --e[1];
            indegree[e[1]]++;
            g[e[0]].push_back(e[1]);
          }
          queue<int> q;
          for (int i = 0; i < n; i++) if (indegree[i] == 0) q.push(i);
          int visited = 0;
          while (!q.empty()) {
            int u = q.front(); q.pop();
            ordering.push_back(u);
            visited++;
            for (auto v : g[u]) {
              if (--indegree[v] == 0) q.push(v);
            }
          }
          if (visited != n) return T_vector{};
          return ordering;
      }
    
    // the idea is to topologically sort rowConditions & colConditions
    // then build the final matrix based on the order if possible
    vector<vector<int>> buildMatrix(int k, vector<vector<int>>& rowConditions, vector<vector<int>>& colConditions) {
        vector<vector<int>> ans(k, vector<int>(k));
        // in example 1, rowOrders would be [1, 3, 2]
        vector<int> rowOrders = kahn<vector<int>>(k, rowConditions);
        // in example 1, colOrders would be [3, 2, 1]
        vector<int> colOrders = kahn<vector<int>>(k, colConditions);
        // since we need to map to a `k x k` matrix, 
        // we need to make sure that both got exact k elements
        if ((int) rowOrders.size() == k && (int) colOrders.size() == k) {
            // used to map the index of the given row / col value
            // i.e. given the value, which row / col idx should it belong to
            vector<int> rowIdx(k), colIdx(k);
            for (int i = 0; i < k; i++) rowIdx[rowOrders[i]] = i, colIdx[colOrders[i]] = i;
            // update the final matrix
            for (int i = 0; i < k; i++) ans[rowIdx[i]][colIdx[i]] = i + 1;
            return ans;
        }
        // else we don't have a matrix that satisfies the conditions
        return vector<vector<int>>{};
    }
};
```