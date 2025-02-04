"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8681],{97963:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"0300-0399/power-of-four-easy","title":"0342 - Power of Four (Easy)","description":"Author: @wkw | https://leetcode.com/problems/power-of-four/","source":"@site/solutions/0300-0399/0342-power-of-four-easy.md","sourceDirName":"0300-0399","slug":"/0300-0399/power-of-four-easy","permalink":"/solutions/0300-0399/power-of-four-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0342-power-of-four-easy.md","tags":[{"inline":true,"label":"Math","permalink":"/solutions/tags/math"},{"inline":true,"label":"Bit Manipulation","permalink":"/solutions/tags/bit-manipulation"},{"inline":true,"label":"Recursion","permalink":"/solutions/tags/recursion"}],"version":"current","sidebarPosition":342,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/power-of-four/","tags":["Math","Bit Manipulation","Recursion"]},"sidebar":"tutorialSidebar","previous":{"title":"0338 - Counting Bits (Easy)","permalink":"/solutions/0300-0399/counting-bits-easy"},"next":{"title":"0344 - Reverse String (Easy)","permalink":"/solutions/0300-0399/reverse-string-easy"}}');var r=o(86070),i=o(32790);const s={description:"Author: @wkw | https://leetcode.com/problems/power-of-four/",tags:["Math","Bit Manipulation","Recursion"]},l="0342 - Power of Four (Easy)",a={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2},{value:"Approach 2: Bit Manipulation",id:"approach-2-bit-manipulation",level:2}];function u(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"0342---power-of-four-easy",children:"0342 - Power of Four (Easy)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given an integer ",(0,r.jsx)(n.code,{children:"n"}),", return ",(0,r.jsx)(n.em,{children:"true if it is a power of four. Otherwise, return false"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["An integer ",(0,r.jsx)(n.code,{children:"n"})," is a power of four, if there exists an integer ",(0,r.jsx)(n.code,{children:"x"})," such that ",(0,r.jsx)(n.code,{children:"n == 4 ^ x"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 16\nOutput: true\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 5\nOutput: false\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: n = 1\nOutput: true\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"-2^31 <= n <= 2^31 - 1"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Follow up:"})," Could you solve it without loops/recursion?"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-binary-search",children:"Approach 1: Binary Search"}),"\n",(0,r.jsx)(o,{name:"@wkw"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isPowerOfFour(int n) {\n\t    // the idea is to use binary search to find x to see if 4 ^ x = n is true or false\n        int l = 0, r = (int) log(pow(2, 31)) / log(4);\n         while (l < r) {\n            // get the middle one\n            // for even number of elements, take the lower one\n            int m = l + (r - l) / 2;\n            // exclude m\n            if (pow(4, m) < n) l = m + 1;\n            // include m\n            else r = m;\n        }\n\t\t// check if 4 ^ l is n\n        // if so, then n is a power of four, otherwise it is not\n        return pow(4, l) == n;\n    }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"approach-2-bit-manipulation",children:"Approach 2: Bit Manipulation"}),"\n",(0,r.jsx)(o,{name:"@wkw"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isPowerOfFour(int num) {\n        // 4: 100\n        // 16: 10000\n        // observation:\n        // count of 1s is 1 and the number of trailing zeros is even\n        return __builtin_popcount(num) == 1 && // only 1 bit is set\n              (__builtin_ctz(num) & 1) == 0;     // with even trailing zeros\n    }\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},32790:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(30758);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);