---
title: 'Introduction'
description: 'Graphs can solve a plethora of interesting problems!'
hide_table_of_contents: true
sidebar_position: 1
keywords:
  - leetcode
  - tutorial
  - graphs
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';

<TutorialAuthors names="@heiheihang"/>

## Overview

Graphs can solve a plethora of interesting problems!

For example, we have five people :

* Alice
* Bob
* Cathy
* Danny
* Ethan
* Fiona

We are also given a list of friends. For example:

`[["Alice", Bob"], ["Cathy", "Danny"], ["Alice", "Cathy"], ["Ethan", "Fiona"]]`

Here, we know that:

* Alice and Bob are friends
* Cathy and Danny are friends
* Alice and Cathy are friends
* Ethan and Fiona are friends

We say that Alice, Bob, Cathy, and Danny are in **Friend Group 1** (they are friends or have common friends). Ethan and Fiona are in **Friend Group 2** (they are friends or have common friends).

In this task, we can easily tell the **number of friend groups** (there are 2 friend groups), as well as the **size of the largest friend group** (the largest group - Friend Group 1 - has 4 members).

This seems easy at first glance! We just need to "group them up". However, this is more complicated than you think. There are three potential solutions to this problem :

* Breadth-First Search (BFS)
* Depth-First Search (DFS)
* Union Find

We will learn different strategies for similar problems, and hopefully you know which one to use after learning the key concepts in graph theory.
