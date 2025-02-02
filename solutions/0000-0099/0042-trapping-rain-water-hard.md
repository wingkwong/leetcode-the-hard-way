---
description: 'Author: @wkw, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/trapping-rain-water/'
tags: [Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack]
---

# 0042 - Trapping Rain Water (Hard)

## Problem Link

https://leetcode.com/problems/trapping-rain-water/

## Problem Statement

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

**Example 1:**

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

**Example 2:**

```
Input: height = [4,2,0,3,2,5]
Output: 9
```

**Constraints:**

- `n == height.length`
- `1 <= n <= 2 * 10^4`
- `0 <= height[i] <= 10^5`

## Approach 1: Dynamic Programming

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// Time Complexity: O(N)
// Space Complexity: O(N)
// where N is the length of height
class Solution {
public:
    int trap(vector<int>& height) {
        int ans = 0, n = height.size();
        // dp1[i]: the max height of bar from the left till position i
        // dp2[i]: the max height of bar from the right till position i
        vector<int> dp1(n), dp2(n);
        // let's build dp1 first
        dp1[0] = height[0];
        // for each position i,
        // if the current height is greater than the max height, then dp1[i] will be height[i]
        // else dp1[i] will be taking the previous result, i.e. dp1[i - 1]
        for (int i = 1; i < n; i++) dp1[i] = max(dp1[i - 1], height[i]);
        // build dp2 in a similar way
        dp2[n - 1] = height[n - 1];
        // for each position i,
        // if the current height is greater than the max height,
        // then dp2[i] will be height[i]
        // else dp2[i] will be taking the previous result, i.e. dp2[i + 1]
        for (int i = n - 2; i >= 0; i--) dp2[i] = max(dp2[i + 1], height[i]);
        // then iterate the heights and take the minimum of dp1[i] and dp2[i]
        // why minimum? because that is the max height a bar can hold. (water will overflow)
        // then we substract height[i] from the min
        // if min(dp1[i], dp2[i]) is 2 and height[i] is 2, then no water is being trapped
        // if min(dp1[i], dp2[i]) is 2 and height[i] is 0, then 2 units of water are being trapped
        for (int i = 1; i < n - 1; i++) ans += min(dp1[i], dp2[i]) - height[i];
        return ans;
    }
};
```

</TabItem>

</Tabs>

## Approach 2: Two Pointers

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
// Time Complexity: O(N)
// Space Complexity: O(1)
class Solution {
    public int trap(int[] height) {
        int i = 0, j = height.length - 1, ans = 0, mx = 0, mi = 0;
        // two pointers
        // pointer i from the left
        // pointer j from the right
        while (i <= j) {
            // take the min height
            mi = Math.min(height[i], height[j]);
            // find the max min height
            mx = Math.max(mx, mi);
            // the units of water being tapped is the diffence between max height and min height
            ans += mx - mi;
            // move the pointer i if height[i] is smaller
            if (height[i] < height[j]) i++;
            // else move pointer j
            else j--;
        }
        return ans;
    }
}
```

<SolutionAuthor name="@vigneshshiv"/>

```java
// Time Complexity: O(N)
// Space Complexity: O(N)
class Solution {
    public int trap(int[] height) {
        int i = 0, j = height.length - 1;
        int level = 0, water = 0;
        while (i < j) {
            // Get the minium height and change the index depends on height
            int lower = height[height[i] < height[j] ? i++ : j--];
            // Highest peak gives total area to calculate water
            level = Math.max(level, lower);
            // How much water can hold from the recently calculated height
            water += level - lower;
        }
        return water;
    }
}
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@wkw"/>

```py
# Time Complexity: O(N)
# Space Complexity: O(1)
class Solution:
    def trap(self, height: List[int]) -> int:
        i, j, ans, mx, mi = 0, len(height) - 1, 0, 0, 0
        # two pointers
        # pointer i from the left
        # pointer j from the right
        while i <= j:
            # take the min height
            mi = min(height[i], height[j])
            # find the max min height
            mx = max(mx, mi)
            # the units of water being tapped is the diffence between max height and min height
            ans += mx - mi
            # move the pointer i if height[i] is smaller
            if height[i] < height[j]: i += 1
            # else move pointer j
            else: j -= 1
        return ans
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
// Time Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  if (!height) {
    return 0;
  }
  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      res += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      res += rightMax - height[right];
    }
  }
  return res;
};
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

```cpp
// Time Complexity: O(N)
// Space Complexity: O(1)
class Solution {
public:
    int trap(vector<int>& height) {
        int res = 0, left = 0, right = height.size() - 1;
        int leftMax = height[left], rightMax = height[right];
        while (left < right) {
            if (leftMax < rightMax) {
                left++;
                leftMax = max(leftMax, height[left]);
                res += leftMax - height[left];
            } else {
                right--;
                rightMax = max(rightMax, height[right]);
                res += rightMax - height[right];
            }
        }
        return res;
    }
};
```

</TabItem>
</Tabs>

## Approach 3: Monotonic Stack

Monotonic stacks are generally used for solving questions of the type - next greater element, next smaller element, previous greater element and previous smaller element.

This problem one of the problem of solving with the previous heights with the current height.

1. Keep adding the index (referenced to height) into stack, if the current height is higher the last added one (Stack Top)

2. Once we find there's a downward slop, means this is starting position to trap water fill (hold the water). So keep calculating water trap area with the height and the index. Since we need to find the height and width of water area, indices are required to find the width (the same is maintained in the stack).

3. Keep repeating the process until the we reach last or there's no higher height to calculate the water fill (Stack is empty).

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
// Time Complexity: O(N)
// Space Complexity: O(N)
class Solution {
    public int trap(int[] height) {
        int water = 0;
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < height.length; i++) {
            while (!stack.isEmpty() && height[stack.peek()] <= height[i]) {
                int j = stack.pop();
                if (!stack.isEmpty()) {
                    int h = Math.min(height[stack.peek()], height[i]) - height[j];
                    int w = i - (stack.peek() + 1);
                    water += (h * w);
                }
            }
            stack.push(i);
        }
        return water;
    }
}
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
# Time Complexity: O(N)
# Space Complexity: O(N)
class Solution:
    def trap(self, height: List[int]) -> int:
        # Utilize a monotonic decreasing stack, meaning everything in the stack
        # will be ordered from tallest to shortest, and any incoming element
        # taller than the top of the stack, has the potential to trap water.
        # Note. We can only trap water if their are at least 2 items on the stack.
        # 1 to provide the space to be filled, and 1 to the left of it to provide
        # a boundary to hold the water.
        stack = []
        total_water = 0
        # loop through height -> tracking right wall x coord, and right wall height.
        for right_x, right_h in enumerate(height):
            # stack exists & incoming wall height > top of the stacks wall height.
            while stack and stack[-1][1] < right_h:
                # get the floor of the area to be filled, to prevent double
                # filling already filled holes or filling an area that should be a wall.
                _,floor = stack.pop()
                # Empty stack means no left wall to trap water, so water runs off.
                if stack:
                    # left wall x pos, left wall height.
                    left_x, left_h = stack[-1]
                    # distance between both walls.
                    w = (right_x-left_x)-1
                    # height of area to be filled.
                    h = min(left_h, right_h) - floor
                    # water created
                    water = w*h
                    #add water to total water variable.
                    total_water += water
            # Add incoming wall to the stack.
            stack.append((right_x,right_h))
        return total_water
```

</TabItem>
</Tabs>
