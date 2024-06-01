"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[80038],{15748:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>m,metadata:()=>i,toc:()=>t});var n=e(85893),r=e(11151);const m={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-score-of-a-good-subarray/",tags:["Array","Two Pointers","Binary Search","Stack","Monotonic Stack"]},l="1793 - Maximum Score of a Good Subarray (Hard)",i={id:"1700-1799/maximum-score-of-a-good-subarray-hard",title:"1793 - Maximum Score of a Good Subarray (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-score-of-a-good-subarray/",source:"@site/solutions/1700-1799/1793-maximum-score-of-a-good-subarray-hard.md",sourceDirName:"1700-1799",slug:"/1700-1799/maximum-score-of-a-good-subarray-hard",permalink:"/solutions/1700-1799/maximum-score-of-a-good-subarray-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1700-1799/1793-maximum-score-of-a-good-subarray-hard.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Two Pointers",permalink:"/solutions/tags/two-pointers"},{inline:!0,label:"Binary Search",permalink:"/solutions/tags/binary-search"},{inline:!0,label:"Stack",permalink:"/solutions/tags/stack"},{inline:!0,label:"Monotonic Stack",permalink:"/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:1793,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-score-of-a-good-subarray/",tags:["Array","Two Pointers","Binary Search","Stack","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"1790 - Check if One String Swap Can Make Strings Equal (Easy)",permalink:"/solutions/1700-1799/check-if-one-string-swap-can-make-strings-equal-easy"},next:{title:"1800 - 1899",permalink:"/solutions/category/1800---1899"}},c={},t=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sparse Table",id:"approach-1-sparse-table",level:2}];function h(s){const a={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...s.components},{SolutionAuthor:e,TabItem:m,Tabs:l}=a;return e||d("SolutionAuthor",!0),m||d("TabItem",!0),l||d("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"1793---maximum-score-of-a-good-subarray-hard",children:"1793 - Maximum Score of a Good Subarray (Hard)"}),"\n",(0,n.jsx)(a.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://leetcode.com/problems/maximum-score-of-a-good-subarray/",children:"https://leetcode.com/problems/maximum-score-of-a-good-subarray/"})}),"\n",(0,n.jsx)(a.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(a.p,{children:["You are given an array of integers ",(0,n.jsx)(a.code,{children:"nums"})," ",(0,n.jsx)(a.strong,{children:"(0-indexed)"})," and an integer ",(0,n.jsx)(a.code,{children:"k"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.strong,{children:"score"})," of a subarray ",(0,n.jsx)(a.code,{children:"(i, j)"})," is defined as ",(0,n.jsx)(a.code,{children:"min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1)"}),". A ",(0,n.jsx)(a.strong,{children:"good"})," subarray is a subarray where ",(0,n.jsx)(a.code,{children:"i <= k <= j"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Return ",(0,n.jsxs)(a.em,{children:["the maximum possible ",(0,n.jsx)(a.strong,{children:"score"})," of a ",(0,n.jsx)(a.strong,{children:"good"})," subarray."]})]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: nums = [1,4,3,7,4,5], k = 3\nOutput: 15\nExplanation: The optimal subarray is (1, 5) with a score of min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15.\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: nums = [5,5,4,5,4,1,1,1], k = 0\nOutput: 20\nExplanation: The optimal subarray is (0, 4) with a score of min(5,5,4,5,4) * (4-0+1) = 4 * 5 = 20.\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"1 <= nums.length <= 105"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"1 <= nums[i] <= 2 * 104"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"0 <= k < nums.length"})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"approach-1-sparse-table",children:"Approach 1: Sparse Table"}),"\n",(0,n.jsxs)(a.p,{children:["Given that ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{children:"<"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"k"}),(0,n.jsx)(a.mo,{children:"<"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mi,{children:"j"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"i <= k <= j"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6986em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"<="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"<="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})]})]}),", we can use two pointers to find the answer. Finding the minimum value ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"min(nums[i], nums[i+1], ..., nums[j])"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"min"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"..."}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(a.span,{className:"mclose",children:"])"})]})]})]})," would cost a lot for each time. We could use sparse table to query in ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),". Then we can move the ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"i"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"})]})})]})," and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"j"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," pointer accordingly by comparing ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"k"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"min(nums[i], nums[i+1], ..., nums[k])"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"min"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"..."}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(a.span,{className:"mclose",children:"])"})]})]})]})," and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"i"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"k"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"k"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(a.mo,{separator:"true",children:","}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"["}),(0,n.jsx)(a.mi,{children:"j"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"min(nums[k], nums[k+1], ..., nums[j])"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"min"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:"]"}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord",children:"..."}),(0,n.jsx)(a.span,{className:"mpunct",children:","}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mopen",children:"["}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(a.span,{className:"mclose",children:"])"})]})]})]}),"."]}),"\n",(0,n.jsx)(l,{children:(0,n.jsxs)(m,{value:"cpp",label:"C++",children:[(0,n.jsx)(e,{name:"@wingkwong"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // https://leetcodethehardway.com/templates/sparse-table\n    template<typename it, typename bin_op>\n    struct sparse_table {\n        using T = typename remove_reference<decltype(*declval<it>())>::type;\n        vector<vector<T>> t; bin_op f;\n\n        sparse_table(it first, it last, bin_op op) : t(1), f(op) {\n            int n = distance(first, last);\n            t.assign(32 - __builtin_clz(n), vector<T>(n));\n            t[0].assign(first, last);\n            for (int i = 1; i < t.size(); i++)\n                for (int j = 0; j < n - (1 << i) + 1; j++)\n                    t[i][j] = f(t[i - 1][j], t[i - 1][j + (1 << (i - 1))]);\n        }\n\n        // returns f(a[l .. r]) in O(1) time\n        T query(int l, int r) {\n            int h = floor(log2(r - l + 1));\n            return f(t[h][l], t[h][r - (1 << h) + 1]);\n        }\n    };\n    \n    int maximumScore(vector<int>& nums, int k) {\n        int n = nums.size(), ans = 0;\n        int i = 0, j = n - 1;\n        sparse_table g(nums.begin(), nums.end(), [](int x, int y) {\n           return min(x, y); \n        });\n        while (i <= k && k <= j) {\n            ans = max(ans, g.query(i, j) * (j - i + 1));\n            if (g.query(i, k) <= g.query(k, j)) i++;\n            else j--;\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function o(s={}){const{wrapper:a}={...(0,r.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}function d(s,a){throw new Error("Expected "+(a?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,a,e)=>{e.d(a,{Z:()=>i,a:()=>l});var n=e(67294);const r={},m=n.createContext(r);function l(s){const a=n.useContext(m);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function i(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:l(s.components),n.createElement(m.Provider,{value:a},s.children)}}}]);