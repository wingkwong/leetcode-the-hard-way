---
description: 'Author: @wkw | https://leetcode.com/problems/middle-of-the-linked-list/description/'
tags: [Linked List, Two Pointers]
---

# 0876 - Middle of the Linked List (Easy)

## Problem Link

https://leetcode.com/problems/middle-of-the-linked-list/description/

## Problem Statement

Given the `head` of a singly linked list, return _the middle node of the linked list_.

If there are two middle nodes, return **the second middle** node.

**Example 1:**

```
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
```

**Example 2:**

```
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
```

**Constraints:**

- The number of nodes in the list is in the range `[1, 100]`.
- `1 <= Node.val <= 100`

## Approach 1: Fast and Slow Pointer

Classic Fast and Slow Pointer question

- Time Complexity: $O(N)$ where $N$ is the number of nodes
- Space Complexity: $O(1)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

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
    ListNode* middleNode(ListNode* head) {
        // fast & slow pointer
        // slow moves 1 step
        // fast moves 2 steps
        // 1 -> 2 -> 3 -> 4 -> 5
        // slow : 1 -> 2 -> 3
        // fast : 1 -> 3 -> 5
        // when fast reaches the end, slow will be the middle
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast != NULL && fast->next != NULL) {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }
};
```

</TabItem>
</Tabs>
