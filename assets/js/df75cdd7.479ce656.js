"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1055],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(a),d=r,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||p;return a?n.createElement(k,m(m({ref:t},l),{},{components:a})):n.createElement(k,m({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,m=new Array(p);m[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,m[1]=s;for(var i=2;i<p;i++)m[i]=a[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31843:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=a(87462),r=a(63366),p=(a(67294),a(3905)),m=a(8539),s=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/validate-stack-sequences/"},i="0946 - Validate Stack Sequences (Medium)",l={unversionedId:"0900-0999/validate-stack-sequences-medium",id:"0900-0999/validate-stack-sequences-medium",title:"0946 - Validate Stack Sequences (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/validate-stack-sequences/",source:"@site/solutions/0900-0999/0946-validate-stack-sequences-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/validate-stack-sequences-medium",permalink:"/leetcode-the-hard-way/solutions/0900-0999/validate-stack-sequences-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0946-validate-stack-sequences-medium.md",tags:[],version:"current",sidebarPosition:946,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/validate-stack-sequences/"},sidebar:"tutorialSidebar",previous:{title:"0941 - Valid Mountain Array (Easy)",permalink:"/leetcode-the-hard-way/solutions/0900-0999/valid-mountain-array-easy"},next:{title:"0952 - Largest Component Size by Common Factor (Hard)",permalink:"/leetcode-the-hard-way/solutions/0900-0999/largest-component-size-by-common-factor-hard"}},c={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}],d={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,p.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"0946---validate-stack-sequences-medium"},"0946 - Validate Stack Sequences (Medium)"),(0,p.kt)("h2",{id:"problem-link"},"Problem Link"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/validate-stack-sequences/"},"https://leetcode.com/problems/validate-stack-sequences/")),(0,p.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,p.kt)("p",null,"Given two integer arrays ",(0,p.kt)("inlineCode",{parentName:"p"},"pushed")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"popped")," each with distinct values, return ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," ",(0,p.kt)("em",{parentName:"p"},"if this could have been the result of a sequence of push and pop operations on an initially empty stack, or")," ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," ",(0,p.kt)("em",{parentName:"p"},"otherwise.")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 1:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]\nOutput: true\nExplanation: We might do the following sequence:\npush(1), push(2), push(3), push(4),\npop() -> 4,\npush(5),\npop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example 2:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]\nOutput: false\nExplanation: 1 cannot be popped before 2.\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Constraints:")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"1 <= pushed.length <= 1000")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"0 <= pushed[i] <= 1000")),(0,p.kt)("li",{parentName:"ul"},"All the elements of ",(0,p.kt)("inlineCode",{parentName:"li"},"pushed")," are ",(0,p.kt)("strong",{parentName:"li"},"unique"),"."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"popped.length == pushed.length")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"popped")," is a permutation of ",(0,p.kt)("inlineCode",{parentName:"li"},"pushed"),".")),(0,p.kt)("h2",{id:"approach-1-simulation"},"Approach 1: Simulation"),(0,p.kt)("p",null,"We use stack to simulate. For each item in ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mi",{parentName:"mrow"},"u"),(0,p.kt)("mi",{parentName:"mrow"},"s"),(0,p.kt)("mi",{parentName:"mrow"},"h"),(0,p.kt)("mi",{parentName:"mrow"},"e"),(0,p.kt)("mi",{parentName:"mrow"},"d")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"pushed")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),", we push it to the stack. If the top element of the stack matches the target element in ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mi",{parentName:"mrow"},"o"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mi",{parentName:"mrow"},"e"),(0,p.kt)("mi",{parentName:"mrow"},"d")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"popped")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"pp"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),", we pop that and increase the pointer in ",(0,p.kt)("span",{parentName:"p",className:"math math-inline"},(0,p.kt)("span",{parentName:"span",className:"katex"},(0,p.kt)("span",{parentName:"span",className:"katex-mathml"},(0,p.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,p.kt)("semantics",{parentName:"math"},(0,p.kt)("mrow",{parentName:"semantics"},(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mi",{parentName:"mrow"},"o"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mi",{parentName:"mrow"},"p"),(0,p.kt)("mi",{parentName:"mrow"},"e"),(0,p.kt)("mi",{parentName:"mrow"},"d")),(0,p.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"popped")))),(0,p.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,p.kt)("span",{parentName:"span",className:"base"},(0,p.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"pp"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,p.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),". At the end, return true if the stack is empty, return false if not."),(0,p.kt)(m.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {\n        stack<int> s;\n        for (auto i = 0, j = 0; i < pushed.size(); i++) {\n            // push each item\n            s.push(pushed[i]);\n            // greedily pop from the stack\n            // increase the pointer in popped\n            while (!s.empty() && s.top() == popped[j]) s.pop(), j++;\n        }\n        // if there is no element in the stack, return true\n        // else false\n        return s.empty();\n    }\n};\n")))}k.isMDXComponent=!0},8539:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.name;return n.createElement("div",{className:"solution-author-wrapper"},n.createElement("span",null,"This solution is written by ",t))}}}]);