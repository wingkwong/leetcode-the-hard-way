---

title: 'Bucket Sort'
description: 'Bucket sort is a sorting algorithm that organizes elements into buckets based on their values and sorts each bucket separately for efficient sorting.'
hide_table_of_contents: true
draft: true
keywords:

- leetcode
- tutorial
- sorting
- algorithm
- bucket sort

---

<TutorialAuthors names="@Sanchita1304"/>
<Contributors names="@wingkwong"/>

## Overview

Bucket sort is a non-comparative sorting algorithm that works by distributing elements into a finite number of buckets, each representing a specific range of values. After distributing the elements, each bucket is sorted individually, typically using another sorting algorithm or recursively applying bucket sort. Finally, the sorted elements are concatenated to produce a fully sorted array. This algorithm is particularly useful when the input data is uniformly distributed across a range of values, making it efficient for certain types of data sets.

## Algorithm

1. Initialization:
    
    Create an array of empty buckets (containers), typically represented as lists or arrays.
    Determine the range of input values and divide this range into equal-sized subranges, each corresponding to a bucket.
    
2. Distribution:
    
    Iterate through the input array and place each element into the appropriate bucket based on its value. This is done by mapping the       element's value to the corresponding bucket.
    
3. Sort Each Bucket:
    
    For each non-empty bucket, sort its contents using a sorting algorithm of your choice (e.g., insertion sort, quicksort, or another       bucket sort recursively).
    
4. Concatenation:
    
    Concatenate all the sorted buckets in order to obtain the final sorted array.
    

We can understand the Bucket Sort by using Scatter-Gather Approach.

![bucket sort example](https://github.com/Sanchita1304/leetcode-the-hard-way/assets/90080911/7045afe4-e20e-4019-acbf-b13dfcb7b886)



In the above example, the unsorted array is given.

- We have to create buckets with a range from 0 to 25.
- The buckets range are 0-5, 5-10, 10-15, 15-20, 20-25.
- After creating buckets we have to sort the buckets using different sorting algorithms of your own choice.
- After sorting, gather the sorted elements from each bucket in order.

## Example: [Sort an Array](https://leetcode.com/problems/sort-an-array/description/)

> An array of integers in the range [1,n] is given. We have to sort the array in ascending order and return it.


<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
       // Find the minimum and maximum values in nums
        int min_val = *min_element(nums.begin(), nums.end());
        int max_val = *max_element(nums.begin(), nums.end());

        // Create buckets
        int bucket_range = max_val - min_val + 1;
        vector<int> buckets(bucket_range, 0);

        // Distribute elements into buckets
        for (int num : nums) {
            buckets[num - min_val]++;
        }

        // Gather sorted elements
        vector<int> sorted_array;
        for (int i = 0; i < bucket_range; ++i) {
            while (buckets[i] > 0) {
                sorted_array.push_back(i + min_val);
                buckets[i]--;
            }
        }

        return sorted_array;
    }
};

```

</TabItem>
</Tabs>

In this code:

- We find the minimum and maximum values in the nums array to determine the range of values.
- We create an array of buckets, with each bucket representing a value in the range from min_val to max_val.
- We distribute the elements from the nums array into their respective buckets based on their values.
- Finally, we gather the sorted elements by iterating through the buckets and reconstructing the sorted array.

**Time Complexity : $$O(N)$$**

**Space Complexity : $$O(n+k)$$**

Here, "n" is the number of elements in the input array 'nums' and "k" is the range of values in the array.

Bucket Sort is useful for sorting when the input data is uniformly distributed across a range of values.

export const suggestedProblems = [
      {
          "problemName": "451. Sort Characters By Frequency",
          "difficulty": "Medium",
          "leetCodeLink": "https://leetcode.com/problems/sort-characters-by-frequency/",
          "solutionLink": "../../../solutions/0400-0499/sort-characters-by-frequency"
      },
      {
          "problemName": "164. Maximum Gap",
          "difficulty": "Medium",
          "leetCodeLink": "https://leetcode.com/problems/maximum-gap/",
          "solutionLink": "../../../solutions/0100-0199/maximum-gap"
      },
      {
          "problemName": "220. Contains Duplicate III",
          "difficulty": "Hard",
          "leetCodeLink": "https://leetcode.com/problems/contains-duplicate-iii/",
          "solutionLink": "../../../solutions/0200-0299/contains-duplicate-III"
      },
]

<Table title="Suggested Problems" data={suggestedProblems} />
