"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7656],{33801:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"2600-2699/find-the-width-of-columns-of-a-grid-easy","title":"2639 - Find the Width of Columns of a Grid (Easy)","description":"Author: @wkw | https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/","source":"@site/solutions/2600-2699/2639-find-the-width-of-columns-of-a-grid-easy.md","sourceDirName":"2600-2699","slug":"/2600-2699/find-the-width-of-columns-of-a-grid-easy","permalink":"/solutions/2600-2699/find-the-width-of-columns-of-a-grid-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2600-2699/2639-find-the-width-of-columns-of-a-grid-easy.md","tags":[],"version":"current","sidebarPosition":2639,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/"},"sidebar":"tutorialSidebar","previous":{"title":"2616 - Minimize the Maximum Difference of Pairs (Medium)","permalink":"/solutions/2600-2699/minimize-the-maximum-difference-of-pairs-medium"},"next":{"title":"2644 - Find the Maximum Divisibility Score (Easy)","permalink":"/solutions/2600-2699/find-the-maximum-divisibility-score-easy"}}');var o=i(86070),r=i(32790);const s={description:"Author: @wkw | https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/"},d="2639 - Find the Width of Columns of a Grid (Easy)",l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Transpose and Count Digits",id:"approach-1-transpose-and-count-digits",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:i,TabItem:t,Tabs:s}=n;return i||m("SolutionAuthor",!0),t||m("TabItem",!0),s||m("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"2639---find-the-width-of-columns-of-a-grid-easy",children:"2639 - Find the Width of Columns of a Grid (Easy)"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/",children:"https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(n.p,{children:["You are given a ",(0,o.jsx)(n.strong,{children:"0-indexed"})," ",(0,o.jsx)(n.code,{children:"m x n"})," integer matrix ",(0,o.jsx)(n.code,{children:"grid"}),". The width of a column is the maximum ",(0,o.jsx)(n.strong,{children:"length"}),"of its integers."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For example, if ",(0,o.jsx)(n.code,{children:"grid = [[-10], [3], [12]]"}),", the width of the only column is ",(0,o.jsx)(n.code,{children:"3"})," since ",(0,o.jsx)(n.code,{children:"-10"})," is of length ",(0,o.jsx)(n.code,{children:"3"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Return ",(0,o.jsx)(n.em,{children:"an integer array"})," ",(0,o.jsx)(n.code,{children:"ans"})," ",(0,o.jsx)(n.em,{children:"of size"})," ",(0,o.jsx)(n.code,{children:"n"})," ",(0,o.jsx)(n.em,{children:"where"})," ",(0,o.jsx)(n.code,{children:"ans[i]"})," ",(0,o.jsx)(n.em,{children:"is the width of the"})," ",(0,o.jsx)(n.code,{children:"ith"})," ",(0,o.jsx)(n.em,{children:"column"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"length"})," of an integer ",(0,o.jsx)(n.code,{children:"x"})," with ",(0,o.jsx)(n.code,{children:"len"})," digits is equal to ",(0,o.jsx)(n.code,{children:"len"})," if ",(0,o.jsx)(n.code,{children:"x"})," is non-negative, and ",(0,o.jsx)(n.code,{children:"len + 1"})," otherwise."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: grid = [[1],[22],[333]]\nOutput: [3]\nExplanation: In the 0th column, 333 is of length 3.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: grid = [[-15,1,3],[15,7,12],[5,6,-2]]\nOutput: [3,1,2]\nExplanation:\nIn the 0th column, only -15 is of length 3.\nIn the 1st column, all integers are of length 1.\nIn the 2nd column, both 12 and -2 are of length 2.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"m == grid.length"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"n == grid[i].length"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"1 <= m, n <= 100"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"-109 <= grid[r][c] <= 1e9"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"approach-1-transpose-and-count-digits",children:"Approach 1: Transpose and Count Digits"}),"\n",(0,o.jsxs)(n.p,{children:["The idea is to first transpose ",(0,o.jsx)(n.code,{children:"grid"})," using ",(0,o.jsx)(n.code,{children:"zip"}),". Then we calculate the number of digits and take the max. Alternatively we can convert to string and check the length."]}),"\n",(0,o.jsx)(s,{children:(0,o.jsxs)(t,{value:"py",label:"Python",children:[(0,o.jsx)(i,{name:"@wkw"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def findColumnWidth(self, grid: List[List[int]]) -> List[int]:\n        def cal(x):\n            res = 0\n            if x == 0:\n                res += 1\n            if x < 0:\n                res += 1\n                x = -x\n            while x > 0:\n                x //= 10\n                res += 1\n            return res\n        # we can further simplifed to\n        # return [max(cal(y) for y in x) for x in zip(*grid)]\n        res = []\n        for x in zip(*grid):\n            mx = 1\n            for y in x:\n                mx = max(mx, cal(y))\n            res.append(mx)\n        return res\n"})})]})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(30758);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);