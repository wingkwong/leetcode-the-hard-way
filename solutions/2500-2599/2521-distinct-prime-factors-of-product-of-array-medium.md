---
description: 'Author: @wingkwong | https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/'
---

# 2521 - Distinct Prime Factors of Product of Array (Medium) 

## Problem Link

https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/

## Problem Statement

Given an array of positive integers `nums`, return *the number of **distinct prime factors** in the product of the elements of* `nums`.

**Note** that:

- A number greater than `1` is called **prime** if it is divisible by only `1` and itself.
- An integer `val1` is a factor of another integer `val2` if `val2 / val1` is an integer.

**Example 1:**

```
Input: nums = [2,4,3,7,10,6]
Output: 4
Explanation:
The product of all the elements in nums is: 2 * 4 * 3 * 7 * 10 * 6 = 10080 = 25 * 32 * 5 * 7.
There are 4 distinct prime factors so we return 4.
```

**Example 2:**

```
Input: nums = [2,4,8,16]
Output: 1
Explanation:
The product of all the elements in nums is: 2 * 4 * 8 * 16 = 1024 = 210.
There is 1 distinct prime factor so we return 1.
```

**Constraints:**

- `1 <= nums.length <= 104`
- `2 <= nums[i] <= 1000`

## Approach 1: Prime Factorization + Set

For each number, we can prime-factorize it and insert it to a Set. The answer would be the number of the size of set.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<pair<long long, int>> prime_factorize(long long n) {
        assert(n >= 1);
        vector<pair<long long, int>> result;

        auto extract = [&](long long p) {
            if (n % p == 0) {
                result.emplace_back(p, 0);

                do {
                    n /= p;
                    result.back().second++;
                } while (n % p == 0);
            }
        };

        for (long long p = 2; p * p <= n; p += p % 2 + 1)
            extract(p);

        if (n > 1)
            result.emplace_back(n, 1);

        return result;
    }

    int distinctPrimeFactors(vector<int>& nums) {
        set<int> s;
        for (auto x : nums) {
            for (auto x : prime_factorize(x)) {
                s.insert(x.first);
            }
        }
        return s.size();
    }
};
```

</TabItem>
</Tabs>