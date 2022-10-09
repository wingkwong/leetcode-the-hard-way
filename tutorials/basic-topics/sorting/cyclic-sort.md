---
title: 'Cyclic Sort'
description: 'Cyclic Sort is a comparison sort algorithm that is theoretically optimal in terms of the total number of writes to the original array.'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - cyclic sort
---

<TutorialAuthors names="@prishit55"/>

## Overview

Cyclic Sort is an in-place, unstable-sorting algorithm.

* **in-place**: An in-place algorithm transforms input without using any other auxiliary data structure. As the algorithm executes the input is overwritten by the output.
* **unstable** : Unstable sorting algorithm don't preserve the relative order of equal elements while sorting.

Cyclic Sort algorithm factors the permutation to be sorted into number of cycles, which are individually rotated to give desired sorted result.

## Algorithm

Consider an array with $n$ distinct elements. For any element $x$ we can find the index at which it will occur in the sorted array by counting the number of elements smaller than $x$ in the entire array. Now,

* if the element is at the correct position then do nothing 
* else, write the element to its intended position. That position must be inhabited by a different number $y$ which has to be moved to its correct position. The process continues until we get an element at the original position of $x$.

This completes one cycle. Repeating the cycle for every element will generate a sorted array.

![1](https://user-images.githubusercontent.com/77775000/193418041-3fe52e97-17e9-4f32-89f8-975b6a7c788c.jpg)

In the above example until and unless the correct element reaches its correct position, variable $i$ will not get updated. This depicts one cycle. For any element $nums[i]$ its correct position will be $nums[nums[i]-1]$, and if at any index correct element is not present that means its a duplicate element.

## Example: [442. Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

> An array of integers in the range [1,n] is given, each integer appears once or twice. We have to find all the integers that appear twice in the array.

*Naive Approach* would be to simply use a map or a frequency array to store the frequency of each element and return an array of elements appearing twice. But we require constant space complexity.

*Efficient Approach* is to put each element at its each correct index in the array as we have all integers in the range $[1,n]$, and check if any of the element is not at its correct position then it is a duplicate element. Hence we can use Cyclic Sort algorithm for this problem.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@prishit55"/>

```cpp
class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int> duplicates;
        int n = nums.size();
        // cyclc sort
        int i = 0;
        while (i < n) {
            //correct index
            int index = nums[i] - 1;
            // if correct element is not present at the index        
            if (nums[i] != nums[index]) {
                // we swap the elements    
                swap(nums[i], nums[index]); 
            } else {
                //do nothing if element is present at its correct position    
                i++;     
            }
        }
        for(int i = 0; i < n; i++) {
            // extract all those elements which are not present at their correct position
            if (nums[i] != i + 1) {               
                duplicates.push_back(nums[i]); 
            }
        }
        return duplicates;
    }
};
  
```

</TabItem>
</Tabs>

**Time Complexity : $$O(N)$$**

**Space Complexity : $$O(1)$$**

Cyclic Sort pattern is very useful to solve problems involving arrays containing numbers in a given range, finding the missing or duplicate numbers.

export const suggestedProblems = [
    {
        "problemName": "0268 - Missing Number",
        "difficulty": "Easy",
        "leetCodeLink": "https://leetcode.com/problems/missing-number/",
        "solutionLink": ""
    },
    {
        "problemName": "0041 - First Missing Positive",
        "difficulty": "Hard",
        "leetCodeLink": "https://leetcode.com/problems/first-missing-positive/",
        "solutionLink": ""
    },
    {
        "problemName" : "0448 - Find All Numbers Disappeared In An Array",
        "difficulty" : "Easy",
        "leetCodeLink" : "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        "solutionLink" : ""
    },
    {
        "problemName" : "0645 - Set Mismatch",
        "difficulty" : "Easy",
        "leetCodeLink" : "https://leetcode.com/problems/set-mismatch/",
        "solutionLink" : ""
    },
]

<Table title="Suggested Problems" data={suggestedProblems} />
