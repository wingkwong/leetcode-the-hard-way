---
description: "Author: @ColeB2 | https://leetcode.com/problems/reverse-nodes-in-k-group/"
tags: [Linked List, Recursion]
---

# 0025 - Reverse Nodes in k-Group (Hard)

## Problem Link

https://leetcode.com/problems/reverse-nodes-in-k-group/

## Problem Statement

Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return _the modified list_.

`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg)

```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg)

```
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
```

**Constraints:**

- The number of nodes in the list is `n`.
- `1 <= k <= n <= 5000`
- `0 <= Node.val <= 1000`
 

**Follow-up:** Can you solve the problem in `O(1)` extra memory space?

## Approach 1: Iterative

A hard question, but if we break it down, it is made up of a bunch of fairly easy linked list ideas, just used all at once. The first and most obvious one is to [reverse a linked list](https://leetcodethehardway.com/solutions/0200-0299/reverse-linked-list-easy#problem-link). Secondly, we can use a bunch of other simple linked list tricks, that is using pointers to track interesting nodes, and a dummy head to simplify the code and basic linked list traversal.

So first, [reversing](https://leetcodethehardway.com/solutions/0200-0299/reverse-linked-list-easy#problem-link) a linked list. I recommend you check the link to get a more in-depth answer. But simply we need to track previous and next pointers for each node to adjust the pointers and not lose track of where we are inside the linked list.

Secondly, we need a bunch of pointers:

One will be a $$dummy$$ head that will point to the head of the linked list. This simplifies our return clause, as we know the head of the linked list won't be the return node, as the first k-group tail node will become the new head. It will also help us simplify by giving us a $tail$ that isn't null for our first iteration.

The $$tail$$ pointer will be used for tracking the previous k-group tail node, so we can point it to the current group's head node after the reversal process.

We will also use pointers to track our current place while tracing through the linked list, as well as a pointer to point to the head of the current kgroup- linked list so we don't lose where it is.

With those pointers, we can traverse through the list, counting until our counter reaches k. This gives us a tail of the current linked list group, which we will track with a pointer. From their we need to track the head of the remaining linked list, so we don't lose it, and then sever the current linked list, reverse it, and then re-attach the pointers of the previous group tail to the new head, as well as the new tail to the next groups head.

Time Complexity: $$O(n)$$. We will be touching each node twice, once while counting out nodes, and a second time during the reversal process.

Space Complexity: $$O(1)$$. We will only be using pointers and a dummy head, and nothing else to help us with our algorithm.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseLinkedList(self, head: ListNode) -> Tuple[ListNode, ListNode]:
        # track prev node so we can point our next pointer to it.
        prev = None
        # tracking node to loop through linked list.
        node = head
        while node:
            # track the next node so as not to lose it while adjusting pointers.
            nxt = node.next
            # set next pointer to the node behind it, prev.
            node.next = prev
            # adjust the new prev node to be current node for subsequent loops.
            prev = node
            # move our node pointer up to the next node in front of it.
            node = nxt
        # return the new tail of the k-group which is our head.
        return head

    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        # base case, if k == 1, skip doing all work below and just return.
        if k == 1:
            return head
        # dummy node to simplify return
        dummy = ListNode(None, head)
        # tail of prev k-group to fix our linked lists pointers.
        tail = dummy
        # set a tracking node, node, to cycle through linked list and a
        # head of current linked list, cur_head.
        node, cur_head = head, head
        # while tracking node is tracking a node and hasn't reached end.
        while node:
            # set count of current group, we start with a head so count = 1.
            count = 1
            # loop until count reachs k nodes.
            while count < k:
                # check that node is a node, and hasn't reached end of list.
                if node:
                    # move tracking node up, and increment counter.
                    node = node.next
                    count += 1
                else:
                    # reached end without enough nodes, return early.
                    return dummy.next
            # Only do below if we have enough nodes inside k-group and haven't reached end.
            # Node is currently at the tail of the k-group After reversal
            # it will be the head of the k-group
            if node:
                # track head of the next k-group.
                nxt = node.next if node else None
                # sever list so we can reverse it.
                node.next = None
                # reverse list, which will return new tail
                new_tail = self.reverseLinkedList(cur_head)
                # reattach our new tail back to the remaining linked list.
                new_tail.next = nxt
                # set prev linked lists to node, which was once the k-group's tail,
                # but after reversal became the k-group's head
                tail.next = node
                # update previous k-group tail to be the current groups tail.
                tail = new_tail
                # set node tracker and head of next k-group linked list for next loop.
                node, cur_head = nxt, nxt
        # return return_head
        return dummy.next

```

</TabItem>
</Tabs>

