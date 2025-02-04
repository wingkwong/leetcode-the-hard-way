---
description: 'Author: @BlackPanther112358 | https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/'
tags: [Math, Dynamic Programming, Tree, Graph, Topological Sort, Combinatorics]
---

# 1916 - Count Ways to Build Rooms in an Ant Colony (Hard)

## Problem Link

https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/

## Problem Statement

You are an ant tasked with adding `n` new rooms numbered `0` to `n-1` to your colony. You are given the expansion plan as a 0-indexed integer array of length `n`, `prevRoom`, where `prevRoom[i]` indicates that you must build room `prevRoom[i]` before building room `i`, and these two rooms must be connected directly. Room `0` is already built, so `prevRoom[0] = -1`. The expansion plan is given such that once all the rooms are built, every room will be reachable from room `0`.

You can only build one room at a time, and you can travel freely between rooms you have already built only if they are connected. You can choose to build any room as long as its previous room is already built.

Return the number of different orders you can build all the rooms in. Since the answer may be large, return it modulo `10^9 + 7`.

**Example 1:**

```
Input: prevRoom = [-1,0,1]
Output: 1
Explanation: There is only one way to build the additional rooms: 0 → 1 → 2
```

**Example 2:**

```
Input: prevRoom = [-1,0,0,1,2]
Output: 6
Explanation:
The 6 ways are:
0 → 1 → 3 → 2 → 4
0 → 2 → 4 → 1 → 3
0 → 1 → 2 → 3 → 4
0 → 1 → 2 → 4 → 3
0 → 2 → 1 → 3 → 4
0 → 2 → 1 → 4 → 3
```

**Constraints:**

- `n == prevRoom.length`
- `2 <= n <= 10^5`
- `prevRoom[0] == -1`
- `0 <= prevRoom[i] <= n` for all `1 <= i < n`

## Approach 1: Combinatorics and Graph Traversal

Once we obtain the graph from the structure of the ant colony, this problem can be simplified to finding the number of valid [Topological sorts](https://en.wikipedia.org/wiki/Topological_sorting) for the given directed tree.

We can observe that when there is no branching, i.e., when there is a single chain, there is only $1$ way possible. Now, we consider nodes where we have more than $1$ children node. Then we have to find the number of ways to organize the particular subtree with such node as root. We can then update the value in a global variable $ans$.

Thus, our task simplifies as follows, for every node, we take the number of nodes of each branch possible from that node. Then, we find the number of ways to rearrange the components such that any particular value is in order relative to other components belonging to the same branch. For example, if a branch has $2$ components :- $a$ and $b$, while another branch also has $2$ components :- $c$ and $d$, the $6$ possible arrangements are:$\\$ $a,b,c,d\\$ $a,c,b,d\\$ $a,c,d,b\\$ $c,d,a,b\\$ $c,a,b,d\\$ $c,a,d,b\\$

Let there be $m$ such branches, and the number of nodes in $i^{th}$ branch be $r_i$. Then the total number of nodes, which are children of the chosen node is $t = \sum_{i = 1}^{m} r_i$.

Now using some combinatorics, the expression for the above can be found to be:-

$\Large{\frac{t!}{\prod_{i = 1}^{m} r_i!} = \frac{t!}{r_1! \cdot r_2! \cdot ... \cdot r_m!}}$

To prove the above expression, Let's first choose $r_1$ places out of total $t$ places to arrange the sequence in the first branch. This can be done in $t \choose r_1$ ways. Similarly, for the sequence from second branch, we will have $t - r_1 \choose r_2$ ways, and so on.

Upon multiplying the number of ways for all the branches and simplifing, we get the required expression. As the order of components in a branch is fixed, there is only $1$ way to fill the chosen places for a single branch.

To compute $\Large{\frac{1}{r_i!}}$, we will use modular inverse of $r_i!$ and then multiply the value.

Thus, we will use DFS (Depth-First Search) to traverse the tree, and find the number of ways to rearrange the subtree for the current node and update the value into a variable `ans`. We will also return the number of nodes found to help with calculating the number of ways for parent nodes.

Time Complexity: $O(n)\\$ Space Complexity: $O(n)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@BlackPanther112358"/>

```cpp
class Solution {
public:
    // Constants
    int mod = 1e9 + 7;

    // Making arrays to store the factorial and inverse factorial modulo m
    vector<long long int> factorial;
    vector<long long int> inverse_factorial;

    // Storing the graph in adjacency list form
    vector<vector<int>> graph;

    // Variable to store the final answer, the number of ways to write a valid Topological sort
    long long int ans = 1;

    // Recursive funtion to return the number of nodes below itself in the graph including self,  also updates ans
    int cntTopSorts(int u){
        // Store the number of children rooms for the current room
        int totalRooms = 0;
        // Store the number of rooms in each branch
        vector<int> roomsInEachBranch;

        // Perform dfs to find the total number of rooms in each branch
        for(int v : graph[u]){
            int rooms = cntTopSorts(v);
            totalRooms += rooms;
            roomsInEachBranch.push_back(rooms);
        }

        // Update the value of ans
        ans *= factorial[totalRooms];
        ans %= mod;
        for(int rooms : roomsInEachBranch){
            ans *= inverse_factorial[rooms];
            ans %= mod;
        }

        // Increment the value of totalRooms to consider the current room and return
        return ++totalRooms;
    }

    int waysToBuildRooms(vector<int>& prevRoom) {
        int n = prevRoom.size();

        // Calculate values for factorial
        factorial.push_back(1);
        for (int i = 1 ; i <= n ; i++) factorial.push_back((factorial.back() * i) % mod);

        // Calculate values for inverse factorial
        vector<long long int> inverse;
        inverse.push_back(1);
        inverse.push_back(1);
        inverse_factorial.push_back(1);
        inverse_factorial.push_back(1);
        for (int i = 2 ; i <= n ; i++) {
            inverse.push_back((mod - ((mod / i) * inverse[mod % i]) % mod) % mod);
            inverse_factorial.push_back((inverse_factorial[i - 1] * inverse[i]) % mod);
        }

        // Complete the graph for the ant colony
        graph.resize(n, vector<int> (0));
        for (int i = 1 ; i < prevRoom.size() ; i++) graph[prevRoom[i]].push_back(i);

        // Call the helper function for the first room
        cntTopSorts(0);

        // return the final answer
        return ans;
    }
};
```

</TabItem>
</Tabs>
