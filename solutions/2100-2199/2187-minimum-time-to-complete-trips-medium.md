---
description: >-
  Author: @heiheihang, @wkw | https://leetcode.com/problems/minimum-time-to-complete-trips/
---

# 2187 - Minimum Time to Complete Trips (Medium)

## Problem Link

https://leetcode.com/problems/minimum-time-to-complete-trips/

## Problem Statement

You are given an array `time` where `time[i]` denotes the time taken by the `ith` bus to complete **one trip**.

Each bus can make multiple trips **successively**; that is, the next trip can start **immediately after** completing the current trip. Also, each bus operates **independently**; that is, the trips of one bus do not influence the trips of any other bus.

You are also given an integer `totalTrips`, which denotes the number of trips all buses should make **in total**. Return \_the **minimum time** required for all buses to complete **at least** \_ `totalTrips` _trips_.

**Example 1:**

```
Input: time = [1,2,3], totalTrips = 5
Output: 3
Explanation:
- At time t = 1, the number of trips completed by each bus are [1,0,0].
  The total number of trips completed is 1 + 0 + 0 = 1.
- At time t = 2, the number of trips completed by each bus are [2,1,0].
  The total number of trips completed is 2 + 1 + 0 = 3.
- At time t = 3, the number of trips completed by each bus are [3,1,1].
  The total number of trips completed is 3 + 1 + 1 = 5.
So the minimum time needed for all buses to complete at least 5 trips is 3.
```

**Example 2:**

```
Input: time = [2], totalTrips = 1
Output: 2
Explanation:
There is only one bus, and it will complete its first trip at t = 2.
So the minimum time needed to complete 1 trip is 2.
```

**Constraints:**

- `1 <= time.length <= 10^5`
- `1 <= time[i], totalTrips <= 10^7`

## Approach 1: Binary Search

This is a classic problem of finding the smallest integer given a bound under a monotonic function.

We can perform binary search on the `time` needed to finish the trips, and we check that if we are able to complete `totalTrips` within the given amount of time. There are two components to this solution:

- Binary Searching the smallest amount of time
- Checking if `totalTrips` can be completed given a time

There are many similar problems to this question, and you should know this: [https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems](https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems)

<SolutionAuthor name="@heiheihang"/>

```python
def minimumTime(self, time: List[int], totalTrips: int) -> int:

        #checker function
        def check(x):
            nonlocal totalTrips

            #keep track of how many trips we have visited
            trips = 0
            for t in time:

                #we can visit x//t trips (rounded down)
                trips += x // t

                #return true when we have fulfilled the requirement
                if(trips >= totalTrips):
                    return True
            #return false if the requirement has not been fulfilled
            return False

        #standard binary search setting of left pointer and right pointer
        lp = 0
        rp = time[0] * totalTrips + 1
        res = rp

        while(lp <= rp):

            #standard middle point of binary search
            mid = (lp+rp) // 2

            #check if the middle point satisfies the requirement
            if(check(mid)):
                #if it satisfies, update the result
                #also decrease the right pointer to look at smaller times
                res = mid
                rp = mid - 1
            else:
                #increase the left pointer to look at bigger times otherwise
                lp = mid + 1

        return res
```

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    long long minimumTime(vector<int>& time, int totalTrips) {
        long long l = *min_element(time.begin(), time.end());
        long long r = accumulate(time.begin(), time.end(), 0LL) * totalTrips;
        while (l < r) {
            long long m = l + (r - l) / 2, trips = 0;
            for (auto x : time) trips += (m / x);
            if (trips < totalTrips) l = m + 1;
            else r = m;
        }
        return l;
    }
};
```
