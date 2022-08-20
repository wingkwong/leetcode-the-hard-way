"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3603],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44873:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(8539),l=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-profit-in-job-scheduling/"},m="1235 - Maximum Profit in Job Scheduling (Hard)",s={unversionedId:"1200-1299/maximum-profit-in-job-scheduling-hard",id:"1200-1299/maximum-profit-in-job-scheduling-hard",title:"1235 - Maximum Profit in Job Scheduling (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-profit-in-job-scheduling/",source:"@site/solutions/1200-1299/1235-maximum-profit-in-job-scheduling-hard.md",sourceDirName:"1200-1299",slug:"/1200-1299/maximum-profit-in-job-scheduling-hard",permalink:"/leetcode-the-hard-way/solutions/1200-1299/maximum-profit-in-job-scheduling-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1235-maximum-profit-in-job-scheduling-hard.md",tags:[],version:"current",sidebarPosition:1235,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-profit-in-job-scheduling/"},sidebar:"tutorialSidebar",previous:{title:"1232 - Check If It Is a Straight Line (Easy)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/check-if-it-is-a-straight-line-easy"},next:{title:"1259 - Handshakes That Don't Cross (Hard)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/handshakes-that-dont-cross-hard"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2},{value:"Similar Problems:",id:"similar-problems",level:3}],d={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1235---maximum-profit-in-job-scheduling-hard"},"1235 - Maximum Profit in Job Scheduling (Hard)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-profit-in-job-scheduling/"},"https://leetcode.com/problems/maximum-profit-in-job-scheduling/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"We have ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," jobs, where every job is scheduled to be done from ",(0,o.kt)("inlineCode",{parentName:"p"},"startTime[i]")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"endTime[i]"),", obtaining a profit of ",(0,o.kt)("inlineCode",{parentName:"p"},"profit[i]"),"."),(0,o.kt)("p",null,"You're given the ",(0,o.kt)("inlineCode",{parentName:"p"},"startTime"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"endTime")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"profit")," arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range."),(0,o.kt)("p",null,"If you choose a job that ends at time ",(0,o.kt)("inlineCode",{parentName:"p"},"X")," you will be able to start another job that starts at time ",(0,o.kt)("inlineCode",{parentName:"p"},"X"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/10/10/sample1_1584.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]\nOutput: 120\nExplanation: The subset chosen is the first and fourth job. \nTime range [1-3]+[3-6] , we get profit of 120 = 50 + 70.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/10/10/sample22_1584.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]\nOutput: 150\nExplanation: The subset chosen is the first, fourth and fifth job. \nProfit obtained 150 = 20 + 70 + 60.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/10/10/sample3_1584.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]\nOutput: 6\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= startTime[i] < endTime[i] <= 10^9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= profit[i] <= 10^4"))),(0,o.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,o.kt)(a.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {\n        int n = startTime.size();\n        // rearrange the input\n        vector<array<int, 3>> events;\n        // put them together\n        for (int i = 0; i < n; i++) events.push_back({startTime[i], endTime[i], profit[i]});\n        // sort by startTime\n        sort(events.begin(), events.end());\n        // 1D dp\n        vector<int> dp(n, -1);\n        function<int(int,int)> dfs = [&](int idx, int end) {\n            // reached all events\n            if (idx == n) return 0;\n            // current start time < previous end time\n            // cannot take it -> move to the next one\n            if (events[idx][0] < end) return dfs(idx + 1, end);\n            // calculate before -> return immediately\n            if (dp[idx] != -1) return dp[idx];\n            // so we only have two choices left, we either\n            return dp[idx] = max(\n                // choice 1: take this job and move to the next one from this end time\n                events[idx][2] + dfs(idx + 1, events[idx][1]),\n                // choice 2: not take this job and move to the next one\n                dfs(idx + 1, end)\n            );\n        };\n        return dfs(0, 0);\n    }\n};\n")),(0,o.kt)("h3",{id:"similar-problems"},"Similar Problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../1700-1799/maximum-number-of-events-that-can-be-attended-ii-hard"},"1751 - Maximum Number of Events That Can Be Attended II (Hard)"))))}h.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);function i(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);