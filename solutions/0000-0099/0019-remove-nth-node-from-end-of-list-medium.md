---
description: >-
  Author: @vigneshshiv |
  https://leetcode.com/problems/remove-nth-node-from-end-of-list/
---

# 0019 - Remove Nth Node From End of List (Easy)

## Problem Link

https://leetcode.com/problems/remove-nth-node-from-end-of-list/

## Problem Statement

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

**Example 1:**

![Alt text](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

**Example 2:**

```
Input: head = [1], n = 1
Output: []
```

**Example 3:**

```
Input: head = [1, 2], n = 1
Output: [1]
```

**Constraints:**

* The number of nodes in the list is `sz`.
* `1 <= sz <= 30`
* `0 <= Node.val <= 100`
* `1 <= n <= sz`

**Follow up:** Could you do this in one pass?

## Approach 1: Iteration with One Pass Solution

Decrement N and iterate fast and slow pointers, but only start slow pointer once N hit zero..

As stated in Example 1: `1 -> 2 -> 3 -> 4 -> 5`, and `n = 2`

Size of the linked list is $5$, and remove 2nd Node ($4$) from the last, so we need to stop at 3rd Node ($3$) from first when we iterate. 

Iterate with fast pointer, till `N` becomes $0$, fast pointer move to 3rd Node ($3$) then start with slow pointer.

Fast pointer is $2$ steps away to reach end (from the current 3rd Node ($3$)). While we iterate till last node, fast pointer reach end at 5th node ($5$) and eventually slow pointer stops at 3rd Node (3), finally change the pointer to the **next next node**, that's it.

Time Complexity: $O(n)$, where $n$ - # of nodes in the list

Space complexity: $O(1)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        // Dummy head pointer to return head reference at the last
        ListNode current = new ListNode();
        current.next = head;
        // Initialize slow and fast pointer to dummy head
        ListNode slow = current, fast = current;
        while (fast.next != null) {
            fast = fast.next;
            if (n <= 0) {
                slow = slow.next;
            }
            n -= 1;
        }
        slow.next = slow.next.next;
        // Head reference
        return current.next;
    }
}
```

</TabItem>
</Tabs>
