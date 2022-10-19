---
description: >-
  Author: @darkhope |
  https://leetcode.com/problems/make-sum-divisible-by-p/
tags: [Array, Hash Table, Prefix Sum]
---

# 1590 - Make Sum Divisible by P (Medium)

## Problem Link

https://leetcode.com/problems/make-sum-divisible-by-p/

## Problem Statement

Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

A subarray is defined as a contiguous block of elements in the array.

**Example 1:**

```
Input: nums = [3,1,4,2], p = 6
Output: 1
Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
```

**Example 2:**

```
Input: nums = [6,3,5,2], p = 9
Output: 2
Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.
```
**Example 3:**

```
Input: nums = [1,2,3], p = 3
Output: 0
Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `1 <= nums[i] <= 10^9`
* `1 <= p <= 10^9`

## Approach 1: Hash Map

We first compute the sum of array an then take its modulo wtih given interger $p$, if this number is $0$, that's awesome return $0$ else we somehow have to make this number $0$. For this we will remove some subarray and make remainder of sum of array = $0$

Firstly we take a suffix array of sum from $n-1$ to $i$ % $p$, then we will iterate from $0$ to $n$ and make a unordered_map (HashMap) to store (remainder as key and its last index as value), now if we have to remove an subarray that ends at $i$, then our ans for current $i$ will be difference of $i$ and index of complement for $suff[i + 1]$ in hashmap i.e $i$ - $index$ $of$ $( p - suff[i + 1]) % p$.

**Time Complexity: $O(n)$**

Calculating and storing suffix array will be done in $O(n)$.
Since we are using unordered_map so it will give average $O(1)$ for inserting and fetching.  

**Space Complexity: $O(n)$**

The only extra memory we are using is the suffix array and a HashMap.
<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@darkhope"/>

```cpp
class Solution {
public:
    int minSubarray(vector<int> &nums, int p) {
        int n = nums.size();
        // suffix array of modulo
        vector<int> suff(n);
        long long sum = 0;
        for (int i = n - 1; i >= 0; i--) {
            sum += nums[i];
            suff[i] = sum % p;
        }
        // if array is already divisible by p
        if (sum % p == 0) return 0;
        unordered_map<int, int> m;
        // defualt sum of arrayis 0 as none element is selected.
        m[0] = -1;
        sum = 0;
        // Final answer to be stored in this
        int ans = INT_MAX;
        for (int i = 0; i < n; i++) {
            sum += nums[i];
            sum %= p;
            if (i + 1 < n) {
                // removing a subarray that doesn't involve last element
                // complement of suff[i + 1]
                int curr = (p - suff[i + 1]) % p;
                // if we get complement
                if (m.find(curr) != m.end()) {
                    // remove elements from m[curr] + 1 to i
                    ans = min(ans, i - m[curr]);
                }
            }
            // this case will cover if we have to remove some last part of array.
            if (sum % p == 0) {
                ans = min(ans, n - 1 - i);
            }
            m[sum] = i;
        }
        return ans >= n ? -1 : ans;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@darkhope"/>

```java
class Solution {
    int minSubarray(int[] nums, int p) {
        int n = nums.length;
        // suffix array of modulo
        long suff[] = new long[n];
        long sum = 0;
        for (int i = n - 1; i >= 0; i--) {
            sum += nums[i];
            suff[i] = sum % p;
        }
        // case if array is already divisible by p
        if (sum % p == 0)
            return 0;
        Map<Long, Integer> m = new HashMap<>();
        // defualt sum of array as none element is selected.
        m.put((long)0, -1);
        sum = 0;
        // Final answer to be stored in ans.
        int ans = Integer.MAX_VALUE;
        for (int i = 0; i < n; i++) {
            sum += nums[i];
            sum %= p;
            if (i + 1 < n) {
                // removing a subarray that doesn't involve last element
                // complement of suff[i+1]
                long curr = (p - suff[i + 1]) % p;
                // if we get complement
                if (m.containsKey(curr)) {
                    // remove elements from m[curr]+1 to i
                    ans = Math.min(ans, i - m.get(curr));
                }
            }
            // this case will cover if we have to remove some last part of array.
            if (sum == 0) {
                ans = Math.min(ans, n - 1 - i);
            }
            m.put(sum, i);
        }
        return ans >= n ? -1 : ans;
    }
}
```

</TabItem>
</Tabs>
