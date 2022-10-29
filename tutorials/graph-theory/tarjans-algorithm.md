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
[Source](https://en.wikipedia.org/wiki/Strongly_connected_component)


In this tutorial we will discuss the Tarjan's Algorithm to find SCC.

## Implementation

The algorithm works by using a single [DFS](../../tutorials/graph-theory/depth-first-search) in the graph. To understand its working first let's define a few standard terms :-

$tin(u) =$ time at which node $u$ was reached for the first time or the in time of DFS for the node.

$low(u) =$ smallest time reachable of a node reachable from the DFS subtree of node u

We also need to ensure that we don't mix 2 different SCC's due to a cross-edge between them. To counter this issue, we will use a stack to store the nodes which have not been assigned to an SCC and have been visited so far.

Thus, whenever we find an SCC, we will pop the corresponding nodes from the stack.

We will call the first node we discovered of an SCC the route node for sake of simplicity. Thus, we will identify the SCC by its root node. To check when we have reached a root node, we just check if $low(u)$ and $tin(u)$ are equal.

The pseudo-code for the algorithm can be found [here](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm#The_algorithm_in_pseudocode)

The implementation of above can be as follows (along with above graph as example) :

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
#include <bits/stdc++.h>
using namespace std;

struct tarjans_algo{
    // Recursive function to do the DFS search on the graph
    void dfs(int u, int &timer, vector<int> &tin, vector<int> &low_link, vector<bool> &on_stack, stack<int> &stk, vector<vector<int>> &graph, vector<vector<int>> &res){

        // set the values for tin and low_link, and put the node on stack
        tin[u] = low_link[u] = timer;
        timer++;
        stk.push(u);
        on_stack[u] = true;

        // DFS to neighbours of current node
        for (int v : graph[u]) {
            // If the node is unvisited
            if (tin[v] == -1) {
                dfs(v, timer, tin, low_link, on_stack, stk, graph, res);
                // Update the low-link value for node u
                low_link[u] = min(low_link[u], low_link[v]);
            // Else if the node was visited before, and is still on the stack
            }else if (on_stack[v]) {
                // Update the low-link for node u
                low_link[u] = min(low_link[u], tin[v]);
            }
        }

        // Check if u is the root node for a SCC
        if (low_link[u] == tin[u]) {

            vector<int> SCC;
            // All the nodes above u in the stack are in SCC of u
            while (stk.top() != u) {
                int v = stk.top();
                stk.pop();
                SCC.push_back(v);
                on_stack[v] = false;
            }
            // Now removing u from stack and adding it to the SCC
            stk.pop();
            SCC.push_back(u);
            on_stack[u] = false;

            // Adding the SCC to the answer
            res.push_back(SCC);
        }

        return;

    }

    // Takes input of graph as adjacency list and returns the SCC of graph as vectors
    vector<vector<int>> tarjans (vector<vector<int>> &adjacencyList) {

        int n = adjacencyList.size(), timer = 0;
        // Store the in-time for DFS search
        vector<int> tin(n, -1);
        // Stores the low-link value for every node
        vector<int> low_link(n, -1);
        // Checks whether a node is on the stack or not
        vector<bool> on_stack(n, false);
        // Stack to store the currently available nodes
        stack<int> data;
        // To store the final answer
        vector<vector<int>> res;

        for (int u = 0; u < n; u++) {
            if (tin[u] == -1) dfs(u, timer, tin, low_link, on_stack, data, adjacencyList, res); 
        }

        return res;

    }
};

int main(){

    // Constructing adjacency list for example graph shown, mapping node a to 0, b to 1 and so on...
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

    // Using the tarjan's algo
    tarjans_algo t = tarjans_algo();
    vector<vector<int>> res = t.tarjans(graph);

    // Output the final result
    cout << "The Strongly Connected Components for the graph are:-" << endl;
    for (vector<int> i : res) {
        for (int j : i) {
            cout << (char)('a' + j) << " ";
        }
        cout << endl;
    }

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
    // Initializing the variables
    int timer = 0;
    vector<int> tin, low_link;
    vector<vector<int>> graph;
    vector<vector<int>> res;

    // Recursive function to perform DFS
    void dfs(int u, int p = -1){

        tin[u] = low_link[u] = timer;
        timer++;

        for (int v : graph[u]) {
            // We ignore the parent node
            if (v == p) continue;
            // If we discover a new node
            if (tin[v] == -1) {
                dfs(v, u);
                low_link[u] = min(low_link[u], low_link[v]);
                // Check if the edge is a bridge
                if (low_link[v] > tin[u]) {
                    res.push_back({u, v});
                }
            // If we visit a node which already has been visited
            } else {
                low_link[u] = min(low_link[u], tin[v]);
            }
        }

        return;

    }

    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {

        tin.resize(n, -1);
        low_link.resize(n, -1);
        graph.resize(n);

        // Make an adjacency list from the input
        for (auto i : connections) {
            graph[i[0]].push_back(i[1]);
            graph[i[1]].push_back(i[0]);
        }

        // As the entire graph is connected, just call dfs on 0
        dfs(0);

        return res;

    }
};
```

</TabItem>
</Tabs>

### Example #2: [1568 - Minimum Number of Days to Disconnect Island](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/)

This is an example of a very tricky problem which heavily simplifies after using some Combinatorics and [Bit Manipulation](../../tutorials/math/bit-manipulation.md)

Here we will consider the $i^{th}$ bit from the right. Let's say that the $i^{th}$ bit is set in $k$ out of $n$ numbers in some given subset. If $k$ is odd, then $i^{th}$ bit is set in the XOR of all numbers of the subset, otherwise, it is not set.

Hence if there are $m$ numbers out of $n$ with $i^{th}$ bit set, then the contribution of the bit is $Place\,value\,of\,the\,bit$ $*$ $number\,of\,ways\,to\,get\,odd\,k$ 

Thus we can find $\sum_{k = 1}^{k <= m}$ $m \choose k$ for all odd values of $k$, which comes out to $2^{m - 1}$. Furthermore, we can choose the remaining elements in the subset in $2^{n - m}$ ways by similar logic. Hence total ways to get odd values of $k$ are $2^{n - 1}$, which is independent of both $m$ and $k$.

Hence all we need to do is find bits which are set atleast once (by computing OR) and then multiply the final answer with $2^{n - 1}$.
Time Complexity of the program is $O(n)$ with $O(1)$ Space Complexity.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int subsetXORSum(vector<int>& nums) {
        int arrayOR = 0;
        // do OR of whole array to obtain bits which are set atleast once
        for (int num : nums) arrayOR |= num;
        // compute the final answer using the formula discussed
        return arrayOR * (1 << (nums.size() - 1));
    }
};
```

</TabItem>
</Tabs>

### Example #3: [1489 - Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)

Here our robot always goes either down or right. We know that we have to go down $m - 1$ times and go left $n - 1$ times. Thus we need to find the number of ways to arrange these. One way to visualize this is if we have $m + n - 2$ blank spaces, and we have to fill $n - 1$ of them using $R$ (representing going right) and remaining using $D$ (representing going down). Then we can just choose the number of spaces to fill with $L$ from total number of spaces. The the final solution is simply $m + n - 2 \choose n - 1$.

Notice that we are not required to return the value after taking modulo and the constraints allow for a $O(n^2)$ precomputation. Thus, we will
simply construct the entire Pascal's Triangle and query it everytime to calculate the answer.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int uniquePaths(int m, int n) {
        // the upper limit is m + n - 2 = 198
        vector<vector<long long int>> PascalTriangle(199, vector<long long int> ());
        PascalTriangle[0] = {1};
        // calculating every row of the triangle
        for (int i = 1; i <= 198; i++) {
            PascalTriangle[i].push_back(1);
            // using the recurrence relation.
            for (int j = 1; j < i; j++) {
                // take mod with INT_MAX as otherwise some values may overflow.
                PascalTriangle[i].push_back((PascalTriangle[i - 1][j] + PascalTriangle[i - 1][j - 1]) % INT_MAX);
            }
            PascalTriangle[i].push_back(1);
        }
        // query the final answer
        return PascalTriangle[m + n - 2][n - 1];
    }
};
```

</TabItem>
</Tabs>

NOTE: Since every testcase only asks us to find $n \choose r$ for particular values of $n$ and $r$, we can instead of precomputing the entire
Pascal's Triangle, just compute the paricular value of $n \choose r$ using the recurrence relation and memoization. This will lead to less time
and space complexity, as we only calculate the values we need. Also, then we no longer need to take modulo with INT_MAX as all the values will
fit in the "int" type as mentioned in the question.

You can check the complete solution for this problem [here](../../solutions/0000-0099/unique-paths-medium)

## References
1. [Tarjan's Algorithm For Strongly Connected Components](https://www.topcoder.com/thrive/articles/tarjans-algorithm-for-strongly-connected-components) 
2. [Tarjan's strongly connected components algorithm](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm)