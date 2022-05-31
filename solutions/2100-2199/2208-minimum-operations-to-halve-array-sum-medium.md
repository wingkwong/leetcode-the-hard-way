---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/minimum-operations-to-halve-array-sum/
---

# 2208 - Minimum Operations to Halve Array Sum (Medium)

## Problem Statement

You are given an array `nums` of positive integers. In one operation, you can choose **any** number from `nums` and reduce it to **exactly** half the number. (Note that you may choose this reduced number in future operations.)

Return _the **minimum** number of operations to reduce the sum of_ `nums` _by **at least** half._

**Example 1:**

```
Input: nums = [5,19,8,1]
Output: 3
Explanation: The initial sum of nums is equal to 5 + 19 + 8 + 1 = 33.
The following is one of the ways to reduce the sum by at least half:
Pick the number 19 and reduce it to 9.5.
Pick the number 9.5 and reduce it to 4.75.
Pick the number 8 and reduce it to 4.
The final array is [5, 4.75, 4, 1] with a total sum of 5 + 4.75 + 4 + 1 = 14.75. 
The sum of nums has been reduced by 33 - 14.75 = 18.25, which is at least half of the initial sum, 18.25 >= 33/2 = 16.5.
Overall, 3 operations were used so we return 3.
It can be shown that we cannot reduce the sum by at least half in less than 3 operations.
```

**Example 2:**

```
Input: nums = [3,8,20]
Output: 3
Explanation: The initial sum of nums is equal to 3 + 8 + 20 = 31.
The following is one of the ways to reduce the sum by at least half:
Pick the number 20 and reduce it to 10.
Pick the number 10 and reduce it to 5.
Pick the number 3 and reduce it to 1.5.
The final array is [1.5, 8, 5] with a total sum of 1.5 + 8 + 5 = 14.5. 
The sum of nums has been reduced by 31 - 14.5 = 16.5, which is at least half of the initial sum, 16.5 >= 31/2 = 16.5.
Overall, 3 operations were used so we return 3.
It can be shown that we cannot reduce the sum by at least half in less than 3 operations.
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `1 <= nums[i] <= 10^7`

## Approach 1: Priority Queue

First we calculate $$sum$$ and $$half$$. We use priority queue to store the elements. We pop out the maximum element $$top$$, add the half of it (i.e. $$top / 2$$) to $$reduce$$, and push it to priority queue. We keep doing that until $$reduce$$ is greater than / equal to $$half$$. The answer is how many rounds we have performed.

```cpp
class Solution {
public:
    int halveArray(vector<int>& nums) {
        int n = nums.size(), ans = 0;
        // calculate the sum
        long double sum = accumulate(nums.begin(), nums.end(), 0LL);
        // calculate the half
        long double half = sum / 2;
        // init priority queue
        priority_queue<double> pq;
        for (auto x : nums) pq.push(x);
        // used to compare with half
        double reduce = 0;
        // final goal: reduce >= half
        while (reduce < half) {
            // take the max one and pop it out
            double top = pq.top(); pq.pop();
            // add half of it
            reduce += top / 2;
            // push the half to the queue
            pq.push(top / 2);
            // 1 operation is done here
            ans++;
        }
        return ans;
    }
};
```
