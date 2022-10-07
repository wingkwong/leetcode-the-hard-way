---
title: 'Linear search'
description: 'Author: Soumya deep sarkar'
hide_table_of_contents: true
---

<TutorialAuthors names="@siddoinghisjob"/>

## Overview

Lets say we have a linear data structure - array, linked list - and we need to search something out of it. To do so there are mainly two searching techniques, one being linear search. In linear search we traverse the whole array and then while traversing we check for the particular item. If there's a match then we return that position( we can return multiple positions too).

Example:
``` 
  Lets have an array [1,2,6,5,6] and we need to find 6. 
  Then we can traverse the array from index 0 to index n-1 i.e., 4 here and print the positions of 6. 
      Index - Element - Output
        0        1           
        1        2
        2        6        2
        3        5          
        4        6        4
        
   Hence the final output will be - 2 4
```

This will take time complexity of **O(n)** i.e., it will take `linear` time complexity - as it's name.

Code in c++ :-
```cpp
#include<iostream>
using namespace std;

int main(){
  int arr[5] = {1,2,3,4,5}; // Array
  int item = 3; // Item to be searched 
  for(int i = 0; i < 5; i++){
    if(arr[i] == item){  // checking if item is arr[i]
      cout << "Found at " << i << endl;
    }
  }
} 
```
## Example problem

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
```cpp
#include<iostream>
using namespace std;

int main(){
  int arr[5] = {1,2,3,4,5}; // Array
  int answer = 0; // Initially the answer is zero
  for(int i = 0; i < 5; i++){
    if(arr[i]%2 == 0)  // Divided by 2 i.e., even number
      answer++;
  }
  cout << "Number of even digits are :- " << answer << endl;
} 
```
