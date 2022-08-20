"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[807],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(8539),l=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/stone-game-iv/"},s="1510 - Stone Game IV (Hard)",m={unversionedId:"1500-1599/stone-game-iv-hard",id:"1500-1599/stone-game-iv-hard",title:"1510 - Stone Game IV (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/stone-game-iv/",source:"@site/solutions/1500-1599/1510-stone-game-iv-hard.md",sourceDirName:"1500-1599",slug:"/1500-1599/stone-game-iv-hard",permalink:"/leetcode-the-hard-way/solutions/1500-1599/stone-game-iv-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1510-stone-game-iv-hard.md",tags:[],version:"current",sidebarPosition:1510,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/stone-game-iv/"},sidebar:"tutorialSidebar",previous:{title:"1502 - Can Make Arithmetic Progression From Sequence (Easy)",permalink:"/leetcode-the-hard-way/solutions/1500-1599/can-make-arithmetic-progression-from-sequence-easy"},next:{title:"1523 - Count Odd Numbers in an Interval Range (Easy)",permalink:"/leetcode-the-hard-way/solutions/1500-1599/count-odd-numbers-in-an-interval-range-easy"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1510---stone-game-iv-hard"},"1510 - Stone Game IV (Hard)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/stone-game-iv/"},"https://leetcode.com/problems/stone-game-iv/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Alice and Bob take turns playing a game, with Alice starting first."),(0,o.kt)("p",null,"Initially, there are ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," stones in a pile. On each player's turn, that player makes a ",(0,o.kt)("em",{parentName:"p"},"move")," consisting of removing ",(0,o.kt)("strong",{parentName:"p"},"any")," non-zero ",(0,o.kt)("strong",{parentName:"p"},"square number")," of stones in the pile."),(0,o.kt)("p",null,"Also, if a player cannot make a move, he/she loses the game."),(0,o.kt)("p",null,"Given a positive integer ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if and only if Alice wins the game otherwise return ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", assuming both players play optimally."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 1\nOutput: true\nExplanation: Alice can remove 1 stone winning the game because Bob doesn't have any moves.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 2\nOutput: false\nExplanation: Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: n = 4\nOutput: true\nExplanation: n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5"))),(0,o.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,o.kt)("p",null,"Let ",(0,o.kt)("inlineCode",{parentName:"p"},"dp[i]")," be the result of the game with ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," stones. If it is true, it means Alice must win. If it is false, it means Bob must win. If there is any ",(0,o.kt)("inlineCode",{parentName:"p"},"j")," that ",(0,o.kt)("inlineCode",{parentName:"p"},"dp[i - j * j]")," make the other lose the game, then ",(0,o.kt)("inlineCode",{parentName:"p"},"dp[i]")," would be true. For example, Alice can take ",(0,o.kt)("inlineCode",{parentName:"p"},"j * j")," to make Bob into a losing state and end the game."),(0,o.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool winnerSquareGame(int n) {\n        int dp[n + 1];\n        memset(dp, 0, sizeof(dp));\n        for(int i = 1; i <= n; i++){\n            for(int j = 1; j * j <= i; j++){\n                dp[i] |= !dp[i - j * j];\n            }\n        }\n        return dp[n];\n    }\n};\n")))}h.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);