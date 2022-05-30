---
title: 'Heap / Priority Queue'
description: 'A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order.'
# hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - heap
  - priority queue
  - algorithm
---

import Authors from '@site/src/components/Authors';
import Table from '@site/src/components/Table';

<Authors names="@heiheihang,@potatochick"/>

## Overview

A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order. It is very efficient in inserting an element to the heap ($$O(logN)$$), and very efficient in removing the first element of the heap ($$O(logN)$$). To know the details of heap, we recommend you to look at [this](https://www.youtube.com/watch?v=t0Cq6tVNRBA).
## Python
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
## C++
In C++, when we are refer to heap, we mostly refer to priority queue. By default, priority queue is a max heap in c++.

Create a max heap:
```cpp 
priority_queue<int> max_heap; // max heap 
```
Create a min heap:
```cpp 
priority_queue<int,vector<int>,greater<int>> min_heap; // min heap 
```
Other related function:
```cpp
priority_queue<int> max_heap; //max heap

//To push element into a priority queue
max_heap.push(1);
max_heap.push(2);
max_heap.push(3);
//max_heap now contains: {3,2,1}

//To push element from a vector into a priority queue
vector<int> vc = {6,5,4};
for (auto x:vc){
  max_heap.push(x);
}
//max_heap now contains: {6,5,4,3,2,1}

//To get element from the priority queue
int top_element = max_heap.top();max_heap.pop();
cout<<top_element; //output: 6
//As we want to access the second largest element later, we need to remove the max element after we access it. 

//To get all element from the priority queue
while(!max_heap.empty()){
  int element = max_heap.top();max_heap.pop();
  cout<<element<<" "; //output: 5 4 3 2 1
}
```
**Advance usage:** Use heap to sort the element by value while containing the index of the elements.

Let's work on a problem ([LeetCode Link](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/))
>you are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of >the civilians. That is, all the 1's will appear to the left of all the 0's in each row.
>
>A row i is weaker than a row j if one of the following is true:
>
>The number of soldiers in row i is less than the number of soldiers in row j.
>Both rows have the same number of soldiers and i < j.
>Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

The idea of this question is 
* count the number of soilders in each row
* sort it
* return the 1st - kth weakest **index** of row

We will use a min heap as we want the result rank from `weakest to strongest`.

Create a min heap which will contains `pair of {number of soldiers in the row, row index}`. By default, c++ will rank the order of element by the first element in the heap. In this case, it will be `number of soldiers`
```cpp
priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq;
```
To access the `pair of {number of soldiers in the row, row index}`
```cpp
pair<int,int> top_element;
top_element=pq.top();pq.pop();
int number_of_soldiers = top_element.first;
int index = top_element.second;
```
My solution:
```cpp
vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        priority_queue<pair<int,int>,vector<pair<int,int>>,greater<>> pq; //min heap
        //push elements to min heap
        for (int i =0;i<mat.size();i++){
            int count= 0;
            for (int j=0;j<mat[0].size();j++){
                if (mat[i][j] == 1) count++;
            }
            pq.push({count,i}); //push pair of {number of soldiers in the row, row index} to the min heap
            //pq.push(make_pair(count,i)); can replace with this line of syntax 
        }
        vector<int> result;
        int count = 0;
        
        //get the index only from the heap and put it in the array
        while(!pq.empty() && count<k){
            count++;
            int ans = pq.top().second;
            pq.pop();
            result.push_back(ans);
        }
        return result;
    }
```
**Additional knowledge:** You can create a `max heap with pair<int,int>` with following syntax
```cpp
priority_queue<pair<int,int>> pq;
```



export const suggestedProblems = [
  {
    "problemName": "0703 - Kth Largest Element in a Stream",
    "difficulty": "Easy",
    "LeetCodeLink": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "SolutionLink": "../../solutions/0700-0799/kth-largest-element-in-a-stream-easy"
  },
  {
    "problemName": "0215 - Kth Largest Element in an Array",
    "difficulty": "Medium",
    "LeetCodeLink": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "SolutionLink": "../../solutions/0200-0299/kth-largest-element-in-an-array-medium"
  },
  {
    "problemName": "0973 - K Closest Points to Origin",
    "difficulty": "Medium",
    "LeetCodeLink": "https://leetcode.com/problems/k-closest-points-to-origin/",
    "SolutionLink": "../../solutions/0900-0999/k-closest-points-to-origin-medium"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />