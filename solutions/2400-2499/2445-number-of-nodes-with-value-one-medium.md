---
description: 'Author: @wingkwong | https://leetcode.com/problems/number-of-nodes-with-value-one/'
---

# 2445 - Number of Nodes With Value One (Medium) 

## Problem Link

https://leetcode.com/problems/number-of-nodes-with-value-one/

## Problem Statement

There is an **undirected** connected tree with `n` nodes labeled from `1` to `n` and `n - 1` edges. You are given the integer `n`. The parent node of a node with a label `v` is the node with the label `floor (v / 2)`. The root of the tree is the node with the label `1`.

- For example, if `n = 7`, then the node with the label `3` has the node with the label `floor(3 / 2) = 1` as its parent, and the node with the label `7` has the node with the label `floor(7 / 2) = 3` as its parent.

You are also given an integer array `queries`. Initially, every node has a value `0` on it. For each query `queries[i]`, you should flip all values in the subtree of the node with the label `queries[i]`.

Return *the total number of nodes with the value*`1`***after processing all the queries***.

**Note** that:

- Flipping the value of a node means that the node with the value `0` becomes `1` and vice versa.
- `floor(x)` is equivalent to rounding `x` down to the nearest integer.

**Example 1:**

```
Input: n = 5 , queries = [1,2,5]
Output: 3
Explanation: The diagram above shows the tree structure and its status after performing the queries. The blue node represents the value 0, and the red node represents the value 1.
After processing the queries, there are three red nodes (nodes with value 1): 1, 3, and 5.
```

**Example 2:**

```
Input: n = 3, queries = [2,3,3]
Output: 1
Explanation: The diagram above shows the tree structure and its status after performing the queries. The blue node represents the value 0, and the red node represents the value 1.
After processing the queries, there are one red node (node with value 1): 2.
```

**Constraints:**

- `1 <= n <= 10 ^ 5`
- `1 <= queries.length <= 10 ^ 5`
- `1 <= queries[i] <= n`

## Approach 1: DFS

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int numberOfNodes(int n, vector<int>& queries) {
        // f[i] = 1 means we need to flip all values in the subtree of the node i
        vector<int> f(n + 1);
        // if we flip the node even times, the value would be same as the original value
        // e.g. 0 (original value) -> 1 -> 0
        // if we flip the node odd times, the value would be the the opposite of the original value
        // e.g.  0 (original value) -> 1 -> 0 -> 1
        // therefore, we can first process the queries to obtain the final flips
        for (auto q : queries) f[q] ^= 1;
        function<int(int, int)> dfs = [&](int u, int v) {
            // u is the current node label
            // if u is greater than n, then return 0
            if (u > n) return 0;
            // do we need to flip the node u? 
            // we flip the value if f[u] is 1
            v ^= f[u];
            // the result would be the value of u, i.e. v 
            // plus the result of the left subtree, i.e dfs(u * 2, v)
            // plus the result of the right subtree, i.e. dfs(u * 2 + 1, v)
            return v + dfs(u * 2, v) + dfs(u * 2 + 1, v);
        };
        // we start from node 1 with inital value 0
        return dfs(1, 0);
    }
};
```

</TabItem>
</Tabs>