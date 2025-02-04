"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7560],{30959:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"1700-1799/buildings-with-an-ocean-view-medium","title":"1762 - Buildings With an Ocean View (Medium)","description":"Author: @wkw | https://leetcode.com/problems/buildings-with-an-ocean-view/","source":"@site/solutions/1700-1799/1762-buildings-with-an-ocean-view-medium.md","sourceDirName":"1700-1799","slug":"/1700-1799/buildings-with-an-ocean-view-medium","permalink":"/solutions/1700-1799/buildings-with-an-ocean-view-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1700-1799/1762-buildings-with-an-ocean-view-medium.md","tags":[],"version":"current","sidebarPosition":1762,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/buildings-with-an-ocean-view/"},"sidebar":"tutorialSidebar","previous":{"title":"1758 - Minimum Changes To Make Alternating Binary String (Easy)","permalink":"/solutions/1700-1799/minimum-changes-to-make-alternating-binary-string-easy"},"next":{"title":"1768 - Merge Strings Alternately (Easy)","permalink":"/solutions/1700-1799/merge-strings-alternately-easy"}}');var s=i(86070),a=i(32790);const r={description:"Author: @wkw | https://leetcode.com/problems/buildings-with-an-ocean-view/"},l="1762 - Buildings With an Ocean View (Medium)",h={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Backwards",id:"approach-1-backwards",level:2}];function c(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{SolutionAuthor:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1762---buildings-with-an-ocean-view-medium",children:"1762 - Buildings With an Ocean View (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/buildings-with-an-ocean-view/",children:"https://leetcode.com/problems/buildings-with-an-ocean-view/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["There are ",(0,s.jsx)(n.code,{children:"n"})," buildings in a line. You are given an integer array ",(0,s.jsx)(n.code,{children:"heights"})," of size ",(0,s.jsx)(n.code,{children:"n"})," that represents the heights of the buildings in the line."]}),"\n",(0,s.jsxs)(n.p,{children:["The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a ",(0,s.jsx)(n.strong,{children:"smaller"})," height."]}),"\n",(0,s.jsxs)(n.p,{children:["Return a list of indices ",(0,s.jsx)(n.strong,{children:"(0-indexed)"})," of buildings that have an ocean view, sorted in increasing order."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: heights = [4,2,3,1]\nOutput: [0,2,3]\nExplanation: Building 1 (0-indexed) does not have an ocean view because building 2 is taller.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: heights = [4,3,2,1]\nOutput: [0,1,2,3]\nExplanation: All the buildings have an ocean view.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: heights = [1,3,2,4]\nOutput: [3]\nExplanation: Only building 3 has an ocean view.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= heights.length <= 10^5"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= heights[i] <= 10^9"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-backwards",children:"Approach 1: Backwards"}),"\n",(0,s.jsxs)(n.p,{children:["We iterate ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"h"}),(0,s.jsx)(n.mi,{children:"e"}),(0,s.jsx)(n.mi,{children:"i"}),(0,s.jsx)(n.mi,{children:"g"}),(0,s.jsx)(n.mi,{children:"h"}),(0,s.jsx)(n.mi,{children:"t"}),(0,s.jsx)(n.mi,{children:"s"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"heights"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"i"}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"s"})]})})]})," from right to left and track the maximum height. If the current building is taller than the maximum height, it means it has an ocean view and we can set it as the new max height."]}),"\n",(0,s.jsx)(n.p,{children:"Since we do it backwards, we reverse the answer at the end."}),"\n",(0,s.jsx)(i,{name:"@wkw"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> findBuildings(vector<int>& heights) {\n        int n = heights.size(), prev_mx = -1;\n        vector<int> ans;\n        // do it backwards\n        for (int i = n - 1; i >= 0; i--) {\n            // check if the current building is taller than the prev max\n            if (heights[i] > prev_mx) {\n                // if so, then this buildign has an ocean view\n                ans.push_back(i);\n                // update prev_mx\n                prev_mx = heights[i];\n            }\n        }\n        // reverse the order\n        reverse(ans.begin(), ans.end());\n        return ans;\n    }\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},32790:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(30758);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);