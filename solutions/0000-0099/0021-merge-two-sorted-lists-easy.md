---
description: 'Author: @wingkwong | https://leetcode.com/problems/merge-two-sorted-lists/'
---

# 0021 - Merge Two Sorted Lists (Easy)

## Problem Statement

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.



**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/03/merge\_ex1.jpg)

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**

```
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**

```
Input: list1 = [], list2 = [0]
Output: [0]
```

**Constraints:**

* The number of nodes in both lists is in the range `[0, 50]`.
* `-100 <= Node.val <= 100`
* Both `list1` and `list2` are sorted in **non-decreasing** order.

## Approach 1: Recursion

Let's think of the edge cases first. If either list is null, there is no way to merge. Therefore we simply return the non-null list. In other words, if list1 is null, we return list2, and vice versa.

We compare a node in list1 and that in list2. If the value of node in list1 is smaller than that in list2, then we can set the next node to the result of next merge result. Otherwise, we set it in list2.

In general, we will have $$list1[0] + mergeTwoLists(list1[1:], list2)$$ for $$list1[0] < list2[0]$$ else we have $$list2[0] + mergeTwoLists(list1, list2[1:])$$.

```cpp
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        if (list1 == nullptr) return list2;
        else if (list2 == nullptr) return list1;
        else if (list1->val < list2->val) {
            list1->next = mergeTwoLists(list1->next, list2);
            return list1;
        } else {
            list2->next = mergeTwoLists(list2->next, list1);
            return list2;
        }
    }
};
```
