"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7907],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(t),d=i,b=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(b,l(l({ref:n},p),{},{components:t})):r.createElement(b,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=s;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7408:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),l=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/ugly-number-iii/"},u="1201 - Ugly Number III (Medium)",c={unversionedId:"1200-1299/ugly-number-iii-medium",id:"1200-1299/ugly-number-iii-medium",title:"1201 - Ugly Number III (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/ugly-number-iii/",source:"@site/solutions/1200-1299/1201-ugly-number-iii-medium.md",sourceDirName:"1200-1299",slug:"/1200-1299/ugly-number-iii-medium",permalink:"/leetcode-the-hard-way/solutions/1200-1299/ugly-number-iii-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1200-1299/1201-ugly-number-iii-medium.md",tags:[],version:"current",lastUpdatedBy:"Wing-Kam Wong",lastUpdatedAt:1652705137,formattedLastUpdatedAt:"5/16/2022",sidebarPosition:1201,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/ugly-number-iii/"},sidebar:"tutorialSidebar",previous:{title:"1200 - 1299",permalink:"/leetcode-the-hard-way/solutions/category/1200---1299"},next:{title:"1202 - Smallest String With Swaps (Medium)",permalink:"/leetcode-the-hard-way/solutions/1200-1299/smallest-string-with-swaps-medium"}},p={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Inclusive-Exclusive + Binary Search",id:"approach-1-inclusive-exclusive--binary-search",level:2}],s={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1201---ugly-number-iii-medium"},"1201 - Ugly Number III (Medium)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"ugly number")," is a positive integer that is divisible by ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,a.kt)("p",null,"Given four integers ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"c"),", return the ",(0,a.kt)("inlineCode",{parentName:"p"},"nth")," ",(0,a.kt)("strong",{parentName:"p"},"ugly number"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: n = 3, a = 2, b = 3, c = 5\nOutput: 4\nExplanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: n = 4, a = 2, b = 3, c = 4\nOutput: 6\nExplanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: n = 5, a = 2, b = 11, c = 13\nOutput: 10\nExplanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= n, a, b, c <= 10^9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= a * b * c <= 10^18")),(0,a.kt)("li",{parentName:"ul"},"It is guaranteed that the result will be in range ",(0,a.kt)("inlineCode",{parentName:"li"},"[1, 2 * 10^9]"),".")),(0,a.kt)("h2",{id:"approach-1-inclusive-exclusive--binary-search"},"Approach 1: Inclusive-Exclusive + Binary Search"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int ok(long long n, long long a, long long b, long long c) {\n        // numbers (1 to n) divisble by a = n / a\n        // numbers (1 to n) divisble by b = n / b\n        // numbers (1 to n) divisble by c = n / c\n        // exclude overlapping counts for a and b = n / lcm(a, b)\n        // exclude overlapping counts for b and c = n / lcm(b, c)\n        // exclude overlapping counts for a and c = n / lcm(a, c)\n        // include those covered by all a, b and c = n / lcm(a, lcm(b, c))  \n        \n        // Set theory Formula: \n        // a + b + c - a \u2229 c - a \u2229 b - b \u2229 c + a \u2229 b \u2229 c\n        return (int) n / a + n / b + n / c \n        - n / lcm(a, b)\n        - n / lcm(b, c)\n        - n / lcm(a, c)\n        + n / lcm(a, lcm(b, c));\n    }\n    \n    int nthUglyNumber(int n, int a, int b, int c) {\n        // init possible range [1, 2 * 10 ^ 9]\n        int l = 1, r = 2e9;\n        while (l < r) {\n            // get the middle one\n            // for even number of elements, take the lower one\n            int m = l + (r - l) / 2;\n            // exclude m\n            if (n > ok(m, a, b, c)) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return l;\n    }\n};\n")))}d.isMDXComponent=!0}}]);