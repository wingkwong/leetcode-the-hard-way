---
description: 'Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/add-two-numbers/'
tags: [Linked List, Math, Recursion]
---

# 0002 - Add Two Numbers (Medium)

## Problem Link

https://leetcode.com/problems/add-two-numbers/

## Problem Statement

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

**Example 2:**

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

## Approach 1: Iterative

So we must add 2 numbers together, given in reverse, and then return it. So just like adding 2 numbers on a piece of paper, we must start with the one's digits, and incrementally move up to the tens, hundreds etc. We must also track a carry-over number in case 2 numbers added together go over 9 and reach double digits. We know then if we add 2 digits plus a carry, that the largest our future carry can ever be is 1 as $$9 + 9 + 1 = 19$$, so our carry will never be anything either than 1 or a 0.

So knowing that we know we can use a dummy node to help with returning the head, and a variable to track our current node as well as a variable to track our carry-over. Then inside our loop we have 3 main steps.

1. Get all 3 digits, that is $$l1.val$$, $$l2.val$$ and $$carry$$. Make sure they are valid, and if not we can set them to 0.
2. Get our result. Once we have our 3 digits, we can add them and have a digit for our next node. Note that the digit will be $$ans \mod  10$$ as we want just the one's digit. We will also have to update our carry variable to be a 1 or a 0.
3. Finally we can move all our pointers, that is update our l1, l2 and current node pointer, making sure to only move l1 and l2 if they are nodes.

Time Complexity: $$O(max(m,n))$$. We know that our time will depend on whichever linked list is longer, which will be $$max(m,n) + 1$$.

Space Complexity: $$O(max(m,n))$$. Similarly we know our answer will have the same amount of nodes as the longest number, $$max(m,n) + 1$$.

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
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        # first we create a dummy node, and point our current node to the dummy
        # as well. This helps with the return as we can just return dummy.next
        # and not lose our head node.
        dummy = node = ListNode(val=None)
        # track our carry value. It will only ever be a 1 or a 0.
        carry = 0
        # Continue our loop as long as we have values to add.
        while l1 or l2 or carry:
            # Get our linked list values. If the list is no longer valid default
            # the value to 0.
            n1 = l1.val if l1 else 0
            n2 = l2.val if l2 else 0
            # Add our values together.
            num = n1 + n2 + carry
            # Update our carry for the next loop. It can only ever be 1 or 0.
            # Python integer division will mean anything < 10 will be 0 and >= 1.
            carry = num // 10
            # Get the one's column of the digit. If it is 2 digits, ie 10,11,12 etc.
            # We only want the one's column so taking the modulo 10 of the num, will
            # give us whatever is in the one's column.
            digit = num % 10
            # Create the next node, with the val being the digit we got above.
            node.next = ListNode(digit)
            # Update our pointers. If l1 or l2 reach the end, just set them to None.
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
            node = node.next
        # We created a dummy node above so we can return dummy.next as our answer.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    // get values if linked list is not null
    // otherwise the value is 0
    let v1 = l1 ? l1.val : 0;
    let v2 = l2 ? l2.val : 0;
    // add values
    let value = v1 + v2 + carry;
    // update carry value
    // it can only be 1 or 0
    carry = Math.floor(value / 10);
    // our value can be two digits number
    // we want only one's place digit
    value %= 10;
    // insert it into new list
    curr.next = new ListNode(value);
    // update pointers
    curr = curr.next;
    l1 = l1 ? l1.next : 0;
    l2 = l2 ? l2.next : 0;
  }
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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode();
        ListNode* curr = dummy;
        int carry = 0;
        while (l1 || l2 || carry) {
            // get values if linked list is not null
            // otherwise the value is 0
            int v1 = l1 ? l1->val : 0;
            int v2 = l2 ? l2->val : 0;
            // add values
            int value = v1 + v2 + carry;
            // update carry value
            // only can be 0 or 1
            carry = floor(value / 10);
            // value can be two digits number
            // we only want one digit number
            value %= 10;
            // insert it into new linked list
            curr->next = new ListNode(value);
            // update pointers
            curr = curr->next;
            l1 = l1 ? l1->next : NULL;
            l2 = l2 ? l2->next : NULL;
        }
        return dummy->next;
    }
};
```

</TabItem>
</Tabs>
