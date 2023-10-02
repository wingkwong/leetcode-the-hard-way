---
title: 'Heap Sort'
description: 'Heap Sort is a comparison-based algorithm that sorts elements using a binary heap. It repeatedly selects the largest element, placing it in the sorted region, and reduces the unsorted region.
'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - heap sort
---

<TutorialAuthors names="@TBC"/>
<Contributors names="@i-am-SnehaChauhan" />

## Overview

Heap Sort is a sorting algorithm that organizes elements using a binary heap. It repeatedly selects the maximum element, placing it in the sorted region, and diminishes the unsorted region. In a heap-sorted array, each element is greater than or equal to its children, ensuring a sorted arrangement.


## Algorithm
Begin by transforming the array into a heap structure using heapify. Then, iteratively remove the top element (root) of the Max-heap, replacing it with the last node in the heap. After each replacement, adjust the heap to maintain its Max-heap property by heapifying the root. Continue this process until the size of the heap is reduced to 1. This step-by-step approach ensures that the largest elements gradually move to the end of the array, resulting in a sorted order.
1. Build Max Heap: Convert the input array into a max heap, a binary tree where the value of each node is greater than or equal to the values of its children.
2. Heapify: Ensure that the heap property is maintained. This means that the value of each node is greater than or equal to the values of its children.
3. Sort the Heap: Extract elements one by one from the heap, starting with the largest (root), and place them at the end of the array.

Before starting using the algorithm, Let's first understand what is "heapify"?

Heapify means creating a heap data structure from a binary tree represented in form of array. We can create a max heap or min heap. Here we will use Max Heap.
One thing to notice here that, we are not making Max heap by conventional method as it will take us O(nlogn) time. we are using heapify which will perform the operation in O(N) time complexity. 

  HEAPIFY ALGORITHM : 
  1. check for left child if it's greater than the parent.
  2. check for right child if it's grater than the parent.
  3. if any of the above is true, make that child as largest.
  4. now, check if "largest" is the same as "i" (starting node), if it is not then swap.
  5. repeat the above process, recursively.

## Example: [912. Sort an Array](https://leetcode.com/problems/sort-an-array/description/)
> Given the array of integers nums, sort the array in ascending order and return it in $O(nlog(n))$ time complexity and with the smallest space complexity possible.

The problem wants us to sort the array using heap-sort.


nums = [5,1,1,2,0,0]

Binary Tree for this array will look like : 

         5
       /   \
      2     1        
     / \    /
    1   0  0

here, as we can see this is a max heap.

Now, next step is, Remove the max element. 
{ Here, removing means, swapping the max element with last one. and then we will call the function again, this time ignoring the last element.}

After this tree will look like,

         0
       /   \
      2     1         here, as we can see this is not a max Heap, so now we will heapify it again.
     / \    
    1   0  
 array now : {0,2,1,1,0,5}

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
array now : {1,0,1,0,2,5}


Same steps repeats.
And finally we will get our sorted array that is {0,0,1,1,2,5}.


<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    void heapify(vector<int>& nums, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && nums[left] > nums[largest]) {
            largest = left;
        }

        if (right < n && nums[right] > nums[largest]) {
            largest = right;
        }

        if (largest != i) {
            std::swap(nums[i], nums[largest]);
            heapify(nums, n, largest);
        }
    }

    void heapSort(std::vector<int>& nums) {
        int n = nums.size();

        // Build max heap
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(nums, n, i);
        }

        // Extract elements from the heap
        for (int i = n - 1; i > 0; i--) {
            std::swap(nums[0], nums[i]);
            heapify(nums, i, 0);
        }
    }

    vector<int> sortArray(vector<int>& nums) {
        heapSort(nums);
        return nums;
    }
};

```

</TabItem>
<TabItem value="java" label="Java">

```java
public class Solution {

    public int[] sortArray(int[] nums) {
        heapSort(nums);
        return nums;
    }

    private void heapify(int[] nums, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && nums[left] > nums[largest]) {
            largest = left;
        }

        if (right < n && nums[right] > nums[largest]) {
            largest = right;
        }

        if (largest != i) {
            swap(nums, i, largest);
            heapify(nums, n, largest);
        }
    }

    private void heapSort(int[] nums) {
        int n = nums.length;

        // Build max heap
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(nums, n, i);
        }

        // Extract elements from the heap
        for (int i = n - 1; i > 0; i--) {
            swap(nums, 0, i);
            heapify(nums, i, 0);
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {12, 11, 13, 5, 6, 7};
        System.out.println("Original Array: " + Arrays.toString(nums));
        solution.sortArray(nums);
        System.out.println("Sorted Array: " + Arrays.toString(nums));
    }
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
class Solution:
    def sortArray(self, nums):
        self.heapSort(nums)
        return nums

    def heapify(self, nums, n, i):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < n and nums[left] > nums[largest]:
            largest = left

        if right < n and nums[right] > nums[largest]:
            largest = right

        if largest != i:
            nums[i], nums[largest] = nums[largest], nums[i]
            self.heapify(nums, n, largest)

    def heapSort(self, nums):
        n = len(nums)

        # Build max heap
        for i in range(n // 2 - 1, -1, -1):
            self.heapify(nums, n, i)

        # Extract elements from the heap
        for i in range(n - 1, 0, -1):
            nums[i], nums[0] = nums[0], nums[i]
            self.heapify(nums, i, 0)

```
</TabItem>

</Tabs>

### Time Complexity
Heap Sort works well for sorting lots of things quickly. It always takes a time proportional to $O(nlogn)$, which is good for big sets of data. 

### Space Complexity
The time complexity of $O(logn)$ for Heap Sort comes from using recursion. Yet, if we implement it iteratively, the extra space needed can be as low as $O(1)$.

export const suggestedProblems = [
  {
    "problemName": "912. Sort an Array",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/sort-an-array/description/",
    "solutionLink": ""
  },
]


<Table title="Suggested Problems" data={suggestedProblems} />