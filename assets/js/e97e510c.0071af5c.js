"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4748],{12983:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>h});var n=e(85893),t=e(11151);const l={description:"Author: @ColeB2 | https://leetcode.com/problems/partition-equal-subset-sum/",tags:["Array","Dynamic Programming"]},i="0416 - Partition Equal Subset Sum (Medium)",m={id:"0400-0499/partition-equal-subset-sum-medium",title:"0416 - Partition Equal Subset Sum (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/partition-equal-subset-sum/",source:"@site/solutions/0400-0499/0416-partition-equal-subset-sum-medium.md",sourceDirName:"0400-0499",slug:"/0400-0499/partition-equal-subset-sum-medium",permalink:"/solutions/0400-0499/partition-equal-subset-sum-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0416-partition-equal-subset-sum-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:416,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/partition-equal-subset-sum/",tags:["Array","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"0413 - Arithmetic Slices (Medium)",permalink:"/solutions/0400-0499/arithmetic-slices-medium"},next:{title:"0417 - Pacific Atlantic Water Flow (Medium)",permalink:"/solutions/0400-0499/pacific-atlantic-water-flow-medium"}},r={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}];function c(s){const a={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...s.components},{SolutionAuthor:e,TabItem:l,Tabs:i}=a;return e||o("SolutionAuthor",!0),l||o("TabItem",!0),i||o("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"0416---partition-equal-subset-sum-medium",children:"0416 - Partition Equal Subset Sum (Medium)"}),"\n",(0,n.jsx)(a.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://leetcode.com/problems/partition-equal-subset-sum/",children:"https://leetcode.com/problems/partition-equal-subset-sum/"})}),"\n",(0,n.jsx)(a.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(a.p,{children:["Given an integer array ",(0,n.jsx)(a.code,{children:"nums"}),", return ",(0,n.jsx)(a.code,{children:"true"})," ",(0,n.jsx)(a.em,{children:"if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or"})," ",(0,n.jsx)(a.code,{children:"false"})," ",(0,n.jsx)(a.em,{children:"otherwise"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: nums = [1,5,11,5]\nOutput: true\nExplanation: The array can be partitioned as [1, 5, 5] and [11].\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Input: nums = [1,2,3,5]\nOutput: false\nExplanation: The array cannot be partitioned into equal sum subsets.\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"1 <= nums.length <= 200"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"1 <= nums[i] <= 100"})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,n.jsxs)(a.p,{children:["We can use dynamic programming and a hash set to solve this problem. Our hash set would represent all the totals we can make using the numbers in ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"})]})})]}),", and our base case would be ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"0"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"0"})]})})]}),". We also only have to reach a total of the ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"sum(nums) // 2"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mord",children:"//2"})]})})]})," as if one half is half the sum, then the other will be too. This also means we can terminate early if the sum of all numbers isn't even."]}),"\n",(0,n.jsxs)(a.p,{children:["Then we can iterate through each number in ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"})]})})]}),", and for each iteration, iterate through our hash set of totals. If the current ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"l"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"total"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]})," + the current ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"b"}),(0,n.jsx)(a.mi,{children:"e"}),(0,n.jsx)(a.mi,{children:"r"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"number"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"mb"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"})]})})]})," is equal to our target we can return true, otherwise, we will have to add our ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"total + num"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"})]})]})]})," to our hash set.\nNote we can loop through our hash set and add numbers to it, so we will need an intermediate hash set to add our ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"total + num"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"})]})]})]})," and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsx)(a.mi,{children:"t"}),(0,n.jsx)(a.mi,{children:"a"}),(0,n.jsx)(a.mi,{children:"l"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"total"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]})," to, as well as reassign later."]}),"\n",(0,n.jsx)(a.p,{children:"If we don't find our target total, we can return False."}),"\n",(0,n.jsxs)(a.p,{children:["Time Complexity: ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{children:"\u2217"}),(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(n * S)"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})]})]})," where ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"n"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"})]})})]})," is the length of ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mi,{children:"u"}),(0,n.jsx)(a.mi,{children:"m"}),(0,n.jsx)(a.mi,{children:"s"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"s"})]})})]})," array and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"S"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"S"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})})]})," is the sum of all elements in the array."]}),"\n",(0,n.jsxs)(a.p,{children:["Space Complexity: ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"S"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(S)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]})," where ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"S"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"S"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})})]})," is the sum of all elements in the array as we only need to store up to ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"S"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"S"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})})]})," numbers in our hash set."]}),"\n",(0,n.jsx)(i,{children:(0,n.jsxs)(l,{value:"python",label:"Python",children:[(0,n.jsx)(e,{name:"@ColeB2"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:"class Solution:\n    def canPartition(self, nums: List[int]) -> bool:\n        # calcuate target k\n        k = sum(nums)\n        # k isn't even, we can't partition the array\n        if k % 2:\n            return False\n        # update our target to be half of k, as if we find half\n        # the total then the remaining would be the other half.\n        k //= 2\n        # initialize our set with a starting total of 0.\n        dp = set()\n        dp.add(0)\n        # loop through each number in nums\n        for num in nums:\n            # initialize intermediate set, so we can loop through original.\n            new_dp = set()\n            # loop through all the totals in the original dp set.\n            for total in dp:\n                # if any total + number == k, we found our answer.\n                if (total + num) == k:\n                    return True\n                # add total + num, as well as original total to\n                # the intermediate set.\n                new_dp.add(total + num)\n                new_dp.add(total)\n            # reassign our set\n            dp = new_dp\n        # make it through and didn't find an answer return False.\n        return False\n"})})]})})]})}function d(s={}){const{wrapper:a}={...(0,t.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(c,{...s})}):c(s)}function o(s,a){throw new Error("Expected "+(a?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(s,a,e)=>{e.d(a,{Z:()=>m,a:()=>i});var n=e(67294);const t={},l=n.createContext(t);function i(s){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function m(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:i(s.components),n.createElement(l.Provider,{value:a},s.children)}}}]);