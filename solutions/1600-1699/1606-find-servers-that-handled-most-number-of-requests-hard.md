---
title: 'LeetCode 1606 – Find Servers That Handled Most Number of Requests'
description: 'Find the busiest servers using two min-heaps to track completion times and assign requests in cyclic order.'
tags: ['Array', 'Heap (Priority Queue)', 'Simulation', 'Ordered Set']
---

# 1606 - Find Servers That Handled Most Number of Requests (Hard)

## Problem Link

https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests

## Problem Statement

You have `k` servers numbered from `0` to `k-1` that are being used to handle multiple requests simultaneously. Each server has infinite computational capacity but **cannot handle more than one request at a time**. The requests are assigned to servers according to a specific algorithm:

- The `ith` (0-indexed) request arrives.
- If all servers are busy, the request is dropped (not handled at all).
- If the `(i % k)th` server is available, assign the request to that server.
- Otherwise, assign the request to the next available server (wrapping around the list of servers and starting from 0 if necessary). For example, if the `ith` server is busy, try to assign the request to the `(i+1)th` server, then the `(i+2)th` server, and so on.

You are given a **strictly increasing** array `arrival` of positive integers, where `arrival[i]` represents the arrival time of the `ith` request, and another array `load`, where `load[i]` represents the load of the `ith` request (the time it takes to complete). Your goal is to find the **busiest server(s)**. A server is considered **busiest** if it handled the most number of requests successfully among all the servers.

Return *a list containing the IDs (0-indexed) of the **busiest server(s)***. You may return the IDs in any order.

**Example 1:**

```
Input: k = 3, arrival = [1,2,3,4,5], load = [5,2,3,3,3] 
Output: [1] 
Explanation: 
All of the servers start out available.
The first 3 requests are handled by the first 3 servers in order.
Request 3 comes in. Server 0 is busy, so it's assigned to the next available server, which is 1.
Request 4 comes in. It cannot be handled since all servers are busy, so it is dropped.
Servers 0 and 2 handled one request each, while server 1 handled two requests. Hence server 1 is the busiest server.
```

**Example 2:**

```
Input: k = 3, arrival = [1,2,3,4], load = [1,2,1,2]
Output: [0]
Explanation: 
The first 3 requests are handled by first 3 servers.
Request 3 comes in. It is handled by server 0 since the server is available.
Server 0 handled two requests, while servers 1 and 2 handled one request each. Hence server 0 is the busiest server.
```

**Example 3:**

```
Input: k = 3, arrival = [1,2,3], load = [10,12,11]
Output: [0,1,2]
Explanation: Each server handles a single request, so they are all considered the busiest.
```

**Constraints:**

- `1 <= k <= 1e5`
- `1 <= arrival.length, load.length <= 1e5`
- `arrival.length == load.length`
- `1 <= arrival[i], load[i] <= 1e9`
- `arrival` is **strictly increasing**.

## Approach 1: Two Heaps

For request $i$, we need the first free server in cyclic order starting from $i \%k$. To track this, we can map each server to a position in a repeating sequence. When a server `ser` becomes free, we calculate its next position as $i + (ser - i) \%k$, which essentially accounts for the distance from the preferred server including any wraparound.

For example, if $k = 4$ and $i = 6$, the search order is $2, 3, 0, 1$. If servers $0$ and $3$ are free, their positions would be $8$ and $7$. Popping the smallest value (7) selects server $7 \%4 = 3$. The other positions remain valid for future requests since each server maintains a unique spot in the sequence.

At the start, all servers are free at positions $0$ through $k-1$. For each request, first check the `busy` min-heap and move any servers that finished by `arrival[i]` back into the `free` heap using their calculated positions. If the `free` heap is empty, the request is dropped. Otherwise, pop the smallest position, identify the server via $\%k$, increment its request count, and add it to the `busy` heap with a finish time of `arrival[i] + load[i]`. Once all requests are processed, return all servers that handled the maximum number of requests.

The time complexity is $O(k + n \log(k))$ and the space complexity is $O(k)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def busiestServers(self, k: int, arrival: list[int], load: list[int]) -> list[int]:
        free, busy = list(range(k)), []
        ctn = [0] * k
        for i, time in enumerate(arrival):
            while busy and busy[0][0] <= time:
                _, ser = heappop(busy)
                heappush(free, i + (ser - i) % k)
            if free:
                ser = heappop(free) % k
                ctn[ser] += 1
                heappush(busy, (time + load[i], ser))
        best = max(ctn)
        return [i for i in range(k) if ctn[i] == best]
```

</TabItem>
</Tabs>
