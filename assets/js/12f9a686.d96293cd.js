"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[61290],{22868:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"1200-1299/maximum-profit-in-job-scheduling-hard","title":"1235 - Maximum Profit in Job Scheduling (Hard)","description":"Author: @wingkwong | https://leetcode.com/problems/maximum-profit-in-job-scheduling/","source":"@site/solutions/1200-1299/1235-maximum-profit-in-job-scheduling-hard.md","sourceDirName":"1200-1299","slug":"/1200-1299/maximum-profit-in-job-scheduling-hard","permalink":"/solutions/1200-1299/maximum-profit-in-job-scheduling-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1235-maximum-profit-in-job-scheduling-hard.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Binary Search","permalink":"/solutions/tags/binary-search"},{"inline":true,"label":"Dynamic Programming","permalink":"/solutions/tags/dynamic-programming"},{"inline":true,"label":"Sorting","permalink":"/solutions/tags/sorting"}],"version":"current","sidebarPosition":1235,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/maximum-profit-in-job-scheduling/","tags":["Array","Binary Search","Dynamic Programming","Sorting"]},"sidebar":"tutorialSidebar","previous":{"title":"1232 - Check If It Is a Straight Line (Easy)","permalink":"/solutions/1200-1299/check-if-it-is-a-straight-line-easy"},"next":{"title":"1239 - Maximum Length of a Concatenated String with Unique Characters (Medium)","permalink":"/solutions/1200-1299/maximum-length-of-a-concatenated-string-with-unique-characters-medium"}}');var i=n(74848),m=n(28453);const r={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-profit-in-job-scheduling/",tags:["Array","Binary Search","Dynamic Programming","Sorting"]},l="1235 - Maximum Profit in Job Scheduling (Hard)",t={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2},{value:"Similar Problems",id:"similar-problems",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,m.R)(),...s.components},{SolutionAuthor:n,TabItem:a,Tabs:r}=e;return n||o("SolutionAuthor",!0),a||o("TabItem",!0),r||o("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"1235---maximum-profit-in-job-scheduling-hard",children:"1235 - Maximum Profit in Job Scheduling (Hard)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/maximum-profit-in-job-scheduling/",children:"https://leetcode.com/problems/maximum-profit-in-job-scheduling/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["We have ",(0,i.jsx)(e.code,{children:"n"})," jobs, where every job is scheduled to be done from ",(0,i.jsx)(e.code,{children:"startTime[i]"})," to ",(0,i.jsx)(e.code,{children:"endTime[i]"}),", obtaining a profit of ",(0,i.jsx)(e.code,{children:"profit[i]"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["You're given the ",(0,i.jsx)(e.code,{children:"startTime"}),", ",(0,i.jsx)(e.code,{children:"endTime"})," and ",(0,i.jsx)(e.code,{children:"profit"})," arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range."]}),"\n",(0,i.jsxs)(e.p,{children:["If you choose a job that ends at time ",(0,i.jsx)(e.code,{children:"X"})," you will be able to start another job that starts at time ",(0,i.jsx)(e.code,{children:"X"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2019/10/10/sample1_1584.png",alt:""})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]\nOutput: 120\nExplanation: The subset chosen is the first and fourth job. \nTime range [1-3]+[3-6] , we get profit of 120 = 50 + 70.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2019/10/10/sample22_1584.png",alt:""})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]\nOutput: 150\nExplanation: The subset chosen is the first, fourth and fifth job. \nProfit obtained 150 = 20 + 70 + 60.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2019/10/10/sample3_1584.png",alt:""})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]\nOutput: 6\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"T"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"T"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"f"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"h"}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"5"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mn,{children:"0"}),(0,i.jsx)(e.mn,{children:"4"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"tT"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"im"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord",children:"."}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"=="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"im"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord",children:"."}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"=="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ro"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord",children:"."}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"5"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"0"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"4"})})]})})})})})]})]})]})]})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"T"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"T"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mn,{children:"0"}),(0,i.jsx)(e.mn,{children:"9"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= startTime[i] < endTime[i] <= 10^9"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"tT"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"im"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"im"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"0"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"9"})})]})})})})})]})]})]})]})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"r"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"f"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{children:"<"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsxs)(e.msup,{children:[(0,i.jsx)(e.mn,{children:"0"}),(0,i.jsx)(e.mn,{children:"4"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"1 <= profit[i] <= 10^4"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ro"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"<="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord",children:"0"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,i.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"4"})})]})})})})})]})]})]})]})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,i.jsx)(r,{children:(0,i.jsxs)(a,{value:"cpp",label:"C++",children:[(0,i.jsx)(n,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"// TLE - idx + 1 is too slow\nclass Solution {\npublic:\n    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {\n        int n = startTime.size();\n        // rearrange the input\n        vector<array<int, 3>> events;\n        // put them together\n        for (int i = 0; i < n; i++) events.push_back({startTime[i], endTime[i], profit[i]});\n        // sort by startTime\n        sort(events.begin(), events.end());\n        // 1D dp\n        vector<int> dp(n, -1);\n        function<int(int,int)> dfs = [&](int idx, int end) {\n            // reached all events\n            if (idx == n) return 0;\n            // current start time <= previous end time\n            // cannot take it -> move to the next one\n            if (events[idx][0] < end) return dfs(idx + 1, end);\n            // calculate before -> return immediately\n            if (dp[idx] != -1) return dp[idx];\n            // so we only have two choices left, we either\n            return dp[idx] = max(\n                // choice 1: take this job and move to the next one from this end time\n                events[idx][2] + dfs(idx + 1, events[idx][1]),\n                // choice 2: not take this job and move to the next one\n                dfs(idx + 1, end)\n            );\n        };\n        return dfs(0, 0);\n    }\n};\n"})}),(0,i.jsx)(n,{name:"@wingkwong"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"// ACCEPTED by utilising lower_bound to move to the next available index\n// based on the above solution\nclass Solution {\npublic:\n    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {\n        int n = startTime.size();\n        // rearrange the input\n        vector<vector<int>> events;\n        // put them together\n        for (int i = 0; i < n; i++) events.push_back({startTime[i], endTime[i], profit[i]});\n        // sort by startTime\n        sort(events.begin(), events.end());\n        // 1D dp\n        vector<int> dp(n, -1);\n        function<int(int)> dfs = [&](int idx) {\n            // reached all events\n            if (idx == n) return 0;\n            // calculate before -> return immediately\n            if (dp[idx] != -1) return dp[idx];\n            vector<int> v = {events[idx][1], 0, 0};\n            // search for the next available idx\n            int nxt = lower_bound(events.begin(), events.end(), v) - events.begin();\n            // so we only have two choices left, we either\n            return dp[idx] = max(\n                // choice 1: take this job and move to the next one from this next event\n                events[idx][2] + dfs(nxt), \n                // choice 2: not take this job and move to the next one\n                dfs(idx + 1)\n            );\n        };\n        return dfs(0);\n    }\n};\n"})})]})}),"\n",(0,i.jsx)(e.h2,{id:"similar-problems",children:"Similar Problems"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"../1700-1799/maximum-number-of-events-that-can-be-attended-ii-hard",children:"1751 - Maximum Number of Events That Can Be Attended II (Hard)"})}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,m.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}function o(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>l});var a=n(96540);const i={},m=a.createContext(i);function r(s){const e=a.useContext(m);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:r(s.components),a.createElement(m.Provider,{value:e},s.children)}}}]);