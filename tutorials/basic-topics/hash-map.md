---
title: 'Hash Map'
description: 'Hash Map provides quick lookup of certain values in O(1) time.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - hash map
  - algorithm
---

> This tutorial is written by @heiheihang

# Hash Map

Hash Map provides quick lookup of certain values in $$O(1)$$ time, and it is very useful in many LeetCode questions. Let's take a look at the classic Two Sum question

0001 - Two Sum (Easy) ([LeetCode Link](https://leetcode.com/problems/two-sum/))

> Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.
>
> You may assume that each input would have _**exactly**_** one solution**, and you may not use the _same_ element twice.
>
> You can return the answer in any order.

For example, given the following input:

```python
nums = [2,7,11,15], target = 9
```

We can see that the first two elements (`2` and `7` ) add up to the target (`9)`. So we need to return `[0,1]` , as these two indices refer to `2` and `7` .&#x20;

The naive way to solve this problem is to use a nested for-loop:

```python
def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        #locate the first element
        for i in range(len(nums)):
            
            #search the second element from i+1
            for j in range(i+1, len(nums)):
                
                #check if they add up to target
                if(nums[i] + nums[j] == target):
                    
                    #return the two indices if they do
                    return [i, j]
                
        return -1
```

We observe that with a nested for-loop, the runtime complexity is $$O(n^2)$$. Let us look at how hash map can help us here.

Hash Map basically is a label. For example, if we want to store the (value, index) pair from the example above in a Hash Map.&#x20;

```python
#we use {} to initialize a hash map
hash_map = {}

#we want to map the (value, index) pair in this list
input_1 = [2,7,11,15]

#we put the (value, index) pair to the hash map
hash_map[2] = 0 
hash_map[7] = 1
hash_map[11] = 2
hash_map[15] = 3
```

The special feature of hash map is that, from now on, if we want to know a value exists in `input_1` or not, we can just perform:

```python
if( 7 in hash_map):
    print("7 is in input_1")
else:
    print("7 is not in input_1")
```

This operation only takes $$O(1)$$ time! Without hash map, we would need to iterate the input to search for a specific element.&#x20;

After understanding Hash Map, are you able to solve [Two Sum](../../solutions/0000-0099/two-sum) in $$O(N)$$ time?

### Suggested Problems

* 0003 - Longest Substring Without Repeating Characters (Medium) [(LeetCode Link)](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
* 0217 - Contains Duplicate (Easy) [(LeetCode Link)](https://leetcode.com/problems/contains-duplicate/)
* 0219 - Contains Duplicate II (Easy) [(LeetCode Link)](https://leetcode.com/problems/contains-duplicate-ii/)

