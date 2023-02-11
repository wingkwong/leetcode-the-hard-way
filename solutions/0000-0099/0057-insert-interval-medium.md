---
description: "Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/insert-interval/"
tags: [Array]
---

# 0057 - Insert Interval (Medium)

## Problem Link

https://leetcode.com/problems/insert-interval/

## Problem Statement

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals`_after the insertion_.

**Example 1:**

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:**

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

**Constraints:**

- `0 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= start_i <= endi <= 10^5`
- `intervals` is sorted by `start_i` in **ascending** order.
- `newInterval.length == 2`
- `0 <= start <= end <= 10^5`

## Approach 1: One Pass

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> ans;
        int n = intervals.size();
        for (int i = 0; i < n; i++) {
            if (intervals[i][1] < newInterval[0]) {
                // current interval starts first & not covered by newInterval, add intervals[i] to ans
                // [curInterval]
                //                      [newInterval]
                ans.push_back(intervals[i]);
            } else if (intervals[i][0] > newInterval[1]) {
                // newInterval starts first and not covered by current interval
                // add newInterval to ans and set newInterval = curInterval
                //                       [curInterval]
                // [newInterval]
                ans.push_back(newInterval);
                newInterval = intervals[i];
            } else if (intervals[i][1] >= newInterval[0] || intervals[i][0] <= newInterval[1]) {
                // they are overlapped, merge them
                // [curInterval]
                //        [newInterval]
                // or
                // [newInterval]
                //        [curInterval]
                newInterval[0] = min(newInterval[0], intervals[i][0]);
                newInterval[1] = max(newInterval[1], intervals[i][1]);
            }
        }
        // add the last interval
        ans.push_back(newInterval);
        return ans;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> ans = new ArrayList<>();
        int n = intervals.length;
        for (int i = 0; i < n; i++) {
            int[] curInterval = intervals[i];
            if (intervals[i][1] < newInterval[0]) {
                // current interval starts first & not covered by newInterval, add intervals[i] to ans
                // [curInterval]
                //                      [newInterval]
                ans.add(intervals[i]);
            } else if (intervals[i][0] > newInterval[1]) {
                // newInterval starts first and not covered by current interval
                // add newInterval to ans and set newInterval = curInterval
                //                       [curInterval]
                // [newInterval]
                ans.add(newInterval);
                newInterval = intervals[i];
            } else if (intervals[i][1] >= newInterval[0] || intervals[i][0] <= newInterval[1]) {
                // they are overlapped, merge them
                // [curInterval]
                //        [newInterval]
                // or
                // [newInterval]
                //        [curInterval]
                newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
                newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            }
        }
        // add the last interval
        ans.add(newInterval);
        return ans.toArray(new int[ans.size()][]);
    }
}

```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        ans = []
        n = len(intervals)
        for i in range(n):
            if intervals[i][1] < newInterval[0]:
                # current interval starts first & not covered by newInterval, add intervals[i] to ans
                # [curInterval]
                #                      [newInterval]
                ans.append(intervals[i])
            elif intervals[i][0] > newInterval[1]:
                # newInterval starts first and not covered by current interval
                # Add newInterval to ans and set newInterval = curInterval
                #                       [curInterval]
                # [newInterval]
                ans.append(newInterval)
                newInterval = intervals[i]
            elif intervals[i][1] >= newInterval[0] or intervals[i][0] <= newInterval[1]:
                # They are overlapped, merge them
                # [curInterval]
                #        [newInterval]
                # or
                # [newInterval]
                #        [curInterval]
                newInterval[0] = min(newInterval[0], intervals[i][0])
                newInterval[1] = max(newInterval[1], intervals[i][1])
        # add the last interval
        ans.append(newInterval)
        return ans

```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
use std::cmp::min;
use std::cmp::max;

impl Solution {
    pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {
        let mut ans = vec![];
        let n = intervals.len();
        let mut new_interval = new_interval;
        for i in 0 .. n {
            if intervals[i][1] < new_interval[0] {
                // current interval starts first & not covered by newInterval, add intervals[i] to ans
                // [curInterval]
                //                      [newInterval]
                ans.push(intervals[i].clone());
            } else if intervals[i][0] > new_interval[1] {
                // NewInterval starts first and not covered by current interval
                // Add newInterval to ans and set newInterval = curInterval
                //                       [curInterval]
                // [newInterval]
                ans.push(new_interval.clone());
                new_interval = intervals[i].clone();
            } else if intervals[i][1] >= new_interval[0] || intervals[i][0] <= new_interval[1] {
                // they are overlapped, merge them
                // [curInterval]
                //        [newInterval]
                // or
                // [newInterval]
                //        [curInterval]
                new_interval[0] = min(new_interval[0], intervals[i][0]);
                new_interval[1] = max(new_interval[1], intervals[i][1]);
            }
        }
        // add the last interval
        ans.push(new_interval.clone());
        ans
    }
}
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let res = [];
  for (i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval);
      return res.concat(intervals.slice(i, intervals.length));
    } else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i]);
    } else {
      newInterval[0] = [Math.min(newInterval[0], intervals[i][0])];
      newInterval[1] = [Math.max(newInterval[1], intervals[i][1])];
    }
  }
  res.push(newInterval);
  return res;
};
```

</TabItem>
</Tabs>
