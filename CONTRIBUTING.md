# Contributing

## Quick Start

Don't rely on a Markdown editor. Start the application locally to make and verify your changes.

```bash
cd leetcode-the-hard-way
npm i
npm run start
# By default, a browser window will open at http://localhost:3000/.
```

## Before Creating a PR

See the [Checklist](https://github.com/wingkwong/leetcode-the-hard-way/blob/main/.github/pull_request_template.md#checklist).

## Tutorial Template

Tutorial Markdown files are stored under `./tutorials`.

```md
---
title: '<TITLE>'
description: '<DESCRIPTION_OF_THE_TOPIC>'
hide_table_of_contents: true
---

<TutorialCredits authors="@<YOUR_ALIAS>"/>

## Overview

// TODO: Overview of the topic

// DO NOT COPY FROM EXTERNAL SITES // DO NOT USE RANDOM EXAMPLES OR EXAMPLES FROM OTHER SITES

// TODO: Complexity Analysis // TODO: Walk through the topic using 2-3 LC problems

### Example: [<PROBLEM_ID> - <PROBLEM_TITLE>](LC_LINK)

> <PROBLEM STATEMENT>

// TODO: Your explanation // TODO: Your solution to the problem

// TODO: Add suggested problems. See the examples below to learn how to render them.
```

Examples:

- [binary-exponentiation.md](https://raw.githubusercontent.com/wingkwong/leetcode-the-hard-way/main/tutorials/math/number-theory/binary-exponentiation.md)

- [prefix-sum.md](https://raw.githubusercontent.com/wingkwong/leetcode-the-hard-way/main/tutorials/basic-topics/prefix-sum.md)

## Solution Template

- Solution Markdown files are stored under `./solutions`.
- Filename format: `<PROBLEM_ID>-<PROBLEM_TITLE>-<DIFFICULTY>.md`, e.g. `0202-happy-number-easy.md`

````md
// The metadata and problem statement can be generated locally by using the Chrome extension under `converter`. // If you do not know how to do this, leave them blank and we will help add them.

## Approach 1: <APPROACH_NAME>

// TODO: Detailed explanations / line-by-line explanations in code // TODO: Complexity analysis

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@YOUR_ALIAS"/>

```cpp
// Your code goes here
```

</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@YOUR_ALIAS"/>

```py
# Your code goes here
```

</TabItem>
<TabItem value="go" label="Go">
<SolutionAuthor name="@YOUR_ALIAS"/>

```go
// Your code goes here
```

</TabItem>
</Tabs>

## Approach 2: <APPROACH_NAME> (ADD THIS IF NECESSARY)

// TODO: Detailed explanations / line-by-line explanations in code // TODO: Complexity analysis

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@YOUR_ALIAS"/>

```cpp
// Your code goes here
```

</TabItem>
<TabItem value="py" label="Python">
<SolutionAuthor name="@YOUR_ALIAS"/>

```py
# Your code goes here
```

</TabItem>
<TabItem value="go" label="Go">
<SolutionAuthor name="@YOUR_ALIAS"/>

```go
// Your code goes here
```

</TabItem>
</Tabs>
````

Examples:

- [0191-number-of-1-bits-easy.md](https://raw.githubusercontent.com/wingkwong/leetcode-the-hard-way/main/solutions/0100-0199/0191-number-of-1-bits-easy.md)

## Misc

- For images, please copy and paste them into the GitHub editor. The image will be uploaded to GitHub content, and you can use the generated image link (e.g. https://user-images.githubusercontent.com/35857179/168304432-fa9ac8bb-0eb9-49d9-bdcf-5e3509c1f835.png). Do not upload images directly to this repository.

- If your content includes variables or math equations, please write them with LaTeX syntax. See [binary-exponentiation.md](https://raw.githubusercontent.com/wingkwong/leetcode-the-hard-way/main/tutorials/math/number-theory/binary-exponentiation.md) as an example.

- If you use resources from external sites, add references at the end.
