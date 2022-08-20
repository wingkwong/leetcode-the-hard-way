"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5723],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return N}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),N=r,k=u["".concat(o,".").concat(N)]||u[N]||c[N]||s;return t?a.createElement(k,m(m({ref:n},l),{},{components:t})):a.createElement(k,m({ref:n},l))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var p=2;p<s;p++)m[p]=t[p];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12675:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),m=t(8539),i=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/compare-version-numbers/"},p="0165 - Compare Version Numbers (Medium)",l={unversionedId:"0100-0199/compare-version-numbers-medium",id:"0100-0199/compare-version-numbers-medium",title:"0165 - Compare Version Numbers (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/compare-version-numbers/",source:"@site/solutions/0100-0199/0165-compare-version-numbers-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/compare-version-numbers-medium",permalink:"/leetcode-the-hard-way/solutions/0100-0199/compare-version-numbers-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0165-compare-version-numbers-medium.md",tags:[],version:"current",sidebarPosition:165,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/compare-version-numbers/"},sidebar:"tutorialSidebar",previous:{title:"0155 - Min Stack (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/min-stack-easy"},next:{title:"0169 - Majority Element (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/majority-element-easy"}},c={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Split",id:"approach-1-split",level:2}],N={toc:u};function k(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"0165---compare-version-numbers-medium"},"0165 - Compare Version Numbers (Medium)"),(0,s.kt)("h2",{id:"problem-link"},"Problem Link"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/compare-version-numbers/"},"https://leetcode.com/problems/compare-version-numbers/")),(0,s.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,s.kt)("p",null,"Given two version numbers, ",(0,s.kt)("inlineCode",{parentName:"p"},"version1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"version2"),", compare them."),(0,s.kt)("p",null,"Version numbers consist of ",(0,s.kt)("strong",{parentName:"p"},"one or more revisions")," joined by a dot ",(0,s.kt)("inlineCode",{parentName:"p"},"'.'"),". Each revision consists of ",(0,s.kt)("strong",{parentName:"p"},"digits")," and may contain leading ",(0,s.kt)("strong",{parentName:"p"},"zeros"),". Every revision contains ",(0,s.kt)("strong",{parentName:"p"},"at least one character"),". Revisions are ",(0,s.kt)("strong",{parentName:"p"},"0-indexed from left to right"),", with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example ",(0,s.kt)("inlineCode",{parentName:"p"},"2.5.33")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"0.1")," are valid version numbers."),(0,s.kt)("p",null,"To compare version numbers, compare their revisions in ",(0,s.kt)("strong",{parentName:"p"},"left-to-right order"),". Revisions are compared using their ",(0,s.kt)("strong",{parentName:"p"},"integer value ignoring any leading zeros"),". This means that revisions ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"001")," are considered ",(0,s.kt)("strong",{parentName:"p"},"equal"),". If a version number does not specify a revision at an index, then ",(0,s.kt)("strong",{parentName:"p"},"treat the revision as ",(0,s.kt)("inlineCode",{parentName:"strong"},"0")),". For example, version ",(0,s.kt)("inlineCode",{parentName:"p"},"1.0")," is less than version ",(0,s.kt)("inlineCode",{parentName:"p"},"1.1")," because their revision 0s are the same, but their revision 1s are ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," respectively, and ",(0,s.kt)("inlineCode",{parentName:"p"},"0 < 1"),"."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Return the following:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"version1 < version2"),", return ",(0,s.kt)("inlineCode",{parentName:"li"},"-1"),"."),(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"version1 > version2"),", return ",(0,s.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,s.kt)("li",{parentName:"ul"},"Otherwise, return ",(0,s.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 1:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: version1 = "1.01", version2 = "1.001"\nOutput: 0\nExplanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 2:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: version1 = "1.0", version2 = "1.0.0"\nOutput: 0\nExplanation: version1 does not specify revision 2, which means it is treated as "0".\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example 3:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Input: version1 = "0.1", version2 = "1.1"\nOutput: -1\nExplanation: version1\'s revision 0 is "0", while version2\'s revision 0 is "1". 0 < 1, so version1 < version2.\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Constraints:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"1 <= version1.length, version2.length <= 500")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"version1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"version2")," only contain digits and ",(0,s.kt)("inlineCode",{parentName:"li"},"'.'"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"version1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"version2")," ",(0,s.kt)("strong",{parentName:"li"},"are valid version numbers"),"."),(0,s.kt)("li",{parentName:"ul"},"All the given revisions in ",(0,s.kt)("inlineCode",{parentName:"li"},"version1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"version2")," can be stored in a ",(0,s.kt)("strong",{parentName:"li"},"32-bit integer"),".")),(0,s.kt)("h2",{id:"approach-1-split"},"Approach 1: Split"),(0,s.kt)("p",null,'We split the input strings by "." and store the digit into a list. Then we pad 0s to the shortest list to make the length for both list equal. Then we can compare both list. In Python3, ',(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"cmp(a, b)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," is gone so the equivalent for it is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},">"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"<"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(a > b) - (a < b)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,s.kt)(m.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def compareVersion(self, version1: str, version2: str) -> int:\n        v1 = [int(i) for i in version1.split(".")]\n        v2 = [int(i) for i in version2.split(".")]\n        l1, l2 = len(v1), len(v2)\n        if l1 < l2: v1 += [0] * (l2 - l1)\n        else: v2 += [0] * (l1 - l2)\n        return (v1 > v2) - (v1 < v2)\n')))}k.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",n))}}}]);