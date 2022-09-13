---
description: 'Author: @wingkwong, @ganajayant| https://leetcode.com/problems/swap-nodes-in-pairs/'
---

# 0024 - Swap Nodes in Pairs (Medium)

## Problem Link

https://leetcode.com/problems/swap-nodes-in-pairs/

## Problem Statement:

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/03/swap\_ex1.jpg)

```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

**Example 2:**

```
Input: head = []
Output: []
```

**Example 3:**

```
Input: head = [1]
Output: [1]
```



**Constraints:**

* The number of nodes in the list is in the range `[0, 100]`.
* `0 <= Node.val <= 10`

## Approach 1: Recursive

For each round, we just need to take care of two nodes to be swapped. The remaining nodes are passed to the next call. First, we check if we can take two nodes. If not, return head. Otherwise, take the first two nodes and process the following logic.

Let's think of the second node first. If two nodes are swapped, the second node will link to the first node after swapping. Therefore, we can simply link the second node to the first node. After swapping, the first one will link to the all nodes linked by the original second node. We just need to call swapPairs again to handle it.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        // check if it is possible to take two nodes
        if (head == nullptr || head->next == nullptr) return head;
        // take the first node
        ListNode* f = head;
        // take the second node
        ListNode* s = head->next;
        // the first node links to all nodes originally linked by the second node
        f->next = swapPairs(s->next);
        // the second node links to the first node
        s->next = f; 
        // return head
        return s;
    }
};
```
</TabItem>
</Tabs>

## Approach 2: Iterative
See, we need to swap adjacent nodes right, So can we see that as a linked list in which we have to swap a linked list of length 2 and then after doing on that, we can move it further.
Example:
1->2->3->4
After swapping first part or linked list of length 2, It would be
2->1->3->4
Now we need to go to 3->4 and do on the same on it and final answer would become
2->1->4->3
For this new linked list of length 2, We maintain two variables currentnode and nextnode denoting first and last of that linked list.
Now we need to think how would we connect those linked list of len 2, For this I maintained two variables previousnode which is helping to form this linked list.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }

        ListNode currentnode = head;
        ListNode previousnode = null;

        while (currentnode != null && currentnode.next != null) {
            ListNode nextnode = currentnode.next;
            if (previousnode == null) {
                currentnode.next = nextnode.next;
                nextnode.next = currentnode;
                head = nextnode;
            } else {
                currentnode.next = nextnode.next;
                previousnode.next = nextnode;
                nextnode.next = currentnode;
            }

            previousnode = currentnode;
            currentnode = currentnode.next;
        }

        return head;
    }
}
```
</TabItem>
</Tabs>
