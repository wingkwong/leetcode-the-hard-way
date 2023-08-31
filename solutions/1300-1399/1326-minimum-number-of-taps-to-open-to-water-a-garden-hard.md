---
description: 'Author: @wingkwong | https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/description/'
tags: [Array, Dynamic Programming, Greedy]
---

# 1326 - Minimum Number of Taps to Open to Water a Garden (Hard) 

## Problem Link

https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/description/

## Problem Statement

There is a one-dimensional garden on the x-axis. The garden starts at the point `0` and ends at the point `n`. (i.e The length of the garden is `n`).

There are `n + 1` taps located at points `[0, 1, ..., n]` in the garden.

Given an integer `n` and an integer array `ranges` of length `n + 1` where `ranges[i]` (0-indexed) means the `i-th` tap can water the area `[i - ranges[i], i + ranges[i]]` if it was open.

Return *the minimum number of taps* that should be open to water the whole garden, If the garden cannot be watered return **-1**.

**Example 1:**

```
Input: n = 5, ranges = [3,4,1,1,0,0]
Output: 1
Explanation: The tap at point 0 can cover the interval [-3,3]
The tap at point 1 can cover the interval [-3,5]
The tap at point 2 can cover the interval [1,3]
The tap at point 3 can cover the interval [2,4]
The tap at point 4 can cover the interval [4,4]
The tap at point 5 can cover the interval [5,5]
Opening Only the second tap will water the whole garden [0,5]
```

**Example 2:**

```
Input: n = 3, ranges = [0,0,0,0]
Output: -1
Explanation: Even if you activate all the four taps you cannot water the whole garden.
```

**Constraints:**

- `1 <= n <= 10^4`
- `ranges.length == n + 1`
- `0 <= ranges[i] <= 100`

## Approach 1: Dynamic Programming

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// TC: O(n * m) where m is ranges[i]
// SC: O(n)
class Solution {
public:
    int minTaps(int n, vector<int>& ranges) {
        // dp[i]: min number of taps that should be open to water garden [0 .. i]
        // init with some max values
        vector<int> dp(n + 1, n + 1);
        // no tap is needed to water no garden
        dp[0] = 0;
        for (int i = 0; i <= n; i++) {
            // we can water garden [i - ranges[i] .. i + ranges[i]] with tap i
            // rmb to handle the boundary ...
            int l = max(0, i - ranges[i]), r = min(i + ranges[i], n);
            for (int j = l; j <= r; j++) {
                // check we can use less number of taps from [l .. r]
                // i.e. can i water [0 .. j] just using dp[j] taps
                // or I need to water dp[0 .. l] `dp[l]` times 
                // and use one more tap to water [l + 1 .. j]
                dp[j] = min(dp[j], dp[l] + 1);
            }
        }
        // if min number of taps not found, return -1, else return dp[n]
        return dp[n] == n + 1 ? -1 : dp[n];
    }
};
```

</TabItem>
</Tabs>