---
description: >-
  Author: @Kavita613 |
  https://leetcode.com/problems/add-two-numbers-ii/
tags: [Linked List, Math, Stack]
---

# 445 - Add two Numbers II (Medium) 

## Problem Link

https://leetcode.com/problems/add-two-numbers-ii/

## Problem Statement

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list. 
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

<img src="https://assets.leetcode.com/uploads/2021/04/09/sumii-linked-list.jpg" alt="Photo" height="160" />

```
Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7] 
```

**Example 2:**

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]
```

**Example 3:**

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

**Follow up:**  
Could you solve it without reversing the input lists?

## Approach 1: Recursion
First, we will add zeros to the start of the smaller linked list such that both the lists become of equal size and then we will use recursion to perform 
addition start to end.  
Now, we will use recursion(like reverse traversal) to the end of both the lists and start addition from the end. After each recursion ends, $l1$ and $l2$ will be 
waiting at the previous nodes. Here we will pass $carry$ from current recursive function to the previous recursive function, for which we can pass the reference 
variable $carry$ to function so that the changes made to $carry$ reflect through all the recursive calls made.


<Tabs>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Kavita613"/>

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode * next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode * next) : val(x), next(next) {}
 * };
 */
 ListNode * addDigits (ListNode * l1, ListNode * l2, int &carry) {
        if (l1 == NULL && l2 == NULL) 
            return NULL;
        
        ListNode * new_node = new ListNode(-1);
        new_node -> next = addDigits(l1 -> next, l2 -> next, carry);
        
        new_node -> val = (l1 -> val + l2 -> val + carry) % 10;
        carry = (l1 -> val + l2 -> val + carry) / 10;
        
        return new_node;
 }
  
class Solution {
public:
    ListNode * addTwoNumbers (ListNode * l1, ListNode * l2) {
        
        //Adding zeros to the start of the smaller list:
        
        ListNode * first = l1, * second = l2;
        
        while (first != NULL || second != NULL) {
            if (first == NULL) {
                ListNode * new_node = new ListNode(0);
                new_node -> next = l1;
                l1 = new_node;
                
                second = second -> next;
            } else if (second == NULL) {
                ListNode * new_node = new ListNode(0);
                new_node -> next = l2;
                l2 = new_node;
                
                first = first -> next;
            } else {
                first = first -> next;
                second = second -> next;
            }
        }

        int carry = 0;
        
        ListNode * temp = new ListNode(-1);
        
        temp -> next = addDigits(l1, l2, carry);
        
        if (carry != 0) {
            ListNode * new_node = new ListNode(carry);
            new_node -> next = temp -> next;
            temp -> next = new_node;
        }
        
        return temp -> next;
    }
}; 
  
```

</TabItem>

</Tabs>

### Time Complexity

Time Complexity of this solution is $O(n)$, where $n$ is the length of longest linked list.  
  
### Space Complexity
  
Space Complexity of this solution is $O(1)$, because constant space.

