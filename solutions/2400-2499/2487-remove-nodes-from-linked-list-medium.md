---
description: "Author: @dhanu084 | https://leetcode.com/problems/remove-nodes-from-linked-list/"
tags: [Linked List, Stack]
---

# 2487 - Remove Nodes From Linked List (Medium)

## Problem Link

https://leetcode.com/problems/remove-nodes-from-linked-list/

## Problem Statement

You are given the head of a linked list.

Remove every node which has a node with a strictly greater value anywhere to the right side of it.

Return the head of the modified linked list.

**Example 1:**

```
Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.
```

**Example 2:**

```
Input: head = [1,1,1,1]
Output: [1,1,1,1]
Explanation: Every node has value 1, so no nodes are removed.
```

**Constraints:**

- The number of the nodes in the given list is in the range [1, 105].
- $1 <= Node.val <= 10^5$

## Approach 1: Straight Forward

Time Complexity: $$O(n)$$

Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="py" label="Python">

<SolutionAuthor name="@dhanu084" />

```python
class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:

        '''
            * If we see the question and expected answer we can always see that the tail of the linked list is included in the output.
            * So reverse the linked list and connect nodes which are
            less / equal than the current node.
            * Since we have reversed the linked list , we do less / equal
            checking instead of strictly increase check mentioned in the question
            * finally reverse the linked list again and return to get the answer in expected order
        '''
        def reverse(node):
            curr = node
            prev = None

            while curr:
                next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            return prev

        reverse_head = reverse(head)
        current_reverse_head = reverse_head

        while current_reverse_head:
            ch = current_reverse_head.next
            '''
                iterate till we find a node greater than current node
                and connect it to current node
            '''
            while ch and ch.val < current_reverse_head.val:
                ch = ch.next
            current_reverse_head.next = ch
            current_reverse_head = ch

        head = reverse(reverse_head)
        return head

```

</TabItem>
</Tabs>

## Approach 2: Stack

Time Complexity: $$O(n)$$

Space Complexity: $$O(n)$$ if all nodes have same value

<Tabs>
<TabItem value="py" label="Python">

<SolutionAuthor name="@dhanu084" />

```python
class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:

        '''
            * Idea here is to create a stack which is monotonously decreasing,
            any thing that defers are popped from the stack
            * as and when we append or remove from stack we update
            next pointer appropriately
        '''
        dummy = ListNode(inf)
        stack = [dummy]

        while head:
            while stack and stack[-1].val < head.val:
                stack.pop()
            stack[-1].next = head
            stack.append(head)
            head = head.next
        return dummy.next
```

</TabItem>
</Tabs>
