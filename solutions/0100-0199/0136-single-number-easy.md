---
description: 'Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/single-number/'
---

# 0136 - Single Number (Easy)

## Problem Link

https://leetcode.com/problems/single-number/

## Problem Statement

Given a **non-empty** array of integers `nums`, every element appears _twice_ except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

**Example 1:**

```
Input: nums = [2,2,1]
Output: 1
```

**Example 2:**

```
Input: nums = [4,1,2,1,2]
Output: 4
```

**Example 3:**

```
Input: nums = [1]
Output: 1
```

**Constraints:**

* `1 <= nums.length <= 3 * 10^4`
* `-3 * 10^4 <= nums[i] <= 3 * 10^4`
* Each element in the array appears twice except for one element which appears only once.

## Approach 1: Bit Manipulation

:::info Prerequisite

You should understand properties of XOR.

:::

Let's have a quick review.

* If we take XOR of a number and a zero, the result will be that number, i.e. $$a \oplus 0 = a$$.
* If we take XOR of two same numbers, it will return 0, i.e. $$a \oplus a = 0$$.
* If we take XOR of multiple numbers, the order doesn't affect the result, i.e. $$a \oplus b \oplus c = a \oplus c \oplus b$$.

Therefore, if we take XOR of all numbers, what's left would be that single number as every element that appears twice would be cancelled out. For example, $$nums = [4,1,2,1,2]$$, we can reorder it like $$[1,1,2,2,4]$$, and we got $$(1 \oplus 1) \oplus (2 \oplus 2) \oplus 4 = 4$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int ans = 0;
        for (auto x : nums) ans ^= x;
        return ans;
    }
};
```

</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        return reduce(lambda x, y: x ^ y, nums)
```
</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
// Time complexity: O(n), where n - # of elements in the array
// Space complexity: O(1)
class Solution {
    /**
     * Given a list of integers where all integers occur even times, expect one which occur odd times
     *
     * Solution - XOR of any two same numbers will always be 0, and XOR of any number with 0 is the number itself.
     */
    public int singleNumber(int[] nums) {
        int x = 0;
        for (int num : nums) {
            x ^= num;
        }
        return x;
    }
}
```
</TabItem>
</Tabs>


## Approach 2: Math

$$2 * sumOfSet - (SumOfNumbers) = answer$$

For example, $$nums = [4,1,2,1,2]$$, $$sumOfSet$$ is $$1 + 2 + 4 = 7$$ and $$sumOfNumbers$$is $$1 + 1 + 2 + 2 + 4 = 10$$. Then the answer is $$2 *7 - 10 = 4$$.


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        set<int> s;
        int sumOfSet = 0, sumOfNumbers = 0;
        for (auto x : nums) {
            if (!s.count(x)) {
                s.insert(x);
                sumOfSet += x;
            }
            sumOfNumbers += x;
        }
        return 2 * sumOfSet - sumOfNumbers;
    }
};
```
</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashSet = new Set();
    let sumOfSet = 0;
    let sumOfNums = 0;
    for (let num of nums) {
        if (!hashSet.has(num)) {
            hashSet.add(num);
            sumOfSet += num;
        }
        sumOfNums += num;
    }
    return 2 * sumOfSet - sumOfNums;
};
```
</TabItem>
</Tabs>
