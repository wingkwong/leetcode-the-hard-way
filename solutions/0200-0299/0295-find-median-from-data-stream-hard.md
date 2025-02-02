---
description: 'Author: @ColeB2 | https://leetcode.com/problems/find-median-from-data-stream/'
tags: [Two Pointers, Design, Sorting, Heap (Priority Queue), Data Stream]
---

# 0295 - Find Median from Data Stream (Hard)

## Problem Link

https://leetcode.com/problems/find-median-from-data-stream/

## Problem Statement

The **median** is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

- For example, for `arr = [2,3,4]`, the median is `3`.
- For example, for `arr = [2,3]`, the median is `(2 + 3) / 2 = 2.5`.

Implement the MedianFinder class:

- `MedianFinder() initializes the `MedianFinder` object.
- `void addNum(int num)` adds the integer `num` from the data stream to the data structure.
- `double findMedian()` returns the median of all elements so far. Answers within `10^-5` of the actual answer will be accepted.

**Example 1:**

```
Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
```

**Constraints:**

- `-10^5 <= num <= 10^5`
- There will be at least one element in the data structure before calling `findMedian`.
- At most `5 * 10^4` calls will be made to `addNum` and `findMedian`.

**Follow up:** Follow up:

- If all integer numbers from the stream are in the range `[0, 100]`, how would you optimize your solution?
- If `99%` of all integer numbers from the stream are in the range `[0, 100]`, how would you optimize your solution?

## Approach 1: 2 Heaps/Priority Queues

We need to maintain a sorted data structure so we can access the middle/middle 2 numbers. A priority queue sorts itself in a way to give us access to the first number in $$O(1)$$ time, and sorts the new inputs in $$O(logn)$$ time.

If we maintain 2 priority queues, a left and right one, where the left one contains all numbers less than the right one and we balanced these 2 priority queues, then we could access the middle numbers extremely quickly, and add to our data structure efficiently as well.

The key being the left data structure must be a max heap, as we want access to the largest number to the left of the middle, and the right data structure must be a min heap, as we want access to the smallest number to the right of the middle.

If we do that, it gives us 2 conditions to add numbers.

1. If left and right are of equal length:
   - Here we must push our number to the right, pop the smallest on the right and push the popped number to the left.
2. The other condition, left is larger:
   - Here we will push our number to the left, pop the largest on the left and push the popped number to the right.

Time Complexity:

- addNum: $$O(logn)$$ it takes $$logn$$ time to push to heaps of sized n.
- findMedian: $$O(1)$$ we can access the numbers we need in constant time.

Space Complexity: $$O(n)$$, we need to push n numbers to our data structure.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class MedianFinder:
    def __init__(self):
        # initialize our heaps.
        # max heap as our left side heap for all numbers < median.
        self.max_l = []
        # min heap as our right heap for all numbers > median.
        self.min_r = []


    def addNum(self, num: int) -> None:
        # Time: O(logn) to push to heaps.
        # if our heaps are equal length, we can pushpop to our right.
        # this will maintain the same length on the right but give
        # us the smallest number on the left to push to our left.
        if len(self.max_l) == len(self.min_r):
            # pushpop the num on the right.
            n = heapq.heappushpop(self.min_r, num)
            # push given number to the left. Note we ust -n as
            # python only implements min heaps and we need a max heap.
            heapq.heappush(self.max_l, -n)
        # left side is larger: Here we pushpop our number to the left.
        # This keeps left the same size as it was, but gives us access
        # to the largest number on the left that we can then push onto
        # the right heap.
        else:
            # pushpop the num on to the left heap. Note we push
            # the -num as it is a min heap implementation being
            # converted to a max heap.
            n = heapq.heappushpop(self.max_l, -num)
            # push the popped number to the right, min heap. Note again
            # we use -n here as all numbers popped off the min heap
            # we flipped to convert the Python min heap to a max heap.
            heapq.heappush(self.min_r, -n)


    def findMedian(self) -> float:
        # Time: O(1)
        # Median is simply going to be the middle/middle 2 numbers.
        # Since our left will always be equal in size or larger, when
        # it is larger, we have odd numbers:
        if len(self.max_l) > len(self.min_r):
            # return largest of our left heap, again return negative
            # value as we pushed the negative number to it to convert
            # it to a max heap.
            return -self.max_l[0]
        # They are even in size: mean of the middle 2.
        else:
            # Note, remember to flip left heaps value.
            return (-self.max_l[0] + self.min_r[0]) / 2
```

</TabItem>
</Tabs>
