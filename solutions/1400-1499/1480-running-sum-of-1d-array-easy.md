---
description: >-
  Author: @heiheihang, @wingkwong, @radojicic23 |
  https://leetcode.com/problems/running-sum-of-1d-array/
---

# 1480 - Running Sum of 1d Array (Easy)

## Problem Link

https://leetcode.com/problems/running-sum-of-1d-array/

## Problem Statement

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.

Return the running sum of `nums`.

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

**Example 2:**

```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
```

**Example 3:**

```
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17] 
```

**Constraints:**

* `1 <= nums.length <= 1000`
* `-10^6 <= nums[i] <= 10^6`

# Approach 1: Prefix Sum


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // for full tutorial, please go to
    // https://wingkwong.github.io/leetcode-the-hard-way/tutorials/basic-topics/prefix-sum
    vector<int> generatePrefixSum(vector<int>& a) {
        int n = a.size();
		// we need a vector of size n
        vector<int> pref(n);
		// the first element is same as that in `a`
        pref[0] = a[0];
		// starting the second one, we add the prefix sum `pref[i - 1]` and the current value `a[i]`
        for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + a[i];
        return pref;
    }
    
    vector<int> runningSum(vector<int>& nums) {
	    // use the pre-defined function directly
        return generatePrefixSum(nums);
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Partial Sum

Using C++ STL. Bbasically it does the same thing mentioned above. See [here](https://cplusplus.com/reference/numeric/partial_sum/) for more details.

```
y0 = x0
y1 = x0 + x1
y2 = x0 + x1 + x2
y3 = x0 + x1 + x2 + x3
y4 = x0 + x1 + x2 + x3 + x4
```

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
		// use STL directly
        partial_sum(nums.begin(), nums.end(), nums.begin());
        return nums;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        return accumulate(nums)

```

</TabItem>
</Tabs>

## Approach 3: Iteration

We need to define an accumulator (`running_sum` in this problem) to save the sum of all numbers in `nums`. After calculating the latest `running_sum`, we put that number to our result list.

The trick here is that we need to add the number from `nums` to `running_sum` first before adding `running_sum` to `result`. This is because the `ith` position from `result` should include the `ith` number in `nums` .

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```python
def runningSum(self, nums: List[int]) -> List[int]:
        
        #initialize the running_sum
        running_sum = 0
        
        #initialize the result list
        result = []
        
        #we iterage each number in nums
        for i in range(len(nums)):
            
            #the current number is defined by nums[i]
            current_number = nums[i]
            
            #add the current_number to running_sum
            running_sum += current_number
            
            #add the running_sum to the result list
            result.append(running_sum)
        
        #return result
        return result
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
		// we don't actually need to generate a prefix sum vector
		// instead we can modify the value in place.
        for(int i = 1; i < nums.size(); i++) {
            // add the previous result to the current element.
            nums[i] += nums[i - 1];
        }
        return nums;
    }
};
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let total = 0;
    let res =  [];
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        res.push(total);
    }
    return res;
};
```

</TabItem>
</Tabs>
