---
description: 'Author: @wkw | https://leetcode.com/problems/palindromic-path-queries-in-a-tree'
tags: ['Array', 'String', 'Dvide and Conquer', 'Bit Manipulation', 'Tree', 'Depth-First Search', 'Binary Indexed Tree', 'Segment Tree']
rating: 2384
---

# 3841 - Palindromic Path Queries in a Tree (Hard)

## Problem Link

https://leetcode.com/problems/palindromic-path-queries-in-a-tree

## Problem Statement

You are given an undirected tree with $n$ nodes labeled 0 to $n - 1$. This is represented by a 2D array $edges$ of length $n - 1$, where $edges[i] = [u_i, v_i]$ indicates an undirected edge between nodes $u_i$ and $v_i$.

You are also given a string $s$ of length $n$ consisting of lowercase English letters, where $s[i]$ represents the character assigned to node $i$.

You are also given a string array $queries$, where each $queries[i]$ is either:

- `"update u_i c"`: Change the character at node $u_i$ to `c`. Formally, update `s[u_i] = c`.
- `"query u_i v_i"`: Determine whether the string formed by the characters on the **unique** path from $u_i$ to $v_i$ (inclusive) can be **rearranged** into a **palindrome**.

Return a boolean array `answer`, where `answer[j]` is `true` if the `jth` query of type `"query u_i v_i"` can be rearranged into a **palindrome** and `false` otherwise.

**Example 1:**

**Input:** n = 3, edges = [[0,1],[1,2]], s = "aac", queries = ["query 0 2","update 1 b","query 0 2"]

**Output:** [true,false]

**Explanation:**

- `"query 0 2"`: Path `0 → 1 → 2` gives `"aac"`, which can be rearranged to form `"aca"`, a palindrome. Thus, `answer[0] = true`.
- `"update 1 b"`: Update node 1 to `'b'`, now `s = "abc"`.
- `"query 0 2"`: Path characters are `"abc"`, which cannot be rearranged to form a palindrome. Thus, `answer[1] = false`.

Thus, `answer = [true, false]`.

**Example 2:**

**Input:** n = 4, edges = [[0,1],[0,2],[0,3]], s = "abca", queries = ["query 1 2","update 0 b","query 2 3","update 3 a","query 1 3"]

**Output:** [false,false,true]

**Explanation:**

- `"query 1 2"`: Path `1 → 0 → 2` gives `"bac"`, which cannot be rearranged to form a palindrome. Thus, `answer[0] = false`.
- `"update 0 b"`: Update node 0 to `'b'`, now `s = "bbca"`.
- `"query 2 3"`: Path `2 → 0 → 3` gives `"cba"`, which cannot be rearranged to form a palindrome. Thus, `answer[1] = false`.
- `"update 3 a"`: Update node 3 to `'a'`, `s = "bbca"`.
- `"query 1 3"`: Path `1 → 0 → 3` gives `"bba"`, which can be rearranged to form `"bab"`, a palindrome. Thus, `answer[2] = true`.

Thus, `answer = [false, false, true]`.

**Constraints:**

- `1 <= n == s.length <= 5 * 1e4`
- `edges.length == n - 1`
- `edges[i] = [u_i, v_i]`
- `0 <= u_i, v_i <= n - 1`
- $s$ consists of lowercase English letters.
- The input is generated such that `edges` represents a valid tree.
- `1 <= queries.length <= 5 * 1e4`
    - `queries[i] = "update u_i c"` or
    - `queries[i] = "query u_i v_i"`
    - `0 <= u_i, v_i <= n - 1`
    - `c` is a lowercase English letter.

## Approach 1: BIT + HLD

In short, the key idea is to handle path queries on trees with updates using HLD and a BIT for XOR prefix sums.

A string can be rearranged into a palindrome if at most one character appears an odd number of times. For example, $aac$ has only one character with an odd frequency, while $abc$ has three. Therefore, we do not need the exact number of occurrences of each character. We only need to know whether each frequency is odd or even.

We represent these parities using a 26-bit integer. Bit $0$ represents $a$, bit $1$ represents $b$ and so on. The character $c$ is represented by `1 << (c - 'a')`. When character masks are combined with XOR, a bit is set exactly when the corresponding character occurs an odd number of times. This works because XOR cancels equal bits in pairs.

Next, we compute the root-to-node prefix masks. Root the tree at node $0$. For every node $u$, compute $pre[u]$, the XOR of all character masks on the path from the root to $u$, including both endpoints.

Let $w$ be the lowest common ancestor of nodes $u$ and $v$. The parity mask for the path from $u$ to $v$ is $pre[u] \oplus pre[v] \oplus val[w]$.

The two prefix paths share the path from the root to $w$. XOR removes this shared part including $w$, because it appears twice. Since $w$ belongs to the requested path, its current character mask must be added back with another XOR.

Once the path mask $x$ is known, it represents a palindrome permutation exactly when it contains at most one set bit. The standard test is $x \& (x - 1) == 0$. This is also true when $x$ is zero, meaning every character occurs an even number of times.

Next, we need to handle character updates. Suppose the character at node $u$ changes. Every root-to-node prefix mask inside the subtree of $u$ must also change, because every such path passes through $u$.

Let `oldMask` and `newMask` be the old and new character masks. The delta change is the XOR of both mask. Every node in $u$'s subtree must have its prefix mask XORed with this delta.

A DFS preorder assigns each node an index $idx[u]$. In this ordering, all nodes in the subtree of $u$ occupy one continuous interval $[idx[u], idx[u] + sz[u] - 1]$.

We use a BIT as an XOR difference array. To XOR the delta over the entire subtree interval, it applies delta at the beginning and immediately after the end.

A prefix query at $idx[x]$ then returns the XOR of all updates affecting node $x$. Consequently the current root-to-node prefix mask is $pre[x] \oplus get(idx[x])$.

Here $pre[x]$ remains the prefix mask from the original string while the BIT accounts for all later updates.

To find lowest common ancestor queries efficiently, we can use heavy-light decomposition (HLD). For each node, it determines the child with the largest subtree and marks that child as the heavy child. Heavy edges are grouped into chains and $h[u]$ stores the head of the chain containing $u$.

To find the LCA of $u$ and $v$, the algorithm repeatedly moves the node whose chain head is deeper to the parent of that chain head. When both nodes are in the same chain, the shallower node is their LCA. Each chain jump passes over a light edge, so there are only $O(log n)$ such jumps.

Putting all together, we construct the solution as following

- Build the adjacency list and root the tree at node $0$. During an iterative DFS, compute each node's parent, depth, original root-to-node parity mask and preorder index.
- Process nodes in reverse DFS order to calculate subtree sizes and identify each node's heavy child. Then process them in parent-before-child order to assign heavy-light chain heads.
- Maintain a BIT that supports subtree XOR updates and point queries. For an update at node $u$, calculate the XOR difference between its old and new masks, update $val[u]$ and apply that difference to the preorder interval of $u$'s subtree.
- For a path query between $u$ and $v$, find their LCA $w$. Obtain the current root-to-node masks for $u$ and $v$ using the original prefix masks together with the BIT. XOR these masks and the current character mask of $w$. The answer is $true$ if the resulting mask has at most one set bit.

The time complexity is $O((n + q) log n)$ and the space complexity is $O(n)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def palindromePath(self, n: int, edges: list[list[int]], s: str, queries: list[str]) -> list[bool]:
        # build an adjacency list
        g = [[] for _ in range(n)]
        for u, v in edges:
            g[u].append(v)
            g[v].append(u)
        # convert each character into a one-bit mask
        # XORing these masks tracks whether each character occurs an odd or even number of times
        val = [1 << (ord(c) - 97) for c in s]
        # store each node's parent, depth, original root-to-node prefix mask & position in the DFS preorder
        p = [-1] * n
        d, pre, idx = [0] * n, [0] * n, [0] * n
        pre[0] = val[0]
        # use an iterative DFS starting from node 0
        st = [0]
        # res stores query answers
        # o stores nodes in parent-before-child order
        res, o = [], []
        # root the tree at node 0 and calculate the parent, depth, prefix mask & preorder index of every node
        while st:
            u = st.pop()
            idx[u] = len(o)
            o.append(u)
            for v in g[u]:
                if v != p[u]:
                    p[v] = u
                    d[v] = d[u] + 1
                    pre[v] = pre[u] ^ val[v]
                    st.append(v)
        # compute subtree sizes in reverse DFS order
        # heavy[u] is the child of u with the largest subtree
        sz = [1] * n
        heavy = [-1] * n
        for u in o[::-1]:
            for v in g[u]:
                if p[v] == u:
                    sz[u] += sz[v]
                    if heavy[u] < 0 or sz[v] > sz[heavy[u]]:
                        heavy[u] = v
        # assign the head of each heavy-light chain
        # a heavy child remains in its parent's chain; every other child starts a new chain
        h = [0] * n
        for u in o[1:]: h[u] = h[p[u]] if heavy[p[u]] == u else u
        # Use a BIT as an XOR difference array, which supports subtree range updates and point queries
        bit = [0] * (n + 1)

        # BIT 
        def add(i, x):
            i += 1
            while i <= n:
                bit[i] ^= x
                i += i & -i

        def get(i):
            x = 0
            i += 1
            while i:
                x ^= bit[i]
                i -= i & -i
            return x

        # find the lowest common ancestor using heavy-light decomposition
        # move the node with the deeper chain head upward until both nodes belong to the same chain
        def lca(u, v):
            while h[u] != h[v]:
                if d[h[u]] < d[h[v]]:
                    u, v = v, u
                u = p[h[u]]
            return u if d[u] < d[v] else v

        # process updates and path queries in their original order
        for q in queries:
            t, u, v = q.split()
            u = int(u)
            if t[0] == "u":
                # find the XOR difference between the old and new characters 
                # and then replace the current character mask at node u
                x = val[u] ^ (1 << (ord(v) - 97))
                val[u] ^= x
                # every root-to-node prefix mask in u's subtree is affected
                # the subtree occupies the continuous interval [idx[u], idx[u] + sz[u] - 1] in the DFS preorder
                add(idx[u], x)
                add(idx[u] + sz[u], x)
            else:
                # combine the current root-to-u and root-to-v masks
                # their shared section cancels so add the LCA's current character back because it belongs to the path
                v = int(v)
                w = lca(u, v)
                x = pre[u] ^ get(idx[u]) ^ pre[v] ^ get(idx[v]) ^ val[w]
                # a path can be rearranged into a palindrome if at most one character has an odd frequency
                # meaning x has at most one set bit
                res.append(x & (x - 1) == 0)
        return res
```

</TabItem>
</Tabs>