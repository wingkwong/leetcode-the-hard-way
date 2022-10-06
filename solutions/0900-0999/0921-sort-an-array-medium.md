---
description: 'Author: @wingkwong, @deepanshu-rawat6 | https://leetcode.com/problems/sort-an-array/'
tags: ['sorting']
---

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

### Approach 3: Merge Sort

### Merge Sort with Outplace Merging

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@deepanshu-rawat6"/>

```java
public static int[] mergeSort(int[] arr) {
    if (arr.length == 1) {
        return arr;
    }

    int mid = arr.length / 2;
    // coppying and sorting sub-array by division on the basis of mid value
    int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid));
    int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));

    return merge(left, right);
}

public static int[] merge(int[] first, int[] second) {
    int[] mix = new int[first.length + second.length];

    int i = 0;
    int j = 0;
    int k = 0;
    // adding elements in the mix array in ascending order
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            mix[k] = first[i];
            i++;
        } else {
            mix[k] = second[j];
            j++;
        }
        k++;
    }

    // it may be possible that one of the arrays is not complete
    // copy the remaining elements
    while (i < first.length) {
        mix[k] = first[i];
        i++;
        k++;
    }

    while (j < second.length) {
        mix[k] = second[j];
        j++;
        k++;
    }

    return mix;
}
```
</TabItem>
</Tabs>

### Merge Sort using In-place Merging

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@deepanshu-rawat6"/>

```java
public void mergeSort(int[] arr, int s, int e) {
    if (e - s == 1) {
        return;
    }

    int mid = (s + e) / 2;
    // Dividing sub-arrays by mid values till, sub-array length reaches one
    mergeSort(arr, s, mid);
    mergeSort(arr, mid, e);

    mergeInPlace(arr, s, mid, e);
}

public static void mergeInPlace(int[] arr, int s, int m, int e) {
    int[] mix = new int[e - s];

    int i = s;
    int j = m;
    int k = 0;
    // adding elements in the mix array in ascending order
    while (i < m && j < e) {
        if (arr[i] < arr[j]) {
            mix[k] = arr[i];
            i++;
        } else {
            mix[k] = arr[j];
            j++;
        }
        k++;
    }

    // it may be possible that one of the arrays is not complete
    // copy the remaining elements
    while (i < m) {
        mix[k] = arr[i];
        i++;
        k++;
    }

    while (j < e) {
        mix[k] = arr[j];
        j++;
        k++;
    }

    for (int l = 0; l < mix.length; l++) {
        arr[s+l] = mix[l];
    }
}
```
</TabItem>
</Tabs>