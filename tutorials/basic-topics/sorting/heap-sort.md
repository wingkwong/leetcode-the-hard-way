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

pseudo code for heapify :
"
heapify(array)
root = array[0]
largest = largest(array[0], array[2*0+1]/array[2*0+2]
if(root != largest)
swap(root, largest) "

Implementation of Heapify: 
Suppose the given array is. arr[] = {1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17}

now, Binary tree of this will somewhere look like this.

                 1
              /     \
           3         5
        /    \     /  \
      4      6   13  10
     / \    / \
   9   8  15 17
Next step here is to convert this into Max Heap,
By refering to the heapify algorithm stated above, we can say,
Total Nodes = 11.
Last Non-leaf node index = (11/2) – 1 = 4.
Therefore, last non-leaf node = 6.

To build the heap, heapify only the nodes: [1, 3, 5, 4, 6] in reverse order.
Heapify 6: Swap 6 and 17.

                 1
              /     \
           3         5
        /    \      /  \
     4      17   13  10
    / \    /  \
  9   8  15   6

Heapify 4: Swap 4 and 9.
                 1
              /     \
           3         5
        /    \      /  \
     9      17   13  10
    / \    /  \
  4   8  15   6
  Heapify 5: Swap 13 and 5.

                 1
              /     \
           3         13
        /    \      /  \
     9      17   5   10
    / \    /  \
 4   8  15   6

Heapify 3: First Swap 3 and 17, again swap 3 and 15.

                 1
             /     \
        17         13
       /    \      /  \
    9      15   5   10
   / \    /  \
 4   8  3   6

Heapify 1: First Swap 1 and 17, again swap 1 and 15, finally swap 1 and 6.

                 17
              /      \
          15         13
         /    \      /  \
       9      6    5   10
      / \    /  \
    4   8  3    1
    
   
Now, let's perform Heap Sort Algorithm for an array.
Suppose the array is arr[] = {4, 10, 3, 5, 1}

Build Complete Binary Tree: Build a complete binary tree from the array.
![image](https://user-images.githubusercontent.com/86758548/193395993-aca6d3d5-b15d-4288-b5d8-9286cebdcccb.png)

Transform into max heap: After that, the task is to construct a tree from that unsorted array and try to convert it into Max Heap.
To transform a heap into a max-heap, the parent node should always be greater than or equal to the child nodes
Here, in this example, as the parent node 4 is smaller than the child node 10, thus, swap them to build a max-heap.
Now, as seen, 4 as a parent is smaller than the child 5, thus swap both of these again and the resulted heap and array should be like this:
![image](https://user-images.githubusercontent.com/86758548/193396040-6c77425f-95ce-4162-abe3-6b0fb8d5e5b4.png)

Perform heap sort: Remove the maximum element in each step (i.e., move it to the end position and remove that) and then consider the remaining elements and transform it into a max heap.

Delete the root element (10) from the max heap. In order to delete this node, try to swap it with the last node, i.e. (1). After removing the root element, again heapify it to convert it into max heap.

Resulted heap and array should look like:
![image](https://user-images.githubusercontent.com/86758548/193396057-0e54f6a4-0751-4bb1-8cd4-d502929efa00.png)

Repeat the above steps and it will look like the following:
![image](https://user-images.githubusercontent.com/86758548/193396076-f7acf966-0ab5-4a12-956a-b86633ddb9ba.png)

ow remove the root (i.e. 3) again and perform heapify.
![image](https://user-images.githubusercontent.com/86758548/193396081-703aefd7-28f3-4a14-9ab5-a8f9b9e3e371.png)

Now when the root is removed once again it is sorted. and the sorted array will be like arr[] = {1, 3, 4, 5, 10}.
![image](https://user-images.githubusercontent.com/86758548/193396091-188f3e0a-c21f-4d60-972a-d278e65f3ac3.png)

That's it! You have Learned the Heap Sort.

Now Coming to the Code part, here is the C++ inplementation of Heap Sort.

C++:

/* To heapify a subtree rooted with node i
   which is an index in arr[].
   n is size of heap */
   
void heapify(int arr[], int N, int i)
{
    // Initialize largest as root
    int largest = i;
 
    // left = 2*i + 1
    int l = 2 * i + 1;
 
    // right = 2*i + 2
    int r = 2 * i + 2;
 
    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
        largest = l;
 
    // If right child is larger than largest
    // so far
    if (r < N && arr[r] > arr[largest])
        largest = r;
 
    // If largest is not root
    if (largest != i) {
        swap(arr[i], arr[largest]);
 
        // Recursively heapify the affected
        // sub-tree
        heapify(arr, N, largest);
    }
}
 
// Main function to perform Heap sort
void heapSort(int arr[], int N)
{
 
    // Build heap (rearrange array)
    for (int i = N / 2 - 1; i >= 0; i--)
        heapify(arr, N, i);
 
    // One by one extract an element
    // from heap
    for (int i = N - 1; i > 0; i--) {
 
        // Move current root to end
        swap(arr[0], arr[i]);
 
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}
 
// A utility function to print array of size n
void printArray(int arr[], int N)
{
    for (int i = 0; i < N; ++i)
        cout << arr[i] << " ";
    cout << "\n";
}

Last but not least, let's try to solve a Leetcode Problem.

Problem Statement : Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Implementation: 
// Here i have used HeapDown and Dequeue for using a different approach, otherwise this could be done using simple two pointer also.

void HeapDown(int index, int size, vector<int>& nums) {
        if (2*index+1 >= size) return;
        
        int leftChild = 2*index+1;
        int rightChild = 2*index+2;
        int chosenChild;
        if (leftChild < size && nums[leftChild] <= nums[rightChild]) chosenChild = leftChild;
        if (rightChild < size && nums[rightChild] <= nums[chosenChild]) chosenChild = rightChild;
                
        if (nums[chosenChild] < nums[index]) {
            swap(nums[chosenChild], nums[index]);
            HeapDown(chosenChild, size, nums);
        }
        else return;
    }
    int Dequeue(vector<int>& nums, int size) {
        if (size == 0) return -999;
        int res = nums[0];
        nums[0] = nums[size-1];
        HeapDown(0, size, nums);
        return res;
    }
    void sortColors(vector<int>& nums) {
        int size = 0;
        vector<int> res;
        for (int i = nums.size()-1; i >= 0; i--) {
            HeapDown(i, nums.size(), nums);
            size++;
        }
        for (int i = 0; i < size+i; i++) {
            res.push_back(Dequeue(nums,size));
            size--;
        }
        nums = res;
    }
