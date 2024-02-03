---
description: 'Author: @heder | https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/'
tags: [Array, Math]
---

# 2455 - Average Value of Even Numbers That Are Divisible by Three (Easy) 

## Problem Link

https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/

## Problem Statement

Given an integer array `nums` of **positive** integers, return *the average value of all even integers that are divisible by* `3`*.*

Note that the **average** of `n` elements is the **sum** of the `n` elements divided by `n` and **rounded down** to the nearest integer.

**Example 1:**

```
Input: nums = [1,3,6,10,12,15]
Output: 9
Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.
```

**Example 2:**

```
Input: nums = [1,2,4,7,10]
Output: 0
Explanation: There is no single number that satisfies the requirement, so return 0.
```

**Constraints:**

- $1 <= nums.length <= 1000$
- $1 <= nums[i] <= 1000$

## Approach 1: Scan and count

This is straight forward. We could simplify the condition `if (num % 2 == 0 && num % 3 == 0)` to `if (num % 6 == 0)`.

- Time complexity: $$O(n)$$ we need to look at all the numbers in nums
- Space complexity: $$O(1)$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int averageValue(const vector<int>& nums) {
    int sum = 0;
    int count = 0;
    for (int num : nums) {
        if (num % 2 == 0 && num % 3 == 0) {
            sum += num;
            ++count;
        }
    }
    return count ? sum / count : 0;
}
```

</TabItem>
</Tabs>

## Approach 2: Partition the input

If we are willing to modify the input vector $nums$ we could also parition the input and do something like below. Instead of `std::reduce` we could use `std::accumulate`, but integer addition is associative and commutative so we can use `std::reduce` here. We are potentialy doing more work, but the overall complexity remains the same as with the first approach.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int averageValue(vector<int>& nums) {
    auto it = partition(begin(nums), end(nums), [](int num) { return num % 6 == 0; });
    return it == begin(nums) ? 0 : reduce(begin(nums), it) / distance(begin(nums), it);
}
```

</TabItem>
</Tabs>