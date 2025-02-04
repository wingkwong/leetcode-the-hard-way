---
description: 'Author: @ColeB2 | https://leetcode.com/problems/minimum-interval-to-include-each-query/'
tags: [Array, Binary Search, Line Sweep, Sorting, Heap (Priority Queue)]
---

# 1851 - Minimum Interval to Include Each Query

## Problem Link

https://leetcode.com/problems/minimum-interval-to-include-each-query/

## Problem Statement

You are given a 2D integer array `intervals`, where `intervals[i] = [lefti, righti]` describes the `ith` interval starting at `lefti` and ending at `righti` (**inclusive**). The **size** of an interval is defined as the number of integers it contains, or more formally `righti - lefti + 1`.

You are also given an integer array `queries`. The answer to the `jth` query is the **size of the smallest interval** `i` such that `lefti <= queries[j] <= righti`. If no such interval exists, the answer is `-1`.

Return _an array containing the answers to the queries_.

**Example 1:**

```
Input: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
Output: [3,3,1,4]
Explanation: The queries are processed as follows:
- Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.
- Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.
- Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.
- Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.
```

**Example 2:**

```
Input: intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]
Output: [2,-1,4,6]
Explanation: The queries are processed as follows:
- Query = 2: The interval [2,3] is the smallest interval containing 2. The answer is 3 - 2 + 1 = 2.
- Query = 19: None of the intervals contain 19. The answer is -1.
- Query = 5: The interval [2,5] is the smallest interval containing 5. The answer is 5 - 2 + 1 = 4.
- Query = 22: The interval [20,25] is the smallest interval containing 22. The answer is 25 - 20 + 1 = 6.
```

**Constraints:**

- `1 <= intervals.length <= 10^5`
- `1 <= queries.length <= 10^5`
- `intervals[i].length == 2`
- `1 <= lefti <= righti <= 10^7`
- `1 <= queries[j] <= 10^7`

## Approach 1: Heap / Sorting

A heap combined with sorted queries will allow us to store intervals based on the size of the interval as well as discard intervals that no longer fit the query, and since the queries will be sorted, we know every subsequent query will also not fit that interval.

If intervals are also sorted, we can also fill our heap up with intervals that only fit the current query, and only ever add to our heap, when the query we are looking at, fits inside the interval. This will minimize heap operation time as well.

Finally, since we are going to look through our queries after we sort them, we will need a hash map to map our queries back to the proper index in the return array, otherwise, we will have the correct answer, but in the improper order.

Time Complexity: $$O(NlogN + QlogQ)$$ where $$N$$ is intervals.length and $$Q$$ is queries.length. The sorting of the intervals and queries array will be the dominant time factor. Other than that we will loop through each query twice (once in our initial algorithm and again at the end to map our queries back to their proper index) and through our intervals array once. Our heap operations will happen in $$logh$$ time, where h is the size of the heap, which will max out at $$logN$$ time.

Space Complexity: $$O(N + Q)$$. We are going to create a heap which will be of size $$N$$ in the worst case. We are going to create a hash map, ($$Q$$) to map our queries back to their proper position in the return array as well as loop through a sorted array of queries, $$Q$$.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        # reverse sort our intervals, to simplify our loop, by allowing
        # us to just pop the smallest intervals instead.
        intervals.sort(reverse=True)
        # initialize our heap and query map. The heap will contain our
        # interval size, and the right boundary (right-left+ 1, right)
        heap = []
        # query map will map our queries to the size of the interval they
        # fit inside. We need to map them, so when we loop back over
        # queries at the end, we can get the answers in O(1) time and
        # maintain the original order.
        query_map = {}
        # loop through all the queries in sorted order. sorted(queries)
        # will create an array of queries that is sorted, and won't touch
        # the original queries array.
        for q in sorted(queries):
            # while we still have intervals, and the smallest intervals
            # left value is <= the current query.
            while intervals and intervals[-1][0] <= q:
                # pop this interval
                left, right = intervals.pop()
                # make sure that right is larger than the query. If it
                # is smaller it won't fit, and since we are looping
                # through the queries in sorted order, all subsequent
                # queries won't fit this interval either.
                if right >= q:
                    # push the size and right boundary to the heap.
                    heapq.heappush(heap, (right - left + 1, right))
            # Pop all intervals that our query no longer fits inside. That
            # is pop any interval where the query is larger than the right
            # boundary.
            while heap and heap[0][1] < q:
                heapq.heappop(heap)
            # Once we popped all smaller intervals, if the interval
            # exists, we can map the query value to that interval size.
            query_map[q] = heap[0][0] if heap else -1
        # rebuild our answer array, our queries array is untouched, so by
        # looping it, and getting the value we stored in our hash map for
        # that query we can create out answer in O(Q) time.
        return [query_map[q] for q in queries]
```

</TabItem>
</Tabs>
