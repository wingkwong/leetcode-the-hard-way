"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[81820],{12253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"1500-1599/three-consecutive-odds-easy","title":"1550 - Three Consecutive Odds (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/three-consecutive-odds/","source":"@site/solutions/1500-1599/1550-three-consecutive-odds-easy.md","sourceDirName":"1500-1599","slug":"/1500-1599/three-consecutive-odds-easy","permalink":"/solutions/1500-1599/three-consecutive-odds-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1550-three-consecutive-odds-easy.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"}],"version":"current","sidebarPosition":1550,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/three-consecutive-odds/","tags":["Array"]},"sidebar":"tutorialSidebar","previous":{"title":"1547 - Minimum Cost to Cut a Stick (Hard)","permalink":"/solutions/1500-1599/minimum-cost-to-cut-a-stick-hard"},"next":{"title":"1572 - Matrix Diagonal Sum (Easy)","permalink":"/solutions/1500-1599/matrix-diagonal-sum-easy"}}');var o=n(74848),s=n(28453);const i={description:"Author: @wingkwong | https://leetcode.com/problems/three-consecutive-odds/",tags:["Array"]},c="1550 - Three Consecutive Odds (Easy)",a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SolutionAuthor:n,TabItem:r,Tabs:i}=t;return n||u("SolutionAuthor",!0),r||u("TabItem",!0),i||u("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"1550---three-consecutive-odds-easy",children:"1550 - Three Consecutive Odds (Easy)"})}),"\n",(0,o.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/three-consecutive-odds/",children:"https://leetcode.com/problems/three-consecutive-odds/"})}),"\n",(0,o.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(t.p,{children:["Given an integer array ",(0,o.jsx)(t.code,{children:"arr"}),", return ",(0,o.jsx)(t.code,{children:"true"}),"\xa0if there are three consecutive odd numbers in the array. Otherwise, return\xa0",(0,o.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Input: arr = [2,6,4,1]\nOutput: false\nExplanation: There are no three consecutive odds.\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Input: arr = [1,2,34,3,4,5,7,23,12]\nOutput: true\nExplanation: [5,7,23] are three consecutive odds.\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"1 <= arr.length <= 1000"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"1 <= arr[i] <= 1000"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"approach-1-tbc",children:"Approach 1: TBC"}),"\n",(0,o.jsx)(i,{children:(0,o.jsxs)(r,{value:"py",label:"Python",children:[(0,o.jsx)(n,{name:"@wingkwong"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:"class Solution:\n    def threeConsecutiveOdds(self, arr: List[int]) -> bool:\n        for i in range(1, len(arr) - 1):\n            if arr[i - 1] & 1 and arr[i] & 1 and arr[i + 1] & 1:\n                return True\n        return False\n"})})]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);