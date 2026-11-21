---
title: 'LeetCode 3331 – Find Subtree Sizes After Changes'
description: 'Find subtree sizes after tree reparenting using iterative DFS, nearest matching ancestor tracking, and bottom-up aggregation in O(n) time.'
tags: ['Array', 'Hash Table', 'String', 'Tree', 'Depth-First Search']
---

# 3331 - Find Subtree Sizes After Changes (Medium)

## Problem Link

https://leetcode.com/problems/find-subtree-sizes-after-changes

## Problem Statement

You are given a tree rooted at node 0 that consists of `n` nodes numbered from `0` to `n - 1`. The tree is represented by an array `parent` of size `n`, where `parent[i]` is the parent of node `i`. Since node 0 is the root, `parent[0] == -1`.

You are also given a string `s` of length `n`, where `s[i]` is the character assigned to node `i`.

We make the following changes on the tree **one** time **simultaneously** for all nodes `x` from `1` to `n - 1`:

- Find the **closest** node `y` to node `x` such that `y` is an ancestor of `x`, and `s[x] == s[y]`.
- If node `y` does not exist, do nothing.
- Otherwise, **remove** the edge between `x` and its current parent and make node `y` the new parent of `x` by adding an edge between them.

Return an array `answer` of size `n` where `answer[i]` is the **size** of the subtree rooted at node `i` in the **final** tree.

**Example 1:**

**Input:** parent = [-1,0,0,1,1,1], s = "abaabc"

**Output:** [6,3,1,1,1,1]

**Explanation:**

The parent of node 3 will change from node 1 to node 0.

**Example 2:**

**Input:** parent = [-1,0,4,0,1], s = "abbba"

**Output:** [5,2,1,1,1]

**Explanation:**

The following changes will happen at the same time:

- The parent of node 4 will change from node 1 to node 0.
- The parent of node 2 will change from node 4 to node 1.

**Constraints:**

- `n == parent.length == s.length`
- `1 <= n <= 1e5`
- `0 <= parent[i] <= n - 1` for all `i >= 1`.
- `parent[0] == -1`
- `parent` represents a valid tree.
- `s` consists only of lowercase English letters.

## Approach 1: DFS

First, we build children, where $c[u]$ contains the original children of node $u$. We also create $res$ with every value set to $1$, because each node counts as part of its own subtree.

We explore the original tree using a stack instead of recursion. During this traversal, $lst$ stores the closest ancestor with each character. When we enter a node $u$, we save $lst.get(s[u], -1)$ in $prev[u]$. This is the node’s new parent if a matching ancestor exists; otherwise, it keeps its original parent. We then set $lst[s[u]] = u$ so descendants can find this node.

Each node is processed twice: once when entering it and once when leaving it. The expression ~$u$ produces a negative number that marks the leaving step. We push this marker before the children, so all children finish before their parent. When leaving, we restore $lst[s[u]]$ to its previous value, ensuring nodes in other branches do not mistake $u$ for an ancestor.

By the time we leave $u$, $res[u]$ contains its final subtree size. We add this value to its new parent, or to its original parent if no matching ancestor exists. This works because the chosen parent is always an original ancestor and therefore finishes later. Since we traverse only the original tree, all parent changes are effectively made simultaneously.

The time complexity is $O(n)$ and the space complexity is $O(n)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def findSubtreeSizes(self, parent: List[int], s: str) -> List[int]:
        n = len(parent)
        c = [[] for _ in parent]
        for i in range(1, n): c[parent[i]].append(i)
        res, prev, lst, st = [1] * n, [-1] * n, {}, [0]
        while st:
            u = st.pop()
            if u >= 0:
                prev[u] = lst.get(s[u], -1)
                lst[s[u]] = u
                st.append(~u)
                st.extend(c[u])
            else:
                u = ~u
                lst[s[u]] = prev[u]
                p = prev[u] if prev[u] >= 0 else parent[u]
                if p >= 0: res[p] += res[u]
        return res
```

</TabItem>
</Tabs>