---
description: >-
  Author: @wkw | https://leetcode.com/problems/maximum-profit-in-job-scheduling/


tags: [Array, Binary Search, Dynamic Programming, Sorting]
---

# 1235 - Maximum Profit in Job Scheduling (Hard)

## Problem Link

https://leetcode.com/problems/maximum-profit-in-job-scheduling/

## Problem Statement

We have `n` jobs, where every job is scheduled to be done from `startTime[i]` to `endTime[i]`, obtaining a profit of `profit[i]`.

You're given the `startTime`, `endTime` and `profit` arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time `X` you will be able to start another job that starts at time `X`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2019/10/10/sample1_1584.png)

```
Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
Output: 120
Explanation: The subset chosen is the first and fourth job.
Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2019/10/10/sample22_1584.png)

```
Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
Output: 150
Explanation: The subset chosen is the first, fourth and fifth job.
Profit obtained 150 = 20 + 70 + 60.
```

**Example 3:**

![](https://assets.leetcode.com/uploads/2019/10/10/sample3_1584.png)

```
Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
Output: 6
```

**Constraints:**

- $1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4$
- $1 <= startTime[i] < endTime[i] <= 10^9$
- $1 <= profit[i] <= 10^4$

## Approach 1: Dynamic Programming

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// TLE - idx + 1 is too slow
class Solution {
public:
    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {
        int n = startTime.size();
        // rearrange the input
        vector<array<int, 3>> events;
        // put them together
        for (int i = 0; i < n; i++) events.push_back({startTime[i], endTime[i], profit[i]});
        // sort by startTime
        sort(events.begin(), events.end());
        // 1D dp
        vector<int> dp(n, -1);
        function<int(int,int)> dfs = [&](int idx, int end) {
            // reached all events
            if (idx == n) return 0;
            // current start time <= previous end time
            // cannot take it -> move to the next one
            if (events[idx][0] < end) return dfs(idx + 1, end);
            // calculate before -> return immediately
            if (dp[idx] != -1) return dp[idx];
            // so we only have two choices left, we either
            return dp[idx] = max(
                // choice 1: take this job and move to the next one from this end time
                events[idx][2] + dfs(idx + 1, events[idx][1]),
                // choice 2: not take this job and move to the next one
                dfs(idx + 1, end)
            );
        };
        return dfs(0, 0);
    }
};
```

<SolutionAuthor name="@wkw"/>

```cpp
// ACCEPTED by utilising lower_bound to move to the next available index
// based on the above solution
class Solution {
public:
    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {
        int n = startTime.size();
        // rearrange the input
        vector<vector<int>> events;
        // put them together
        for (int i = 0; i < n; i++) events.push_back({startTime[i], endTime[i], profit[i]});
        // sort by startTime
        sort(events.begin(), events.end());
        // 1D dp
        vector<int> dp(n, -1);
        function<int(int)> dfs = [&](int idx) {
            // reached all events
            if (idx == n) return 0;
            // calculate before -> return immediately
            if (dp[idx] != -1) return dp[idx];
            vector<int> v = {events[idx][1], 0, 0};
            // search for the next available idx
            int nxt = lower_bound(events.begin(), events.end(), v) - events.begin();
            // so we only have two choices left, we either
            return dp[idx] = max(
                // choice 1: take this job and move to the next one from this next event
                events[idx][2] + dfs(nxt),
                // choice 2: not take this job and move to the next one
                dfs(idx + 1)
            );
        };
        return dfs(0);
    }
};
```

</TabItem>
</Tabs>

## Similar Problems

- [1751 - Maximum Number of Events That Can Be Attended II (Hard)](../1700-1799/maximum-number-of-events-that-can-be-attended-ii-hard)
