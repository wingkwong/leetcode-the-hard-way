# Contributing

## Tutorials

- Go to `./tutorials`
- Use the below template

```bash
---
title: '<TITLE>'
description: 'Author: @<YOUR_ALIAS>'
hide_table_of_contents: true
---

> This tutorial is written by @<YOUR_ALIAS>

// Your content goes here
```

Examples: [binary-exponentiation.md](https://raw.githubusercontent.com/wingkwong/leetcode-the-hard-way/main/tutorials/math/number-theory/binary-exponentiation.md)


## Solutions

- Go to `./solutions`
- Create a new page called `<PROBLEM_ID>-<PROBLEM_TITLE>-<DIFFICULTY>.md`, e.g. `0202-happy-number-easy.md`
- Include basic meta info such as `description` and `tags`. 

Template

```bash
---
description: >-
  Author: @<YOUR_ALIAS> |
  <PROBLEM_LINK>
tags: [<TAG_1>, <TAG_2>] 
---

# <PROBLEM_ID> - <PROBLEM_TITLE> (<DIFFICULTY>)

## Problem Statement

// This part will be handled by the owner @wingkwong. Contributors can leave it blank.

## Approach 1: <APPROACH_NAME>

// Your explanation goes here or you can add it to your code

// Your code goes here

## Approach 2: <APPROACH_NAME> (ADD IT IF NECESSARY)

// Your explanation goes here or you can add it to your code

// Your code goes here
```

Examples: 

- [0005-longest-palindromic-substring-medium.md](https://raw.githubusercontent.com/wingkwong/leetcode-the-hard-way/main/solutions/0000-0099/0005-longest-palindromic-substring-medium.md)
- [2267-check-if-there-is-a-valid-parentheses-string-path-hard.md](https://raw.githubusercontent.com/wingkwong/leetcode-the-hard-way/main/solutions/2200-2299/2267-check-if-there-is-a-valid-parentheses-string-path-hard.md)

## Misc

- For images, please copy and paste to Github editor (the image will be uploaded to github content) to get the image link (e.g. https://user-images.githubusercontent.com/35857179/168304432-fa9ac8bb-0eb9-49d9-bdcf-5e3509c1f835.png). Do not upload any images to this repository.

- If your content includes variables or math equations, please highlight it with katex syntax. See [binary-exponentiation.md](https://raw.githubusercontent.com/wingkwong/leetcode-the-hard-way/main/tutorials/math/number-theory/binary-exponentiation.md) as an example.