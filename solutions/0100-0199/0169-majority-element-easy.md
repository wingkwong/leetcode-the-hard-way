---
description: 'Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/majority-element/'
---

# 0169 - Majority Element (Easy)

## Problem Link

https://leetcode.com/problems/majority-element/

## Problem Statement

Given an array `nums` of size `n`, return _the majority element_.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example 1:**

```
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Constraints:**

* `n == nums.length`
* `1 <= n <= 5 * 10^4`
* `-2^31 <= nums[i] <= 2^31 - 1`



**Follow-up:** Could you solve the problem in linear time and in `O(1)` space?

## Approach 1: Boyer-Moore Voting Algorithm

The Boyer-Moore Voting Algorithm is used to find the majority of a sequence of elements using linear time and constant space. We initialise the counter $$i := 0$$ and iterate each number $$x$$. If the counter is $$0$$, then we set $$x$$ as the major element. If the current number is the major element, then we increase the counter by $$1$$, else decrease by $$1$$.

Reference: [Boyer-Moore Voting Algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore\_majority\_vote\_algorithm)


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        // Boyer-Moore Voting Algorithm
        int i = 0, m = 0;
        for(int x : nums) {
            // counter hits 0, reset majority as x and update counter
            if(i == 0) m = x, i = 1;
            // increase the counter as x is in the same sequence
            else if(m == x) i++;
            // decrease the counter as x is not in the same sequence
            else i--;
        }
        return m;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        res, count = 0, 0

        for n in nums:
            if count == 0:
                res = n
            count += (1 if n == res else -1)
        return res 
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = 0;
    let count = 0;
    for (n of nums) {
        if (count == 0) res = n, count = 1;
        else if (n == res) count++;
        else count--;
    }
    return res; 
};
```

</TabItem>
</Tabs>

## Approach 2: Bit Manipulation

If the majority number appears more than $$[n / 2]$$ times, each of its bits will also appear more than $$[n / 2]$$ times. Therefore, we iterate each bit on each number to see if condition is true. If so, we set this bit as 1.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int m = 0, n = nums.size();
        // iterate each bit
        for (int bit = 0; bit < 32; bit++) {
            int ones = 0;
            // iterate each number to see if this bit is set or not
            // if so, add 1 to ones
            for (auto x : nums) if (x & (1 << bit)) ones++;
            // if this bit appears more than [n / 2] times
            // then set this bit on final answer
            if (ones > (n / 2)) m |= (1 << bit);
        }
        return m;
    }
};
```
</TabItem>
</Tabs>
