---
description: 'Author: @heder | https://leetcode.com/problems/count-elements-with-maximum-frequency/'
tags: [Array, Hash Table, Counting]
---

# 3005 - Count Elements With Maximum Frequency (Easy)

## Problem Link

https://leetcode.com/problems/count-elements-with-maximum-frequency/

## Problem Statement

You are given an array `nums` consisting of **positive** integers.

Return _the **total frequencies** of elements in_`nums` *such that those elements all have the **maximum** frequency*.

The **frequency** of an element is the number of occurrences of that element in the array.

**Example 1:**

```
Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.
```

**Example 2:**

```
Input: nums = [1,2,3,4,5]
Output: 5
Explanation: All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5.
```

**Constraints:**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Approach 1: frequency count, get max, accumulate

The first approach is to do a frequency count first, then find the maximum frequency, and finally sum up all the frequency that are equal the the max.

Let $$n$$ be the number of elements of nums, then the

- Time complexity is $$O(n)$$ as nums could only have distinct elements and then we are doing 3 passes over the data, and the

- Space comlexity is $$O(n)$$ as the hash map could grow to the size of the input.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int maxFrequencyElements(const vector<int>& nums) {
    // frequency count
    unordered_map<int, int> cnt;
    for (int num : nums) ++cnt[num];
    // find max count
    int mx = 0;
    for (auto [num, c] : cnt) mx = max(mx, c);
    // sum up max counts
    int ans = 0;
    for (auto [num, c] : cnt)
        if (c == mx) ans += c;
    return ans;
}
```

</TabItem>
</Tabs>

### Variant 1: use an array instead of a hash map

The input range for the elements of nums is quite limited, we can use and std::array instead of an std::unordered_map for the frequency count.

Let $$n$$ be the number of elements of nums and $$m$$ be size of the input range $$(1, ..., 100)$$, then the

- Time complexity is $$O(n +2 m)$$ as we need to scan over nums and need two passes over the frequency count array, and the

- Space comlexity is $$O(1)$$ as we have a fixed size frequency count array that doesn't grow with the input.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int maxFrequencyElements(const vector<int>& nums) {
    // frequency count
    array<int, 101> cnt = {};
    for (int num : nums) ++cnt[num];
    // find max count
    int mx = 0;
    for (int c : cnt) mx = max(mx, c);
    // sum up max counts
    int ans = 0;
    for (int c : cnt)
        if (c == mx) ans += c;
    return ans;
}
```

</TabItem>
</Tabs>

### Variant 2: use more standard library

If we feel fancy, we could replace a few of the raw loops with stanard library functions

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
 static int maxFrequencyElements(const vector<int>& nums) {
        array<int, 101> cnt = {};
        for (int num : nums) ++cnt[num];
        int ans = 0;
        int mx = *max_element(begin(cnt), end(cnt));
        return accumulate(begin(cnt), end(cnt), 0, [mx](int s, int x) {
            return s + (x == mx) * x;
        });
    }
```

</TabItem>
</Tabs>

## Approach 2: frequency count, single pass over the frequency count array

We could optimize the two passes over the frequency count array into one and compute the answer as we go.

Let $$n$$ be the number of elements of nums and $$m$$ be size of the input range $$(1, ..., 100)$$, then the

- Time complexity is $$O(n + m)$$ as we need to scan over nums and need a pass over the frequency count array, and the

- Space comlexity is $$O(1)$$ as we have a fixed size frequency count array that doesn't grow with the input.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int maxFrequencyElements(const vector<int>& nums) {
    // frequency count
    array<int, 101> cnt = {};
    for (int num : nums) ++cnt[num];
    // compute answer
    int ans = 0;
    int mx = 0;
    for (int c : cnt) {
        if (c > mx) {
            ans = c;
            mx = c;
        } else if (c == mx) {
            ans += c;
        }
    }
    return ans;
}
```

</TabItem>
</Tabs>

## Approach 3: compute max during frequency count and then sum up

Instead of doing an extra pass over the frequency count array we can keep track of the maximum while doing the frequency count.

Let $$n$$ be the number of elements of nums and $$m$$ be size of the input range $$(1, ..., 100)$$, then the

- Time complexity is $$O(n + m)$$ as we need to scan over nums and need a pass over the frequency count array, and the

- Space comlexity is $$O(1)$$ as we have a fixed size frequency count array that doesn't grow with the input.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int maxFrequencyElements(const vector<int>& nums) {
    // frequency count and find maximum
    array<int, 101> cnt = {};
    int mx = 0;
    for (int num : nums) mx = max(mx, ++cnt[num]);
    // sum up max counts
    int ans = 0;
    for (int c : cnt)
        if (c == mx) ans += c;
    return ans;
}
```

</TabItem>
</Tabs>

## Approach 4: single pass

We can take the ideas from approach 2 and 3 a step further and do all the work in a single pass.

Let $$n$$ be the number of elements of nums and $$m$$ be size of the input range $$(1, ..., 100)$$, then the

- Time complexity is $$O(n)$$ as we need to scan over nums, and the

- Space comlexity is $$O(1)$$ as we have a fixed size frequency count array that doesn't grow with the input.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int maxFrequencyElements(const vector<int>& nums) {
    array<int, 101> cnt = {};
    int ans = 0;
    int mx = 0;
    for (int num : nums) {
        const int c = ++cnt[num];
        if (c > mx) {
            ans = c;
            mx = c;
        } else if (c == mx) {
            ans += c;
        }
    }
    return ans;
}
```

</TabItem>
</Tabs>
