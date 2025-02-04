---
description: 'Author: @ganajayant | https://leetcode.com/problems/intersection-of-two-arrays/'
---

# 0349 - Intersection of Two Arrays (Easy)

## Problem Link

https://leetcode.com/problems/intersection-of-two-arrays/

## Problem Statement

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

## Approach 1: HashMap

1. Insert all elements from first array into hash table (set).

2. for each element i in second array if it is present in our hash table insert into result list & remove that element from our hash table so we again not insert into result.

3. return result.

<Tabs> 
<TabItem value="java" label="Java"> <SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> hm = new HashMap<>();
        for (int i : nums1) {
            if (hm.containsKey(i)) {
                hm.put(i, hm.get(i) + 1);
            } else {
                hm.put(i, 1);
            }
        }
        LinkedList<Integer> ll = new LinkedList<>();
        for (int i : nums2) {
            if (hm.containsKey(i)) {
                if (hm.get(i) >= 1) {
                    hm.put(i, hm.get(i) - 1);
                    if (!ll.contains(i)) {
                        ll.add(i);
                    }
                }
            }
        }
        int ar[] = new int[ll.size()];
        for (int i = 0; i < ar.length; i++) {
            ar[i] = ll.get(i);
        }
        return ar;
    }
}
```

</TabItem>
</Tabs>
