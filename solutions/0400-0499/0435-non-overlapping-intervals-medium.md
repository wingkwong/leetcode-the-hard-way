---
description: 'Author: @wkw | https://leetcode.com/problems/non-overlapping-intervals/'
tags: [Array, Dynamic Programming, Greedy, Sorting]
---

# 0435 - Non-overlapping Intervals (Medium)

## Problem Link

https://leetcode.com/problems/non-overlapping-intervals/

## Problem Statement

Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return _the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping_.

**Example 1:**

```
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
```

**Example 2:**

```
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
```

**Example 3:**

```
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
```

**Constraints:**

- `1 <= intervals.length <= 10^5`
- `intervals[i].length == 2`
- `-5 * 10^4 <= starti < endi <= 5 * 10^4`

## Approach 1: Greedy

First we can sort `interval`. Given two intervals, where `intervals[j]` is the previous interval and `interval[i]` is the current interval. We can think of three cases.

1. The two intervals are not overlapping, i.e. `intervals[i][0]` >= `intervals[j][1]`. We can simply mark `j = i`.
2. The two intervals are overlapping and the end of the previous interval is greater than that of the current interval. Since it's overlapping, we increase answer by 1. We also mark `j = i`. `intervals[j]` should be removed.
3. The two intervals are overlapping and the end of the previous interval is less than that of the current interval. `intervals[i]` should be removed.

Time Complexity: $$O(nlogn)$$, where $$n$$ is the length of $$intervals$$. We must first sort our intervals array before solving.

Space Complexity: $$O(1)$$, We use no space to sort in place and only need extra space to track our answer, and our pointers.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        int ans = 0;
        if (intervals.size() == 0) return ans;
        sort(intervals.begin(), intervals.end());
        for (int i = 1, j = 0; i < intervals.size(); i++) {
          if (intervals[i][0] < intervals[j][1]) {
            ans++;
            if (intervals[j][1] > intervals[i][1]) j = i;
          } else {
            j = i;
          }
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        # Sort our intervals array, O(nlogn) time
        intervals.sort()
        # track the end of the previous interval.
        end = intervals[0][1]
        # track the number of overlapping intervals to delete.
        overlap = 0
        # loop through the remaining intervals
        for i in range(1, len(intervals)):
            # get start and end of current intervals
            _start, _end = intervals[i]
            # if start of current interval lies within last interval.
            if  _start < end:
                # delete one
                overlap += 1
                # choose the one that ends sooner to keep.
                end = min(end, _end)
            # no overlap, don't delete, and update the previous interval's
            # value to be what the current interval's end value is.
            else:
                end = _end
        return overlap
```

</TabItem>
</Tabs>
