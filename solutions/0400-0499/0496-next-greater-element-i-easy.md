---
description: 'Author: @heiheihang, @wingkwong | https://leetcode.com/problems/next-greater-element-i/'
---

# 0496 - Next Greater Element I (Easy)

## Problem Link

https://leetcode.com/problems/next-greater-element-i/

## Problem Statement

The **next greater element** of some element `x` in an array is the **first greater** element that is **to the right** of `x` in the same array.

You are given two **distinct 0-indexed** integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`.

For each `0 <= i < nums1.length`, find the index `j` such that `nums1[i] == nums2[j]` and determine the **next greater element** of `nums2[j]` in `nums2`. If there is no next greater element, then the answer for this query is `-1`.

Return _an array_ `ans` _of length_ `nums1.length` _such that_ `ans[i]` _is the **next greater element** as described above._

**Example 1:**

```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
```

**Example 2:**

```
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1. 
```

**Constraints:**

* `1 <= nums1.length <= nums2.length <= 1000`
* `0 <= nums1[i], nums2[i] <= 10^4`
* All integers in `nums1` and `nums2` are **unique**.
* All the integers of `nums1` also appear in `nums2`.

**Follow up:** Could you find an `O(nums1.length + nums2.length)` solution?

## Approach 1: Hash Map + Stack

The first thing we need to do is to store the $$(value, index)$$ pair from `nums1` in a hash map.

Then we need to find the _next greater element_ of all elements in `nums2`. This can be achieved by using a stack. If the current element is greater than the last element of the stack, we know the next greater element of the last element of the stack is the current element. We can access the index of the last element of the stack with `hash_map` (if it exists). Then we can put the current\_element in result.

After processing `nums2`, we need to assign `-1` to the elements still in the stack (no _next greater element_) with the help of `hash_map`.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```python
def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        
        #initialize hash map to store the (value, index) pair in nums1
        hash_map = {}
        
        #put (value, index) pair of nums1 in hash_map
        for i in range(len(nums1)):
            hash_map[nums1[i]] = i
        
        
        #initialize result list    
        result = [0] * len(nums1)
        
        #initialize stack list
        stack = []
        
        #iterate all elements in nums2
        for i in range(len(nums2)):
            
            current_number = nums2[i]
            
            #if current_number is larger than the last element in stack
            #current_number is the next greater element of the last number in stack
            while(stack and current_number > stack[-1]):
                
                #we need to check if the last number in stack is in nums1 
                if(stack[-1] in hash_map):
                    
                    #we can get its index from hash_map
                    index_in_nums1 = hash_map[stack[-1]]
                    
                    #we then set the corresponding position in result to current_number
                    result[index_in_nums1] = current_number
                    
                #remove the last element in stack after processing
                stack.pop()
                
            #add current_number to stack, trying to find the next greater element
            stack.append(current_number)
        
        #for the numbers that do not have a next greater element, set it to -1
        for remaining_number in stack:
            
            #we need to check if remaining_number is in nums1
            if(remaining_number in hash_map):
                
                #we can get its index in nums1 from hash_map
                index_in_nums1 = hash_map[remaining_number]
    
                #set its position in result to -1 (no greater element)
                result[index_in_nums1] = -1
        
        #return result
        return result
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
use std::collections::HashMap;

impl Solution {
    pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut s = Vec::new();
        let mut m = HashMap::new();
        let mut ans = Vec::new();
        for x in nums2 {
            while let Some(&top) = s.last() {
                if x <= top {
                    break;
                } 
                m.insert(top, x);
                s.pop();
            }
            s.push(x);
        }
        for x in nums1 { 
            ans.push(m.get(&x).copied().unwrap_or(-1));
        }
        ans
    }
}
```

</TabItem>

</Tabs>