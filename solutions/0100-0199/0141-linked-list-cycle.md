---
description: 'Author: @lonyehan, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/linked-list-cycle/'
tags: [Hash Table, Linked List, Two Pointers]
---

# 0141 - Linked List Cycle (Easy)

## Problem Link

https://leetcode.com/problems/linked-list-cycle/

## Problem Statement

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.

Return `true` _if there is a cycle in the linked list_. Otherwise, return `false`.

**Example 1:**

![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

**Example 3:**

![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

**Constraints:**

* The number of the nodes in the list is in the range `[0, 10^4]`.
* `-10^5 <= Node.val <= 10^5`
* `pos` is `-1` or a **valid index** in the linked-list.

**Follow up:** Can you solve it using `O(1)` (i.e. constant) memory?

## Approach 1: Two Pointers

<Tabs>
<TabItem value="cs" label="C#">
<SolutionAuthor name="@lonyehan"/>

```cs
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public bool HasCycle(ListNode head) {
        ListNode slowPointer = head;
        ListNode quickPointer = head;
        
        if(head == null) return false;
        
        while(head != null) {
            // slow pointer, move one step each time.
            slowPointer = slowPointer.next;
            if(slowPointer == null) return false;
            
            // quick pointer, move two steps each time.
            quickPointer = quickPointer?.next?.next;
            if(quickPointer == null) return false;
            
            // slow pointer meets quick pointer means that there is a cycle in this linked list
            if(slowPointer == quickPointer) return true;
        }
        
        return false;
    }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@vale-c"/>

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        slowPointer = head
        quickPointer = head
        
        if head == None:
            return False
        
        while head != None:
            # slow pointer, move one step each time.
            slowPointer = slowPointer.next
            if slowPointer == None:
                return False
            
            # quick pointer, move two steps each time.
            quickPointer = quickPointer.next.next if quickPointer.next != None else None
            if quickPointer == None:
                return False
            
            # slow pointer meets quick pointer means that there is a cycle in this linked list
            if slowPointer == quickPointer:
                return True
        
        return False
  ```
  
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
// Time complexity: O(n), where n - # of nodes in the list
// Space complexity: O(1)
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null) return false;
        // Fast & Slow pointer
        ListNode slow = head;
        ListNode fast = head;
        // Fast Reference to check if it's not null, because it's traverse twice as fast as slow
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            // If both meet at the same node then there is a loop
            if (slow == fast) {
                return true;
            }
        }
        // If no loop, fast pointer at the end reached it's last node null pointer
        return false;
    }
}
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head
    let fast = head 

    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
};
```

</TabItem>
</Tabs>
