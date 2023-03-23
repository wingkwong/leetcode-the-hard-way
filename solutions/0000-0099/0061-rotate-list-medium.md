---
description: 'Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/rotate-list/'
---

# 0061 - Rotate List (Medium)

## Problem Link

https://leetcode.com/problems/rotate-list/

## Problem Statement

Given the `head` of a linked list, rotate the list to the right by `k` places.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg)

```
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg)

```
Input: head = [0,1,2], k = 4
Output: [2,0,1]
```

**Constraints:**

* The number of nodes in the list is in the range `[0, 500]`.
* `-100 <= Node.val <= 100`
* `0 <= k <= 2 * 10^9`

## Approach 1: Connect and Cut

First we iterate each node till the end and connect the tail to the head. At the same time we calculate how many nodes there, says $$n$$. After that, we find a point to cut the list. The point to cut is $$n - k \mod n$$. As $$k$$ can be greater or equal to $$n$$, so the new head will be located at $$n - k \mod n$$. Then we link the new tail->next to null and return the new head.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (!head) return NULL;
        ListNode *p = head;
        int n = 1;
        while (p->next) {
            p = p->next;
            n++;
        }
        // connect tail to head - like a ring
        p->next = head;
        // find the location to cut
        k = len - k % len;
        // move to that location
        while (k--) p = p->next;
        // p->next is the new head
        head = p->next;
        // make it as the new tail
        p->next = NULL;
        // return the new head
        return head;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        curr = head
        n = 1
        if not head: return None
        while curr.next:
            curr = curr.next
            n += 1
        curr.next = head
        k = n - k % n
        while k:
            curr = curr.next
            k -= 1
        head = curr.next
        curr.next = None
        return head
```

</TabItem>
</Tabs>
