---
description: 'Author: @wingkwong | https://leetcode.com/problems/restore-ip-addresses/'
tags: [String, Backtracking]
---

# 0093 - Restore IP Addresses (Medium) 

## Problem Link

https://leetcode.com/problems/restore-ip-addresses/

## Problem Statement

A **valid IP address** consists of exactly four integers separated by single dots. Each integer is between `0` and `255` (**inclusive**) and cannot have leading zeros.

- For example, `"0.1.2.201"` and `"192.168.1.1"` are **valid** IP addresses, but `"0.011.255.245"`, `"192.168.1.312"` and `"192.168@1.1"` are **invalid** IP addresses.

Given a string `s` containing only digits, return *all possible valid IP addresses that can be formed by inserting dots into*`s`. You are **not** allowed to reorder or remove any digits in `s`. You may return the valid IP addresses in **any** order.

**Example 1:**

```
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]
```

**Example 2:**

```
Input: s = "0000"
Output: ["0.0.0.0"]
```

**Example 3:**

```
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```

**Constraints:**

- `1 <= s.length <= 20`
- `s` consists of digits only.

## Approach 1: Iterative


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// ideas:
// A valid ip address would have 4 parts separated by dots
// we iterate through `s` to insert 3 dots and separate the string into 4 segments
// for each segment, we check if it is valid
// if all 4 segments are valid, we combine those 4 segments with dots and push to the answer

class Solution {
public:
    vector<string> restoreIpAddresses(string s) {
        vector<string> ans;
        int n = s.size();
        // iterate `s` - place 3 dots to have 4 segments 
        // [seg1].[seg2].[seg3].[seg4]
        // 1st dot - we just need to run it 3 times at most
        // e.g. for 255, we can place the first dot at `2.55`, `25.5` or `255.`
        for (int i = 1; i < 4 && i < n; i++) {
            // we place the 2nd dot in a similar way
            for (int j = i + 1; j < i + 4 && j < n; j++) {
                // we place the 3rd dot in a similar way
                for (int k = j + 1; k < j + 4 && k < n; k++) {
                    // now we can separate into 4 segments
                    string seg1 = s.substr(0, i),
                           seg2 = s.substr(i, j - i),
                           seg3 = s.substr(j, k - j), 
                           seg4 = s.substr(k);
                    // for each segment, check if it is valid
                    if (ok(seg1) && ok(seg2) && ok(seg3) && ok(seg4)) {
                        // if so, we build the ip address and push to answer
                        ans.push_back(seg1 + "." + seg2 + "." + seg3 + "." + seg4);
                    }
                }
            }
        }
        return ans;
    }
    
    // check if a given IP address segment is valid
    // 192 -> true
    // 312 -> false
    bool ok(string s) {
        // string length > 3 is not a valid IP address segment
        if (s.size() > 3 || 
            // empty segment is not valid
            s.size() == 0 ||
            // if the first character is 0, we cannot have something like 0x, 0xx
            (s[0] == '0' && s.size() > 1) || 
            // segment is out of range
            stoi(s) > 255
           ) {
            return false;
        }
        return true;
    }
};

```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java

// ideas:
// A valid ip address would have 4 parts separated by dots
// we iterate through `s` to insert 3 dots and separate the string into 4 segments
// for each segment, we check if it is valid
// if all 4 segments are valid, we combine those 4 segments with dots and push to the answer
class Solution {
    public List<String> restoreIpAddresses(String s) {
        List<String> ans = new ArrayList<>();
        int n = s.length();
        // iterate `s` - place 3 dots to have 4 segments 
        // [seg1].[seg2].[seg3].[seg4]
        // 1st dot - we just need to run it 3 times at most
        // e.g. for 255, we can place the first dot at `2.55`, `25.5` or `255.`
        for (int i = 1; i < 4 && i < n; i++) {
            // we place the 2nd dot in a similar way
            for (int j = i + 1; j < i + 4 && j < n; j++) {
                // we place the 3rd dot in a similar way
                for (int k = j + 1; k < j + 4 && k < n; k++) {
                    // now we can separate into 4 segments
                    String seg1 = s.substring(0, i),
                           seg2 = s.substring(i, j),
                           seg3 = s.substring(j, k), 
                           seg4 = s.substring(k);
                    // for each segment, check if it is valid
                    if (ok(seg1) && ok(seg2) && ok(seg3) && ok(seg4)) {
                        // if so, we build the ip address and push to answer
                        ans.add(seg1 + "." + seg2 + "." + seg3 + "." + seg4);
                    }
                }
            }
        }
        return ans;
    }
    
    // check if a given IP address segment is valid
    // 192 -> true
    // 312 -> false
    private boolean ok(String s) {
        // string length > 3 is not a valid IP address segment
        if (s.length() > 3 || 
            // empty segment is not valid
            s.length() == 0 ||
            // if the first character is 0, we cannot have something like 0x, 0xx
            (s.charAt(0) == '0' && s.length() > 1) || 
            // segment is out of range
            Integer.parseInt(s) > 255
           ) {
            return false;
        }
        return true;
    }
}

```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
# ideas:
# A valid ip address would have 4 parts separated by dots
# we iterate through `s` to insert 3 dots and separate the string into 4 segments
# for each segment, we check if it is valid
# if all 4 segments are valid, we combine those 4 segments with dots and push to the answer
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        ans = []
        n = len(s)
        
        # check if a given IP address segment is valid
        # 192 -> true
        # 312 -> false
        def ok(seg: str) -> bool:
            # string length > 3 is not a valid IP address segment
            # empty segment is not valid
            # if the first character is 0, we cannot have something like 0x, 0xx
            # segment is out of range
            if len(seg) > 3 or len(seg) == 0 or (seg[0] == '0' and len(seg) > 1) or int(seg) > 255:
                return False
            return True
    
        # iterate `s` - place 3 dots to have 4 segments 
        # [seg1].[seg2].[seg3].[seg4]
        # 1st dot - we just need to run it 3 times at most
        # e.g. for 255, we can place the first dot at `2.55`, `25.5` or `255.`
        for i in range(1, 4):
            # we place the 2nd dot in a similar way
            for j in range(i + 1, i + 4):
                # we place the 3rd dot in a similar way
                for k in range(j + 1, j + 4):
                    # now we can separate into 4 segments
                    seg1, seg2, seg3, seg4 = s[:i], s[i:j], s[j:k], s[k:]
                    # for each segment, check if it is valid
                    if ok(seg1) and ok(seg2) and ok(seg3) and ok(seg4):
                        # if so, we build the ip address and push to answer
                        ans.append(seg1 + "." + seg2 + "." + seg3 + "." + seg4)
        return ans

```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
// ideas:
// A valid ip address would have 4 parts separated by dots
// we iterate through `s` to insert 3 dots and separate the string into 4 segments
// for each segment, we check if it is valid
// if all 4 segments are valid, we combine those 4 segments with dots and push to the answer

impl Solution {
    fn restore_ip_addresses(s: String) -> Vec<String> {
        let mut ans = vec![];
        let n = s.len();
        // iterate `s` - place 3 dots to have 4 segments 
        // [seg1].[seg2].[seg3].[seg4]
        // 1st dot - we just need to run it 3 times at most
        // e.g. for 255, we can place the first dot at `2.55`, `25.5` or `255.`
        for i in 1 .. 4 {
            // we place the 2nd dot in a similar way
            for j in i + 1 .. i + 4 {
                // we place the 3rd dot in a similar way
                for k in j + 1 .. j + 4 {
                    if k < n {
                        // now we can separate into 4 segments
                        let seg1 = &s[..i];
                        let seg2 = &s[i..j];
                        let seg3 = &s[j..k];
                        let seg4 = &s[k..];
                        // for each segment, check if it is valid
                        if Solution::ok(seg1) && 
                           Solution::ok(seg2) && 
                           Solution::ok(seg3) && 
                           Solution::ok(seg4) {
                            // if so, we build the ip address and push to answer
                            ans.push(format!("{}.{}.{}.{}", seg1, seg2, seg3, seg4));
                        }
                    }
                }
            }
        }
        ans
    }

    // check if a given IP address segment is valid
    // 192 -> true
    // 312 -> false
    fn ok(seg: &str) -> bool {
        seg.len() > 0 && seg.len() <= 3 && !(seg.starts_with('0') && seg.len() > 1) && seg.parse::<u32>().unwrap() <= 255
    }
}

```

</TabItem>
</Tabs>
