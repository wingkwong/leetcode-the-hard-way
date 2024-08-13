"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[71920],{96351:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(85893),t=a(11151);const i={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"},l="1547 - Minimum Cost to Cut a Stick (Hard)",c={id:"1500-1599/minimum-cost-to-cut-a-stick-hard",title:"1547 - Minimum Cost to Cut a Stick (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",source:"@site/solutions/1500-1599/1547-minimum-cost-to-cut-a-stick-hard.md",sourceDirName:"1500-1599",slug:"/1500-1599/minimum-cost-to-cut-a-stick-hard",permalink:"/solutions/1500-1599/minimum-cost-to-cut-a-stick-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1547-minimum-cost-to-cut-a-stick-hard.md",tags:[],version:"current",sidebarPosition:1547,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"},sidebar:"tutorialSidebar",previous:{title:"1544 - Make The String Great (Easy)",permalink:"/solutions/1500-1599/make-the-string-great-easy"},next:{title:"1550 - Three Consecutive Odds (Easy)",permalink:"/solutions/1500-1599/three-consecutive-odds-easy"}},r={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...s.components},{SolutionAuthor:a}=e;return a||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"1547---minimum-cost-to-cut-a-stick-hard",children:"1547 - Minimum Cost to Cut a Stick (Hard)"}),"\n",(0,n.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",children:"https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"})}),"\n",(0,n.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(e.p,{children:["Given a wooden stick of length ",(0,n.jsx)(e.code,{children:"n"})," units. The stick is labelled from ",(0,n.jsx)(e.code,{children:"0"})," to ",(0,n.jsx)(e.code,{children:"n"}),". For example, a stick of length ",(0,n.jsx)(e.strong,{children:"6"})," is labelled as follows:"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2020/07/21/statement.jpg",alt:""})}),"\n",(0,n.jsxs)(e.p,{children:["Given an integer array ",(0,n.jsx)(e.code,{children:"cuts"})," where ",(0,n.jsx)(e.code,{children:"cuts[i]"})," denotes a position you should perform a cut at."]}),"\n",(0,n.jsx)(e.p,{children:"You should perform the cuts in order, you can change the order of the cuts as you wish."}),"\n",(0,n.jsx)(e.p,{children:"The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e. the sum of their lengths is the length of the stick before the cut). Please refer to the first example for a better explanation."}),"\n",(0,n.jsxs)(e.p,{children:["Return ",(0,n.jsx)(e.em,{children:"the minimum total cost"})," of the cuts."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://assets.leetcode.com/uploads/2020/07/23/e1.jpg",alt:""})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 7, cuts = [1,3,4,5]\nOutput: 16\nExplanation: Using cuts order = [1, 3, 4, 5] as in the input leads to the following scenario:\n\nThe first cut is done to a rod of length 7 so the cost is 7. The second cut is done to a rod of length 6 (i.e. the second part of the first cut), the third is done to a rod of length 4 and the last cut is to a rod of length 3. The total cost is 7 + 6 + 4 + 3 = 20.\nRearranging the cuts to be [3, 5, 1, 4] for example will lead to a scenario with total cost = 16 (as shown in the example photo 7 + 4 + 3 + 2 = 16).\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"Input: n = 9, cuts = [5,6,1,4,2]\nOutput: 22\nExplanation: If you try the given cuts ordering the cost will be 25.\nThere are much ordering with total cost <= 25, for example, the order [4, 6, 5, 2, 1] has total cost = 22 which is the minimum possible.\n"})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"2 <= n <= 10^6"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= cuts.length <= min(n - 1, 100)"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= cuts[i] <= n - 1"})}),"\n",(0,n.jsxs)(e.li,{children:["All the integers in ",(0,n.jsx)(e.code,{children:"cuts"})," array are ",(0,n.jsx)(e.strong,{children:"distinct"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,n.jsxs)(e.p,{children:["Let ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j]"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," be the minimum total cost between cut position ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"i"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),"and ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"j"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),". First let's add ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mn,{children:"0"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"0"})]})})]})," and ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"n"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," to the input for further calculation. Then we sort the input in ascending order. We can perform a dfs function ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mn,{children:"0"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"z"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"dfs(cuts, 0, (int) cuts.size() - 1)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"df"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"0"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mord",children:"."}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ze"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," to get the answer."]}),"\n",(0,n.jsxs)(e.p,{children:["Let's think of the base case first. Since the minimum length of a rod is ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mn,{children:"1"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})})]}),", we reach the destination when ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{children:"<"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"j - i <= 1"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6986em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"<="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," because we cannot make further cuts anymore. If ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[i][j]"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," has been calculated before, we can return it immediately."]}),"\n",(0,n.jsxs)(e.p,{children:["Otherwise, we iterate each position",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"k"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," and perform each possible cut. We know that the cost is the length of the rod to be cut, i.e. ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"cuts[j]  - cuts[i]"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"})]})]})]}),". In example 1, the first cut costs 7. Since we have added ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mn,{children:"0"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"0"})]})})]})," and ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"n"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]}),"to the input, so we have covered that. Once we cut at a certain point, the rod will be split into two parts. We perform the logic to calculate the costs for these two parts until we perform all the cuts."]}),"\n",(0,n.jsx)(a,{name:"@wingkwong"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // memoization\n    int dp[105][105];\n    int dfs(vector<int>& cuts, int i, int j) {\n        // the smallest rod has length of 1\n        if (j - i <= 1) return 0;\n        // if the cost is calculated before, return immediately\n        if (dp[i][j] != -1) return dp[i][j];\n        // we initialise a large number since we are looking for the minimum number\n        int ans = 1e9;\n        //\n        for (int k = i + 1; k < j; k++) {\n            // if this rod is to be cut, the cost is the length, \n            // i.e. cuts[j] - cuts[i]\n            // after the cut, it will be split into two parts\n            // then we calculate the cost for left rod : dfs(cuts, i, k) \n            // and the cost for the right rod: dfs(cuts, k, j)\n            ans = min(ans, cuts[j] - cuts[i] + dfs(cuts, i, k) + dfs(cuts, k, j));\n        }\n        // memoize the ans \n        return dp[i][j] = ans;\n    }\n    \n    int minCost(int n, vector<int>& cuts) {\n        cuts.push_back(0);\n        cuts.push_back(n);\n        sort(cuts.begin(), cuts.end());\n        memset(dp, -1, sizeof(dp));\n        return dfs(cuts, 0, (int) cuts.size() - 1);\n    }\n};\n"})})]})}function o(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>c,a:()=>l});var n=a(67294);const t={},i=n.createContext(t);function l(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:l(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);