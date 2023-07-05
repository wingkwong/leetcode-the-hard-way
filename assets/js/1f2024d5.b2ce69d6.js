"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[88330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=o.createContext({}),l=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=l(n),d=i,h=c["".concat(m,".").concat(d)]||c[d]||u[d]||s;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r[c]="string"==typeof e?e:i,a[1]=r;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const s={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-cost-to-set-cooking-time/"},a="2162 - Minimum Cost to Set Cooking Time (Medium)",r={unversionedId:"2100-2199/minimum-cost-to-set-cooking-time-medium",id:"2100-2199/minimum-cost-to-set-cooking-time-medium",title:"2162 - Minimum Cost to Set Cooking Time (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-cost-to-set-cooking-time/",source:"@site/solutions/2100-2199/2162-minimum-cost-to-set-cooking-time-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-cost-to-set-cooking-time-medium",permalink:"/solutions/2100-2199/minimum-cost-to-set-cooking-time-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2162-minimum-cost-to-set-cooking-time-medium.md",tags:[],version:"current",sidebarPosition:2162,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-cost-to-set-cooking-time/"},sidebar:"tutorialSidebar",previous:{title:"2161 - Partition Array According to Given Pivot (Medium)",permalink:"/solutions/2100-2199/partition-array-according-to-given-pivot-medium"},next:{title:"2163 - Minimum Difference in Sums After Removal of Elements (Hard)",permalink:"/solutions/2100-2199/minimum-difference-in-sums-after-removal-of-elements-hard"}},m={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}],p=(c="SolutionAuthor",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var c;const u={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2162---minimum-cost-to-set-cooking-time-medium"},"2162 - Minimum Cost to Set Cooking Time (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-cost-to-set-cooking-time/"},"https://leetcode.com/problems/minimum-cost-to-set-cooking-time/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"A generic microwave supports cooking times for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"at least ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," second."),(0,i.kt)("li",{parentName:"ul"},"at most ",(0,i.kt)("inlineCode",{parentName:"li"},"99")," minutes and ",(0,i.kt)("inlineCode",{parentName:"li"},"99")," seconds.")),(0,i.kt)("p",null,"To set the cooking time, you push ",(0,i.kt)("strong",{parentName:"p"},"at most four digits"),". The microwave normalizes what you push as four digits by ",(0,i.kt)("strong",{parentName:"p"},"prepending zeroes"),". It interprets the ",(0,i.kt)("strong",{parentName:"p"},"first")," two digits as the minutes and the ",(0,i.kt)("strong",{parentName:"p"},"last")," two digits as the seconds. It then ",(0,i.kt)("strong",{parentName:"p"},"adds")," them up as the cooking time. For example,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You push ",(0,i.kt)("inlineCode",{parentName:"li"},"9")," ",(0,i.kt)("inlineCode",{parentName:"li"},"5")," ",(0,i.kt)("inlineCode",{parentName:"li"},"4")," (three digits). It is normalized as ",(0,i.kt)("inlineCode",{parentName:"li"},"0954")," and interpreted as ",(0,i.kt)("inlineCode",{parentName:"li"},"9")," minutes and ",(0,i.kt)("inlineCode",{parentName:"li"},"54")," seconds."),(0,i.kt)("li",{parentName:"ul"},"You push ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," (four digits). It is interpreted as ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," minutes and ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," seconds."),(0,i.kt)("li",{parentName:"ul"},"You push ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," ",(0,i.kt)("inlineCode",{parentName:"li"},"9")," ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),". It is interpreted as ",(0,i.kt)("inlineCode",{parentName:"li"},"80")," minutes and ",(0,i.kt)("inlineCode",{parentName:"li"},"90")," seconds."),(0,i.kt)("li",{parentName:"ul"},"You push ",(0,i.kt)("inlineCode",{parentName:"li"},"8")," ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),". It is interpreted as ",(0,i.kt)("inlineCode",{parentName:"li"},"81")," minutes and ",(0,i.kt)("inlineCode",{parentName:"li"},"30")," seconds.")),(0,i.kt)("p",null,"You are given integers ",(0,i.kt)("inlineCode",{parentName:"p"},"startAt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"moveCost"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pushCost"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"targetSeconds"),". ",(0,i.kt)("strong",{parentName:"p"},"Initially"),", your finger is on the digit ",(0,i.kt)("inlineCode",{parentName:"p"},"startAt"),". Moving the finger above ",(0,i.kt)("strong",{parentName:"p"},"any specific digit")," costs ",(0,i.kt)("inlineCode",{parentName:"p"},"moveCost")," units of fatigue. Pushing the digit below the finger ",(0,i.kt)("strong",{parentName:"p"},"once")," costs ",(0,i.kt)("inlineCode",{parentName:"p"},"pushCost")," units of fatigue."),(0,i.kt)("p",null,"There can be multiple ways to set the microwave to cook for ",(0,i.kt)("inlineCode",{parentName:"p"},"targetSeconds")," seconds but you are interested in the way with the minimum cost."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the ",(0,i.kt)("strong",{parentName:"em"},"minimum cost")," to set")," ",(0,i.kt)("inlineCode",{parentName:"p"},"targetSeconds")," ",(0,i.kt)("em",{parentName:"p"},"seconds of cooking time"),"."),(0,i.kt)("p",null,"Remember that one minute consists of ",(0,i.kt)("inlineCode",{parentName:"p"},"60")," seconds."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/30/1.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: startAt = 1, moveCost = 2, pushCost = 1, targetSeconds = 600\nOutput: 6\nExplanation: The following are the possible ways to set the cooking time.\n- 1 0 0 0, interpreted as 10 minutes and 0 seconds.\n  The finger is already on digit 1, pushes 1 (with cost 1), moves to 0 (with cost 2), pushes 0 (with cost 1), pushes 0 (with cost 1), and pushes 0 (with cost 1).\n  The cost is: 1 + 2 + 1 + 1 + 1 = 6. This is the minimum cost.\n- 0 9 6 0, interpreted as 9 minutes and 60 seconds. That is also 600 seconds.\n  The finger moves to 0 (with cost 2), pushes 0 (with cost 1), moves to 9 (with cost 2), pushes 9 (with cost 1), moves to 6 (with cost 2), pushes 6 (with cost 1), moves to 0 (with cost 2), and pushes 0 (with cost 1).\n  The cost is: 2 + 1 + 2 + 1 + 2 + 1 + 2 + 1 = 12.\n- 9 6 0, normalized as 0960 and interpreted as 9 minutes and 60 seconds.\n  The finger moves to 9 (with cost 2), pushes 9 (with cost 1), moves to 6 (with cost 2), pushes 6 (with cost 1), moves to 0 (with cost 2), and pushes 0 (with cost 1).\n  The cost is: 2 + 1 + 2 + 1 + 2 + 1 = 9.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/30/2.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: startAt = 0, moveCost = 1, pushCost = 2, targetSeconds = 76\nOutput: 6\nExplanation: The optimal way is to push two digits: 7 6, interpreted as 76 seconds.\nThe finger moves to 7 (with cost 1), pushes 7 (with cost 2), moves to 6 (with cost 1), and pushes 6 (with cost 2). The total cost is: 1 + 2 + 1 + 2 = 6\nNote other possible ways are 0076, 076, 0116, and 116, but none of them produces the minimum cost.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= startAt <= 9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= moveCost, pushCost <= 105")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= targetSeconds <= 6039"))),(0,i.kt)("h2",{id:"approach-1-simulation"},"Approach 1: Simulation"),(0,i.kt)("p",null,"We just need to simulate two cases at most. We either take the original $$m$$and $$s$$, or we can try $$m' := m -1$$ and $$s' := s + 60$$."),(0,i.kt)("p",null,"First let's get the minutes $$m$$ and seconds $$s$$ from $$targetSeconds$$. If they are valid, then we can calculate the cost for the first case."),(0,i.kt)("p",null,"To calculate the cost, it is pretty straightforward. Example 2 gives a good hint to remind us to handle leading zeros."),(0,i.kt)("p",null,"After calculating the first possible minimum cost, we can try the second one. Similarly, we check if $$m'$$ and $$s'$$ are valid. If so, calculate the cost and return the minimum one."),(0,i.kt)(p,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int calc(vector<int>& d, int startAt, int moveCost, int pushCost) {\n        int res = 0, prev = startAt, f = 1;\n        for (auto now : d) {\n            if (now == 0 && f) continue;\n            if (f) f ^= 1;\n            if (now != prev) res += moveCost, prev = now;\n            res += pushCost;\n        }\n        return res;\n    }\n    \n    int minCostSetTime(int startAt, int moveCost, int pushCost, int targetSeconds) {\n        int ans = 1e9, m = targetSeconds / 60, s = targetSeconds % 60;\n        vector<int> d(4);\n        if (min(m, s) >= 0 && max(m, s) <= 99) {\n            d = { m / 10, m % 10, s / 10, s % 10 };\n            ans = min(ans, calc(d, startAt, moveCost, pushCost));\n        }\n        m -= 1, s += 60;\n        if (min(m, s) >= 0 && max(m, s) <= 99) {\n            d = { m / 10, m % 10, s / 10, s % 10 };\n            ans = min(ans, calc(d, startAt, moveCost, pushCost));\n        }\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);