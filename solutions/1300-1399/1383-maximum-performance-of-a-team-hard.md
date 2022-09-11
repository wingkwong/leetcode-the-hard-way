---
description: 'Author: @wingkwong | https://leetcode.com/problems/maximum-performance-of-a-team/'
tags: [Array, Greedy, Sorting, Heap (Priority Queue)]
---

# 1383 - Maximum Performance of a Team (Hard) 

## Problem Statement

You are given two integers `n` and `k` and two integer arrays `speed` and `efficiency` both of length `n`. There are `n` engineers numbered from `1` to `n`. `speed[i]` and `efficiency[i]` represent the speed and efficiency of the `ith` engineer respectively.

Choose **at most** `k` different engineers out of the `n` engineers to form a team with the maximum **performance**.

The performance of a team is the sum of their engineers' speeds multiplied by the minimum efficiency among their engineers.

Return *the maximum performance of this team*. Since the answer can be a huge number, return it **modulo** `109 + 7`.

**Example 1:**

```
Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
Output: 60
Explanation: 
We have the maximum performance of the team by selecting engineer 2 (with speed=10 and efficiency=4) and engineer 5 (with speed=5 and efficiency=7). That is, performance = (10 + 5) * min(4, 7) = 60.
```

**Example 2:**

```
Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
Output: 68
Explanation:
This is the same example as the first but k = 3. We can select engineer 1, engineer 2 and engineer 5 to get the maximum performance of the team. That is, performance = (2 + 10 + 5) * min(5, 4, 7) = 68.
```

**Example 3:**

```
Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4
Output: 72
```

**Constraints:**

- `1 <= k <= n <= 105`
- `speed.length == n`
- `efficiency.length == n`
- `1 <= speed[i] <= 105`
- `1 <= efficiency[i] <= 108`

## Approach 1: Priority Queue

<SolutionAuthor name="@wingkwong"/>

```cpp
// Time Complexity: O(N * (logN + logK)) 
// Space Complexity: O(N + K)
// where N is the total number of candidates and K is the size of team
class Solution {
public:
    int maxPerformance(int n, vector<int>& speed, vector<int>& efficiency, int k) {
        int MOD = 1e9 + 7;
        vector<pair<int, int>> candidates(n);
        // we build the pair { efficiency, speed } so that we can sort it later
        for (int i = 0; i < n; i++) candidates[i] = { efficiency[i], speed[i] };
        // sort candidates in descending order
        sort(candidates.rbegin(), candidates.rend());
        // Using Example 1: 
        // speed: [2, 10, 3, 1 ,5, 8] and efficiency: [5, 4, 3, 9, 7, 2]
        // after sort, it becomes
        // a: [{9, 1}, {7 ,5}, {5, 2}, {4, 10}, {3, 3}, {2, 8}]
        long speedSum = 0, ans = 0;
        // we use priority queue here with greater<int> to store the sum
        // i.e min heap (the smallest element goes on the top)
        priority_queue <int, vector<int>, greater<int>> pq;
        // iterate each pair
        for (auto& [e, s] : candidates) {
            // put the speed to priority queue
            pq.push(s);
            // add to speedSum
            speedSum += s;
            // we only need to choose at most k engineers
            // hence if the queue size is greater than k
            // we need to remove a candidate
            if (pq.size() > k) {
                // who to remove? of course the one with smallest speed
                speedSum -= pq.top();
                pq.pop();
            }
            // a team is formed now, calculate the performance
            ans = max(ans, speedSum * e);
        }
        return ans % MOD;
    }
};
```

<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def maxPerformance(self, n: int, speed: List[int], efficiency: List[int], k: int) -> int:
        MOD = 10 ** 9 + 7
        # build tuples ( efficiency, speed ) so that we can sort it later
        candidates = zip(efficiency, speed)
        # default sort mode is ascending. use `reverse = True` to sort in descending
        candidates = sorted(candidates, key=lambda x: x[0], reverse=True)
        # Using Example 1: 
        # speed: [2, 10, 3, 1 ,5, 8] and efficiency: [5, 4, 3, 9, 7, 2]
        # after sort, it becomes
        # candidates: [(9, 1), (7 ,5), (5, 2), (4, 10), (3, 3), (2, 8)]
        speedSum, ans = 0, 0
        # in python, it usually refers to heap 
        heap = []
        # iterate each tuple
        for e, s in candidates:
            # put the speed to heap
            heapq.heappush(heap, s)
            # add to speedSum
            speedSum += s
            # we only need to choose at most k engineers
            # hence if the queue size is greater than k
            # we need to remove a candidate
            if len(heap) > k:
                # who to remove? of course the one with smallest speed
                speedSum -= heapq.heappop(heap)
            # a team is formed now, calculate the performance
            ans = max(ans, speedSum * e)
        return ans % MOD
```