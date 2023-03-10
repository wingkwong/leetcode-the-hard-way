---
description: 'Author: @wingkwong | https://leetcode.com/problems/course-schedule-ii/'
tags: [Depth-First Search, Breadth-First Search, Graph, Topological Sort]
---

# 0210 - Course Schedule II (Medium) 

## Problem Statement

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.

- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.

Return *the ordering of courses you should take to finish all courses*. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.

**Example 1:**

```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
```

**Example 2:**

```
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
```

**Example 3:**

```
Input: numCourses = 1, prerequisites = []
Output: [0]
```

**Constraints:**

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= numCourses * (numCourses - 1)`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- `ai != bi`
- All the pairs `[ai, bi]` are **distinct**.

## Approach 1: Topological Sorting

<Tabs>
<TabItem value="cpp" label="C++">
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
    vector<int> findOrder(int n, vector<vector<int>>& prerequisites) {
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
        // hence, return an empty array if it cannot be sorted
        if (!ts.isTopologicalSorted) return {};
        // else return the order
        return ts.orders;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Time Complexity: O(V + E) where v is number of vertexes/courses and
    # E is the number of edges in our graph, preqrequisite connections.
    # Space Complexity: O(V + E). V size indegrees, V+E adj_list, 
    # V sized top_sort list, and our queue could reach size V
    # in the worst case scenario.
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        # initialize our indegrees -> idx = course, value = number of
        # courses we must take before we can take that course.
        indegrees = [0] * numCourses
        # adjacency list -> idx = course, list = courses we can take
        # we we take this one.
        adj_list = [[] for _ in range(numCourses)]
        # loop our courses in prerequisites
        for c1, c2 in prerequisites:
            # must take c2 before c1, increment c1's indegrees
            indegrees[c1] += 1
            # after we take c2, we can take c1, add c1 to c2's adj_list.
            adj_list[c2].append(c1)
        # initialize queue, and find all courses without prerequisites.
        q = deque()
        for i in range(numCourses):
            if indegrees[i] == 0:
                q.append(i)
        # topological sort
        top_sort = []
        while q:
            # pop the course off the queue
            course = q.popleft()
            # add it to our top_sort list
            top_sort.append(course)
            # loop all courses we can take after this course in adj_list.
            for c in adj_list[course]:
                # decrement indegrees and check if it reached 0.
                indegrees[c] -= 1
                if indegrees[c] == 0:
                    # reached 0, we can take the courses
                    q.append(c)
        # return our top sort list if we completed all courses
        return top_sort if len(top_sort) == numCourses else []

```

</TabItem>
</Tabs>
