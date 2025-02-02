---
description: 'Author: @wkw | https://leetcode.com/problems/shuffle-the-array/'
tags: [Array]
---

# 1470 - Shuffle the Array (Easy)

## Problem Link

https://leetcode.com/problems/shuffle-the-array/

## Problem Statement

Given the array `nums` consisting of `2n` elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`.

_Return the array in the form_ `[x1,y1,x2,y2,...,xn,yn]`.

**Example 1:**

```
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
```

**Example 2:**

```
Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
```

**Example 3:**

```
Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
```

**Constraints:**

- `1 <= n <= 500`
- `nums.length == 2n`
- `1 <= nums[i] <= 10^3`

## Approach 1: One Pass

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// the first half n elements are x and the second half n elements are y
// we can iterate n times and push nums[i] and nums[i + n]
// since the distance for each x_i and y_i is just `n`
class Solution {
public:
  vector<int> shuffle(vector<int>& nums, int n) {
    vector<int> ans;
    for (int i = 0; i < n; i++) {
      // push x_1 .. x_n
      ans.push_back(nums[i]);
      // push y_1 .. y_n
      ans.push_back(nums[i + n]);
    }
    return ans;
  }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
// the first half n elements are x and the second half n elements are y
// we can iterate n times and push nums[i] and nums[i + n]
// since the distance for each x_i and y_i is just `n`
class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] ans = new int[2 * n];
        for (int i = 0; i < n; i++) {
            // push x_1 .. x_n
            ans[2 * i] = nums[i];
            // push y_1 .. y_n
            ans[2 * i + 1] = nums[i + n];
        }
        return ans;
    }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
# the first half n elements are x and the second half n elements are y
# we can iterate n times and push nums[i] and nums[i + n]
# since the distance for each x_i and y_i is just `n`
class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        ans = []
        for i in range(n):
            # push x_1 .. x_n
            ans.append(nums[i])
            # push y_1 .. y_n
            ans.append(nums[i + n])
        return ans

        # alternatively, we can do it in one-liner
        # return [x for p in zip(nums[:n], nums[n:]) for x in p]
```

</TabItem>

</Tabs>
