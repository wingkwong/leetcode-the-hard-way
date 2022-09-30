---
description: 'Author: @Dipanshu | https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/'
---

# 0430 - Flatten a Multilevel Doubly Linked List (Medium)

## Problem Link

https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

## Problem Statement

You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This **child pointer** may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a **multilevel data structure** as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let `curr` be a node with a child list. The nodes in the child list should appear **after** `curr` and **before** `curr.next` in the flattened list.

Return the `head` of the flattened list. The nodes in the list must have **all** of their child pointers set to `null`.

**Example 1**
```
Input: head = [1,2,null,3]
Output: [1,3,2]
```

**Example 2**
```
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
```

**Constraints**
* The number of Nodes will not exceed 1000.
* 1 <= Node.val <= 105

# Solution 1 : Recursive Approach
* **Core Idea**: We'll keep track of last node using `prev` global variable and point the current node `head` to `prev`
* **With Each Recursion Call**
  - Point the last visited node with current node by letting prev.next point to current node head and current node's prev point to prev
  - Make current node as prev `pre = head`
  - If head.child exists, we'll recursively visit and flatten its child nodes
  - Recursively visit and flatten its next nodes
```java
class Solution {
    // global variable prev to keep track of last node we visited
    Node prev = null;
    public Node flatten(Node head) {
        // base condition to break recursive loop
        if (head == null) {
            return null; 
        }

        // point the last visited node to current node
        if (prev != null) {
            prev.next = head; 
            head.prev = prev;
        }

        prev = head; 

        // store head.next in a next pointer 
        // in case head.child overrides head.next during recursive call
        Node next = head.next; 

        flatten(head.child);
        head.child = null;

        flatten(next);        
        return head; 
    }
}
```
* **Performance**
```
Runtime: 0 ms, faster than 100.00% of Java online submissions for Flatten a Multilevel Doubly Linked List.
Memory Usage: 42.1 MB, less than 62.24% of Java online submissions for Flatten a Multilevel Doubly Linked List.
```

# Solution 2 : Iterative Approach
**Core Idea**

A. Start form the `head` , move one step each time to the next node

B. When meet with a node with child, say `node`, follow its child chain to the end and connect the tail node with node.next, by doing this we merged the child chain back to the main thread

C. Return to p and proceed until find next node with child.

D. Repeat until reach null
```java
class Solution {
    public Node flatten(Node head) {
        // base condition
        if( head == null){
            return head;
        };
	
        // a reference variable having reference of head
        Node node = head; 

        // loops breaks node points to null
        while( node!= null) {

            // if child doesn't exists, continue
            if( node.child == null ) {
                node = node.next;
                continue;
            }

            // if child found , find the tail of the child and link it to node.next */
            Node temp = node.child;

            // Find the tail of the child
            while( temp.next != null ) {
                temp = temp.next;
            }
                
            // link tail with node.next, if it is not null
            temp.next = node.next;  

            // if node.next is null
            if( node.next != null )  {
                p.next.prev = temp;
            }

            // link node with node.child, and remove node.child
            node.next = node.child; 
            node.child.prev = node;
            node.child = null;
        }
        return head;
    }
}
```
* **Performance**
```
Runtime: 0 ms, faster than 100.00% of Java online submissions for Flatten a Multilevel Doubly Linked List.
Memory Usage: 42.1 MB, less than 53.26% of Java online submissions for Flatten a Multilevel Doubly Linked List.
```
