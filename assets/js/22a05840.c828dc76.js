"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[94673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/best-team-with-no-conflicts/",tags:["Array","Dynamic Programming","Sorting"]},i="1626 - Best Team With No Conflicts (Medium)",s={unversionedId:"1600-1699/best-team-with-no-conflicts-medium",id:"1600-1699/best-team-with-no-conflicts-medium",title:"1626 - Best Team With No Conflicts (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/best-team-with-no-conflicts/",source:"@site/solutions/1600-1699/1626-best-team-with-no-conflicts-medium.md",sourceDirName:"1600-1699",slug:"/1600-1699/best-team-with-no-conflicts-medium",permalink:"/solutions/1600-1699/best-team-with-no-conflicts-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1600-1699/1626-best-team-with-no-conflicts-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:1626,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/best-team-with-no-conflicts/",tags:["Array","Dynamic Programming","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"1600 - 1699",permalink:"/solutions/category/1600---1699"},next:{title:"1630 - Arithmetic Subarrays (Medium)",permalink:"/solutions/1600-1699/arithmetic-subarrays-medium"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=p("Tabs"),u=p("TabItem"),h=p("SolutionAuthor"),d={toc:c},g="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1626---best-team-with-no-conflicts-medium"},"1626 - Best Team With No Conflicts (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/best-team-with-no-conflicts/"},"https://leetcode.com/problems/best-team-with-no-conflicts/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are the manager of a basketball team. For the upcoming tournament, you want to choose the team with the highest overall score. The score of the team is the ",(0,a.kt)("strong",{parentName:"p"},"sum")," of scores of all the players in the team."),(0,a.kt)("p",null,"However, the basketball team is not allowed to have ",(0,a.kt)("strong",{parentName:"p"},"conflicts"),". A ",(0,a.kt)("strong",{parentName:"p"},"conflict")," exists if a younger player has a ",(0,a.kt)("strong",{parentName:"p"},"strictly higher")," score than an older player. A conflict does ",(0,a.kt)("strong",{parentName:"p"},"not")," occur between players of the same age."),(0,a.kt)("p",null,"Given two lists, ",(0,a.kt)("inlineCode",{parentName:"p"},"scores")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ages"),", where each ",(0,a.kt)("inlineCode",{parentName:"p"},"scores[i]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ages[i]")," represents the score and age of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," player, respectively, return ",(0,a.kt)("em",{parentName:"p"},"the highest overall score of all possible basketball teams"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: scores = [1,3,5,10,15], ages = [1,2,3,4,5]\nOutput: 34\nExplanation:\xa0You can choose all the players.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: scores = [4,5,6,5], ages = [2,1,2,1]\nOutput: 16\nExplanation:\xa0It is best to choose the last 3 players. Notice that you are allowed to choose multiple people of the same age.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: scores = [1,2,3,5], ages = [8,9,10,1]\nOutput: 6\nExplanation:\xa0It is best to choose the first 3 players.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= scores.length, ages.length <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scores.length == ages.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= scores[i] <= 106")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= ages[i] <= 1000"))),(0,a.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,a.kt)("p",null,"For this kind of DP questions, remember the following"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"calculate the result if you skip this candidate"),(0,a.kt)("li",{parentName:"ul"},"calculate the result if you pick this candidate"),(0,a.kt)("li",{parentName:"ul"},"take the max result of them then memorise it")),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(u,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int dp[1005][1005];\n    // i is the index of g\n    // age is the max age so far\n    int dfs(vector<pair<int, int>>& g, int i, int age) {\n        // if i reaches the end, then return 0\n        if (i == g.size()) return 0;\n        // if dp[i][age] is calculated before, return it directly\n        if (dp[i][age] != -1) return dp[i][age];\n        // we have two choices - either take this player or skip it\n        // we first calculate the score if we skip this player\n        int res = dfs(g, i + 1, age);\n        // if we want to take this player, we need to check if there is a conflict\n        // since the score is sorted, we just need to check the age\n        // if we take this player, the score will be increased by g[i].first\n        // then we add the result from `dfs(g, i + 1, g[i].second)`\n        // since we take this player, we need ti mark the age as g[i].second\n        if (g[i].second >= age) res = max(res, g[i].first + dfs(g, i + 1, g[i].second));\n        // memo it\n        return dp[i][age] = res;\n    }\n    int bestTeamScore(vector<int>& scores, vector<int>& ages) {\n        // init dp with initial value -1\n        memset(dp, -1, sizeof(dp));\n        // we sort by score, then age\n        vector<pair<int, int>> g;\n        for (int i = 0; i < scores.size(); i++) {\n            g.push_back({scores[i], ages[i]});\n        }\n        sort(g.begin(), g.end());\n        return dfs(g, 0, 0);\n    }\n};\n")))))}f.isMDXComponent=!0}}]);