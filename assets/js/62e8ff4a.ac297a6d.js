"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[87453],{45056:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"0700-0799/champagne-tower-medium","title":"0799 - Champagne Tower (Medium)","description":"Author: @wkw | https://leetcode.com/problems/champagne-tower/","source":"@site/solutions/0700-0799/0799-champagne-tower-medium.md","sourceDirName":"0700-0799","slug":"/0700-0799/champagne-tower-medium","permalink":"/solutions/0700-0799/champagne-tower-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0799-champagne-tower-medium.md","tags":[{"inline":true,"label":"Dynamic Programming","permalink":"/solutions/tags/dynamic-programming"}],"version":"current","sidebarPosition":799,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/champagne-tower/","tags":["Dynamic Programming"]},"sidebar":"tutorialSidebar","previous":{"title":"0787 - Cheapest Flights Within K Stops (Medium)","permalink":"/solutions/0700-0799/cheapest-flights-within-k-stops-medium"},"next":{"title":"0800 - 0899","permalink":"/solutions/category/0800---0899"}}');var l=a(86070),r=a(32790);const t={description:"Author: @wkw | https://leetcode.com/problems/champagne-tower/",tags:["Dynamic Programming"]},i="0799 - Champagne Tower (Medium)",m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...s.components},{SolutionAuthor:a,TabItem:n,Tabs:t}=e;return a||o("SolutionAuthor",!0),n||o("TabItem",!0),t||o("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"0799---champagne-tower-medium",children:"0799 - Champagne Tower (Medium)"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://leetcode.com/problems/champagne-tower/",children:"https://leetcode.com/problems/champagne-tower/"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,l.jsxs)(e.p,{children:["We stack glasses in a pyramid, where the ",(0,l.jsx)(e.strong,{children:"first"})," row has ",(0,l.jsx)(e.code,{children:"1"})," glass, the ",(0,l.jsx)(e.strong,{children:"second"})," row has ",(0,l.jsx)(e.code,{children:"2"})," glasses, and so on until the 100th row. Each glass holds one cup of champagne."]}),"\n",(0,l.jsx)(e.p,{children:"Then, some champagne is poured into the first glass at the top. When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it. When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on. (A glass at the bottom row has its excess champagne fall on the floor.)"}),"\n",(0,l.jsx)(e.p,{children:"For example, after one cup of champagne is poured, the top most glass is full. After two cups of champagne are poured, the two glasses on the second row are half full. After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now. After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full, as pictured below."}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/03/09/tower.png",alt:""})}),"\n",(0,l.jsxs)(e.p,{children:["Now after pouring some non-negative integer cups of champagne, return how full the ",(0,l.jsx)(e.code,{children:"jth"})," glass in the ",(0,l.jsx)(e.code,{children:"ith"})," row is (both ",(0,l.jsx)(e.code,{children:"i"})," and ",(0,l.jsx)(e.code,{children:"j"})," are 0-indexed.)"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Input: poured = 1, query_row = 1, query_glass = 1\nOutput: 0.00000\nExplanation: We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0)). There will be no excess liquid so all the glasses under the top glass will remain empty.\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Input: poured = 2, query_row = 1, query_glass = 1\nOutput: 0.50000\nExplanation: We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0)). There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange.\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Input: poured = 100000009, query_row = 33, query_glass = 17\nOutput: 1.00000\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"0 <= poured <= 10^9"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"0 <= query_glass <= query_row < 100"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"approach-1-dp",children:"Approach 1: DP"}),"\n",(0,l.jsxs)(e.p,{children:["Let ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j]"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," be the amount poured to a glass located at row ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"i"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," and column ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"j"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),". We know that the topmost glass is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"d"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"poured"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"re"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"})]})})]})," so the base case is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"d"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[0][0] = poured"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"re"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"})]})]})]}),". If the glass has excess liquid, then it will fall equal to the glass to the left and the right of it. It means if ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j]"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," is greater than ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mn,{children:"1"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})})]}),", then the overflow ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j] - 1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),"will be equally distributed to the glass to the left ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i + 1][j]"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})]})]})," and to the right ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i + 1][j + 1]"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})]})]}),". We can just simulate it and return the answer. Since ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"q"}),(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mi,{children:"R"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"w"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"q"}),(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mi,{children:"G"}),(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"s"}),(0,l.jsx)(e.mi,{children:"s"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[queryRow][queryGlass]"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"ery"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"ery"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"Gl"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"ss"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," may exceed ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mn,{children:"1"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})})]}),", we need to return ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mn,{children:"1"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})})]}),"in this case."]}),"\n",(0,l.jsx)(t,{children:(0,l.jsxs)(n,{value:"cpp",label:"C++",children:[(0,l.jsx)(a,{name:"@wkw"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    double champagneTower(int poured, int query_row, int query_glass) {\n        vector<vector<double>> dp(query_row + 2, vector<double>(query_glass + 2));\n        // the topmost glass\n        dp[0][0] = poured;\n        for (int i = 0; i <= query_row; i++) {\n            for (int j = 0; j <= query_glass; j++) {\n                // check if has any excess liquid\n                if (dp[i][j] > 1.0) {\n                    // if so, amount - capacity of glass (1.0) = overflow\n                    double overflow = dp[i][j] - 1.0;\n                    // distribute to the left and right equally\n                    dp[i + 1][j] += overflow / 2;\n                    dp[i + 1][j + 1] += overflow / 2;\n                }\n            }\n        }\n        // dp[query_row][query_glass] may have excess liquid\n        // take min to avoid it\n        return min(1.0, dp[query_row][query_glass]);\n    }\n};\n"})})]})}),"\n",(0,l.jsxs)(e.p,{children:["We can see that the row ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"i"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," depends on ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"i - 1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," row so we can use 1D array to store the state. Let ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"j"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[j]"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," be the amount poured to a glass located at ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"j"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]})," column. We use ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"ndp"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"})]})})]})," to store the current state while ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mi,{children:"p"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"})]})})]})," state stores the previous state. We swap them for every row, i.e. transit the state from row ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"i"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," to row ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"i + 1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),"."]}),"\n",(0,l.jsxs)(t,{children:[(0,l.jsxs)(n,{value:"cpp",label:"C++",children:[(0,l.jsx)(a,{name:"@wkw"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    double champagneTower(int poured, int query_row, int query_glass) {\n        vector<double> dp(query_glass + 2);\n        // the topmost glass\n        dp[0] = poured;\n        for (int i = 0; i < query_row; i++) {\n            // use ndp to store the current state\n            // while dp here is the previous state\n            vector<double> ndp(query_glass + 2);\n            for (int j = 0; j <= query_glass; j++) {\n                // check if has any excess liquid\n                if (dp[j] > 1.0) {\n                    // if so, amount - capacity of glass (1.0) = overflow\n                    double overflow = dp[j] - 1.0;\n                    // distribute to the left and right equally\n                    ndp[j] += overflow / 2;\n                    ndp[j + 1] += overflow / 2;\n                }\n            }\n            // transit the state from row i to row i + 1\n            swap(dp, ndp);\n        }\n        // dp[query_glass] may have excess liquid\n        // take min to avoid it\n        return min(1.0, dp[query_glass]);\n    }\n};\n"})})]}),(0,l.jsxs)(n,{value:"kotlin",label:"Kotlin",children:[(0,l.jsx)(a,{name:"@wkw"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-kt",children:"class Solution {\n    fun champagneTower(poured: Int, query_row: Int, query_glass: Int): Double {\n        var dp = DoubleArray(query_glass + 2)\n        // the topmost glass\n        dp[0] = poured.toDouble()\n        for (i in 0 until query_row) {\n            // use ndp to store the current state\n            // while dp here is the previous state\n            val ndp = DoubleArray(query_glass + 2)\n            for (j in 0 .. query_glass) {\n                // check if has any excess liquid\n                if (dp[j] > 1.0) {\n                    // if so, amount - capacity of glass (1.0) = overflow\n                    val overflow = dp[j] - 1.0\n                    // distribute to the left and right equally\n                    ndp[j] += overflow / 2\n                    ndp[j + 1] += overflow / 2\n                }\n            }\n            // transit the state from row i to row i + 1\n            dp = ndp\n        }\n        // dp[query_glass] may have excess liquid\n        // take min to avoid it\n        return minOf(1.0, dp[query_glass])\n    }\n}\n"})})]})]})]})}function d(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}function o(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>i});var n=a(30758);const l={},r=n.createContext(l);function t(s){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(r.Provider,{value:e},s.children)}}}]);