"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[81198],{91615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(85893),a=t(11151);const o={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/"},s="1751 - Maximum Number of Events That Can Be Attended II (Hard)",r={id:"1700-1799/maximum-number-of-events-that-can-be-attended-ii-hard",title:"1751 - Maximum Number of Events That Can Be Attended II (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/",source:"@site/solutions/1700-1799/1751-maximum-number-of-events-that-can-be-attended-ii-hard.md",sourceDirName:"1700-1799",slug:"/1700-1799/maximum-number-of-events-that-can-be-attended-ii-hard",permalink:"/solutions/1700-1799/maximum-number-of-events-that-can-be-attended-ii-hard",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1700-1799/1751-maximum-number-of-events-that-can-be-attended-ii-hard.md",tags:[],version:"current",sidebarPosition:1751,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/"},sidebar:"tutorialSidebar",previous:{title:"1748 - Sum of Unique Elements (Easy)",permalink:"/solutions/1700-1799/sum-of-unique-elements-easy"},next:{title:"1758 - Minimum Changes To Make Alternating Binary String (Easy)",permalink:"/solutions/1700-1799/minimum-changes-to-make-alternating-binary-string-easy"}},d={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1751---maximum-number-of-events-that-can-be-attended-ii-hard",children:"1751 - Maximum Number of Events That Can Be Attended II (Hard)"}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/",children:"https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["You are given an array of ",(0,i.jsx)(n.code,{children:"events"})," where ",(0,i.jsx)(n.code,{children:"events[i] = [startDayi, endDayi, valuei]"}),". The ",(0,i.jsx)(n.code,{children:"ith"})," event starts at ",(0,i.jsx)(n.code,{children:"startDayi"})," and ends at ",(0,i.jsx)(n.code,{children:"endDayi"}),", and if you attend this event, you will receive a value of ",(0,i.jsx)(n.code,{children:"valuei"}),". You are also given an integer ",(0,i.jsx)(n.code,{children:"k"})," which represents the maximum number of events you can attend."]}),"\n",(0,i.jsxs)(n.p,{children:["You can only attend one event at a time. If you choose to attend an event, you must attend the ",(0,i.jsx)(n.strong,{children:"entire"})," event. Note that the end day is ",(0,i.jsx)(n.strong,{children:"inclusive"}),": that is, you cannot attend two events where one of them starts and the other ends on the same day."]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsxs)(n.em,{children:["the ",(0,i.jsx)(n.strong,{children:"maximum sum"})," of values that you can receive by attending events."]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2021/01/10/screenshot-2021-01-11-at-60048-pm.png",alt:""})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: events = [[1,2,4],[3,4,3],[2,3,1]], k = 2\nOutput: 7\nExplanation: Choose the green events, 0 and 1 (0-indexed) for a total value of 4 + 3 = 7.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2021/01/10/screenshot-2021-01-11-at-60150-pm.png",alt:""})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: events = [[1,2,4],[3,4,3],[2,3,10]], k = 2\nOutput: 10\nExplanation: Choose event 2 for a total value of 10.\nNotice that you cannot attend any other event as they overlap, and that you do not have to attend k events.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)("img",{src:"https://assets.leetcode.com/uploads/2021/01/10/screenshot-2021-01-11-at-60703-pm.png",alt:"","data-size":"original"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: events = [[1,1,1],[2,2,2],[3,3,3],[4,4,4]], k = 3\nOutput: 9\nExplanation: Although the events do not overlap, you can only attend 3 events. Pick the highest valued three.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= k <= events.length"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= k * events.length <= 10^6"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= startDayi <= endDayi <= 10^9"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= valuei <= 10^6"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-dynamic-programming",children:"Approach 1: Dynamic Programming"}),"\n",(0,i.jsx)(t,{name:"@wingkwong"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxValue(vector<vector<int>>& events, int k) {\n        int n = events.size();\n        // sort by start time\n        sort(events.begin(), events.end());\n        // dp[i][j] means the max value we could get \n        // when we are at event i with k events left to join \n        vector<vector<int>> dp(n, vector<int>(k + 1, -1));\n        function<int(int,int,int)> dfs = [&](int idx, int k, int end) {\n            // reached all events or attended all k events\n            if (idx == n || k == 0) return 0;\n            // current start time <= previous end time\n            // cannot attend -> move to the next one\n            if (events[idx][0] <= end) return dfs(idx + 1, k, end);\n            // calculated before - return it immediately\n            if (dp[idx][k] != -1) return dp[idx][k];\n            // so we only have two choices left, we either\n            return dp[idx][k] = max(\n                // choice 1: attend this event \n                // and search for the next events starting from this end time\n                events[idx][2] + dfs(idx + 1, k - 1, events[idx][1]),\n                // choice 2: skip this event - search for the next one\n                dfs(idx + 1, k, end)\n            );\n        };\n        return dfs(0, k, 0);\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);