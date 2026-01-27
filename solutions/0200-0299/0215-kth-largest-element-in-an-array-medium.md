---
description: 'Author: @wkw, @ColeB2, @jit | https://leetcode.com/problems/kth-largest-element-in-an-array/'
tags: [Priority Queue, Quick Select]
---

# 0215 - Kth Largest Element in an Array (Medium)

## Problem Link

https://leetcode.com/problems/kth-largest-element-in-an-array/

## Problem Statement

Given an integer array `nums` and an integer `k`, return _the_ `kth` _largest element in the array_.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

**Example 1:**

```
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
```

**Example 2:**

```
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
```

**Constraints:**

- `1 <= k <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`

## Approach 1: Priority Queue

When we look for `k-th` elements, we can think of Priority Queue as it internally sorts the container. We can check if the size exceeds $k$.

Time Complexity: $$O(nlogk)$$. Where n is the number of values in the nums array, and k is the size of our heap. We must loop through all numbers in nums which takes $$n$$ time, but our heap can be maintained in $$logk$$ time.

Space Complexity: $$O(k)$$. Where $$k$$ is the size of our heap, as we are only putting $$k$$ values inside our heap.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // k-th largest / smallest -> think of priority queue
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int> pq;
        // push the elements to priority queue
        for (auto x : nums) pq.push(x);
        // e.g. [3,2,1,5,6,4] -> 1,2,3,4,5,6 (top)
        // then we remove top k - 1 elements
        for (int i = 0; i < k - 1; i++) pq.pop();
        // e.g. [3,2,1,5,6,4] -> 1,2,3,4,5,6 (top)
        // k = 2 -> we pop 2 - 1 = 1 element
        // 1,2,3,4,5 (top)
        // return the top which is the k-th largest element
        return pq.top();
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Python heapq is a minheap. Perfect for the question, as the
    # the smallest value will always be at the top, and the first
    # value popped off during a pop/pushpop. Leaving only the k largest
    # inside the heap.
    # Time: O(nlogk)
    # Space: O(k)
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # initialize our heap
        heap = []
        # loop through all numbers in nums
        for num in nums:
            # < k values in heap we can just push
            if len(heap) < k:
                # python uses heapq module to build heaps
                # heapq methods typically take to args
                # (heap, value) where the heap is the list we are using
                # as a heap, and the value is the value we are putting
                # into the heap.
                heapq.heappush(heap, num)
            else:
                # => k we push onto the heap then pop.
                heapq.heappushpop(heap, num)
        # return first value inside our heap.
        return heap[0]
```

</TabItem>
</Tabs>

## Approach 2: STL

The following STL functions can partially sort to solve the problem.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        partial_sort(nums.begin(), nums.begin() + k, nums.end(), greater<int>());
        return nums[k - 1];
    }
};
```

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        nth_element(nums.begin(), nums.begin() + k - 1, nums.end(), greater<int>());
        return nums[k - 1];
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return heapq.nlargest(k, nums)[-1]
```

</TabItem>

<TabItem value="rust" label="Rust">
<SolutionAuthor name="@jit"/>

```rs
impl Solution {
    pub fn find_kth_largest(mut nums: Vec<i32>, k: i32) -> i32 {
        let n = nums.len();
        *nums.select_nth_unstable(n - k as usize).1
    }
}
```

</TabItem>
</Tabs>

## Approach 3: Quick Select

Quick Select is a partitioning pattern using in Quick Sort, which can be done on $$O(n)$$ time on average.

First, we need to choose a pivot value, and partition the values around the pivot (That is the larger numbers left, smaller on the right). If after the partitioning stage, we have $$k-1$$ elements to the left of our partition ($$k-1$$ because we are 0 indexed), it means the value at our partition index is the kth largest. If not we have to adjust our left or right pointers. Either our partition index is less than k, then we move our left pointer up $$partition + 1$$ or our right down to $$partition - 1$$.

Time Complexity: Average Case $$O(n)$$. Where n is the number of values. By selecting a random pivot, we can avoid malicious inputs, and in general solve the question on $$O(n)$$ time. Whereas if we select the worst partition at each iteration, we will approach $$O(n^2)$$ time.

Space: $$O(1)$$. We can do this in place and just swap elements around.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # partitioning function. 2 parameters, l and r to represent
        # left and right pointers inside our nums array.
        def partition(l, r):
            # pivot, select random value between l,r.
            pivot = random.randint(l,r)
            # swap our pivot to the end of our partition.
            nums[r], nums[pivot] = nums[pivot], nums[r]
            # initialize index to swap with as we loop.
            i = l
            # track our pivot value, swapped with right side already.
            pivot_value = nums[r]
            # loop from l to r + 1. Note r + 1 will swap our pivot
            # back in place for us.
            for j in range(l, r + 1):
                # number looking at is larger than our pivot
                if nums[j] >= pivot_value:
                    # swap it to ith position
                    nums[i], nums[j] = nums[j], nums[i]
                    # increment our i swap index pointer.
                    i += 1
            # return - 1 as that was the last swapped pointer.
            return i - 1
        # start algorithm
        # initialize left and right pointers to 0, n-1
        # initialize our partition to n.
        left, right, p = 0, len(nums) - 1, len(nums)
        # run our algorithm until our partition index reaches k-1
        # k - 1 means k elements inside our partition. We use k - 1 as
        # we are 0th-indexed.
        while p != k - 1:
            # Find our partition p
            p = partition(left,right)
            # too few elements inside our partition
            if p < k - 1:
                # move left pointer up
                left = p + 1
            # too many
            elif p > k - 1:
                # move right pointer down.
                right = p - 1
        # p == k - 1, it means our partition is the kth largest.
        return nums[p]
```

</TabItem>
</Tabs>
