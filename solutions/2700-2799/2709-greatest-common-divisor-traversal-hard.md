---
description: 'Author: @Ishwarendra | https://leetcode.com/problems/greatest-common-divisor-traversal/'
tags: ['Prime Factor', 'Graph', 'DFS', 'BFS', 'DSU']
---

# 2709 - Greatest Common Divisor Traversal

## Problem Link

https://leetcode.com/problems/greatest-common-divisor-traversal/

You are given a **0-indexed** integer array `nums`, and you are allowed to traverse between its indices. You can traverse between index `i` and index `j`, `i != j`, if and only if `gcd(nums[i], nums[j]) > 1`, where `gcd` is the **greatest common divisor**.

Your task is to determine if for every pair of indices `i` and `j` in nums, where `i < j`, there exists a sequence of traversals that can take us from `i to j.`

Return `true` *if it is possible to traverse between all such pairs of indices, or `false` otherwise.*

**Example 1:**

```
Input: nums = [2,3,6]
Output: true
Explanation: In this example, there are 3 possible pairs of indices: (0, 1), (0, 2), and (1, 2).
To go from index 0 to index 1, we can use the sequence of traversals 0 -> 2 -> 1, where we move from index 0 to index 2 because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1, and then move from index 2 to index 1 because gcd(nums[2], nums[1]) = gcd(6, 3) = 3 > 1.
To go from index 0 to index 2, we can just go directly because gcd(nums[0], nums[2]) = gcd(2, 6) = 2 > 1. Likewise, to go from index 1 to index 2, we can just go directly because gcd(nums[1], nums[2]) = gcd(3, 6) = 3 > 1.
```

**Example 2:**

```
Input: nums = [3,9,5]
Output: false
Explanation: No sequence of traversals can take us from index 0 to index 2 in this example. So, we return false.
```

**Example 3:**

```
Input: nums = [4,3,12,8]
Output: true
Explanation: There are 6 possible pairs of indices to traverse between: (0, 1), (0, 2), (0, 3), (1, 2), (1, 3), and (2, 3). A valid sequence of traversals exists for each pair, so we return true.
```

**Constraints:**

* $1 \leq$ `nums.length` $\leq 10^5$
* $1 \leq nums_i \leq 10^5$

## Approach 1: Prime Factorization

RFirst let us see how to build the graph. Naive way of building graph would be to iterate over all $(i, j)$ pairs and check if $\gcd(nums_i, nums_j) > 1$. If it is then add an edge bweten them, else not. But this approch will take $O(n^2)$ operations in worst case, which will not pass.

A different way to build graph could be to add edge between $p$ and $nums_i$ if $p$ is a prime factor of $nums_i$. Since any number $n$ has atmost $log(n)$ prime factors so we will have atmost $n \cdot log(n)$ edges in the graph. But while counting component we need to make sure that the node is present in `nums`. If it isn't then it can serve as a bridge connecting two numbers from `nums`, but it should not included in count of nodes in connected component.

We need to take care of few corner cases first. If there are more than one $1$ then we can never reach/leave all $1$. If there is only one $1$ then we can choose it as starting point. Since $\gcd(1, x) = 1$, so we can never leave the vertex. In this case answer is `true` if `size(nums) == 1`. 

<SolutionAuthor name="@Ishwarendra"/>

```cpp
class Solution {
  // g = graph using which we can find maximum connected component size
  vector<vector<int>> g;

  vector<int> minPrime(int MAX) {
    vector<int> min_prime(MAX + 1);
    iota(std::begin(min_prime), std::end(min_prime), 0);

    for (int i = 2; i * i <= MAX; i++) { 
        if (min_prime[i] != i) continue;
        for (int j = i * i; j <= MAX; j += i) min_prime[j] = std::min(min_prime[j], i);
    }

    return min_prime;
  }

  vector<int> getPrimeFactorsInLogn(int n, std::vector<int> &min_prime) {
    vector<int> prime_factors;

    while (n > 1) {
      int smallest_prime_factor_of_n = min_prime[n];

      // Since we only need unique prime factors so we won't push same number again and again
      if (n % smallest_prime_factor_of_n == 0) prime_factors.push_back(smallest_prime_factor_of_n);

      // Remove the prime factor `i` completely from n
      while (n % smallest_prime_factor_of_n == 0) n /= smallest_prime_factor_of_n;
    } 

    return prime_factors;
  }

  void bfs(int src, std::vector<bool> &vis) {
    queue<int> q;
    q.emplace(src);
    vis[src] = true;

    while (!q.empty()) {
      int node = q.front();
      q.pop();

      for (int child : g[node]) {
        if (!vis[child]) {
          q.emplace(child);
          vis[child] = true;
        }
      }
    }
  }  
public:
  bool canTraverseAllPairs(vector<int>& nums) {
    // if nums contain 1 then we can never reach that vertex/leave that vertex.
    int cnt_1 = count(begin(nums), end(nums), 1);
    if (cnt_1 > 1 || (cnt_1 == 1 and size(nums) > 1))
      return false;

    int max_elem = *max_element(begin(nums), end(nums));
    auto min_prime = minPrime(max_elem + 1);

    g.resize(max_elem + 1);
    vector<bool> vis(max_elem + 1);

    for (int num : nums) {
      auto pf = getPrimeFactorsInLogn(num, min_prime);

      for (auto prime : pf) {
        if (prime == num) continue;

        // num and prime has gcd > 1
        g[prime].emplace_back(num);
        g[num].emplace_back(prime);
      }
    } 

    bfs(nums[0], vis);
    for (auto num : nums) {
      if (!vis[num]) return false;
    }

    return true;
  }
};
```

- **Time Complexity:** $O(MAX + n \cdot log(n))$, where $MAX$ is the max element of `nums` and $n$ is length of `nums`.
- **Space Complexity:** $O(MAX + n \cdot log(n))$, as we are building a graph of $n \cdot log(n)$ edges and $(MAX + 1)$ nodes.