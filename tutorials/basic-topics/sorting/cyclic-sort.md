---
title: 'Cyclic Sort'
description: 'Cyclic Sort is a comparison sort algorithm that is theoretically optimal in terms of the total number of writes to the original array.'
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - cyclic sort
---

<TutorialAuthors names="@prishit55"/>

# Overview

Cycle-Sort is an in-place, unstable-sorting algorithm.
* `in-place` : An in-place algorithm transforms input without using any other auxiliary data structure. As the algorithm executes the input is overwritten by the output.
* `unstable` : Unstable sorting algorithm don't preserve the relative order of equal elements while sorting.


Cycle sort algorithm factors the permutation to be sorted into number of cycles, which are individually rotated to give desired sorted result.

## Algorithm

Consider an array with `n` distinct elements. For any element `x` we can find the index at which it will occur in the sorted array by counting the number of elements smaller than `x` in the entire array.Now,
* if the element is at the correct position then do nothing 
* Else, write the element to its intended position. That position must be inhabited by a different number `y` which has to be moved to its correct position. The process continues until we get an element at the original position of `x`.

This completes one cycle. Repeating the cycle for every element will generate a sorted array.

## C++ Implementation

For a better understanding, let us take up a leetcode problem 

Problem : 442. Find All Duplicates in an Array

Link : https://leetcode.com/problems/find-all-duplicates-in-an-array/

Problem Statement : An array of integers in the range [1,n] is given, each integer appears once or twice. We have to find all the integers that appear twice in the array.

*Naive Approach* would be to simply use a map or a frequency array to store the frequency of each element and return an array of elements appearing twice. But we require constant space complexity.

*Efficient Approach* is to put each element at its each correct index in the array as we have all integers in the range [1,n], and check if any of the element is not at its correct position then it is a duplicate element. Hence using `Cycle Sort` algorithm for this problem.
```cpp
vector<int> findDuplicates(vector<int>& nums) {
        vector<int> duplicates;
        int n = nums.size();
        
        // cyclc sort
        int i = 0;
        while(i < n) {
            int index = nums[i] - 1;       //correct index
            if(nums[i] != nums[index]) {   // if correct element is not present at the index
                swap(nums[i], nums[index]); // we swap the elements
            } else {
                i++;     //do nothing if element is present at its correct position
            }
        }
        
        for(int i = 0; i < n; i++) {
            if(nums[i] != i + 1) {              //extract all those elements which are not present 
                duplicates.push_back(nums[i]); //at their correct position
            }
        }
        return duplicates;
    }
```
**Time Complexity : <img src="https://latex.codecogs.com/svg.image?\begin{document}&space;$$&space;\color{white}&space;\mathcal{O}(n)&space;$$\end{document}&space;" title="https://latex.codecogs.com/svg.image?\begin{document} $$ \color{white} \mathcal{O}(n) $$\end{document} " />**

**Space Complexity : <img src="https://latex.codecogs.com/svg.image?\begin{document}&space;$$&space;\color{white}&space;\mathcal{O}(1)&space;$$\end{document}&space;" title="https://latex.codecogs.com/svg.image?\begin{document} $$ \color{white} \mathcal{O}(1) $$\end{document} " />**

![1](https://user-images.githubusercontent.com/77775000/193418041-3fe52e97-17e9-4f32-89f8-975b6a7c788c.jpg)

## Suggested Problems

Cyclic Sort pattern is very useful to solve problems involving arrays containing numbers in a given range, finding the missing or duplicate numbers.


export const suggestedProblems = [
    {
        "problemName": "268-Missing Number",
        "difficulty": "Easy",
        "leetCodeLink": "https://leetcode.com/problems/missing-number/",
        "solutionLink": "https://leetcode.com/submissions/detail/812249568/"
    },
    {
        "problemName": "41-First Missing Positive",
        "difficulty": "Hard",
        "leetCodeLink": "https://leetcode.com/problems/first-missing-positive/",
        "solutionLink": "https://leetcode.com/submissions/detail/812832354/"
    },
    {
        "problemName" : "448-Find All Numbers Disappeared In An Array",
        "difficulty" : "Easy",
        "leetCodeLink" : "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
        solutionLink" : "https://leetcode.com/submissions/detail/812254247/"
    },
    {
        "problemName" : "645-Set Mismatch",
        "difficulty" : "Easy",
        "leetCodeLink" : "https://leetcode.com/problems/set-mismatch/",
        "solutionLink" : "https://leetcode.com/submissions/detail/812256354/"
    },
]
<Table title="Suggested Problems" data={suggestedProblems} />
