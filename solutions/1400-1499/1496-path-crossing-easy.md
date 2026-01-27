---
description: 'Author: @jaffar, @jit, @wkw | https://leetcode.com/problems/path-crossing/'
tags: [Hash Table, String]
---

# 1496 - Path Crossing (Easy)

## Problem Link

https://leetcode.com/problems/path-crossing/

## Problem Statement

Given a string `path`, where `path[i] = 'N'`, `'S'`, `'E'` or `'W'`, each representing moving one unit north, south, east, or west, respectively. You start at the origin `(0, 0)` on a 2D plane and walk on the path specified by `path`.

Return `true` _if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited_. Return `false` otherwise.

**Example 1:**

```
Input: path = "NES"
Output: false
Explanation: Notice that the path doesn't cross any point more than once.
```

**Example 2:**

```
Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
```

**Constraints:**

- $1 <= path.length <= 10^4$
- `path[i]` is either `'N'`, `'S'`, `'E'`, or `'W'`.

## Approach 1: Set

We can keep track of the current position on a 2D plane and check if path crosses itself by storing visited positions in a Set. If a visited position is encountered again, it means the path has crossed itself, then we return `true`. Otherwise, we returns `false`.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@jaffar"/>

```cpp
class Solution:
    def isPathCrossing(self, path: str) -> bool:
        x, y = 0, 0
        visited = {(x, y)}
        for move in path:
            if move == 'N': y += 1
            elif move == 'S': y -= 1
            elif move == 'E': x += 1
            elif move == 'W': x -= 1
            if (x, y) in visited:
                return True
            visited.add((x, y))
        return False
```

</TabItem>

<TabItem value="scala" label="Scala">
<SolutionAuthor name="@jit"/>

```scala
object Solution {
  // Check if the coordinates traversed has duplicates
  def isPathCrossing(path: String): Boolean = {
    val coords = path.scanLeft((0, 0)) {
      case ((x, y), 'N') => (x, y + 1)
      case ((x, y), 'E') => (x + 1, y)
      case ((x, y), 'S') => (x, y - 1)
      case ((x, y), 'W') => (x - 1, y)
    }
    coords.distinct.size != coords.size
  }
}
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    bool isPathCrossing(string path) {
        int x = 0, y = 0;
        set<pair<int, int>> s;
        s.insert({x, y});
        for (char c : path) {
            if (c == 'N') y += 1;
            else if (c == 'S') y -= 1;
            else if (c == 'E') x += 1;
            else x -= 1;
            if (s.find({x, y}) != s.end()) return true;
            s.insert({x, y});
        }
        return false;
    }
};
```

</TabItem>
</Tabs>
