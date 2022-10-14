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

A linked list is a linear data structure that has a series of connected nodes. Each node has two fields, `data` and `address`.
We call the start of a linked list, `HEAD`. We can all it anything but by convention, we'll call it `HEAD`. 

## Representation of a Linked List

Each node in a linked list contains:
* A data item
* Address of next node

Both of these items are wrapped together in a class:
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

  node1.data = 10;  // set 10 as the value for 1st node
  node1.next = node2;  // set node2 as the next node for node1.
  node2.data = 20;  // set 20 as the value for 2nd node
  node2.next = node3;  // set node3 as the next node for node2.
  node3.data = 30;  // set 30 as the value for 3rd node
  node3.next = null; // this is not required. By default next of a node is NULL.

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

Numbers with # behind them are the addresses in memory where these nodes are stored. Here, `head` stores the address for `node1` and `node1` stores the address for `node2`. Notice that the address are not sequential.

## Basic Linked list operations

* Traversal
* Insertion
* Deletion
* Search

Let's see their implementation in a linked list.

## Traversal
We have to access each element of the linked list. Remember, the `head` points to the first node, and the `next` pointer of the last node points to `null`.
Traversing through the linked list is fairly simple. We keep moving from the head towards the end of the list. We would know we have reached the last node when `next` points to `null`.

```java
Node temp = head; // temp pointer that points to head initially
while(temp.next!=null){ // check if next points to null
  System.out.println(temp.data); // print the data stored in the current node
  temp = temp.next; // move temp to the next node
}
```
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
    if(ptr.data == target){  // compare the node element and the target number
        return true; // number found
    }
    ptr = ptr.next; // move pointer to the next node
  }
  return false; // number not found
}
```
</TabItem>
</Tabs>

## Insertion
We can add element to the beginning, middle or at the end of the linked list.

**1. Inserting element at the beginning** 

**Problem:**

Let's say, we are given a linked list `[3] --> [4] --> [5] --> null` and we have to add another node `[1]` to the front. How would you do this?

**Approach:**

* Allocate memory for a new node
* Store the data
* Point `next` of new node to `head`
* Point `head` to the **new** node

**Solution:**

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
Node newNode = new Node(); // allocate memory
newNode.data = 1; // store data
newNode.next = head; // point next of new node to head
head = newNode; // make head point to new node
```
</TabItem>
</Tabs>


**2. Insertion at the middle**

**Problem:** 

You are given a linked list `[3] --> [4] --> [5] --> [6] --> null`. Insert a new node `[7]` at the 3rd place to make the final list as `[3] --> [4] --> [7] --> [5] --> [6] --> null`. 

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

int pos = 3;  // position at which we want to insert the new element

for(int i=2; i<pos; i++){ // loop runs only for i=2. when i=3, pos=3 as well, hence loop terminates.
  if(temp.next!=null){ 
    temp = temp.next;
  }
}

newNode.next = temp.next;  // here temp points to the 2nd node
temp.next = newNode; // new node inserted after temp. 
```
</TabItem>
</Tabs>

One important thing to note here is that before breaking any connection in the linked list, we must first make the new connections. Make first, break later.

**3. Insertion at the end**

**Problem:** 

You are given a linked list `[3] --> [4] --> [5] --> [6] --> null`. Insert a new node `[7]` at the end to make the final list as `[3] --> [4] --> [5] --> [6] --> [7] --> null`

**Approach:**

* Allocate memory for the new node
* Store the data in the new node
* Traverse till the end of the list
* Make the `next` of the last node point to the new node

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

while(temp.next != null){ // when temp.next is null, we are at the last node
  temp = temp.next; 
}

// temp is now at the last node
temp.next = newNode; // point `next` of the last node to the new node 
``` 
</TabItem>
</Tabs>

## Deleting an element from the Linked list

We can delete the first node, or the last node, or some other position in the middle.

**1. Delete from the beginning**

To delete from the beginning we just have to move the `head` to its next, so that no pointer would be pointing to the first node.

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
head = head.next;
```
</TabItem>
</Tabs>



**2. Delete from the end**

* Move the pointer to the second last node
* Set the `next` pointer of second last node to point to `null`

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
Node temp = head;
  while(temp.next.next!=null){
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
  for(int i=2; i<pos; i++){
    temp = temp.next;
  }
temp.next = temp.next.next;
```
</TabItem>
</Tabs>



**Problem:** There is a singly linked list. You have to delete a node from the list. You are given the node to delete but not the head of the list. Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

*The value of the given node should not exist in the linked list.
*The number of nodes in the linked list should decrease by one.
*All the values before node should be in the same order.
*All the values after node should be in the same order.

**Approach:** Change the value of the current node to the value of the next node. Do this until the last node.

**Solution:**

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
class Solution {
    public void deleteNode(ListNode node) {
      while(node.next != null) { 
        node.val = node.next.val; // change the value of the current node
        node.next = node.next.next; // change the next pointer
      }
    }
} 
``` 
</TabItem>
</Tabs>

## Search for an item in the list

* Make a temporary pointer `ptr` point to `head`
* Move `ptr` to next node until `ptr` is `null`
* At each iteration, check if the data in `ptr` is same as the number we want. If yes, then return `true`
* Return `false` if number not found

<Tabs
    defaultValue="java"
    values={[
        {label: 'Java', value: 'java'},
    ]}>
<TabItem value="java">

```java
Node ptr = head;  
while(ptr!=null){
  if(ptr.data == num){  // check if data in current node matches the number we are looking for
    return true;   // return true if number found
  }
  ptr = ptr.next;  // move ptr to the next node
}
return false;  // return false if number not found
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
    "problemName": "234. Palindrome Linked List",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/palindrome-linked-list/",
    "solutionLink": ""
  },
  {
    "problemName": "160. Intersection of Two Linked Lists",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "solutionLink": ""
  },
  {
    "problemName": "61. Rotate List",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/rotate-list/",
    "solutionLink": ""
  },
  {
    "problemName": "237. Delete Node in a Linked List",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/delete-node-in-a-linked-list/",
    "solutionLink": ""
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />
