---
description: 'Author: @wkw | https://leetcode.com/problems/shortest-path-with-at-most-k-consecutive-identical-characters'
tags: ['Graph Theory', 'Heap (Priority Queue)', 'Shortest Path']
---

# 3970 - Shortest Path With At Most K Consecutive Identical Characters (Medium)

## Problem Link

https://leetcode.com/problems/shortest-path-with-at-most-k-consecutive-identical-characters

## Problem Statement

You are given an integer `n` representing the number of nodes in a **directed weighted** graph, numbered from 0 to `n - 1`. This is represented by a 2D integer array `edges`, where `edges[i] = [ui, vi, wi]` represents a directed edge from node `ui` to node `vi` with weight `wi`.

You are also given a string `labels` of length `n`, where `labels[i]` is the character assigned to node `i`, and an integer `k`.

Return the **minimum** **total** edge weight of a path from node 0 to node `n - 1` such that the concatenation of the labels of the nodes along the path contains **at most** `k` **consecutive** **identical** characters. If no valid path exists, return -1.

**Example 1:**

**Input:** n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = "aab", k = 1

**Output:** 3

**Explanation:**

The optimal valid path from node 0 to node 2 is as follows:

- Use `edges[2] = [0, 2, 3]` to reach node 2 with a weight `wi = 3`.

The corresponding concatenation of labels is `"ab"`, which satisfies at most `k = 1` consecutive identical characters. Thus, the answer is 3.

**Example 2:**

**Input:** n = 3, edges = [[0,1,1],[1,2,1],[0,2,3]], labels = "aab", k = 2

**Output:** 2

**Explanation:**

The optimal valid path from node 0 to node 2 is as follows:

- Use `edges[0] = [0, 1, 1]` to reach node 1 with weight `wi = 1`.
- Use `edges[1] = [1, 2, 1]` to reach node 2 with weight `wi = 1`.

The corresponding concatenation of labels is `"aab"`, which satisfies at most `k = 2` consecutive identical characters. Thus, the answer is 2.

**Example 3:**

**Input:** n = 3, edges = [[0,1,1],[1,2,1]], labels = "aaa", k = 2

**Output:** -1

**Explanation:**

There is no valid path from node 0 to node 2 that satisfies at most `k = 2` consecutive identical characters. Thus, the answer is -1.

**Constraints:**

- `1 <= n == labels.length <= 5 * 1e4`
- `0 <= edges.length <= 5 * 1e4`
- `edges[i] == [ui, vi, wi]`
- `0 <= ui, vi <= n - 1`
- `ui != vi`
- `1 <= wi <= 1e4`
- `labels` consists of lowercase English letters
- `1 <= k <= 50`

## Approach 1: Dijkstra with Pruning

This is a shortest-path problem with positive edge weights, so Dijkstra is a natural starting point. However, the current node alone is not enough to describe a state. We also need to know the length of the current suffix of identical characters because that determines whether we are still allowed to extend the path.

Let each heap state be $(d, u, r)$, where:

- $d$ is the total distance from node $0$ to node $u$
- $u$ is the current node
- $r$ is the number of consecutive identical characters at the end of the path

When we move from $u$ to $v$:

- if $labels[u] = labels[v]$, then the new streak becomes $r + 1$,
- otherwise, the streak resets to $1$.

So we can run Dijkstra on these extended states instead of on nodes alone.

The main pruning idea is that, for the same node, a smaller streak is always better than a larger one as long as the distance is not worse. A smaller streak gives us at least as much freedom for all future moves. Since Dijkstra pops states in nondecreasing order of distance, if we have already processed node $u$ with streak $s$, then any later state reaching $u$ with streak $r \ge s$ cannot help, because it has no smaller distance and no better streak.

Therefore, we keep $best[u]$, the smallest streak value with which node $u$ has already been processed. If a popped state has $r \ge best[u]$, we skip it. Otherwise, we update $best[u] = r$ and relax all outgoing edges.

We start from $(0, 0, 1)$ because the path initially contains only node $0$, so the current streak length is $1$. As soon as node $n - 1$ is popped from the heap, its distance is the minimum valid answer by the usual Dijkstra argument.

The bound on consecutive identical characters is enforced implicitly. Since $best$ is initialized with $k + 1$, any transition producing a streak of $k + 1$ will never be pushed into the heap, so invalid paths are automatically discarded.

Each node can be processed at most $k$ times, because every successful update strictly decreases its stored streak from at most $k$ down to $1$. Hence the time complexity is $O(mk \log(nk))$, where $m = edges.length$, and the space complexity is $O(n + m + nk)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def shortestPath(self, n: int, edges: List[List[int]], labels: str, k: int) -> int:
        g = [[] for _ in range(n)]
        for s, e, w in edges:
            g[s].append((e, w, labels[s] == labels[e]))
        best = [k + 1] * n
        h = [(0, 0, 1)]
        while h:
            d, u, r = heapq.heappop(h)
            if r >= best[u]: continue
            best[u] = r
            if u == n - 1: return d
            for v, w, same in g[u]:
                nr = r + 1 if same else 1
                if nr < best[v]: heapq.heappush(h, (d + w, v, nr))
        return -1
```

</TabItem>
</Tabs>