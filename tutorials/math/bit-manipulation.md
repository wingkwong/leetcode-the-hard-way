---
title: 'Bit Manipulation'
description: 'Bit Manipulation utilises different bitwise operations to manipulate bits'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - bit manipulation
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';

<TutorialAuthors names="@wingkwong"/>

## Overview

Binary uses only $0$ and $1$ to represent a number in a base-2 number system. The series of 0 and 1 are called bits. If the bit is $1$, then this bit is set. We read binary number from right to left. For example, the binary representation of number $9$ is $1001_2$ which can be calculated by summing up all the set bit: $2^3 + 2^0 = 9_{10}$. Bit Manipulation utilises different bitwise operations to manipulate bits.

## Basic Operators

| X | Y | X & Y | X \| Y | X ^ Y | ~ X |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

### AND (&)

$\&$ takes two bit integers to compare. If the bits are both $1$, then the resulting bit is $1$, else $0$. 

For example, $0010_2 \& 0011_2 = 0010_2$ because only the second bits from the right are both $1$.

### OR (|)

$\&$ takes two bit integers to compare. If the bits are either $1$, then the resulting bit is $1$, else $0$. 

For example, $0010_2 | 0011_2 = 0011_2$ because only the first and the second bits from the right are $1$ in either value.

### XOR (^)

^ takes two bit intergers to compare. If one bit is zero and another bit is one, then the resulting bit is $1$, else $0$.

For example, $0010_2$ ^ $0011_2 = 0001_2$ because the first bit got $0$ and $1$ while the second bit got both $1$.

#### XOR Properties

- X ^ 0 = X
- X ^ X = X
- X ^ Y = Y ^ X (Commutativity)
- (X ^ Y) ^ Z = X ^ (Y ^ Z) (Associativity)

### NOT (~)

~ inverts all the bits of a bit intergers, which means $1$ would become $0$ and vice versa. If we apply it on a positive integer $x$, then it is simply $-x-1$.

For example, if we apply NOT on $~0010_2$, then the resulting value is $1101_2$.

### Left-Shift (<<)

$<<$ shifts the bits to the left. For example, $1 << 1 = 2$ because we shift the $1$ ($0001_2$) to the left to become $2$ ($0010_2$). 

Similarily, $1 << 2 = 4$ because we shift the $1$ ($0001_2$) to the left twice to become $4$ ($0100_2$).

And you may find that $1 << n$ is actually $2 ^ n$.

### Right-Shift (>>)

$>>$ shifts the bits to the right. For example $3_{10}$ ($0011_2$) $>> 1$ would become $1$ ($0010_2$).

## Basic Usages

<!-- TODO: add basic usages -->

