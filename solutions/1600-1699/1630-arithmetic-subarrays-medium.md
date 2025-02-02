---
description: 'Author: @jit, @martin0327, @heder | https://leetcode.com/problems/arithmetic-subarrays/'
tags: [Array, Sorting]
---

# 1630 - Arithmetic Subarrays (Medium)

## Problem Link

https://leetcode.com/problems/arithmetic-subarrays/

## Problem Statement

A sequence of numbers is called **arithmetic** if it consists of at least two elements, and the difference between every two consecutive elements is the same. More formally, a sequence `s` is arithmetic if and only if `s[i+1] - s[i] == s[1] - s[0]`for all valid `i`.

For example, these are **arithmetic** sequences:

```
1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
```

The following sequence is not **arithmetic**:

```
1, 1, 2, 5, 7
```

You are given an array of `n` integers, `nums`, and two arrays of `m` integers each, `l` and `r`, representing the `m` range queries, where the `ith` query is the range `[l[i], r[i]]`. All the arrays are **0-indexed**.

Return _a list of_`boolean` _elements_ `answer`_, where_ `answer[i]` _is_ `true` _if the subarray_ `nums[l[i]], nums[l[i]+1], ... , nums[r[i]]`_can be **rearranged** to form an **arithmetic** sequence, and_ `false` _otherwise._

**Example 1:**

```
Input: nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]
Output: [true,false,true]
Explanation:
In the 0th query, the subarray is [4,6,5]. This can be rearranged as [6,5,4], which is an arithmetic sequence.
In the 1st query, the subarray is [4,6,5,9]. This cannot be rearranged as an arithmetic sequence.
In the 2nd query, the subarray is [5,9,3,7]. This can be rearranged as [3,5,7,9], which is an arithmetic sequence.
```

**Example 2:**

```
Input: nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]
Output: [false,true,false,false,true,true]
```

**Constraints:**

- `n == nums.length`
- `m == l.length`
- `m == r.length`
- `2 <= n <= 500`
- `1 <= m <= 500`
- `0 <= l[i] < r[i] < n`
- `-10 ^ 5 <= nums[i] <= 10 ^ 5`

## Approach 1: Brute Force

<Tabs>
<TabItem value="elixir" label="Elixir">
<SolutionAuthor name="@jit"/>

```elixir
@spec check_arithmetic_subarrays(nums :: [integer], l :: [integer], r :: [integer]) :: [boolean]
# A fairly naive solution:
def check_arithmetic_subarrays(nums, l, r) do
  Enum.zip_with(l, r, fn ll, rr ->
    nums |> Enum.slice(ll..rr) |> Enum.sort() |> is_arith?()
  end)
end

defp is_arith?([a | [b | rest] = tl]) do
  diff = a - b
  Enum.zip_with(tl, rest, &-/2) |> Enum.all?(&(&1 == diff))
end

defp is_arith?(_), do: true
```

</TabItem>
</Tabs>

## Approach 2: Mo's Algorithm

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@martin0327"/>

```cpp
using ti3 = tuple<int,int,int>;
const int inf = 1e9;

class Solution {
public:
    vector<bool> checkArithmeticSubarrays(vector<int>& a, vector<int>& ql, vector<int>& qr) {
        int n = a.size(), q = ql.size(), sz = sqrt(n);
        map<int,vector<ti3>> mo;
        for (int i=0; i<q; i++) {
            int l = ql[i], r = qr[i];
            mo[l/sz].push_back({r,l,i});
        }

        int i=0, j=0, mul = 0;
        map<int,int> mp1, mp2;
        mp1[a[0]]++;

        auto inc1 = [&] (int x) { if (++mp1[x] == 2) mul++; };
        auto dec1 = [&] (int x) {
            if (mp1[x] == 2) mul--;
            if (--mp1[x] == 0) mp1.erase(x);
        };
        auto inc2 = [&] (int x) { mp2[x]++; };
        auto dec2 = [&] (int x) { if (--mp2[x] == 0) mp2.erase(x); };

        auto lr = [&] (int x) {
            auto it1 = mp1.lower_bound(x);
            auto it2 = mp1.upper_bound(x);
            int l = (it1 == mp1.begin()) ? inf : prev(it1)->first;
            int r = (it2 == mp1.end()) ? inf : it2->first;
            return make_pair(l,r);
        };

        auto push = [&] (int x) {
            auto [l,r] = lr(x);
            if (!mp1.count(x)) {
                if (l != inf) inc2(x-l);
                if (r != inf) inc2(r-x);
                if (l != inf && r != inf) dec2(r-l);
            }
            inc1(x);
        };

        auto pop = [&] (int x) {
            auto [l,r] = lr(x);
            if (mp1[x] == 1) {
                if (l != inf) dec2(x-l);
                if (r != inf) dec2(r-x);
                if (l != inf && r != inf) inc2(r-l);
            }
            dec1(x);
        };

        vector<bool> ans(q);
        for (auto &[_,rli] : mo) {
            sort(rli.begin(), rli.end());
            for (auto [r,l,idx] : rli) {
                while (i!=l || j!=r) {
                    if (r>j) push(a[++j]);
                    else if (l<i) push(a[--i]);
                    else if (r<j) pop(a[j--]);
                    else if (l>i) pop(a[i++]);
                }
                if (mul+mp2.size()==1) ans[idx] = 1;
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>

## Approach 3: RMQ

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int fast_io = []() { std::ios::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr); return 0; }();

// Using sparse table, see https://www.youtube.com/watch?v=0jWeUdxrGm4
class RangeMinMaxQuery {
private:
    vector<vector<pair<int, int>>> m_;

public:
    RangeMinMaxQuery(vector<int>& nums)
        : m_(bin_log(size(nums)) + 1, vector<pair<int, int>>(size(nums))) {
        transform(begin(nums), end(nums), begin(m_[0]),
                  [](int x) { return make_pair(x, x); });

        for (int k = 1; k < size(m_); ++k) {
            for (int i = 0; i + (1 << k) - 1 < size(nums); ++i) {
                const auto& p1 = m_[k - 1][i];
                const auto& p2 = m_[k - 1][i + (1 << (k - 1))];
                m_[k][i] = make_pair(
                    min(p1.first, p2.first),
                    max(p1.second, p2.second));
            }
        }
    }

    pair<int, int> query(int l, int r) {
        const int len = r - l + 1;
    	const int k = bin_log(len);
        const auto& p1 = m_[k][l];
        const auto& p2 = m_[k][r - (1 << k) + 1];
	    return make_pair(
            min(p1.first, p2.first),
            max(p1.second, p2.second));
    }

private:
    static constexpr int bin_log(int n) {
        return 31 - __builtin_clz(n);
    }
};

class Solution {
public:
    vector<bool> checkArithmeticSubarrays(vector<int>& nums, vector<int>& ls, vector<int>& rs) {
        RangeMinMaxQuery rmq(nums);

        const int m = size(ls);
        vector<bool> ans;
        for (int i = 0; i < m; ++i) {
            const int l = ls[i];
            const int r = rs[i];
            const int len = r - l + 1;
            if (len <= 2) {
                ans.push_back(true);
                continue;
            }

            const auto [mn, mx] = rmq.query(l, r);
            const int d = (mx - mn) / (len - 1);

            if (mn == mx) {
                ans.push_back(true);
            } else if ((mx - mn) % (len -1)) {
                ans.push_back(false);
            } else {
                bitset<512> seen;;
                int j;
                for (j = l; j <= r; ++j) {
                    if ((nums[j] - mn) % d || seen[(nums[j] - mn) / d])
                        break;
                    seen[(nums[j] - mn) / d] = true;
                }
                ans.push_back(j > r);
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
