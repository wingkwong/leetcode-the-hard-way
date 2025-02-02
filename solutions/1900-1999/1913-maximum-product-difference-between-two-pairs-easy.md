---
description: 'Author: @heder, @wkw, @jit, @jaffar | https://leetcode.com/problems/maximum-product-difference-between-two-pairs/'
tags: [Array, Sorting]
---

# 1913 - Maximum Product Difference Between Two Pairs (Easy)

## Problem Link

https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

## Problem Statement

The **product difference** between two pairs `(a, b)` and `(c, d)` is defined as `(a * b) - (c * d)`.

- For example, the product difference between `(5, 6)` and `(2, 7)` is `(5 * 6) - (2 * 7) = 16`.

Given an integer array `nums`, choose four **distinct** indices `w`, `x`, `y`, and `z` such that the **product difference** between pairs `(nums[w], nums[x])` and `(nums[y], nums[z])` is **maximized**.

Return _the **maximum** such product difference_.

**Example 1:**

```
Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.
```

**Example 2:**

```
Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.
```

**Constraints:**

- $4 <= nums.length <= 10^4$
- $1 <= nums[i] <= 10^4$

## Approach 1: Sorting

In order to maximize the value of $a * b - c * d$, we need to maximize $a * b$ and minimize $c * d$. Since all numbers are positive, we can simply choose the largest two elements for $a$ and $b$ and smallest two elemnts for $c$ and $d$.

#### Complexity Analysis

- Time Complexity: $$O(n \log n)$$ -- because of the std::sort.
- Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int maxProductDifference(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        return nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
    }
};
```

</TabItem>

<TabItem value="racket" label="Racket">
<SolutionAuthor name="@jit"/>

```racket
(define (max-product-difference nums)
  (match (sort nums <)
    [(list a b _ ... c d) (- (* c d) (* a b))]))
```

</TabItem>
</Tabs>

## Approach 2: Partial Sort

We don't need to sort all of nums, only a partial sort to get the smallest two numbers and the largest two numbers is enough.

#### Complexity Analysis

- Time Complexity: According to cppreference.com the time complexity for `std::partial_sort` is approximately $(last - first) log (middle - first)$. In our case $(last - first)$ is $n$ and $(middle - first)$ is $2$ hence we have $$O(n \log 2)$$ so basically $$O(n)$$.
- Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
class Solution {
public:
    static int maxProductDifference(vector<int>& nums) {
        partial_sort(begin(nums), next(begin(nums), 2), end(nums));
        partial_sort(next(begin(nums), 2), next(begin(nums), 4), end(nums), greater<>());
        return nums[2] * nums[3] - nums[0] * nums[1];
    }
};
```

</TabItem>
</Tabs>

## Approach 3: nth_element()

Multiplication is commutative, i.e. it doesn't matter in which order we multiple the two largest and the two smallest element. With that the don't even need to be sorted.

#### Complexity Analysis

- Time Complexity: $$O(n)$$ for quick select
- Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
class Solution {
public:
    static int maxProductDifference(vector<int>& nums) {
        nth_element(begin(nums), next(begin(nums), 2), end(nums));
        nth_element(next(begin(nums), 2), next(begin(nums), 4), end(nums), greater<>());
        return nums[2] * nums[3] - nums[0] * nums[1];
    }
};
```

</TabItem>
</Tabs>

## Approach 4: Linear Scan

The solutions so far have modified nums. We can also just scan through nums and keep track of the first and second minimum / maximum element.

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
class Solution {
public:
    static int maxProductDifference(const vector<int>& nums) {
        int mx1 = numeric_limits<int>::min();
        int mx2 = numeric_limits<int>::min();
        int mn1 = numeric_limits<int>::max();
        int mn2 = numeric_limits<int>::max();
        for (const int n : nums) {
            if (n > mx1) {
                mx2 = mx1;
                mx1 = n;
            } else if (n > mx2) {
                mx2 = n;
            }
            if (n < mn1) {
                mn2 = mn1;
                mn1 = n;
            } else if (n < mn2) {
                mn2 = n;
            }
        }
        return mx1 * mx2 - mn1 * mn2;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@jaffar"/>

```py
class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        min1 = min2 = float('inf')
        max1 = max2 = float('-inf')
        for num in nums:
            if num <= min1:
                min2 = min1
                min1 = num
            elif num <= min2:
                min2 = num
            if num >= max1:
                max2 = max1
                max1 = num
            elif num >= max2:
                max2 = num
        return int(max1 * max2 - min1 * min2)
```

</TabItem>
</Tabs>

## Approach 5: Sort first 4 element and then linear scan

This is based on a solution from @ZX007PI. With this tweak only of one series of if / else instead of two like in solution 4, and we could argue this safes a branch. This variant of approach 4 modifies the input again.

#### Complexity Analysis

- Time Complexity: $$O(n)$$ we only sort 4 elements so the complexity remains linear.
- Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
class Solution {
public:
    static int maxProductDifference(vector<int>& nums) {
        sort(begin(nums), next(begin(nums), 4));
        int mx1 = nums[3];
        int mx2 = nums[2];
        int mn1 = nums[0];
        int mn2 = nums[1];
        for (int i = 4; i < size(nums); ++i) {
            const int n = nums[i];
            if (n >= mx1) {
                mx2 = mx1;
                mx1 = n;
            } else if (n > mx2) {
                mx2 = n;
            } else if (n <= mn1) {
                mn2 = mn1;
                mn1 = n;
            } else if (n < mn2) {
                mn2 = n;
            }
        }
        return mx1 * mx2 - mn1 * mn2;
    }
};
```

</TabItem>
</Tabs>

## Approach 6: Min / Max Heap

It's maybe a bit of an overkill to use a heap to solve this problem, but why not. I have seen some variants that push all elements on the the heap (`priority_queue`) without limiting the size to two elements, but that's a waste as we can keep the size of the heap bounded, which leads to better time / space complexity.

#### Complexity Analysis

- Time Complexity: $$O(n)$$ we do at most 2 comparisons per heap.
- Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
class Solution {
public:
     static int maxProductDifference(const vector<int>& nums) {
        // The largest element will be on top and we will always
        // pull of the largest element and it will result in having
        // the smallest element remaining.
        priority_queue<int> max_heap;
        // ... and the other way around for the min heap.
        priority_queue<int, vector<int>, greater<>> min_heap;
        for (const int n : nums) {
            max_heap.push(n);
            if (size(max_heap) == 3) {
                max_heap.pop();
            }
            min_heap.push(n);
            if (size(min_heap) == 3) {
                min_heap.pop();
            }
        }
        const int mn1 = max_heap.top(); max_heap.pop();
        const int mn2 = max_heap.top();
        const int mx1 = min_heap.top(); min_heap.pop();
        const int mx2 = min_heap.top();

        return mx1 * mx2 - mn1 * mn2;
    }
};
```

</TabItem>
</Tabs>

There is a variant to this solution where we only push on to the heap if that would actually make a different, either because the heap as fewer than 2 elments or the top element is other smaller or bigger so inserting would actually make a difference. The loop would like this:

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
for (const int n : nums) {
    if (size(max_heap) < 2 || n < max_heap.top()) {
        max_heap.push(n);
        if (size(max_heap) == 3) max_heap.pop();
    }
    if (size(min_heap) < 2 || n > min_heap.top()) {
        min_heap.push(n);
        if (size(min_heap) == 3) min_heap.pop();
    }
}
```

</TabItem>
</Tabs>
