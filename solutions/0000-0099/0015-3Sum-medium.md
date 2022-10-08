---
description: >-
  Author: @saloni33 |
  https://leetcode.com/problems/3sum/
---

# 0015 - 3Sum (Medium)

## Problem Link

https://leetcode.com/problems/3sum/

## Problem Statement

Given an integer array nums, return all the triplets $[nums[i], nums[j], nums[k]]$ such that $i != j, i != k$, and $j != k$, and $nums[i] + nums[j] + nums[k] == 0$.  
Notice that the solution set must not contain duplicate triplets.

**Example 1:**
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

**Example 2:**
```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

**Example 3:**
```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

**Constraints:**

* $3 <= nums.length <= 3000$
* $-10^5 <= nums[i] <= 10^5$

## Approach 1: Two Pointers
- We are required to find triplets which will have sum equal to zero.  
- Since the array contains positive and negative numbers both, first we will sort the array, by doing this our searching will become easy.  
- We need to find three numbers whose sum will be zero hence we will run a loop from $0$ to $n-2$ and fix a number each time, and find other two numbers after it.  
- If the fixed number is repeated again, we will skip the $for$ loop and move to next number.  
- Now, to find remaining two numbers, we will intialize two pointers $j$ and $k$ by $j = i + 1$ and $k = n - 1$ where $i$ is the index of fixed number and start our search similar to binary search method.  
- If $nums[i] + nums[j] + nums[k] == 0$ and this triplet is not present in our set (in order to remove duplicates) we will insert this triplet in our $ans$ vector.  
- If $nums[j] + nums[k] < target$, we need more positive numbers to make it 0, we will increament $j$ else we need more -negative numbers to make it 0, hence decreament $k$.  

Time Complexity : The time complexity of this algortihm is $O(n^2)$ where $n$ is size of array.  
Space Complexity : The space complexity is $O(n)$ where $n$ is size of array.

<Tabs>
  
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@saloni33"/>

```cpp
class Solution {
public:    
vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ans;
        set<vector<int>> st;
        int n = nums.size();
        
        // sorted array
        sort (nums.begin(), nums.end());
        
        // traversing the array
        for (int i = 0 ; i < n-2 ; i++) {
            
            // skip the below code if i and i-1 element are same
            if (i > 0 && nums[i] == nums[i-1])
                continue;
            
            // start pointer
            int j = i + 1;
  
            // end pointer
            int k = n - 1;
  
            int target = -nums[i];
            
            while (j < k) {
                         
                // checking the condition 
                if (nums[j] + nums[k] == target) {
                    vector<int> temp;
  
                    // inserting this triplet in temp array
                    temp = {nums[i], nums[j], nums[k]};
  
                    // checking if particular triplet is already in ans in order to avoid duplicate 
                    if (st.find(temp) == st.end()) {
                        st.insert(temp);
                        ans.push_back(temp);
                    }
  
                    k--;
  
                    while (j < k && nums[j+1] == nums[j])
                        j++;
                                
                  // we will increment j, because we need more positive number so that nums[i] + nums[j] + nums[k] = 0
                } else if (nums[j] + nums[k] < target) {
                    j++;
  
                  // otherwise we will decrement k
                } else {
                    k--;
                }
            }
        }
        return ans;
    }
 };
```
</TabItem>
</Tabs>
