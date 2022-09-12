---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/
---

# 2163 - Minimum Difference in Sums After Removal of Elements (Hard)

## Problem Link

https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/

## Problem Statement

You are given a **0-indexed** integer array `nums` consisting of `3 * n` elements.

You are allowed to remove any **subsequence** of elements of size **exactly** `n` from `nums`. The remaining `2 * n` elements will be divided into two **equal** parts:

* The first `n` elements belonging to the first part and their sum is `sumfirst`.
* The next `n` elements belonging to the second part and their sum is `sumsecond`.

The **difference in sums** of the two parts is denoted as `sumfirst - sumsecond`.

* For example, if `sumfirst = 3` and `sumsecond = 2`, their difference is `1`.
* Similarly, if `sumfirst = 2` and `sumsecond = 3`, their difference is `-1`.

Return _the **minimum difference** possible between the sums of the two parts after the removal of_ `n` _elements_.

**Example 1:**

```
Input: nums = [3,1,2]
Output: -1
Explanation: Here, nums has 3 elements, so n = 1. 
Thus we have to remove 1 element from nums and divide the array into two equal parts.
- If we remove nums[0] = 3, the array will be [1,2]. The difference in sums of the two parts will be 1 - 2 = -1.
- If we remove nums[1] = 1, the array will be [3,2]. The difference in sums of the two parts will be 3 - 2 = 1.
- If we remove nums[2] = 2, the array will be [3,1]. The difference in sums of the two parts will be 3 - 1 = 2.
The minimum difference between sums of the two parts is min(-1,1,2) = -1. 
```

**Example 2:**

```
Input: nums = [7,9,5,8,1,3]
Output: 1
Explanation: Here n = 2. So we must remove 2 elements and divide the remaining array into two parts containing two elements each.
If we remove nums[2] = 5 and nums[3] = 8, the resultant array will be [7,9,1,3]. The difference in sums will be (7+9) - (1+3) = 12.
To obtain the minimum difference, we should remove nums[1] = 9 and nums[4] = 1. The resultant array becomes [7,5,8,3]. The difference in sums of the two parts is (7+5) - (8+3) = 1.
It can be shown that it is not possible to obtain a difference smaller than 1.
```

**Constraints:**

* `nums.length == 3 * n`
* `1 <= n <= 10^5`
* `1 <= nums[i] <= 10^5`

## Approach 1: Two Heaps

Given an array of $$3 * n$$ elements, we need to remove a subsequence of $$n$$ elements. At the end, we will have $$2 * n$$ elements. The answer is the $$sum_{first} - sum_{second}$$. Therefore, we need to make $$sum_{first}$$as small as possible and $$sum_{second}$$ as large as possible.

We use two heaps $$p$$ and $$s$$ to record the smallest $$n$$ elements and the largest $$n$$ elements and $$pre$$to record the sum of $$p$$ and $$suf$$ to record that of $$s$$.

Now we handle the middle $$n$$ elements. From left to right, we check if the element $$nums[i]$$ is smaller than the top element $$q$$ from $$p$$. If so, we should take this element instead and ditch the top one. We update $$pre' = pre + nums[i] - q$$. At the same time we keep the prefix sum $$pv[i]$$ in$$[n, 2 * n)$$. Similarly, we do the same thing from right to left to build the suffix sum $$sv[i]$$ in the same range.

At the end, we can find out the minimum difference by checking $$pv[i - 1] - sv[i]$$ between the middle $$n$$ range.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    long long minimumDifference(vector<int>& nums) {
        int n = (int) nums.size() / 3;
        long long ans = 1e18;
        priority_queue<long long> p;
        priority_queue<long long, vector<long long>, greater<long long>> s;
        vector<long long> pv(3 * n, 1e18), sv(3 * n, -1e18);
        long long pre = 0, suf = 0;
        for (int i = 0; i < n; i++) {
            p.push(nums[i]); s.push(nums[3 * n - 1 - i]);
            pre += nums[i], suf += nums[3 * n - 1 - i];
        }
        pv[n - 1] = pre, sv[2 * n] = suf;
        for (int i = n; i < 2 * n; i++) {
            long long q = p.top();
            if (nums[i] < q) {
                p.pop();
                pre += nums[i] - q;
                p.push(nums[i]);
            }
            pv[i] = pre;
        }
        for (int i = 2 * n - 1; i >= n; i--) {
            long long q = s.top();
            if (nums[i] > q) {
                s.pop();
                suf += nums[i] - q;
                s.push(nums[i]);
            }
            sv[i] = suf;
        }
        for (int i = n; i <= 2 * n; i++) ans = min(ans, pv[i - 1] - sv[i]);
        return ans;
    }
};
```
