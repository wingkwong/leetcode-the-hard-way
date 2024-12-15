"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[43725],{5238:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"2900-2999/subarrays-distinct-element-sum-of-squares-i-easy","title":"2913 - Subarrays Distinct Element Sum of Squares I (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/","source":"@site/solutions/2900-2999/2913-subarrays-distinct-element-sum-of-squares-i-easy.md","sourceDirName":"2900-2999","slug":"/2900-2999/subarrays-distinct-element-sum-of-squares-i-easy","permalink":"/solutions/2900-2999/subarrays-distinct-element-sum-of-squares-i-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2900-2999/2913-subarrays-distinct-element-sum-of-squares-i-easy.md","tags":[],"version":"current","sidebarPosition":2913,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/"},"sidebar":"tutorialSidebar","previous":{"title":"2903 - Find Indices With Index and Value Difference I (Easy)","permalink":"/solutions/2900-2999/find-indices-with-index-and-value-difference-i-easy"},"next":{"title":"2914 - Minimum Number of Changes to Make Binary String Beautiful (Medium)","permalink":"/solutions/2900-2999/minimum-number-of-changes-to-make-binary-string-beautiful-medium"}}');var i=n(74848),a=n(28453);const r={description:"Author: @wingkwong | https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/"},c="2913 - Subarrays Distinct Element Sum of Squares I (Easy)",l={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}];function d(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{SolutionAuthor:n,TabItem:t,Tabs:r}=s;return n||u("SolutionAuthor",!0),t||u("TabItem",!0),r||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"2913---subarrays-distinct-element-sum-of-squares-i-easy",children:"2913 - Subarrays Distinct Element Sum of Squares I (Easy)"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/",children:"https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(s.p,{children:["You are given a ",(0,i.jsx)(s.strong,{children:"0-indexed"}),"integer array ",(0,i.jsx)(s.code,{children:"nums"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"distinct count"})," of a subarray of ",(0,i.jsx)(s.code,{children:"nums"})," is defined as:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Let ",(0,i.jsx)(s.code,{children:"nums[i..j]"})," be a subarray of ",(0,i.jsx)(s.code,{children:"nums"})," consisting of all the indices from ",(0,i.jsx)(s.code,{children:"i"})," to ",(0,i.jsx)(s.code,{children:"j"})," such that ",(0,i.jsx)(s.code,{children:"0 <= i <= j < nums.length"}),". Then the number of distinct values in ",(0,i.jsx)(s.code,{children:"nums[i..j]"})," is called the distinct count of ",(0,i.jsx)(s.code,{children:"nums[i..j]"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Return ",(0,i.jsxs)(s.em,{children:["the sum of the ",(0,i.jsx)(s.strong,{children:"squares"})," of ",(0,i.jsx)(s.strong,{children:"distinct counts"})," of all subarrays of"]}),(0,i.jsx)(s.code,{children:"nums"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["A subarray is a contiguous ",(0,i.jsx)(s.strong,{children:"non-empty"})," sequence of elements within an array."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: nums = [1,2,1]\nOutput: 15\nExplanation: Six possible subarrays are:\n[1]: 1 distinct value\n[2]: 1 distinct value\n[1]: 1 distinct value\n[1,2]: 2 distinct values\n[2,1]: 2 distinct values\n[1,2,1]: 2 distinct values\nThe sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 + 22 + 22 + 22 = 15.\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: nums = [1,1]\nOutput: 3\nExplanation: Three possible subarrays are:\n[1]: 1 distinct value\n[1]: 1 distinct value\n[1,1]: 1 distinct value\nThe sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 = 3.\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"1 <= nums.length <= 100"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"1 <= nums[i] <= 100"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,i.jsxs)(s.p,{children:["Since the constraints are small, we can brute force each subarray by using two loops. For each element, we put it to a hash map. If the occurrence is ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mn,{children:"1"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(s.span,{className:"mord",children:"1"})]})})]}),", meaning this element is first appeared. We increase the distinct counts ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"t"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"cnt"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6151em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]})," by ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mn,{children:"1"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(s.span,{className:"mord",children:"1"})]})})]}),". We calculate the sum of squares accordingly."]}),"\n",(0,i.jsx)(r,{children:(0,i.jsxs)(t,{value:"cpp",label:"C++",children:[(0,i.jsx)(n,{name:"@wingkwong"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int sumCounts(vector<int>& nums) {\n        int n = nums.size(), ans = 0;\n        for (int i = 0; i < n; i++) {\n            unordered_map<int, int> m;\n            int cnt = 0;\n            for (int j = i; j < n; j++) {\n                if (++m[nums[j]] == 1) cnt += 1;\n                ans += cnt * cnt;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function m(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var t=n(96540);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);