---
description: 'Author: @wingkwong | https://leetcode.com/problems/sort-an-array/'
tags: ['sorting']
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0921 - Sort an Array (Medium)

## Problem Link

https://leetcode.com/problems/sort-an-array/

## Problem Statement

Given an array of integers `nums`, sort the array in ascending order.

**Example 1:**

```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
```

**Example 2:**

```
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
```

**Constraints:**

* `1 <= nums.length <= 5 * 10^4`
* `-5 * 10^4 <= nums[i] <= 5 * 10^4`

## Approach 1: STL

### Standard STL Sort

<SolutionAuthor name="@wingkwong"/>

```cpp
void standardSTLSort(vector<int>& nums) {
    sort(nums.begin(), nums.end());
}
```

### Stable STL Sort

<SolutionAuthor name="@wingkwong"/>

```cpp
void stableSTLSort(vector<int>& nums) {
    stable_sort(nums.begin(), nums.end());
}
```

## Approach 2: Quick Sort

### Quick Sort with Fixed Pivot (TLE)

<SolutionAuthor name="@wingkwong"/>

```cpp
int partition(vector<int>& nums, int l, int r) {
    int pivot = nums[r];
    int i = l - 1;
    for (int j = l; j <= r - 1; j++) {
        if (nums[j] < pivot) {
            i++;
            swap(nums[i], nums[j]);
        }
    }
    swap(nums[i + 1], nums[r]);
    return i + 1;
}

void quickSort(vector<int>& nums, int l, int r) {
    if (l < r) {
        int pivot = partition(nums, l, r);
        quickSort(nums, l, pivot - 1);
        quickSort(nums, pivot + 1, r);
    }
}
```

### Quick Sort with Randomised Pivot

<SolutionAuthor name="@wingkwong"/>

```cpp
int partition(vector<int>& nums, int l, int r) {
    int pivot = nums[r];
    int i = l - 1;
    for (int j = l; j <= r - 1; j++) {
        if (nums[j] < pivot) {
            i++;
            swap(nums[i], nums[j]);
        }
    }
    swap(nums[i + 1], nums[r]);
    return i + 1;
}

void quickSort(vector<int>& nums, int l, int r) {
    if (l < r) {
        swap(nums[l + rand() % (r - l)], nums[r]);
        int pivot = partition(nums, l, r);
        quickSort(nums, l, pivot - 1);
        quickSort(nums, pivot + 1, r);
    }
}
```
