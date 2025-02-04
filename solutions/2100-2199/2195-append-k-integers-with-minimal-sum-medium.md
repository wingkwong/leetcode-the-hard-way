---
description: >-
  Author: @wkw | https://leetcode.com/problems/append-k-integers-with-minimal-sum/
---

# 2195 - Append K Integers With Minimal Sum (Medium)

## Problem Link

https://leetcode.com/problems/append-k-integers-with-minimal-sum/

## Problem Statement

You are given an integer array `nums` and an integer `k`. Append `k` **unique positive** integers that do **not** appear in `nums` to `nums` such that the resulting total sum is **minimum**.

Return _the sum of the_ `k` _integers appended to_ `nums`.

**Example 1:**

```
Input: nums = [1,4,25,10,25], k = 2
Output: 5
Explanation: The two unique positive integers that do not appear in nums which we append are 2 and 3.
The resulting sum of nums is 1 + 4 + 25 + 10 + 25 + 2 + 3 = 70, which is the minimum.
The sum of the two integers appended is 2 + 3 = 5, so we return 5.
```

**Example 2:**

```
Input: nums = [5,6], k = 6
Output: 25
Explanation: The six unique positive integers that do not appear in nums which we append are 1, 2, 3, 4, 7, and 8.
The resulting sum of nums is 5 + 6 + 1 + 2 + 3 + 4 + 7 + 8 = 36, which is the minimum.
The sum of the six integers appended is 1 + 2 + 3 + 4 + 7 + 8 = 25, so we return 25.
```

**Constraints:**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i], k <= 10^9`

## Approach 1: Sum of Consecutive Numbers

First we sort the input. For each number $$x$$, we need to know how many numbers between $$prev$$ to $$x - 1$$, where the initial value $$prev$$ is $$0$$. For example, if the first number is $$4$$, then we need to append $$4 - 0 - 1 = 3$$ numbers. If we don't need to append any number, we simply set $$prev := x$$.

If we need to append some numbers, then the next question is how many numbers we can append. Remember that we just need to append $$k$$ numbers.

If $$k$$ is greater than / equal to what we need, we update $$k := k - need$$ and add the consecutive sum between $$prev$$ to $$x$$ which is $$((prev + 1) + (x - 1)) * need / 2$$. For example, if $$prev$$ is $$1$$ and $$x$$ is $$4$$, then the consecutive sum between them is $$((1 + 1) + (4 - 1)) * 2 / 2 = 5$$, i.e $$2 + 3$$. Then we update $$prev := x$$. If we have already appended $$k$$ numbers, then we can return the answer.

> The consecutive sum between $$start$$ and $$end$$ is simply $$(start + end) * n / 2$$. If you are interested in how to get this formula, please check out [0829 - Consecutive Numbers Sum (Hard)](../0800-0899/consecutive-numbers-sum-hard).

The other case is we just need to append $$k$$ numbers. Then we simply add $$(prev * 2 + k + 1) * k$$ and return the answer.

In case we still need to append some numbers after the last element of the input $$last$$. Then we add $$((last + 1) + (last + k)) * k / 2$$.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    long long minimalKSum(vector<int>& nums, int k) {
        // sort it first
        sort(nums.begin(), nums.end());
        // init ans & prev
        long long ans = 0, prev = 0;
        for (auto x : nums) {
            // how many numbers between prev and x exclusively
            // 1 .. 4 -> [2, 3] which is 2
            long long need = x - prev - 1;
            // no need to append -> update prev only
            if (need <= 0) prev = x;
            else {
                // case 1: we append _need_ numbers only
                if (k >= need) {
                    // update k as we append _need_ numbers
                    k -= need;
                    // consecutive sum between prev and x (exclusive)
                    // start = prev + 1, end = x - 1, n = need
                    // sum = (start + end) * n / 2
                    ans += ((prev + 1) + (x - 1)) * need / 2;
                    // set prev
                    prev = x;
                    // appended k numbers already, return ans
                    if (k == 0) return ans;
                } else {
                    // need > k. append k numbers then return ans
                    // consecutive sum between prev and prev + k (exclusive)
                    // start = prev + 1, end = prev + k, n = k
                    // sum = (start + end) * n / 2
                    ans += ((prev + 1) + (prev + k)) * k / 2;
                    return ans;
                }
            }
        }
        // append k numbers after the last element of nums last
        // consecutive sum between last and last + k (exclusive)
        // start = last + 1, end = last + k, n = k
        // sum = (start + end) * n / 2
        long long last = nums.back();
        ans += ((last + 1) + (last + k)) * k / 2;
        return ans;
    }
};
```

From above solution, we can see that we use the same formula on different cases based on $$need$$. In fact, we can combine different cases into one by tuning $$need$$.

```cpp
class Solution {
public:
    long long minimalKSum(vector<int>& nums, int k) {
        // add the large value at the end
        nums.push_back(INT_MAX);
        // sort the input
        sort(nums.begin(), nums.end());
        long long ans = 0, prev = 0;
        for (auto x : nums) {
            // if we have appeneded k numbers, then skip the rest of the numbers
            if (k <= 0) break;
            // combine all cases into one
            long long need = max(0, min(x - (int) prev - 1, k));
            // substract need from k
            k -= need;
            // sum = (start + end) * n / 2
            ans += ((prev + 1) + (prev + need)) * need / 2;
            // mark prev
            prev = 1LL * x;
        }
        return ans;
    }
};
```
