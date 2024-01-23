---
description: 'Author: @heder | https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/'
tags: [Array, String, Backtracking, Bit Manipulation]
---

# 1239 - Maximum Length of a Concatenated String with Unique Characters (Medium) 

## Problem Link

https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

## Problem Statement

You are given an array of strings `arr`. A string `s` is formed by the **concatenation** of a **subsequence** of `arr` that has **unique characters**.

Return *the **maximum** possible length* of `s`.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

**Example 1:**

```
Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All the valid concatenations are:
- ""
- "un"
- "iq"
- "ue"
- "uniq" ("un" + "iq")
- "ique" ("iq" + "ue")
Maximum length is 4.
```

**Example 2:**

```
Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act" + "ers").
```

**Example 3:**

```
Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
Explanation: The only string in arr has all 26 characters.
```

**Constraints:**

- $1 <= arr.length <= 16$
- $1 <= arr[i].length <= 26$
- $arr[i]$ contains only lowercase English letters.

## Approach 1: Bitmasking and generating valid subsets (0ms)

We are turn the input array into bitmasks. Each character `'a' ... 'z'` gets it's own bit. With that we can quickly check with `and` if there is a conflict and then expand the match with `or`. Once we have bitmasks for each element in `arr` we are expanding the set of possible solutions and then just look for the largest one.

Complexity Analysis:

If $$n$$ is the size of `arr` then the

- Time complexity is $$O(2^n)$$ as we potentially creating the full powerset of arr, and the same is true for the
- Space complexity which is also $$O(2^n)$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int maxLength(const vector<string>& arr) {
    // Turn |arr| into bitmasks.
    vector<int> bms;
    bms.reserve(arr.size());
    for (const string& a : arr) {
        const int m = bitmask(a);
        if (m != -1) bms.push_back(m);
    }
    
    // Expand the bitmasks if there is no conflict.
    vector<int> as;
    for (int bm : bms) {
        int as_size = as.size();
        for (int i = 0; i < as_size; ++i)
            if (!(as[i] & bm)) as.push_back(as[i] | bm);
        as.push_back(bm);
    }
    
    // Look for the bitmask with the most bits set.
    int ans = 0;
    for (int a : as) ans = max(ans, __builtin_popcount(a));
    return ans;
}

// Turns |a| into a bitmask for each character present.
//   Returns -1 if the characters are not unique.
static int bitmask(const string& a) {
    int ans = 0;
    for (char ch : a) {
        const int mask = 1 << (ch - 'a');
        if (ans & mask) return -1;
        ans |= mask;
    }
    return ans;
}
```

</TabItem>
</Tabs>

Picking up an idea from @stanislav-iablokov's solution to make the conversion into a bitmask shorter, we end up this:

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int maxLength(const vector<string>& arr) {
    // Turn |arr| into bitmasks.
    vector<int> bms;
    bms.reserve(arr.size());
    for (const string& a : arr) {
        int m = 0;
        for (char ch : a) m |= 1 << (ch - 'a');
        // Are all the characters in |a| unique?
        if (__builtin_popcount(m) == size(a))
            bms.push_back(m);
    }
    
    // Expand the bitmasks if there is no conflict.
    vector<int> as;
    for (int bm : bms) {
        int as_size = as.size();
        for (int i = 0; i < as_size; ++i)
            if (!(as[i] & bm)) as.push_back(as[i] | bm);
        as.push_back(bm);
    }
    
    // Look for the bitmask with the most bits set.
    int ans = 0;
    for (int a : as) ans = max(ans, __builtin_popcount(a));
    return ans;
}
```

</TabItem>
</Tabs>

Other thing I like about @stanislav-iablokov's solution is how it handles iterating over the existing part of all combinations while expanding it, instead of:

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
int as_size = as.size();
for (int i = 0; i < as_size; ++i)
    if (!(as[i] & bm)) as.push_back(as[i] | bm);
```

</TabItem>
</Tabs>

It does:

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
for (int i = size(as) - 1; i >= 0; --i)
    if (!(as[i] & bm)) as.push_back(as[i] | bm);
```

</TabItem>
</Tabs>