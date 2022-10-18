---
title: 'Selection Sort'
description: 'Selection sort is an comparison sorting algorithm that finds the minimum value each time.'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - selection sort
---

<TutorialAuthors names="@Bobliuuu"/>

## Overview

Selection sort is a commonly used comparison-based sorting algorithm. It's very simple to implement and works on the premise that two subarrays are maintained: one which is **sorted**, and one which is **unsorted**. In each step, one more element of the array gets sorted, until the entire array is sorted. 

## Algorithm

The concept of selection sort is that each time, we find the minimum element in the unsorted subarray, and we put it at the end of the sorted subarray.

Consider an array with n distinct elements. Looping $n$ times, we

- find the minimum element in the unsorted subarray
- move that element to the end of the sorted subarray

The reason the algorithm works is that each time the smallest value in the unsorted array is the largest value in the sorted array. 

## Example: [0075 - Sort Colors](https://leetcode.com/problems/sort-colors/)

> An array of integers $nums$ is given, with n values that are either $0$, $1$, or $2$ (representing red, white, or blue). We have to sort them in place so that adjacent elements are together.

In order to achieve this, we can use selection sort. 

### Pseudocode

- We loop through the array once.
- For each iteration, we keep the index of seperation of the sorted and unsorted subarrays.
- Then, we loop through the array, keeping the index of the minimum element.
- Finally, we move that element to the end of the sorted subarray, and increment the index of seperation.
- We keep doing this until we reach the end of the array, and print out the resulting array. 

### Dry Run

Let's see the algorithm work on the first test case: $nums = [2, 0, 2, 1, 1, 0]$ and $n = 6$.

In the first iteration, we find the minimum value from index $0$ to $5$, which is $0$. This value is moved to the $0$-th index. <br/>
The array is now $nums = [0, 2, 2, 1, 1, 0]$. 

In the second iteration, we find the minimum value from index 1 to 5, which is 0. This value is moved to the 1st index. <br/>
The array is now $nums = [0, 0, 2, 1, 1, 2]$. 

In the third iteration, we find the minimum value from index 2 to 5, which is 1. This value is moved to the 2nd index. <br/>
The array is now $nums = [0, 0, 1, 2, 1, 2]$. 

In the fourth iteration, we find the minimum value from index 3 to 5, which is 1. This value is moved to the 3th index. <br/>
The array is now $nums = [0, 0, 1, 1, 2, 2]$. 

In the fifth iteration, we find the minimum value from index 4 to 5, which is 2. This value is moved to the 4th index. <br/>
The array is still $nums = [0, 0, 1, 1, 2, 2]$. 

In the last iteration, we find the minimum value from index 5 to 5, which is 2. This value is moved to the 5th index. <br/>
The array is still $nums = [0, 0, 1, 1, 2, 2]$. 

Now, let's look at the solution to the example question.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Bobliuuu"/>

```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int n = nums.size(); 
        // Loop once through the array, keeping the seperation index of the sorted and unsorted subarray
        for (int i = 0; i < n - 1; i++) {
            // index of mini element
            int midx = i;
            // Loop through array again to find the index of the minimum value in the unsorted subarray
            for (int j = i + 1; j < n; j++) {
                // If the current element is smaller than the current minimum element
                if (nums[j] < nums[midx]) {
                    // Keep the index of the actual minimum element
                    midx = j;
                }
            }
            // Swap the minimum value with the current array element (the end of the sorted subarray)
            swap(nums[i], nums[midx]);
        }
    }
};
```

</TabItem>
</Tabs>

### Complexity

The time complexity of this program is $$O(n ^ 2)$$, since we run two for loops to iterate through the array. 

The space complexity of this program is $$O(1)$$, since we don't need any extra space other than our original array. 

export const suggestedProblems = [
    {
        "problemName": "0075 - Sort Colors",
        "difficulty": "Easy",
        "leetCodeLink": "https://leetcode.com/problems/sort-colors/",
        "solutionLink": "../../../solutions/0000-0099/sort-colors-medium"
    },
    {
        "problemName": "0268 - Missing Number",
        "difficulty": "Easy",
        "leetCodeLink": "https://leetcode.com/problems/missing-number/",
        "solutionLink": "../../../solutions/0200-0299/missing-number-easy"
    },
    {
        "problemName" : "0448 - Find All Numbers Disappeared In An Array",
        "difficulty" : "Easy",
        "leetCodeLink" : "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        "solutionLink" : ""
    },
]

<Table title="Suggested Problems" data={suggestedProblems} /> 