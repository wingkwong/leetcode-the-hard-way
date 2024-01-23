---
description: 'Author: @heder | https://leetcode.com/problems/set-mismatch/'
tags: [Array, Hash Table, Bit Manipulation, Sorting]
---

# 0645 - Set Mismatch (Easy) 

## Problem Link

https://leetcode.com/problems/set-mismatch/

## Problem Statement

You have a set of integers `s`, which originally contains all the numbers from `1` to `n`. Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the set, which results in **repetition of one** number and **loss of another** number.

You are given an integer array `nums` representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return *them in the form of an array*.

**Example 1:**

```
Input: nums = [1,2,2,4]
Output: [2,3]
```

**Example 2:**

```
Input: nums = [1,1]
Output: [1,2]
```

**Constraints:**

- $2 <= nums.length <= 10^4$
- $1 <= nums[i] <= 10^4$

## Approach 1: Frequency Count

We could consider using an std::unordered_map or std::map, but since we expect almost all elements to be present a std::vector is the best choice. By using an `vector<char>` instead of a `vector<int>` we can safe some memory, as the highest frequency we are expecting is 2.

Let $$n$$ by the size of the input vector then the

- Time complexity is $$O(n)$$ because we need to scan all the input and we need to scan the frequency vector, which are both of size $$n$$ and the
- Space complexity is $$O(n)$$ for the frequency vector.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static vector<int> findErrorNums(const vector<int>& nums) {
    const int n = size(nums);
    // The frequency is at most 2, hence a |char| is big enough, actually 2 bits would be enough.
    vector<char> freq(n + 1);
    for (int num : nums) ++freq[num];
    int dup = -1;
    int miss = -1;
    for (int i = 1; i <= n; ++i) {
        if (freq[i] == 2) {
            dup = i;
        } else if (freq[i] == 0) {
            miss = i;
        }
    }
    return {dup, miss};
}
```

If we want to could add an early exit in the second loop, i.e. stop when have found the duplicate and the missing number:


<SolutionAuthor name="@heder"/>

```cpp
        int dup = -1;
        int miss = -1;
        for (int i = 1; i <= n; ++i) {
            if (freq[i] == 2) {
                dup = i;
                if (miss != -1) break;
            } else if (freq[i] == 0) {
                miss = i;
                if (dup != -1) break;
            }
        }
        return {dup, miss};
```
</TabItem>
</Tabs>

## Approach 2: Seen Bit

Instead of frequency counting we just keep track if we have seen a number before, this is enough to identify the duplicate and the missing number. If we want we could replace `vector<bool> seen(n + 1)` with a fixed size `bitset<10240>` seen.

The constant factors for the space complexity are lower for this approach, but otherwise the complexity analysis is the same as for approach 1.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static vector<int> findErrorNums(const vector<int>& nums) {
    const int n = size(nums);
    vector<bool> seen(n + 1);
    int dup = -1;
    for (int num : nums) {
        if (seen[num]) dup = num;
        seen[num] = true;
    }
    int miss = -1;
    for (int i = 1; i <= n; ++i) {
        if (!seen[i]) {
            miss = i;
            break;
        }
    }
    return {dup, miss};
}
```

</TabItem>
</Tabs>

## Approach 3: Seen bit in-place

If we are willing to at least temporarily modify the input vector we can "borrow" the bits we need to keep track from the input vector, as the range of numbers is limited. For the first variant we are using bit 17 because the input range is limited to 10000.

The difference to approach 1 and 2 is that we a "borrowing" bits from the input vector, so we could argue that the space complexity is $$O(1)$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static vector<int> findErrorNums(vector<int>& nums) {
    const int n = size(nums);
    const int mask = 0xFFFF;
    const int seen = 1 << 17;
    int dup = -1;
    for (int num_and_seen : nums) {
        const int num = num_and_seen & mask;
        if (nums[num - 1] & seen) dup = num;
        nums[num - 1] |= seen;
    }
    int miss = -1;
    for (int i = 1; i <= n; ++i) {
        if (!(nums[i - 1] & seen)) {
            miss = i;
            break;
        }
    }
    // Optional: reset |nums| again.
    for (int& num_and_seen : nums) num_and_seen &= mask;
    return {dup, miss};
}
```

A very common variant of this idea is the use the highest bit of an integer, i.e. the sign bit, which leads to an implementation like the following (details may vary):


<SolutionAuthor name="@heder"/>

```cpp
static vector<int> findErrorNums(vector<int>& nums) {
    const int n = size(nums);
    int dup = -1;
    for (int num_and_sign : nums) {
        const int num = abs(num_and_sign);
        if (nums[num - 1] < 0) {
            dup = num;
        } else {
            nums[num - 1] *= -1;
        }
    }
    int miss = -1;
    for (int i = 1; i <= n; ++i) {
        if (nums[i - 1] > 0) {
            miss = i;
            break;
        }
    }
    // Optional: reset |nums| again.
    for (int& num : nums) num = abs(num);
    return {dup, miss};
}
```

</TabItem>
</Tabs>

## Approach 4: Sort & Scan

If we would know that the input is already sorted we could just do a linear scan. However we don't know for sure, and hence we sort the input before scanning it for the duplicate and the missing number. Note that this approach needs a bit of extra care if the first or the last number is missing. Doing an early exit would still be possible though with a bit of extra state. NB this approach is modifying the input permanently, and if that's not an option we would need to make a copy of the input first.

Let $$n$$ by the size of the input vector then the

- Time complexity is $$O(n \log n)$$ for sorting the input, the rest is $$O(n)$$, and the
- Space complexity is $$O(1)$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static vector<int> findErrorNums(vector<int>& nums) {
    const int n = size(nums);
    // If we don't want to modify the input permanently we would need to make a copy here.
    sort(begin(nums), end(nums));
    int dup = -1;
    int miss = 1;
    for (int i = 1; i < n; ++i) {
        if (nums[i - 1] == nums[i]) {
            dup = nums[i];
        } else if (nums[i - 1] + 1 < nums[i]) {
            miss = nums[i - 1] + 1;
        }
    }
    return {dup, nums.back() != n ? n : miss};
}
```

</TabItem>
</Tabs>

## Approach 5: Math

My first instinct was that doing something based on the total sum of the first $$n$$ natural numbers, i.e. $$\frac{n (n + 1)}{2}$$, but unless I am mistaken this would only give us a clue about the missing number, and we would still need another approach to find the duplicate or vs. Nevertheless if we are willing to compute the unique numbers in nums this could look like this:

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static vector<int> findErrorNums(const vector<int>& nums) {
    const int sum = reduce(begin(nums), end(nums));
    const unordered_set<int> unique_nums(begin(nums), end(nums));
    const int unique_sum = reduce(begin(unique_nums), end(unique_nums));
    const int gauss = size(nums) * (size(nums) + 1) / 2;
    return {sum - unique_sum, gauss - unique_sum};
}
```

</TabItem>
</Tabs>

Note that we could use std::accumulate instead of std::reduce and that we need to extra space for the unordered_map.

However, I saw this post from @kanna17vce, which is using a different approach and is very clever and I learned something new today.

<SolutionAuthor name="@heder"/>

```cpp
static vector<int> findErrorNums(const vector<int>& nums) {
    long diff = 0;
    long square_diff = 0;
    for (int i = 0; i < size(nums); ++i) {
        diff += i + 1 - nums[i];
        square_diff += (i + 1) * (i + 1) - nums[i] * nums[i];
    }
    long s = square_diff / diff;
    const int dup = (s - diff) / 2;
    const int miss = (s + diff) / 2;
    return {dup, miss};
}
```

Btw. @pankaj_777 posted [a variant of the this idea](https://leetcode.com/problems/set-mismatch/discuss/2733783/DAILY-LEETCODE-SOLUTION-oror-EASY-C%2B%2B-SOLUTION) which is maybe a bit easier to understand, but is a bit less robust against overflows.

Why and how does this approach work?
Let's assume $$m$$ is the missing number and $$d$$ is the duplicate.

We can observe that sum of all natural numbers from $$1$$ to $$n$$ minus the sum of all the elements in the array, will be $$m - d$$ as the missing number $$m$$ will be in the sum of all numbers and we have the duplicate twice in nums, formally:

$$\sum_{i=1}^{n} i - \sum_{i=0}^{n-1} nums[i] = \sum_{i=0}^{n-1} (i + 1) - nums[i] = m - d = diff$$

We can make a similar observation for the sum of the squares, formally:

$$\sum_{i=1}^{n} i^2 - \sum_{i=0}^{n-1} nums[i]^2 = \sum_{i=0}^{n-1} (i + 1)^2 - nums[i]^2 = m^2 - d^2 = square_sum$$

Now let $$s = square_sum / diff = \frac{(m + d)(m - d)}{m - d} = m + d$$ with that $$m = \frac{s + diff}{2} = \frac{m + d + m - d}{2}$$ and $$d = \frac{s - diff}{2} = \frac{m + d - m + d}{2}$$. Maybe not the best formal proof, but it was good enough to convince myself that this approach works.

Let $$n$$ by the size of the input vector then the

- Time complexity is $$O(n)$$ and the
- Space complexity is $$O(1)$$.

## Approach 6: XOR

This is based on a underrated solution by @morning_coder.

TODO(heder): Outline how and why this works. It's based on the same idea as finding a missing number in $$1$$ to $$n$$ and then we xor_value will not be zero we take one bit that's set in there (w/o loss of generality we take the right most set bit) and look for numbers that have this bit set and take the xor value of those again. With that we are almost there we only need to decide now of this number is the duplicate or the missing number.

Let $$n$$ by the size of the input vector then the

- Time complexity is $$O(n)$$ and the
- Space complexity is $$O(1)$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
    static vector<int> findErrorNums(const vector<int>& nums) {
        int xor_value = 0;
        for (int num : nums) xor_value ^= num;
        for (int i = 1; i <= size(nums); ++i) xor_value ^= i;
        const int rightmost_bit = xor_value & ~(xor_value - 1);
        int repeated_num = 0;
        for (int num : nums)
            if (num & rightmost_bit) repeated_num ^= num;
        for (int i = 1; i <= size(nums); ++i)
            if (i & rightmost_bit) repeated_num ^= i;
        if (find(begin(nums), end(nums), repeated_num) == end(nums)) {
            return {xor_value ^ repeated_num, repeated_num};
        } else {
            return {repeated_num, xor_value ^ repeated_num};
        }
    }
```

</TabItem>
</Tabs>