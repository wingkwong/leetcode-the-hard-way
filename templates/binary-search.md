---
title: 'Binary Search'
description: 'Binary search is the searching strategy that reduces the search space by half every iteration until you have found the target.'
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - binary search
---

Please refer the [tutorial](../tutorials/basic-topics/binary-search) guide for more details. 

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
int search(vector<int>& nums, int target) {
    // init possible boundary
    int n = nums.size(), l = 0, r = n - 1;
    while (l < r) {
        // get the middle one
        // for even number of elements, take the upper one
        int m = l + (r - l + 1) / 2;
        // exclude m (condition not fulfilled)
        if (target < nums[m]) r = m - 1;
        // include m
        else l = m;
    }
    return nums[l] == target ? l : -1;
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
int search(int[] nums, int target) {
    // init possible boundary
    int n = nums.length, l = 0, r = n - 1;
    while (l < r) {
        // get the middle one
        // for even number of elements, take the upper one
        int m = l + (r - l + 1) / 2;
        // exclude m (condition not fulfilled)
        if (target < nums[m]) r = m - 1;
        // include m
        else l = m;
    }
    return nums[l] == target ? l : -1;
}
```

</TabItem>
</Tabs>


<Tabs>
<TabItem value="cpp" label="C++">

```cpp
int search(vector<int>& nums, int target) {
    // init possible boundary
    int n = nums.size(), l = 0, r = n - 1;
    while (l < r) {
        // get the middle one
        // for even number of elements, take the lower one
        int m = l + (r - l) / 2;
        // exclude m (condition not fulfilled)
        if (target > nums[m]) l = m + 1;
        // include m
        else r = m;
    }
    return nums[l] == target ? l : -1;
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
int search(int[] nums, int target) {
    // init possible boundary
    int n = nums.length, l = 0, r = n - 1;
    while (l < r) {
        // get the middle one
        // for even number of elements, take the lower one
        int m = l + (r - l) / 2;
        // exclude m (condition not fulfilled)
        if (target > nums[m]) l = m + 1;
        // include m
        else r = m;
    }
    return nums[l] == target ? l : -1;
}
```

</TabItem>
</Tabs>