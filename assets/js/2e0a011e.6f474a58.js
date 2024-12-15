"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[27662],{42125:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"0000-0099/minimum-window-substring-hard","title":"0076 - Minimum Window Substring (Hard)","description":"Author: @vigneshshiv | https://leetcode.com/problems/minimum-window-substring/","source":"@site/solutions/0000-0099/0076-minimum-window-substring-hard.md","sourceDirName":"0000-0099","slug":"/0000-0099/minimum-window-substring-hard","permalink":"/solutions/0000-0099/minimum-window-substring-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0076-minimum-window-substring-hard.md","tags":[],"version":"current","sidebarPosition":76,"frontMatter":{"description":"Author: @vigneshshiv | https://leetcode.com/problems/minimum-window-substring/"},"sidebar":"tutorialSidebar","previous":{"title":"0075 - Sort Colors (Medium)","permalink":"/solutions/0000-0099/sort-colors-medium"},"next":{"title":"0077 - Combinations (Medium)","permalink":"/solutions/0000-0099/combinations-medium"}}');var i=t(74848),a=t(28453);const r={description:"Author: @vigneshshiv | https://leetcode.com/problems/minimum-window-substring/"},o="0076 - Minimum Window Substring (Hard)",c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window with HashMap",id:"approach-1-sliding-window-with-hashmap",level:2},{value:"Approach 2: Sliding Window with ASCII",id:"approach-2-sliding-window-with-ascii",level:2}];function l(n){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...n.components},{SolutionAuthor:t,TabItem:s,Tabs:r}=e;return t||m("SolutionAuthor",!0),s||m("TabItem",!0),r||m("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"0076---minimum-window-substring-hard",children:"0076 - Minimum Window Substring (Hard)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/minimum-window-substring/",children:"https://leetcode.com/problems/minimum-window-substring/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["Given two strings ",(0,i.jsx)(e.code,{children:"s"})," and ",(0,i.jsx)(e.code,{children:"t"})," of lengths ",(0,i.jsx)(e.code,{children:"m"})," and ",(0,i.jsx)(e.code,{children:"n"})," respectively, return ",(0,i.jsx)(e.strong,{children:"minimum window substring"})," of ",(0,i.jsx)(e.code,{children:"s"})," such that every character in ",(0,i.jsx)(e.code,{children:"t"})," (",(0,i.jsx)(e.strong,{children:"including duplicates"}),") is included in the window. If there is no such substring, return the empty string ",(0,i.jsx)(e.code,{children:'""'}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["The testcases will be generated such that the answer is ",(0,i.jsx)(e.strong,{children:"unique"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["A ",(0,i.jsx)(e.strong,{children:"substring"})," is a contiguous sequence of characters within the string."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'Input: s = "ADOBECODEBANC", t = "ABC"\nOutput: "BANC"\nExplanation: The minimum window substring "BANC" includes \'A\', \'B\', and \'C\' from string t.\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'Input: s = "a", t = "a"\nOutput: "a"\nExplanation: The entire string s is the minimum window.\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'Input: s = "a", t = "aa"\nOutput: ""\nExplanation: Both \'a\'s from t must be included in the window.\nSince the largest window of s only has one \'a\', return empty string.\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"m == s.length"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"n == t.length"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= m, n <= 10^5"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"s"})," and ",(0,i.jsx)(e.code,{children:"t"})," consist of uppercase and lowercase English letters."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Follow up:"})," Could you find an algorithm that runs in ",(0,i.jsx)(e.code,{children:"O(m + n)"})," time?"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-sliding-window-with-hashmap",children:"Approach 1: Sliding Window with HashMap"}),"\n",(0,i.jsx)(e.p,{children:"Finding all of T's characters in S, irrespective of order and other characters in a linear time requires two pointer approach."}),"\n",(0,i.jsx)(e.p,{children:'One of the base case is, T should be smaller than S, Otherwise if T\'s larger than S then return "". But if both strings are equal then T is our answer.'}),"\n",(0,i.jsx)(e.p,{children:"Apart from above mentioned base cases, Here are the simple steps to solve this problem,"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Build a HashMap of T's characters and it's count."}),"\n",(0,i.jsx)(e.li,{children:"Iterate through S and move forward with one pointer, and look for each char in map and it's count, If matches then we found one of the matching character."}),"\n",(0,i.jsx)(e.li,{children:"Repeat the process until of all T's characters found in S, Once found, that's our minimum window."}),"\n",(0,i.jsx)(e.li,{children:"Remove S's unnecessary characters in HashMap starting from first, and find the minimum window."}),"\n",(0,i.jsx)(e.li,{children:"Repeat the 3rd & 4th step until you find the minimum window substring"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Time Complexity: ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(m + n)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),", where ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"m"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})})]})," - # of characters in s and ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"n"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," - # of characters in t."]}),"\n",(0,i.jsxs)(e.p,{children:["Space complexity: ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsxs)(s,{value:"java",label:"Java",children:[(0,i.jsx)(t,{name:"@vigneshshiv"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public String minWindow(String s, String t) {\n        String empty = \"\";\n        int m = s.length(), n = t.length();\n        // If String T length is greater than S, then all of T chars can't fit in S, so return \"\"\n        if (n > m) return empty;\n        // If S & T equals, then that's the min\n        if (m == n && s.equals(t)) return t;\n        // Build T character hashmap and counts\n        Map<Character, Integer> map = new HashMap<>();\n        for (char c : t.toCharArray()) {\n            map.put(c, map.getOrDefault(c, 0) + 1);\n        }\n        // i - refers start position usually left\n        int i = 0, start = -1, matched = 0, min = s.length() + 1;\n        for (int j = 0; j < m; j++) {\n            char c = s.charAt(j);\n            if (map.containsKey(c)) {\n                map.merge(c, -1, Integer::sum);\n                // If map character matches 0, then found valid char, increase matched by 1\n                if (map.get(c) == 0) {\n                    matched += 1;\n                }\n            }\n            // If matched equals all of T's character, then find minimum window\n            while (matched == map.size()) {\n                if (min > j - i + 1) {\n                    min = j - i + 1;\n                    start = i;\n                }\n                char del = s.charAt(i++);\n                if (map.containsKey(del)) {\n                    // If we are seeing one of T's del char then increase count by 1\n                    // If the char count is 0, then decrement matched by 1 (reason count will be increment by 1)\n                    if (map.get(del) == 0) {\n                        matched -= 1;\n                    }\n                    map.merge(del, 1, Integer::sum);\n                }\n            }\n        }\n        return start == -1 ? empty : s.substring(start, start + min);\n    }\n}\n"})})]}),(0,i.jsxs)(s,{value:"python",label:"Python",children:[(0,i.jsx)(t,{name:"@ColeB2"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"class Solution:\n    # We are going to create a counter to count the characters of t, then as \n    # we come across them in s, decrement the count in our counter. If count\n    # for that character is <= 0, we have more than enough characters in our\n    # window to equal t. so we can increment a matches variable to track that.\n    # Knowing that our goal is to:\n    # 1. add characters to our window, and then update the counter, and matches.\n    # remembering that matches increments when the count of the characters in our\n    # window reaches 0.\n    # 2. Check to see if our window has all characters we need.\n    # If so, we set our window to the current window, and start shrinking it to see\n    # if it still remains true while shrinking. While shrinking, if the count of\n    # the characters ever goes back positive, we know that we no longer have enough\n    # characters inside our window to match t, so we can decrement matches, and stop\n    # shrinking the window.\n    # Repeat the above process until our window's right side expands to larger than s.\n    def minWindow(self, s: str, t: str) -> str:\n        # Early Return if t is larger than s, we obviously can't find t in s.\n        if len(t) > len(s): return \"\"\n        #Create counter to count all characters in t. O(n) time where n length of t.\n        counter = {}\n        for ch in t:\n            if ch not in counter:\n                counter[ch] = 0\n            counter[ch] += 1\n        # Initialize variables create out sliding window. l to track left\n        # side of our window starting at 0, matches to track the characters\n        # we have enough of inside our window to match t, and an initial variable\n        # to where our window will start, and how large it is. We use -1 to show\n        # we don't have a window started that is valid yet, and len(s) + 1 as a \n        # window that will be large enough than any window we find, if we find one\n        # will be smaller than it, and therefore trigger our update condition.\n        l = 0\n        matches = 0\n        window_start = -1\n        window_size = len(s) + 1\n        # Expand our window tracking r, right side window, and incoming character, ch.\n        # O(m) time to look through the string s. Where m is length of s.\n        for r, ch in enumerate(s):\n            # Check expanded window incoming character is in counter so we can add it.\n            if ch in counter:\n                counter[ch] -= 1\n                # If count for ch reaches 0, we have more than enough character to match it.\n                if counter[ch] == 0:\n                    matches += 1\n            # Check that the window has all the characters it needs, while it does,\n            # shrink the window until it doesn't have all characters it needs.\n            while len(counter) == matches:\n                # get current window size\n                current_window_size = (r-l) + 1\n                # check current window < smallest window found.\n                if current_window_size < window_size:\n                    # update size of smallest window we found.\n                    window_size = current_window_size\n                    # update start of window we found.\n                    window_start = l\n                # start the removal of the left character, ie moving window forward.\n                left_ch = s[l]\n                # if left ch is a character we need to match t, \n                if left_ch in counter:\n                    # check to see if we have 0 for a count of that character.\n                    # if we do, we know by removing it, we will no longer have enough\n                    # characters to match to t.\n                    if counter[left_ch] == 0:\n                        matches -= 1\n                    # remove ch from window, by incrementing its count.\n                    counter[left_ch] += 1\n                # move the window forward.\n                l += 1\n        # return the answer by slicing. string from our start point to start point + size\n        # only do this if we found a valid window. Note slicing in python takes O(n)\n        # where n is length of s, to copy the string, then slice it properly.\n        return s[window_start: window_start + window_size] if window_start != -1 else \"\"\n"})})]})]}),"\n",(0,i.jsx)(e.h2,{id:"approach-2-sliding-window-with-ascii",children:"Approach 2: Sliding Window with ASCII"}),"\n",(0,i.jsx)(r,{children:(0,i.jsxs)(s,{value:"java",label:"Java",children:[(0,i.jsx)(t,{name:"@vigneshshiv"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'class Solution {\n    public String minWindow(String s, String t) {\n        String empty = "";\n        int m = s.length(), n = t.length();\n        // If String T length is greater than S, then all of T chars can\'t fit in S, so return ""\n        if (n > m) return empty;\n        // If S & T equals, then that\'s the min\n        if (m == n && s.equals(t)) return t;\n        // Build T character hashmap and counts\n        int[] map = new int[128];\n        for (char c : t.toCharArray()) {\n            map[c] += 1;\n        }\n        // i - refers start position usually left\n        int i = 0, start = -1, matched = 0, min = s.length() + 1;\n        for (int j = 0; j < m; j++) {\n            char c = s.charAt(j);\n            if (map[c]-- > 0) {\n                matched += 1;\n            }\n            while (matched == n) {\n                if (min > j - i + 1) {\n                    min = j - i + 1;\n                    start = i;\n                }\n                char del = s.charAt(i++);\n                if (map[del]++ >= 0) {\n                    matched -= 1;\n                }\n            }\n        }\n        return start == -1 ? empty : s.substring(start, start + min);\n    }\n}\n'})})]})})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);