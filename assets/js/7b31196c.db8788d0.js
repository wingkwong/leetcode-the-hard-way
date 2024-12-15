"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[45255],{18712:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"0000-0099/sort-colors-medium","title":"0075 - Sort Colors (Medium)","description":"Author: @ganajayant, @RadhikaChhabra17, @radojicic23 | https://leetcode.com/problems/sort-colors/","source":"@site/solutions/0000-0099/0075-sort-colors-medium.md","sourceDirName":"0000-0099","slug":"/0000-0099/sort-colors-medium","permalink":"/solutions/0000-0099/sort-colors-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0075-sort-colors-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Two Pointers","permalink":"/solutions/tags/two-pointers"},{"inline":true,"label":"Sorting","permalink":"/solutions/tags/sorting"}],"version":"current","sidebarPosition":75,"frontMatter":{"description":"Author: @ganajayant, @RadhikaChhabra17, @radojicic23 | https://leetcode.com/problems/sort-colors/","tags":["Array","Two Pointers","Sorting"]},"sidebar":"tutorialSidebar","previous":{"title":"0074 - Search a 2D Matrix (Medium)","permalink":"/solutions/0000-0099/search-a-2d-matrix-medium"},"next":{"title":"0076 - Minimum Window Substring (Hard)","permalink":"/solutions/0000-0099/minimum-window-substring-hard"}}');var t=e(74848),r=e(28453);const i={description:"Author: @ganajayant, @RadhikaChhabra17, @radojicic23 | https://leetcode.com/problems/sort-colors/",tags:["Array","Two Pointers","Sorting"]},l="0075 - Sort Colors (Medium)",o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Counting",id:"approach-1-counting",level:2},{value:"Approach 2: Bubble Sort",id:"approach-2-bubble-sort",level:2}];function h(n){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...n.components},{SolutionAuthor:e,TabItem:a,Tabs:i}=s;return e||d("SolutionAuthor",!0),a||d("TabItem",!0),i||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"0075---sort-colors-medium",children:"0075 - Sort Colors (Medium)"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://leetcode.com/problems/sort-colors/",children:"https://leetcode.com/problems/sort-colors/"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsx)(s.p,{children:"Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue."}),"\n",(0,t.jsx)(s.p,{children:"We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively."}),"\n",(0,t.jsx)(s.p,{children:"You must solve this problem without using the library's sort function."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Input: nums = [2,0,2,1,1,0]\nOutput: [0,0,1,1,2,2]\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Input: nums = [2,0,1]\nOutput: [0,1,2]\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"n == nums.length"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"1 <= n <= 300"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"1 <= m, n <= 100"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"nums[i] is either 0, 1, or 2"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"approach-1-counting",children:"Approach 1: Counting"}),"\n",(0,t.jsx)(s.p,{children:"Count number of 0's 1's and 2's and add those numbers in array"}),"\n",(0,t.jsx)(i,{children:(0,t.jsxs)(a,{value:"java",label:"Java",children:[(0,t.jsx)(e,{name:"@ganajayant"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"class Solution {\n    public void sortColors(int[] nums) {\n        int q[] = { 0, 0, 0 };\n        for (int i : nums) {\n            if (i == 0) {\n                q[0]++;\n            } else if (i == 1) {\n                q[1]++;\n            } else {\n                q[2]++;\n            }\n        }\n        for (int i = 0; i < q[0]; i++) {\n            nums[i] = 0;\n        }\n        for (int i = q[0]; i < q[0] + q[1]; i++) {\n            nums[i] = 1;\n        }\n        for (int i = q[1] + q[0]; i < q[0] + q[1] + q[2]; i++) {\n            nums[i] = 2;\n        }\n    }\n}\n"})})]})}),"\n",(0,t.jsx)(s.h2,{id:"approach-2-bubble-sort",children:"Approach 2: Bubble Sort"}),"\n",(0,t.jsxs)(s.p,{children:["We want all integers together. One way of doing this is sorting the array so that we will get all ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mn,{children:"0"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord",children:"0"})]})})]})," initially, then all ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mn,{children:"1"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord",children:"1"})]})})]})," and ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mn,{children:"2"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord",children:"2"})]})})]}),". We can use bubble sort for sorting."]}),"\n",(0,t.jsxs)(s.p,{children:["Time Complexity: ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n ^ 2)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", where ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"n"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of elements in array"]}),"\n",(0,t.jsxs)(s.p,{children:["Space complexity: ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsxs)(a,{value:"c++",label:"C++",children:[(0,t.jsx)(e,{name:"@RadhikaChhabra17"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"class Solution {\n    void sortColors(vector<int>& nums) {\n        int n = nums.size();\n        bool check = true;\n        for (int i = 0; i < n - 1 && check; i++) {\n            check = false;\n            for (int j = 0; j < n - i - 1; j++) {\n                if (nums[j] > nums[j + 1]) {\n                    swap(nums[j], nums[j + 1]);\n                    check = true;\n                }\n            }\n        }\n    }\n};\n"})})]}),(0,t.jsxs)(a,{value:"js",label:"JavaScript",children:[(0,t.jsx)(e,{name:"@radojicic23"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar sortColors = function(nums) {\n    let swapped = false;\n    for (i = 0; i < nums.length - 1; i++) {\n        for (j = 0; j < nums.length - i - 1; j++) {\n            if (nums[j] > nums[j + 1]) {\n                swapped = true;\n                let tmp = nums[j];\n                nums[j] = nums[j + 1];\n                nums[j + 1] = tmp;\n            }\n        }\n        if (swapped === false) {\n            return;\n        }\n    }\n};\n"})})]}),(0,t.jsxs)(a,{value:"py",label:"Python",children:[(0,t.jsx)(e,{name:"@radojicic23"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'class Solution:\n    def sortColors(self, nums: List[int]) -> None:\n        """\n        Do not return anything, modify nums in-place instead.\n        """\n        swapped = False\n        for i in range(len(nums) - 1):\n            for j in range(len(nums) - i - 1):\n                if nums[j] > nums[j + 1]:\n                    swapped = True\n                    nums[j], nums[j + 1] = nums[j + 1], nums[j]\n            if not swapped:\n                return \n'})})]})]})]})}function m(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}function d(n,s){throw new Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(n,s,e)=>{e.d(s,{R:()=>i,x:()=>l});var a=e(96540);const t={},r=a.createContext(t);function i(n){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),a.createElement(r.Provider,{value:s},n.children)}}}]);