---
title: 'Insertion Sort'
description: 'An sorting algorithm based on picking one element at a time and inserting it in sorted order.'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - insertion sort
---

<TutorialAuthors names="@Shivashish-rwt"/>

## Overview

Insertion sort is one of the sorting algorithms that sort the elements by placing an unsorted element in correct sorted order one at a time.

A sorted [array](../arrays.md) is an array in which elements are sorted either in ascending or descending order, e.g $[1, 2, 3, 4, 5, 6, 7]$.

In a sorted array, all the elements to the left of any element are smaller than that. To make the array sorted, we have to place an element in such a position, so that every element to the left are smaller than that. That is pretty much what we do in a insertion sort.

## Algorithm

1. Pick an element from the array, and store it in a variable $nums$.
2. Now, start comparing the $nums$ with all the elements to the left of it.
3. If the $nums$ is less than the current element shift the current element to right until you find an element smaller than $nums$.
4. Place the $nums$ in current position.
5. Repeat all the above steps until the array is sorted.

For the array $[3,2,5,10,9]$, the steps would be

* First of all, we will pick the first element which is $3$ in our case.
* Now, we will compare with all the elements left to it, in this case there is nothing left to $3$ so, we will do nothing.
* Now, pick the next element which is $2$ and start comparing with all the elements left to it.
* First element left to $2$ is $3$ , which is greater than selected element $2$. So, we will move $3$ to right. If the element left to selected element is less than selected element then, our selected element have reached it's correct position so, we will place selected element there only.
* Now, there is nothing no more element further left to our selected element $2$. So, we will place $2$ at the beginning of array.
* We will proceed with the same way for all the elements. Then, at last we will get our array as sorted.

## Example: [1464. Maximum Product of Two Elements in an Array](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/)

> Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of $(nums[i] - 1) * (nums[j] - 1)$.

The problem wants us to find the maximum value of $(nums[i] - 1) * (nums[j] - 1)$, where $i$ and $j$ are two different indices of the given array.

By looking at the expression, we can observe that its just a product of two numbers of the given array.

We have to maximize the product. Now, in order to maximize the product of two numbers we have to choose the two largest number possible. So, in order to find the maximum value of $(nums[i] - 1) * (nums[j] - 1)$ we just have to take the largest two number in the given array.

Now, we know how can we maximize the value of given expression. But we have to also figure out the how can we get the two largest number present in the given array. Here comes the sorting method, if we sort our array then, the largest number would be present at the last index and second largest number would be present at the second last index of the sorted array. For sorting, we are going to use Insertion Sort Algorithm.

We have figured out the solution of the problem:
* Sort the given array using insertion sort (Refer to the algorithm section).
* Take out the last two elements because those are the largest two elements in our array.
* Put the values in the expression and return it.


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Shivashish-rwt"/>

```cpp
class Solution {
public:
    void insertionSort(vector<int> &arr, int n) {
        for (int i = 1; i < n; i++) {
            // Picking element from array
            int nums = arr[i];
            int j = i - 1;

            // Comparing nums with all the elements left to it
            while (j >= 0 and arr[j] > nums) {
                // Shifting the greater element to the right
                arr[j + 1] = arr[j];
                j--;
            }
            // Placing selected element at correct position
            arr[j + 1] = nums;
        }
    }

    int maxProduct(vector<int>& nums) {
        int n = nums.size();
        insertionSort(nums, n);
        return (nums[n - 1] - 1) * (nums[n - 2] - 1);
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@Shivashish-rwt"/>

```java
class Solution {
    void insertion_sort(int arr[], int n) {
        for (int i = 1; i < n; i++) {
            // Picking element from array
            int nums = arr[i];
            int j = i - 1;

            // Comparing nums with all the elements left to it
            while (j >= 0 and arr[j] > nums) {
                // Shifting the greater element to the right
                arr[j + 1] = arr[j];
                j--;
            }
            // Placing selected element at correct position
            arr[j + 1] = nums;
        }
    }

    public int maxProduct(int[] nums) {
        int n = nums.length;
        insertion_sort(nums, n);
        return (nums[n - 1] - 1) * (nums[n - 2] - 1);
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@Shivashish-rwt"/>

```py
class Solution:
    def insertionSort(arr, n):
        for i in range(1, n):
            # Picking element from array
            nums = arr[i]  
            j = i - 1
              
            # Comparing nums with all the elements left to it  
            while j >= 0 and arr[j] > nums: 
                # Shifting the greater element to the right
                arr[j + 1] = arr[j] 
                j = j - 1

            # Placing selected element at correct position
            arr[j + 1] = nums 
        
    def maxProduct(self, nums: List[int]) -> int:
        Solution.insertionSort(nums,len(nums))
        return (nums[-1] - 1) * (nums[-2] - 1)
```

</TabItem>

</Tabs>

### Time Complexity

Apart from sorting the the given array we are not doing anything in the solution. The insertion sort would take $O(n ^ 2)$ to sort the array. Therefore, the Time complexity is $O(n ^ 2)$

### Space Complexity

We are not using any extra space apart from the array we have to sort. So, the space complexity is $O(1)$.

export const suggestedProblems = [
  {
    "problemName": "1365 - How Many Numbers Are Smaller Than the Current Number",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
    "solutionLink": "../../../solutions/1300-1399/how-many-numbers-are-smaller-than-the-current-number-easy"
  },
  {
    "problemName": "2037 - Minimum Number of Moves to Seat Everyone",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/",
    "solutionLink": ""
  },
  {
    "problemName": "1913 - Maximum Product Difference Between Two Pairs",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/maximum-product-difference-between-two-pairs/",
    "solutionLink": ""
  },
  {
    "problemName": "2089 - Find Target Indices After Sorting Array",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/find-target-indices-after-sorting-array/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />
