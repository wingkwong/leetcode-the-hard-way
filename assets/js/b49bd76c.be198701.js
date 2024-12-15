"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[90810],{58274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"1200-1299/check-if-it-is-a-straight-line-easy","title":"1232 - Check If It Is a Straight Line (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/check-if-it-is-a-straight-line/","source":"@site/solutions/1200-1299/1232-check-if-it-is-a-straight-line-easy.md","sourceDirName":"1200-1299","slug":"/1200-1299/check-if-it-is-a-straight-line-easy","permalink":"/solutions/1200-1299/check-if-it-is-a-straight-line-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1232-check-if-it-is-a-straight-line-easy.md","tags":[],"version":"current","sidebarPosition":1232,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/check-if-it-is-a-straight-line/"},"sidebar":"tutorialSidebar","previous":{"title":"1219 - Path with Maximum Gold (Medium)","permalink":"/solutions/1200-1299/path-with-maximum-gold-medium"},"next":{"title":"1235 - Maximum Profit in Job Scheduling (Hard)","permalink":"/solutions/1200-1299/maximum-profit-in-job-scheduling-hard"}}');var s=n(74848),o=n(28453);const r={description:"Author: @wingkwong | https://leetcode.com/problems/check-if-it-is-a-straight-line/"},c="1232 - Check If It Is a Straight Line (Easy)",a={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Check the Slope",id:"approach-1-check-the-slope",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{SolutionAuthor:n,TabItem:i,Tabs:r}=t;return n||p("SolutionAuthor",!0),i||p("TabItem",!0),r||p("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"1232---check-if-it-is-a-straight-line-easy",children:"1232 - Check If It Is a Straight Line (Easy)"})}),"\n",(0,s.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/check-if-it-is-a-straight-line/",children:"https://leetcode.com/problems/check-if-it-is-a-straight-line/"})}),"\n",(0,s.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(t.p,{children:["You are given an array ",(0,s.jsx)(t.code,{children:"coordinates"}),", ",(0,s.jsx)(t.code,{children:"coordinates[i] = [x, y]"}),", where ",(0,s.jsx)(t.code,{children:"[x, y]"})," represents the coordinate of a point. Check if these points make a straight line in the XY plane."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://assets.leetcode.com/uploads/2019/10/15/untitled-diagram-2.jpg",alt:""})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]\nOutput: true\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://assets.leetcode.com/uploads/2019/10/09/untitled-diagram-1.jpg",alt:""})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]\nOutput: false\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"2 <= coordinates.length <= 1000"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"coordinates[i].length == 2"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"coordinates"})," contains no duplicate point."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"approach-1-check-the-slope",children:"Approach 1: Check the Slope"}),"\n",(0,s.jsx)(t.p,{children:"First we calculate the slope between the first two points. Then starting from the third one, we check if the slope with the previous point is same as the target one. To compare the slope, we can use multiplication instead of division to avoid divide-by-zero and precision issue."}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)(i,{value:"cpp",label:"C++",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool checkStraightLine(vector<vector<int>>& coordinates) {\n        // slope for first two points: dy0 / dx0\n        int dx0 = coordinates[1][0] - coordinates[0][0];\n        int dy0 = coordinates[1][1] - coordinates[0][1];\n        for (int i = 2; i < coordinates.size(); i++) {\n            // slope for the current point and the previous point\n            // = dy / dx\n            int dx = coordinates[i][0] - coordinates[i - 1][0];\n            int dy = coordinates[i][1] - coordinates[i - 1][1];\n            // is dy0 / dx0 = dy / dx ?\n            // it is same as dy * dx0 = dy0 * dx\n            if (dy * dx0 != dy0 * dx) {\n                return false;\n            }\n        }\n        return true;\n    }\n};\n"})})]}),(0,s.jsxs)(i,{value:"rs",label:"Rust",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rs",children:"impl Solution {\n    pub fn check_straight_line(coordinates: Vec<Vec<i32>>) -> bool {\n        // y2 - y1 / x2 - x1 = y3 - y2 / x3 - x2\n        // = (y2 - y1) * (x3 - x2) = (y3 - y2) * (x2 - x1)\n        for w in coordinates.windows(3) {\n            if ((w[1][1] - w[0][1]) * (w[2][0] - w[1][0]) != (w[2][1] - w[1][1]) * (w[1][0] - w[0][0])) {\n                return false;\n            }\n        }\n        true\n    }\n}\n"})})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);