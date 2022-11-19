---
description: "Author: @ngld0 | https://leetcode.com/problems/add-two-numbers/"
tags: [Linked List, Recursive]
---
# 0002 - Add Two Numbers
## Problem Link: https://leetcode.com/problems/add-two-numbers/

## Problem Statement
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**
```
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
```
**Example 2:**
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```
**Example 3:**
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constraints:**

- `0 <= s.length <= 5 * 10^4`
- `s consists of English letters, digits, symbols and spaces.`

## Approach 1.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@ngld0"/>

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
        int car = 0, sum = 0;
        ListNode* res = new ListNode(-1);
        ListNode *now =res;
        while(l1 || l2){
            sum = (l1?l1->val:0) + (l2?l2->val:0) + car ;
            car = sum/10;
            now->next = new ListNode(sum %10);
            now = now->next;
            if(l1) l1=l1->next;
            if(l2) l2=l2->next;
        }
        if(car) now->next = new ListNode(1);
        return res->next;
    }
};
```

</TabItem>

<TableItem value="c" label="C">
<SolutionAuthor name="@ngld0"/>

```c
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){
    
    struct ListNode* res = (struct ListNode*)malloc(sizeof (struct ListNode)), *cur=res;
    
    int sum;
    
    int car=0 ; 
    
    while(l1||l2){
        sum = (l1?l1->val:0) + (l2?l2->val:0) + car ;
        
        car = sum/10;

        struct ListNode* new_node = (struct ListNode*)malloc(sizeof (struct ListNode));
        
        new_node->val = sum%10;
        
        new_node->next = NULL;
            
        cur->next = new_node;
            
        cur = cur->next;        
        
        if(l1) l1 = l1->next;
        
        if(l2) l2 = l2->next;
    }
    
    if(car) {
        cur->next = (struct ListNode*)malloc (sizeof (struct ListNode));
        cur->next->val = 1;
        cur->next->next = NULL;
    }
    return res->next;
}
```

</TableItem>
</Tabs>