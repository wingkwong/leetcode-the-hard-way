---
description: 'Author: @wingkwong'
---

# Sorting

Sorting refers to rearranging elements in a specific order. The most common order is either ascending or descending. There are a lot of algorithms to sort the array with different time complexity.&#x20;

Let's take a look at [0912 - Sort an Array](https://leetcode.com/problems/sort-an-array/).

> Given an array of integers nums, sort the array in ascending order.

### Standard STL Sort

```cpp
void standardSTLSort(vector<int>& nums) {
    sort(nums.begin(), nums.end());
}
```

### Stable STL Sort

```cpp
void stableSTLSort(vector<int>& nums) {
    stable_sort(nums.begin(), nums.end());
}
```

### Quick Sort

#### Quick Sort with Fixed Pivot (TLE)

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

#### Quick Sort with Randomised Pivot

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
