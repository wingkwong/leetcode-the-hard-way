---
title: 'Linear search'
description: 'Linear search is a searching technique that works in a linear/sequential fashion. It traverses whole of the data structure and returns the position(s) where the value is found. If not found then it simple returns nothing.'
hide_table_of_contents: true
---

<TutorialAuthors names="@siddoinghisjob"/>

## Overview

Lets say we have a linear data structure - array, linked list - and we need to search for a certain element. To search there are mainly two searching techniques, one being linear search. In linear search we traverse the whole array and then while traversing we check for the particular item. If there's a match then we return that position( we can return multiple positions too).

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@siddoinghisjob"/>

```cpp
#include<iostream>
using namespace std;

int main(){
  // Array to keep the values
  int arr[5] = {1,2,3,4,5};
  // Item to be searched 
  int item = 3; 
  for(int i = 0; i < 5; i++){
    // checking if item is arr[i]
    if(arr[i] == item){  
      cout << "Found at " << i << endl;
    }
  }
} 
```

</TabItem>
</Tabs>

## Example problems

**Leetcode #1295 : Find Numbers with Even Number of Digits**

Here we are given an array and we are required to find out the number of digits that are even.
```
array[] = {1,2,3,4,5,6}
Answer = 3
Explaination = We have 2, 4, 6 which are even numbers and therfore the output is 3.
```

***Solution -***

We can think this problem as a linear search problem, where we are supposed to search for all the `even` numbers. Thats' it. Now to do so we will run a for loop
and traverse every element and check it. If found then we will simply increase the count of even digits by 1.

Code in c++ :-

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@siddoinghisjob"/>

```cpp
#include<iostream>
using namespace std;

int main(){
  // Array containing values
  int arr[5] = {1,2,3,4,5}; 
  // Initially the answer is zero
  int answer = 0; 
  for(int i = 0; i < 5; i++){
     // check for division by 2 i.e., whether an even number
    if(arr[i]%2 == 0) 
      answer++;
  }
  cout << "Number of even digits are :- " << answer << endl;
} 
```

</TabItem>
</Tabs>
  
<hr/>  

**Leetcode #2089 : Find target Indices after sorting array**

You are given a 0-indexed integer array nums and a target element target.A target index is an index i such that nums[i] == target.
Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

```
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
```
  
***Solution -***
If we sort this array using library sorting functions then this problem is reduced to a simple linear search question. Where we are supposed to search for the target. Thats' it. Now to do so we will create a vetor for storing the answers, and the run a for loop and traverse every element and check it. If found then we will add that index to the vector.
Finally we will return the vector and its' done!
This will take **O(nlogn)** time complexity as we will be using sort function (and that takes *O(nlogn)*) time complexity.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@siddoinghisjob"/>

```cpp
class Solution {
public:
    vector<int> targetIndices(vector<int>& nums, int target) {
        // sorting the vector using stl function
        sort(nums.begin(),nums.end());
        // vector to store the required indeices
        vector<int> answer;
  
        // linear searching to find the target
        for(int i = 0; i < nums.size(); i++)
             if(nums[i] == target) answer.push_back(i);
        return answer;
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
    "solutionLink": "/1500-1599/1539-kth-missing-positive-number-easy.md"
  },
  {
    "problemName": "1672 - Richest Customer Wealth",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/richest-customer-wealth/",
    "solutionLink": "/1600-1699/1672-richest-customer-wealth-easy.md"
  },
  {
    "problemName": "275 - H-Index II",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/h-index-ii/",
    "solutionLink": ""
  },
  {
    "problemName": "540 - Single Element in a Sorted Array",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    "solutionLink": "/0500-0599/0540-single-element-in-a-sorted-array-medium.md"
  },
  ]

<Table title = "Suggested problems" data = {suggestedProblems}/>
