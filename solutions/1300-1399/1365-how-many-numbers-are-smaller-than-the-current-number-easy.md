---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1365 - How Many Numbers Are Smaller Than the Current Number (Easy)

## Problem Link

https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

## Problem Statement

Given the array `nums`, for each `nums[i]` find out how many numbers in the array are smaller than it. That is, for each `nums[i]` you have to count the number of valid `j's` such that `j != i` **and** `nums[j] < nums[i]`.

Return the answer in an array.&#x20;

**Example 1:**

```
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
```

**Example 2:**

```
Input: nums = [6,5,4,8]
Output: [2,1,0,3]
```

**Example 3:**

```
Input: nums = [7,7,7,7]
Output: [0,0,0,0]
```

**Constraints:**

* `2 <= nums.length <= 500`
* `0 <= nums[i] <= 100`

## Approach 1: Brute Force

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
        int n = (int) nums.size();
        vector<int> ans;
        // iterate each element
        for(int i = 0; i < n; i++){
            // init a var called smaller
            int smaller = 0;
            // iterate each element
            for(int j = 0; j < n; j++){
                // if they are equal, skip it
                if(i == j) continue;
                // if nums[j] is smaller, increase the counter
                if(nums[j] < nums[i]) smaller++;
            }
            // push the result to ans
            ans.push_back(smaller);
        }
        return ans;
    }
};
```

## Approach 2: Sorting

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
        vector<int> sorted_nums { nums }, ans;
        sort(sorted_nums.begin(), sorted_nums.end());
        // nums: 8 1 2 2 3
        // sorted_nums: 1 2 2 3 8
        
        // iterate each element in nums
        // since we need the original order in ans
        for (auto& x : nums) {
            // init a var called smaller
            int smaller = 0;
            // walk thru sorted_nums
            for (auto& y : sorted_nums) {
                // if they are not equal, it means y is smaller than x
                if (x != y) {
                    smaller += 1;
                } else {
                    // otherwise, we got all elements smaller than x
                    // so break it here
                    break;
                }
            }
            // push the result to ans
            ans.push_back(smaller);
        }
        return ans;
    }
};
```

## Approach 3: Sorting + Lower Bound

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
        vector<int> sorted_nums { nums }, ans;
        sort(sorted_nums.begin(), sorted_nums.end());
        // nums: 8 1 2 2 3
        // sorted_nums: 1 2 2 3 8
        for (auto& x : nums) {
            // we can use lower_bound to calculate the smaller 
            // lower_bound: returns an iterator pointing to the first element in the range [first,last) 
            // which does not compare less than val
            // since it is a iterator, we need to add "- sorted_nums.begin()" to get the number of elements.
            ans.push_back(
                lower_bound(sorted_nums.begin(), sorted_nums.end(), x) 
                            - sorted_nums.begin()
            );
        }
        return ans;
    }
};
```