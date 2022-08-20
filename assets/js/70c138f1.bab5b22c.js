"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4494],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,f=c["".concat(l,".").concat(d)]||c[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:i,a[1]=m;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52142:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(8539),m=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/"},u="2259 - Remove Digit From Number to Maximize Result (Easy)",p={unversionedId:"2200-2299/remove-digit-from-number-to-maximize-result-easy",id:"2200-2299/remove-digit-from-number-to-maximize-result-easy",title:"2259 - Remove Digit From Number to Maximize Result (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/",source:"@site/solutions/2200-2299/2259-remove-digit-from-number-to-maximize-result-easy.md",sourceDirName:"2200-2299",slug:"/2200-2299/remove-digit-from-number-to-maximize-result-easy",permalink:"/leetcode-the-hard-way/solutions/2200-2299/remove-digit-from-number-to-maximize-result-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2259-remove-digit-from-number-to-maximize-result-easy.md",tags:[],version:"current",sidebarPosition:2259,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/"},sidebar:"tutorialSidebar",previous:{title:"2256 - Minimum Average Difference (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-average-difference-medium"},next:{title:"2260 - Minimum Consecutive Cards to Pick Up (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/minimum-consecutive-cards-to-pick-up-medium"}},s={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,m);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2259---remove-digit-from-number-to-maximize-result-easy"},"2259 - Remove Digit From Number to Maximize Result (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/"},"https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," representing a ",(0,o.kt)("strong",{parentName:"p"},"positive integer")," and a character ",(0,o.kt)("inlineCode",{parentName:"p"},"digit"),"."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the resulting string after removing ",(0,o.kt)("strong",{parentName:"em"},"exactly one occurrence")," of")," ",(0,o.kt)("inlineCode",{parentName:"p"},"digit")," ",(0,o.kt)("em",{parentName:"p"},"from")," ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," ",(0,o.kt)("em",{parentName:"p"},"such that the value of the resulting string in ",(0,o.kt)("strong",{parentName:"em"},"decimal")," form is ",(0,o.kt)("strong",{parentName:"em"},"maximized")),". The test cases are generated such that ",(0,o.kt)("inlineCode",{parentName:"p"},"digit")," occurs at least once in ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: number = "123", digit = "3"\nOutput: "12"\nExplanation: There is only one \'3\' in "123". After removing \'3\', the result is "12".\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: number = "1231", digit = "1"\nOutput: "231"\nExplanation: We can remove the first \'1\' to get "231" or remove the second \'1\' to get "123".\nSince 231 > 123, we return "231".\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: number = "551", digit = "5"\nOutput: "51"\nExplanation: We can remove either the first or second \'5\' from "551".\nBoth result in the string "51". \n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= number.length <= 100")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"number")," consists of digits from ",(0,o.kt)("inlineCode",{parentName:"li"},"'1'")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"'9'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"digit")," is a digit from ",(0,o.kt)("inlineCode",{parentName:"li"},"'1'")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"'9'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"digit")," occurs at least once in ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),".")),(0,o.kt)("h2",{id:"approach-1-brute-force"},"Approach 1: Brute Force"),(0,o.kt)("p",null,"Iterate from the right, check each possible answer."),(0,o.kt)(a.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    string removeDigit(string number, char digit) {\n        int n = number.size();\n        string ans;\n        // iterate from the right\n        for (int i = n - 1; i >= 0; i--) {\n            // if it matches the digit\n            if (number[i] == digit) {\n                // build the string without the i-th character\n                ans = max(ans, number.substr(0, i) + number.substr(i + 1));\n            }\n        }\n        return ans;\n    }\n};\n")))}f.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);function i(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);