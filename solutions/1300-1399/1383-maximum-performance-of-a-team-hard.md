---
description: 'Author: @wkw | https://leetcode.com/problems/maximum-performance-of-a-team/'
tags: [Array, Greedy, Sorting, Heap (Priority Queue)]
---

# 1383 - Maximum Performance of a Team (Hard)

## Problem Statement

You are given two integers `n` and `k` and two integer arrays `speed` and `efficiency` both of length `n`. There are `n` engineers numbered from `1` to `n`. `speed[i]` and `efficiency[i]` represent the speed and efficiency of the `ith` engineer respectively.

Choose **at most** `k` different engineers out of the `n` engineers to form a team with the maximum **performance**.

The performance of a team is the sum of their engineers' speeds multiplied by the minimum efficiency among their engineers.

Return _the maximum performance of this team_. Since the answer can be a huge number, return it **modulo** `1e9 + 7`.

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

- `1 <= k <= n <= 10^5`
- `speed.length == n`
- `efficiency.length == n`
- `1 <= speed[i] <= 10^5`
- `1 <= efficiency[i] <= 10^8`

## Approach 1: Priority Queue

<SolutionAuthor name="@wkw"/>

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
            // calculate the performance
            ans = max(ans, speedSum * e);
        }
        return ans % MOD;
    }
};
```

<SolutionAuthor name="@wkw"/>

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
            # calculate the performance
            ans = max(ans, speedSum * e)
        return ans % MOD
```

<SolutionAuthor name="@wkw"/>

```golang
// Logic Behind:
// 1. Join Score and Efficiency
//    We join both array since they are related,
//    Which can be done either through maps or array. We are using array.
// 2. Sorting Efficiency
//    We are sorting the efficiency.
//    Reason to sort with efficiency because we are multiply it single value.
//    Since we are multiplying the minimum, we need to sort in descending order
//    If we need a max we would sort in in ascending order.
// 3. Heap of scoring
//    Using heap here is curial since are need to add and remove all the smallest
//    So low values are poped until we run the complete array to find the max performance.

func maxPerformance(n int, speed []int, efficiency []int, k int) int {
    // Since the answer can be huge, we are usingn 10**9 + 7 as it suggests.
    MODULES := int(math.Pow(10, 9)) + 7;

    // Adding the spped and efficiency
    // Since the number is same we don't have to check the length.
    players := make([][]int, len(speed), len(speed))
    for i, e := range speed {
        players[i] = []int{e, efficiency[i]}
    }

    // Sorting Players by Efficiency
    sort.Sort(ByEfficiency(players))

    // Variables
    sumOfSpeed := 0
    maxPerformance := 0

    // Initialization of the speed heap.
    speedHeap := &SpeedHeap{}
    heap.Init(speedHeap)
    for _, e := range players {
        minEfficiency := e[1] // As it's the in descending order
        sumOfSpeed = sumOfSpeed + e[0]
        heap.Push(speedHeap, e[0])
        if speedHeap.Len() > k{ // Here we pop the lowest when the length is reached.
            sumOfSpeed = sumOfSpeed - heap.Pop(speedHeap).(int)
        }
        maxPerformance = max(maxPerformance, sumOfSpeed * minEfficiency)
    }
    return maxPerformance % MODULES;
}

func max(a,b int) int {
    if a > b {
        return a
    }
    return b
}

// Heap of speed
type SpeedHeap []int
func (h SpeedHeap) Len() int           { return len(h) }
func (h SpeedHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h SpeedHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *SpeedHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *SpeedHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}


// Player Sorting
type ByEfficiency [][]int
func (a ByEfficiency) Len() int           { return len(a) }
func (a ByEfficiency) Less(i, j int) bool {
    if(a[i][1] == a[j][1]){
        return a[i][0] < a[j][0]
    }
    return a[i][1] > a[j][1]
}
func (a ByEfficiency) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
```
