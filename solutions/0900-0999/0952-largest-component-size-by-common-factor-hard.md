---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/largest-component-size-by-common-factor
---

# 0952 - Largest Component Size by Common Factor (Hard)

## Problem Link

https://leetcode.com/problems/largest-component-size-by-common-factor

## Problem Statement

You are given an integer array of unique positive integers `nums`. Consider the following graph:

* There are `nums.length` nodes, labeled `nums[0]` to `nums[nums.length - 1]`,
* There is an undirected edge between `nums[i]` and `nums[j]` if `nums[i]` and `nums[j]` share a common factor greater than `1`.

Return _the size of the largest connected component in the graph_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/12/01/ex1.png)

```
Input: nums = [4,6,15,35]
Output: 4
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2018/12/01/ex2.png)

```
Input: nums = [20,50,9,63]
Output: 2
```

**Example 3:**

![](https://assets.leetcode.com/uploads/2018/12/01/ex3.png)

```
Input: nums = [2,3,6,7,4,12,21,39]
Output: 8
```

**Constraints:**

* `1 <= nums.length <= 2 * 104`
* `1 <= nums[i] <= 105`
* All the values of `nums` are **unique**.

## Approach 1: Factorisation + DSU

We iterate each number and factorise it. In general, here's the approach.

```cpp
vector<int> factorize(int x) {
    vector<int> res;
    for (int y = 2; y * y <= x; y++) {
        if (x % y) continue;
        while(x % y == 0) {
            res.push_back(y);
            x /= y;
        }
    }
    if (x > 1) res.push_back(x);
    return res;
}
```

Once we got the factors, we use DSU to unite each factor and the number.

<details>

<summary>DSU Template</summary>

```cpp
class dsu {
 public:
  vector<int> root, rank, size;
  int n;
  int cnt;

  dsu(int _n) : n(_n) {
    root.resize(n);
    rank.resize(n);
    size.resize(n);
    for(int i = 0; i < n; i++) {
        root[i] = i;
        rank[i] = 1;
        size[i] = 1;
    }
    cnt = n;
  }

  inline int getCount() { return cnt; }

  inline int get(int x) { return (x == root[x] ? x : (root[x] = get(root[x]))); }

  inline bool unite(int x, int y) {
    x = get(x); y = get(y);
    if (x != y) {
        if (rank[x] > rank[y]) {
            root[y] = x;
        } else if (rank[x] < rank[y]) {
            root[x] = y;
        } else {
            root[y] = x;
            rank[x] += 1;
        }
        cnt--;
        
      return true;
    }
    return false;
  }
};
```

</details>

At the end, we check the size of each group and return the max one.

<SolutionAuthor name="@wingkwong"/>

```cpp
int largestComponentSize(vector<int>& nums) {
        int n = nums.size();
        dsu d(100005);
        for (auto x : nums) {
            // step 1: factorize each number
            vector<int> f = factorize(x);
            // step 2: unite each number with its factors
            for (int i = 0; i < f.size(); i++) {
                d.unite(x, f[i]);
            }
        }
        // step 3: find out the max group size
        int ans = 0;
        unordered_map<int, int> m;
        for (auto x : nums) {
            ans = max(ans, ++m[d.get(x)]);
        }
        return ans;
    }
```
