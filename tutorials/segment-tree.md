<!-- ---
title: 'Segment Tree'
description: 'Author: @Dhruvil-Lakhtaria'
hide_table_of_contents: true
---

<TutorialAuthors names="@Dhruvil-Lakhtaria"/>

## Overview

// Your content goes here
// DO NOT COPY FROM OTHER EXTERNAL SITES

// Walk through the topic using 1 - 3 LC problems (if applicable)
// Do not use random examples or examples from other sites

// Suggested Problems
// See the examples below to learn how to render

An n-bit gray code sequence is a sequence of 2n integers where:

- Every integer is in the inclusive range [0, 2n - 1],
- The first integer is 0,a
- An integer appears no more than once in the sequence,
- The binary representation of every pair of adjacent integers differs by exactly one bit
- The binary representation of the first and last integers differs by exactly one bit.
Given an integer n, return any valid n-bit gray code sequence.

  -->

---

title: 'Segment Tree'

description: 'Author: @Dhruvil-Lakhtaria'

hide_table_of_contents: true

---

  

<TutorialAuthors  names="@Dhruvil-Lakhtaria"/>

  

## Overview

### Introduction
  Segment Tree is a type of datastructure used in very specific kind of problems. Problems that deal with 2 types of queries namely Update and Query(l,r)(Some kind of queries like max,min,GCD ) for arr[l to r] on given array.
### Structure
It is basically a binary tree with 3 types of nodes - 

 1. Root Node - denotes the whole array.
 2. Leaf Node - denotes a single element of the array.
 3. Internal Node - denotes a sub-interval of the array.
 
### Representation
We can implement the above using an array representation.
Each Index denotes the answer to that interval with (2*i+1)th index as its left child and (2i+2)th index as its right child.

![Segment-Tree](https://miro.medium.com/max/1100/1*9V1l8_weUfmT4jHg21EE5w.png)

### Code for the Segment Tree for sum of the interval.

    class  SegmentTree{
    
    vector<int>v;
    SegmentTree(vector<int>&arr,int  n)
    {
	    v = vector<int>(4*n);
	    buildTree(arr,0,n-1,0);
    }          
    
    void  buildTree(vector<int>&arr,int  l,int  r,int  loc) 
    {    
	    // we have reached the leaf node
	    if(l == r)
	    {
		    v[loc] = arr[l];
		    return;
	    } 
	    
	    int  mid = l + (r-l)/2;
	    
	    // build for left child
	    buildTree(arr,l,mid,2*loc+1);
	    //build for right child
	    buildTree(arr,mid+1,r,2*loc+2);
 
	    //use above result for getting current answer.  
	    v[loc] = min(v[2*loc+1],v[2*loc+2]);
    
    }
    
      
    
    int  query(int  loc,int  l,int  r,int  query_l,int  query_r)
    {
    
	    //case-1: requested query interval within l-r 
	    if(query_l <= l && query_r >= r)
		    return  v[loc];      
	    // case-2: requested query interval is outside l-r
	    else  if(query_l > r || query_r < l)
		    return  INT_MAX;
	    // case-3: requested query is intersecting its child.
	    int  mid = l + (r-l)/2;
	    int  left = query(2*loc+1,l,mid,query_l, query_r);
	    int  right = query(2*loc+2,mid+1,r,query_l, query_r);
	    return  min(left,right);
    }
    
    void  update(int  loc, int  l, int  r, int  update_at, int  value)
    {
	    if(l == r)
	    {
		    //Update leaf node
		    v[loc] = value;
		    return ;
	    }
	    int  mid = (l+r)/2;
	   
	    //if index lies in the left child call update() for left child
	    if(update_at <= mid)
		    update(2*loc+1,l,mid,update_at,value);
	    
		//else index would lie in the right child, call update() for the right child 
	    else
		    update(2*loc+2, mid+1,r,update_at, value);
	    
	    //after updating the children,update the current node as smallest of its children
	    v[loc] = min(v[2*loc + 1] ,v[2*loc+2]);
	 	return;  
    }
    };

// Walk through the topic using 1 - 3 LC problems (if applicable)

// Do not use random examples or examples from other sites

  

// Suggested Problems

// See the examples below to learn how to render
