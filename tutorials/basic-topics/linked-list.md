---
title: 'Linked List'
description: 'A linked list is a linear data structure that consists of nodes. Each node stores some data as well as the address of the next node.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - linked List
  - data structure
---

<TutorialAuthors names="@itsmenikhill"/>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

In this tutorial you will learn about Linked Lists, and its implementation using Java. 

Problem with using Arrays was that we have to have some idea about the size of the array that we require. To counter this we learnt about dynamic arrays. Linked list is another approach to tackle this problem. In linked lists we do not have to worry about the size at all.

A linked list is a linear data structure that has a series of connected nodes. Each node has two fields, $data$ and $address$.
We call the start of a linked list, $Head$. We can all it anything but by convention, we'll call it $Head$. 

## Representation of a Linked List

Each node in a linked list contains:
* A data item
* Address of next node

Both of these items are wrapped together in a class:

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
class Node {
  int data;  
  Node next;  

  public Node(){
    this.data = data;
    this.next = null;
  }
}
```

</TabItem>
</Tabs>

Now we will create a Linked list using this Node class:

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
class LinkedList {

  Node node1 = new Node();
  Node node2 = new Node();
  Node node3 = new Node();
  // set 10 as the value for 1st node
  node1.data = 10;  
  // set node2 as the next node for node1.
  node1.next = node2;  
  // set 20 as the value for 2nd node
  node2.data = 20;  
  // set node3 as the next node for node2.
  node2.next = node3;  
  // set 30 as the value for 3rd node
  node3.data = 30;  
  // this is not required. By default next of a node is NULL.
  node3.next = null; 

}
```

</TabItem>
</Tabs>

So now we have our first linked list.

  ![image](https://user-images.githubusercontent.com/44477975/193444696-85afce38-ebd3-4be0-94eb-f1a3a9fe2d3a.png)

The asterisk (*) signifies the address of the node, and not the value of that node.

## Linked list in memory
In arrays the elements are contiguous, which means they are placed one after the other in the memory. However, in linked lists, the elements are scattered in the memory.

When we declare an integer array of size 15, we would require 60 bytes of contiguous space in the memory to store the elements of that array. But in linked list we would only have to find 4 bytes to store the first element and from there, we look for another 4 bytes to store the next element. So, we see that the linked list items are scattered in memory unlike arrays.

That is the advantage linked lists have over array when it comes to memory. We have to look for smaller spaces to store the items, rather than chunks of contiguous space.

  ![image](https://user-images.githubusercontent.com/44477975/193444559-c57fa2ed-81cb-4039-924d-494b64f0c79d.png)

Numbers with # behind them are the addresses in memory where these nodes are stored. Here, $head$ stores the address for $node1$ and $node1$ stores the address for $node2$. Notice that the address are not sequential.

## Basic Linked list operations

* Traversal
* Insertion
* Deletion
* Search

Let's see their implementation in a linked list.

## Traversal
We have to access each element of the linked list. Remember, the $head$ points to the first node, and the $next$ pointer of the last node points to $null$.
Traversing through the linked list is fairly simple. We keep moving from the head towards the end of the list. We would know we have reached the last node when $next$ points to $null$.


<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
// temp pointer that points to head initially
Node temp = head; 
// check if next points to null
while(temp.next!=null){ 
  // print the data stored in the current node
  System.out.println(temp.data); 
  // move temp to the next node
  temp = temp.next; 
}
```

</TabItem>
</Tabs>
**Problem:** You are given the head of a linked list and a number. Check if the given number is present in the linked list or not. Return true if present, else return false.

**Approach:** We will traverse the list and at each node we will check if we have the required element in the current node or not. If we found the element, return true. If we have iterated over the list and not not found the number, we will return false.

**Solution:** 
<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
public static boolean findElement(Node head, int target){
  Node ptr = head;
  while(ptr!=null){
    // compare the node element and the target number
    if(ptr.data == target){ 
      // number found 
        return true; 
    }
    // move pointer to the next node
    ptr = ptr.next; 
  }
  // number not found
  return false; 
}
```
</TabItem>
</Tabs>

## Insertion
We can add element to the beginning, middle or at the end of the linked list.

**1. Inserting element at the beginning** 

**Problem:**

Let's say, we are given a linked list $[3] --> [4] --> [5] --> null$ and we have to add another node $[1]$ to the front. How would you do this?

**Approach:**

* Allocate memory for a new node
* Store the data
* Point $next$ of new node to $head$
* Point $head$ to the **new** node

**Solution:**

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
// allocate memory
Node newNode = new Node(); 
// store data
newNode.data = 1; 
// point next of new node to head
newNode.next = head; 
// make head point to new node
head = newNode; 
```
</TabItem>
</Tabs>


**2. Insertion at the middle**

**Problem:** 

You are given a linked list $[3] --> [4] --> [5] --> [6] --> null$. Insert a new node $[7]$ at the 3rd place to make the final list as $[3] --> [4] --> [7] --> [5] --> [6] --> null$. 

**Approach:**

* Allocate memory for the new node
* Store the data in the new node
* Traverse to the node just before the required index
* Change the pointers

**Solution:**

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
Node newNode = new Node();
newNode.data = 7;
Node temp = head;

// position at which we want to insert the new element
int pos = 3;  

// loop runs only for i=2. when i=3, pos=3 as well, hence loop terminates.
for(int i=2; i<pos; i++){ 
  if(temp.next!=null){ 
    temp = temp.next;
  }
}
// here temp points to the 2nd node
newNode.next = temp.next;  
 // new node inserted after temp. 
temp.next = newNode;
```
</TabItem>
</Tabs>

One important thing to note here is that before breaking any connection in the linked list, we must first make the new connections. Make first, break later.

**3. Insertion at the end**

**Problem:** 

You are given a linked list $[3] --> [4] --> [5] --> [6] --> null$. Insert a new node $[7]$ at the end to make the final list as $[3] --> [4] --> [5] --> [6] --> [7] --> null$

**Approach:**

* Allocate memory for the new node
* Store the data in the new node
* Traverse till the end of the list
* Make the $next$ of the last node point to the new node

**Solution:**

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
Node newNode = new Node();
newNode.data = 7;
Node temp = head;

// when temp.next is null, we'll know we are at the last node
while(temp.next != null){ 
  // move pointer to the next node
  temp = temp.next; 
}

// temp is now at the last node.
// point $next$ of the last node to the new node 
temp.next = newNode; 
``` 
</TabItem>
</Tabs>

## Deleting an element from the Linked list

We can delete the first node, or the last node, or some other position in the middle.

**1. Delete from the beginning**

To delete from the beginning we just have to move the $head$ to its next, so that no pointer would be pointing to the first node.

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
// change the pointer from the head node, to the next node.
head = head.next;
```
</TabItem>
</Tabs>



**2. Delete from the end**

* Move the pointer to the second last node
* Set the $next$ pointer of second last node to point to $null$

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
Node temp = head;
  // move the pointer to the second last node
  while(temp.next.next!=null){
    // move the current pointer to the next node
    temp = temp.next;
  }
temp.next = null;
```
</TabItem>
</Tabs>


**3. Delete from any position in the middle**

* Traverse to the element just before the node to delete
* Change the next of this node to point to next of the node to delete

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
Node temp = head;
  // we are running the loop from 2 node because we have to move to the node 
  // just before the node we want to remove
  for(int i=2; i<pos; i++){
    // change pointer from current node to the next node
    temp = temp.next;
  }
temp.next = temp.next.next;
```
</TabItem>
</Tabs>

**Leetcode 237. Delete Node in a Linked List:** 

There is a singly linked list. You have to delete a $node$ from the list. You are given the $node$ to delete but not the $head$ of the list. Delete the given $node$. Note that by deleting the $node$, we $do not$ mean removing it from memory. We mean:

*The value of the given node should not exist in the linked list.
*The number of nodes in the linked list should decrease by one.
*All the values before node should be in the same order.
*All the values after node should be in the same order.

**Approach:** Change the value of the $current node$ to the value of the $next$ node. Do this until the last node.

**Solution:**

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
class Solution {
    // we are given a node to delete
    public void deleteNode(ListNode node) {
        // check if the current node is second last node
        while(node.next.next!=null){
            // change the value of current node to the value of next node
            node.val = node.next.val;
            // move node to the next node
            node=node.next;
        }

        // we are at the second last node
        // change value of the last node to the value of next node
        node.val = node.next.val;
        // change the next of last node to null
        node.next = null;
    }
}
``` 
</TabItem>
</Tabs>

## Search for an item in the list

* Make a temporary pointer $ptr$ point to $head$
* Move $ptr$ to next node until $ptr$ is $null$
* At each iteration, check if the data in $ptr$ is same as the number we want. If yes, then return $true$
* Return $false$ if number not found

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
Node ptr = head;  
while(ptr!=null){
  // check if data in current node matches the number we are looking for
  if(ptr.data == num){  
    // return true if number found
    return true;   
  }
  // move ptr to the next node
  ptr = ptr.next;  
}
// return false if number not found
return false;  
``` 
</TabItem>
</Tabs>

## Let's take a look at some Leetcode problems:

**Leetcode 19. Remove Nth Node From End of List**

Given the head of a linked list, remove the nth node from the end of the list and return its head. Given Linked list: $[1] -> [2] -> [3] -> [4] -> [5]$ for $n=2$ change the list to $[1] -> [2] -> [3] ->     [5]$.

**Approach:**

* First we find the size of the list
* $nth$ node from the $end$ is the $size-(n+1)th$ node from the $front$
* Once we have the size, we can iterate over the list till the node just before the node to remove
* change the pointers to remove the node

**Solution:**

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode ptr = head;
        // find the size
        int size = findSize(head);
        ptr=head;

        // if size is equal to the n, remove node at head
        if(size==n){
            ptr=ptr.next;
            head=ptr;
            return head;
        }

        // move ptr to the node just before the node to remove
        for(int i=0; i<size-n-1; i++){
            ptr = ptr.next;
        }

        // check if the node to remove is the last node
        if(ptr.next.next!=null){
            ptr.next = ptr.next.next;
        }
        else{
            ptr.next=null;
        }
        return head;
    }
    
    // method to find the size of the list
    public int findSize(ListNode head){
      // temporary pointer at head
        ListNode ptr = head;
        int size = 0;
        // increase the size till we reach the end of the list
        while(ptr!=null){
            size+=1;
            ptr=ptr.next;
        }
        return size;
    }
}
``` 
</TabItem>
</Tabs>

**234. Palindrome Linked List**

Given the $head$ of a singly linked list, return $true$ if it is a $palindrome$ or $false$ otherwise. 

Example: 


![image](https://user-images.githubusercontent.com/44477975/196033584-ca91cbc9-0126-40d2-8788-4fbe3b50d55a.png)

$Output: true$

**Approach:**

* We use $two pointer$ method and $recursion$ to solve this problem
* We keep a $global$ left pointer, that points to the current left node
* As we go deep in recursion we move our $right$ pointer forward towards the end of the list
* When $right$ pointer is at the end we compare its value to the $left$ node
* If they are same we move $left$ pointer forward and come out of the recursion
* As we come out of the recursive call, out $right$ pointer would move towards $left$
* If at any point the values are not same, we return $false$

**Solution:**

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
class Solution {
    // global left pointer
    static ListNode left;
    public boolean isPalindrome(ListNode head) {
      // point the left to head
        left = head;
        boolean b = check(head);
        return b;   
    }
    
    // recursive method that moves pointer towards right and compares values
    private boolean check(ListNode right){
        // if right is null, we have reached the end of the list
        if(right == null){
            return true;
        }
        
        boolean b = check(right.next);
        // if at any point b is false, we return false. If this happens even once, 
        // no further comparisons would happen and each recursive call would return false
        if(b==false){
            return false;
        }
        // else compare the values 
        else{
          // if values are equal, move left towards right and return true to the previous call
            if(left.val == right.val){
                left = left.next;
                return true;
            } 
            else{
              // if values not same, return false
                return false;
            }
        }
    }
}
``` 
</TabItem>
</Tabs>

**328. Odd Even Linked List:**

Given the $head$ of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The $first$ node is considered $odd$, and the $second$ node is $even$, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

**Approach:**

* We maintain three pointers, $odd$ at the first node, $even$ at the second node and $evenhead$ also at the second node.
* $evenhead$ will not be changed. It will point to the starting of the list of even nodes.
* The node after every even node, is an odd node. 
* So, $next$ node for current $odd$ node, would be $next$ node of the current $even$ node.
* And $next$ node for the current $even$ node, would be $next$ node of the just changed $odd$ node.
  
**Solution:**

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
class Solution {
    public ListNode oddEvenList(ListNode head) {

        // we check if there are at least three nodes in the list
        // if there are only two nodes, then first node is even and second node is odd
        // if only one node, then first node is odd 
        // so just return head
        if(head==null || head.next==null || head.next.next==null){
            return head;
        }
        
        // odd is at head
        ListNode odd = head;
        // make second node as even
        ListNode even = head.next;
        // keep a pointer evenhead at even. This will not be changed.
        ListNode evenHead = even;
        
        // we have to move odd to next of even
        // so we check is even.next is null of even is null
        while(even!=null && even.next!=null){
            // if not, then make odd.next point to even.next
            odd.next = even.next;
            // move odd to odd.next
            odd = odd.next;
            // even.next to odd.next
            even.next = odd.next;
            // move even to even.next
            even = even.next;
        }

        // at this point we have connected all the even nodes together, and all odd nodes together
        // now we connect the odd nodes, and even nodes
        odd.next = evenHead;
        return head;
    }
}
``` 
</TabItem>
</Tabs>

## Complexity

| Operation        | Complexity | Explanation  
| ---------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|Look up | $$O(N)$$ | We will have to iterate from head till the element we want|
|Insertion at beginning | $$O(1)$$ | Simply change the head pointer |
|Insertion at the end | $$O(N)$$ | Move from the head to the last item then change the pointers|
|Deletion from the beginning | $$O(1)$$ | Simply change the head pointer|
|Deletion from the end | $$O(N)$$ | Move from the head to the node just before the item you want to delete|


export const suggestedProblems = [
  {
    "problemName": "206. Reverse Linked List",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/reverse-linked-list/",
    "solutionLink": ""
  },
  {
    "problemName": "86. Partition List",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/partition-list/",
    "solutionLink": ""
  },
  {
    "problemName": "148. Sort List",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/sort-list/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />
