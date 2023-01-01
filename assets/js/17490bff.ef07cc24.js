"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[16569],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return k}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(t),k=r,h=u["".concat(o,".").concat(k)]||u[k]||c[k]||s;return t?n.createElement(h,m(m({ref:a},l),{},{components:t})):n.createElement(h,m({ref:a},l))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=u;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var i=2;i<s;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77149:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c}});var n=t(87462),r=t(63366),s=(t(67294),t(3905)),m=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/longest-square-streak-in-an-array/",tags:["Array","Hash Table","Binary Search","Dynamic Programming","Sorting"]},o="2501 - Longest Square Streak in an Array (Medium)",i={unversionedId:"2500-2599/longest-square-streak-in-an-array-medium",id:"2500-2599/longest-square-streak-in-an-array-medium",title:"2501 - Longest Square Streak in an Array (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/longest-square-streak-in-an-array/",source:"@site/solutions/2500-2599/2501-longest-square-streak-in-an-array-medium.md",sourceDirName:"2500-2599",slug:"/2500-2599/longest-square-streak-in-an-array-medium",permalink:"/leetcode-the-hard-way/solutions/2500-2599/longest-square-streak-in-an-array-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2500-2599/2501-longest-square-streak-in-an-array-medium.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Hash Table",permalink:"/leetcode-the-hard-way/solutions/tags/hash-table"},{label:"Binary Search",permalink:"/leetcode-the-hard-way/solutions/tags/binary-search"},{label:"Dynamic Programming",permalink:"/leetcode-the-hard-way/solutions/tags/dynamic-programming"},{label:"Sorting",permalink:"/leetcode-the-hard-way/solutions/tags/sorting"}],version:"current",sidebarPosition:2501,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/longest-square-streak-in-an-array/",tags:["Array","Hash Table","Binary Search","Dynamic Programming","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"2500 - 2599",permalink:"/leetcode-the-hard-way/solutions/category/2500---2599"},next:{title:"2520 - Count the Digits That Divide a Number (Easy)",permalink:"/leetcode-the-hard-way/solutions/2500-2599/count-the-digits-that-divide-a-number-easy"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}],u=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)}},k=u("Tabs"),h=u("TabItem"),N=u("SolutionAuthor"),d={toc:c};function g(e){var a=e.components,t=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"2501---longest-square-streak-in-an-array-medium"},"2501 - Longest Square Streak in an Array (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-square-streak-in-an-array/"},"https://leetcode.com/problems/longest-square-streak-in-an-array/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"You are given an integer array ",(0,s.kt)("inlineCode",{parentName:"p"},"nums"),". A subsequence of ",(0,s.kt)("inlineCode",{parentName:"p"},"nums")," is called a ",(0,s.kt)("strong",{parentName:"p"},"square streak")," if:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The length of the subsequence is at least ",(0,s.kt)("inlineCode",{parentName:"li"},"2"),", and"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"after")," sorting the subsequence, each element (except the first element) is the ",(0,s.kt)("strong",{parentName:"li"},"square")," of the previous number.")),(0,s.kt)("p",null,"Return",(0,s.kt)("em",{parentName:"p"},"the length of the ",(0,s.kt)("strong",{parentName:"em"},"longest square streak")," in"),(0,s.kt)("inlineCode",{parentName:"p"},"nums"),(0,s.kt)("em",{parentName:"p"},", or return"),(0,s.kt)("inlineCode",{parentName:"p"},"-1"),(0,s.kt)("em",{parentName:"p"},"if there is no ",(0,s.kt)("strong",{parentName:"em"},"square streak"),".")),(0,s.kt)("p",null,"A ",(0,s.kt)("strong",{parentName:"p"},"subsequence")," is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [4,3,6,16,8,2]\nOutput: 3\nExplanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].\n- 4 = 2 * 2.\n- 16 = 4 * 4.\nTherefore, [4,16,2] is a square streak.\nIt can be shown that every subsequence of length 4 is not a square streak.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Input: nums = [2,3,5,6,7]\nOutput: -1\nExplanation: There is no square streak in nums so return -1.\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"2 <= nums.length <= 10 ^ 5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"2 <= nums[i] <= 10 ^ 5"))),(0,s.kt)("h2",{id:"approach-1-brute-force"},"Approach 1: Brute Force"),(0,s.kt)("p",null,"We can brute force to find the longest subsequence from the range ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mn",{parentName:"mrow"},"317"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[1, 317]")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"317"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]")))))," since the max number could be ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"5"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^5")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"5")))))))))))),". We first put every number to a set then iterate from ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"317")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"317")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"317"))))),". If the current number ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"i")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i")))))," is in the set, we can increase the counter and update the number by multipying itself and record the maximum count. At the end, we just need to check if the longest length is greater than ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," (since the length of the subsequence is at least ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"2")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"))))),")."),(0,s.kt)(k,{mdxType:"Tabs"},(0,s.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,s.kt)(N,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int longestSquareStreak(vector<int>& nums) {\n        // brute force from [1, mx]\n        int n = nums.size(), mx = sqrt(1e5) + 1, ans = 0;\n        // put every number to a set\n        set<long long> s(nums.begin(), nums.end());\n        for (int i = 1; i <= mx; i++) {\n            // starting from i\n            long long now = i;\n            // init counter\n            long long cnt = 0;\n            // check if the current number is in the set\n            while (s.count(now)) {\n                // if so, we increase the counter\n                cnt += 1;\n                // update the number\n                now *= now;\n                // break if it's greater than the boundary\n                if (now > 1e5) {\n                    break;\n                }\n            }\n            // update the longest length of the subsequence\n            ans = max(ans, (int) cnt);\n        }\n        // the length of the subsequence is at least 2\n        return ans >= 2 ? ans : -1;\n    }\n};\n")))))}g.isMDXComponent=!0}}]);