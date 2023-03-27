---
description: 'Author: @wingkwong | https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/'
tags: [Tree, Depth-First Search, Breadth-First Search, Graph]
---

# 2477 - Minimum Fuel Cost to Report to the Capital (Medium) 

## Problem Link

https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/

## Problem Statement

There is a tree (i.e., a connected, undirected graph with no cycles) structure country network consisting of `n` cities numbered from `0` to `n - 1` and exactly `n - 1` roads. The capital city is city `0`. You are given a 2D integer array `roads` where `roads[i] = [ai, bi]` denotes that there exists a **bidirectional road** connecting cities `ai` and `bi`.

There is a meeting for the representatives of each city. The meeting is in the capital city.

There is a car in each city. You are given an integer `seats` that indicates the number of seats in each car.

A representative can use the car in their city to travel or change the car and ride with another representative. The cost of traveling between two cities is one liter of fuel.

Return *the minimum number of liters of fuel to reach the capital city*.

**Example 1:**

```
Input: roads = [[0,1],[0,2],[0,3]], seats = 5
Output: 3
Explanation: 
- Representative1 goes directly to the capital with 1 liter of fuel.
- Representative2 goes directly to the capital with 1 liter of fuel.
- Representative3 goes directly to the capital with 1 liter of fuel.
It costs 3 liters of fuel at minimum. 
It can be proven that 3 is the minimum number of liters of fuel needed.
```

**Example 2:**

```
Input: roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], seats = 2
Output: 7
Explanation: 
- Representative2 goes directly to city 3 with 1 liter of fuel.
- Representative2 and representative3 go together to city 1 with 1 liter of fuel.
- Representative2 and representative3 go together to the capital with 1 liter of fuel.
- Representative1 goes directly to the capital with 1 liter of fuel.
- Representative5 goes directly to the capital with 1 liter of fuel.
- Representative6 goes directly to city 4 with 1 liter of fuel.
- Representative4 and representative6 go together to the capital with 1 liter of fuel.
It costs 7 liters of fuel at minimum. 
It can be proven that 7 is the minimum number of liters of fuel needed.
```

**Example 3:**

```
Input: roads = [], seats = 1
Output: 0
Explanation: No representatives need to travel to the capital city.
```

**Constraints:**

- `1 <= n <= 105`
- `roads.length == n - 1`
- `roads[i].length == 2`
- `0 <= ai, bi < n`
- `ai != bi`
- `roads` represents a valid tree.
- `1 <= seats <= 105`

## Approach 1: DFS

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    long long minimumFuelCost(vector<vector<int>>& roads, int seats) {
        long long ans = 0;
        // build the graph
        vector<vector<int>> g(roads.size() + 1);
        for (auto& x : roads) {
            // bidirectional
            // x[0] can go to x[1]
            g[x[0]].push_back(x[1]);
            // x[1] can go to x[0]
            g[x[1]].push_back(x[0]);
        }
        // u is the source
        // p is the parent
        function<int(int,int)> dfs = [&](int u, int p) {
            int cnt = 1;
            // v is the city that is accessible from city u
            for (auto v : g[u]) {
                // make sure we are not entering a circle
                // i.e. not visiting the source back
                if (v ^ p) {
                    // if not, then move to city v with parent city u
                    cnt += dfs(v, u);
                }
            }
            // we need ceil(cnt / seats) liters of fuel from the current city to the parent city
            // ceil(cnt / seats) can be written as `(cnt + seats - 1) / seats`
            if (u) ans += (cnt + seats - 1) / seats;
            return cnt;
        };
        // start from city 0 with parent city 0
        dfs(0, -1);
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def minimumFuelCost(self, roads: List[List[int]], seats: int) -> int:
        # build the graph
        g = defaultdict(list)
        for u, v in roads:
            # bidirectional
            # u can go to v
            g[u].append(v)
            # v can go to u
            g[v].append(u)
            
        # u is the source
        # v is the parent
        def dfs(u, p):
            nonlocal ans
            cnt = 1
            # v is the city that is accessible from city u
            for v in g[u]:
                # make sure we are not entering a cycle
                # i.e. not visiting the source back
                if v != p:
                    # if not, then move to city v with parent city u
                    cnt += dfs(v, u)
            if u != 0:
                # we need ceil(cnt / seats) liters of fuel from the current city to parent city
                # ceil(cnt / seats) can be written as `(cnt + seats - 1) // seats`
                ans += (cnt + seats - 1) // seats
            return cnt
        ans = 0
        # start from city 0 with parent city -1
        dfs(0, -1)
        return ans
```

</TabItem>
</Tabs>