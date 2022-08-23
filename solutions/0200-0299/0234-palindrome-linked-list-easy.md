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

## Approach 2: Convert it to String

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