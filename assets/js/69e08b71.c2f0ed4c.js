"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[19401],{21805:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"0500-0599/permutation-in-string-medium","title":"0567 - Permutation in String (Medium)","description":"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/permutation-in-string/","source":"@site/solutions/0500-0599/0567-permutation-in-string-medium.md","sourceDirName":"0500-0599","slug":"/0500-0599/permutation-in-string-medium","permalink":"/solutions/0500-0599/permutation-in-string-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0567-permutation-in-string-medium.md","tags":[{"inline":true,"label":"Hash Table","permalink":"/solutions/tags/hash-table"},{"inline":true,"label":"Two Pointers","permalink":"/solutions/tags/two-pointers"},{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Sliding Window","permalink":"/solutions/tags/sliding-window"}],"version":"current","sidebarPosition":567,"frontMatter":{"description":"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/permutation-in-string/","tags":["Hash Table","Two Pointers","String","Sliding Window"]},"sidebar":"tutorialSidebar","previous":{"title":"0560 - Subarray Sum Equals K (Medium)","permalink":"/solutions/0500-0599/subarray-sum-equals-k-medium"},"next":{"title":"0572 - Subtree of Another Tree (Easy)","permalink":"/solutions/0500-0599/subtree-of-another-tree-easy"}}');var t=n(74848),i=n(28453);const r={description:"Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/permutation-in-string/",tags:["Hash Table","Two Pointers","String","Sliding Window"]},c="0567 - Permutation in String (Medium)",l={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2},{value:"Approach 2: Sliding Window - Track Matches",id:"approach-2-sliding-window---track-matches",level:2}];function m(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components},{SolutionAuthor:n,TabItem:a,Tabs:r}=e;return n||d("SolutionAuthor",!0),a||d("TabItem",!0),r||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"0567---permutation-in-string-medium",children:"0567 - Permutation in String (Medium)"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.com/problems/permutation-in-string/",children:"https://leetcode.com/problems/permutation-in-string/"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(e.p,{children:["Given two strings ",(0,t.jsx)(e.code,{children:"s1"})," and ",(0,t.jsx)(e.code,{children:"s2"}),", return ",(0,t.jsx)(e.code,{children:"true"})," ",(0,t.jsx)(e.em,{children:"if"})," ",(0,t.jsx)(e.code,{children:"s2"})," ",(0,t.jsx)(e.em,{children:"contains a permutation of"})," ",(0,t.jsx)(e.code,{children:"s1"}),(0,t.jsx)(e.em,{children:", or"})," ",(0,t.jsx)(e.code,{children:"false"})," ",(0,t.jsx)(e.em,{children:"otherwise"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["In other words, return ",(0,t.jsx)(e.code,{children:"true"})," if one of ",(0,t.jsx)(e.code,{children:"s1"}),"'s permutations is the substring of ",(0,t.jsx)(e.code,{children:"s2"}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'Input: s1 = "ab", s2 = "eidbaooo"\nOutput: true\nExplanation: s2 contains one permutation of s1 ("ba").\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'Input: s1 = "ab", s2 = "eidboaoo"\nOutput: false \n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"1 <= s1.length, s2.length <= 10^4"})}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"s1"})," and ",(0,t.jsx)(e.code,{children:"s2"})," consist of lowercase English letters."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"approach-1-sliding-window",children:"Approach 1: Sliding Window"}),"\n",(0,t.jsxs)(e.p,{children:["The solution is almost same as ",(0,t.jsx)(e.a,{href:"../0400-0499/find-all-anagrams-in-a-string-medium",children:"0438 - Find All Anagrams in a String (Medium)"}),". The general idea is to count the character occurrences as the string order doesn't matter, and check if there is a window with the same length as ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"1"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"s1"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"mord",children:"1"})]})})]})," contains the same set of occurrences."]}),"\n",(0,t.jsxs)(e.p,{children:["We first use a hash map ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"t"}),(0,t.jsx)(e.mi,{children:"a"}),(0,t.jsx)(e.mi,{children:"r"}),(0,t.jsx)(e.mi,{children:"g"}),(0,t.jsx)(e.mi,{children:"e"}),(0,t.jsx)(e.mi,{children:"t"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"target"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})})]})," count the occurrences for each character in ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"1"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"s1"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"mord",children:"1"})]})})]}),". Then we apply sliding window. We use a pointer ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"i"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," to track the window starting point and use a pointer ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"j"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," to track the window ending point in ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"2"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"s2"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"mord",children:"2"})]})})]}),". We increase the pointer ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"j"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," to count the occurrences in ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"2"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"s2"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"mord",children:"2"})]})})]})," and put the result in another hash map ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"n"}),(0,t.jsx)(e.mi,{children:"o"}),(0,t.jsx)(e.mi,{children:"w"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"now"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"})]})})]})," until the window size ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"j"}),(0,t.jsx)(e.mo,{children:"\u2212"}),(0,t.jsx)(e.mi,{children:"i"}),(0,t.jsx)(e.mo,{children:"+"}),(0,t.jsx)(e.mn,{children:"1"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"j - i + 1"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"+"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," is equal to the length of ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"1"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"s1"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"mord",children:"1"})]})})]}),". Then we compare if both hash maps are identical. If so, return the answer immediately. If not, then we need to remove the leftmost element within this window. Continue the same process until the pointer ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"i"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," reaches the end of the string."]}),"\n",(0,t.jsx)(r,{children:(0,t.jsxs)(a,{value:"cpp",label:"C++",children:[(0,t.jsx)(n,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool checkInclusion(string s1, string s2) {\n        // target for s1, now for s2\n        vector<int> target(26), now(26);\n        int n = (int) s1.size(), m = (int) s2.size(), j = 0;\n        // count the occurrences for characters in s1\n        for (auto x : s1) target[x - 'a']++;\n        // apply sliding window. pointer i is the starting position\n        for (int i = 0; i < m; i++) {\n          // pointer j is the ending position \n          // j - i + 1 = window size\n          // we count the occurrences for characters in s2 within the window\n          while (j < m && j - i + 1 <= n) now[s2[j++] - 'a']++;\n          // check if both hash maps are same or not\n          // if they are same, return true\n          if (now == target) return true;\n          // if they are not same, remove the leftmost element and move forward\n          now[s2[i] - 'a']--;\n      }\n      // no permutation is the substring of s2. return false here\n      return false;\n    }\n};\n"})}),(0,t.jsxs)(e.p,{children:["We can also do it without pointer ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"j"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"."]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool checkInclusion(string s1, string s2) {\n        // target for s1, now for s2\n        vector<int> target(26), now(26);\n        int n = (int) s1.size(), m = (int) s2.size();\n        // count the occurrences for characters in s1\n        for (auto x : s1) target[x - 'a']++;\n        for (int i = 0; i < m; i++) {\n            // count the occurrences for characters in s2\n            now[s2[i] - 'a']++;\n            // remove the leftmost element in the window\n            if (i >= n) now[s2[i - n] - 'a']--;\n            // check both hash maps are same\n            if (now == target) {\n                return true;\n            }\n        }\n        // no permutation is the substring of s2. return false here\n        return false;\n    }\n};\n"})})]})}),"\n",(0,t.jsx)(e.h2,{id:"approach-2-sliding-window---track-matches",children:"Approach 2: Sliding Window - Track Matches"}),"\n",(0,t.jsxs)(e.p,{children:["Similar to Approach 1 but with a slight improvement. We will still create a sliding window, and a hash map to count the characters in ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"1"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"s1"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"mord",children:"1"})]})})]}),". But, instead of creating a second hash map to count the characters in ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"2"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"s2"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"mord",children:"2"})]})})]}),", we will use the first hash map, and just decrement the count every time a character comes into our window, and increment a ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"m"}),(0,t.jsx)(e.mi,{children:"a"}),(0,t.jsx)(e.mi,{children:"t"}),(0,t.jsx)(e.mi,{children:"c"}),(0,t.jsx)(e.mi,{children:"h"}),(0,t.jsx)(e.mi,{children:"e"}),(0,t.jsx)(e.mi,{children:"s"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"matches"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"ma"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"es"})]})})]})," variable when ever the counter's character count for that character reaches 0. (Must also then decrement ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"m"}),(0,t.jsx)(e.mi,{children:"a"}),(0,t.jsx)(e.mi,{children:"t"}),(0,t.jsx)(e.mi,{children:"c"}),(0,t.jsx)(e.mi,{children:"h"}),(0,t.jsx)(e.mi,{children:"e"}),(0,t.jsx)(e.mi,{children:"s"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"matches"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"ma"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"es"})]})})]})," when the character count is no longer 0). Thus removing the need to do a worst case, ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"O"}),(0,t.jsx)(e.mo,{stretchy:"false",children:"("}),(0,t.jsx)(e.mn,{children:"26"}),(0,t.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(26)"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(e.span,{className:"mopen",children:"("}),(0,t.jsx)(e.span,{className:"mord",children:"26"}),(0,t.jsx)(e.span,{className:"mclose",children:")"})]})})]})," check of both counters on each iteration to check that they are equal."]}),"\n",(0,t.jsxs)(e.p,{children:["Time Complexity: ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"O"}),(0,t.jsx)(e.mo,{stretchy:"false",children:"("}),(0,t.jsx)(e.mi,{children:"n"}),(0,t.jsx)(e.mo,{children:"+"}),(0,t.jsx)(e.mi,{children:"m"}),(0,t.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n+m)"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(e.span,{className:"mopen",children:"("}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"+"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,t.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," where ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"n"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," is the length of ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"2"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"s2"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"mord",children:"2"})]})})]}),", and ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"m"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})})]})," is the length of ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"1"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"s1"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"mord",children:"1"})]})})]}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Space Complexity: ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"O"}),(0,t.jsx)(e.mo,{stretchy:"false",children:"("}),(0,t.jsx)(e.mi,{children:"c"}),(0,t.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(c)"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(e.span,{className:"mopen",children:"("}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,t.jsx)(e.span,{className:"mclose",children:")"})]})})]})," where ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"c"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"c"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"c"})]})})]})," is the unique number of characters in ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"s"}),(0,t.jsx)(e.mn,{children:"1"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"s1"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(e.span,{className:"mord",children:"1"})]})})]})," to create our hash map."]}),"\n",(0,t.jsx)(r,{children:(0,t.jsxs)(a,{value:"python",label:"Python",children:[(0,t.jsx)(n,{name:"@ColeB2"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:'class Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        # We are going to create a counter to count the letters of s1, then\n        # as we come accross them in s2, decrement them. If we ever reach\n        # a point, where all out values in the counter reach 0, we know we\n        # have a window with all the proper character in it and can return True.\n        # 1. Build a hash map that contains count of all characters in s1.\n        # Note: we could also use collections.Counter(s1) as a python built\n        # in, both should take O(m) time, where m is the length of s1.\n        counter = {}\n        for ch in s1:\n            if ch not in counter:\n                counter[ch] = 0\n            counter[ch] += 1\n        # Initialize variables to track number of matches, that our window\n        # has with s1, and window_size, length of s1.\n        matches = 0\n        window_size = len(s1)\n        # Loop through all the letters in s2, tracking i, the index and ch\n        # which is the character directly coming into our sliding window.\n        for i, ch in enumerate(s2):\n            # check that the incoming character is a character in our counter.\n            if ch in counter:\n                # decrement the counter, as it matches with our window.\n                counter[ch] -= 1\n                # if number of characters reaches 0, we know we have the same amount\n                # of characters in s1, as we do our window sliding across s2. \n                if counter[ch] == 0:\n                    # So we increment matches.\n                    matches += 1\n            # Check that window we created is proper size to have letters start leaving window.\n            if i >= window_size:\n                # Set variable to left character, which is character leaving the window.\n                left_ch = s2[i-window_size]\n                # Check that the leaving character is in our counter, if not, we don\'t need to do anything.\n                if left_ch in counter:\n                    # Leaving character is in s1, so now we check if our count of characters is 0.\n                    # If it is 0, we know that the leaving character caused our\n                    # window to no longer have same number of ch as s1. \n                    if counter[left_ch] == 0:\n                        # So we decrement matches.\n                        matches -= 1\n                    # Increment counter, since the letter we needed, left the window.\n                    counter[left_ch] += 1\n            # check that the number of matches is equal to the size of our counter.\n            # Note we use len(counter) as string "aabbcc" produce a counter of size 3.\n            if matches == len(counter):\n                return True\n        # We made it through without triggering true, return False.\n        return False\n'})}),(0,t.jsx)(n,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:"# idea:\n# permutation -> same frequency of each character\n# e.g. ab & ba - they both have 1 `a` and 1 `b`\n# which implies we can count the frequency of s1\n# and check if there is a substring of length of `n` (window)\n# containing the same set of frequency of characters\n# which implies we can use sliding window\nclass Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        n, m = len(s1), len(s2)\n        # if s1 got more characters, \n        # then s2 can never contain a permutation of s1\n        if n > m: return False\n        # cnt_s1: frequency of character in s1\n        # cnt_s2: frequency of character in s2\n        cnt_s1, cnt_s2 = [0] * 26, [0] * 26\n        # count the frequency of characters in s1 first\n        for i in range(n):\n            cnt_s1[ord(s1[i]) - ord('a')] += 1\n        # for each character in s2\n        for i in range(m):\n            # we increase the frequency in cnt_s2\n            cnt_s2[ord(s2[i]) - ord('a')] += 1\n            # given the window size `n`,\n            # if the current index >= n, it means we need to pop the leftmost element out\n            # e.g. window size = 2 - now it includes `eid` - we need to pop `e` out\n            if i >= n: cnt_s2[ord(s2[i - n]) - ord('a')] -= 1\n            # check if both frequency count matches or not\n            if cnt_s1 == cnt_s2: return True\n        return False\n"})})]})})]})}function o(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(m,{...s})}):m(s)}function d(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var a=n(96540);const t={},i=a.createContext(t);function r(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:r(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);