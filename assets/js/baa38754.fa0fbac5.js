"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[45224],{59016:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"0700-0799/delete-and-earn-medium","title":"0740 - Delete and Earn (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/delete-and-earn/","source":"@site/solutions/0700-0799/0740-delete-and-earn-medium.md","sourceDirName":"0700-0799","slug":"/0700-0799/delete-and-earn-medium","permalink":"/solutions/0700-0799/delete-and-earn-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0740-delete-and-earn-medium.md","tags":[],"version":"current","sidebarPosition":740,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/delete-and-earn/"},"sidebar":"tutorialSidebar","previous":{"title":"0739 - Daily Temperatures","permalink":"/solutions/0700-0799/daily-temperatures-medium"},"next":{"title":"0743 - Network Delay Time (Medium)","permalink":"/solutions/0700-0799/network-delay-time-medium"}}');var l=n(74848),t=n(28453);const i={description:"Author: @wingkwong | https://leetcode.com/problems/delete-and-earn/"},r="0740 - Delete and Earn (Medium)",m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}];function h(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"0740---delete-and-earn-medium",children:"0740 - Delete and Earn (Medium)"})}),"\n",(0,l.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.a,{href:"https://leetcode.com/problems/delete-and-earn/",children:"https://leetcode.com/problems/delete-and-earn/"})}),"\n",(0,l.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,l.jsxs)(s.p,{children:["You are given an integer array ",(0,l.jsx)(s.code,{children:"nums"}),". You want to maximize the number of points you get by performing the following operation any number of times:"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Pick any ",(0,l.jsx)(s.code,{children:"nums[i]"})," and delete it to earn ",(0,l.jsx)(s.code,{children:"nums[i]"})," points. Afterwards, you must delete ",(0,l.jsx)(s.strong,{children:"every"})," element equal to ",(0,l.jsx)(s.code,{children:"nums[i] - 1"})," and ",(0,l.jsx)(s.strong,{children:"every"})," element equal to ",(0,l.jsx)(s.code,{children:"nums[i] + 1"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Return ",(0,l.jsxs)(s.em,{children:["the ",(0,l.jsx)(s.strong,{children:"maximum number of points"})," you can earn by applying the above operation some number of times"]}),"."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"Input: nums = [3,4,2]\nOutput: 6\nExplanation: You can perform the following operations:\n- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].\n- Delete 2 to earn 2 points. nums = [].\nYou earn a total of 6 points.\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"Input: nums = [2,2,3,3,3,4]\nOutput: 9\nExplanation: You can perform the following operations:\n- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].\n- Delete a 3 again to earn 3 points. nums = [3].\n- Delete a 3 once more to earn 3 points. nums = [].\nYou earn a total of 9 points.\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"1 <= nums.length <= 2 * 10^4"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"1 <= nums[i] <= 10^4"})}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"approach-1-dp",children:"Approach 1: DP"}),"\n",(0,l.jsxs)(s.p,{children:["Let ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp[i]"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," be the maximum number of points you can earn by apply the operation till number ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsx)(s.mi,{children:"i"})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["If we pick ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsx)(s.mn,{children:"1"})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"})]})})]}),", we can earn ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp[1]"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),". If we pick ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsx)(s.mn,{children:"2"})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(s.span,{className:"mord",children:"2"})]})})]}),", we can earn ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mn,{children:"2"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp[2]"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord",children:"2"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),". If we pick ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsx)(s.mn,{children:"3"})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"3"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(s.span,{className:"mord",children:"3"})]})})]}),", then we cannot pick ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsx)(s.mn,{children:"2"})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"2"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(s.span,{className:"mord",children:"2"})]})})]})," but we can earn ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mn,{children:"3"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp[3]"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord",children:"3"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," + ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp[1]"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),". If we don't pick it, then the max point we can earn is the previous state which is ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mn,{children:"2"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp[2]"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord",children:"2"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"})]})})]}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Therefore, the transition will be ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(s.mo,{children:"="}),(0,l.jsx)(s.mi,{children:"m"}),(0,l.jsx)(s.mi,{children:"a"}),(0,l.jsx)(s.mi,{children:"x"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{children:"\u2212"}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(s.mo,{separator:"true",children:","}),(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{children:"\u2212"}),(0,l.jsx)(s.mn,{children:"2"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(s.mo,{children:"+"}),(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"["}),(0,l.jsx)(s.mi,{children:"i"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"dp[i] = max(dp[i - 1], dp[i - 2] + dp[i])"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"="}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"ma"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"}),(0,l.jsx)(s.span,{className:"mpunct",children:","}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord",children:"2"}),(0,l.jsx)(s.span,{className:"mclose",children:"]"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"+"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mopen",children:"["}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,l.jsx)(s.span,{className:"mclose",children:"])"})]})]})]}),". We either take the previous state (i.e. not pick the current number) or take the current number, skip the previous state and get the two states before the current one."]}),"\n",(0,l.jsx)(n,{name:"@wingkwong"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int deleteAndEarn(vector<int>& nums) {\n        // we find out the max value \n        // instead of trying from 1 to 10 ^ 4\n        int n = *max_element(nums.begin(), nums.end());\n        // init dp\n        vector<int> dp(n + 1);\n        // dp[i] = max number of points if we pick number i\n        for (auto x : nums) dp[x] += x;\n        for (int i = 2; i <= n; i++) {\n            // if we don't pick the current number, \n            // then take the previous state (i.e. dp[i - 1])\n            // else, we pick the current number \n            // we earn dp[i] plus the 2 states before that (i.e. dp[i - 2])\n            dp[i] = max(dp[i - 1], dp[i - 2] + dp[i]);\n        }\n        return dp[n];\n    }\n};\n"})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var a=n(96540);const l={},t=a.createContext(l);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);