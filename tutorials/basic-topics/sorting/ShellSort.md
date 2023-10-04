---
title: 'Shell Sort'
description: 'Sorting algorithm using a gap concept'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - shell sort
---

<TutorialAuthors names="@<Saishreekouda>"/>

## Overview

In this tutorial, we will explore the Shell Sort algorithm, a popular and efficient sorting technique. This algorithm uses insertion sort on a widely spread elements, first to sort them and then sorts the less widely spaced elements. This spacing is termed as interval.


## Algorithm

Shell Sort is an efficient sorting algorithm that builds on the concept of Insertion Sort. It works by sorting subarrays of an array with a gap and gradually reducing the gap until it becomes 1. This process makes larger elements move to the end of the array faster, improving overall sorting time.

### Step 1: Choose a Gap Sequence

The first step in Shell Sort is to choose a gap sequence. A common sequence is to start with the array's length divided by 2 and repeatedly divide by 2 until the gap becomes 1. The choice of gap sequence affects the algorithm's efficiency.

### Step 2: Start Sorting with a Gap

1. Divide the array into subarrays of size `gap`. Initially, the subarrays are the elements separated by the chosen gap.

2. For each subarray, perform an Insertion Sort. This means you move elements within the subarray to their correct positions.

### Step 3: Reduce the Gap

3. Decrease the gap (usually by dividing it by 2).

### Step 4: Repeat Until Gap is 1

4. Repeat steps 2 and 3 until the gap becomes 1.

### Step 5: Final Pass

5. Perform a final pass of Insertion Sort with a gap of 1. This is a regular Insertion Sort that ensures the entire array is sorted correctly.


Let's see how Shell Sort works with an example array `[5, 2, 9, 3, 6]`:

1. Initial gap is `n/2 = 5/2 = 2`. Divide the array into subarrays: `[5, 9]` and `[2, 3, 6]`. Perform Insertion Sort within these subarrays.

   Result after first pass: `[5, 2, 9, 3, 6]` → `[2, 3, 5, 6, 9]`

2. Reduce the gap to `1`. Perform a final pass of Insertion Sort.

   Result after final pass: `[2, 3, 5, 6, 9]` (Sorted!)


### Complexity Analysis

Before diving into the algorithm's implementation, let's analyze its time complexity:

- **Time Complexity**: The time complexity of Shell Sort depends on the gap sequence used. In the worst case, it can be O(n^2), but with the right gap sequence, it can achieve a time complexity of O(n log^2 n).

Now, let's walk through the topic by solving two example problems using the Shell Sort algorithm.

## Example 1: [912 - Sort an Array using Shell Sort](https://leetcode.com/problems/sort-an-array/)

> Given an array of integers nums, sort the array in ascending order and return it.
> You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

### Algorithm

- Start with a gap sequence. A common choice is to start with `n/2` and halve it in each iteration until the gap becomes 1, where `n` is the length of the array.

- Divide the array into subarrays of size equal to the current gap.

- For each subarray, perform an insertion sort to sort the elements within the subarray.

- Reduce the gap and repeat the process until the gap becomes 1.

- Finally, perform a final pass of insertion sort with a gap of 1 to ensure the entire array is sorted.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    void shellSort(vector<int>& nums) {
        int n = nums.size();
        for (int gap = n / 2; gap > 0; gap /= 2) {
            for (int i = gap; i < n; ++i) {
                int temp = nums[i];
                int j;
                for (j = i; j >= gap && nums[j - gap] > temp; j -= gap) {
                    nums[j] = nums[j - gap];
                }
                nums[j] = temp;
            }
        }
    }

    vector<int> sortArray(vector<int>& nums) {
        shellSort(nums);
        return nums;
    }
};
```
</TabItem>
<TabItem value="py" label="Python3">

```py
class Solution:
    def shellSort(self, nums):
        n = len(nums)
        gap = n // 2
        while gap > 0:
            for i in range(gap, n):
                temp = nums[i]
                j = i
                while j >= gap and nums[j - gap] > temp:
                    nums[j] = nums[j - gap]
                    j -= gap
                nums[j] = temp
            gap //= 2

    def sortArray(self, nums):
        self.shellSort(nums)
        return nums

```
</TabItem>
<TabItem value="java" label="Java">

```java
class Solution {
    public int[] sortArray(int[] nums) {
        int n = nums.length;
        int gap = n / 2;
        while (gap > 0) {
            for (int i = gap; i < n; i++) {
                int temp = nums[i];
                int j = i;
                while (j >= gap && nums[j - gap] > temp) {
                    nums[j] = nums[j - gap];
                    j -= gap;
                }
                nums[j] = temp;
            }
            gap /= 2;
        }
        return nums;
    }
}
```
</TabItem>
</Tabs>

- Merging of $n$ elements in each pass takes $O(n)$ time.
- Since the array is repeatedly divided by 2, it takes $\log_2(n)$ passes to reach the top.

Shell Sort exhibits a time complexity of $O(n \log_2(n))$, making it an efficient sorting algorithm for a wide range of input sizes.

Shell Sort is generally **not** considered **a stable sort**. It does not guarantee that elements with equal values will maintain their original order in the sorted array. The sorting process involves swapping elements at varying distances, which may lead to a change in the relative order of equal elements.

Shell Sort is an **out-of-place** algorithm, which means it requires additional memory to sort the array. The additional space required depends on the input size of the array elements. While it doesn't require as much extra space as some other sorting algorithms like Merge Sort or Heap Sort, it still needs space for temporary storage and swapping elements during the sorting process.


**Time Complexity**

- Best Case: $O(n \log_2(n))$
- Worst Case: $O(n^2)$ (depends on gap sequence)
- Average Case: $O(n \log_2(n))$

Shell Sort demonstrates a time complexity of $O(n \log_2(n))$ in its best and average cases. However, in the worst case, the time complexity can degrade to $O(n^2)$ depending on the choice of the gap sequence.

**Space Complexity** : $O(n)$

**Efficiency Consideration**

For very large arrays, Shell Sort's space complexity of $O(n)$ can be inefficient, as it allocates extra memory. In such cases, when memory usage is a critical concern, you may consider alternative sorting algorithms like Quick Sort, which typically requires less additional space.

Shell Sort remains a reliable sorting algorithm for moderately sized arrays, and its performance can be optimized by choosing an appropriate gap sequence.



## Example 2: [88 - Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)

> Given two integer arrays, sorted in non-decreasing order, and two integers representing the number of elements in both arrays.
> Merge both arrays into a single array sorted in non-decreasing order.

### Algorithm

1. Calculate the gap value for merging the two arrays. The gap is determined as ceil((size of arr1[] + size of arr2[]) / 2).

2. Initialize two pointers: the left pointer at index 0 and the right pointer at index (left + gap).

3. Perform the following steps for each gap until the gap becomes 0:
   - Inside a loop that continues until the right pointer reaches the end (i.e., index n + m), handle three different cases:
     - If the left pointer is inside arr1[] and the right pointer is in arr2[], compare arr1[left] and arr2[right - n]. If arr1[left] > arr2[right - n], swap them.
     - If both pointers are in arr2[], compare arr1[left - n] and arr2[right - n]. If arr1[left - n] > arr2[right - n], swap them.
     - If both pointers are in arr1[], compare arr1[left] and arr2[right]. If arr1[left] > arr2[right], swap them.
   
4. After the right pointer reaches the end, decrease the value of the gap by setting it to ceil(current gap / 2).

5. Repeat the loop until the gap becomes 0.

6. Finally, after performing all the operations, you will have the merged sorted array.


<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    void swapIfGreater(vector<int>& arr1, vector<int>& arr2, int ind1, int ind2) 
    {
        if (arr1[ind1] > arr2[ind2]) {
            swap(arr1[ind1], arr2[ind2]);
        }
    }
    void merge(vector<int>& arr1, int n, vector<int>& arr2, int m) {
        int len = n + m;

    // Initial gap:
    int gap = (len / 2) + (len % 2);

    while (gap > 0) {
        // Place 2 pointers:
        int left = 0;
        int right = left + gap;
        while (right < len) {
            // case 1: left in arr1[]
            //and right in arr2[]:
            if (left < n && right >= n) {
                swapIfGreater(arr1, arr2, left, right - n);
            }
            // case 2: both pointers in arr2[]:
            else if (left >= n) {
                swapIfGreater(arr2, arr2, left - n, right - n);
            }
            // case 3: both pointers in arr1[]:
            else {
                swapIfGreater(arr1, arr1, left, right);
            }
            left++, right++;
        }
        // break if iteration gap=1 is completed:
        if (gap == 1) break;

        // Otherwise, calculate new gap:
        gap = (gap / 2) + (gap % 2);
    }
    int j=0;
    for(int i=n;i<n+m;i++)
    {
        arr1[i]=arr2[j];
        j++;
    }
    }
};
```
</TabItem>
<TabItem value="py" label="Python3">

```py
class Solution(object):
    def swapIfGreater(self, arr1, arr2, ind1, ind2):
        if arr1[ind1] > arr2[ind2]:
            arr1[ind1], arr2[ind2] = arr2[ind2], arr1[ind1]

    def merge(self, nums1, m, nums2, n):
        # Calculate the total length
        len = m + n

        # Initial gap
        gap = (len / 2) + (len % 2)

        while gap > 0:
            # Place two pointers
            left = 0
            right = left + gap

            while right < len:
                # case 1: left in nums1[] and right in nums2[]
                if left < m and right >= m:
                    self.swapIfGreater(nums1, nums2, left, right - m)

                # case 2: both pointers in nums2[]
                elif left >= m:
                    self.swapIfGreater(nums2, nums2, left - m, right - m)

                # case 3: both pointers in nums1[]
                else:
                    self.swapIfGreater(nums1, nums1, left, right)

                left += 1
                right += 1

            # Break if iteration with gap=1 is completed
            if gap == 1:
                break

            # Calculate the new gap
            gap = (gap / 2) + (gap % 2)

        j = 0
        for i in range(m, len):
            nums1[i] = nums2[j]
            j += 1
```
</TabItem>
<TabItem value="java" label="Java">

```java
class Solution {
    public void swapIfGreater(int[] arr1, int[] arr2, int ind1, int ind2) {
        if (arr1[ind1] > arr2[ind2]) {
            int temp = arr1[ind1];
            arr1[ind1] = arr2[ind2];
            arr2[ind2] = temp;
        }
    }

    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int len = m + n;

        // Initial gap
        int gap = (len / 2) + (len % 2);

        while (gap > 0) {
            // Place two pointers
            int left = 0;
            int right = left + gap;

            while (right < len) {
                // case 1: left in nums1[] and right in nums2[]
                if (left < m && right >= m) {
                    swapIfGreater(nums1, nums2, left, right - m);
                }
                // case 2: both pointers in nums2[]
                else if (left >= m) {
                    swapIfGreater(nums2, nums2, left - m, right - m);
                }
                // case 3: both pointers in nums1[]
                else {
                    swapIfGreater(nums1, nums1, left, right);
                }
                left++;
                right++;
            }
            // Break if iteration with gap=1 is completed
            if (gap == 1) {
                break;
            }
            // Calculate the new gap
            gap = (gap / 2) + (gap % 2);
        }

        int j = 0;
        for (int i = m; i < len; i++) {
            nums1[i] = nums2[j];
            j++;
        }
    }
}
```
</TabItem>
</Tabs>

**Time Complexity**: $O((n+m) \cdot \log(n+m))$

The time complexity of the algorithm for merging two sorted arrays of sizes `n` and `m` is determined as follows:
1.
- The gap ranges from `n+m` to `1`, and at each step, the gap is divided by 2.
- Therefore, the outer loop runs for `O(log(n+m))` iterations.

For each value of the gap, the inner loop can run for a maximum of `n+m` times.

**Space Complexity** : $O(1)$

**Efficiency Consideration**

In this question we can use brute approach of merging 2 sorted arrays using extra space but for optimal solution where we do not consider any extra space Shell Sort gives us an efficient solution.

export const suggestedProblems = [
    {
        "problemName": "912-Sort an Array",
        "difficulty": "Medium",
        "leetCodeLink": "https://leetcode.com/problems/sort-an-array/",
        "solutionLink": "../../../solutions/0900-0999/0912-sort-an-array-medium"
    },
    {
        "problemName" : "148-Sort List",
        "difficulty" : "Medium",
        "leetCodeLink" : "https://leetcode.com/problems/sort-list/",
        "solutionLink" : "../../../solutions/0100-0199/sort-list-medium"
    },
    {
        "problemName" : "75-Sort Colors",
        "difficulty" : "Medium",
        "leetCodeLink" : "https://leetcode.com/problems/sort-colors/",
        "solutionLink" : "../../../solutions/0000-0099/sort-colors-medium"
    }, 
    {
        "problemName" : "88-Merge Sorted arrays",
        "difficulty" : "Medium",
        "leetCodeLink" : "https://leetcode.com/problems/merge-sorted-array/",
        "solutionLink" : "../../../solutions/0000-0099/0088-merge-sorted-array-easy"
    }
]

<Table title="Suggested Problems" data={suggestedProblems} />
  
