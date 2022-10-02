---
title: 'The Bucket Sort Algorithm'
description: 'bucket sort is one of the famous sorting algorithm.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - bucket sort
  - sorting
  - algorithm
---

<TutorialAuthors names="@flow6979"/>

# The Bucket Sort Algorithm

Bucket sort, sometimes known as bin sort, is a sorting algorithm that divides an array's items into a number of buckets. The next step is to sort each bucket separately, either by employing a different sorting method or by repeatedly utilising the bucket sorting technique. In the most-to-least significant digit flavour, it is a distribution sort, a generalisation of pigeonhole sort, and a relative of radix sort. Since comparisons can be used to implement bucket sort, it can also be categorised as a comparison sort algorithm. The number of buckets to employ, the algorithm used to sort each bucket, and whether or not the input is distributed uniformly all affect how hard the computation is.

## Characteristics

- Uses hashing
- Makes assumptions about the data, like radix and counting sort
- Because it makes assumptions, can sort in O(n) time
- Performs best when hashed values of items being sorted are evenly distributed, so there aren't many collisions 
- Not in-place
- Stability will depend on sort algorithm used to sort the buckets - ideally, you want a stable sort
- Insertion sort is often used to sort the buckets, because it is fast when the number of items is small

## Time complexity

Worst-case performance: O(n^2)<br>
Average performance: O(n + n^2 / k + k), where k is the number of buckets. O(n), when k ~ n<br>
Worst-case space complexity: O(n * k)

## Implementation

* Distribute the items into buckets based on their hashed values (scattering phase)
* Sort the items in each bucket 
* Merge the buckets - can just concatenate them (gathering phase)

A generalization of counting sort

The values in bucket X must be greater than the values in bucket X - 1 and less than the values in bucket X + 1  

This means that the hash function we use must meet this requirement

```C++
#include <bits/stdc++.h>
using namespace std;
  
void bucketSort(float arr[], int n){
    vector<float> b[n];
    
    for (int i = 0; i < n; i++) {
        int bi = n * arr[i]; // Index in bucket
        b[bi].push_back(arr[i]);
    }
    
    for (int i = 0; i < n; i++)
        sort(b[i].begin(), b[i].end());
  
    int index = 0;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < b[i].size(); j++)
            arr[index++] = b[i][j];
}
  
int main(){
    float arr[]
        = { 0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 };
    int n = sizeof(arr) / sizeof(arr[0]);
    bucketSort(arr, n);
  
    cout << "Sorted array is \n";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}

```

export const suggestedProblems = [
  {
    "problemName": "0347 - Top K Frequent Elements",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/top-k-frequent-elements/",
    "solutionLink": "../../../solutions/0300-0399/0347 - Top K Frequent Elements"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />

## Links

* [Bucket Sort Algorithm](https://en.wikipedia.org/wiki/Bucket_sort)
