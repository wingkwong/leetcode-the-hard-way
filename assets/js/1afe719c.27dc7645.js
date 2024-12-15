"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[60346],{10023:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"1400-1499/maximum-product-of-two-elements-in-an-array-easy","title":"1464 - Maximum Product of Two Elements in an Array (Easy)","description":"Author: @wingkwong, @jaffar, @jit | https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/","source":"@site/solutions/1400-1499/1464-maximum-product-of-two-elements-in-an-array-easy.md","sourceDirName":"1400-1499","slug":"/1400-1499/maximum-product-of-two-elements-in-an-array-easy","permalink":"/solutions/1400-1499/maximum-product-of-two-elements-in-an-array-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1464-maximum-product-of-two-elements-in-an-array-easy.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Sorting","permalink":"/solutions/tags/sorting"},{"inline":true,"label":"Heap (Priority Queue)","permalink":"/solutions/tags/heap-priority-queue"}],"version":"current","sidebarPosition":1464,"frontMatter":{"description":"Author: @wingkwong, @jaffar, @jit | https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/","tags":["Array","Sorting","Heap (Priority Queue)"]},"sidebar":"tutorialSidebar","previous":{"title":"1460 - Make Two Arrays Equal by Reversing Subarrays (Easy)","permalink":"/solutions/1400-1499/make-two-arrays-equal-by-reversing-subarrays-easy"},"next":{"title":"1470 - Shuffle the Array (Easy)","permalink":"/solutions/1400-1499/shuffle-the-array-easy"}}');var r=n(74848),t=n(28453);const l={description:"Author: @wingkwong, @jaffar, @jit | https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/",tags:["Array","Sorting","Heap (Priority Queue)"]},i="1464 - Maximum Product of Two Elements in an Array (Easy)",m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2}];function o(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:n,TabItem:a,Tabs:l}=s;return n||d("SolutionAuthor",!0),a||d("TabItem",!0),l||d("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"1464---maximum-product-of-two-elements-in-an-array-easy",children:"1464 - Maximum Product of Two Elements in an Array (Easy)"})}),"\n",(0,r.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/",children:"https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/"})}),"\n",(0,r.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(s.p,{children:["Given the array of integers ",(0,r.jsx)(s.code,{children:"nums"}),", you will choose two different indices ",(0,r.jsx)(s.code,{children:"i"})," and ",(0,r.jsx)(s.code,{children:"j"})," of that array. ",(0,r.jsx)(s.em,{children:"Return the maximum value of"})," ",(0,r.jsx)(s.code,{children:"(nums[i]-1)*(nums[j]-1)"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"Input: nums = [3,4,5,2]\nOutput: 12 \nExplanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"Input: nums = [1,5,4,5]\nOutput: 16\nExplanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"Input: nums = [3,7]\nOutput: 12\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mn,{children:"2"}),(0,r.jsx)(s.mo,{children:"<"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mi,{children:"n"}),(0,r.jsx)(s.mi,{children:"u"}),(0,r.jsx)(s.mi,{children:"m"}),(0,r.jsx)(s.mi,{children:"s"}),(0,r.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,r.jsx)(s.mi,{children:"l"}),(0,r.jsx)(s.mi,{children:"e"}),(0,r.jsx)(s.mi,{children:"n"}),(0,r.jsx)(s.mi,{children:"g"}),(0,r.jsx)(s.mi,{children:"t"}),(0,r.jsx)(s.mi,{children:"h"}),(0,r.jsx)(s.mo,{children:"<"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mn,{children:"500"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"2 <= nums.length <= 500"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,r.jsx)(s.span,{className:"mord",children:"2"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"<="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(s.span,{className:"mord",children:"."}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"<="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,r.jsx)(s.span,{className:"mord",children:"500"})]})]})]})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mn,{children:"1"}),(0,r.jsx)(s.mo,{children:"<"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mi,{children:"n"}),(0,r.jsx)(s.mi,{children:"u"}),(0,r.jsx)(s.mi,{children:"m"}),(0,r.jsx)(s.mi,{children:"s"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"["}),(0,r.jsx)(s.mi,{children:"i"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,r.jsx)(s.mo,{children:"<"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mn,{children:"1"}),(0,r.jsxs)(s.msup,{children:[(0,r.jsx)(s.mn,{children:"0"}),(0,r.jsx)(s.mn,{children:"3"})]})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"1 <= nums[i] <= 10^3"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,r.jsx)(s.span,{className:"mord",children:"1"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"<="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(s.span,{className:"mopen",children:"["}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,r.jsx)(s.span,{className:"mclose",children:"]"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"<="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.8141em"}}),(0,r.jsx)(s.span,{className:"mord",children:"1"}),(0,r.jsxs)(s.span,{className:"mord",children:[(0,r.jsx)(s.span,{className:"mord",children:"0"}),(0,r.jsx)(s.span,{className:"msupsub",children:(0,r.jsx)(s.span,{className:"vlist-t",children:(0,r.jsx)(s.span,{className:"vlist-r",children:(0,r.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,r.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,r.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(s.span,{className:"mord mtight",children:"3"})})]})})})})})]})]})]})]})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"approach-1-sorting",children:"Approach 1: Sorting"}),"\n",(0,r.jsx)(s.p,{children:"We can just choose the two largest values to maximum the product."}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsxs)(a,{value:"py",label:"Python",children:[(0,r.jsx)(n,{name:"@jaffar"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        sorted_nums = sorted(nums, reverse=True)\n        first_max = sorted_nums[0] - 1\n        second_max = sorted_nums[1] - 1\n        return first_max * second_max\n"})})]}),(0,r.jsxs)(a,{value:"erlang",label:"Erlang",children:[(0,r.jsx)(n,{name:"@jit"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"%% Lazy but whatever\nmax_product(Nums) ->\n  [A, B | _] = lists:sort(fun erlang:'>='/2, Nums),\n  (A - 1) * (B - 1).\n"})})]}),(0,r.jsxs)(a,{value:"java",label:"Java",children:[(0,r.jsx)(n,{name:"@wingkwong"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"class Solution {\n    public int maxProduct(int[] nums) {\n        Arrays.sort(nums);\n        int n = nums.length;\n        return (nums[n - 1] - 1) * (nums[n - 2] - 1);\n    }\n}\n"})})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function d(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>i});var a=n(96540);const r={},t=a.createContext(r);function l(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);