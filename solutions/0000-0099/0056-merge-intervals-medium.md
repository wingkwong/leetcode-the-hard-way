---
description: 'Author: @ColeB2 | https://leetcode.com/problems/merge-intervals/'
tags: [Array, Sorting]
---

# 0056 - Merge Intervals (Medium)

## Problem Link

https://leetcode.com/problems/merge-intervals/

## Problem Statement

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return _an array of the non-overlapping intervals that cover all the intervals in the input_.

**Example 1:**

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example 2:**

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

**Constraints:**

- `1 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^4`

## Approach 1: Sorting

If we sort our intervals by the start value of each interval, we will have them ordered based on start values. Then we can create our merged interval array and initialize it with the first interval after we sorted intervals.

Then we can simply iterate all intervals, merging if the start value of the incoming interval is less than or equal to the end value of the last interval inside our $$merged\_intervals$$ array (update last intervals end to be the larger the two end values). If the start value is greater than the end value, then we can just append the incoming interval to $$merged_intervals$$.

Time Complexity: $$O(nlogn)$$, we must first sort intervals, then do a linear scan.

Space Complexity: $$O(n)$$, our $$merged\_intervals$$ array will hold up to $$n$$ intervals.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # sort intervals in O(nlogn) time. This makes it easier to
        # linearly scan, and only the incoming interval is the one
        # that should affect the last value inside merged_intervals.
        intervals.sort()
        # inialize with first interval after sorting
        merged_intervals = [intervals[0]]
        # loop the remaining intervals
        for i in range(1, len(intervals)):
            # track start and end values of incoming intervals
            start, end = intervals[i]
            # incoming interval start value lies inside last interval
            # inside merged_intervals:
            if start <= merged_intervals[-1][1]:
                # start s,e of merged intervals
                s,e = merged_intervals[-1]
                # update the end value of merged_intervals.
                # since we sorted earlier, we don't need to worry about
                # start as start will be either the same number, or
                # greater than the merged_intervals start value.
                merged_intervals[-1][1] = max(end,e)
            else:
                # doesn't lie inside the interval, we can just append
                # the incoming interval to merged_intervals
                merged_intervals.append([start, end])
        return merged_intervals
```

</TabItem>
</Tabs>
