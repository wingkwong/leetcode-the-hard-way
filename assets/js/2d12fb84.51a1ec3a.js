"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[37920],{86472:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"0900-0999/0923-3sum-with-multiplicity-medium","title":"0923 - 3Sum With Multiplicity (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/3sum-with-multiplicity/","source":"@site/solutions/0900-0999/0923-3sum-with-multiplicity-medium.md","sourceDirName":"0900-0999","slug":"/0900-0999/0923-3sum-with-multiplicity-medium","permalink":"/solutions/0900-0999/0923-3sum-with-multiplicity-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0923-3sum-with-multiplicity-medium.md","tags":[],"version":"current","frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/3sum-with-multiplicity/"},"sidebar":"tutorialSidebar","previous":{"title":"0994 - Rotting Oranges (Medium)","permalink":"/solutions/0900-0999/rotting-oranges-medium"},"next":{"title":"1000 - 1099","permalink":"/solutions/category/1000---1099"}}');var m=a(74848),l=a(28453);const i={description:"Author: @wingkwong | https://leetcode.com/problems/3sum-with-multiplicity/"},r="0923 - 3Sum With Multiplicity (Medium)",c={},t=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map + Binomial",id:"approach-1-hash-map--binomial",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components},{SolutionAuthor:a}=e;return a||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(e.header,{children:(0,m.jsx)(e.h1,{id:"0923---3sum-with-multiplicity-medium",children:"0923 - 3Sum With Multiplicity (Medium)"})}),"\n",(0,m.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.a,{href:"https://leetcode.com/problems/3sum-with-multiplicity/",children:"https://leetcode.com/problems/3sum-with-multiplicity/"})}),"\n",(0,m.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,m.jsxs)(e.p,{children:["Given an integer array ",(0,m.jsx)(e.code,{children:"arr"}),", and an integer ",(0,m.jsx)(e.code,{children:"target"}),", return the number of tuples ",(0,m.jsx)(e.code,{children:"i, j, k"})," such that ",(0,m.jsx)(e.code,{children:"i < j < k"})," and ",(0,m.jsx)(e.code,{children:"arr[i] + arr[j] + arr[k] == target"}),"."]}),"\n",(0,m.jsxs)(e.p,{children:["As the answer can be very large, return it ",(0,m.jsx)(e.strong,{children:"modulo"})," ",(0,m.jsx)(e.code,{children:"10^9 + 7"}),"."]}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{children:"Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8\nOutput: 20\nExplanation: \nEnumerating by the values (arr[i], arr[j], arr[k]):\n(1, 2, 5) occurs 8 times;\n(1, 3, 4) occurs 8 times;\n(2, 2, 4) occurs 2 times;\n(2, 3, 3) occurs 2 times.\n"})}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{children:"Input: arr = [1,1,2,2,2,2], target = 5\nOutput: 12\nExplanation: \narr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:\nWe choose one 1 from [1,1] in 2 ways,\nand two 2s from [2,2,2,2] in 6 ways.\n"})}),"\n",(0,m.jsx)(e.p,{children:(0,m.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,m.jsxs)(e.ul,{children:["\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.code,{children:"3 <= arr.length <= 3000"})}),"\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.code,{children:"0 <= arr[i] <= 100"})}),"\n",(0,m.jsx)(e.li,{children:(0,m.jsx)(e.code,{children:"0 <= target <= 300"})}),"\n"]}),"\n",(0,m.jsx)(e.h2,{id:"approach-1-hash-map--binomial",children:"Approach 1: Hash Map + Binomial"}),"\n",(0,m.jsxs)(e.p,{children:["We can use hash map to store the frequency for each number. As we know ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"x"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"y"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"z"}),(0,m.jsx)(e.mo,{children:"="}),(0,m.jsx)(e.mo,{children:"="}),(0,m.jsx)(e.mi,{children:"t"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mi,{children:"r"}),(0,m.jsx)(e.mi,{children:"g"}),(0,m.jsx)(e.mi,{children:"e"}),(0,m.jsx)(e.mi,{children:"t"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"x + y + z == target"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.jsx)(e.span,{className:"mrel",children:"=="}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]}),", we can break it down into 4 cases, which are"]}),"\n",(0,m.jsxs)(e.ul,{children:["\n",(0,m.jsxs)(e.li,{children:["Case 1: ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{children:"="}),(0,m.jsx)(e.mo,{children:"="}),(0,m.jsx)(e.mi,{children:"t"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mi,{children:"r"}),(0,m.jsx)(e.mi,{children:"g"}),(0,m.jsx)(e.mi,{children:"e"}),(0,m.jsx)(e.mi,{children:"t"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"i + i + i == target"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.jsx)(e.span,{className:"mrel",children:"=="}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]})]}),"\n",(0,m.jsxs)(e.li,{children:["Case 2: ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"j"}),(0,m.jsx)(e.mo,{children:"="}),(0,m.jsx)(e.mo,{children:"="}),(0,m.jsx)(e.mi,{children:"t"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mi,{children:"r"}),(0,m.jsx)(e.mi,{children:"g"}),(0,m.jsx)(e.mi,{children:"e"}),(0,m.jsx)(e.mi,{children:"t"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"i + i + j == target"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.jsx)(e.span,{className:"mrel",children:"=="}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]})]}),"\n",(0,m.jsxs)(e.li,{children:["Case 3: ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"j"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"j"}),(0,m.jsx)(e.mo,{children:"="}),(0,m.jsx)(e.mo,{children:"="}),(0,m.jsx)(e.mi,{children:"t"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mi,{children:"r"}),(0,m.jsx)(e.mi,{children:"g"}),(0,m.jsx)(e.mi,{children:"e"}),(0,m.jsx)(e.mi,{children:"t"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"i + j + j == target"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.jsx)(e.span,{className:"mrel",children:"=="}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]})]}),"\n",(0,m.jsxs)(e.li,{children:["Case 4: ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"j"}),(0,m.jsx)(e.mo,{children:"+"}),(0,m.jsx)(e.mi,{children:"k"}),(0,m.jsx)(e.mo,{children:"="}),(0,m.jsx)(e.mo,{children:"="}),(0,m.jsx)(e.mi,{children:"t"}),(0,m.jsx)(e.mi,{children:"a"}),(0,m.jsx)(e.mi,{children:"r"}),(0,m.jsx)(e.mi,{children:"g"}),(0,m.jsx)(e.mi,{children:"e"}),(0,m.jsx)(e.mi,{children:"t"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"i + j + k == target"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"+"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.jsx)(e.span,{className:"mrel",children:"=="}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]})]}),"\n"]}),"\n",(0,m.jsxs)(e.p,{children:["where ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{children:"<"}),(0,m.jsx)(e.mi,{children:"j"}),(0,m.jsx)(e.mo,{children:"<"}),(0,m.jsx)(e.mi,{children:"k"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"i < j < k"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6986em",verticalAlign:"-0.0391em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.jsx)(e.span,{className:"mrel",children:"<"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.jsx)(e.span,{className:"mrel",children:"<"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})]})]}),"."]}),"\n",(0,m.jsxs)(e.p,{children:["For case 1, how many ways we can choose three different indices with value ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsx)(e.mrow,{children:(0,m.jsx)(e.mi,{children:"i"})}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),"? It is same as choosing ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsx)(e.mrow,{children:(0,m.jsx)(e.mn,{children:"3"})}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,m.jsx)(e.span,{className:"mord",children:"3"})]})})]})," elements from ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"m[i]"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})})]}),", which is equivalent to ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"\u2217"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"("}),(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"\u2212"}),(0,m.jsx)(e.mn,{children:"1"}),(0,m.jsx)(e.mo,{stretchy:"false",children:")"}),(0,m.jsx)(e.mo,{children:"\u2217"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"("}),(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"\u2212"}),(0,m.jsx)(e.mn,{children:"2"}),(0,m.jsx)(e.mo,{stretchy:"false",children:")"}),(0,m.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,m.jsx)(e.mn,{children:"6"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"m[i] * (m[i] - 1) * (m[i] - 2) / 6"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mopen",children:"("}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord",children:"1"}),(0,m.jsx)(e.span,{className:"mclose",children:")"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mopen",children:"("}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord",children:"2"}),(0,m.jsx)(e.span,{className:"mclose",children:")"}),(0,m.jsx)(e.span,{className:"mord",children:"/6"})]})]})]}),"."]}),"\n",(0,m.jsx)(e.p,{children:"Let's define our nChooseK function here."}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{className:"language-cpp",children:"  template <typename T>\n  T binomial(int64_t N, int64_t K) {\n    if (K < 0 || N < K) return 0;\n    T ret = 1;\n    for (T i = 1; i <= K; ++i) {\n      ret *= N--;\n      ret /= i;\n    }\n    return ret;\n  }\n"})}),"\n",(0,m.jsxs)(e.p,{children:["For case 2, we need to choose ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsx)(e.mrow,{children:(0,m.jsx)(e.mn,{children:"2"})}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,m.jsx)(e.span,{className:"mord",children:"2"})]})})]})," elements from ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"m[i]"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," and multiply by ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"j"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"m[j]"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})})]}),"."]}),"\n",(0,m.jsxs)(e.p,{children:["For case 3, we need to choose ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsx)(e.mrow,{children:(0,m.jsx)(e.mn,{children:"2"})}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,m.jsx)(e.span,{className:"mord",children:"2"})]})})]})," elements from ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"j"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"m[j]"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," and multiply by ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"m[i]"})]})})}),(0,m.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})})]}),"."]}),"\n",(0,m.jsxs)(e.p,{children:["For case 4, there are ",(0,m.jsxs)(e.span,{className:"katex",children:[(0,m.jsx)(e.span,{className:"katex-mathml",children:(0,m.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,m.jsxs)(e.semantics,{children:[(0,m.jsxs)(e.mrow,{children:[(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"i"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"\u2217"}),(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"j"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,m.jsx)(e.mo,{children:"\u2217"}),(0,m.jsx)(e.mi,{children:"m"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"["}),(0,m.jsx)(e.mi,{children:"k"}),(0,m.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,m.jsx)(e.annotation,{encoding:"application/x-tex",children:"m[i] * m[j] * m[k]"})]})})}),(0,m.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,m.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,m.jsxs)(e.span,{className:"base",children:[(0,m.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,m.jsx)(e.span,{className:"mopen",children:"["}),(0,m.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,m.jsx)(e.span,{className:"mclose",children:"]"})]})]})]})," ways."]}),"\n",(0,m.jsx)(a,{name:"@wingkwong"}),"\n",(0,m.jsx)(e.pre,{children:(0,m.jsx)(e.code,{className:"language-cpp",children:"int threeSumMulti(vector<int>& arr, int target) {\n    unordered_map<int, long> m;\n    long ans = 0;\n    int M = 1e9 + 7;\n    // count the frequency for each number\n    for(int x : arr) m[x]++;\n    // iterate i\n    for(int i = 0; i <= 100; i++) {\n        // case 1: i + i + i == target\n        // choose 3 from m[i]\n        if(i + i + i == target) ans += binomial<long>(m[i], 3);\n        // iterate j \n        // make sure i < j\n        for(int j = i + 1; j <= 100; j++) {\n            int k = target - i - j;\n            // case 2: i + i + j == target\n            // choose 2 from m[i] * m[j]\n            if(i + i + j == target) ans += binomial<long>(m[i], 2) * m[j];\n            // case 3: i + j + j == target\n            // choose 2 from m[j] * m[i]\n            else if (i + j + j == target) ans += m[i] * binomial<long>(m[j], 2);\n            // case 4: i + j + k == target\n            // make sure j < k\n            // choose 1 from m[i], 1 from [j] and 1 from m[k]\n            else if(j < k && i + j + k == target) ans += m[i] * m[j] * m[k];\n        }\n    }\n    return ans % M;\n"})})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,m.jsx)(e,{...s,children:(0,m.jsx)(h,{...s})}):h(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>r});var n=a(96540);const m={},l=n.createContext(m);function i(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(m):s.components||m:i(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);