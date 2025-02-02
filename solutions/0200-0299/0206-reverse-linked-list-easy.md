---
description: >-
  Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/reverse-linked-list/
---

# 0206 - Reverse Linked List (Easy)

## Problem Link

https://leetcode.com/problems/reverse-linked-list/

## Problem Statement

Given the `head` of a singly linked list, reverse the list, and return the _reversed list_.

**Example 1:**

![Alt text](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**

![Alt text](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

```
Input: head = [1,2]
Output: [2,1]
```

**Example 3:**

```
Input: head = []
Output: []
```

**Constraints:**

- The number of nodes in the list is the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

**Follow up:** A linked list can be reversed either iteratively or recursively. Could you implement both?

## Approach 1: Iterative

The idea is to have 2 pointers **prev** and **next** while traversing.

Keep the next pointer reference in temp node, and change the **current node next ptr** to **prev node**. Keep continuing the process till last node and return last node as a head reference.

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
    public ListNode reverseList(ListNode head) {
        if (head == null) return null;
        ListNode prev = null;
        ListNode current = head;
        //
        while (current != null) {
            // Before changing current ptr next node, keep reference copy
            ListNode next = current.next;
            // Change the current node next ptr to prev node
            current.next = prev;
            // For the next iteration, keep current as previous node
            prev = current;
            current = next;
        }
        // Return last node as a Head reference
        return prev;
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
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None

        while head:
            curr = head
            head = head.next
            curr.next = prev
            prev = curr
        return prev
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  while (head) {
    let curr = head;
    head = head.next;
    curr.next = prev;
    prev = curr;
  }
  return prev;
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
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = NULL;
        while (head) {
            ListNode* curr = head;
            head = head->next;
            curr->next = prev;
            prev = curr;
        }
        return prev;
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Recursive

In the Recursive call, we never know when the list will end, so keep changing the current node next ptr to previous node and traverse through the list. At last, you have set all your pointer to previous node, then return the **Tail** (prev) as **Head**

Time Complexity: $O(n)$, where $n$ - # of nodes in the list

Space complexity: $O(n)$

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
    public ListNode reverseList(ListNode head) {
        if (head == null) return null;
        return reverseList(head, null);
    }

    public ListNode reverseList(ListNode head, ListNode prev) {
        if (head == null) return prev;
        // Reference copy of next node
        ListNode next = head.next;
        // Set current node next ptr to previous node
        head.next = prev;
        // Pass next node as current, and current node as prev to the next recursive call
        // e.g. 1 -> 2 -> 3
        // Current node is 1, and next node is 2
        // For the next recursive call, passing current node 2 and and previous as 1, so that 1 <- 2
        return reverseList(next, head);
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
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None

        new_head = head
        if head.next:
            new_head = self.reverseList(head.next)
            head.next.next = head
        head.next = None
        return new_head
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  function reverse(node, prev) {
    if (!node) {
      return prev;
    }
    let curr = node.next;
    node.next = prev;
    return reverse(curr, node);
  }
  return reverse(head, null);
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
    ListNode* reverseList(ListNode* head) {
        return rev(head, NULL);
    }
    ListNode* rev(ListNode* node, ListNode* prev) {
        if (!node) {
            return prev;
        }
        ListNode* curr = node->next;
        node->next = prev;
        return rev(curr, node);
    }
};
```

</TabItem>
</Tabs>
