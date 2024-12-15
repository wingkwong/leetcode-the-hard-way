"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[51364],{89941:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"0400-0499/arranging-coins-easy","title":"0441 - Arranging Coins (Easy)","description":"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/arranging-coins/","source":"@site/solutions/0400-0499/0441-arranging-coins-easy.md","sourceDirName":"0400-0499","slug":"/0400-0499/arranging-coins-easy","permalink":"/solutions/0400-0499/arranging-coins-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0441-arranging-coins-easy.md","tags":[],"version":"current","sidebarPosition":441,"frontMatter":{"description":"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/arranging-coins/"},"sidebar":"tutorialSidebar","previous":{"title":"0438 - Find All Anagrams in a String (Medium)","permalink":"/solutions/0400-0499/find-all-anagrams-in-a-string-medium"},"next":{"title":"0443 - String Compression (Medium)","permalink":"/solutions/0400-0499/string-compression-medium"}}');var t=r(74848),s=r(28453);const o={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/arranging-coins/"},a="0441 - Arranging Coins (Easy)",l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Math",id:"approach-1-math",level:2},{value:"Approach 2: Binary Search",id:"approach-2-binary-search",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components},{SolutionAuthor:r,TabItem:i,Tabs:o}=e;return r||p("SolutionAuthor",!0),i||p("TabItem",!0),o||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"0441---arranging-coins-easy",children:"0441 - Arranging Coins (Easy)"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.com/problems/arranging-coins/",children:"https://leetcode.com/problems/arranging-coins/"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(e.p,{children:["You have ",(0,t.jsx)(e.code,{children:"n"})," coins and you want to build a staircase with these coins. The staircase consists of ",(0,t.jsx)(e.code,{children:"k"})," rows where the ",(0,t.jsx)(e.code,{children:"ith"})," row has exactly ",(0,t.jsx)(e.code,{children:"i"})," coins. The last row of the staircase ",(0,t.jsx)(e.strong,{children:"may be"})," incomplete."]}),"\n",(0,t.jsxs)(e.p,{children:["Given the integer ",(0,t.jsx)(e.code,{children:"n"}),", return ",(0,t.jsxs)(e.em,{children:["the number of ",(0,t.jsx)(e.strong,{children:"complete rows"})," of the staircase you will build"]}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2021/04/09/arrangecoins1-grid.jpg",alt:""})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: n = 5\nOutput: 2\nExplanation: Because the 3rd row is incomplete, we return 2.\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2021/04/09/arrangecoins2-grid.jpg",alt:""})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: n = 8\nOutput: 3\nExplanation: Because the 4th row is incomplete, we return 3.\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"1 <= n <= 2^31 - 1"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"approach-1-math",children:"Approach 1: Math"}),"\n",(0,t.jsx)(o,{children:(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(r,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int arrangeCoins(int n) {\n        // Gauss' formula\n        // k * (k + 1) / 2 <= n\n        // k * (k + 1 / 2) ^ 2 - 1 / 4 <= n\n        // k = sqrt(2 * n + 1 / 4) - 1 / 2\n        return sqrt(2 *(long long) n + 0.25) - 0.5;\n    }\n};\n"})})]})}),"\n",(0,t.jsx)(e.h2,{id:"approach-2-binary-search",children:"Approach 2: Binary Search"}),"\n",(0,t.jsx)(e.admonition,{title:"Prerequisite",type:"info",children:(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"../../tutorials/basic-topics/binary-search",children:"Binary Search"})}),"\n"]})}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(r,{name:"@wingkwong"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int arrangeCoins(int n) {\n        // init possible range\n        long long l = 1, r = n;\n        while (l < r) {\n            // get the middle one\n            // for even number of elements, take the upper one\n            long long m = l + (r - l + 1) / 2;\n            // for m rows, how many coins can be put?\n            long long total = m * (m + 1) / 2;\n            // exclude m\n            if (n < total) r = m - 1;\n            // include m\n            else l = m;\n        }\n        return l;\n    }\n};\n"})})]}),(0,t.jsxs)(i,{value:"py",label:"Python",children:[(0,t.jsx)(r,{name:"@radojicic23"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def arrangeCoins(self, n: int) -> int:\n        left = 1\n        right = n\n        while left <= right:\n            mid = (left + right) // 2\n            temp = int(mid * (mid + 1) / 2)\n            if temp == n:\n                return mid\n            elif temp < n:\n                left = mid + 1\n            else:\n                right = mid - 1\n        return right\n"})})]}),(0,t.jsxs)(i,{value:"js",label:"JavaScript",children:[(0,t.jsx)(r,{name:"@radojicic23"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"/**\n * @param {number} n\n * @return {number}\n */\nvar arrangeCoins = function (n) {\n  let left = 1;\n  let right = n;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    let temp = Number((mid * (mid + 1)) / 2);\n    if (temp == n) {\n      return mid;\n    } else if (temp < n) {\n      left = mid + 1;\n    } else {\n      right = mid - 1;\n    }\n  }\n  return right;\n};\n"})})]})]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>a});var i=r(96540);const t={},s=i.createContext(t);function o(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);