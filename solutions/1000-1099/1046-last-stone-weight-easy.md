---
description: 'Author: @ColeB2, @wkw | https://leetcode.com/problems/last-stone-weight/'
tags: [Array, Heap (Priority Queue)]
---

# 1046 - Last Stone Weight (Easy)

## Problem Link

https://leetcode.com/problems/last-stone-weight/

## Problem Statement

You are given an array of integers `stones` where `stones[i]` is the weight of the `ith` stone.

We are playing a game with the stones. On each turn, we choose the **heaviest two stones** and smash them together. Suppose the heaviest two stones have weights `x` and `y` with `x <= y`. The result of this smash is:

- If `x == y`, both stones are destroyed, and
- If `x != y`, the stone of weight `x` is destroyed, and the stone of weight `y` has new weight `y - x`.

At the end of the game, there is **at most one** stone left.

Return _the weight of the last remaining stone_. If there are no stones left, return `0`.

**Example 1:**

```
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
```

**Example 2:**

```
Input: stones = [1]
Output: 1
```

**Constraints:**

- `1 <= stones.length <= 30`
- `1 <= stones[i] <= 1000`

## Approach 1: Heap / Priority Queue

We can see that after two stones break we need to replace them back in the array. Where depends on how much they broke down, and it isn't always guaranteed to be the end. This points toward a data structure that allows us to restructure efficiently, and that would be a Max Heap.

A max heap is a tree structure that keeps the largest value on top, and for each child the same holds true. When we pop from a heap, the heap will restructure itself to maintain the same dynamics. So 2 pops from a max heap will result in us receiving the 2 largest stones. Pushing back on the heap will place the stones in their correct spot.

Note: A lot of built-in heaps are min heap implementations, to utilize them, we must push the negative weights of the stones on the heap to maintain a max heap structure.

Time Complexity: $$O(nlogn)$$. Where $$n$$ is the size of the heap/stones array. It will take $$n*log(n)$$ time to create the initial heap, then up to $$log(n)$$ time to place the broken-down stones back into the heap.

Space Complexity: $$O(n)$$. Where $$n$$ is the size of the stones array, to maintain our heap data structure with up to $$n$$ stones inside.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        # initialize an empty array to hold our heap, python uses
        # arrays, and the heapq module to handle min Heaps. We will
        # use negative values of the stones to convert to a max heap.
        heap = []
        # loop through each stone in our stones array
        for stone in stones:
            # push the negative value of the stone onto the heap.
            # heappush takes the heap array, and the value to push
            # onto the heap. -stone will allow the min heap to act
            # as a max heap instead.
            heapq.heappush(heap, -stone)
        # We need at least 2 stones to smash together, so we loop while
        # our heap has at least 2 stones inside.
        while len(heap) >= 2:
            # pop both stones off, the 1st is the largest stone.
            stone1 = heapq.heappop(heap)
            stone2 = heapq.heappop(heap)
            # if the second stone is bigger, since we are using negative
            # values, the second being bigger, means they are not
            # the same size, and the first is larger. This means
            # the stone won't be completely destroyed, so we need
            # co calculate the difference to add onto the heap.
            if stone2 > stone1:
                # Add onto the heap the difference of stones 1 and 2.
                heapq.heappush(heap, stone1 - stone2)
        # remembering that we used negative values of the stones, we
        # must return the absolute value of the remaining stone if it
        # exists, else 0 as the question asks.
        return abs(heap[0]) if heap else 0
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        // initialize a priority_queue in c++
        priority_queue<int> pq;
        // push the positive value of the stone onto the priority_queue
        for (int x : stones) pq.push(x);
        // We need at least 2 stones to smash together, so we loop while
        // our heap has at least 2 stones inside.
        while (pq.size() >= 2) {
            // pop both stones off, the 1st is the largest stone.
            int y = pq.top(); pq.pop();
            int x = pq.top(); pq.pop();
            // if the stones are not same, then the stone of weight x is detroyed
            // and the stone of weight y has new weight y - x.
            if (x != y) pq.push(y - x);
        }
        // if there are no stones left, return 0
        if (pq.size() == 0) return 0;
        // return the weight of the last remaining stone
        return pq.top();
    }
};
```

</TabItem>
</Tabs>
