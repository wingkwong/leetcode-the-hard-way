---
description: 'Author: @wkw | https://leetcode.com/problems/count-days-spent-together'
tags: ['Math']
rating: 1562
---

# 2409 - Count Days Spent Together (Easy)

## Problem Link

https://leetcode.com/problems/count-days-spent-together

## Problem Statement

Alice and Bob are traveling to Rome for separate business meetings.

You are given 4 strings `arriveAlice`, `leaveAlice`, `arriveBob`, and `leaveBob`. Alice will be in the city from the dates `arriveAlice` to `leaveAlice` (**inclusive**), while Bob will be in the city from the dates `arriveBob` to `leaveBob` (**inclusive**). Each will be a 5-character string in the format `"MM-DD"`, corresponding to the month and day of the date.

Return*the total number of days that Alice and Bob are in Rome together.*

You can assume that all dates occur in the **same** calendar year, which is **not** a leap year. Note that the number of days per month can be represented as: `[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]`.

**Example 1:**

```
Input: arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19"
Output: 3
Explanation: Alice will be in Rome from August 15 to August 18. Bob will be in Rome from August 16 to August 19. They are both in Rome together on August 16th, 17th, and 18th, so the answer is 3.
```

**Example 2:**

```
Input: arriveAlice = "10-01", leaveAlice = "10-31", arriveBob = "11-01", leaveBob = "12-31"
Output: 0
Explanation: There is no day when Alice and Bob are in Rome together, so we return 0.
```

**Constraints:**

- All dates are provided in the format `"MM-DD"`.
- Alice and Bob's arrival dates are **earlier than or equal to** their leaving dates.
- The given dates are valid dates of a **non-leap** year.

## Approach 1: Prefix Sum & Interval Intersection

Basically the idea is to find the overlapping date interval, convert its endpoints into day numbers, and count the days inclusively.

First, to find the overlap, both people must have arrived, so the overlap starts on the later arrival date: $max(arriveAlice, arriveBob)$. And it ends on the earlier departure date: $min(leaveAlice, leaveBob)$. Dates in "MM-DD" format can be compared directly as strings. Because months and days are zero-padded, alphabetical order matches chronological order.

Then, we convert a date to a 0-based day number. The number of days in each month is $[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]$. To convert a date, first count the days in all preceding months. These totals are called month offsets. Each offset is just the previous offset plus the previous month's length. So we have

- January: $0$
- February: $0 + 31 = 31$
- March: $31 + 28 = 59$
- April: $59 + 31 = 90$
- Continue similarly for the remaining months.

Therefore, the offsets are $[0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]$. This can be calculated in following code:

```py
offsets = [0]
for days in (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30):
    offsets.append(offsets[-1] + days)
```
            
For a date $s$, $int(s[:2]) - 1$ gives the 0-based month index and $int(s[3:]) - 1$ gives the 0-based day within that month. For example, "08-16" becomes $212 + 16 - 1 = 227$.

Once both endpoints are converted, the inclusive number of overlapping days is simply $end_day - start_day + 1$. The $+1$ includes both endpoints. If the intervals do not overlap, this value is non-positive, so take its maximum with $0$.

Let's say Alice's stay "08-15" to "08-18" and Bob's stay "08-16" to "08-19", we have 

- Later arrival: "08-16" -> $227$
- Earlier departure: "08-18" -> $229$
- Overlap: $229 - 227 + 1 = 3$

The time complexity is $O(1)$ and the space complexity is $O(1)$.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def countDaysTogether(self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str) -> int:
        def day(s):
            return (0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334)[int(s[:2]) - 1] + int(s[3:]) - 1
        return max(0, day(min(leaveAlice, leaveBob)) - day(max(arriveAlice, arriveBob)) + 1)
```

</TabItem>
</Tabs>