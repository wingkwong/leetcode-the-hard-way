---
description: >-
  Author: @wkw, @vigneshshiv, @radojicic23 |  https://leetcode.com/problems/find-the-duplicate-number/
---

# 0287 - Find the Duplicate Number (Medium)

## Problem Link

https://leetcode.com/problems/find-the-duplicate-number/

## Problem Statement

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return _this repeated number_.

You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

**Example 1:**

```
Input: nums = [1,3,4,2,2]
Output: 2
```

**Example 2:**

```
Input: nums = [3,1,3,4,2]
Output: 3
```

**Constraints:**

- `1 <= n <= 10^5`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- All the integers in `nums` appear only **once** except for **precisely one integer** which appears **two or more** times.

## Approach 1: Bit Masking

We iterate each bit one by one. We calculate the expected bit count and the actual bit count. If the actual one is greater than the expected one, then it means this bit is part of the duplicate number.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int duplicate = 0, n = nums.size() - 1;
        // iterate each bit one by one
        for(int i = 0; i < 31; i++) {
            long expected = 0, actual = 0;
            // the integer range [1, n] inclusive
            // iterate each integer to calculate the expected bit count
            for(int j = 1; j <= n; j++) expected += (1 << i) & j;
            // iterate each number to calculate the actual bit count
            for(int j : nums) actual += (1 << i) & j;
            // if actual one is greater than the expected one
            // then this bit is part of the duplicate number
            if(actual > expected) duplicate |= (1 << i);
        }
        return duplicate;
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Index based

As per problem constraint, all numbers starting from `1 to N`. So shift all numbers to the exact index (`num - 1`) positions and find the duplicate. Here, $1$ can be placed in index $0$, like wise shift all the numbers one by one, at last, in the last index we will be having the duplicate number.

Time complexity: $O(n)$, where n is the number of elements in the array

Space complexity: $O(1)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int findDuplicate(int[] nums) {
        int i = 0;
        while (i < arr.length) {
            if (arr[i] != i + 1) {
                if (arr[arr[i] - 1] != arr[i]) {
                    int j = arr[i] - 1;
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                } else {
                    return arr[i];
                }
            } else {
                i++;
            }
        }
        return -1;
    }
}
```

</TabItem>
</Tabs>

## Approach 3: Floyd's Tortoise and Hare (cycle detection)

Solving this in linear time and constant space requires Floyd's Tortoise and Hare algorithm.

It's a simple cycle detection algorithm, where one pointer traverses twice as fast as another, once two pointers meet, we can trace back to where the cycle begins.

Time complexity: $O(n)$, where n is the number of elements in the array

Space complexity: $O(1)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int findDuplicate(int[] nums) {
        int slow = nums[0];
        int fast = nums[nums[0]];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        fast = 0;
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow;
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
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow == fast) break;
  }
  fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[fast];
    if (slow == fast) return slow;
  }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow, fast = 0, 0
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break

        fast = 0
        while True:
            slow = nums[slow]
            fast = nums[fast]
            if slow == fast:
                return slow
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

```cpp
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int slow = 0;
        int fast = 0;
        while (true) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            if (slow == fast) {
                break;
            }
        }
        fast = 0;
        while (true) {
            slow = nums[slow];
            fast = nums[fast];
            if (slow == fast) {
                return slow;
            }
        }
    }
};
```

</TabItem>
</Tabs>
