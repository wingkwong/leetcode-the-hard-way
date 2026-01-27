---
description: 'Author: @wkw, @radojicic23 | https://leetcode.com/problems/keys-and-rooms/'
tags: [Depth-First Search, Breadth-First Search, Graph]
---

# 0841 - Keys and Rooms (Medium)

## Problem Link

https://leetcode.com/problems/keys-and-rooms/

## Problem Statement

There are `n` rooms labeled from `0` to `n - 1` and all the rooms are locked except for room `0`. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of **distinct keys** in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array `rooms` where `rooms[i]` is the set of keys that you can obtain if you visited room `i`, return `true` _if you can visit **all** the rooms, or_ `false` _otherwise_.

**Example 1:**

```
Input: rooms = [[1],[2],[3],[]]
Output: true
Explanation:
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.
```

**Example 2:**

```
Input: rooms = [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
```

**Constraints:**

- `n == rooms.length`
- `2 <= n <= 1000`
- `0 <= rooms[i].length <= 1000`
- `1 <= sum(rooms[i].length) <= 3000`
- `0 <= rooms[i][j] < n`
- All the values of `rooms[i]` are **unique**.

## Approach 1: DFS

We can use DFS to traverse from the first room and mark every room that we could visit. At the end, we check if all rooms have been visited or not.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    void dfs(vector<vector<int>>& rooms, int i, vector<int>& vis) {
        // mark the room i visited
        vis[i] = 1;
        // for each room we can go from the current room
        for(auto r : rooms[i]) {
            // if it is not visited
            if(!vis[r]) {
                // we go to that room
                dfs(rooms, r, vis);
            }
        }
    }

    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int n = (int) rooms.size();
        vector<int> vis(n, 0);
        dfs(rooms, 0, vis);
        int ok = 1;
        for(int i = 0; i < n; i++) ok &= vis[i];
        return ok;
    }
};
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wkw"/>

```rs
impl Solution {
    fn dfs(i: usize, vis: &mut Vec<bool>, rooms: &Vec<Vec<i32>>) {
        vis[i] = true;
        for next in rooms[i].iter().map(|&next| next as usize) {
            if !vis[next] {
                Self::dfs(next, vis, rooms);
            }
        }
    }

    pub fn can_visit_all_rooms(rooms: Vec<Vec<i32>>) -> bool {
        let mut vis = vec![false; rooms.len()];
        Self::dfs(0, &mut vis, &rooms);
        vis.iter().all(|&x| x)
    }
}
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visited = new Set();
  dfs(0);
  return visited.size == rooms.length;

  function dfs(room) {
    if (!visited.has(room)) {
      visited.add(room);
      for (i of rooms[room]) {
        dfs(i);
      }
    }
  }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = set()
        def dfs(room):
            if room not in visited:
                visited.add(room)
                for i in rooms[room]:
                    dfs(i)
        dfs(0)
        return len(rooms) == len(visited)
```

</TabItem>
</Tabs>
