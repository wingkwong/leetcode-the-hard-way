---
title: 'Bucket Sort'
description: 'Bucket Sort is a sorting algorithm based on the idea of distributing elements into different buckets and then sorting each bucket individually before merging them back together in the correct order.'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - bucket sort
---

<TutorialAuthors names="@ARRY7686"/>
<Contributors names="@wingkwong" />

## Overview

Bucket Sort is a sorting algorithm that organizes the input array into several buckets, then sorts the elements within each bucket individually. It works by distributing the elements into these buckets based on a specific range, sorting each bucket (usually using another sorting algorithm), and finally combining the sorted buckets to produce the final sorted array.

The number of buckets and the method used to sort each bucket depend on the nature of the data. When the elements are evenly distributed, Bucket Sort can achieve near-linear time complexity.

The implementation will be demonstrated in C++, but feel free to adapt it to your preferred programming language if needed.

## Algorithm
To implement Bucket Sort, we use two nested loops. The first loop will distribute the elements into different buckets based on a range of values. The second loop will sort the elements within each bucket. After sorting, all buckets are concatenated to form the final sorted array.

Each bucket contains elements that belong to a specific range, and we can use another sorting algorithm (such as Insertion Sort) to sort the elements inside each bucket.

Consider the example of an unsorted list to see how the algorithm works:
$$
arr = {5,1,2,4,8}
$$

The array is divided into buckets based on the range of values:

Bucket 1: {1}
Bucket 2: {2}
Bucket 3: {4, 5}
Bucket 4: {8}

Once the elements in each bucket are sorted, they are concatenated to form the final sorted array.

To optimize the process, the number of buckets and the sorting algorithm used within each bucket can be chosen based on the distribution of the input data. If the elements are uniformly distributed, the algorithm can achieve efficient sorting.


<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@RadhikaChhabra17"/>

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void bucketSort(int arr[], int n) {
    vector<int> buckets[n];

    int max_val = *max_element(arr, arr + n);

    for (int i = 0; i < n; i++) {
        int bucketIndex = (arr[i] * n) / (max_val + 1); 
        buckets[bucketIndex].push_back(arr[i]);
    }

    for (int i = 0; i < n; i++) {
        sort(buckets[i].begin(), buckets[i].end());
    }

    int index = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < buckets[i].size(); j++) {
            arr[index++] = buckets[i][j];
        }
    }
}
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity

Bucket Distribution: Distributing n elements into k buckets takes $$O(n)$$ time.
Sorting within Buckets: If we assume each bucket contains a small number of elements, the sorting of each bucket (using a   sorting algorithm like Insertion Sort) will take $$O(m^2)$$ in the worst case, where m is the maximum number of elements in any bucket. If the input is uniformly distributed, this results in $$O(k^2/n^2)$$ for k buckets.
Concatenation: Finally, concatenating the sorted buckets into the original array also takes $$O(n)$$ time.

Thus, the overall time complexity of Bucket Sort in the average case is: 
$$O(n+k+m^2)=O(n)$$
In the worst case (when all elements fall into a single bucket), the time complexity becomes:
O(n^2)
### Complexity
Bucket Sort requires additional space for the buckets. The number of buckets is generally proportional to the number of elements,$$k$$. Therefore, the space complexity can be expressed as:
$$O(n+k)$$
If k is on the order of n (for example, if we have one bucket per element), then the space complexity can be simplified to:
$$O(n)$$
In summary, the space complexity indicates that this sorting algorithm requires extra space for its operation, which makes it less space-efficient compared to in-place sorting algorithms.\

<TabItem value="c++" label="C++">
<SolutionAuthor name="@ARRY7686"/>

```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int counter[3] = {0};
        for (int num : nums) {
            counter[num]++;
        }

        int inx = 0;
        for (int i = 0; i < 3; i++) { 
            while (counter[i] > 0) {
                nums[inx++] = i; 
                counter[i]--;
            }
        }
    }
};
```
</TabItem>
</Tabs>

export const suggestedProblems = [
  {
    "problemName": "0075 -  Sort Array By Parity II ",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/sort-colors/",
    "solutionLink": "../../../solutions/0900-0999/0922-Sort-Array-By-Parity-ii-easy"
  },
  {
    "problemName": "0164 - Maximum Gap"
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/maximum-gap/",
    "solutionLink": "../../../solutions/0100-0199/0164-Maximum-Gap-medium"
  }
]

<Table title="Suggested Problems" data={suggestedProblems} />
