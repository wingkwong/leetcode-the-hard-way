"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[39051],{93612:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>m,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=s(85893),a=s(11151);const r={description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/missing-number/",tags:["Array","Hash Table","Math","Bit Manupulation","Sorting"]},t="0268 - Missing Number (Easy)",l={id:"0200-0299/missing-number-easy",title:"0268 - Missing Number (Easy)",description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/missing-number/",source:"@site/solutions/0200-0299/0268-missing-number-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/missing-number-easy",permalink:"/solutions/0200-0299/missing-number-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0268-missing-number-easy.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Hash Table",permalink:"/solutions/tags/hash-table"},{inline:!0,label:"Math",permalink:"/solutions/tags/math"},{inline:!0,label:"Bit Manupulation",permalink:"/solutions/tags/bit-manupulation"},{inline:!0,label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:268,frontMatter:{description:"Author: @wingkwong, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/missing-number/",tags:["Array","Hash Table","Math","Bit Manupulation","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"0263 - Ugly Number",permalink:"/solutions/0200-0299/ugly-number-easy"},next:{title:"0278 - First Bad Version (Easy)",permalink:"/solutions/0200-0299/first-bad-version-easy"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2},{value:"Approach 2: Bit Manupulation",id:"approach-2-bit-manupulation",level:2},{value:"Approach 3: Math",id:"approach-3-math",level:2}];function o(n){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...n.components},{SolutionAuthor:s,TabItem:r,Tabs:t}=e;return s||h("SolutionAuthor",!0),r||h("TabItem",!0),t||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"0268---missing-number-easy",children:"0268 - Missing Number (Easy)"}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/missing-number/",children:"https://leetcode.com/problems/missing-number/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["Given an array ",(0,i.jsx)(e.code,{children:"nums"})," containing ",(0,i.jsx)(e.code,{children:"n"})," distinct numbers in the range ",(0,i.jsx)(e.code,{children:"[0, n]"}),", return ",(0,i.jsx)(e.em,{children:"the only number in the range that is missing from the array."})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: nums = [3,0,1]\nOutput: 2\nExplanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: nums = [0,1]\nOutput: 2\nExplanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: nums = [9,6,4,2,3,5,7,0,1]\nOutput: 8\nExplanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"n == nums.length"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= n <= 10^4"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"0 <= nums[i] <= n"})}),"\n",(0,i.jsxs)(e.li,{children:["All the numbers of ",(0,i.jsx)(e.code,{children:"nums"})," are ",(0,i.jsx)(e.strong,{children:"unique"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-sorting",children:"Approach 1: Sorting"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(r,{value:"c++",label:"C++",children:[(0,i.jsx)(s,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        int n = nums.size();\n        sort(nums.begin(), nums.end());\n        // check the first element\n        if (nums.front() != 0) return 0;\n        // check [1, n)\n        for (int i = 1; i < n; i++) {\n            // after sorting, the difference is expected to be 1\n            // e.g. 1 - 2 - 3 - 4\n            // if not, then it means the current index is the missing number\n            // e.g. 1 - 2 - 4 (the diff is 2 here)\n            if (nums[i] - nums[i - 1] != 1) {\n                return i;\n            }\n        }\n        // check the last element\n        return n;\n    }\n};\n"})})]}),(0,i.jsxs)(r,{value:"java",label:"Java",children:[(0,i.jsx)(s,{name:"@vigneshshiv"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public int missingNumber(int[] nums) {\n        int n = nums.length;\n        // Sort the numbers\n        // After sorting, if any number is not the same as the index then that's the missing number\n        Arrays.sort(nums);\n        // Search for first missing number\n        if (nums[0] != 0) return 0;\n        for (int i = 0; i < n; i++) {\n            if (nums[i] != i) {\n                return i;\n            }\n        }\n        return n;\n    }\n}\n"})})]}),(0,i.jsxs)(r,{value:"javascript",label:"JavaScript",children:[(0,i.jsx)(s,{name:"@radojicic23"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar missingNumber = function(nums) {\n    const n = nums.length;\n    // sort numbers (increasing order)\n    nums.sort((a, b) => a - b);\n    // check the first value \n    if (nums[0] != 0) return 0;\n    // iterate through list of numbers\n    // if they are not equal (number and index of that number)\n    // that index is the missing number\n    for (let i = 1; i < n; i++) {\n        if (nums[i] != i) {\n            return i;\n        }\n    }\n    return n;\n};\n"})})]}),(0,i.jsxs)(r,{value:"python",label:"Python",children:[(0,i.jsx)(s,{name:"@radojicic23"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        n = len(nums)\n        # sort list\n        nums.sort()\n        # check the first value\n        if nums[0] != 0: return 0\n        # loop through list of numbers\n        # if they are not equal (number and index of that number)\n        # that index is the missing number\n        for i in range(len(nums)):\n            if nums[i] != i:\n                return i\n        return n \n"})})]})]}),"\n",(0,i.jsx)(e.h2,{id:"approach-2-bit-manupulation",children:"Approach 2: Bit Manupulation"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(r,{value:"c++",label:"C++",children:[(0,i.jsx)(s,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        // we can utilise the properties of XOR:\n        // a ^ a = 0\n        // a ^ 0 = a\n        // a ^ b ^ c = a ^ c ^ b\n        int n = (int) nums.size();\n        int ans = n;\n        // we can see that the elements in nums would cancel out with their indices\n        // except the one which is missing\n        for(int i = 0; i < n; i++) {\n            ans ^= (i ^ nums[i]);\n        }\n        return ans;\n    }\n};\n"})})]}),(0,i.jsxs)(r,{value:"java",label:"Java",children:[(0,i.jsx)(s,{name:"@vigneshshiv"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public int missingNumber(int[] nums) {\n        int n = nums.length;\n        int ans = n;\n        // we can utilise the properties of XOR:\n        // a ^ a = 0\n        // a ^ 0 = a\n        // a ^ b ^ c = a ^ c ^ b\n        for (int i = 0; i < n; i++) {\n            ans ^= (nums[i] ^ i);\n        }\n        return ans;\n    }\n}\n"})})]}),(0,i.jsxs)(r,{value:"js",label:"JavaScript",children:[(0,i.jsx)(s,{name:"@radojicic23"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar missingNumber = function(nums) {\n    // we can utilise the properties of XOR:\n    // a ^ a = 0\n    // a ^ 0 = a\n    // a ^ b ^ c = a ^ c ^ b\n    const n = nums.length;\n    let ans = n;\n    for (let i = 0; i < n; i++) {\n        ans ^= (i ^ nums[i]);\n    }\n    return ans;\n};\n"})})]}),(0,i.jsxs)(r,{value:"py",label:"Python",children:[(0,i.jsx)(s,{name:"@radojicic23"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        # we can utilise the properties of XOR:\n        # a ^ a = 0\n        # a ^ 0 = a\n        # a ^ b ^ c = a ^ c ^ b\n        n = len(nums)\n        res = n\n        for i in range(n):\n            res ^= (i ^ nums[i])\n        return res\n"})})]})]}),"\n",(0,i.jsx)(e.h2,{id:"approach-3-math",children:"Approach 3: Math"}),"\n",(0,i.jsxs)(e.p,{children:["To calculate the sum of first n element, we can use Gauss' Formula - ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,i.jsx)(e.mn,{children:"2"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"n * (n + 1) / 2"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4653em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mord",children:"/2"})]})]})]}),". The missing number would be the expected sum minus the sum of ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"s"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]}),"."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(r,{value:"c++",label:"C++",children:[(0,i.jsx)(s,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        int n = (int) nums.size();\n        int sum = 0;\n        for(int x : nums) sum += x;\n        return (n * (n + 1) / 2) - sum; \n    }\n};\n"})})]}),(0,i.jsxs)(r,{value:"java",label:"Java",children:[(0,i.jsx)(s,{name:"@vigneshshiv"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public int missingNumber(int[] nums) {\n        int n = nums.length;\n        int sum = 0;\n        for (int x : nums) sum += x;\n        return (n * (n + 1) / 2) - sum;\n    }\n}\n"})})]}),(0,i.jsxs)(r,{value:"javascript",label:"JavaScript",children:[(0,i.jsx)(s,{name:"@radojicic23"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar missingNumber = function(nums) {\n    const nums_len = nums.length;\n    let nums_sum = 0;\n    for (n of nums) nums_sum += n;\n    return (nums_len * (nums_len + 1) / 2) - nums_sum;\n};\n"})})]}),(0,i.jsxs)(r,{value:"python",label:"Python",children:[(0,i.jsx)(s,{name:"@radojicic23"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        nums_len = len(nums)\n        nums_sum = sum(nums)\n        return (nums_len * (nums_len + 1) // 2) - nums_sum\n"})})]})]})]})}function u(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}function h(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>t});var i=s(67294);const a={},r=i.createContext(a);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);