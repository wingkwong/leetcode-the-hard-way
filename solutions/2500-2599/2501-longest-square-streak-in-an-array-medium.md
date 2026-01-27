---
description: 'Author: @wkw | https://leetcode.com/problems/longest-square-streak-in-an-array/'
tags: [Array, Hash Table, Binary Search, Dynamic Programming, Sorting]
---

# 2501 - Longest Square Streak in an Array (Medium)

## Problem Link

https://leetcode.com/problems/longest-square-streak-in-an-array/

## Problem Statement

You are given an integer array `nums`. A subsequence of `nums` is called a **square streak** if:

- The length of the subsequence is at least `2`, and
- **after** sorting the subsequence, each element (except the first element) is the **square** of the previous number.

Return*the length of the **longest square streak** in*`nums`_, or return_`-1`_if there is no **square streak**._

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

**Example 1:**

```
Input: nums = [4,3,6,16,8,2]
Output: 3
Explanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
- 4 = 2 * 2.
- 16 = 4 * 4.
Therefore, [4,16,2] is a square streak.
It can be shown that every subsequence of length 4 is not a square streak.
```

**Example 2:**

```
Input: nums = [2,3,5,6,7]
Output: -1
Explanation: There is no square streak in nums so return -1.
```

**Constraints:**

- `2 <= nums.length <= 10 ^ 5`
- `2 <= nums[i] <= 10 ^ 5`

## Approach 1: Brute Force

We can brute force to find the longest subsequence from the range $[1, 317]$ since the max number could be $10^5$. We first put every number to a set then iterate from $1$ to $317$. If the current number $i$ is in the set, we can increase the counter and update the number by multipying itself and record the maximum count. At the end, we just need to check if the longest length is greater than $1$ (since the length of the subsequence is at least $2$).

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int longestSquareStreak(vector<int>& nums) {
        // brute force from [1, mx]
        int n = nums.size(), mx = sqrt(1e5) + 1, ans = 0;
        // put every number to a set
        set<long long> s(nums.begin(), nums.end());
        for (int i = 1; i <= mx; i++) {
            // starting from i
            long long now = i;
            // init counter
            long long cnt = 0;
            // check if the current number is in the set
            while (s.count(now)) {
                // if so, we increase the counter
                cnt += 1;
                // update the number
                now *= now;
                // break if it's greater than the boundary
                if (now > 1e5) {
                    break;
                }
            }
            // update the longest length of the subsequence
            ans = max(ans, (int) cnt);
        }
        // the length of the subsequence is at least 2
        return ans >= 2 ? ans : -1;
    }
};
```

</TabItem>
</Tabs>
