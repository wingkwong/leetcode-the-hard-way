"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[62305],{47384:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>m,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"0500-0599/subarray-sum-equals-k-medium","title":"0560 - Subarray Sum Equals K (Medium)","description":"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/subarray-sum-equals-k/","source":"@site/solutions/0500-0599/0560-subarray-sum-equals-k-medium.md","sourceDirName":"0500-0599","slug":"/0500-0599/subarray-sum-equals-k-medium","permalink":"/solutions/0500-0599/subarray-sum-equals-k-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0500-0599/0560-subarray-sum-equals-k-medium.md","tags":[],"version":"current","sidebarPosition":560,"frontMatter":{"description":"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/subarray-sum-equals-k/"},"sidebar":"tutorialSidebar","previous":{"title":"0559 - Maximum Depth of N-ary Tree (Easy)","permalink":"/solutions/0500-0599/maximum-depth-of-n-ary-tree-easy"},"next":{"title":"0567 - Permutation in String (Medium)","permalink":"/solutions/0500-0599/permutation-in-string-medium"}}');var r=a(74848),l=a(28453);const t={description:"Author: @wingkwong, @ganajayant | https://leetcode.com/problems/subarray-sum-equals-k/"},m="0560 - Subarray Sum Equals K (Medium)",i={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components},{SolutionAuthor:a,TabItem:n,Tabs:t}=e;return a||o("SolutionAuthor",!0),n||o("TabItem",!0),t||o("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"0560---subarray-sum-equals-k-medium",children:"0560 - Subarray Sum Equals K (Medium)"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/subarray-sum-equals-k/",children:"https://leetcode.com/problems/subarray-sum-equals-k/"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(e.p,{children:["Given an array of integers ",(0,r.jsx)(e.code,{children:"nums"})," and an integer ",(0,r.jsx)(e.code,{children:"k"}),", return ",(0,r.jsxs)(e.em,{children:["the total number of continuous subarrays whose sum equals to ",(0,r.jsx)(e.code,{children:"k"})]}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Input: nums = [1,1,1], k = 2\nOutput: 2\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Input: nums = [1,2,3], k = 3\nOutput: 2\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"1 <= nums.length <= 2 * 10^4"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"-1000 <= nums[i] <= 1000"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"-10^7 <= k <= 10^7"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"approach-1-hash-map",children:"Approach 1: Hash Map"}),"\n",(0,r.jsxs)(e.p,{children:["We use hash map to store the cumulative sum ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"s"}),(0,r.jsx)(e.mi,{children:"u"}),(0,r.jsx)(e.mi,{children:"m"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"["}),(0,r.jsx)(e.mi,{children:"i"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"sum[i]"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(e.span,{className:"mopen",children:"["}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,r.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," up to index ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"i"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),". If ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"s"}),(0,r.jsx)(e.mi,{children:"u"}),(0,r.jsx)(e.mi,{children:"m"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"["}),(0,r.jsx)(e.mi,{children:"i"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,r.jsx)(e.mo,{children:"\u2212"}),(0,r.jsx)(e.mi,{children:"s"}),(0,r.jsx)(e.mi,{children:"u"}),(0,r.jsx)(e.mi,{children:"m"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"["}),(0,r.jsx)(e.mi,{children:"j"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,r.jsx)(e.mo,{children:"="}),(0,r.jsx)(e.mi,{children:"k"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"sum[i] - sum[j] = k"})]})})}),(0,r.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(e.span,{className:"mopen",children:"["}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,r.jsx)(e.span,{className:"mclose",children:"]"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(e.span,{className:"mopen",children:"["}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,r.jsx)(e.span,{className:"mclose",children:"]"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(e.span,{className:"mrel",children:"="}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})]})]}),", then it means the sum between indices ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"i"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," and ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"j"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," is ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"k"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),". Therefore, we store the cumulative sum, search for ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mi,{children:"s"}),(0,r.jsx)(e.mi,{children:"u"}),(0,r.jsx)(e.mi,{children:"m"}),(0,r.jsx)(e.mo,{children:"\u2212"}),(0,r.jsx)(e.mi,{children:"k"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"sum - k"})]})})}),(0,r.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,r.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})]})]})," in the hash map and add the occurrences if it is found to the answer."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsxs)(n,{value:"cpp",label:"C++",children:[(0,r.jsx)(a,{name:"@wingkwong"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int subarraySum(vector<int>& nums, int k) {\n        unordered_map<int, int> m;\n        m[0]++;\n        int sum = 0, ans = 0;\n        for (int i = 0; i < nums.size(); i++) {\n            sum += nums[i];\n            ans += m[sum - k];\n            m[sum]++;\n        }\n        return ans;\n    }\n};\n"})})]}),(0,r.jsxs)(n,{value:"java",label:"Java",children:[(0,r.jsx)(a,{name:"@ganajayant"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public int subarraySum(int[] nums, int k) {\n        int sum = 0, result = 0;\n        HashMap<Integer, Integer> preSum = new HashMap<>();\n        preSum.put(0, 1);\n        for (int i = 0; i < nums.length; i++) {\n            sum += nums[i];\n            if (preSum.containsKey(sum - k)) {\n                result += preSum.get(sum - k);\n            }\n            preSum.put(sum, preSum.getOrDefault(sum, 0) + 1);\n        }\n        return result;\n    }\n}\n"})})]})]})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(h,{...s})}):h(s)}function o(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>m});var n=a(96540);const r={},l=n.createContext(r);function t(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:t(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);