---
title: 'Tim Sort'
description: ''
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - tim sort
---

<TutorialAuthors names="@Bobliuuu"/>

## Overview

Timsort is a fast stable sorting algorithm based upon both [insertion sort]() and [merge sort](). The algorithm was first created by Tim Peters in 2002, and is now being used in Python’s `sort()` and Java’s `Arrays.sort()`. 
The reason this algorithm is so fast is because it leverages the benefits of both merge sort and insertion sort. Let’s see how it works!

## Algorithm

Timsort works by first splitting an array into **runs**. A **run** is a subarray of data spliced from the original array. 
These runs are generated using merge sort (each run has a standard size of 32-64), and insertion sort is used to sort each run. Finally, merge sort combines these sorted arrays together recursively. 

Basically, to run timsort: 

We split the array into runs.
For each run, run insertion sort to sort that section.
Merge runs together one by one using merge sort, by comparing values in each sorted list and combining them. 

This algorithm works because each run is sorted using insertion sort, and merge sort makes sure that each subarray is merged to the original array in the correct position. 

## Example: 

> An array of integers in the range [1, n] is given, where each integer appears once or twice. We have to find all the integers that appear twice in the array.

*Naive Approach*: Using a Hashmap or a frequency array, we can store the number of times each element comes up. We then return an array by looping through the frequency array and adding all values that appear twice. However, this requires $$O(n)$$ spaces complexity, and the problem requires us to have $O(1)$ space complexity. 

For this sort of problem, we can use timsort to lower our space complexity! 

### Pseudocode

- Sort the array using timsort
- Loop through the array
- If two values are the same, then that value must be repeated. Return that value. 

### Dry Run

Let’s do a dry run of timsort with the array `[5, 4, 3, 1, 2, 6, 7, 4]`, and a run size of 2. . 

Each run is sorted using insertion sort. The array becomes `[4, 5, 1, 3, 2, 6, 4, 7]`. 
The merges happen using recursion. We first attempt to split the array into two parts, and merge the left part. 
First, the left part is merged, meaning the first two runs are merged. Then the array becomes `[1, 3, 4, 5, 2, 6, 4, 7]`. 
Then, the right part is merged, meaning the next two runs are merged. The the array becomes `[1, 3, 4, 5, 2, 4, 6, 7]`. 
Finally, the entire array is merged. The array is finally sorted: `[1, 2, 3, 4, 4, 5, 6, 7]`.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Bobliuuu"/>

```cpp
class Solution {
public:
    const int RUN = 32; // Initalize the size of each run
    void insertionSort(vector<int>& nums, int left, int right) {
        for (int i = left; i <= right; i++) {
            int tmp = nums[i];
            int j = i - 1;
            while (j >= left && nums[j] > tmp) {
                nums[j + 1] = nums[j];
                j--;
            }
            nums[j + 1] = tmp;
        }
    }
    void merge(vector<int>& nums, int left, int mid, int right) {
        // Maintain the two previous lists 
        vector<int> lt, rt;
        int lenlt = mid - left + 1, lenrt = right - mid;
        for (int i = 0; i < lenlt; i++) {
            lt.push_back(nums[left + i]);
        }
        for (int i = 0; i < lenrt; i++) {
            rt.push_back(nums[mid + 1 + i]);
        }
        // Start recreating the correct list, putting the smaller one each time 
        int i = 0, j = 0, k = left;
        while (i < lenlt && j < lenrt) {
            if (lt[i] <= rt[j]) {
                nums[k] = lt[i];
                i++;
            }
            else{
                nums[k] = rt[j];
                j++;
            }
            k++;
        }
        while (i < lenlt) {
            nums[k] = lt[i];
            k++; i++;
        }
        while (j < lenrt) {
            nums[k] = rt[j];
            k++; j++;
        }
    }
    void timSort(vector<int>& nums) {
        int n = nums.size();
        // Insertion sort on each run
        for (int i = 0; i < n; i += RUN) {
            insertionSort(nums, i, min((i + RUN-1), (n - 1))); 
        }
        for (int size = RUN; size < n; size = 2 * size) {
            for (int left = 0; left < n; left += 2 * size) {
                // Determine indices for each run for merging
                int mid = left + size - 1;
                int right = min((left + 2 * size - 1), (n - 1));
                // Merge the two runs if needed
                if(mid < right){
	        // Use recursion to merge the array
                    merge(nums, left, mid, right);
                }
            }
        }
    }
    int findDuplicate(vector<int>& nums) {
        timSort(nums); // Use timsort to sort the array
        for (int i = 0; i < nums.size() - 1; i++){
            // Return the duplicate if found
            if (nums[i] == nums[i+1]){
                return nums[i];
            }
        }
        return 0;
    }
};
```

</TabItem>
</Tabs>
                                       
### Complexity

The time complexity of this program is $$O(n log n)$$, since the merging takes $logn$ steps, and merges n values each time. 

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

