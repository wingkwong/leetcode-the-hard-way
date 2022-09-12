---
description: 'Author: @DoubleSpicy | https://leetcode.com/problems/contains-duplicate/'
---

# 0217 - Contains Duplicate (Easy)

## Problem Link

https://leetcode.com/problems/contains-duplicate/

## Problem Statement

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Example 1:**

```
Input: nums = [1,2,3,1]
Output: true
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: false
```

**Example 3:**

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `-10^9 <= nums[i] <= 10^9`

## Approach 1: Count number of appearance using std::unordered\_set

Perhaps the most straight forward way to find out duplicated elements since nothing could be added into a set when the same value is inside the set already. Then we could compare the number of distinct elements vs. number of elements in nums to judge if there is duplicates.

Some further optimizations could be done. First, we could stop early once we have find a duplicate. Also note that `std::unordered_set::insert` returns a pair object which is an iterator pointing to the newly added element or the element with the same key, followed by a boolean variable telling you that a element is newly inserted or not. There is no need to use `std::unordered_set::find` before insertion.

Both time and space complexity is $$O(N)$$.

<SolutionAuthor name="@DoubleSpicy"/>

```cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // store distinct elements in nums,
        // and temporary insertion result.
        unordered_set<int> appears;
        pair<unordered_set<int>::iterator, bool> result;

        for (auto const & num: nums){
            result = appears.insert(num);
            if (result.second == false){ 
                // stop early once we find a duplicate.
                return true;
            }
        }
        return false;
    }
};
```

## Approach 2: Sort, then see if next element is the same

Another approach is to sort `nums` and then see for each element, whether next element has the same value. For example sorting `1, 2, 5, 5, 4` gives `1, 2, 4, 5, 5`.

This approach is more memory efficient ($$O(logN)$$) then approach 1 since it doesn't need to make copies of input values stored in a set but comes at a price of $$O(NlogN)$$ time complexity.

<SolutionAuthor name="@DoubleSpicy"/>

```cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // sort nums first.
        // make a variable to store the last value read.
        sort(nums.begin(), nums.end());
        int last = nums[0];
        // for each element, see if the value is equal to last value.
        for (int i = 1; i < nums.size(); i++){
            if (last == nums[i])
                return true;
            else
                last = nums[i];
        }
        return false;
    }
};
```

## Beginner Python Solution

In general, we want to make use of `defaultdict` in python.

We can declare `dictionary = defaultdict(int)` to keep track of what elements we have seen so far.

You might be thinking: Why can't we simply loop the array for each element to check if there is duplicate? It is less time efficient if we do not use a `dictionary`.
![1](https://user-images.githubusercontent.com/24492138/170910845-58aaea00-3a90-4c15-9ca2-fdf9e473baa5.jpg)
![2](https://user-images.githubusercontent.com/24492138/170910857-5bcbaf02-22f7-4d31-8b93-94784fa2be73.jpg)
![3](https://user-images.githubusercontent.com/24492138/170910863-48ac46bf-dae8-423e-809a-22ec32466b06.jpg)
![4](https://user-images.githubusercontent.com/24492138/170910866-22f6ed1d-b58c-4e6a-8e32-11ba7e0b6b29.jpg)

<SolutionAuthor name="@DoubleSpicy"/>

```python
hashNum = defaultdict(int)
for i in nums:
  if i not in hashNum:
    hashNum[i] = 1
  else:
    return True
return False
```
