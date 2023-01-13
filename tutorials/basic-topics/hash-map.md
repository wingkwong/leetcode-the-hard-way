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

<TutorialAuthors names="@heiheihang, @wingkwong"/>

## Overview

A Hash map, also known as a hash table, is a data structure that stores key-value pairs and uses a hash function to map keys to their corresponding values. The hash function takes a key as input, performs some calculations on it, and returns an index (also known as a "hash code") where the value corresponding to that key can be found.

The basic idea behind a hash map is to use the key to quickly locate the corresponding value in the table, without having to search through all the elements one by one, like in a linear search. The time complexity of a hash map is $O(1)$ on average, which is much faster than a linear search $O(n)$.

A hash map is implemented as an array of "buckets", where each bucket can store one or more key-value pairs. When a key is hashed, the hash function calculates the index of the bucket where the key-value pair should be stored. If two keys hash to the same index, it is called a collision, and there are different strategies to handle collisions, such as chaining or open addressing.

Hash maps are widely used in many applications, such as databases, caches, and programming languages. They are also used as an efficient data structure for implementing other data structures such as sets, dictionaries, and associative arrays. Hash maps have a few advantages over other data structures such as arrays and linked lists:

- Hash maps have constant time complexity for inserting, retrieving and removing elements, which makes them more efficient than arrays and linked lists, which have linear time complexity.
- Hash maps can store any type of data as a key, while arrays can only store integers as keys.
- Hash maps can be resized dynamically, which allows them to adapt to changing data and usage patterns.

In conclusion, a hash map is a data structure that stores key-value pairs and uses a hash function to quickly locate values based on keys. It has an average time complexity of O(1), which makes it more efficient than other data structures such as arrays and linked lists. Hash maps are widely used in many applications and are an efficient data structure for implementing other data structures such as sets, dictionaries, and associative arrays.

## Example: [0001 - Two Sum (Easy)](https://leetcode.com/problems/two-sum/)

> Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.
>
> You may assume that each input would have _**exactly**_** one solution**, and you may not use the _same_ element twice.
>
> You can return the answer in any order.

For example, given the following input:

```python
nums = [2,7,11,15], target = 9
```

We can see that the first two elements (`2` and `7` ) add up to the target (`9)`. So we need to return `[0,1]` , as these two indices refer to `2` and `7` .

The naive way to solve this problem is to use a nested for-loop:


<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # locate the first element
        for i in range(len(nums)):
            # search the second element from i + 1
            for j in range(i+1, len(nums)):
                # check if they add up to target
                if(nums[i] + nums[j] == target):
                    # return the two indices if they do
                    return [i, j]
        return -1    
```
</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        for (int i = 0; i < nums.size(); i++) {
            for (int j = i + 1; j < nums.size(); j++) {
                if (nums[i] + nums[j] == target) {
                    return {i, j};
                }
            }
        }
        return {-1, -1};
    }
};
```
</TabItem>


<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] {i, j};
                }
            }
        }
        return new int[] {-1, -1};
    }
}
```
</TabItem>
</Tabs>

We observe that with a nested for-loop, the runtime complexity is $$O(n^2)$$. Let us look at how hash map can help us here.

Hash Map basically is a label. For example, if we want to store the (value, index) pair from the example above in a Hash Map.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```py
# we use {} to initialize a hash map
hash_map = {}

# we want to map the (value, index) pair in this list
input_1 = [2,7,11,15]

# we put the (value, index) pair to the hash map
hash_map[2] = 0 
hash_map[7] = 1
hash_map[11] = 2
hash_map[15] = 3
```
</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// initialize a hash map
unordered_map<int, int> hash_map;

// sample
vector<int> input_1 = {2, 7, 11, 15};

// we put the (value, index) pair to the hash map
for (int i = 0; i < input_1.size(); i++) {
    hash_map[input_1[i]] = i;
}
```
</TabItem>


<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
// initialize a hash map
HashMap<Integer, Integer> hash_map = new HashMap<Integer, Integer>();

// sample
int[] input_1 = {2, 7, 11, 15};

// we put the (value, index) pair to the hash map
for (int i = 0; i < input_1.length; i++) {
    hash_map.put(input_1[i], i);
}
```
</TabItem>
</Tabs>

The special feature of hash map is that, from now on, if we want to know a value exists in `input_1` or not, we can just perform:


<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@heiheihang"/>

```py
if( 7 in hash_map):
    print("7 is in input_1")
else:
    print("7 is not in input_1")
```
</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
if (hash_map.find(7) != hash_map.end()) {
    cout << "7 is in input_1" << endl;
} else {
    cout << "7 is not in input_1" << endl;
}

// or we can use count
if (hash_map.count(7)) {
    cout << "7 is in input_1" << endl;
} else {
    cout << "7 is not in input_1" << endl;
}
```
</TabItem>


<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
if (hash_map.containsKey(7)){
    System.out.println("7 is in input_1");
} else {
    System.out.println("7 is not in input_1");
}
```
</TabItem>
</Tabs>

This operation only takes $$O(1)$$ time! Without hash map, we would need to iterate the input to search for a specific element.

After understanding Hash Map, are you able to solve [Two Sum](../../solutions/0000-0099/two-sum) in $$O(N)$$ time?

export const suggestedProblems = [
  {
    "problemName": "0217 - Contains Duplicate",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/contains-duplicate/",
    "solutionLink": "../../solutions/0200-0299/contains-duplicate-easy"
  },
  {
    "problemName": "0219 - Contains Duplicate II",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/contains-duplicate-ii/",
    "solutionLink": "../../solutions/0200-0299/contains-duplicate-ii-easy"
  },
  {
    "problemName": "0003 - Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "solutionLink": "../../solutions/0000-0099/longest-substring-without-repeating-characters-medium"
  },
  {
    "problemName": "0706 - Design HashMap",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/design-hashmap/",
    "solutionLink": "../../solutions/0700-0799/design-hashmap-medium"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />