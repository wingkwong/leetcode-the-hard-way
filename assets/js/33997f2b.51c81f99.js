"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69092],{94782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"0700-0799/subarray-product-less-than-k-medium","title":"0713 - Subarray Product Less Than K (Medium)","description":"Author: @wkw | https://leetcode.com/problems/subarray-product-less-than-k/","source":"@site/solutions/0700-0799/0713-subarray-product-less-than-k-medium.md","sourceDirName":"0700-0799","slug":"/0700-0799/subarray-product-less-than-k-medium","permalink":"/solutions/0700-0799/subarray-product-less-than-k-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0713-subarray-product-less-than-k-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Sliding Window","permalink":"/solutions/tags/sliding-window"}],"version":"current","sidebarPosition":713,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/subarray-product-less-than-k/","tags":["Array","Sliding Window"]},"sidebar":"tutorialSidebar","previous":{"title":"0706 - Design HashMap (Medium)","permalink":"/solutions/0700-0799/design-hashmap-medium"},"next":{"title":"0718 - Maximum Length of Repeated Subarray (Medium)","permalink":"/solutions/0700-0799/maximum-length-of-repeated-subarray-medium"}}');var s=t(86070),i=t(32790);const o={description:"Author: @wkw | https://leetcode.com/problems/subarray-product-less-than-k/",tags:["Array","Sliding Window"]},a="0713 - Subarray Product Less Than K (Medium)",l={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:o}=n;return t||h("SolutionAuthor",!0),r||h("TabItem",!0),o||h("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"0713---subarray-product-less-than-k-medium",children:"0713 - Subarray Product Less Than K (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/subarray-product-less-than-k/",children:"https://leetcode.com/problems/subarray-product-less-than-k/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given an array of integers ",(0,s.jsx)(n.code,{children:"nums"})," and an integer ",(0,s.jsx)(n.code,{children:"k"}),", return ",(0,s.jsx)(n.em,{children:"the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than"}),(0,s.jsx)(n.code,{children:"k"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [10,5,2,6], k = 100\nOutput: 8\nExplanation: The 8 subarrays that have product less than 100 are:\n[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]\nNote that [10, 5, 2] is not included as the product of 100 is not strictly less than k.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [1,2,3], k = 0\nOutput: 0\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums.length <= 3 * 10^4"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums[i] <= 1000"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= k <= 10^6"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-sliding-window",children:"Approach 1: Sliding Window"}),"\n",(0,s.jsx)(o,{children:(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wkw"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int numSubarrayProductLessThanK(vector<int>& nums, int k) {\n        // edge case\n        if (k <= 1) return 0;\n        int n = nums.size(), p = 1, ans = 0, i = 0;\n        // standard sliding window\n        for (int j = 0; j < n; j++){\n            // step 1: expand the window\n            p *= nums[j];\n            // step 2: shrink the window if applicable\n            while (p >= k) p /= nums[i++];\n            // step 3: add the window size to answer\n            ans += j - i + 1;\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(30758);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);