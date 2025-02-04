"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[98950],{75045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"2400-2499/most-frequent-even-element-easy","title":"2404 - Most Frequent Even Element (Easy)","description":"Author: @wkw | https://leetcode.com/problems/most-frequent-even-element/","source":"@site/solutions/2400-2499/2404-most-frequent-even-element-easy.md","sourceDirName":"2400-2499","slug":"/2400-2499/most-frequent-even-element-easy","permalink":"/solutions/2400-2499/most-frequent-even-element-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2404-most-frequent-even-element-easy.md","tags":[],"version":"current","sidebarPosition":2404,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/most-frequent-even-element/"},"sidebar":"tutorialSidebar","previous":{"title":"2401 - Longest Nice Subarray (Medium)","permalink":"/solutions/2400-2499/longest-nice-subarray-medium"},"next":{"title":"2405 - Optimal Partition of String (Medium)","permalink":"/solutions/2400-2499/optimal-partition-of-string-medium"}}');var r=t(86070),o=t(32790);const i={description:"Author: @wkw | https://leetcode.com/problems/most-frequent-even-element/"},a="2404 - Most Frequent Even Element (Easy)",l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}];function m(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2404---most-frequent-even-element-easy",children:"2404 - Most Frequent Even Element (Easy)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given an integer array ",(0,r.jsx)(n.code,{children:"nums"}),", return ",(0,r.jsx)(n.em,{children:"the most frequent even element"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If there is a tie, return the ",(0,r.jsx)(n.strong,{children:"smallest"})," one. If there is no such element, return ",(0,r.jsx)(n.code,{children:"-1"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: nums = [0,1,2,2,4,4,1]\nOutput: 2\nExplanation:\nThe even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.\nWe return the smallest one, which is 2.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: nums = [4,4,4,9,2,4]\nOutput: 4\nExplanation: 4 is the even element appears the most.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: nums = [29,47,21,41,13,37,25,7]\nOutput: -1\nExplanation: There is no even element.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= nums.length <= 2000"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"0 <= nums[i] <= 10^5"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-hash-map",children:"Approach 1: Hash Map"}),"\n",(0,r.jsx)(t,{name:"@wkw"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int mostFrequentEven(vector<int>& nums) {\n        // init ans to -1 here in case there is no such element\n        int ans = -1, mx = 0;\n        // use hash map to store the frequency of each element\n        map<int, int> m;\n        for (auto &x : nums) m[x]++;\n        // iterate each element in the hash map\n        for (auto &x : m) {\n            // x.first is the element\n            // x.second is the frequency of that element\n            // if the element is even -> x.first % 2 == 0\n            // and if the count is greater than the current maximum -> x.second > mx\n            if (x.first % 2 == 0 && x.second > mx) {\n                // then we can update the maximum\n                mx = x.second;\n                // and this element can be the answer\n                ans = x.first;\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},32790:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(30758);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);