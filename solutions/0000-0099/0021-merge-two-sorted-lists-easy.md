---
description: "Author: @wingkwong, @ganajayant, @sourav, @radojicic23 | https://leetcode.com/problems/merge-two-sorted-lists/"
---

# 0021 - Merge Two Sorted Lists (Easy)

## Problem Link

https://leetcode.com/problems/merge-two-sorted-lists/

## Problem Statement

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

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

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

## Approach 1: Recursion

Let's think of the edge cases first. If either list is null, there is no way to merge. Therefore we simply return the non-null list. In other words, if list1 is null, we return list2, and vice versa.

We compare a node in list1 and that in list2. If the value of node in list1 is smaller than that in list2, then we can set the next node to the result of next merge result. Otherwise, we set it in list2.

In general, we will have $$list1[0] + mergeTwoLists(list1[1:], list2)$$ for $$list1[0] < list2[0]$$ else we have $$list2[0] + mergeTwoLists(list1, list2[1:])$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

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
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 == None:
            return list2
        elif list2 == None:
            return list1
        elif list1.val < list2.val:
            list1.next = self.mergeTwoLists(list1.next, list2)
            return list1
        else:
            list2.next = self.mergeTwoLists(list2.next, list1)
            return list2
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
```

</TabItem>
</Tabs>

## Approach 2: Iterative

We create a head and tail pointer.

The head pointer is created so that we can keep track of the beginning element of our list and return it in $O(1)$
Firstly we check if either of the linked list $list1$ or $list2$ is empty if it is then we simply return the non-empty list
Now we compare the first element of both the list in order to find out our beginning element of the merged linked list
We set head and tail pointer to the above-obtained element and increase the $list1$ or $list2$ pointer to the next element accordingly.

Now, we run a while loop until any of the list terminates.

Case 1: if the $list1$ value is less than l2: then we shift our tail pointer to $list1$ and set tail as the current $list1$ now we shift our l1 pointer to the next element of that list.

Case 2: if the $list2$ value is less than $list1$: then we shift our tail pointer to $list2$ and set tail as the current $list2$ now we shift our $list2$ pointer to the next element of that list.

Now when these list $list1$ and $list2$ are of equal length then the while loop will terminate before traversing whole list
To handle such cases we will check which list got terminated.

For example, if $list1$ is null right now then we just shift our tail pointer to the current element of $list2$ and copy the remaining element of $list2$.

As we are already having a sorted merged list, hence all the remaining elements will be greater than the largest of our current merged list. So we can just copy the remaining list.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode ll = new ListNode();
        ListNode tail = ll;

        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        if (list1 != null) {
            tail.next = list1;
            tail = tail.next;
        }

        else if (list2 != null) {
            tail.next = list2;
            tail = tail.next;
        }

        return ll.next;
    }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@sourav"/>

```py
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        tail = dummy
        while list1 and list2:
            if list1.val< list2.val:
                tail.next = list1
                list1 = list1.next
                tail = tail.next
            else:
                tail.next = list2
                list2 = list2.next
                tail = tail.next
        if list1:
            tail.next = list1
        if list2:
            tail.next = list2
        return dummy.next
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  let tail = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  if (list1) tail.next = list1;
  if (list2) tail.next = list2;
  return dummy.next;
};
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* dummy = new ListNode();
        auto tail = dummy;
        while (list1 && list2) {
            if (list1->val < list2->val) {
                tail->next = list1;
                list1 = list1->next;
            } else {
                tail->next = list2;
                list2 = list2->next;
            }
            tail = tail->next;
        }
        if (list1) tail->next = list1;
        if (list2) tail->next = list2;
        return dummy->next;
    }
};
```

</TabItem>
</Tabs>
