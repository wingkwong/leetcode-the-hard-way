---
title: "Tarjan's Algorithm"
description: "Tarjan's algorithm can be used to determine the Strongly Connected Components of a directed graph."
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - targan's algorithm
  - algorithm
---

<TutorialAuthors names="@BlackPanther112358"/>

## Overview

Tarjan's Algorithm is popular algorithm for finding the Strongly Connected Components (SCC) of a directed graph. In the below graph, the nodes in a blue envelope constitute a single connected component as any node $u$ as a path to another node $v$ and vice versa. Note that while we can reach the node $f$ from the node $e$, the opposite is not true. Hence, $f$ and $e$ are not part of the same component. Thus, the following graph has 3 strongly connected components as highlighted. A single strongly connected component can be formally described as maximal set of vertices such that for any 2 vertices belonging to the set, say $u$ and $v$, there exists a path from $u$ to $v$ and vice versa.


![image](https://user-images.githubusercontent.com/83649829/198752836-3c43a6f4-e1e2-445e-b679-0df4cb8ff3e0.png)$\\$
[Source: Strongly connected component from Wikipedia](https://en.wikipedia.org/wiki/Strongly_connected_component)


In this tutorial we will discuss the Tarjan's Algorithm to find SCC.

## Implementation

The algorithm works by using a single [DFS](../../tutorials/graph-theory/depth-first-search) in the graph. To understand its working first let's define a few standard terms :

$in-time(u) =$ time at which node $u$ was reached for the first time or the in time of DFS for the node.

$low-link(u) =$ smallest time reachable of a node reachable from the DFS subtree of node u

We also need to ensure that we don't mix 2 different SCC's due to a cross-edge between them. To counter this issue, we will use a stack to store the nodes which have not been assigned to an SCC and have been visited so far.

Thus, whenever we find an SCC, we will pop the corresponding nodes from the stack.

We will call the first node we discovered of an SCC the route node for sake of simplicity. Thus, we will identify the SCC by its root node. To check when we have reached a root node, we just check if $low(u)$ and $in_time(u)$ are equal.

The pseudo-code for the algorithm can be found [here](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm#The_algorithm_in_pseudocode).

The Time and Space Complexity of the algorithm is $O(V + E)$, where $V$ represents the number of vertices and $E$ represents the number of edges, same as that os DFS.

The implementation of above can be as follows (along with above graph as example) :

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
#include <bits/stdc++.h>
using namespace std;

struct find_SCC{

    int timer = 0;
    // store the in-time for DFS search
    vector<int> in_time;
    // stores the low-link value for every node
    vector<int> low_link;
    // checks whether a node is on the stack or not
    vector<bool> on_stack;
    // stack to store the currently available nodes
    stack<int> stk;
    // to store the final answer
    vector<vector<int>> res;

    // recursive function to do the DFS search on the graph
    void dfs(int u, vector<vector<int>> &graph){

        // set the values for in_time and low_link, and put the node on stack
        in_time[u] = low_link[u] = timer;
        timer++;
        stk.push(u);
        on_stack[u] = true;

        // DFS to neighbours of current node
        for (int v : graph[u]) {
            // if the node is unvisited
            if (in_time[v] == -1) {
                dfs(v, graph);
                // update the low-link value for node u
                low_link[u] = min(low_link[u], low_link[v]);
            // else if the node was visited before, and is still on the stack
            }else if (on_stack[v]) {
                // update the low-link for node u
                low_link[u] = min(low_link[u], in_time[v]);
            }
        }

        // check if u is the root node for a SCC
        if (low_link[u] == in_time[u]) {

            vector<int> SCC;
            // all the nodes above u in the stack are in SCC of u
            while (stk.top() != u) {
                int v = stk.top();
                stk.pop();
                SCC.push_back(v);
                on_stack[v] = false;
            }
            // now removing u from stack and adding it to the SCC
            stk.pop();
            SCC.push_back(u);
            on_stack[u] = false;

            // adding the SCC to the answer
            res.push_back(SCC);
        }

        return;

    }

    // takes input of graph as adjacency list and returns the SCC of graph as vectors
    vector<vector<int>> tarjans (vector<vector<int>> &adjacencyList) {

        int n = adjacencyList.size();
        in_time.resize(n, -1);
        low_link.resize(n, -1);
        on_stack.resize(n, false);

        for (int u = 0; u < n; u++) {
            if (in_time[u] == -1) dfs(u, adjacencyList); 
        }

        return res;

    }
};

int main(){

    // constructing adjacency list for example graph shown, mapping node a to 0, b to 1 and so on...
    vector<vector<int>> graph(8);
    graph[0].push_back(1);
    graph[1].push_back(2);
    graph[1].push_back(4);
    graph[1].push_back(5);
    graph[2].push_back(3);
    graph[2].push_back(6);
    graph[3].push_back(2);
    graph[3].push_back(7);
    graph[4].push_back(0);
    graph[4].push_back(5);
    graph[5].push_back(6);
    graph[6].push_back(5);
    graph[7].push_back(3);
    graph[7].push_back(6);

    // using the tarjan's algo
    find_SCC t = find_SCC();
    vector<vector<int>> res = t.tarjans(graph);

    // output the final result
    cout << "The Strongly Connected Components for the graph are:" << endl;
    for (vector<int> i : res) {
        for (int j : i) {
            cout << (char)('a' + j) << " ";
        }
        cout << endl;
    }

    /*
    output of the above code is:
    The Strongly Connected Components for the graph are:
    f g
    h d c
    e b a
    */

    return 0;
}
```

</TabItem>
</Tabs>

We can further cluster all the nodes belonging to an SCC into one node, and represent all the edges from and to a constituent node of the SCC to this new node. The resulting graph is called the [Condensation Graph](https://cp-algorithms.com/graph/strongly-connected-components.html)

## Using Tarjan's algorithm to find bridges in a Undirected Graph

Here, we are searching in an undirected graph, and also we don't need to remove the cross-edges. Thus, the stack is no longer required. An edge between node $u$ to $v$ will be considered a bridge if there is no other way to reach $v$ from $u$ if the edge is removed. We can check for this by using the properties of the low-link time. If the low-link time of $v$ is less than that of $u$, we can conclude that we can reach $v$ from some other path, otherwise the edge between them is a bridge. Here is an example for same.

### Example #1: [1192 - Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

This problem directly asks us to find bridges in the given graph. The input is provided in form of pairs of nodes with an edge between them. Thus, we will first convert this to an adjacency list and apply the same algorithm discussed above.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    // initializing the variables
    int timer = 0;
    vector<int> in_time, low_link;
    vector<vector<int>> graph;
    vector<vector<int>> res;

    // recursive function to perform DFS
    void dfs(int u, int p = -1){

        in_time[u] = low_link[u] = timer;
        timer++;

        for (int v : graph[u]) {
            // we ignore the parent node
            if (v == p) continue;
            // if we discover a new node
            if (in_time[v] == -1) {
                dfs(v, u);
                low_link[u] = min(low_link[u], low_link[v]);
                // check if the edge is a bridge
                if (low_link[v] > in_time[u]) {
                    res.push_back({u, v});
                }
            // if we visit a node which already has been visited
            } else {
                low_link[u] = min(low_link[u], in_time[v]);
            }
        }

        return;

    }

    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {

        in_time.resize(n, -1);
        low_link.resize(n, -1);
        graph.resize(n);

        // make an adjacency list from the input
        for (auto connection : connections) {
            graph[connection[0]].push_back(connection[1]);
            graph[connection[1]].push_back(connection[0]);
        }

        // as the entire graph is connected, just call dfs on 0
        dfs(0);

        return res;

    }
};
```

</TabItem>
</Tabs>

## Using Tarjan's algorithm to find articulation points in a Undirected Graph

Similar to bridges, articulation points are vertices which if removed will disconnect the graph. Once again, we can modify the Tarjan's algorithm to find such vertices in a given undirected graph.

### Example #2: [1568 - Minimum Number of Days to Disconnect Island](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)

Notice that the answer cannot be more than $2$. Any rectangular shape will have atleast 4 corner cells, and if we remove the vertical neighbour and horizontal neighbour cells of anyone one of these, we have disconnected the graph. Thus, we need to check when the answer can $0$ or $1$, and we are done.

The answer will be $0$ if the islands are initially disconnected. This can be checked using basic DFS. The answer will be $1$ when the graph has atleast 1 [articulation point](https://cp-algorithms.com/graph/cutpoints.html). The condition for articulation points is similar to that for finding bridges, except we also check for presence of parents.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    // initializing the variables
    int n, m, cnt_islands = 0;
    int timer = 0;
    vector<vector<int>> in_time, low_link;

    // recursive function to perform DFS, return true if an articulation point is detected
    bool dfs (pair<int, int> u, vector<vector<int>>& grid, pair<int, int> p = {-1, -1}) {

        int i = u.first, j = u.second;
        in_time[i][j] = low_link[i][j] = timer++;
        cnt_islands++;
        // variable to check for articulation point in DFS subtree of the node
        bool has_articulation_point = false;
        // variable to count number of children visited first by the node
        int cnt_children = 0;

        // find all neighbours from the grid
        vector<pair<int, int>> neighbours;
        if ((i > 0) && (grid[i - 1][j])) neighbours.push_back({i - 1, j});
        if ((i < (n - 1)) && (grid[i + 1][j])) neighbours.push_back({i + 1, j});
        if ((j > 0) && (grid[i][j - 1])) neighbours.push_back({i, j - 1});
        if ((j < (m - 1)) && (grid[i][j + 1])) neighbours.push_back({i, j + 1});

        for (auto v : neighbours) {
            // if the neighbour is a parent, ignore it
            if(v == p) continue;
            // if the neighbour was already visited
            else if (in_time[v.first][v.second] != -1) low_link[i][j] = min(low_link[i][j], in_time[v.first][v.second]);
            // if the neighbour is a new node
            else{
                // if the subtree has an articulation point
                if (dfs(v, grid, u)) has_articulation_point = true;
                // update the low-link value
                low_link[i][j] = min(low_link[i][j], low_link[v.first][v.second]);
                // if the point itself is an articulation point
                if ( (low_link[v.first][v.second] >= in_time[i][j]) && (p != (pair<int, int>){-1, -1}) ) has_articulation_point = true;
                cnt_children++;
            }
        }

        // if it has an articulation point, return true
        if (( (p == (pair<int, int>){-1, -1}) && (cnt_children > 1)) || has_articulation_point) return true;
        // else return false
        return false;

    }

    int minDays(vector<vector<int>>& grid) {
        
        n = grid.size();
        m = grid[0].size();
        int connected_comp = 0;
        bool has_articulation_point = false;

        in_time.resize(n, vector<int> (m, -1));
        low_link.resize(n, vector<int> (m, -1));

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                // ignore the cells of grid with water, or who have been visited
                if ((grid[i][j] == 0) || (in_time[i][j] != -1)) continue;
                // we already have found a connected component, and this will be a new one, thus we directly return 0
                if (connected_comp > 0) return 0;
                if (dfs({i, j}, grid)) has_articulation_point = true;
                connected_comp++;
            }
        }

        // if there are no cells with land
        if (cnt_islands == 0) return 0;
        // if there is only one cell with land
        else if (cnt_islands == 1) return 1;
        if (has_articulation_point) return 1;
        return 2;
    }
};
```

</TabItem>
</Tabs>

export const suggestedProblems = [
  {
    "problemName": "1489 - Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree",
    "difficulty": "Hard",
    "leetCodeLink": "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />

## References
1. [Tarjan's Algorithm For Strongly Connected Components](https://www.topcoder.com/thrive/articles/tarjans-algorithm-for-strongly-connected-components) 
2. [Tarjan's strongly connected components algorithm](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm)