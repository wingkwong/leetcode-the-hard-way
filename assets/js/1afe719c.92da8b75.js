"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[77343],{71419:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(85893),r=n(11151);const l={description:"Author: @wingkwong, @jaffar, @jit | https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/",tags:["Array","Sorting","Heap (Priority Queue)"]},t="1464 - Maximum Product of Two Elements in an Array (Easy)",i={id:"1400-1499/maximum-product-of-two-elements-in-an-array-easy",title:"1464 - Maximum Product of Two Elements in an Array (Easy)",description:"Author: @wingkwong, @jaffar, @jit | https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/",source:"@site/solutions/1400-1499/1464-maximum-product-of-two-elements-in-an-array-easy.md",sourceDirName:"1400-1499",slug:"/1400-1499/maximum-product-of-two-elements-in-an-array-easy",permalink:"/solutions/1400-1499/maximum-product-of-two-elements-in-an-array-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1464-maximum-product-of-two-elements-in-an-array-easy.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Sorting",permalink:"/solutions/tags/sorting"},{inline:!0,label:"Heap (Priority Queue)",permalink:"/solutions/tags/heap-priority-queue"}],version:"current",sidebarPosition:1464,frontMatter:{description:"Author: @wingkwong, @jaffar, @jit | https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/",tags:["Array","Sorting","Heap (Priority Queue)"]},sidebar:"tutorialSidebar",previous:{title:"1460 - Make Two Arrays Equal by Reversing Subarrays (Easy)",permalink:"/solutions/1400-1499/make-two-arrays-equal-by-reversing-subarrays-easy"},next:{title:"1470 - Shuffle the Array (Easy)",permalink:"/solutions/1400-1499/shuffle-the-array-easy"}},m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2}];function o(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...s.components},{SolutionAuthor:n,TabItem:l,Tabs:t}=e;return n||d("SolutionAuthor",!0),l||d("TabItem",!0),t||d("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"1464---maximum-product-of-two-elements-in-an-array-easy",children:"1464 - Maximum Product of Two Elements in an Array (Easy)"}),"\n",(0,a.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/",children:"https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(e.p,{children:["Given the array of integers ",(0,a.jsx)(e.code,{children:"nums"}),", you will choose two different indices ",(0,a.jsx)(e.code,{children:"i"})," and ",(0,a.jsx)(e.code,{children:"j"})," of that array. ",(0,a.jsx)(e.em,{children:"Return the maximum value of"})," ",(0,a.jsx)(e.code,{children:"(nums[i]-1)*(nums[j]-1)"}),"."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: nums = [3,4,5,2]\nOutput: 12 \nExplanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: nums = [1,5,4,5]\nOutput: 16\nExplanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"Input: nums = [3,7]\nOutput: 12\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"2"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"u"}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mi,{children:"s"}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(e.mi,{children:"l"}),(0,a.jsx)(e.mi,{children:"e"}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"g"}),(0,a.jsx)(e.mi,{children:"t"}),(0,a.jsx)(e.mi,{children:"h"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"500"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"2 <= nums.length <= 500"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord",children:"2"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(e.span,{className:"mord",children:"."}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(e.span,{className:"mord",children:"500"})]})]})]})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"n"}),(0,a.jsx)(e.mi,{children:"u"}),(0,a.jsx)(e.mi,{children:"m"}),(0,a.jsx)(e.mi,{children:"s"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"["}),(0,a.jsx)(e.mi,{children:"i"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,a.jsx)(e.mo,{children:"<"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mn,{children:"1"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mn,{children:"0"}),(0,a.jsx)(e.mn,{children:"3"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= nums[i] <= 10^3"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(e.span,{className:"mopen",children:"["}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(e.span,{className:"mclose",children:"]"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(e.span,{className:"mord",children:"1"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"0"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]})]})]})]})}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"approach-1-sorting",children:"Approach 1: Sorting"}),"\n",(0,a.jsx)(e.p,{children:"We can just choose the two largest values to maximum the product."}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsxs)(l,{value:"py",label:"Python",children:[(0,a.jsx)(n,{name:"@jaffar"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        sorted_nums = sorted(nums, reverse=True)\n        first_max = sorted_nums[0] - 1\n        second_max = sorted_nums[1] - 1\n        return first_max * second_max\n"})})]}),(0,a.jsxs)(l,{value:"erlang",label:"Erlang",children:[(0,a.jsx)(n,{name:"@jit"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"%% Lazy but whatever\nmax_product(Nums) ->\n  [A, B | _] = lists:sort(fun erlang:'>='/2, Nums),\n  (A - 1) * (B - 1).\n"})})]}),(0,a.jsxs)(l,{value:"java",label:"Java",children:[(0,a.jsx)(n,{name:"@wingkwong"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public int maxProduct(int[] nums) {\n        Arrays.sort(nums);\n        int n = nums.length;\n        return (nums[n - 1] - 1) * (nums[n - 2] - 1);\n    }\n}\n"})})]})]})]})}function h(s={}){const{wrapper:e}={...(0,r.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(o,{...s})}):o(s)}function d(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,e,n)=>{n.d(e,{Z:()=>i,a:()=>t});var a=n(67294);const r={},l=a.createContext(r);function t(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:t(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);