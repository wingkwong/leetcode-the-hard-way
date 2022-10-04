---
title: 'Selection Sort'
description: 'Selection sort is an comparison sorting algorithm that finds the minimum value each time.'
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - selection sort
---

<TutorialAuthors names="@Bobliuuu"/>

## Overview

Selection sort is a commonly used comparison-based sorting algorithm, that is also very simple to implement. 
Selection sort works on the premise that two subarrays are maintained: one which is **sorted**, and one which is **unsorted**. 
Each step, one more element of the array gets sorted, until the entire array is sorted. 

- **subarray**: A subsequence or slice of an array

## Algorithm

The concept of selection sort is that each time, we find the minimum element in the unsorted subarray, and we put it at the end of the sorted subarray. 
Consider an array with n distinct elements. Looping n times, we
- Find the minimum element in the unsorted subarray
- Move that element to the end of the sorted subarray

![1](https://he-s3.s3.amazonaws.com/media/uploads/2888f5b.png)

The reason the algorithm works is that each time, the smallest value in the unsorted array is the largest value in the sorted array. 

## Example: [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

An array of integers `nums` is given, with n values that are either 0, 1, or 2 (representing red, white, or blue). We have to sort them in place so that adjacent elements are together.
In order to achieve this, we can use selection sort. 

## Pseudocode

We loop through the array once. 
For each iteration, we keep the index of seperation of the sorted and unsorted subarrays. 
Then, we loop through the array, keeping the index of the minimum element. 
Finally, we move that element to the end of the sorted subarray, and increment the index of seperation.
We keep doing this until we reach end of the array, and print out the array. 

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Bobliuuu"/>

```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int N = nums.size(); 
        for (int i = 0; i < N - 1; i++){
            int midx = i;
            for (int j = i+1; j < N; j++){
                if (nums[j] < nums[midx]){
                    midx = j;
                }
            }
            swap(nums[i], nums[midx]);
        }
    }
}
```

</TabItem>
</Tabs>

### Complexity

The time complexity of this program is $$O(n^2)$$, since we run two for loops to iterate through the array. 
The space complexity of this program is $$O(1)$$, since we don't need any extra space other than our original array. 

Now that you know a bit more about how selection sort works, try these problems! 

## Suggested Problems

export const suggestedProblems = [
    {
        "problemName": "0075 - Sort Colors",
        "difficulty": "Easy",
        "leetCodeLink": "https://leetcode.com/problems/sort-colors/",
        "solutionLink": "0075-sort-colors-medium.md"
    },
    {
        "problemName": "0268 - Missing Number",
        "difficulty": "Easy",
        "leetCodeLink": "https://leetcode.com/problems/missing-number/",
        "solutionLink": ""
    },
    {
        "problemName" : "0448 - Find All Numbers Disappeared In An Array",
        "difficulty" : "Easy",
        "leetCodeLink" : "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        "solutionLink" : ""
    },
]

<Table title="Suggested Problems" data={suggestedProblems} />