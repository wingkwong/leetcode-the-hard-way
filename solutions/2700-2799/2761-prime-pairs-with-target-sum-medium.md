---
description: 'Author: @wkw | https://leetcode.com/problems/prime-pairs-with-target-sum/'
---

# 2761 - Prime Pairs With Target Sum (Medium)

## Problem Link

https://leetcode.com/problems/prime-pairs-with-target-sum/

## Problem Statement

You are given an integer `n`. We say that two integers `x` and `y` form a prime number pair if:

- `1 <= x <= y <= n`
- `x + y == n`
- `x` and `y` are prime numbers

Return _the 2D sorted list of prime number pairs_ `[xi, yi]`. The list should be sorted in **increasing** order of `xi`. If there are no prime number pairs at all, return _an empty array_.

**Note:** A prime number is a natural number greater than `1` with only two factors, itself and `1`.

**Example 1:**

```
Input: n = 10
Output: [[3,7],[5,5]]
Explanation: In this example, there are two prime pairs that satisfy the criteria.
These pairs are [3,7] and [5,5], and we return them in the sorted order as described in the problem statement.
```

**Example 2:**

```
Input: n = 2
Output: []
Explanation: We can show that there is no prime number pair that gives a sum of 2, so we return an empty array.
```

**Constraints:**

- `1 <= n <= 10^6`

## Approach 1: Sieve of Eratosthenes

First thought - we may think that we can brute force by Iterating $x$ and iterating $y$, then checking if $x + y == n$ and if $x$ and $y$ is prime.

```cpp
for (int x = 1; x <= n; x++) {
    for (int y = x; y <= n; y++) {
        if (x + y == n && isPrime(x) && isPrime(y)) {
            // now we got [x, y]
        }
    }
}
```

However, $n$ can be up to $10^6$ and O(n ^ 2) solution is a no go. Also checking if a number is a prime number on the fly is expensive.

Hence, now we have two things to think about

1. how to optimize the solution without Iterating $x$ and $y$
2. how to check if $x$ and $y$ are prime numbers efficiently

To solve the first problem, by looking at Example 1, we know that we don't need to output $[7, 3]$ since it is covered with $[3, 7]$. Also, it is easy to see $y == n - x$ by deriving from $x + y == n$. With these info, we don't need to iterate in $O(n^2)$. We just need to check $i$ in $[1 .. n / 2]$. The pair is simply $i$ and $n - i$.

```cpp
for (int i = 1; i <= n / 2; i++) {
    int x = i;
    int y = n - i;
    if (isPrime(x) && isPrime(y)) {
        // we got [x, y]
    }
}
```

To solve the second problem we can pre-compute all prime numbers up to $n$ by using Sieve of Eatosthenes so that we don't need to calculate each time on the fly.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<bool> sieveOfEratosthenes(const int n) {
      assert(n >= 2 && "N must be greater or equal to 2");
      vector<bool> isPrime(n + 1, true);
      isPrime[0] = isPrime[1] = false;
      for (int i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
          for (int j = i * i; j <= n; j += i) {
            isPrime[j] = false;
          }
        }
      }
      return isPrime;
    }


    vector<vector<int>> findPrimePairs(int n) {
        vector<vector<int>> ans;
        if (n == 1) return ans;
        vector<bool> p = sieveOfEratosthenes(n);
        for (int i = 1; i <= n / 2; i++) {
            if (p[i] && p[n - i]) {
                ans.push_back({i, n - i});
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
