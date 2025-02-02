---
description: 'Author: @wkw, @adlet_lee, @jit | https://leetcode.com/problems/find-center-of-star-graph/'
tags: [Graph]
---

# 1791 - Find Center of Star Graph (Easy)

## Problem Link

https://leetcode.com/problems/find-center-of-star-graph/

## Problem Statement

There is an undirected **star** graph consisting of `n` nodes labeled from `1` to `n`. A star graph is a graph where there is one **center** node and **exactly** `n - 1` edges that connect the center node with every other node.

You are given a 2D integer array `edges` where each `edges[i] = [ui, vi]` indicates that there is an edge between the nodes `ui` and `vi`. Return the center of the given star graph.

**Example 1:**

```
Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
```

**Example 2:**

```
Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1
```

**Constraints:**

- `3 <= n <= 105`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `1 <= ui, vi <= n`
- `ui != vi`
- The given `edges` represent a valid star graph.

## Approach 1: Count degrees

Given that there is only one center node and exactly $n - 1$ edges that connect the center node with every other node, we can iterate each edge and count the degree. The number of degrees for the center node will be $n$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        n = len(edges)
        d = defaultdict(int)
        # iterate each edge and count the degree
        for edge in edges:
            d[edge[0]] += 1
            d[edge[1]] += 1
        # search for the center node
        for k, v in d.items():
            if v == n:
                return k
        # based on the constraints,
        # it won't reach here
        return -1
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@adlet_lee"/>

```java
class Solution {
    public int findCenter(int[][] edges) {
        var edgesCnt = new HashMap<Integer, Integer>();
        for(int i = 0; i < edges.length; ++i){
            edgesCnt.put(edges[i][0], edgesCnt.getOrDefault(edges[i][0], 0)+1);
            edgesCnt.put(edges[i][1], edgesCnt.getOrDefault(edges[i][1], 0)+1);
        }
        for(var edgeCnt : edgesCnt.entrySet()){
            if(edgeCnt.getValue() == edgesCnt.size()-1) return edgeCnt.getKey();
        }
        return -1;
    }
}
```

</TabItem>
</Tabs>

## Approach 2: Check the first two edges

Since center node will exist in each edge, we can simply check the first two edges. If $edges[0][0]$ is equal to $edges[1][0]$ or $edges[1][1]$, then $edges[0][0]$ is the center node. Otherwise, $edges[0][1]$ must be the center node given the problem statement.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        #
        if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1]:
            return edges[0][0]
        return edges[0][1]
```

</TabItem>

<TabItem value="racket" label="Racket">
<SolutionAuthor name="@jit"/>

```racket
(define (find-center edges)
  (car (set-intersect (car edges) (cadr edges))))
```

</TabItem>
</Tabs>
