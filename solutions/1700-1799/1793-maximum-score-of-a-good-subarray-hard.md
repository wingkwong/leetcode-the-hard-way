---
description: 'Author: @wingkwong | https://leetcode.com/problems/maximum-score-of-a-good-subarray/'
tags: [Array, Two Pointers, Binary Search, Stack, Monotonic Stack]
---

# 1793 - Maximum Score of a Good Subarray (Hard) 

## Problem Link

https://leetcode.com/problems/maximum-score-of-a-good-subarray/

## Problem Statement

You are given an array of integers `nums` **(0-indexed)** and an integer `k`.

The **score** of a subarray `(i, j)` is defined as `min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1)`. A **good** subarray is a subarray where `i <= k <= j`.

Return *the maximum possible **score** of a **good** subarray.*

**Example 1:**

```
Input: nums = [1,4,3,7,4,5], k = 3
Output: 15
Explanation: The optimal subarray is (1, 5) with a score of min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15.
```

**Example 2:**

```
Input: nums = [5,5,4,5,4,1,1,1], k = 0
Output: 20
Explanation: The optimal subarray is (0, 4) with a score of min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20.
```

**Constraints:**

- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 2 * 104`
- `0 <= k < nums.length`

## Approach 1: Sparse Table

Given that $i <= k <= j$, we can use two pointers to find the answer. Finding the minimum value $min(nums[i], nums[i+1], ..., nums[j])$ would cost a lot for each time. We could use sparse table to query in $O(1)$. Then we can move the $i$ and $j$ pointer accordingly by comparing $min(nums[i], nums[i+1], ..., nums[k])$ and $min(nums[k], nums[k+1], ..., nums[j])$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // https://leetcodethehardway.com/templates/sparse-table
    template<typename it, typename bin_op>
    struct sparse_table {
        using T = typename remove_reference<decltype(*declval<it>())>::type;
        vector<vector<T>> t; bin_op f;

        sparse_table(it first, it last, bin_op op) : t(1), f(op) {
            int n = distance(first, last);
            t.assign(32 - __builtin_clz(n), vector<T>(n));
            t[0].assign(first, last);
            for (int i = 1; i < t.size(); i++)
                for (int j = 0; j < n - (1 << i) + 1; j++)
                    t[i][j] = f(t[i - 1][j], t[i - 1][j + (1 << (i - 1))]);
        }

        // returns f(a[l .. r]) in O(1) time
        T query(int l, int r) {
            int h = floor(log2(r - l + 1));
            return f(t[h][l], t[h][r - (1 << h) + 1]);
        }
    };
    
    int maximumScore(vector<int>& nums, int k) {
        int n = nums.size(), ans = 0;
        int i = 0, j = n - 1;
        sparse_table g(nums.begin(), nums.end(), [](int x, int y) {
           return min(x, y); 
        });
        while (i <= k && k <= j) {
            ans = max(ans, g.query(i, j) * (j - i + 1));
            if (g.query(i, k) <= g.query(k, j)) i++;
            else j--;
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>