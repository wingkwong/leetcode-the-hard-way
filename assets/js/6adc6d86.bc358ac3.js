"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[29707],{52090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(85893),r=t(11151);const a={description:"Author: @wingkwong, @jaffar | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",tags:["Hash Table","String","Counting"]},o="1347 - Minimum Number of Steps to Make Two Strings Anagram (Easy)",i={id:"1300-1399/minimum-number-of-steps-to-make-two-strings-anagram-medium",title:"1347 - Minimum Number of Steps to Make Two Strings Anagram (Easy)",description:"Author: @wingkwong, @jaffar | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",source:"@site/solutions/1300-1399/1347-minimum-number-of-steps-to-make-two-strings-anagram-medium.md",sourceDirName:"1300-1399",slug:"/1300-1399/minimum-number-of-steps-to-make-two-strings-anagram-medium",permalink:"/solutions/1300-1399/minimum-number-of-steps-to-make-two-strings-anagram-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1347-minimum-number-of-steps-to-make-two-strings-anagram-medium.md",tags:[{inline:!0,label:"Hash Table",permalink:"/solutions/tags/hash-table"},{inline:!0,label:"String",permalink:"/solutions/tags/string"},{inline:!0,label:"Counting",permalink:"/solutions/tags/counting"}],version:"current",sidebarPosition:1347,frontMatter:{description:"Author: @wingkwong, @jaffar | https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",tags:["Hash Table","String","Counting"]},sidebar:"tutorialSidebar",previous:{title:"1346 - Check If N and Its Double Exist (Easy)",permalink:"/solutions/1300-1399/check-if-n-and-its-double-exist-easy"},next:{title:"1349 - Maximum Students Taking Exam (Hard)",permalink:"/solutions/1300-1399/maximum-students-taking-exam-hard"}},m={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Frequency Count",id:"approach-1-frequency-count",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t,TabItem:a,Tabs:o}=n;return t||d("SolutionAuthor",!0),a||d("TabItem",!0),o||d("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"1347---minimum-number-of-steps-to-make-two-strings-anagram-easy",children:"1347 - Minimum Number of Steps to Make Two Strings Anagram (Easy)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/",children:"https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["You are given two strings of the same length ",(0,s.jsx)(n.code,{children:"s"})," and ",(0,s.jsx)(n.code,{children:"t"}),". In one step you can choose ",(0,s.jsx)(n.strong,{children:"any character"})," of ",(0,s.jsx)(n.code,{children:"t"})," and replace it with ",(0,s.jsx)(n.strong,{children:"another character"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsx)(n.em,{children:"the minimum number of steps"})," to make ",(0,s.jsx)(n.code,{children:"t"})," an anagram of ",(0,s.jsx)(n.code,{children:"s"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.strong,{children:"Anagram"})," of a string is a string that contains the same characters with a different (or the same) ordering."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "bab", t = "aba"\nOutput: 1\nExplanation: Replace the first \'a\' in t with b, t = "bba" which is anagram of s.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: s = \"leetcode\", t = \"practice\"\nOutput: 5\nExplanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input: s = "anagram", t = "mangaar"\nOutput: 0\nExplanation: "anagram" and "mangaar" are anagrams. \n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= s.length <= 5 * 10^4"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"s.length == t.length"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"})," and ",(0,s.jsx)(n.code,{children:"t"})," consist of lowercase English letters only."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-frequency-count",children:"Approach 1: Frequency Count"}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsxs)(a,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int minSteps(string s, string t) {\n        int ans = 0;\n        unordered_map<int, int> m;\n        // Count the frequency of characters of each string.\n        // Loop over all characters if the frequency of a character in t is less than that in s\n        // then add the difference between the frequencies to the answer.\n        for (auto x : s) m[x - 'a']++;\n        for (auto x : t) m[x - 'a']--;\n        for (auto x : m) if (x.second > 0) ans += x.second;\n        return ans;\n    }\n};\n"})})]}),(0,s.jsxs)(a,{value:"py",label:"Python",children:[(0,s.jsx)(t,{name:"@jaffar"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def minSteps(self, s: str, t: str) -> int:\n        return sum((Counter(s) - Counter(t)).values())\n"})})]})]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(67294);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);