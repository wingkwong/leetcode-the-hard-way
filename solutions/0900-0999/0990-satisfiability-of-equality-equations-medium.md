---
description: 'Author: @wkw | https://leetcode.com/problems/satisfiability-of-equality-equations/'
tags: [Array, String, Union Find, Graph]
---

# 0990 - Satisfiability of Equality Equations (Medium)

## Problem Link

https://leetcode.com/problems/satisfiability-of-equality-equations/

## Problem Statement

You are given an array of strings `equations` that represent relationships between variables where each string `equations[i]` is of length `4` and takes one of two different forms: `"xi==yi"` or `"xi!=yi"`.Here, `xi` and `yi` are lowercase letters (not necessarily different) that represent one-letter variable names.

Return `true`_if it is possible to assign integers to variable names so as to satisfy all the given equations, or_`false`_otherwise_.

**Example 1:**

```
Input: equations = ["a==b","b!=a"]
Output: false
Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.
There is no way to assign the variables to satisfy both equations.
```

**Example 2:**

```
Input: equations = ["b==a","a==b"]
Output: true
Explanation: We could assign a = 1 and b = 1 to satisfy both equations.
```

**Constraints:**

- `1 <= equations.length <= 500`
- `equations[i].length == 4`
- `equations[i][0]` is a lowercase letter.
- `equations[i][1]` is either `'='` or `'!'`.
- `equations[i][2]` is `'='`.
- `equations[i][3]` is a lowercase letter.

## Approach 1: Union Find

Based on the property of `==`. If you see `==` in the equation, then we can put those numbers under the same group due to the following properties.

- if a == b, then b == a
- if a == b, b == c, then a == c

In other word, x != y means x is not in the same group as y.

So we need a data structure to handle the connected relationship and use contradiction to find out the false cases. Then DSU comes to mind. If we can see them as a graph. For the case `a == b, b == c`, we may first think of a -> b -> c which may lead us to think about a DFS solution. However, we can compress the path like a -> b and a -> c where a is the root. By doing so, we compress b and c into the same level so that we don't need to walk all the nodes between the root and the source to achieve O(logN) per call on average.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int parent[26];
    // find the root of node x.
    // here we are not using parent[x],
    // because it may not contain the updated value of the connected component that x belongs to.
    // therefore, we walk the ancestors of the vertex until we reach the root.
    int find(int x) {
        // with path compression
        if (parent[x] == x) return x;
        return parent[x] = find(parent[x]);
        // without path compression
        // return parent[x] == x ? x : find(parent[x]);
    }
    // the idea is to put all characters in the same group if they are equal
    // in order to do that, we can use Disjoint Set Union (dsu) aka Union Find
    // for dsu tutorial, please check out https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union
    bool equationsPossible(vector<string>& equations) {
        int n = (int) equations.size();
        // at the beginning, put each character index in its own group
        // so we will have 26 groups with one character each
        // i.e. 'a' in group 0, 'b' in group 1, ..., 'z' in group 25
        for (int i = 0; i < 26; i++) parent[i] = i;
        for (auto e : equations) {
            // if two character is equal,
            if (e[1] == '=') {
                // e.g. a == b
                // then we group them together
                // how? we use `find` function to find out the parent group of the target character index
                // then update parent. a & b would be in group 1 (i.e. a merged into the group where b belongs to)
                // or you can also do `parent[find(e[3]- 'a')] = find(e[0] - 'a');` (i.e. b merged into the group where a belongs to)
                parent[find(e[0]- 'a')] = find(e[3] - 'a');
            }
        }
        // handle != case
        for (auto e : equations) {
            // if two characters are not equal
            // then which means their parent must not be equal
            if (e[1] == '!' && find(e[0] - 'a') == find(e[3] - 'a')) {
                return false;
            }
        }
        return true;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    # the idea is to put all characters in the same group if they are equal
    # in order to do that, we can use Disjoint Set Union (dsu) aka Union Find
    # for dsu tutorial, please check out https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union
    def equationsPossible(self, equations: List[str]) -> bool:
        # find the root of node x.
        # here we are not using parent[x]
        # because it may not contain the updated value of the connected component that x belongs to.
        # Therefore, we walk the ancestors of the vertex until we reach the root.
        def find(x):
            # with path compress
            if parent[x] == x:
                return x
            parent[x] = find(parent[x])
            return parent[x]
            # without path compression
            #return x if parent[x] == x else find(parent[x])
        # at the beginning, put each character in its own group
        # so we will have 26 groups with one character each
        # i.e. 'a' in group 0, 'b' in group 1, ..., 'z' in group 25
        parent = [i for i in range(26)]
        for e in equations:
            if e[1] == '=':
                # e.g. a == b
                # then we group them together
                # how? we use `find` function to find out the parent group of the target character index
                # then update parent. a & b would be in group 1 (i.e. a merged into the group where b belongs to)
                # or you can also do `parent[find(ord(e[3]) - ord('a'))] = find(ord(e[0]) - ord('a'))`
                # i.e. b merged into the group where a belongs to
                parent[find(ord(e[0]) - ord('a'))] = find(ord(e[3]) - ord('a'))
        # handle != case
        for e in equations:
            # if two characters are not equal
            # then which means their parent must not be equal
            if e[1] == '!' and find(ord(e[0]) - ord('a')) == find(ord(e[3]) - ord('a')):
                return False
        return True
```

</TabItem>

<TabItem value="go" label="Go">
<SolutionAuthor name="@wkw"/>

```go
// find the root of node x.
// here we are not using parent[x],
// because it may not contain the updated value of the connected component that x belongs to.
// therefore, we walk the ancestors of the vertex until we reach the root.
func find(parent []int, x int) int{
    if parent[x] == x {
        return x
    }
    parent[x] = find(parent, parent[x])
    return parent[x]
    // without path compression
    // if parent[x] == x {
    //     return x
    // }
    // return find(parent, parent[x])
}

// the idea is to put all characters in the same group if they are equal
// in order to do that, we can use Disjoint Set Union (dsu) aka Union Find
// for dsu tutorial, please check out https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union
func equationsPossible(equations []string) bool {
    // at the beginning, put each character index in its own group
    // so we will have 26 groups with one character each
    // i.e. 'a' in group 0, 'b' in group 1, ..., 'z' in group 25
    parent := make([]int, 26)
    for i := range parent {
        parent[i] = i
    }
    for _, e := range equations {
        if e[1] == '=' {
            // e.g. a == b
            // then we group them together
            // how? we use `find` function to find out the parent group of the target character index
            // then update parent. a & b would be in group 1 (i.e. a merged into the group where b belongs to)
            // or you can also do `find(parent, int(e[3] - 'a')) = find(parent, int(e[0] - 'a'))`
            // i.e. b merged into the group where a belongs to
            parent[find(parent, int(e[0] - 'a'))] = find(parent, int(e[3] - 'a'))
        }
    }
    // handle != case
    for _, e := range equations {
        // if two characters are not equal
        // then which means their parent must not be equal
        if e[1] == '!' && find(parent, int(e[0] - 'a')) == find(parent, int(e[3] - 'a')) {
            return false
        }
    }
    return true
}
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    int[] parent = new int[26];
    public int find(int x) {
        // with path compression
        if (parent[x] == x) return x;
        return parent[x] = find(parent[x]);
        // without path compression
        // return parent[x] == x ? x : find(parent[x]);
    }
    // the idea is to put all characters in the same group if they are equal
    // in order to do that, we can use Disjoint Set Union (dsu) aka Union Find
    // for dsu tutorial, please check out https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union
    public boolean equationsPossible(String[] equations) {
        int n = equations.length;
        // at the beginning, put each character index in its own group
        // so we will have 26 groups with one character each
        // i.e. 'a' in group 0, 'b' in group 1, ..., 'z' in group 25
        for (int i = 0; i < 26; i++) parent[i] = i;
        for (String e : equations) {
            // if two character is equal,
            if (e.charAt(1) == '=') {
                // e.g. a = b
                // then we group them together
                // how? we use `find` function to find out the parent group of the target character index
                // then update parent. a & b would be in group 1 (i.e. a merged into the group where b belongs to)
                // or you can also do `parent[find(e.charAt(3)- 'a')] = find(e.charAt(0) - 'a');` (i.e. b merged into the group where a belongs to)
                parent[find(e.charAt(0)- 'a')] = find(e.charAt(3) - 'a');
            }
        }
        // handle != case
        for (String e : equations) {
            // if two characters are not equal
            // then which means their parent must not be equal
            if (e.charAt(1) == '!' && find(e.charAt(0) - 'a') == find(e.charAt(3) - 'a')) {
                return false;
            }
        }
        return true;
    }
}
```

</TabItem>
</Tabs>
