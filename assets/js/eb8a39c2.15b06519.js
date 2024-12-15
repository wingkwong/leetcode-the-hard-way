"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[53688],{81579:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"2100-2199/minimum-time-to-finish-the-race-hard","title":"2188 - Minimum Time to Finish the Race (Hard)","description":"Author: @heiheihang | https://leetcode.com/problems/minimum-time-to-finish-the-race/","source":"@site/solutions/2100-2199/2188-minimum-time-to-finish-the-race-hard.md","sourceDirName":"2100-2199","slug":"/2100-2199/minimum-time-to-finish-the-race-hard","permalink":"/solutions/2100-2199/minimum-time-to-finish-the-race-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2188-minimum-time-to-finish-the-race-hard.md","tags":[],"version":"current","sidebarPosition":2188,"frontMatter":{"description":"Author: @heiheihang | https://leetcode.com/problems/minimum-time-to-finish-the-race/"},"sidebar":"tutorialSidebar","previous":{"title":"2187 - Minimum Time to Complete Trips (Medium)","permalink":"/solutions/2100-2199/minimum-time-to-complete-trips-medium"},"next":{"title":"2190 - Most Frequent Number Following Key In an Array (Easy)","permalink":"/solutions/2100-2199/most-frequent-number-following-key-in-an-array-easy"}}');var i=n(74848),t=n(28453);const l={description:"Author: @heiheihang | https://leetcode.com/problems/minimum-time-to-finish-the-race/"},r="2188 - Minimum Time to Finish the Race (Hard)",c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}];function m(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"2188---minimum-time-to-finish-the-race-hard",children:"2188 - Minimum Time to Finish the Race (Hard)"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://leetcode.com/problems/minimum-time-to-finish-the-race/",children:"https://leetcode.com/problems/minimum-time-to-finish-the-race/"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(s.p,{children:["You are given a ",(0,i.jsx)(s.strong,{children:"0-indexed"})," 2D integer array ",(0,i.jsx)(s.code,{children:"tires"})," where ",(0,i.jsx)(s.code,{children:"tires[i] = [fi, ri]"})," indicates that the ",(0,i.jsx)(s.code,{children:"ith"})," tire can finish its ",(0,i.jsx)(s.code,{children:"xth"})," successive lap in ",(0,i.jsx)(s.code,{children:"fi * ri(x-1)"})," seconds."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["For example, if ",(0,i.jsx)(s.code,{children:"fi = 3"})," and ",(0,i.jsx)(s.code,{children:"ri = 2"}),", then the tire would finish its ",(0,i.jsx)(s.code,{children:"1st"})," lap in ",(0,i.jsx)(s.code,{children:"3"})," seconds, its ",(0,i.jsx)(s.code,{children:"2nd"})," lap in ",(0,i.jsx)(s.code,{children:"3 * 2 = 6"})," seconds, its ",(0,i.jsx)(s.code,{children:"3rd"})," lap in ",(0,i.jsx)(s.code,{children:"3 * 22 = 12"})," seconds, etc."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["You are also given an integer ",(0,i.jsx)(s.code,{children:"changeTime"})," and an integer ",(0,i.jsx)(s.code,{children:"numLaps"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["The race consists of ",(0,i.jsx)(s.code,{children:"numLaps"})," laps and you may start the race with ",(0,i.jsx)(s.strong,{children:"any"})," tire. You have an ",(0,i.jsx)(s.strong,{children:"unlimited"})," supply of each tire and after every lap, you may ",(0,i.jsx)(s.strong,{children:"change"})," to any given tire (including the current tire type) if you wait ",(0,i.jsx)(s.code,{children:"changeTime"})," seconds."]}),"\n",(0,i.jsxs)(s.p,{children:["Return ",(0,i.jsxs)(s.em,{children:["the ",(0,i.jsx)(s.strong,{children:"minimum"})," time to finish the race."]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: tires = [[2,3],[3,4]], changeTime = 5, numLaps = 4\nOutput: 21\nExplanation: \nLap 1: Start with tire 0 and finish the lap in 2 seconds.\nLap 2: Continue with tire 0 and finish the lap in 2 * 3 = 6 seconds.\nLap 3: Change tires to a new tire 0 for 5 seconds and then finish the lap in another 2 seconds.\nLap 4: Continue with tire 0 and finish the lap in 2 * 3 = 6 seconds.\nTotal time = 2 + 6 + 5 + 2 + 6 = 21 seconds.\nThe minimum time to complete the race is 21 seconds.\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Input: tires = [[1,10],[2,2],[3,4]], changeTime = 6, numLaps = 5\nOutput: 25\nExplanation: \nLap 1: Start with tire 1 and finish the lap in 2 seconds.\nLap 2: Continue with tire 1 and finish the lap in 2 * 2 = 4 seconds.\nLap 3: Change tires to a new tire 1 for 6 seconds and then finish the lap in another 2 seconds.\nLap 4: Continue with tire 1 and finish the lap in 2 * 2 = 4 seconds.\nLap 5: Change tires to tire 0 for 6 seconds then finish the lap in another 1 second.\nTotal time = 2 + 4 + 6 + 2 + 4 + 6 + 1 = 25 seconds.\nThe minimum time to complete the race is 25 seconds. \n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"1 <= tires.length <= 10^5"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"tires[i].length == 2"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"1 <= fi, changeTime <= 10^5"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"2 <= ri <= 10^5"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"1 <= numLaps <= 1000"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"approach-1-dp",children:"Approach 1: DP"}),"\n",(0,i.jsx)(s.p,{children:"The general approach is to store the minimum time required to travel each lap. We must make the following observation:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["To travel ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"n"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," laps, we must use the same tire for ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"n"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," laps, or we can use the set of tires used to travel ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"a"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"})]})})]})," laps and another set of tires used to travel ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"b"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"b"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"b"})]})})]})," laps such that ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mo,{children:"+"}),(0,i.jsx)(s.mi,{children:"b"}),(0,i.jsx)(s.mo,{children:"="}),(0,i.jsx)(s.mi,{children:"n"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"a+b=n"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"+"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(s.span,{className:"mrel",children:"="}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})]})]}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Before we can find an optimal set of tires to travel ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"n"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," laps, we can only consider using the same tire to travel ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mn,{children:"1"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(s.span,{className:"mord",children:"1"})]})})]})," to ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"n"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," laps"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"We can now break this problem into 2 parts:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Find the shortest time to travel ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"n"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," laps when we can only use 1 tire at a time"]}),"\n",(0,i.jsxs)(s.li,{children:["Find the shortest time to travel ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"n"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," laps by potentially choosing the time needed to travel ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"a"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"})]})})]})," laps and the time needed to travel ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"b"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"b"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"b"})]})})]})," laps such that we can travel ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsx)(s.mi,{children:"n"})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," laps with ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"m"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"}),(0,i.jsx)(s.mo,{children:"+"}),(0,i.jsx)(s.mi,{children:"t"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"m"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mo,{stretchy:"false",children:"("}),(0,i.jsx)(s.mi,{children:"b"}),(0,i.jsx)(s.mo,{stretchy:"false",children:")"}),(0,i.jsx)(s.mo,{children:"+"}),(0,i.jsx)(s.mi,{children:"c"}),(0,i.jsx)(s.mi,{children:"h"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"g"}),(0,i.jsx)(s.mi,{children:"e"}),(0,i.jsx)(s.mi,{children:"T"}),(0,i.jsx)(s.mi,{children:"i"}),(0,i.jsx)(s.mi,{children:"m"}),(0,i.jsx)(s.mi,{children:"e"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"time(a)+time(b)+changeTime"})]})})}),(0,i.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"im"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mclose",children:")"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"+"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"im"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(s.span,{className:"mopen",children:"("}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,i.jsx)(s.span,{className:"mclose",children:")"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(s.span,{className:"mbin",children:"+"}),(0,i.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"han"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"im"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"e"})]})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The first part is straightforward as we only need to iterate each tire for ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsxs)(s.mrow,{children:[(0,i.jsx)(s.mi,{children:"n"}),(0,i.jsx)(s.mi,{children:"u"}),(0,i.jsx)(s.mi,{children:"m"}),(0,i.jsx)(s.mi,{children:"L"}),(0,i.jsx)(s.mi,{children:"a"}),(0,i.jsx)(s.mi,{children:"p"}),(0,i.jsx)(s.mi,{children:"s"})]}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"numLaps"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"L"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(s.span,{className:"mord mathnormal",children:"s"})]})})]})," times. However, we need some optimizations to stop iterating when the following condition is met"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"f_i * (r_i) ^ n >= time[(n+1)//2] + time[(n+1)//2] + changeTime\n"})}),"\n",(0,i.jsx)(s.p,{children:"Notice that the above condition is not optimally the upper bound, but it is good enough to break the loop. We know that we can stop here because using the same tire increases exponentially, and further combining previous sets of tires increases linearly."}),"\n",(0,i.jsx)(s.p,{children:"The second part involves looking for a combination of laps for each lap. For example, if we want to find the minimum time for running 9 laps, we need to find the following"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"dp[1] + dp[8] + changeTime"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"dp[2] + dp[7] + changeTime"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"dp[3] + dp[6] + changeTime"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"dp[4] + dp[5] + changeTime"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Of course, if there exists a tire running 9 laps in a row that is fast than the above, we keep it."}),"\n",(0,i.jsx)(s.p,{children:"A small optimisation here is that instead of generating repeating pairs ([1,8] and [8,1]), we can cut each loop by half."}),"\n",(0,i.jsx)(s.p,{children:"Here is a dry run of the following test case:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"tires = [2,3], [3,3], [3, 2], changeTime = 5, numLaps = 6\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://user-images.githubusercontent.com/35857179/168303953-913d229c-ce49-4480-8810-a7b397856140.png",alt:"image"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://user-images.githubusercontent.com/35857179/168303969-2225c532-7582-4940-ab0f-5a76a3662e60.png",alt:"image"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://user-images.githubusercontent.com/35857179/168303988-5ec8284a-8690-4702-a363-a14a2f963cd9.png",alt:"image"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://user-images.githubusercontent.com/35857179/168304003-39cee495-675e-4b33-b813-4fd1ee280ea8.png",alt:"image"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://user-images.githubusercontent.com/35857179/168304019-dfb9f067-4556-44e8-9c2e-c19e42f8415c.png",alt:"image"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://user-images.githubusercontent.com/35857179/168304028-cf195b2c-3e05-4736-b950-a0c5851fcc20.png",alt:"image"})}),"\n",(0,i.jsx)(n,{name:"@heiheihang"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"def minimumFinishTime(self, tires: List[List[int]], changeTime: int, numLaps: int) -> int:\n\n    # initialize DP Array\n    # it keeps track of the shortest time needed to finish each lap\n    dp = [float('inf')] * (numLaps + 1)\n\n    # initialize the shortest time needed to finish each lap with 1 tire only\n    for f, r in tires:\n\n        # initialize the finishing time\n        time = f\n\n        # initialize the number of laps\n        cnt = 1\n\n        # hard upper limit is numLaps\n        while(cnt <= numLaps):\n\n            # a terminating condition if continually running the same lap is slower\n            if(dp[(cnt + 1) // 2] * 2 + changeTime <= time):\n                dp[cnt] = min(dp[(cnt + 1) // 2] * 2 + changeTime, dp[cnt])\n                break\n            else:\n                # update the shortest time needed to finish cnt laps\n                dp[cnt] = min(dp[cnt], time)\n\n            # update finishing time and number of laps\n            time += f * (r ** (cnt))\n            cnt += 1\n\n    # check for all small + big = i\n    for i in range(2, numLaps+1):\n        for j in range(1, i // 2 + 1):\n\n            small = j\n            big = i - j\n\n            # remember to add changeTime if we combine two previous sets of tires\n            dp[i] = min(dp[i], dp[small] + dp[big] + changeTime)\n\n    return dp[-1]\n\n"})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>r});var a=n(96540);const i={},t=a.createContext(i);function l(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);