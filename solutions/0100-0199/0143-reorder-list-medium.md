---
description: "Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/reorder-list/"
tags: [Linked List, Two Pointers, Stack, Recursion]
---

# 0143 - Reorder List (Medium)

## Problem Link

https://leetcode.com/problems/reorder-list/

## Problem Statement

You are given the head of a singly linked-list. The list can be represented as:

```
L0 → L1 → … → Ln - 1 → Ln
```

_Reorder the list to be on the following form:_

```
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
```

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

**Example 1:**

![](https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg)

```
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg)

```
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```

**Constraints:**

- The number of nodes in the list is in the range `[1, 5 * 10^4]`.
- `1 <= Node.val <= 1000`


## Approach 1: Iterative using 2 pointers.

We can break this problem down into 3 distinct parts. 
1. Find the middle.
2. Reverse the second half.
3. Merge the Two linked lists.

All of these can be done with very careful pointer manipulation to track the proper nodes at the proper time to manipulate each node correctly.

1. Finding the middle.

We can find the middle, using a 2 pointer approach, 1 a slow pointer that moves 1 node at a time, and a 2nd fast pointer that moves 2 nodes at a time, stopping only in the case when either our fast pointer reaches null, or fast's next pointer is null. By starting the slow pointer at the first node, and the fast pointer at the second node, we will always end off in the case of the slow node being left at the end of the first half, ready to move on to the second half. In the case of an odd number of nodes, the first half will be larger too, which allows for an easy merge.

Example:
```
0 -> 1 -> 2 -> 3 -> 4-> null
s    f
     s         f
          s             f
```
Here we can see that when it ends, by moving our slow pointer to the second half, we have a split of 0->1->2->null and 3->4->null. We can also imagine in the case of a 4 node linked list, the split would be even: 0->1->null and 2->3->null.

2. [Reversing](https://wingkwong.github.io/leetcode-the-hard-way/solutions/0200-0299/reverse-linked-list-easy) the second half.

Before we reverse, we will need to sever the links between both halves to make sure we have two separate linked lists.

Then, to reverse a linked list, we will need 2 pointers again, one to point to the previous node in the list, so we know where to point our current node, and another to track the head of the linked list as we go along. We maintain a temporary node inside our loop, to make sure we don't lose track of the next node as we are moving our current node's pointer to the node behind it.

```
0->1->2->null
0<-1  2->null
```
Above we can see, if we don't track our next node from the current, we can easily lose our linked list.

3. Merging

Finally, we can merge our linked lists, again with 2 pointers, 1 at the head of each linked list. We need temporary pointers to track the next values of each linked list again so we don't lost them. Then we point our first list to our second, and our second to the first's next and making sure we update the heads of our first and second to their appropriate next node. Then, considering how we split our lists, we only need to do this while our second linked list has nodes, since our first will always be the same size or larger, and the second will always point to the first's next node. Again we are aiming for:

```
L0 → L1 → … → Ln - 1 → Ln
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
```

Time Complexity: $$O(n)$$. We will be looking at each node twice, Once to traverse, split and reverse, and a second time to merge into a single list.

Space Complexity: $$O(1)$$. We are using constant extra space to track nodes while we manipulate their next pointers.

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
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        # Return early in the case of single node linked lists.
        if not head.next:
            return head
        # Finding the middle.
        # we will do that with a slow and fast pointer approach.
        # We start at nodes 1 and 2 for an easy splitting and merging process.
        slow, fast = head, head.next
        # We must have a fast node, and a fast.next node for this to work. Once we reach
        # the end, ie the fast pointer points to null, or the last node, we can stop.
        while fast and fast.next:
            # move slow pointer once
            slow = slow.next
            # move fast pointer twice.
            fast = fast.next.next
        
        # Reverseing the second half
        # To reverse we need two nodes, a prev for the current node to point to.
        prev = None
        # A head node of the list we want to reverse, note: slow will always
        # be at the end of the first half of the linked list, so we start on 
        # slow's next node, for the second half.
        node = slow.next
        # break the linked lists in two halves before we start.
        slow.next = None
        # while node points to a valid node, ie we have not reached the end.
        while node:
            # track our temporary node.next so we don't lose it.
            # Note: next is a key word in python, so we avoid overwriting it here.
            nxt = node.next
            # point the current node to the node behind us.
            node.next = prev
            # set the previous node to the current node.
            prev = node
            # move our node pointer to the next node in the list.
            node = nxt

        # Merging
        # Finally to merge, we again need two pointers, one at the head of each
        # linked list. Since l1 is always larger or equal to in size of l2, we can
        # run our loop only while l2 points to a valid node.
        l1, l2 = head, prev
        while l2:
            # make sure to create temporary nodes tracking the next node in each list.
            l1_next, l2_next = l1.next, l2.next
            # point our first linked list to the second one. That is 0->n
            l1.next = l2
            # Point our second linked list node to l1's next node. n->1
            l2.next = l1_next
            # Set both l1 and l2 to the proper next nodes in the linked list.
            # that is 1 and n-1.
            l1, l2 = l1_next, l2_next
        # We haven't touched our head, so we can return our head.
        return head
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
    void reorderList(ListNode* head) {
        // find middle node
        ListNode* slow = head;
        ListNode* fast = head->next;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        ListNode* second = slow->next;
        slow->next = NULL;
        ListNode* prev = NULL;

        // reverse second half
        while (second) {
            ListNode* tmp = second->next;
            second->next = prev;
            prev = second;
            second = tmp;
        }
        // merge two halfs
        ListNode* first = head;
        second = prev;
        while (second) {
            ListNode* tmp1 = first->next;
            ListNode* tmp2 = second->next;
            first->next = second;
            second->next = tmp1;
            first = tmp1, second = tmp2;
        }
    }
};
```

</TabItem>
</Tabs>
