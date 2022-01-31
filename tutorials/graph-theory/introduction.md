# Introduction

Graphs can solve a plethora of interesting problems!&#x20;

For example, we have five people :&#x20;

* Alice
* Bob
* Cathy
* Danny
* Ethan
* Fiona

We are also given a list of friends. For example:&#x20;

`[["Alice", Bob"], ["Cathy", "Danny"], ["Alice", "Cathy"], ["Ethan", "Fiona"]]`&#x20;

Here, we know that:

* Alice and Bob are friends
* Cathy and Danny are friends
* Alice and Cathy are friends
* Ethan and Fiona are friends

We say that Alice, Bob, Cathy, and Danny are in **Friend Group 1** (they are friends or have common friends). Ethan and Fiona are in **Friend Group 2** (they are friends or have common friends).&#x20;

In this task, we can easily tell the **number of friend groups** (there are 2 friend groups), as well as the **size of the largest friend group** (the largest group - Friend Group 1 - has 4 members).&#x20;

This seems easy at first glance! We just need to "group them up". However, this is more complicated than you think. There are three potential solutions to this problem :&#x20;

* Breadth-First Search (BFS)
* Depth-First Search (DFS)
* Union Find

We will learn different strategies for similar problems, and hopefully you know which one to use after learning the key concepts in graph theory.&#x20;

