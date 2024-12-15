"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[35264],{13310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"1000-1099/two-city-scheduling-medium","title":"1029 - Two City Scheduling (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/two-city-scheduling/","source":"@site/solutions/1000-1099/1029-two-city-scheduling-medium.md","sourceDirName":"1000-1099","slug":"/1000-1099/two-city-scheduling-medium","permalink":"/solutions/1000-1099/two-city-scheduling-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1029-two-city-scheduling-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Sorting","permalink":"/solutions/tags/sorting"},{"inline":true,"label":"Greedy","permalink":"/solutions/tags/greedy"}],"version":"current","sidebarPosition":1029,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/two-city-scheduling/","tags":["Array","Sorting","Greedy"]},"sidebar":"tutorialSidebar","previous":{"title":"1019 - Next Greater Node In Linked List (Medium)","permalink":"/solutions/1000-1099/next-greater-node-in-linked-list"},"next":{"title":"1043 - Partition Array for Maximum Sum (Medium)","permalink":"/solutions/1000-1099/partition-array-for-maximum-sum-medium"}}');var s=n(74848),o=n(28453);const r={description:"Author: @wingkwong | https://leetcode.com/problems/two-city-scheduling/",tags:["Array","Sorting","Greedy"]},c="1029 - Two City Scheduling (Medium)",l={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting + Greedy",id:"approach-1-sorting--greedy",level:2}];function d(e){const t={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"1029---two-city-scheduling-medium",children:"1029 - Two City Scheduling (Medium)"})}),"\n",(0,s.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/two-city-scheduling/",children:"https://leetcode.com/problems/two-city-scheduling/"})}),"\n",(0,s.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(t.p,{children:["A company is planning to interview ",(0,s.jsx)(t.code,{children:"2n"})," people. Given the array ",(0,s.jsx)(t.code,{children:"costs"})," where ",(0,s.jsx)(t.code,{children:"costs[i] = [aCosti, bCosti]"}),", the cost of flying the ",(0,s.jsx)(t.code,{children:"ith"})," person to city ",(0,s.jsx)(t.code,{children:"a"})," is ",(0,s.jsx)(t.code,{children:"aCosti"}),", and the cost of flying the ",(0,s.jsx)(t.code,{children:"ith"})," person to city ",(0,s.jsx)(t.code,{children:"b"})," is ",(0,s.jsx)(t.code,{children:"bCosti"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Return ",(0,s.jsx)(t.em,{children:"the minimum cost to fly every person to a city"})," such that exactly ",(0,s.jsx)(t.code,{children:"n"})," people arrive in each city."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Input: costs = [[10,20],[30,200],[400,50],[30,20]]\nOutput: 110\nExplanation: \nThe first person goes to city A for a cost of 10.\nThe second person goes to city A for a cost of 30.\nThe third person goes to city B for a cost of 50.\nThe fourth person goes to city B for a cost of 20.\n\nThe total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]\nOutput: 1859\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Input: costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]\nOutput: 3086\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"2 * n == costs.length"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"2 <= costs.length <= 100"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"costs.length"})," is even."]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"1 <= aCosti, bCosti <= 1000"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"approach-1-sorting--greedy",children:"Approach 1: Sorting + Greedy"}),"\n",(0,s.jsxs)(t.p,{children:["If we need to spend more money to fly to city B, then it's better to send it to city A, and vice versa. Therefore, we sort the input by their difference (i.e. how much a company can save) and take the first ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsx)(t.mrow,{children:(0,s.jsx)(t.mi,{children:"n"})}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"n"})]})})]})," to city A and the rest of them to city B."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int twoCitySchedCost(vector<vector<int>>& costs) {\n        int n = costs.size(), ans = 0;\n        // sort by the diff\n        sort(costs.begin(), costs.end(), [&](const vector<int>& x, const vector<int>& y) {\n           return x[1] - x[0] > y[1] - y[0]; \n        });\n        for (int i = 0; i < n / 2; i++) {\n            // cost to fly i-th person to city A\n            ans += costs[i][0];\n            // cost to fly (n - 1 - i)-th person to city B\n            ans += costs[n - 1 - i][1];\n        }\n        return ans;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);