---
title: 'Linear Search'
description: 'Linear search is a searching technique that works in a linear / sequential fashion. It traverses whole of the data structure and returns the position(s) where the value is found. If not found then it simple returns nothing.'
hide_table_of_contents: false
---

<TutorialAuthors names="@siddoinghisjob"/>

## Overview

Lets say we have a linear data structure - array, linked list - and we need to search for a certain element. We can use linear search here. In linear search we traverse the whole array and then while traversing we check for the particular item. If there's a match then we print that position(s).

To elaborate there are three main steps in performing linear search

1. Traverse the data structure, e.g. $a = [1, 2, 3, 4, 5]$
2. Check for the required element while traversing, e.g. $a[i] == 3$
3. Do something with the value at position $i$ or $a[i]$

Here we can have three cases :

- **Case I - Best Case** *When the element we are looking for is at index-0 i.e., first position:*<br/>
In this case we can break the loop as soon as we find the element and as here that is the 0 index, we can break the loop on the 0 index itself. This results in $O(1)$ time complexity.

- **Case II - Average Case** *When the element we are looking for is at middle position i.e., length/2 index:*<br/>
In this case we will have to traverse the data structure for the half of length. This means that the time complexity is $O(n)$.

- **Case III - Worst Case** *When the element we are looking for is at last index:*<br/>
Here we have traverse the whole data structure. In this case the time complexity is $O(n)$.

## Example #1: [1295 - Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

> Here we are given an array and we are required to find out the numbers that have even number of digits.

We can think this problem as a linear search problem, where we are supposed to search for all the numbers that have `even` number of digits. Thats' it. Now to do so we will traverse the array and find the length of each number and check it for being even. To find the number of digits of a number, we will use some basic mathematical logic - we will take the number's log base $10$ and add one to it $i$.e., $log10 + 1$. And if even length numbers are found then we will simply increase the count of even digits by $1$. 

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@siddoinghisjob"/>

```cpp
class Solution {
public:
    int findNumbers(vector<int>& nums) {
        // initially the answer is zero
        int ans = 0; 
        for (int i = 0; i < nums.size(); i++) {
            // calculate the length of the number using log10 function 
            int len = log10(nums[i]) + 1;
            // check whether len is an even number
            if (len % 2 == 0) {
                ans++;
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>

## Example: [2089 - Find target Indices after sorting array](https://leetcode.com/problems/find-target-indices-after-sorting-array/)

> You are given a 0-indexed integer array nums and a target element target.A target index is an index i such that nums[i] == target.
Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

If we sort this array using library sorting functions then this problem is reduced to a simple linear search question. Where we are supposed to search for the target. Thats' it. Now to do so we will create a vetor for storing the answers, and the run a for loop and traverse every element and check it. If found then we will add that index to the vector.
Finally we will return the vector and its' done.

This will take $O(nlogn)$ time complexity as we will be using sort function which takes $O(nlogn)$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@siddoinghisjob"/>

```cpp
class Solution {
public:
    vector<int> targetIndices(vector<int>& nums, int target) {
        // sorting the vector using stl function
        sort(nums.begin(),nums.end());
        // vector to store the required indices
        vector<int> ans;
        // linear searching to find the target
        for (int i = 0; i < nums.size(); i++) {
             if (nums[i] == target) {
                 ans.push_back(i);
             }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>

export const suggestedProblems = [
  {
    "problemName": "1539 - Kth Missing Positive Number",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/kth-missing-positive-number/",
    "solutionLink": "../../solutions/1500-1599/kth-missing-positive-number-easy"
  },
  {
    "problemName": "1672 - Richest Customer Wealth",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/richest-customer-wealth/",
    "solutionLink": "../../solutions/1600-1699/richest-customer-wealth-easy"
  },
  {
    "problemName": "0540 - Single Element in a Sorted Array",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    "solutionLink": "../../solutions/0500-0599/single-element-in-a-sorted-array-medium"
  },
  {
    "problemName": "0275 - H-Index II",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/h-index-ii/",
    "solutionLink": ""
  },
  ]

<Table title = "Suggested problems" data = {suggestedProblems}/>
