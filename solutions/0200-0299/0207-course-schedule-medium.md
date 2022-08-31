---
description: 'Author: @wingkwong | https://leetcode.com/problems/course-schedule/'
tags: [Depth-First Search, Breadth-First Search, Graph, Topological Sort]
---

# 0207 - Course Schedule (Medium) 

## Problem Statement

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return `true` if you can finish all courses. Otherwise, return `false`.

**Example 1:**

```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
```

**Example 2:**

```
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```

**Constraints:**

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- All the pairs prerequisites[i] are **unique**.

## Approach 1: Topological Sorting

<SolutionAuthor name="@wingkwong"/>

```cpp
// for topological sorting tutorial,
// see https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/topological-sorting
struct TopologicalSort {
    int n;
    vector<int> indegree;
    vector<int> orders;
    vector<vector<int>> G;
    bool isTopologicalSorted = false;
    
    TopologicalSort(vector<vector<int>>& g, vector<int>& in) {
        G = g;
        n = (int) G.size();
        indegree = in;
        
        int res = 0;
        queue<int> q;
        for(int i = 0; i < n; i++) {
            if(indegree[i] == 0) {
                q.push(i);
            }
        }
        while(!q.empty()) {
            auto u = q.front(); q.pop();
            orders.push_back(u);
            for(auto v : G[u]) {
                if(--indegree[v] == 0) {
                    q.push(v);
                }
            }
            res++;
        }
        isTopologicalSorted = res == n;
    }
};

class Solution {
public:
    bool canFinish(int n, vector<vector<int>>& prerequisites) {
        // define the graph
        vector<vector<int>> g(n);
        // define indegree
        vector<int> indegree(n);
        // build the graph
        for(auto p : prerequisites) {
            // we have to take p[1] in order to take p[0]
            g[p[1]].push_back(p[0]);
            // increase indegree by 1 for p[0]
            indegree[p[0]]++;
        }
        // init topological sort
        TopologicalSort ts(g, indegree);
        // we can finish all courses only if we can topologically sort
        return ts.isTopologicalSorted;
    }
};
```