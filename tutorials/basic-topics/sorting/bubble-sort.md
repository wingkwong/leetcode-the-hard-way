---
title: 'Bubble Sort'
description: 'It is sorting algorithm based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they exist in the wrong order.'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - bubble sort
---

<TutorialCredits authors="@RadhikaChhabra17" contributors="@wkw" />

## Overview

Bubble Sort is a sorting algorithm which compares the adjacent elements and swap their positions if they are placed in wrong order. At max, we need to compare adjacent elements for $$(n - 1)$$ iterations where $n$ is the size of array to be sorted. At the end of each iteration, larger (or smaller, as required) value is sorted and placed at correct positions.

The language that we are using is C++, please refer to your own language of preference if needed.

## Algorithm

Make two nested loop, the 1st loop would be for number of pass the algorithm woud run, total $n-1$ passes and second would be for comparison in that pass. In each pass, one element is sorted (largest or smallest, as required) and placed in correct position and rest are compared in further passes.

If one element is bigger (or smaller in decreasing order case) than its next element, then both should be swapped.

Consider the example of unsorted list and see how the algorithm works.

$$
arr = {5, 1, 4, 2, 8}
$$

![image](https://user-images.githubusercontent.com/77332750/196658633-a3b735de-820b-45de-a0cc-b7933d67d75c.png) We can use a variable $check$ to see if there is swap in one pass or not. If there is no swapping in one pass, they we don't have to check for other pass.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@RadhikaChhabra17"/>

```cpp
void bubblesort(vector<int> &arr) {
	int n = arr.size();
	bool check = true;
	for (int i = 0; i < n - 1 && check; i++) {
		check = false;
		for (int j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
				check = true;
			}
		}
	}
}
```

</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity

For first iteration will run $$(n-1)$$ times. For the second one, it will run $$(n-2)$$ times and so on.

Therefore, the Time Complexity for the worst case $= (n - 1) + (n - 2) + (n - 3) + ... + 1 = O(n^2)$ Use of variable $check$ will reduce the time complexity further as if there is no change in any iterations, next iterations will not occurs, this reduces the time complexity.

### Space Complexity

Since there is no extra space, Space Complexity = $$O(1)$$. This shows that it is an inline sorting.

## Example: [2164. Sort Even and Odd Indices Independently](https://leetcode.com/problems/sort-even-and-odd-indices-independently/)

> You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:
>
> 1.  Sort the values at odd indices of nums in non-increasing order. For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
> 2.  Sort the values at even indices of nums in non-decreasing order. For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
>
> Return the array formed after rearranging the values of nums.

In this problem, we can run two bubble sort. One for even indices with non decreasing order and one for odd indices with non increasing order.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@RadhikaChhabra17"/>

```cpp
class Solution {
public:
    vector<int> sortEvenOdd(vector<int>& nums) {
        // work for even indices
        for (int i = 0; i < nums.size(); i += 2){
            for (int j = i + 2; j < nums.size(); j += 2){
                // sort in non-decreasing order
                if (nums[i] > nums[j]){
                    swap(nums[i], nums[j]);
                }
            }
        }
        // work for odd indicies
        for (int i = 1; i < nums.size(); i += 2){
           for (int j = i + 2; j < nums.size(); j += 2){
               // sort in non-increasing order
                if (nums[i] < nums[j]){
                    swap(nums[i], nums[j]);
                }
           }
        }
        return nums;
    }
};
```

</TabItem>
</Tabs>

export const suggestedProblems = [ { "problemName": "0075 - Sort Colors ", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/sort-colors/", "solutionLink": "../../../solutions/0000-0099/sort-colors-medium" }, { "problemName": "0148 - Sort List", "difficulty": "Medium", "leetCodeLink": "https://leetcode.com/problems/sort-list/", "solutionLink": "../../../solutions/0100-0199/sort-list-medium" } ]

<Table title="Suggested Problems" data={suggestedProblems} />
