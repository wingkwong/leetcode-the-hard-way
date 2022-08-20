"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1323],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return k}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),h=o(a),k=s,u=h["".concat(i,".").concat(k)]||h[k]||c[k]||r;return a?n.createElement(u,p(p({ref:t},l),{},{components:a})):n.createElement(u,p({ref:t},l))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,p=new Array(r);p[0]=h;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:s,p[1]=m;for(var o=2;o<r;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},95088:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return h}});var n=a(87462),s=a(63366),r=(a(67294),a(3905)),p=a(8539),m=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/stone-game/"},o="0877 - Stone Game (Medium)",l={unversionedId:"0800-0899/stone-game-medium",id:"0800-0899/stone-game-medium",title:"0877 - Stone Game (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/stone-game/",source:"@site/solutions/0800-0899/0877-stone-game-medium.md",sourceDirName:"0800-0899",slug:"/0800-0899/stone-game-medium",permalink:"/leetcode-the-hard-way/solutions/0800-0899/stone-game-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0877-stone-game-medium.md",tags:[],version:"current",sidebarPosition:877,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/stone-game/"},sidebar:"tutorialSidebar",previous:{title:"0852 - Peak Index in a Mountain Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/0800-0899/peak-index-in-a-mountain-array-easy"},next:{title:"0881 - Boats to Save People (Medium)",permalink:"/leetcode-the-hard-way/solutions/0800-0899/boats-to-save-people-medium"}},c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Math",id:"approach-1-math",level:2},{value:"Approach 2: Dynamic Programming",id:"approach-2-dynamic-programming",level:2}],k={toc:h};function u(e){var t=e.components,a=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0877---stone-game-medium"},"0877 - Stone Game (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/stone-game/"},"https://leetcode.com/problems/stone-game/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Alice and Bob play a game with piles of stones. There are an ",(0,r.kt)("strong",{parentName:"p"},"even")," number of piles arranged in a row, and each pile has a ",(0,r.kt)("strong",{parentName:"p"},"positive")," integer number of stones ",(0,r.kt)("inlineCode",{parentName:"p"},"piles[i]"),"."),(0,r.kt)("p",null,"The objective of the game is to end with the most stones. The ",(0,r.kt)("strong",{parentName:"p"},"total")," number of stones across all the piles is ",(0,r.kt)("strong",{parentName:"p"},"odd"),", so there are no ties."),(0,r.kt)("p",null,"Alice and Bob take turns, with ",(0,r.kt)("strong",{parentName:"p"},"Alice starting first"),". Each turn, a player takes the entire pile of stones either from the ",(0,r.kt)("strong",{parentName:"p"},"beginning")," or from the ",(0,r.kt)("strong",{parentName:"p"},"end")," of the row. This continues until there are no more piles left, at which point the person with the ",(0,r.kt)("strong",{parentName:"p"},"most stones wins"),"."),(0,r.kt)("p",null,"Assuming Alice and Bob play optimally, return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ",(0,r.kt)("em",{parentName:"p"},"if Alice wins the game, or")," ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," ",(0,r.kt)("em",{parentName:"p"},"if Bob wins"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: piles = [5,3,4,5]\nOutput: true\nExplanation: \nAlice starts first, and can only take the first 5 or the last 5.\nSay she takes the first 5, so that the row becomes [3, 4, 5].\nIf Bob takes 3, then the board is [4, 5], and Alice takes 5 to win with 10 points.\nIf Bob takes the last 5, then the board is [3, 4], and Alice takes 4 to win with 9 points.\nThis demonstrated that taking the first 5 was a winning move for Alice, so we return true.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: piles = [3,7,2,3]\nOutput: true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2 <= piles.length <= 500")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"piles.length")," is ",(0,r.kt)("strong",{parentName:"li"},"even"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= piles[i] <= 500")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sum(piles[i])")," is ",(0,r.kt)("strong",{parentName:"li"},"odd"),".")),(0,r.kt)("h2",{id:"approach-1-math"},"Approach 1: Math"),(0,r.kt)("p",null,"Yes .. Just return true. In fact, it is always true because there are an even number of piles and the total number of stones across all the piles is odd. Therefore, if Alice picks the first one, then Bob must pick either the second one or the last one. In each turn, Alice can always pick the even indexed piles while Bob can only pick odd indexed piles. Since there is no tie, if the sum of stones of even indexed piles is greater than that of odd indexed piles, Alice just need to pick the even indexed piles and win the game. Otherwise, she can pick the odd indexed piles. As Alice always go first, in this case, she must win whatsoever."),(0,r.kt)(p.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool stoneGame(vector<int>& piles) {\n        return true;\n    }\n};\n")),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("h2",{id:"approach-2-dynamic-programming"},"Approach 2: Dynamic Programming"),(0,r.kt)("p",null,"Let ",(0,r.kt)("inlineCode",{parentName:"p"},"dp[i][j]")," be the maximum difference Alice could get if she plays optimally for ",(0,r.kt)("inlineCode",{parentName:"p"},"piles[i .. j]"),". Since we only have two options - either take ",(0,r.kt)("inlineCode",{parentName:"p"},"pile[i]")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pile[j]"),". We choose the maximum one."),(0,r.kt)(p.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int dfs(vector<int>& piles, vector<vector<int>>& dp, int i, int j) {\n        if (i == j) return piles[i];\n        if (dp[i][j] != -1) return dp[i][j];\n        return dp[i][j] = max(piles[i] - dfs(piles, dp, i + 1, j), piles[j] - dfs(piles, dp, i, j - 1));\n    }\n    bool stoneGame(vector<int>& piles) {\n        int n = (int) piles.size();\n        vector<vector<int>> dp(n, vector<int>(n, -1));\n        return dfs(piles, dp, 0, n - 1);\n    }\n};\n")),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"n"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n ^ 2)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"n"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n ^ 2)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))))}u.isMDXComponent=!0},8539:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294);function s(e){var t=e.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",t))}}}]);