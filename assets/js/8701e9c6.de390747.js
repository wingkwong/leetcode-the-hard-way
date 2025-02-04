"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6256],{47840:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>m,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"2600-2699/minimize-the-maximum-difference-of-pairs-medium","title":"2616 - Minimize the Maximum Difference of Pairs (Medium)","description":"Author: @wkw | https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/","source":"@site/solutions/2600-2699/2616-minimize-the-maximum-difference-of-pairs-medium.md","sourceDirName":"2600-2699","slug":"/2600-2699/minimize-the-maximum-difference-of-pairs-medium","permalink":"/solutions/2600-2699/minimize-the-maximum-difference-of-pairs-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2600-2699/2616-minimize-the-maximum-difference-of-pairs-medium.md","tags":[],"version":"current","sidebarPosition":2616,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/"},"sidebar":"tutorialSidebar","previous":{"title":"2615 - Sum of Distances (Medium)","permalink":"/solutions/2600-2699/sum-of-distances-medium"},"next":{"title":"2639 - Find the Width of Columns of a Grid (Easy)","permalink":"/solutions/2600-2699/find-the-width-of-columns-of-a-grid-easy"}}');var t=i(86070),s=i(32790);const o={description:"Author: @wkw | https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/"},m="2616 - Minimize the Maximum Difference of Pairs (Medium)",a={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SolutionAuthor:i,TabItem:r,Tabs:o}=n;return i||h("SolutionAuthor",!0),r||h("TabItem",!0),o||h("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"2616---minimize-the-maximum-difference-of-pairs-medium",children:"2616 - Minimize the Maximum Difference of Pairs (Medium)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/",children:"https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["You are given a ",(0,t.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,t.jsx)(n.code,{children:"nums"})," and an integer ",(0,t.jsx)(n.code,{children:"p"}),". Find ",(0,t.jsx)(n.code,{children:"p"})," pairs of indices of ",(0,t.jsx)(n.code,{children:"nums"})," such that the ",(0,t.jsx)(n.strong,{children:"maximum"})," difference amongst all the pairs is ",(0,t.jsx)(n.strong,{children:"minimized"}),". Also, ensure no index appears more than once amongst the ",(0,t.jsx)(n.code,{children:"p"})," pairs."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that for a pair of elements at the index ",(0,t.jsx)(n.code,{children:"i"})," and ",(0,t.jsx)(n.code,{children:"j"}),", the difference of this pair is ",(0,t.jsx)(n.code,{children:"|nums[i] - nums[j]|"}),", where ",(0,t.jsx)(n.code,{children:"|x|"})," represents the ",(0,t.jsx)(n.strong,{children:"absolute"})," ",(0,t.jsx)(n.strong,{children:"value"})," of ",(0,t.jsx)(n.code,{children:"x"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsxs)(n.em,{children:["the ",(0,t.jsx)(n.strong,{children:"minimum"})," ",(0,t.jsx)(n.strong,{children:"maximum"})," difference among all"]}),(0,t.jsx)(n.code,{children:"p"})," ",(0,t.jsx)(n.em,{children:"pairs."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [10,1,2,7,1,3], p = 2\nOutput: 1\nExplanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5.\nThe maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [4,2,1,2], p = 1\nOutput: 0\nExplanation: Let the indices 1 and 3 form a pair. The difference of that pair is |2 - 2| = 0, which is the minimum we can attain.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums.length <= 10^5"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0 <= nums[i] <= 10^9"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0 <= p <= (nums.length)/2"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-binary-search",children:"Approach 1: Binary Search"}),"\n",(0,t.jsx)(o,{children:(0,t.jsxs)(r,{value:"cpp",label:"C++",children:[(0,t.jsx)(i,{name:"@wkw"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // min max -> think of binary search\n    int minimizeMax(vector<int>& nums, int p) {\n        // sort the input first\n        sort(nums.begin(), nums.end());\n        // the possible difference ranges from 0 to the largest value - the smallest value\n        int n = nums.size(), l = 0 , r = nums.back() - nums.front();\n        // binary search the min max diff\n        while (l < r) {\n            int m = l + (r - l) / 2, cnt = 0;\n            for (int i = 1; i < n; i++) {\n                // we can make a pair\n                if (nums[i] - nums[i - 1] <= m) {\n                    // increase the number of pairs\n                    cnt += 1;\n                    // increase i by 1\n                    // since it is included in the pair already\n                    i += 1;\n                }\n            }\n            // not enough pairs, move l pointer excluding m\n            if (cnt < p) l = m + 1;\n            // too many pairs, move r to m\n            else r = m;\n        }\n        return l;\n    }\n};\n"})})]})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>m});var r=i(30758);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);