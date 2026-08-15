---
description: 'Author: @wkw | https://leetcode.com/problems/duplicate-emails'
---

# 0182 - Duplicate Emails (Easy)

## Problem Link

https://leetcode.com/problems/duplicate-emails

## Problem Statement

```
Table: Person

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.
```

Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL.

Return the result table in any order.

The result format is in the following example.

Example 1:

```
Input: 
Person table:
+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
Output: 
+---------+
| Email   |
+---------+
| a@b.com |
+---------+

Explanation: a@b.com is repeated two times.
```

## Approach 1: GROUP BY + HAVING

The idea is to group the rows by their `email` value, then keep only the groups that contain more than one row, i.e those are the duplicates.

- **`GROUP BY email`** collapses all rows that share the same email into a single group. For the example input, this creates two groups: one for `a@b.com` (containing rows with `id` 1 and 3) and one for `c@d.com` (containing the row with `id` 2).
- **`COUNT(*)`** computes how many rows fall into each group. Here, `a@b.com` has a count of `2` and `c@d.com` has a count of `1`.
- **`HAVING COUNT(*) > 1`** filters the groups *after* aggregation, keeping only those whose row count is at least 2. We use `HAVING` instead of `WHERE` because `WHERE` filters individual rows *before* grouping and cannot reference aggregate functions like `COUNT(*)`.

**Time complexity:** $O(n)$ on average, where $n$ is the number of rows in `Person`, since each row is scanned once to build the groups (hash-based grouping). With sort-based grouping it may be $O(n \log n)$.

**Space complexity:** $O(d)$, where $d$ is the number of distinct emails for storing the group aggregates.


<Tabs>
<TabItem value="sql" label="SQL">
<SolutionAuthor name="@wkw"/>

```sql
SELECT email FROM Person
GROUP BY email
HAVING COUNT(*) > 1
```

</TabItem>
</Tabs>
