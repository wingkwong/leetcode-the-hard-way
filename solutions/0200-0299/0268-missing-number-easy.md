---
description: 'Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/missing-number/'
tags: ['Array', 'Hash Table', 'Math', 'Bit Manupulation', 'Sorting']
---

# 0268 - Missing Number (Easy)

## Problem Link

https://leetcode.com/problems/missing-number/

## Problem Statement

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return _the only number in the range that is missing from the array._

**Example 1:**

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 2:**

```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 3:**

```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```

**Constraints:**

* `n == nums.length`
* `1 <= n <= 10^4`
* `0 <= nums[i] <= n`
* All the numbers of `nums` are **unique**.

## Approach 1: Sorting

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        sort(nums.begin(), nums.end());
        // check the first element
        if (nums.front() != 0) return 0;
        // check [1, n)
        for (int i = 1; i < n; i++) {
            // after sorting, the difference is expected to be 1
            // e.g. 1 - 2 - 3 - 4
            // if not, then it means the current index is the missing number
            // e.g. 1 - 2 - 4 (the diff is 2 here)
            if (nums[i] - nums[i - 1] != 1) {
                return i;
            }
        }
        // check the last element
        return n;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        // Sort the numbers
        // After sorting, if any number is not the same as the index then that's the missing number
        Arrays.sort(nums);
        // Search for first missing number
        if (nums[0] != 0) return 0;
        for (int i = 0; i < n; i++) {
            if (nums[i] != i) {
                return i;
            }
        }
        return n;
    }
}
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    // sort numbers (increasing order)
    nums.sort((a, b) => a - b);
    // check the first value 
    if (nums[0] != 0) return 0;
    // iterate through list of numbers
    // if they are not equal (number and index of that number)
    // that index is the missing number
    for (let i = 1; i < n; i++) {
        if (nums[i] != i) {
            return i;
        }
    }
    return n;
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        # sort list
        nums.sort()
        # check the first value
        if nums[0] != 0: return 0
        # loop through list of numbers
        # if they are not equal (number and index of that number)
        # that index is the missing number
        for i in range(len(nums)):
            if nums[i] != i:
                return i
        return n 
```

</TabItem>
</Tabs>

## Approach 2: Bit Manupulation

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        // we can utilise the properties of XOR:
        // a ^ a = 0
        // a ^ 0 = a
        // a ^ b ^ c = a ^ c ^ b
        int n = (int) nums.size();
        int ans = n;
        // we can see that the elements in nums would cancel out with their indices
        // except the one which is missing
        for(int i = 0; i < n; i++) {
            ans ^= (i ^ nums[i]);
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int ans = n;
        // we can utilise the properties of XOR:
        // a ^ a = 0
        // a ^ 0 = a
        // a ^ b ^ c = a ^ c ^ b
        for (int i = 0; i < n; i++) {
            ans ^= (nums[i] ^ i);
        }
        return ans;
    }
}
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // we can utilise the properties of XOR:
    // a ^ a = 0
    // a ^ 0 = a
    // a ^ b ^ c = a ^ c ^ b
    const n = nums.length;
    let ans = n;
    for (let i = 0; i < n; i++) {
        ans ^= (i ^ nums[i]);
    }
    return ans;
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # we can utilise the properties of XOR:
        # a ^ a = 0
        # a ^ 0 = a
        # a ^ b ^ c = a ^ c ^ b
        n = len(nums)
        res = n
        for i in range(len(nums)):
            res ^= (i ^ nums[i])
        return res
```

</TabItem>
</Tabs>

## Approach 3: Math

To calculate the sum of first n element, we can use Gauss' Formula - $n * (n + 1) / 2$. The missing number would be the expected sum minus the sum of $nums$.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = (int) nums.size();
        int sum = 0;
        for(int x : nums) sum += x;
        return (n * (n + 1) / 2) - sum; 
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int sum = 0;
        for (int x : nums) sum += x;
        return (n * (n + 1) / 2) - sum;
    }
}
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const nums_len = nums.length;
    let nums_sum = 0;
    for (n of nums) nums_sum += n;
    return (nums_len * (nums_len + 1) / 2) - nums_sum;
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python 
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums_len = len(nums)
        nums_sum = sum(nums)
        return (nums_len * (nums_len + 1) // 2) - nums_sum
```

</TabItem>
</Tabs>
