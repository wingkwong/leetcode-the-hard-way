"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[10927],{30761:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"0400-0499/find-all-anagrams-in-a-string-medium","title":"0438 - Find All Anagrams in a String (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/find-all-anagrams-in-a-string/","source":"@site/solutions/0400-0499/0438-find-all-anagrams-in-a-string-medium.md","sourceDirName":"0400-0499","slug":"/0400-0499/find-all-anagrams-in-a-string-medium","permalink":"/solutions/0400-0499/find-all-anagrams-in-a-string-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0438-find-all-anagrams-in-a-string-medium.md","tags":[{"inline":true,"label":"Hash Table","permalink":"/solutions/tags/hash-table"},{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Sliding Window","permalink":"/solutions/tags/sliding-window"}],"version":"current","sidebarPosition":438,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/find-all-anagrams-in-a-string/","tags":["Hash Table","String","Sliding Window"]},"sidebar":"tutorialSidebar","previous":{"title":"0437 - Path Sum III (Medium)","permalink":"/solutions/0400-0499/path-sum-iii-medium"},"next":{"title":"0441 - Arranging Coins (Easy)","permalink":"/solutions/0400-0499/arranging-coins-easy"}}');var a=s(74848),t=s(28453);const r={description:"Author: @wingkwong | https://leetcode.com/problems/find-all-anagrams-in-a-string/",tags:["Hash Table","String","Sliding Window"]},l="0438 - Find All Anagrams in a String (Medium)",c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2}];function d(n){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...n.components},{SolutionAuthor:s,TabItem:i,Tabs:r}=e;return s||m("SolutionAuthor",!0),i||m("TabItem",!0),r||m("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"0438---find-all-anagrams-in-a-string-medium",children:"0438 - Find All Anagrams in a String (Medium)"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/find-all-anagrams-in-a-string/",children:"https://leetcode.com/problems/find-all-anagrams-in-a-string/"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(e.p,{children:["Given two strings ",(0,a.jsx)(e.code,{children:"s"})," and ",(0,a.jsx)(e.code,{children:"p"}),", return ",(0,a.jsx)(e.em,{children:"an array of all the start indices of"})," ",(0,a.jsx)(e.code,{children:"p"}),(0,a.jsx)(e.em,{children:"'s anagrams in"})," ",(0,a.jsx)(e.code,{children:"s"}),". You may return the answer in ",(0,a.jsx)(e.strong,{children:"any order"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["An ",(0,a.jsx)(e.strong,{children:"Anagram"})," is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: s = "cbaebabacd", p = "abc"\nOutput: [0,6]\nExplanation:\nThe substring with start index = 0 is "cba", which is an anagram of "abc".\nThe substring with start index = 6 is "bac", which is an anagram of "abc".\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: s = "abab", p = "ab"\nOutput: [0,1,2]\nExplanation:\nThe substring with start index = 0 is "ab", which is an anagram of "ab".\nThe substring with start index = 1 is "ba", which is an anagram of "ab".\nThe substring with start index = 2 is "ab", which is an anagram of "ab".\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"1 <= s.length, p.length <= 3 * 10^4"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"s"})," and ",(0,a.jsx)(e.code,{children:"p"})," consist of lowercase English letters."]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"approach-1-sliding-window",children:"Approach 1: Sliding Window"}),"\n",(0,a.jsxs)(e.p,{children:["First we build the count ",(0,a.jsx)(e.code,{children:"m2"})," of each character in string ",(0,a.jsx)(e.code,{children:"p"}),". Then we keep the window size as ",(0,a.jsx)(e.code,{children:"m"}),". If it is within the window, then we update ",(0,a.jsx)(e.code,{children:"m1"})," until the pointer ",(0,a.jsx)(e.code,{children:"j"})," is out of the window. If ",(0,a.jsx)(e.code,{children:"m1"})," is equal to ",(0,a.jsx)(e.code,{children:"m2"}),", then we can add the current ",(0,a.jsx)(e.code,{children:"i"})," to the answer vector. After that, we need to move decrease ",(0,a.jsx)(e.code,{children:"m1[s[i] - 'a']]"})," by 1 as the character ",(0,a.jsx)(e.code,{children:"s[i]"})," will be out of the window."]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Time Complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mo,{children:"+"}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n + m)"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"+"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})]})]})]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Space Complexity: ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n public:\n  vector<int> findAnagrams(string s, string p) {\n      vector<int> ans, m1(26, 0), m2(26, 0);\n      int n = (int) s.size(), m = (int) p.size(), j = 0;\n      for (auto x : p) m2[x - 'a']++;\n      for (int i = 0; i < n; i++) {\n          while (j < n && j - i + 1 <= m) m1[s[j++] - 'a']++;\n          if (m1 == m2) ans.push_back(i);\n          m1[s[i] - 'a']--;\n      }\n      return ans;\n  }\n};\n"})})]}),(0,a.jsxs)(i,{value:"py",label:"Python",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def findAnagrams(self, s: str, p: str) -> List[int]:\n        # sliding window -> substring with same set of freq of chars\n        ans = []\n        # cnt_s: store frequency of characters in s\n        # cnt_p: store frequency of characters in p\n        cnt_s, cnt_p = [0] * 26, [0] * 26\n        n, m = len(s), len(p)\n        j = 0\n        # count frequency of characters in p\n        for x in p:\n            cnt_p[ord(x) - ord('a')] += 1\n        for i in range(n):\n            # add s[j] to the window if the window is not full\n            while j < n and j - i + 1 <= m:\n                cnt_s[ord(s[j]) - ord('a')] += 1\n                j += 1\n            # check if both frequency matches\n            if cnt_s == cnt_p:\n                # i is the starting index of the window\n                ans.append(i)\n            # remove the leftmost element from the window\n            cnt_s[ord(s[i]) - ord('a')] -= 1\n        return ans\n"})})]})]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>l});var i=s(96540);const a={},t=i.createContext(a);function r(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);