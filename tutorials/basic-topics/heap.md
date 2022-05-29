---
title: 'Heap / Priority Queue'
description: 'A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order.'
hide_table_of_contents: true
---

> This tutorial is written by @heiheihang

A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order. It is very efficient in inserting an element to the heap ($$O(logN)$$), and very efficient in removing the first element of the heap ($$O(logN)$$). To know the details of heap, we recommend you to look at [this](https://www.youtube.com/watch?v=t0Cq6tVNRBA).

By default, when we refer to heap, most implementations are min-heaps. This means the first element is always the smallest element.

In Python, you can use the following functions to interact with a heap:

```python
heap = [] #to initialize a heap, it is just a list

heappush(heap, 3) # to add an element to the heap, we can use heappush
#heap = [3] 

heappush(heap, 5)
#heap = [3, 5] , the heap always keeps the smallest element in front!

smallest_element_from_heap = heappop(heap) #we can remove the first element from heap with heappop
#heap = [5] , 3 is removed
#smallest_element_from_heap = 3  #after heappop, it is stored in the variable
```

That's it! These are the operations you need for using heap in LeetCode.

There is one more trick to learn for using heap. How do we tweak the heap to make it a max-heap?

```python
max_heap = []

#we want to store 10, but change it to -10 for max-heap
heappush(max_heap, -10)
#max_heap = [-10]


#we want to store 7, but change it to -7 for max-heap
heappush(max_heap, -7)
#max_heap = [-10, -7]

max_element_from_heap = -1 * heappop(heap)
#heap = [-7], -10 is removed
#max_element_from_heap = 10, we have retrieved the largest element from the heap
```

Let's work on a problem ([LeetCode Link](https://leetcode.com/problems/last-stone-weight/))

> You are given an array of integers `stones` where `stones[i]` is the weight of the `ith` stone.
>
> We are playing a game with the stones. On each turn, we choose the **heaviest two stones** and smash them together. Suppose the heaviest two stones have weights `x` and `y` with `x <= y`. The result of this smash is:
>
> * If `x == y`, both stones are destroyed, and
> * If `x != y`, the stone of weight `x` is destroyed, and the stone of weight `y` has new weight `y - x`.
>
> At the end of the game, there is **at most one** stone left.
>
> Return _the smallest possible weight of the left stone_. If there are no stones left, return `0`.

I want you to think about these questions before working on it:

* Should we use a min-heap or a max-heap?
* If it is a max-heap, how to we "store" the numbers?
* What do we have to check before retrieving the two heaviest stones?

As we need to get the two heaviest stones in every iteration, we should use a max-heap for quick access of the largest elements. To use a max-heap, we can store the negative of the integer. We have to check if there are at least two more stones in the heap before retrieving the two heaviest stones.

```python
def lastStoneWeight(self, stones: List[int]) -> int:
        
        #initialize the max_heap
        max_heap = []
        
        #add elements to max_heap
        for stone in stones:
            #store its negative to keep the most positive stone in front
            heappush(max_heap, -stone)
            
        #we have to check if there are at least two stones in the heap
        while(len(max_heap) > 1):
            
            #pop the largest element from max_heap, multiplied by -1
            largest_stone = -1 * heappop(max_heap)
            
            #pop the second largest element (now largest) from max_heap, multiplied by -1
            second_largest_stone = -1 * heappop(max_heap)
            
            #push the new stone if they are not equal
            if(largest_stone != second_largest_stone):
                new_stone = largest_stone - second_largest_stone
                #remember to store its negative
                heappush(max_heap, -new_stone)
        
        #if there is a stone left, return the stone, its positive value
        if(max_heap):
            return -max_heap[0]
            
        #if no stone left, return 0
        return 0
```

### Suggested Problem

* 0703 - Kth Largest Element in a Stream (Easy) [(LeetCode Link)](https://leetcode.com/problems/kth-largest-element-in-a-stream/)
* 0215 - Kth Largest Element in an Array (Medium) [(LeetCode Link)](https://leetcode.com/problems/kth-largest-element-in-an-array/)
* 0973 - K Closest Points to Origin (Medium) [(LeetCode Link)](https://leetcode.com/problems/k-closest-points-to-origin/)
