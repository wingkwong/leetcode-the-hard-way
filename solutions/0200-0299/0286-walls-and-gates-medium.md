---
description: 'Author: @wkw | https://leetcode.com/problems/walls-and-gates/'
tags: [Array, Breadth-First Search, Matrix]
---

# 0286 - Walls and Gates (Medium)

## Problem Link

https://leetcode.com/problems/walls-and-gates/

## Problem Statement

You are given an `m x n` grid `rooms` initialized with these three possible values.

- `-1` A wall or an obstacle.
- `0` A gate.
- `INF` Infinity means an empty room. We use the value `231 - 1 = 2147483647` to represent `INF` as you may assume that the distance to a gate is less than `2147483647`.

Fill each empty room with the distance to _its nearest gate_. If it is impossible to reach a gate, it should be filled with `INF`.

**Example 1:**

```
Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
```

**Example 2:**

```
Input: rooms = [[-1]]
Output: [[-1]]
```

**Constraints:**

- `m == rooms.length`
- `n == rooms[i].length`
- `1 <= m, n <= 250`
- `rooms[i][j]` is `-1`, `0`, or `231 - 1`.

## Approach 1: Multi-Source BFS

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Do not return anything, modify rooms in-place instead.
        """
        # Multi-source BFS
        # We can see each gate as a source, then we start from each gate
        # If the next room `rooms[next_x][next_y` is empty,
        # we update the value rooms[x][y] + 1 and
        # we push (next_x, next_y) to the queue

        n, m = len(rooms), len(rooms[0])
        q = deque()
        for i in range(n):
            for j in range(m):
                if rooms[i][j] == 0:
                    q.append((i, j))
        while q:
            x, y = q.popleft()
            for dx, dy in (0, 1), (1, 0), (0, -1), (-1, 0):
                next_x, next_y = dx + x, dy + y
                if 0 <= next_x < n and 0 <= next_y < m and rooms[next_x][next_y] == 2147483647:
                    rooms[next_x][next_y] = rooms[x][y] + 1
                    q.append((next_x, next_y))

```

</TabItem>
</Tabs>
