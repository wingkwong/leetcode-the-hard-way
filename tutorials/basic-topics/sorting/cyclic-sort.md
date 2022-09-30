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

```cpp
/*function to implement to cycle sort*/  
void cycleSort(int a[], int n)    
{    
    int start, element, pos, temp, i;    
     
   /*Loop to traverse the array elements and place them on the correct position*/  
    for (start = 0; start <= n - 2; start++) {    
        element = a[start];  
          
        /*position to place the element*/  
        pos = start;    
          
        for (i = start + 1; i < n; i++)    
            if (a[i] < element)    
                pos++;    
        if (pos == start)  /*if the element is at exact position*/  
            continue;    
        while (element == a[pos])    
            pos += 1;    
        if (pos != start) /*put element at its exact position*/   
        {    
            //swap(element, a[pos]);    
            temp = element;    
            element = a[pos];    
            a[pos] = temp;      
            }    
        /*Rotate rest of the elements*/  
        while (pos != start)   
        {    
            pos = start;    
            /*find position to put the element*/  
            for (i = start + 1; i < n; i++)    
                if (a[i] < element)    
                    pos += 1;    
              
            /*Ignore duplicate elements*/  
            while (element == a[pos])    
                pos += 1;    
              
            /*put element to its correct position*/  
            if (element != a[pos])   
            {    
                temp = element;    
                element = a[pos];    
                a[pos] = temp;      
            }    
        }    
    }    
     
 }    
```
## Complexity
|  Case      |  Time Complexity  |  Space Complexity 
|------------|-------------------|-------------------
|Best Case   | O(N^2)            |  O(1)
|Average Case| O(N^2)            |  O(1)
|Worst Case  | O(N^2)            |  O(1)

## Suggested Problems
Cyclic Sort pattern is very useful to solve problems involving arrays containing numbers in a given range, finding the missing or duplicate numbers.


export const suggestedProblems = [
    {
        "problemName": "268-Missing Number"
        "difficulty": "Easy"
        "leetCodeLink": "https://leetcode.com/problems/missing-number/"
        "solutionLink": "https://leetcode.com/submissions/detail/812249568/"
    },
    {
        "problemName": "442-Find All Duplicates In An Array"
        "difficulty": "Medium"
        "leetCodeLink": "https://leetcode.com/problems/find-all-duplicates-in-an-array/"
        "solutionLink": "https://leetcode.com/submissions/detail/812252186/"
    },
    {
        "problemName" : "448-Find All Numbers Disappeared In An Array"
        "difficulty" : "Easy"
        "leetCodeLink" : "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"
        solutionLink" : "https://leetcode.com/submissions/detail/812254247/"
    },
    {
        "problemName" : "645-Set Mismatch"
        "difficulty" : "Easy"
        "leetCodeLink" : "https://leetcode.com/problems/set-mismatch/"
        "solutionLink" : "https://leetcode.com/submissions/detail/812256354/"
    }
]
<Table title="Suggested Problems" data={suggestedProblems} />
