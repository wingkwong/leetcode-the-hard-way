---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/kth-largest-element-in-a-stream/
tags: [Tree, Design, Binary Search Tree, Heap (Priority Queue), Binary  Tree, Data Stream]
---

# 0703 - Kth Largest Element in a Stream (Easy)

## Problem Link

https://leetcode.com/problems/kth-largest-element-in-a-stream/

## Problem Statement

Design a class to find the `kth` largest element in a stream. Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

Implement `KthLargest` class:

* `KthLargest(int k, int[] nums)` Initializes the object with the integer `k` and the stream of integers `nums`.
* `int add(int val)` Appends the integer `val` to the stream and returns the element representing the `kth` largest element in the stream.

**Example 1:**

```
Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8 
```

**Constraints:**

* `1 <= k <= 10^4`
* `0 <= nums.length <= 10^4`
* `-10^4 <= nums[i] <= 10^4`
* `-10^4 <= val <= 10^4`
* At most `10^4` calls will be made to `add`.
* It is guaranteed that there will be at least `k` elements in the array when you search for the `kth` element.

## Approach 1: Priority Queue

We can use priority queue to handle the sort order and only maintain at most k element. Return to the top, which is the k-th element in a stream.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class KthLargest {
public:
    KthLargest(int k, vector<int>& nums) {
        // add val to priority queue
        for (auto x : nums) pq.push(x);
        // here the queue is sorted
        // only keep at most k elements
        // pop out first pq.size() - k elements
        while (pq.size() > k) pq.pop();
        K = k;
    }
    
    int add(int val) {
        // add val to priority queue
        pq.push(val);
        // here the queue is sorted
        // only keep at most k elements
        // pop out first pq.size() - k elements
        while (pq.size() > K) pq.pop();
        return pq.top();
    }
private:
    int K;
    // smaller first
    priority_queue<int, vector<int>, greater<int>> pq;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */
```

</TabItem>


<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class KthLargest:
    # Utilizes Pythons HeapQ --> Minheap implementation
    # Time Complexity: O(n*logk + A*logk) where n is the length of nums,
    # as we have to loop through all the nums initially to create our
    # heap. A is the number of calls made to self.add method.
    # and logk is the time it takes to add values to the heap.
    # Space Complexity: O(k). Only need to maintain a k-sized heap.
    def __init__(self, k: int, nums: List[int]):
        # Python heap utilizes an array, initialize empty array
        self.heap = []
        # initialize self.k for access inside our add method.
        self.k = k
        # loop through each num, calling self.add to add to heap.
        for num in nums:
            self.add(num)
        

    def add(self, val: int) -> int:
        # length of heap < k --> push it to the heap.
        if len(self.heap) < self.k:
            # Python heapq, works by calling heapq.heappush and
            # supplying 2 parameters, the heap you want to add values
            # to and the number you want to add to the heap.
            heapq.heappush(self.heap, val)
        # Heap already has k elements we push then pop.
        else:
            # Similar to heappush, takes a heap and a number to push
            # to the heap. heappushpop pushes first, then pops, and in
            # Python it is more efficient than using
            # heappush first, then using heappop.
            heapq.heappushpop(self.heap, val)
        # return the first/top value of our heap.
        return self.heap[0]
```

</TabItem>
</Tabs>