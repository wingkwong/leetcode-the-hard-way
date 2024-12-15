"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[75087],{52302:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"0200-0299/strobogrammatic-number-easy","title":"0246 - Strobogrammatic Number (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/strobogrammatic-number/","source":"@site/solutions/0200-0299/0246-strobogrammatic-number-easy.md","sourceDirName":"0200-0299","slug":"/0200-0299/strobogrammatic-number-easy","permalink":"/solutions/0200-0299/strobogrammatic-number-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0246-strobogrammatic-number-easy.md","tags":[{"inline":true,"label":"Hash Map","permalink":"/solutions/tags/hash-map"}],"version":"current","sidebarPosition":246,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/strobogrammatic-number/","tags":["Hash Map"]},"sidebar":"tutorialSidebar","previous":{"title":"0242 - Valid Anagram (Easy)","permalink":"/solutions/0200-0299/valid-anagram-easy"},"next":{"title":"0258 - Add Digits (Easy)","permalink":"/solutions/0200-0299/add-digits-easy"}}');var s=r(74848),o=r(28453);const i={description:"Author: @wingkwong | https://leetcode.com/problems/strobogrammatic-number/",tags:["Hash Map"]},a="0246 - Strobogrammatic Number (Easy)",c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Pointers",id:"approach-1-two-pointers",level:2}];function m(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"0246---strobogrammatic-number-easy",children:"0246 - Strobogrammatic Number (Easy)"})}),"\n",(0,s.jsxs)(n.p,{children:["Given a string ",(0,s.jsx)(n.code,{children:"num"})," which represents an integer, return ",(0,s.jsx)(n.code,{children:"true"})," ",(0,s.jsx)(n.em,{children:"if"})," ",(0,s.jsx)(n.code,{children:"num"})," ",(0,s.jsxs)(n.em,{children:["is a ",(0,s.jsx)(n.strong,{children:"strobogrammatic number"})]}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"strobogrammatic number"})," is a number that looks the same when rotated ",(0,s.jsx)(n.code,{children:"180"})," degrees (looked at upside down)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)("pre",{children:(0,s.jsxs)("code",{children:['Input: num = "69"\n',(0,s.jsx)("strong",{children:"Output:\n"})," true"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)("pre",{children:(0,s.jsxs)("code",{children:['Input: num = "88"\n',(0,s.jsx)("strong",{children:"Output:\n"})," true"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)("pre",{children:(0,s.jsxs)("code",{children:['Input: num = "962"\n',(0,s.jsx)("strong",{children:"Output:\n"})," false"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= num.length <= 50"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"num"})," consists of only digits."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"num"})," does not contain any leading zeros except for zero itself."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/strobogrammatic-number/",children:"https://leetcode.com/problems/strobogrammatic-number/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["First we need to find out which numbers are still valid after rotated by 180 degrees. There are only three cases. First it becomes an invalid number, such as ",(0,s.jsx)(n.code,{children:"2"}),", ",(0,s.jsx)(n.code,{children:"3"}),", ",(0,s.jsx)(n.code,{children:"4"})," and etc. The second case is the number remains the same, such as ",(0,s.jsx)(n.code,{children:"0"}),", ",(0,s.jsx)(n.code,{children:"1"})," and ",(0,s.jsx)(n.code,{children:"8"}),". The third case is it becomes another number, such as ",(0,s.jsx)(n.code,{children:"6 -> 9"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Therefore, we can use two pointers from the left and right to check if the number can be rotatable. If so, would the rotated number be the same as the target number."}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-two-pointers",children:"Approach 1: Two Pointers"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isStrobogrammatic(string num) {\n        // m[0] = 0\n        // m[1] = 1\n        // m[2] = -1\n        // m[3] = -1\n        // m[4] = -1\n        // m[5] = -1\n        // m[6] = 9\n        // m[7] = -1\n        // m[8] = 8\n        // m[9] = 6\n        vector<int> m = {0, 1, -1, -1, -1, -1, 9, -1, 8, 6};\n        int n = num.size();\n        // each time we check two characters (num[0], num[n - 1 - 1]), (num[1], num[n - i - 2]), ... and so on\n        // it could be same character if the length of num is odd, i.e. num[n / 2]\n        for (int i = 0; i < n + 1 / 2; i++) {\n            if (m[num[i] - '0'] != num[n - 1 - i] - '0') {\n                return false;\n            }\n        }\n        return true;\n    }\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);