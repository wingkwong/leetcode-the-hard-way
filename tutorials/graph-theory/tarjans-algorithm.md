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

The pseudo-code for the algorithm can be found [here](https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm#The_algorithm_in_pseudocode)

The implementation of above can be as follows:

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
struct comb{
    int mod;
    // make arrays to store the factorial and inverse factorial modulo m
    vector<long long int> factorial;
    vector<long long int> inverse_factorial;

    // N is the maximum value possible of input
    comb (int N, int mod_in = 1e9 + 7) {
        // calculate values for factorial
        mod = mod_in;
        factorial.push_back(1);
        for(int i = 1; i <= N; i++) factorial.push_back((factorial.back() * i) % mod);

        // calculate values for inverse factorial
        vector<long long int> inverse;
        inverse.push_back(1);
        inverse.push_back(1);
        inverse_factorial.push_back(1);
        inverse_factorial.push_back(1);
        for (int i = 2; i <= N; i++) {
            inverse.push_back((mod - ((mod/i) * inverse[mod%i]) % mod) % mod);
            inverse_factorial.push_back((inverse_factorial[i - 1] * inverse[i]) % mod);
        }
    }

    // function to calculate nCr(n, r)
    long long int nCr(int n, int r){
        if ((r < 0) || (r > n)) return 0;
        return ((factorial[n] * inverse_factorial[r]) % mod * inverse_factorial[n - r]) % mod;
    }
};
```

</TabItem>
</Tabs>

### Example #1: [1192 - Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)

The important insight here is that the figure provided is nothing but an inverted Pascal's Triangle and contribution of each cell in the final sum is the value of cell multiplied by the binomial coefficient at the particular position in Pascal's Triangle.

Thus for the cell at $i^{th}$ index in the topmost row, it's value is multiplied by $n - 1 \choose i$ and added to the final sum $modulo\,10$.
Time Complexity of the program is $O(n^2)$ for computing the binomial coefficient and $O(n)$ Space complexity.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    int triangularSum(vector<int>& nums) {
        int n = nums.size();
        vector<int> pascalTriangleRow = {1};
        // calculate the ith row using (i - 1)th row
        for (int i = 0; i < n; i++) {
            vector<int> nextRow = {1};
            for(int j = 1; j < i; j++){
                nextRow.push_back((pascalTriangleRow[j] + pascalTriangleRow[j - 1]) % 10);
            }
            nextRow.push_back(1);
            pascalTriangleRow = nextRow;
        }
        // calculate the final answer as discussed above
        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans += (nums[i] * pascalTriangleRow[i]) % 10;
        }
        return ans%10;
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