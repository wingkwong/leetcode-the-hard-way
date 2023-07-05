"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[78019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),d=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,p=c["".concat(u,".").concat(f)]||c[f]||s[f]||o;return n?i.createElement(p,r(r({ref:t},m),{},{components:n})):i.createElement(p,r({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/",tags:["Array","Dynamic Programming"]},r="1335 - Minimum Difficulty of a Job Schedule (Hard)",l={unversionedId:"1300-1399/minimum-difficulty-of-a-job-schedule-hard",id:"1300-1399/minimum-difficulty-of-a-job-schedule-hard",title:"1335 - Minimum Difficulty of a Job Schedule (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/",source:"@site/solutions/1300-1399/1335-minimum-difficulty-of-a-job-schedule-hard.md",sourceDirName:"1300-1399",slug:"/1300-1399/minimum-difficulty-of-a-job-schedule-hard",permalink:"/solutions/1300-1399/minimum-difficulty-of-a-job-schedule-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1335-minimum-difficulty-of-a-job-schedule-hard.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:1335,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/",tags:["Array","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)",permalink:"/solutions/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium"},next:{title:"1337 - The K Weakest Rows in a Matrix (Easy)",permalink:"/solutions/1300-1399/the-k-weakest-rows-in-a-matrix-easy"}},u={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=m("Tabs"),s=m("TabItem"),f=m("SolutionAuthor"),p={toc:d},h="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1335---minimum-difficulty-of-a-job-schedule-hard"},"1335 - Minimum Difficulty of a Job Schedule (Hard)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/"},"https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You want to schedule a list of jobs in ",(0,a.kt)("inlineCode",{parentName:"p"},"d")," days. Jobs are dependent (i.e To work on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," job, you have to finish all the jobs ",(0,a.kt)("inlineCode",{parentName:"p"},"j")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"0 <= j < i"),")."),(0,a.kt)("p",null,"You have to finish ",(0,a.kt)("strong",{parentName:"p"},"at least")," one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the ",(0,a.kt)("inlineCode",{parentName:"p"},"d")," days. The difficulty of a day is the maximum difficulty of a job done on that day."),(0,a.kt)("p",null,"You are given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"jobDifficulty")," and an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"d"),". The difficulty of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," job is ",(0,a.kt)("inlineCode",{parentName:"p"},"jobDifficulty[i]"),"."),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the minimum difficulty of a job schedule"),". If you cannot find a schedule for the jobs return ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: jobDifficulty = [6,5,4,3,2,1], d = 2\nOutput: 7\nExplanation: First day you can finish the first 5 jobs, total difficulty = 6.\nSecond day you can finish the last job, total difficulty = 1.\nThe difficulty of the schedule = 6 + 1 = 7\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: jobDifficulty = [9,9,9], d = 4\nOutput: -1\nExplanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: jobDifficulty = [1,1,1], d = 3\nOutput: 3\nExplanation: The schedule is one job per day. total difficulty will be 3.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= jobDifficulty.length <= 300")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= jobDifficulty[i] <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= d <= 10"))),(0,a.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,a.kt)("p",null,"Visualization for $n = 6, d = 3$. (by @liangyong0411)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/users/images/73fd2807-5852-40ed-bbdb-ea2850fa5083_1665905141.513028.png",alt:"img"})),(0,a.kt)(c,{mdxType:"Tabs"},(0,a.kt)(s,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:\n        n = len(jobDifficulty)\n    \n        @cache\n        # dp(i, k): min difficulty when you start working on i-th job at day `k`\n        def dp(i, k):\n            # reach the last day\n            # we put all the remaining jobs on this day\n            # so we return the one with max difficulty\n            if k == d: return max(jobDifficulty[i:])\n            # init min difficulty with inf \n            res = float('inf')\n            # cur is the max difficulty we've seen so far\n            # init current max with 0\n            cur = 0\n            # for jobDifficulty like 6 5 4 3 2 1, \n            # we can have following ways to distribute them into two days\n            # 6 | 5 4 3 2 1\n            # 6 5 | 4 3 2 1 \n            # 6 5 4 | 3 2 1\n            # 6 5 4 3 | 2 1\n            # 6 5 4 3 2 | 1\n            # notice that each day we must have at least one task\n            # given the starting index `i`, \n            # we can only at most choose the jobs till the position `n - d + k - 1`\n            for j in range(i, n - d + k):\n                cur = max(cur, jobDifficulty[j])\n                # if j-th job is the last job on day `k`, \n                # the max difficulty for day `k` is `cur`\n                # and we need to start (j + 1)-th job on the next day\n                # the result would be `cur + dp(j + 1, k + 1)`\n                # then we take the min\n                res = min(res, cur + dp(j + 1, k + 1))\n            return res\n        # n < d : you will have free days. hence you cannot find a schedule for the given jobs\n        # e.g. Example 2\n        # otherwise, we start working on 0-th job at day 1\n        return -1 if n < d else dp(0, 1)\n")))))}y.isMDXComponent=!0}}]);