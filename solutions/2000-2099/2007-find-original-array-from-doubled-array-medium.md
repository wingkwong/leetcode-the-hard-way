---
description: 'Author: @wkw, @iraycd | https://leetcode.com/problems/find-original-array-from-doubled-array/'
tags: [Array, Hash Table, Greedy, Sorting]
---

# 2007 - Find Original Array From Doubled Array (Medium)

## Problem Link

https://leetcode.com/problems/find-original-array-from-doubled-array/

## Problem Statement

An integer array `original` is transformed into a **doubled** array `changed` by appending **twice the value** of every element in `original`, and then randomly **shuffling** the resulting array.

Given an array `changed`, return `original`_if_`changed`_is a **doubled** array. If_`changed`_is not a **doubled** array, return an empty array. The elements in_ `original` _may be returned in **any** order_.

**Example 1:**

```
Input: changed = [1,3,4,2,6,8]
Output: [1,3,4]
Explanation: One possible original array could be [1,3,4]:
- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.
Other original arrays could be [4,3,1] or [3,1,4].
```

**Example 2:**

```
Input: changed = [6,3,0,1]
Output: []
Explanation: changed is not a doubled array.
```

**Example 3:**

```
Input: changed = [1]
Output: []
Explanation: changed is not a doubled array.
```

**Constraints:**

- `1 <= changed.length <= 105`
- `0 <= changed[i] <= 105`

## Approach 1: Sorting + Hashmap

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// Time Complexity: O(N + NlogN)
// Space Complexity: O(N)
// where N is the number of elements in `changed`
class Solution {
public:
    // hashmap approach
    vector<int> findOriginalArray(vector<int>& changed) {
        // if the length of the input is odd, then return {}
        // because doubled array must have even length
        if (changed.size() & 1) return {};
        // count the frequency of each number
        unordered_map<int, int> m;
        for (auto x: changed) m[x]++;
        vector<int> ans;
        // sort in ascending order
        sort(changed.begin(), changed.end());
        // keep the unique elements only in changed
        // think of test cases like [0,0,0,0]
        // alternatively you can handle it like
        // - check if the frequency of 0 is odd, if so, return {}
        // - push `0` `m[0] / 2` times to ans
        changed.erase(unique(changed.begin(), changed.end()), changed.end());
        // so that we can iterate `changed` from smallest to largest
        for (auto x : changed) {
            // if the number of m[x] is greater than than m[x * 2]
            // then there would be some m[x] left
            // therefore, return {} here as changed is not a doubled array
            if (m[x] > m[x * 2]) return {};
            for (int i = 0; i < m[x]; i++) {
                // otherwise, we put the element `x` `m[x]` times to ans
                ans.push_back(x);
                // at the same time we decrease the count of m[x * 2] by 1
                // we don't need to decrease m[x] by 1 as we won't use it again
                m[x * 2] -= 1;
            }
        }
        return ans;
    }
};
```

```cpp
// Time Complexity: O(N + KlogK)
// Space Complexity: O(N)
// where N is the number of elements in `changed`
// and K is the number of elements in `uniqueNumbers`
class Solution {
public:
    // hashmap approach
    vector<int> findOriginalArray(vector<int>& changed) {
        // if the length of the input is odd, then return {}
        // because doubled array must have even length
        if (changed.size() & 1) return {};
        // count the frequency of each number
        unordered_map<int, int> m;
        for (auto x: changed) m[x]++;
        vector<int> ans;
        vector<int> uniqueNumbers;
		// push all unuque numbers to `uniqueNumbers`
        for (auto x : m) uniqueNumbers.push_back(x.first);
        // sort in ascending order
        sort(uniqueNumbers.begin(), uniqueNumbers.end());
        // so that we can iterate `changed` from smallest to largest
        for (auto x : uniqueNumbers) {
            // if the number of m[x] is greater than than m[x * 2]
            // then there would be some m[x] left
            // therefore, return {} here as changed is not a doubled array
            if (m[x] > m[x * 2]) return {};
            for (int i = 0; i < m[x]; i++) {
                // otherwise, we put the element `x` `m[x]` times to ans
                ans.push_back(x);
                // at the same time we decrease the count of m[x * 2] by 1
                // we don't need to decrease m[x] by 1 as we won't use it again
                m[x * 2] -= 1;
            }
        }
        return ans;
    }
};
```

```cpp
// Time Complexity: O(NlogN)
// Space Complexity: O(N)
// where N is the number of elements in `changed`
class Solution {
public:
    // multiset approach
    vector<int> findOriginalArray(vector<int>& changed) {
        // if the length of the input is odd, then return {}
        // because doubled array must have even length
        if (changed.size() & 1) return {};
        vector<int> ans;
        // put all the elements to a multiset
        multiset<int> s(changed.begin(), changed.end());
        // keep doing the following logic when there is an element in the multiset
        while (s.size()) {
            // get the smallest element
            int smallest = *s.begin();
            ans.push_back(smallest);
            // remove the smallest element in multiset
            s.erase(s.begin());
            // if the doubled value of smallest doesn't exist in the multiset
            // then return {}
            if (s.find(smallest * 2) == s.end()) return {};
            // otherwise we can remove its doubled element
            else s.erase(s.find(smallest * 2));
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
# Time Complexity: O(NlogN)
# Space Complextiy O(N)
# where N is the number of elements in `changed`
class Solution:
    def findOriginalArray(self, changed):
        # use Counter to count the frequency of each element in `changed`
        cnt, ans = Counter(changed), []
        # if the length of the input is odd, then return []
        # because doubled array must have even length
        if len(changed) % 2: return []
        # sort in ascending order
        for x in sorted(cnt.keys()):
            # if the number of cnt[x] is greater than than cnt[x * 2]
            # then there would be some cnt[x] left
            # therefore, return [] here as changed is not a doubled array
            if cnt[x] > cnt[x * 2]: return []
            # handle cases like [0,0,0,0]
            if x == 0:
                # similarly, odd length -> return []
                if cnt[x] % 2:
                    return []
                else:
                    # add `0` `cnt[x] // 2` times
                    ans += [0] * (cnt[x] // 2)
            else:
                # otherwise, we put the element `x` `cnt[x]` times to ans
                ans += [x] * cnt[x]
            cnt[2 * x] -= cnt[x]
        return ans
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    // counting sort approach
    public int[] findOriginalArray(int[] changed) {
        int n = changed.length, j = 0;
        // if the length of the input is odd, then return []
        // because doubled array must have even length
        if (n % 2 == 1) return new int[]{};
        int[] ans = new int[n / 2];
        // alternatively, you can find the max number in `changed`
        // then use new int[2 * mx + 1]
        int[] cnt = new int[200005];
        // count the frequency of each number
        for (int x : changed) cnt[x] += 1;
        // iterate from 0 to max number
        for (int i = 0; i < 200005; i++) {
            // check if the count of number i is greater than 0
            if (cnt[i] > 0) {
                // number i exists, decrease by 1
                cnt[i] -= 1;
                // look for the doubled value
                if (cnt[i * 2] > 0) {
                    // doubled value exists, decrease by 1
                    cnt[i * 2] -= 1;
                    // add this number to ans
                    ans[j++] = i--;
                } else {
                    // cannot pair up, return []
                    return new int[]{};
                }
            }
        }
        return ans;
    }
}
```

</TabItem>
	
<TabItem value="go" label="Go">
<SolutionAuthor name="@iraycd"/>

```go
// 1. Mapping the numbers with repetitions.
// 2. Sort them in ascending order
// 3. Subtract the doubled from the maps and make the original item 0.
// 4. Checking if everything is 0.

func findOriginalArray(changed []int) []int {
    // As every number has double, if it's odd, directly return empty.
    isOdd := len(changed) & 1
    if(isOdd == 1){
        return []int{}
    }

    // Converting everything to a map, counting the repetitions.
    changedMap := make(map[int]int)
    for _, elem := range changed {
        if _, ok:= changedMap[elem]; ok {
            changedMap[elem] = changedMap[elem] +1
        }else {
            changedMap[elem] = 1;
        }
    }

    // Creating a unique set of all the repetitions.
    // Sorting the set/unique array in ascending order as we can easily remove the elements.
    var set []int
    for key := range changedMap {
        set = append(set, key)
    }
    sort.Ints(set)


    var original []int;
    for _, elem := range set {
        if _, ok:= changedMap[elem*2]; ok {
            x := changedMap[elem]
            y := changedMap[elem*2]
            if(elem == 0){  // In the case of [0,0,0,0] the array has to be [0,0]
                x = x/2
            }
            // We append by the repetitions.
            for i := 0; i < x; i++ {
               original = append(original, elem)
            }
            // In the case of [2,1,2,4,2,4] we have 2s more than 1s. so we subtract 2s from 1s.
            changedMap[elem*2] = y - x;
            changedMap[elem] = 0;
        }
    }

    // Only if all the changedMap has 0 elements in them we make we consider they are all doubled.
    for _, elem := range changedMap {
        if (elem != 0){
            return []int{}
        }
    }

    return original
}
```

</TabItem>
</Tabs>
