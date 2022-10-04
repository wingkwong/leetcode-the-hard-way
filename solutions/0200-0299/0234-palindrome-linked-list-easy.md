---
description: 'Author: @wingkwong | https://leetcode.com/problems/palindrome-linked-list/'
tags: [Linked List, Two Pointers, Stack, Recursion]
---

# 0234 - Palindrome Linked List (Easy) 

## Problem Statement

Given the `head` of a singly linked list, return `true` if it is a palindrome.

**Example 1:**

```
Input: head = [1,2,2,1]
Output: true
```

**Example 2:**

```
Input: head = [1,2]
Output: false
```

**Constraints:**

- The number of nodes in the list is in the range `[1, 105]`.
- `0 <= Node.val <= 9`

**Follow up:** Could you do it in `O(n)` time and `O(1)` space?

## Approach 1: Fast & Slow Pointers

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        // find the middle node
        ListNode *fast = head;
        ListNode *slow = head;
        while(fast && fast->next) {
            fast = fast->next->next;
            slow = slow->next;
        }
        // handle odd case
        if(fast) slow = slow->next;
		// reverse the last half of the list
        ListNode *node = slow;
        ListNode *last = nullptr;
        ListNode *next = nullptr;
        while(node){
            next = node->next;
            node->next = last;
            last = node;
            node = next;
        }
		// compare each half of the list
        node = last;
        while(node){
            if (node->val == head->val) node = node->next, head = head->next;
            else return false;
        }
        return true;
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Convert it to String

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        // convert it to a string
        string s;
        while (head != NULL) {
            s += head->val;
            head = head->next;
        }
        // test if a string is palindrome
        string t = s;
        reverse(t.begin(), t.end());
        return s == t;
    }
};
```

</TabItem>
</Tabs>

## Approach 3: Stack

Iterative approach using Stack

* Push first half of the elements onto a stack.
* Iterate through the linked list, using fast runner / slow runner technique.
* At each step, push the data from the slow runner onto a stack
* When the fast runner hits the end of the list, the slow runner will have reached the middle of the list.
* By this point, the stack will have all the elements from the front of the linked list, but in reverse order Last, iterate through the rest of the slow runner node, and compare the node to the top of the stack.

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
    public boolean isPalindrome(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        // Stack
        Stack<Integer> stack = new Stack<>();
        // Fast & Slow runner iteration
        while (fast != null && fast.next != null) {
            stack.push(slow.val);
            fast = fast.next.next;
            slow = slow.next;
        }
        // If list has odd number of elements, Skip the middle element
        if (fast != null) {
            slow = slow.next;
        }
        while (slow != null) {
            int value = stack.pop().intValue();
            if (slow.val != value) {
                return false;
            }
            slow = slow.next;
        }
        return true;
    }
}
```

</TabItem>
</Tabs>


## Approach 4: Follow up: O(n) time, O(1) space

Easy steps to solve the problem,

* Find the middle node
* Reverse a list from middle
* Compare both halves
* Re-reverse the list (optional here), and return true if either of halves are empty

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
    public boolean isPalindrome(ListNode head) {
        ListNode mid = middleNode(head);
        ListNode secondHead = reverseList(mid);
        // Compare head with reversed middle head
        while (head != null && secondHead != null) {
            // if both values are not matching then it's not a palindrome
            if (head.val != secondHead.val) break;
            // Keep moving forward
            head = head.next;
            secondHead = secondHead.next;
        }
        return head == null || secondHead == null;
    }

    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    public ListNode reverseList(ListNode head) {
        if (head == null) return null;
        ListNode prev = null;
        ListNode current = head;
        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}
```

</TabItem>
</Tabs>