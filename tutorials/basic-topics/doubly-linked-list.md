---
title: 'Doubly Linked List'
description: 'A Double Linked List is a Linked List which has two pointers, one points to the previous node while the other points to the the next node.'
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - doubly linked List
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';
import Table from '@site/src/components/Table';

<TutorialAuthors names="@Dipanshu"/>

## Overview

* A **Doubly Linked List** (or DLL) is a complex type of **Linked List**. 

* Unlike **Single Linked List** a node in **Doubly Linked List** contains two pointers, one points to the previous node in the sequence while the other points to the next node in the sequence.
  
* If the node is the first node in the sequence then previous pointer of that node points to null and if it last node then the next pointer of that node points to null.
  
* **Head** always points to the first node in sequence while **Tail** points to the last node in sequence.

**Note**
* We assume that you already have a basic understanding of **Linked List**.
* The syntax would be different in different language but the core idea remains the same.

* For this article we are using **Java**, if you happen to use an another language please refer to it.

* In **Java** there is no such things as **pointers** instead it has **Reference variable**. So, if you find pointer it just means a reference variable which points to some memory address. 


## Creating a Doubly linked list
* A class for a node having two pointers and variable to store some data.
```java
class Node{
  // For the sake of convenience, we're using integer 
  // you could use any data type according to problem statement 
  int data;

  // first pointer - it points to previous node in sequence
  Node prev;

  // second pointer - it points to next node in sequence
  Node next;
}
```
## Advantages of Doubly Linked List
* Doubly Linked List can transverse both ways - forward and backward.
* We can quickly insert a new node before any node.
* Delete operations are very efficient in Doubly Linked List.
  
## Disadvantages of Doubly Linked list
* Every node requires an extra space for the reference variable.
* Every method we perform on Double Linked List, we need to maintain an extra variable.

## Methods in Double Linked List
* **Insertion**
```java
// Insertion at beginning of list
public void insertFirst() {
  Node newNode = new Node();  // creating a new node

  // setting the data
  System.out.print("Enter the node value: ");
  newNode.data = sc.nextInt();

  // list is empty
  if (head == null) {
    head = newNode;
    return;
  }

  // pointers assigning
  newNode.next = head;
  head.prev = newNode;
  head = newNode;
}

// Insertion at end of list
public void insertLast() {
  Node newNode = new Node();  // creating a new node

  // setting the data
  System.out.print("Enter the node value: ");
  newNode.data = sc.nextInt();

  // list is empty
  if (head == null) {
    head = newNode;
  }

  // pointers assigning
  newNode.prev = tail;
  tail.next = newNode;
  tail = newNode;
}
```
* **Traversal**
```java
// Display from the beginning of list
public void displayForward() {
        Node tempNode = head;

        while (tempNode != null) {
            System.out.print(tempNode.data + " --> ");
            tempNode = tempNode.next;
        }
        System.out.println("END");
    }

// Display from the end of list
    public void displayBackward() {
        Node tempNode = tail;

        while (tempNode != null) {
            System.out.print(tempNode.data + " --> ");
            tempNode = tempNode.prev;
        }
        System.out.println("END");
    }
```
* **Deletion**
```java
// Delete the 1st node in list
 public void deleteFirst() {
        // empty list 
        if (head == null) {
            System.out.println("Empty List");
            return;
        }

        head = head.next; // head points to 2nd node

        // removing the link between 1st and 2nd node
        // it becomes a variable with no reference which will be eventually removed by garbage collector
        head.prev = null;
    }

// Delete the last node in list
public void deleteLast(){
        // empty list 
        if(head == null){
            System.out.println("Empty List");
            return;
        }

       
        tail = tail.prev;  // tail points to 2nd last node
        
        // removing the link between last and second last node
        // it becomes a variable with no reference which will be eventually removed by garbage collector
        tail.next = null;
    }
```

* Since this documentation is mainly for LeetCode. We will drop the basics and do some interesting problems on Doubly Linked List. For more [refer](https://www.geeksforgeeks.org/doubly-linked-list/)

export const suggestedProblems = [
  {
    "problemName": "430 - Flatten a Multilevel Doubly Linked List",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
    "solutionLink": "../../solutions/0400-0499/flatten-a-multilevel-doubly-linked-list-medium"
  },
  {
    "problemName": "146 - LRU Cache",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/lru-cache/",
    "solutionLink": "https://leetcode.com/problems/lru-cache/discuss/1305346/Java-oror-HashMap-oror-Queue-oror-Linked-List-oror-Easy-Approach-with-Explanation"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />

# Resources 
* More on Doubly Linked List  | [refer](https://www.geeksforgeeks.org/doubly-linked-list/)
* More Advanced LeetCodes Problems on Doubly Linked List | [refer](https://leetcode.com/tag/doubly-linked-list)
* Interview Questions on Double Linked List | [refer](https://climbtheladder.com/doubly-linked-list-interview-questions/)