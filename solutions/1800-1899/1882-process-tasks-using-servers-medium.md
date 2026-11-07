---
description: 'Author: @wkw | https://leetcode.com/problems/process-tasks-using-servers'
tags: ['Array', 'Heap (Priority Queue)']
---

# 1882 - Process Tasks Using Servers (Medium)

## Problem Link

https://leetcode.com/problems/process-tasks-using-servers

## Problem Statement

You are given two **0-indexed** integer arrays `servers` and `tasks` of lengths `n` and `m` respectively. `servers[i]` is the **weight** of the `i-th` server, and `tasks[j]` is the **time needed** to process the `j-th` task **in seconds**.

Tasks are assigned to the servers using a **task queue**. Initially, all servers are free, and the queue is **empty**.

At second `j`, the `jth` task is **inserted** into the queue (starting with the `0th` task being inserted at second `0`). As long as there are free servers and the queue is not empty, the task in the front of the queue will be assigned to a free server with the **smallest weight**, and in case of a tie, it is assigned to a free server with the **smallest index**.

If there are no free servers and the queue is not empty, we wait until a server becomes free and immediately assign the next task. If multiple servers become free at the same time, then multiple tasks from the queue will be assigned **in order of insertion** following the weight and index priorities above.

A server that is assigned task `j` at second `t` will be free again at second `t + tasks[j]`.

Build an array `ans` of length `m`, where `ans[j]` is the **index** of the server the `j-th` task will be assigned to.

Return *the array* `ans`.

**Example 1:**

```
Input: servers = [3,3,2], tasks = [1,2,3,2,1,2]
Output: [2,2,0,2,1,2]
Explanation: Events in chronological order go as follows:
- At second 0, task 0 is added and processed using server 2 until second 1.
- At second 1, server 2 becomes free. Task 1 is added and processed using server 2 until second 3.
- At second 2, task 2 is added and processed using server 0 until second 5.
- At second 3, server 2 becomes free. Task 3 is added and processed using server 2 until second 5.
- At second 4, task 4 is added and processed using server 1 until second 5.
- At second 5, all servers become free. Task 5 is added and processed using server 2 until second 7.
```

**Example 2:**

```
Input: servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]
Output: [1,4,1,4,1,3,2]
Explanation: Events in chronological order go as follows: 
- At second 0, task 0 is added and processed using server 1 until second 2.
- At second 1, task 1 is added and processed using server 4 until second 2.
- At second 2, servers 1 and 4 become free. Task 2 is added and processed using server 1 until second 4. 
- At second 3, task 3 is added and processed using server 4 until second 7.
- At second 4, server 1 becomes free. Task 4 is added and processed using server 1 until second 9. 
- At second 5, task 5 is added and processed using server 3 until second 7.
- At second 6, task 6 is added and processed using server 2 until second 7.
```

**Constraints:**

- `servers.length == n`
- `tasks.length == m`
- `1 <= n, m <= 2 * 1e5`
- `1 <= servers[i], tasks[j] <= 2 * 1e5`

## Approach 1: Two Heaps

We need to simulate the assignment process while always being able to answer two questions efficiently:
1. Which server is currently free with the smallest `(weight, index)`?
2. If no server is free now, which server becomes available the earliest?

To support both operations, we use two min-heaps:
- `free`: stores `(weight, index)` for all available servers.
- `busy`: stores `(available_time, weight, index)` for all servers that are currently processing a task.

Initially, every server is free, so we put all of them into `free`. Then we process the tasks in order. For task `j` with duration `d`:

1. First, release every server that has finished by time `j`. While the top of `busy` has `available_time <= j`, pop it from `busy` and push `(weight, index)` back into `free`.

2. If `free` is not empty, assign the task immediately. Pop the server with the smallest `(weight, index)` from `free`. Its start time is $j$.

3. Otherwise, all servers are still busy. Pop the top entry from `busy`. This is the server that becomes free the earliest Let that time be $t$. The current task must wait until $t$, so its start time is $t$.

4. After choosing a server, push it back into `busy` with its new finishing time `(start_time + d, weight, index)`

5. Record the chosen server index in the answer.

This exactly matches the queue behavior in the problem:
- tasks are processed in insertion order because we iterate through `tasks` from left to right
- among free servers, we always choose the smallest weight, then the smallest index
- when no server is free, we effectively fast-forward to the earliest finishing time

If multiple servers become free at the same moment, the heap order on `(available_time, weight, index)` ensures they are considered in the correct priority order.

The time complexity is $O((n + m) log n)$, where $n$ is the number of servers and $m$ is the number of tasks, and the space complexity is $O(n)$ auxiliary space for the two heaps, excluding the output array.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def assignTasks(self, servers: list[int], tasks: list[int]) -> list[int]:
        free = [(w, i) for i, w in enumerate(servers)]
        heapify(free)
        busy, res = [], []
        for j, d in enumerate(tasks):
            while busy and busy[0][0] <= j:
                _, w, i = heappop(busy)
                heappush(free, (w, i))
            if free:
                w, i = heappop(free)
                t = j
            else: t, w, i = heappop(busy)
            heappush(busy, (t + d, w, i))
            res.append(i)
        return res
```

</TabItem>
</Tabs>