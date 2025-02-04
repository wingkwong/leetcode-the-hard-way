---
description: 'Author: @ColeB2 | https://leetcode.com/problems/task-scheduler/'
tags: [Array, Hash Table, Greedy, Sorting, Heap (Priority Queue), Counting]
---

# 0621 - Task Scheduler (Medium)

## Problem Link

https://leetcode.com/problems/task-scheduler/

## Problem Statement

Given a characters array `tasks`, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer `n` that represents the cooldown period between two **same tasks** (the same letter in the array), that is that there must be at least `n` units of time between any two same tasks.

Return _the least number of units of times that the CPU will take to finish all the given tasks_.

**Example 1:**

```
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation:
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.
```

**Example 2:**

```
Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.
```

**Example 3:**

```
Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation:
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
```

**Constraints:**

- `1 <= task.length <= 10^4`
- `tasks[i]` is upper-case English letter.
- The integer `n` is in the range `[0, 100]`.

## Approach 1: Heap and Queue

Reading the question we see we have 3 prime issues. Being able totrack which task has the most times it needs to be completed, A way to track the time, and a way to track the cooldown of each task.

We can track the number of times a task needs to be completed in a heap. The heap can be created in $$O(nlogn)$$ time, and will update itself when we push tasks back onto the heap in $$O(logk)$$ time, where k is the size of the heap.

We can use an integer to track the time and increment it during each step of a while loop. We can also use a queue to track the cooldown of each task as we know the first task completed, will be the first task off cooldown, and a queue gives us $$O(1)$$ access to appending and popping off the left side.

Time Complexity: $$O(m*log(26))$$ Where m is length of tasks, and 26 is the max size of our priority queue, being all 26 Uppercase English letters.

Space Complexity: $$O(n)$$ to maintain our n sized heap, and up to n sized queue, where n is the length of tasks. Where n can reach up to 26.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # Base cases, return early. No idle time
        if n == 0:
            return len(tasks)
        # Get count, push onto heap array. Don't need to track letter
        # just the actual number of tasks as values.
        # -val as python utilizes a min heap.
        # O(n) time to count tasks and put into our list.
        count = Counter(tasks).values()
        heap = [-val for val in count]
        # Heapify our heap array.
        # O(klogk) time k number of unique tasks.
        heapq.heapify(heap)
        # initilize our timer integer, and our cooldown queue.
        time = 0
        q = deque([])
        # while we have values in our heap and queue, run the loop.
        # O(klogk) N is number of tasks and logk time to push to heap.
        while heap or q:
            # increment time.
            time += 1
            # if our heap has values, run a task
            if heap:
                # pop our task value off heap and add 1.
                val = 1 + heapq.heappop(heap)
                # if our value is non 0 --> add it to the cooldown queue.
                if val:
                    # q formatted as (time, value) where the time is
                    # the time when the cooldown ends, and the value
                    # is the number of tasks left for the letter.
                    q.append((time + n, val))
            # If our heap is empty, skip the cooldown. You can imagine
            # if our cooldown it 10+ or so, we have no need to wait
            # that out for several loops.
            else:
                time = q[0][0]

            # Check our queue isn't empty and that the first task's
            # cooldown is up.
            if q and q[0][0] == time:
                # cooldown is over, pop the time and value
                t, val = q.popleft()
                #  add the value back to the heap.
                heapq.heappush(heap, val)
        # loop finished -> return our time.
        return time
```

</TabItem>
</Tabs>

## Approach 2: Greedy

We know that the task we have to do the most will take the longest and assuming the length of the tasks list isn't larger than the time it takes to finish the mode(most frequent task) task that the answer will be some sort of multiple of $$n * mode$$ where n is the idle time and mode is the most frequent task.

In the 3rd example, given $$6$$ A's $$1$$ of each B through G and an $$n=2$$, that we are going to have at least 6 chunks of 3, where we can perform task A, then we have to sit around until A can come up again. Inside these chunks we can perform the other tasks.

```
A _ _ A _ _ A _ _ A _ _ A _ _ A _ _
A B C|A D E|A F G|A _ _ A _ _ A
```

We also can see that if we run out of letters, the last chunk would not be a full chunk. So that means we will have at least $$mode - 1$$ chunks of $$n + 1$$ size. (We can see each chunk of `A _ _` is $$n + 1$$). We can also see the last chunk will be the count of the mode. In example 3, we only have a 1 mode of 6, but you can see in example 1, we have 2 values that are the mode.

```
A B _ | A B _ | A B |
```

This leaves us with a formula:

$$(mode - 1) * (n + 1) + mode\_count$$ where our $$mode\_count$$ is at least one.

Now obviously if we had more tasks to keep filling chunks beyond A, ie if A was 6, but we still had tasks B-Z instead, then our answer would be the length of tasks.

So we can see all we have to do is count the tasks, find the mode, and find how often the mode occurs in our task list.

Time Complexity: $$O(m)$$ where m is the number of tasks.

Space Complexity: $$O(k)$$ where k is the number of unique tasks to maintain a Counter/Hash map.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # Create our counter, and convert to a list.
        # O(m) time to counter unique tasks then O(k) time to convert
        # k unique values into a list.
        counter = list(Counter(tasks).values())
        # O(k) time to find the mode
        mode = max(counter)
        # O(k) time to count the occurences of the mode.
        mode_count = counter.count(mode)
        # find our answer using our formula
        ans = (mode - 1) * (n + 1) + mode_count
        # return larger of our answer, and length of the task list.
        return max(len(tasks), ans)
```

</TabItem>
</Tabs>
