---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/count-good-triplets-in-an-array/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 2179 - Count Good Triplets in an Array (Hard)

## Problem Link

https://leetcode.com/problems/count-good-triplets-in-an-array/

## Problem Statement

You are given two **0-indexed** arrays `nums1` and `nums2` of length `n`, both of which are **permutations** of `[0, 1, ..., n - 1]`.

A **good triplet** is a set of `3` **distinct** values which are present in **increasing order** by position both in `nums1` and `nums2`. In other words, if we consider `pos1v` as the index of the value `v` in `nums1` and `pos2v` as the index of the value `v` in `nums2`, then a good triplet will be a set `(x, y, z)` where `0 <= x, y, z <= n - 1`, such that `pos1x < pos1y < pos1z` and `pos2x < pos2y < pos2z`.

Return _the **total number** of good triplets_.

**Example 1:**

```
Input: nums1 = [2,0,1,3], nums2 = [0,1,2,3]
Output: 1
Explanation: 
There are 4 triplets (x,y,z) such that pos1x < pos1y < pos1z. They are (2,0,1), (2,0,3), (2,1,3), and (0,1,3). 
Out of those triplets, only the triplet (0,1,3) satisfies pos2x < pos2y < pos2z. Hence, there is only 1 good triplet.
```

**Example 2:**

```
Input: nums1 = [4,0,1,3,2], nums2 = [4,1,0,2,3]
Output: 4
Explanation: The 4 good triplets are (4,0,3), (4,0,2), (4,1,3), and (4,1,2).
```

**Constraints:**

* `n == nums1.length == nums2.length`
* `3 <= n <= 10^5`
* `0 <= nums1[i], nums2[i] <= n - 1`
* `nums1` and `nums2` are permutations of `[0, 1, ..., n - 1]`.

## Approach 1: BIT

BIT aka fenwick tree is a data structure that can efficiently update elements and calculate prefix sums in a table of numbers. You can check out more details [here](https://cp-algorithms.com/data\_structures/fenwick.html).

In this problem, we use two BITs to store the number of elements $$l$$ smaller than $$nums[i]$$ and the number of elements $$r$$ greater than $$nums[i]$$. In other word, we fix the middle point and calculate the number of triplets by $$l * r$$ at that point. The answer is the sum of them.

First, we need to know that what is the position of $$nums1[i]$$ in $$nums2[i]$$. Then we iterate the array to get the position in $$nums2$$ for $$nums1[i]$$. We call $$query$$ to get the number of elements smaller than it. It's also the prefix sum or the range query from $$0$$ to it. Then we update the tree for this position. Similarly, we do the same thing for the second BIT in reversed order. This time we are looking for the suffix sum with the range from the target position till the end. At the end, we sum all $$l[i] * r[i]$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
template <class T>
struct BIT {
  int n; vector<T> t;
  BIT() {}
  BIT(int _n) {
    n = _n; t.assign(n + 1, 0);
  }
  T query(int i) {
    T ans = 0;
    for (; i >= 1; i -= (i & -i)) ans += t[i];
    return ans;
  }
  void upd(int i, T val) {
    if (i <= 0) return;
    for (; i <= n; i += (i & -i)) t[i] += val;
  }
  void upd(int l, int r, T val) {
    upd(l, val);
    upd(r + 1, -val);
  }
  T query(int l, int r) {
    return query(r) - query(l - 1);
  }
};

class Solution {
public:
    long long goodTriplets(vector<int>& nums1, vector<int>& nums2) {
        long long ans = 0;
        int n = nums1.size();
        vector<int> id(n);
        BIT<int> lb(n), rb(n);
        vector<int> l(n), r(n);
        // create an array for position mapping
        for (int i = 0; i < n; i++) id[nums2[i]] = i + 1;
        // building 1st BIT - counting smaller elements
        for (int i = 0; i < n; i++) {
            // target position in nums2 for nums1[i]
            int x = id[nums1[i]];
            // get the prefix sum
            l[i] = lb.query(x);
            // update the tree
            lb.upd(x, 1);
        }
        // buildign 2nd BIT - counting greater elements
        for (int i = n - 1; i >= 0; i--) {
            // target position in nums2 for nums1[i]
            int x = id[nums1[i]];
            // get the suffix sum
            r[i] = rb.query(x, n);
            // update the tree
            rb.upd(x, 1);
        }
        // calculate the total triplets
        for (int i = 0; i < n; i++) {
            ans += 1LL * l[i] * r[i];
        }
        return ans;
    }
};
```
