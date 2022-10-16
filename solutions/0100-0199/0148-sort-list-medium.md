---
description: 'Author: @vigneshshiv | https://leetcode.com/problems/sort-list/'
---

# 0148 - Sort List (Medium)

## Problem Link

https://leetcode.com/problems/sort-list/

## Problem Statement

Given the `head` of a linked list, return _the list after sorting it in **ascending order**_.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/09/14/sort\_list\_1.jpg)

```
Input: head = [4,2,1,3]
Output: [1,2,3,4]
```

**Example 2:**

![](https://assets.leetcode.com/uploads/2020/09/14/sort\_list\_2.jpg)

```
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
```

**Example 3:**

```
Input: head = []
Output: []
```

**Constraints:**

* The number of nodes in the list is in the range `[0, 5 * 10^4]`.
* `-10^5 <= Node.val <= 10^5`

**Follow up:** Can you sort the linked list in `O(n logn)` time and `O(1)` memory (i.e. constant space)?

## Approach 1: Recursive Merge Sort

* Find the middle node and cut the head reference till middle node
* Keep reducing the nodes size to smaller for comparison (same as like merge sort)
* Once we reduce nodes size to 1, merge the nodes in sorted (ascending) order.
* Keep merging the nodes till last, to build the sorted list.

Time Complexity: $O(n log(n))$, where $n$ - # of nodes in the list

Space complexity: $O(n)$, $n$ - recursive call stack

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
    public ListNode sortList(ListNode head) {
        if (Objects.isNull(head) || Objects.isNull(head.next)) {
            return head;
        }
        // Middle node
        ListNode mid = middleNode(head);
        // Keep traversing left to get the smallest nodes for comparison (smallest we can get is 1 node)
        ListNode left = sortList(head);
        // Starting from middle, to find the smallest nodes for comparison
        ListNode right = sortList(mid);
        // Compare the list and return the merged nodes
        return mergeTwoLists(left, right);
    }
    
    public ListNode middleNode(ListNode head) {
        ListNode midPrev = null;
        //
        while (head != null && head.next != null) {
            midPrev = (midPrev == null) ? head : midPrev.next;
            head = head.next.next;
        }
        ListNode mid = midPrev.next;
        // Cut the reference to the next pointer (mid), so that head remains from start to mid.
        midPrev.next = null;
        return mid;
    }
    
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Base case
        if (Objects.isNull(list1) && Objects.isNull(list2)) {
            return list1;
        }
        if (Objects.isNull(list1)) {
            return list2;
        }
        if (Objects.isNull(list2)) {
            return list1;
        }
        ListNode head = new ListNode();
        ListNode node = head;
        while (Objects.nonNull(list1) && Objects.nonNull(list2)) {
            if (list1.val <= list2.val) {
                node.next = list1;
                list1 = list1.next;
            } else {
                node.next = list2;
                list2 = list2.next;
            }
            node = node.next;
        }
        // If either of half is not empty then append it
        node.next = Objects.nonNull(list1) ? list1 : list2;
        return head.next;
    }
}
```

</TabItem>
</Tabs>
    
 # Approach 2: Bubble Sort

We can use the same concept of bubble sort and code it in context of linked list.

Time Complexity: $O(n^2)$, where $n$ - # of nodes in the list

Space complexity: $O(1)$
 <Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@RadhikaChhabra17"/>

```c++
class Solution {
    ListNode* sortList(ListNode* head) {
	// Already sorted
       if(head==NULL || head->next==NULL ){   
            return head;
        }
	for(ListNode* i=head; i->next!=NULL; i=i->next){
            for(ListNode* j=head; j->next!=NULL; j=j->next){
                if(j->val > j->next->val){
                    int temp=j->val;
                    j->val= j->next->val;
                    j->next->val= temp;
                }
            }
        }
        return head;
    }
}

```
</TabItem>
</Tabs>
