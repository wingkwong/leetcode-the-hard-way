---
description: 'Author: @wkw | https://leetcode.com/problems/reverse-pairs/'
---

# 0493 - Reverse Pairs (Hard)

## Problem Link

https://leetcode.com/problems/reverse-pairs/

## Problem Statement

Given an integer array `nums`, return _the number of **reverse pairs** in the array_.

A reverse pair is a pair `(i, j)` where `0 <= i < j < nums.length` and `nums[i] > 2 * nums[j]`.

**Example 1:**

```
Input: nums = [1,3,2,3,1]
Output: 2
```

**Example 2:**

```
Input: nums = [2,4,3,5,1]
Output: 3
```

**Constraints:**

- `1 <= nums.length <= 5 * 10^4`
- `-231 <= nums[i] <= 231 - 1`

## Approach 1: Ordered Set

<SolutionAuthor name="@wkw"/>

```cpp
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;

class Solution {
public:
    tree<long long, null_type, greater_equal<long long>, rb_tree_tag, tree_order_statistics_node_update> T;
    int reversePairs(vector<int>& nums) {
        int ans = 0;
        for (auto x : nums) {
            // number of elements >= (2LL * x)
            ans += T.order_of_key(2LL * x);
            T.insert(x);
        }
        return ans;
    }
};
```

## Approach 2: BIT

<details>

<summary>BIT Template</summary>

```cpp
template <class T>
    struct BIT { //1-indexed
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
```

</details>

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // BIT Template goes here
    // ...

    int reversePairs(vector<int>& nums) {
        int n = nums.size(), pos = -1, inversions = 0;
        vector<int> sorted_nums = nums;
        sort(sorted_nums.begin(), sorted_nums.end());
        BIT bit = BIT<int>(n);
        for(int i = 0; i < n; i++) {
            // take the last pos of (2 * nums[i]) in sorted_nums
            pos = upper_bound(sorted_nums.begin(), sorted_nums.end(), 2L * nums[i]) - sorted_nums.begin();
            // ans += i - number of visited elements that are smaller or equal to 2 * nums[i]
            inversions += i - bit.query(pos);
            // find out where nums[i] should reside
            pos = upper_bound(sorted_nums.begin(), sorted_nums.end(), nums[i]) - sorted_nums.begin();
            // update it in BIT
            bit.upd(pos, 1);
        }
        return inversions;
    }
};
```
