"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[40359],{48570:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"1600-1699/max-number-of-k-sum-pairs-medium","title":"1679 - Max Number of K-Sum Pairs (Medium)","description":"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/max-number-of-k-sum-pairs/","source":"@site/solutions/1600-1699/1679-max-number-of-k-sum-pairs-medium.md","sourceDirName":"1600-1699","slug":"/1600-1699/max-number-of-k-sum-pairs-medium","permalink":"/solutions/1600-1699/max-number-of-k-sum-pairs-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1600-1699/1679-max-number-of-k-sum-pairs-medium.md","tags":[],"version":"current","sidebarPosition":1679,"frontMatter":{"description":"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/max-number-of-k-sum-pairs/"},"sidebar":"tutorialSidebar","previous":{"title":"1672 - Richest Customer Wealth (Easy)","permalink":"/solutions/1600-1699/richest-customer-wealth-easy"},"next":{"title":"1680 - Concatenation of Consecutive Binary Numbers (Medium)","permalink":"/solutions/1600-1699/concatenation-of-consecutive-binary-numbers-medium"}}');var m=n(74848),t=n(28453);const i={description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/max-number-of-k-sum-pairs/"},l="1679 - Max Number of K-Sum Pairs (Medium)",r={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2},{value:"Approach 2: Two Pointers",id:"approach-2-two-pointers",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...s.components},{SolutionAuthor:n,TabItem:a,Tabs:i}=e;return n||x("SolutionAuthor",!0),a||x("TabItem",!0),i||x("Tabs",!0),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(e.header,{children:(0,m.jsx)(e.h1,{id:"1679---max-number-of-k-sum-pairs-medium",children:"1679 - Max Number of K-Sum Pairs (Medium)"})}),"\n",(0,m.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.a,{href:"https://leetcode.com/problems/max-number-of-k-sum-pairs",children:"https://leetcode.com/problems/max-number-of-k-sum-pairs"})}),"\n",(0,m.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,m.jsxs)(e.p,{children:["You are given an integer array ",(0,m.jsx)(e.code,{children:"nums"})," and an integer ",(0,m.jsx)(e.code,{children:"k"}),"."]}),"\n",(0,m.jsxs)(e.p,{children:["In one operation, you can pick two numbers from the array whose sum equals ",(0,m.jsx)(e.code,{children:"k"})," and remove them from the array."]}),"\n",(0,m.jsxs)(e.p,{children:["Return ",(0,m.jsx)(e.em,{children:"the maximum number of operations you can perform on the array"}),"."]}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{children:"Input: nums = [1,2,3,4], k = 5\nOutput: 2\nExplanation: Starting with nums = [1,2,3,4]:\n- Remove numbers 1 and 4, then nums = [2,3]\n- Remove numbers 2 and 3, then nums = []\nThere are no more pairs that sum up to 5, hence a total of 2 operations.\n"})}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{children:"Input: nums = [3,1,3,4,3], k = 6\nOutput: 1\nExplanation: Starting with nums = [3,1,3,4,3]:\n- Remove the first two 3's, then nums = [1,4,3]\nThere are no more pairs that sum up to 6, hence a total of 1 operation.\n"})}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,m.jsxs)(e.ul,{children:["\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.code,{children:"1 <= nums.length <= 10^5"})}),"\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.code,{children:"1 <= nums[i] <= 10^9"})}),"\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.code,{children:"1 <= k <= 10^9"})}),"\n"]}),"\n",(0,m.jsx)(e.h2,{id:"approach-1-hash-map",children:"Approach 1: Hash Map"}),"\n",(0,m.jsxs)(e.p,{children:["We can use hash map to store the occurrences for each number. Just like Two Sum problem, we find the complement ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"k"}),(0,m.jsx)(e.mo,{children:"\u2212"}),(0,m.jsx)(e.mi,{children:"x"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"k - x"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]}),". Then, we will be facing two cases."]}),"\n",(0,m.jsxs)(e.p,{children:["The first case is when ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsx)(e.mrow,{children:(0,m.jsx)(e.mi,{children:"x"})}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]})," is same as ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"k"}),(0,m.jsx)(e.mo,{children:"\u2212"}),(0,m.jsx)(e.mi,{children:"x"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"k - x"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]}),". In this case, we can only take ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"x"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,m.jsx)(e.mn,{children:"2"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"m[x] / 2"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mord",children:"/2"})]})})]})," at most, then we update both value with the remainder."]}),"\n",(0,m.jsxs)(e.p,{children:["Otherwise, we can only take the minimal value of ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"x"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"m[x]"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})})]}),"and ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"k"}),(0,m.jsx)(e.mo,{children:"\u2212"}),(0,m.jsx)(e.mi,{children:"x"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"m[k - x]"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})]})]}),", then update the hash map values."]}),"\n",(0,m.jsxs)(i,{children:[(0,m.jsxs)(a,{value:"cpp",label:"C++",children:[(0,m.jsx)(n,{name:"@wingkwong"}),(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxOperations(vector<int>& nums, int k) {\n        unordered_map<int, int> m;\n        int ans = 0;\n        for (auto &x : nums) m[x]++;\n        for (auto &x : nums) {\n            if (m[k - x] > 0) {\n                if (x == k - x) {\n                    ans += m[x] / 2;\n                    m[x] = m[x] % 2;\n                    m[k - x] = m[x] % 2;\n                } else {\n                    int ops = min(m[x], m[k - x]);\n                    ans += ops;\n                    m[x] -= ops;\n                    m[k - x] -= ops;   \n                }\n            }\n        }\n        return ans;\n    }\n};\n"})})]}),(0,m.jsxs)(a,{value:"java",label:"Java",children:[(0,m.jsx)(n,{name:"@vigneshshiv"}),(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public int maxOperations(int[] nums, int k) {\n        int count = 0;\n        Map<Integer, Integer> table = new HashMap<>();\n        for (int x : nums) {\n            int reminder = k - x;\n            if (table.containsKey(reminder)) {\n                count += 1;\n                if (table.get(reminder) == 1) {\n                    table.remove(reminder);\n                } else {\n                    table.merge(reminder, -1, Integer::sum);\n                }\n            } else {\n                table.merge(x, 1, Integer::sum);\n            }\n        }\n        return count;\n    }\n}\n"})})]})]}),"\n",(0,m.jsx)(e.h2,{id:"approach-2-two-pointers",children:"Approach 2: Two Pointers"}),"\n",(0,m.jsxs)(e.p,{children:["We can sort the input and use two pointers to track elements from both side. If their sum is equal to ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsx)(e.mrow,{children:(0,m.jsx)(e.mi,{children:"k"})}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),", then we increase ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mi,{children:"n"}),(0,m.jsx)(e.mi,{children:"s"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"ans"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," by 1. If ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"n"}),(0,m.jsx)(e.mi,{children:"u"}),(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mi,{children:"s"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"n"}),(0,m.jsx)(e.mi,{children:"u"}),(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mi,{children:"s"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"j"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:">"}),(0,m.jsx)(e.mi,{children:"k"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"nums[i] + nums[j] > k"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.jsx)(e.span,{className:"mrel",children:">"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})]})]}),", it means we should reduce the sum, hence we move ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsx)(e.mrow,{children:(0,m.jsx)(e.mi,{children:"j"})}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"-th pointer to the left . Otherwise, we increase ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsx)(e.mrow,{children:(0,m.jsx)(e.mi,{children:"i"})}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),"-th pointer to the right to increase the sum."]}),"\n",(0,m.jsx)(i,{children:(0,m.jsxs)(a,{value:"cpp",label:"C++",children:[(0,m.jsx)(n,{name:"@wingkwong"}),(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxOperations(vector<int>& nums, int k) {\n        int n = nums.size(), i = 0, j = n - 1, ans = 0;\n        sort(nums.begin(), nums.end());\n        while (i < j) {\n            if (nums[i] + nums[j] == k) ans += 1, i += 1, j -= 1;\n            else if (nums[i] + nums[j] > k) j -= 1;\n            else i += 1;\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function o(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,m.jsx)(e,{...s,children:(0,m.jsx)(h,{...s})}):h(s)}function x(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,n)=>{n.d(e,{R:()=>i,x:()=>l});var a=n(96540);const m={},t=a.createContext(m);function i(s){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(m):s.components||m:i(s.components),a.createElement(t.Provider,{value:e},s.children)}}}]);