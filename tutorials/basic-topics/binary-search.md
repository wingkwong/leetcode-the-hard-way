---
title: 'Binary Search'
description: 'Binary search is the searching strategy that reduces the search space by half every iteration until you have found the target.'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - binary search
  - algorithm
---

<TutorialAuthors names="@heiheihang, @wingkwong"/>

## Overview

Binary search is a widely used algorithm for searching an element in a sorted array or list. The basic idea of binary search is to divide the search space in half with each iteration and compare the middle element with the target element. If the middle element is greater than the target element, the search space is reduced to the left half of the array, otherwise, it is reduced to the right half. This process is repeated until the target element is found or the search space is exhausted.

The time complexity of binary search is $O(log n)$, which is more efficient than the linear search algorithm $O(n)$, which checks all elements one by one. However, for binary search to work, the array or list must be sorted.

Binary search can be implemented using a while loop, recursion, or a combination of both. The implementation details may vary, but the basic idea remains the same. The basic steps for a binary search algorithm are:

1. Initialize two pointers, one pointing to the start of the array and the other pointing to the end.
2. Find the middle element of the array by calculating the average of the two pointers.
3. Compare the middle element with the target element.
4. If the middle element is equal to the target element, the search is complete and the index of the target element is returned.
5. If the middle element is less than the target element, move the left pointer to the middle element + 1 and repeat step 2.
6. If the middle element is greater than the target element, move the right pointer to the middle element - 1 and repeat step 2.
7. If the left pointer is greater than the right pointer, the target element is not found and the function returns -1.

In conclusion, binary search is a fast and efficient algorithm for searching an element in a sorted array or list. Its time complexity is $O(log n)$, which is much better than the linear search algorithm. However, it requires the array or list to be sorted for it to work.

Let's look at the most basic form of binary search:

## Example: [0704. Binary Search](https://leetcode.com/problems/binary-search/)

> Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.
>
> You must write an algorithm with `O(log n)` runtime complexity.

For example, given the sorted input:

```python
nums = [-1,0,3,5,9,12], target = 9
```

The index of the element 9 is 4. We can use the following template to find the target

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```python
#Iterative
def binarySearch(nums, target):
    lp, rp = 0, len(nums) - 1
    while (lp <= rp):
        mid = (lp + rp) // 2
        if (nums[mid] == target):
            return mid
        elif (nums[mid] < target):
            lp = mid + 1
        else:
            rp = mid - 1
    return -1 

#Recursive 
def binarySearch(nums: [int], low: int, high: int, target: int):
    if low > high:
        return -1  # Base case
    
    # Perform the steps:
    mid = (low + high) // 2
    if nums[mid] == target:
        return mid
    elif target > nums[mid]:
        return binarySearch(nums, mid + 1, high, target)
    return binarySearch(nums, low, mid - 1, target)

def search(nums: [int], target: int):
    return binarySearch(nums, 0, len(nums) - 1, target)
```
</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// Iterative
int binarySearch(vector<int>& nums, int target) {
    int lp = 0, rp = nums.size() - 1;
    while (lp <= rp) {
        int mid = lp + (rp - lp) / 2;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            lp = mid + 1;
        } else {
            rp = mid - 1;
        }
    }
    return -1;
}

//Recusive
int binarySearch(vector<int>& nums, int low, int high, int target) {

    if (low > high) return -1; //Base case.

    // Perform the steps:
    int mid = (low + high) / 2;
    if (nums[mid] == target) return mid;
    else if (target > nums[mid])
        return binarySearch(nums, mid + 1, high, target);
    return binarySearch(nums, low, mid - 1, target);
}

int search(vector<int>& nums, int target) {
    return binarySearch(nums, 0, nums.size() - 1, target);
}
```
</TabItem>


<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
int binarySearch(int[] nums, int target) {
    int lp = 0, rp = nums.length - 1;
    while (lp <= rp) {
        int mid = lp + (rp - lp) / 2;
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            lp = mid + 1;
        } else {
            rp = mid - 1;
        }
    }
    return -1;
}

//Recusive
public static int binarySearch(int[] nums, int low, int high, int target) {
        if (low > high) return -1; //Base case.

        // Perform the steps:
        int mid = (low + high) / 2;
        if (nums[mid] == target) return mid;
        else if (target > nums[mid])
            return binarySearch(nums, mid + 1, high, target);
        return binarySearch(nums, low, mid - 1, target);
    }

public static int search(int[] nums, int target) {
    return binarySearch(nums, 0, nums.length - 1, target);
} 

```
</TabItem>
</Tabs>

There can be very challenging questions using binary search, but we should focus on the basic application first.

## Tips

1. When the input is sorted, it's probably a hint to use binary search.
2. When you need to find the first / last index of something, then it may be another hint to use binary search (as index is sorted).
3. When initialising the boundary, we may think about the possible range (sometimes $r$ may not necessarily be the max of the constraint
4. In while condition, you may see some people write $while (l < r)$ , $while (r > l)$,  $while (l <= r)$ , or $while (l >= r)$.  either one works depending on how to write the logic - just personal preference. See [here](https://stackoverflow.com/questions/35613574/when-to-use-in-binary-search-condition) for more.
5. Think about the mid - if there are even elements, should we pick the left or the right mid? e.g. [1,2,3,4] like choosing $2$ or $3$?
6. Think about how to shrink - if $mid$ is never be the answer, then we can exclude it ($l = m + 1$ / $r = m - 1$).
7. If you are using C++, most people use $l + (r - l) / 2$ to avoid integer overflow problem. Let's say $l$ & $r$ are large enough like ~INT_MAX, when u sum them up, it causes overflow. 

    We know that $m$ is actually somewhere in between $l$ and $r$ so let $m = l + x$ where $x$ is an arbitrary value. Since we know that $m = (l + r) / 2$, we can substitute to have the following
    $$$
        l + x = (l + r) / 2 \\
        x = (l + r) / 2 - l \\
        x * 2 = (l + r) - 2 * l \\
        x * 2 = (r - l)  \\
        x = (r - l) / 2 \\
    $$$
    so putting x back to the first equation, we would have
    $$$
    m = l + x \\
    m = l + (r - l) / 2
    $$$


export const suggestedProblems = [
  {
    "problemName": "0704 - Binary Search",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/binary-search/",
    "solutionLink": "../../solutions/0700-0799/binary-search-easy"
  },
  {
    "problemName": "0153 - Find Minimum in Rotated Sorted Array",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "solutionLink": ""
  },
  {
    "problemName": "0154 - Find Minimum in Rotated Sorted Array II",
    "difficulty": "Hard",
    "leetCodeLink": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
    "solutionLink": ""
  },
  {
    "problemName": "0162 - Find Peak Element",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/find-peak-element/",
    "solutionLink": ""
  },
  {
    "problemName": "1011. Capacity To Ship Packages Within D Days",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    "solutionLink": ""
  },
  {
    "problemName": "74. Search a 2D Matrix",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
    "solutionLink": ""
  },
  {
    "problemName": "240. Search a 2D Matrix II",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
    "solutionLink": ""
  }
]

<Table title="Suggested Problems" data={suggestedProblems} />