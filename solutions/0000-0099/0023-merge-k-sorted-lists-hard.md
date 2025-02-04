---
description: 'Author: @wkw, @rahulvarma5297, @radojicic23 | https://leetcode.com/problems/merge-k-sorted-lists/'
tags: [Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort]
---

# 0023 - Merge k Sorted Lists (Hard)

## Problem Link

https://leetcode.com/problems/merge-k-sorted-lists/

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

- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `-10^4 <= lists[i][j] <= 10^4`
- `lists[i]` is sorted in **ascending order**.
- The sum of `lists[i].length` won't exceed `10^4`.

## Approach 1: Divide and Conquer

> It is recommended to solve [0021 - Merge Two Sorted Lists (Easy)](merge-two-sorted-lists-easy) first.

We can directly use the solution from [0021 - Merge Two Sorted Lists (Easy)](merge-two-sorted-lists-easy) to solve this problem because merging K sorted lists is same as merging two sorted lists $$log_2k$$ times.

The idea is to merge the $$k$$ lists into $$k / 2$$, then $$k / 4$$, $$k / 8$$ and so on. Therefore, we merge the pairs$$(0, 1), (2,3), (4,5),(6,7)$$, then $$(0, 2), (4,6)$$, then $$(0, 4)$$ and get the final result.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

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

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@rahulvarma5297"/>

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        int len = lists.length;
        if (len == 0) {
            return null;
        }

        return mergeKLists(lists, 0, len - 1);
    }

    public ListNode mergeKLists(ListNode[] lists, int start, int end) {
        if (end - start == 0) {
            return lists[start];
        }
        if (end - start == 1) {
            return mergeLists(lists[start], lists[end]);
        }
        int mid = start + ((end - start) / 2);
        ListNode listA = mergeKLists(lists, start, mid);
        ListNode listB = mergeKLists(lists, mid + 1, end);
        return mergeLists(listA, listB);
    }

    public ListNode mergeLists(ListNode listA, ListNode listB) {
        if (listA == null) {
            return listB;
        }
        if (listB == null) {
            return listA;
        }
        if (listA.val < listB.val) {
            listA.next = mergeLists(listA.next, listB);
            return listA;
        } else {
            listB.next = mergeLists(listA, listB.next);
            return listB;
        }
    }
}
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        # edgecases: if length is 0 and lists is None
        if not lists or len(lists) == 0:
            return None
        # take pairs of LL and merge them each time and
        # keep doing it until there is one LL remaining
        while len(lists) > 1:
            merged_lists = []
            # iterate through each of these lists
            for i in range(0, len(lists), 2):
                l1 = lists[i]
                # make sure if i + 1 is in bounds because l2 might be out of bound
                # maybe we can have odd number of lists
                l2 = lists[i + 1] if (i + 1) < len(lists) else None
                # merge them together and add to merged lists
                merged_lists.append(self.mergeLists(l1, l2))
            # update lists variable
            lists = merged_lists
            # keep doing that until there is one list
        return lists[0]

    # solution from 0021 - Merge Two Sorted Lists (Easy)
    def mergeLists(self, l1, l2):
        dymmy = ListNode()
        tail = dymmy

        while l1 and l2:
            if l1.val < l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next
            tail = tail.next

        if l1:
            tail.next = l1
        elif l2:
            tail.next = l2

        return dymmy.next
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists || lists.length == 0) return null;
  while (lists.length > 1) {
    let merged_lists = [];
    for (i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;
      merged_lists.push(merge(l1, l2));
    }
    lists = merged_lists;
  }
  return lists[0];
};

var merge = function (l1, l2) {
  dummy = new ListNode();
  tail = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  if (l1) tail.next = l1;
  if (l2) tail.next = l2;
  return dummy.next;
};
```

</TabItem>
</Tabs>
