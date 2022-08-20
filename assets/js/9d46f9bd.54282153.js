"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[937],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return N}});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,r=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),k=i(t),N=m,u=k["".concat(o,".").concat(N)]||k[N]||c[N]||r;return t?n.createElement(u,s(s({ref:e},l),{},{components:t})):n.createElement(u,s({ref:e},l))}));function N(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var r=t.length,s=new Array(r);s[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:m,s[1]=p;for(var i=2;i<r;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},83685:function(a,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return k}});var n=t(87462),m=t(63366),r=(t(67294),t(3905)),s=t(8539),p=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/"},i="2218 - Maximum Value of K Coins From Piles (Hard)",l={unversionedId:"2200-2299/maximum-value-of-k-coins-from-piles-hard",id:"2200-2299/maximum-value-of-k-coins-from-piles-hard",title:"2218 - Maximum Value of K Coins From Piles (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/",source:"@site/solutions/2200-2299/2218-maximum-value-of-k-coins-from-piles-hard.md",sourceDirName:"2200-2299",slug:"/2200-2299/maximum-value-of-k-coins-from-piles-hard",permalink:"/leetcode-the-hard-way/solutions/2200-2299/maximum-value-of-k-coins-from-piles-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2218-maximum-value-of-k-coins-from-piles-hard.md",tags:[],version:"current",sidebarPosition:2218,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/"},sidebar:"tutorialSidebar",previous:{title:"2209 - Minimum White Tiles After Covering With Carpets (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-white-tiles-after-covering-with-carpets-hard"},next:{title:"2223 - Sum of Scores of Built Strings (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/sum-of-scores-of-built-strings-hard"}},c={},k=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],N={toc:k};function u(a){var e=a.components,t=(0,m.Z)(a,p);return(0,r.kt)("wrapper",(0,n.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2218---maximum-value-of-k-coins-from-piles-hard"},"2218 - Maximum Value of K Coins From Piles (Hard)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/"},"https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"There are ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," ",(0,r.kt)("strong",{parentName:"p"},"piles")," of coins on a table. Each pile consists of a ",(0,r.kt)("strong",{parentName:"p"},"positive number")," of coins of assorted denominations."),(0,r.kt)("p",null,"In one move, you can choose any coin on ",(0,r.kt)("strong",{parentName:"p"},"top")," of any pile, remove it, and add it to your wallet."),(0,r.kt)("p",null,"Given a list ",(0,r.kt)("inlineCode",{parentName:"p"},"piles"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"piles[i]")," is a list of integers denoting the composition of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ith")," pile from ",(0,r.kt)("strong",{parentName:"p"},"top to bottom"),", and a positive integer ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),", return ",(0,r.kt)("em",{parentName:"p"},"the ",(0,r.kt)("strong",{parentName:"em"},"maximum total value")," of coins you can have in your wallet if you choose ",(0,r.kt)("strong",{parentName:"em"},"exactly"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," ",(0,r.kt)("em",{parentName:"p"},"coins optimally"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/11/09/e1.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: piles = [[1,100,3],[7,8,9]], k = 2\nOutput: 101\nExplanation:\nThe above diagram shows the different ways we can choose k coins.\nThe maximum total we can obtain is 101.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: piles = [[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], k = 7\nOutput: 706\nExplanation:\nThe maximum total can be obtained if we choose all coins from the last pile.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n == piles.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 1000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= piles[i][j] <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= k <= sum(piles[i].length) <= 2000"))),(0,r.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,r.kt)("p",null,"Let ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"j"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[i][j]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))," be the maximum total value we can have if we pick ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"j")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"j")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j")))))," elements starting from ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"piles[i]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". The answer is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"dp[0][k]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". First we calculate the value if we pick any elements in the current pile. Then we try to pick at most ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"z"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"min((int) piles[i].size(), k)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"min"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"(("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"in"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ze"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," elements and find out the max result."),(0,r.kt)(s.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maxValueOfCoins(vector<vector<int>>& piles, int k) {\n        int n = piles.size();\n        vector<vector<int>> dp(n, vector<int>(k + 1, -1));\n        function<int(int,int)> dfs = [&](int i, int k) {\n            // reach the end - return 0\n            if (i == n || k == 0) return 0;\n            // calculated previously - return immediately\n            if (dp[i][k] != -1) return dp[i][k];\n            // do not take \n            int res = dfs(i + 1, k), val = 0;\n            // try to take it one by one \n            // calculate the value we could have\n            for (int j = 0; j < min((int) piles[i].size(), k); j++) {\n                // take this element\n                val += piles[i][j];\n                res = max(res, dfs(i + 1, k - 1 - j) + val);\n            }\n            return dp[i][k] = res;\n        };\n        return dfs(0, k);\n    }\n};\n")))}u.isMDXComponent=!0},8539:function(a,e,t){t.d(e,{Z:function(){return m}});var n=t(67294);function m(a){var e=a.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",e))}}}]);