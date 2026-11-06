---
description: 'Author: @wkw | https://leetcode.com/problems/count-zero-request-servers'
tags: ['Array', 'Hash Table', 'Sliding Window', 'Sorting']
---

# 2747 - Count Zero Request Servers (Medium)

## Problem Link

https://leetcode.com/problems/count-zero-request-servers

## Problem Statement

You are given an integer `n` denoting the total number of servers and a **2D** **0-indexed**integer array `logs`, where `logs[i] = [server_id, time]` denotes that the server with id `server_id` received a request at time `time`.

You are also given an integer `x` and a **0-indexed** integer array `queries`.

Return *a **0-indexed** integer array* `arr` *of length* `queries.length` *where* `arr[i]` *represents the number of servers that **did not receive** any requests during the time interval* `[queries[i] - x, queries[i]]`.

Note that the time intervals are inclusive.

**Example 1:**

```
Input: n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]
Output: [1,2]
Explanation: 
For queries[0]: The servers with ids 1 and 2 get requests in the duration of [5, 10]. Hence, only server 3 gets zero requests.
For queries[1]: Only the server with id 2 gets a request in duration of [6,11]. Hence, the servers with ids 1 and 3 are the only servers that do not receive any requests during that time period.
```

**Example 2:**

```
Input: n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2, queries = [3,4]
Output: [0,1]
Explanation: 
For queries[0]: All servers get at least one request in the duration of [1, 3].
For queries[1]: Only server with id 3 gets no request in the duration [2,4].
```

**Constraints:**

- `1 <= n <= 1e5`
- `1 <= logs.length <= 1e5`
- `1 <= queries.length <= 1e5`
- `logs[i].length == 2`
- `1 <= logs[i][0] <= n`
- `1 <= logs[i][1] <= 1e6`
- `1 <= x <= 1e5`
- `x < queries[i] <= 1e6`

## Approach 1: Sliding Window + Sorting

We need to answer many queries of the form "how many servers have zero requests in the inclusive interval `[query - x, query]`?". If we process every query independently and scan all logs each time, the complexity becomes too slow because `logs.length` can be up to $10^5$ and  `queries.length` can also be up to $10^5$. So instead of recomputing the interval from scratch for every query, we process queries in increasing time order and maintain a sliding window of logs that are currently inside the valid range.

The first step is to sort logs by time. Each log is `[server_id, time]`. We first sort $logs$ by $time$, so we can move through them from left to right.

The second step is to sort queries, but keep their original indices. The answers must be returned in the original query order, but to use a sliding window efficiently, we want to process queries from smaller time to larger time. So we sort pairs `(query_time, original_index)`. This lets us compute answers in chronological order and place each result back into $res[i]$.

Then, we maintain a sliding window of active logs. For a query time $t$, the valid interval is $[t - x, t]$. We use two pointers:

- $r$: expands the right side of the window and includes every log with time $<= t$
- $l$: shrinks the left side of the window and removes every log with time $< t - x$

After these two adjustments, the logs between $l$ and $r - 1$ are exactly the logs whose times lie in $[t - x, t]$.

At the end, we count how many servers appear in the current window. $cnt[s]$ stores how many logs of server $s$ are currently inside the window. We also keep $d$ which is the number of distinct servers that have at least one request in the current window.

When adding a log for server $j$, we increment $cnt[j]$. If it becomes $1$, that server newly appears in the window, so increment $d$. Similarly, when removing a log for server $j$, we decrement $cnt[j]$. If it becomes $0$, that server no longer appears in the window, so decrement $d$.

Then $d$ would be number of servers that received at least one request in $[t - x, t]$ and $n - d$ number of servers with zero requests in that interval. 

Let $m = len(logs)$ and $q = len(queries)$, the time complexity is $O(m log m + q log q)$ and the space complexity is $O(n + q + m)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def countServers(self, n, logs, x, queries):
        logs.sort(key=lambda log: log[1])
        cnt, res = [0] * (n + 1), [0] * len(queries)
        l = r = d = 0
        for t, i in sorted((v, i) for i, v in enumerate(queries)):
            while r < len(logs) and logs[r][1] <= t:
                j = logs[r][0]
                cnt[j] += 1
                if cnt[j] == 1: d += 1
                r += 1
            while l < r and logs[l][1] < t - x:
                j = logs[l][0]
                cnt[j] -= 1
                if cnt[j] == 0: d -= 1
                l += 1
            res[i] = n - d
        return res
```

</TabItem>
</Tabs>