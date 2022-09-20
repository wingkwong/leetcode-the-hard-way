---
description: 'Author: @wingkwong | https://leetcode.com/problems/maximum-length-of-repeated-subarray/'
tags: [Array, Binary Search, Dynamic Programming, Sliding Window, Rolling Hash, Hash Function]
---

# 0718 - Maximum Length of Repeated Subarray (Medium) 

## Problem Link

https://leetcode.com/problems/maximum-length-of-repeated-subarray/

## Problem Statement

Given two integer arrays `nums1` and `nums2`, return *the maximum length of a subarray that appears in **both** arrays*.

**Example 1:**

```
Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].
```

**Example 2:**

```
Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 100`

## Approach 1: Dynamic Programming

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // DP Approach - Similar to 1143. Longest Common Subsequence
    int findLength(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size(), m = nums2.size(), ans = 0;
        // dp[i][j] means the length of repeated subarray of nums1[:i] and nums2[:j]
        // initially the first row (i = 0) and the first col (j = 0) would be zero
        // dp[i][0] = 0 for all i and dp[0][j] = 0 for all j
        // if you use int dp[n + 1][m + 1], then you need to take care of this part
        vector<vector<int>> dp(n + 1, vector<int>(m + 1));
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= m; j++) {
                // if both character is same
				if (nums1[i - 1] == nums2[j - 1]) {
                    // then we add 1 to the previous state, which is dp[i - 1][j - 1]
                    // in other word, we extend the repeated subarray by 1
                    // e.g. a = [1], b = [1], length of repeated array is 1
                    //      a = [1,2], b = [1,2], length of repeated array is the previous result + 1 = 2
					dp[i][j] = dp[i - 1][j - 1] + 1;
                    // record the max ans here
					ans = max(ans, dp[i][j]);
				} else {
                    // if you are looking for longest common sequence,
                    // then you put dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]); here
                    // however, this problem is looking for subarray,
                    // since both character is not equal, which means we need to break it here
                    // hence, set dp[i][j] to 0
                    // since we use vector<vector<int>> dp instead of int dp[n + 1][m + 1]
                    // this part can be skipped as it is already 0
				}
			}
		}
		return ans;
    }
};
```

```cpp
class Solution {
public:
    // DP Approach - Space Optimized
    int findLength(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size(), m = nums2.size(), ans = 0;
        // swap it to ensure n > m
        if (n < m) {
            // or you can call findLength(nums2, nums1); 
            swap(nums1, nums2);
            swap(n, m);
        }
        // dp records current dp state
        // dp2 records the previous dp state
        vector<int> dp(n + 1), dp2(n + 1);
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (nums1[i - 1] == nums2[j - 1]) {
                    // extend from the previous dp state
                    dp[j] = dp2[j - 1] + 1; 
                } else {
                    // reset to 0
                    dp[j] = 0;
                }
                // record the max length
                ans = max(ans, dp[j]);
            }
            // the current state now becomes the previous state for next round
            dp2 = dp;
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    # DP Approach - Similar to 1143. Longest Common Subsequence
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        n, m = len(nums1), len(nums2)
        # dp[i][j] means the length of repeated subarray of nums1[:i] and nums2[:j]
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        ans = 0
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                # if both character is same
                if nums1[i - 1] == nums2[j - 1]:
                    # then we add 1 to the previous state, which is dp[i - 1][j - 1]
                    # in other word, we extend the repeated subarray by 1
                    # e.g. a = [1], b = [1], length of repeated array is 1
                    #      a = [1,2], b = [1,2], length of repeated array is the previous result + 1 = 2
                    dp[i][j] = dp[i - 1][j - 1] + 1
                    # record the max ans here
                    ans = max(ans, dp[i][j])
                # else:
                    # if you are looking for longest common sequence,
                    # then you put dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]); here
                    # however, this problem is looking for subarray,
                    # since both character is not equal, which means we need to break it here
                    # hence, set dp[i][j] to 0
        return ans
```

</TabItem>
</Tabs>

## Approach 2: Binary Search

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    # Binary Search Approach
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        N, M = len(nums1), len(nums2)
        
        def ok(k):
            # the idea is to use binary search to find the length `k`
            # then we check if there is any nums1[i : i + k] == nums2[i : i + k]
            s = set(tuple(nums1[i : i + k]) for i in range(N - k + 1))
            return any(tuple(nums2[i : i + k]) in s for i in range(M - k + 1))
        
        # init possible boundary
        l, r = 0, min(N, M)
        while l < r:
            # get the middle one
            # for even number of elements, take the upper one
            m = (l + r + 1) // 2
            if ok(m): 
                # include m
                l = m
            else:
                # exclude m
                r = m - 1
        return l
```

</TabItem>