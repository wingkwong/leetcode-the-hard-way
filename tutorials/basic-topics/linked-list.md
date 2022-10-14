---
title: 'Linked List'
description: ''
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - linked List
---

Linked List
Linked List can be defined as collection of objects called nodes that are randomly stored in the memory.
A node contains two fields i.e. data stored at that particular address and the pointer which contains the address of the next node in the memory.
The last node of the list contains pointer to the null.
DS Linked List
Uses of Linked List
The list is not required to be contiguously present in the memory. The node can reside any where in the memory and linked together to make a list. This achieves optimized utilization of space.
list size is limited to the memory size and doesn't need to be declared in advance.
Empty node can not be present in the linked list.
We can store values of primitive types or objects in the singly linked list.
Why use linked list over array?
Till now, we were using array data structure to organize the group of elements that are to be stored individually in the memory. However, Array has several advantages and disadvantages which must be known in order to decide the data structure which will be used throughout the program.

Array contains following limitations:

The size of array must be known in advance before using it in the program.
Increasing size of the array is a time taking process. It is almost impossible to expand the size of the array at run time.
All the elements in the array need to be contiguously stored in the memory. Inserting any element in the array needs shifting of all its predecessors.
Linked list is the data structure which can overcome all the limitations of an array. Using linked list is useful because,

It allocates the memory dynamically. All the nodes of linked list are non-contiguously stored in the memory and linked together with the help of pointers.
Sizing is no longer a problem since we do not need to define its size at the time of declaration. List grows as per the program's demand and limited to the available memory space.
Singly linked list or One way chain
Singly linked list can be defined as the collection of ordered set of elements. The number of elements may vary according to need of the program. A node in the singly linked list consist of two parts: data part and link part. Data part of the node stores actual information that is to be represented by the node while the link part of the node stores the address of its immediate successor.
Play Videox


One way chain or singly linked list can be traversed only in one direction. In other words, we can say that each node contains only next pointer, therefore we can not traverse the list in the reverse direction.

Consider an example where the marks obtained by the student in three subjects are stored in a linked list as shown in the figure.

DS Singly Linked List
In the above figure, the arrow represents the links. The data part of every node contains the marks obtained by the student in the different subject. The last node in the list is identified by the null pointer which is present in the address part of the last node. We can have as many elements we require, in the data part of the list.

Complexity
Data Structure	Time Complexity	Space Compleity
Average	Worst	Worst
Access	Search	Insertion	Deletion	Access	Search	Insertion	Deletion	
Singly Linked List	θ(n)	θ(n)	θ(1)	θ(1)	O(n)	O(n)	O(1)	O(1)	O(n)
Operations on Singly Linked List
There are various operations which can be performed on singly linked list. A list of all such operations is given below.
