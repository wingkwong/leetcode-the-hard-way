---
title: 'Heap Sort'
description: ''
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - heap sort
---

<TutorialAuthors names="@TBC"/>





Heap Sort:

* What is Heap Sort - 
  
  "Heap Sort is a comparison based sorting technique based on Binary heap Data Structure."
  
  Advantages :- 
  1.  Time required to perform this algorithm is Logarithmic.
  2.  Memory usage is minimal.

  HEAP SORT ALGORITHM : 
  1. Convert given array into heap data structure using 'heapify'.
  2. Delete the root node of Max Heap one bye one and replace it with last node in Heap.
  3. Heapify the root of the heap.
  4. Repeat the process until size of Heap is greater than 1.

Before starting using the algorithm, Let's first understand what is "heapify"?

Heapify means creating a heap data structure from a binary tree represented in form of array. We can create a max heap or min heap. Here we will use Max Heap.
One thing to notice here that, we are not making Max heap by conventional method as it will take us O(nlogn) time. we are using heapify which will perform the operation in O(N) time complexity. 

  HEAPIFY ALGORITHM : 
  1. check for left child if it's greater than the parent.
  2. check for right child if it's grater than the parent.
  3. if any of the above is true, make that child as largest.
  4. now, check if "largest" is the same as "i" (starting node), if it is not then swap.
  5. repeat the above process, recursively.

Now that we have understood both Heapify and Heap Sort Algoirthm, let us try an example to strengthen the concept.

Problem Statement: 
Given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Link of above leetcode problem : https://leetcode.com/problems/sort-an-array/

Answer : 

alright, let's take the given input 2 array

nums = [5,1,1,2,0,0]

Binary Tree for this array will look like : 
         5
       /   \
      2     1         here, as we can see this is a max heap.
     / \    /
    1   0  0
    
Now, next step is, Remove the max element. 
{ Here, removing means, swapping the max element with last one. and then we will call the function again, this time ignoring the last element.}

After this tree will look like,

         0
       /   \
      2     1         here, as we can see this is not a max Heap, so now we will heapify it again.
     / \    
    1   0  
 array now : {0,2,1,1,0, 5}
 
 After Heapifying:
 
         2
       /   \
      1     1         
     / \    
    0   0  
    
Here, 0 and 2 were swapped and next time, 1 and 0 were also swapped to make it a max heap.
array now : {2,1,1,0,0, 5}

Now, again removing the Max element { swapping in real }

tree becomes : 

         0
       /   \
      1     1    here, as we can see this is not a max Heap, so now we will heapify it again.
     /     
    0     

after Heapifying : 

         1
       /   \
      0     1    Now, in next step wwe will remove the max element again.
     /     
    0   
array now : {1,0,1,0, 2, 5}


Same steps repeats.
And finally we will get our sorted array.

Now as you can see, performing these operations recursively we could achieve our sorted array easily. 

Let's code this algorithm,<br>
For this we will be using 3 functions.<br>
one utility function named Heapify, to heapify a tree ( subtree in reality ) with root node "i".<br>
one function to do the heap sort.<br>
one final function to sort the array.<br>
<br>

```
 void heapify( vector<int> &arr, int n, int i){
     int largest = i;
     int l = 2*i + 1;
     int r = 2*i + 2;
  if(l<n and arr[l] > arr[largest])
    largest = l;
  if(r<n and arr[r] > arr[largest])
    largest = r;
  if(largest!=1){
    swap(arr[i], arr[largest]);
    heapify(arr,n,largest);
  }
 }
 
 
 // this function will start from n/2-1, because (n/2-1)th node will be the last non-leaf node...after that all nodes will be leaf nodes, which eventually means they are already max heap.

void buildHeap(vector<int>& arr, int n){
        for(int i=n/2-1; i>=0; i--){
            heapify(arr,n,i);
        }
    }

vector<int> sortArray(vector<int>& arr) {
        int n = arr.size();
        buildHeap(arr,n);<br>
        for(int i=n-1; i>0; i--){
            swap(arr[0],arr[i]);
            heapify(arr,i,0);
        }
        return arr;
    }
```


