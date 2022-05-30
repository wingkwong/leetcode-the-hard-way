---
description: 'Author: @wingkwong | https://leetcode.com/problems/merge-k-sorted-lists/'
---

# 0023 - Merge k Sorted Lists (Hard)

## Problem Statement

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

_Merge all the linked-lists into one sorted linked-list and return it._

**Example 1:**

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

**Example 2:**

```
Input: lists = []
Output: []
```

**Example 3:**

```
Input: lists = [[]]
Output: []
```

**Constraints:**

* `k == lists.length`
* `0 <= k <= 10^4`
* `0 <= lists[i].length <= 500`
* `-10^4 <= lists[i][j] <= 10^4`
* `lists[i]` is sorted in **ascending order**.
* The sum of `lists[i].length` won't exceed `10^4`.

## Approach 1: Divide and Conquer


> It is recommended to solve [0021 - Merge Two Sorted Lists (Easy)](merge-two-sorted-lists-easy) first.

We can directly use the solution from [0021 - Merge Two Sorted Lists (Easy)](merge-two-sorted-lists-easy) to solve this problem because merging K sorted lists is same as merging two sorted lists $$log_2k$$ times.

The idea is to merge the $$k$$ lists into $$k / 2$$, then $$k / 4$$, $$k / 8$$ and so on. Therefore, we merge the pairs$$(0, 1), (2,3), (4,5),(6,7)$$, then $$(0, 2), (4,6)$$, then $$(0, 4)$$ and get the final result.

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode *mergeKLists(vector<ListNode*> &lists) {
        if (lists.size() == 0) return nullptr;
        while (lists.size() > 1) {
            vector<ListNode *> nlists;
            for (int i = 0; i < lists.size(); i += 2) {
                ListNode* l = lists[i];
                ListNode* r = i + 1 < lists.size() ? lists[i + 1] : nullptr;
                ListNode* merged = mergeTwoLists(l, r);
                nlists.push_back(merged);
            }
            lists = nlists;
        }
        return lists[0];
    }
    
    // Solution from 0021 - Merge Two Sorted Lists (Easy) 
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
