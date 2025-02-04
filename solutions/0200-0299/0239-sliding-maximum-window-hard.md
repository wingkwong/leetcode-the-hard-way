---
description: 'Author: @ColeB2 | https://leetcode.com/problems/sliding-window-maximum/'
tags: [Array, Queue, Sliding Window, Heap(Priority Queue), Monotonic Queue]
---

# 0239 - Sliding Window Maximum (Hard)

## Problem Link

https://leetcode.com/problems/sliding-window-maximum/

## Problem Statement

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return _the max sliding window._

**Example 1:**

```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**Example 2:**

```
Input: nums = [1], k = 1
Output: [1]
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `1 <= k <= nums.length`

## Approach 1: Brute Force

It is a hard problem, so the brute force will exceed the time limit, but I think it is a great way to understand the problem. So the brute force approach is simply, we are going to create a sliding window, using a deque for its $$O(1)$$ access to popping at both ends. Then as we slide the window, we remove from the left, insert the incoming number on the right, and add to our return array, the max value inside the window. This will lead to $$O(n*k)$$ as we iterate through all the values in $$O(n)$$ time, and to find the max inside our window will take $$O(k)$$.

Time Complexity: $$O(n*k)$$ which will TLE on leetcode.

Space Complexity: $$O(n)$$

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        #Create initial window size k to make sure we have a window that is k wide.
        window = deque([nums[i] for i in range(k)])
        # Add first value to our maximum sliding window.
        max_window = [max(window)]
        # Loop through remaining numbers from k to end.
        for i in range(k, len(nums)):
            # Remove left value as it leaves window.
            window.popleft()
            # Remove right value as it enters the window.
            window.append(nums[i])
            # Find max and add it to our maximum window.
            max_window.append(max(window))
        return max_window
```

</TabItem>
</Tabs>

## Approach 2: Monotonic Queue

The approach we will use here is the monotonic queue, more specifically, the monotonic increasing queue. Where every value in the queue will be ordered in decreasing order. Meaning the largest values will be on the left, and the smallest on the right. If the incoming number is larger than the numbers on the right, we pop them until it is no longer larger, than we can add it to the queue. We will also use a deque (double ended queue), so we can pop the left side in $$O(1)$$ time for the case when a number needs to exit our sliding window.

So we can solve this if we follow 3 basic rules.

1. Pop from the right side of our queue if the incoming number is larger than the right most number of the queue to maintain the monotonic qualities we need.
2. Pop from the left side of the queue if the index of the left element is no longer within our window.
3. Add the left most value of our queue, the largest value, to our output array.

Time Complexity: $$O(n)$$ as in the worst case, we are going to add each number to the queue once, and then look at it one more time to pop it.

Space Complexity: $$O(n)$$ Space will be $$O(n-k)$$ for our output array, which will hold n-k numbers, plus $$O(k)$$ for our deque.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        # initialize variables, q, which is our double ended monotonic decreasing queue.
        # max_window, which is our output for the question, and l which is the pointer for
        # the left side of our window.
        # Note we will be adding tuples to our deque for this question in the form,
        # (x,y) where the first value x, will be the index inside nums, and the
        # second value y, will be the value of the number at nums(x)
        q = deque([])
        max_window = []
        l = 0
        # loop through the numbers in nums, tracking our right pointer of our window,
        # r, and the incoming number, num.
        for r, num in enumerate(nums):
            # While the queue exists, and incoming number is > than the right most
            # side. Note: We need to check that the q exists to prevent popping from
            # and empty q.
            while q and q[-1][1] < num:
                # pop the smaller number
                q.pop()
            # Add our incoming number to our monotonic queue.
            q.append((r, num))
            # Check left side is within window, and hasn't left it yet.
            if l > q[0][0]:
                # if so, we remove it from our queue.
                q.popleft()
            # Add the largest number in our window to the output array. Since our
            # queue is a monotonic decreasing queue, the largest number will always
            # be on the left side, and since we already popped out the any numbers
            # on the left that aren't in our window, this will be the largest number
            # currently inside our window.
            if r+1 >= k:
                max_window.append(q[0][1])
                # move the pointer for the left side of our window forward.
                l += 1
        # Return the output of our algorithm, the maximum sliding window.
        return max_window

```

</TabItem>
</Tabs>
