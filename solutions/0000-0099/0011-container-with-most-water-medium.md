---
description: 'Author: @wingkwong, @ganajayant | https://leetcode.com/problems/container-with-most-water/'
---

# 0011 - Container With Most Water (Medium)

## Problem Link

https://leetcode.com/problems/container-with-most-water/

## Problem Statement

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store_.

**Notice** that you may not slant the container.

**Example 1:**

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question\_11.jpg)

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

**Example 2:**

```
Input: height = [1,1]
Output: 1
```

**Constraints:**

* `n == height.length`
* `2 <= n <= 10^5`
* `0 <= height[i] <= 10^4`

## Approach 1: Two Pointers

We know that the area is $$width * height$$. Given two lines with different heights, we should only take the minimum one and the width is simply their distance. We use two pointers to track the lines, every time we calculate the area and move either one line. If the left line is shorter, then move the left one because we want to keep the maximum one, and vice versa.


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int maxArea(vector<int>& height) {
        int ans = 0, l = 0, r = height.size() - 1;
        while (l < r) {
            // calculate the current area
            ans = max(ans, min(height[l], height[r]) * (r - l));
            // keep the max one and move the min one
            if (height[l] < height[r]) l++;
            else r--;
        }
        return ans;
    }
};
```
</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int maxArea(int[] height) {
        int max = 0;
        int i = 0;
        int j = height.length - 1;
        while (i < j) {
            int leasth = Math.min(height[i], height[j]);
            int width = (j - i);
            if (max < leasth * width) {
                max = leasth * width;
            }
            if (height[i] > height[j]) {
                j--;
            } else {
                i++;
            }
        }
        return max;
    }
}
```
</TabItem>
<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@MithunPrabhu777"/>

```javascript
const maxArea = (height) => {
    let [left, right, max] = [0, height.length - 1, 0];

    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[right] > height[left]) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return max;
};
```
</TabItem>

<TabItem value="python" label="python">
<SolutionAuthor name="@sourav"/>    
```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        res = 0
        while l < r:
            res = max(res, min(height[l], height[r]) * (r - l))
            if height[l] < height[r]:
                l += 1
            elif height[r] <= height[l]:
                r -= 1
        return res
```                                       
</TabItem>    
</Tabs>
