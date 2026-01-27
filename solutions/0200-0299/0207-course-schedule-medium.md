---
description: 'Author: @wkw | https://leetcode.com/problems/course-schedule/'
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

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

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

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Time: O(V + E) where V is the number of vertexes, numCourses
    #  and E is the number of Edges inside our graph - prerequisites.
    # Space: O(V + E). We must maintain an indegrees of size V, and
    # we must build our ADJ list which will contain V lists of size E.
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # initialize indegrees to track how many prerequisites left
        # before we can take the courses at the index.
        indegrees = [0] * numCourses
        # define our graph, list of lists, where the index will be
        # course 2, the prerequisite course, and it will contain a list
        # of courses that we can potentially take after we take course2.
        adj_list = [[] for _ in range(numCourses)]
        # build our indegrees, and adj_list, loop all prerequisites
        for c1, c2 in prerequisites:
            indegrees[c1] += 1
            adj_list[c2].append(c1)
        # Build our queue. We can take any courses that have an indegree
        # of 0, so we add it to our queue to handle.
        q = deque()
        for i in range(len(indegrees)):
            if indegrees[i] == 0:
                q.append(i)
        # Topologically sort.
        # instead of build a top sort array, we can just count a course
        # as completed as the question only wants if it is possible,
        # not any given order.
        courses = 0
        while q:
            # pop our course off the queue
            c = q.popleft()
            # finised the courses, increment our courses finished counter
            courses += 1
            # since we finished c, we now look through all the possible
            # courses that it was a prerequisite for to decrement its
            # indegrees.
            for c2 in adj_list[c]:
                # decrement indegrees
                indegrees[c2] -= 1
                # indegrees reach 0, we have all prerequisites, we can
                # take the course, add it to the queue.
                if indegrees[c2] == 0:
                    q.append(c2)
        # Only return true if all courses can be finished.
        return courses == numCourses
```

</TabItem>
</Tabs>
