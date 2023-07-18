"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9119],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=m(a),k=r,d=c["".concat(p,".").concat(k)]||c[k]||h[k]||s;return a?n.createElement(d,o(o({ref:t},i),{},{components:a})):n.createElement(d,o({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},10888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>N,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={description:"Author: @ColeB2 | https://leetcode.com/problems/length-of-last-word/",tags:["String"]},o="0058 - Length of Last Word",l={unversionedId:"0000-0099/length-of-last-word-easy",id:"0000-0099/length-of-last-word-easy",title:"0058 - Length of Last Word",description:"Author: @ColeB2 | https://leetcode.com/problems/length-of-last-word/",source:"@site/solutions/0000-0099/0058-length-of-last-word-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/length-of-last-word-easy",permalink:"/solutions/0000-0099/length-of-last-word-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0058-length-of-last-word-easy.md",tags:[{label:"String",permalink:"/solutions/tags/string"}],version:"current",sidebarPosition:58,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/length-of-last-word/",tags:["String"]},sidebar:"tutorialSidebar",previous:{title:"0057 - Insert Interval (Medium)",permalink:"/solutions/0000-0099/insert-interval-medium"},next:{title:"0061 - Rotate List (Medium)",permalink:"/solutions/0000-0099/rotate-list-medium"}},p={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Looping Backwards",id:"approach-1-looping-backwards",level:2}],i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=i("Tabs"),h=i("TabItem"),k=i("SolutionAuthor"),d={toc:m},u="wrapper";function N(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0058---length-of-last-word"},"0058 - Length of Last Word"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/length-of-last-word/"},"https://leetcode.com/problems/length-of-last-word/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given a string ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," consisting of words and spaces, return ",(0,r.kt)("em",{parentName:"p"},"the length of the ",(0,r.kt)("strong",{parentName:"em"},"last")," word in the string"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"word")," is a maximal substring consisting of non-space characters only."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "Hello World"\nOutput: 5\nExplanation: The last word is "World" with length 5.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "   fly me   to   the moon  "\nOutput: 4\nExplanation: The last word is "moon" with length 4.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "luffy is still joyboy"\nOutput: 6\nExplanation: The last word is "joyboy" with length 6.\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," consists of only English letters and spaces ",(0,r.kt)("inlineCode",{parentName:"li"},"' '"),"."),(0,r.kt)("li",{parentName:"ul"},"There will be at least one word in ",(0,r.kt)("inlineCode",{parentName:"li"},"s"),".")),(0,r.kt)("h2",{id:"approach-1-looping-backwards"},"Approach 1: Looping Backwards"),(0,r.kt)("p",null,"We can simply initialize a pointer to start at the end of the string, iterate backwards until we find a non-space character, then start our algorithm. Which will be to iterate backwards until the next space character, incrementing a variable to track the length of the word."),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),", where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," is the length of the string, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"))))),". In the worst case, we will have to iterate over the whole string."),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),". We only need to track a pointer variable, and a variable to track the length of the word."),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def lengthOfLastWord(self, s: str) -> int:\n        # initialize i as our pointer at the end of s.\n        i = len(s) - 1\n        # initialize length, as the length of our last word\n        length = 0\n        # reach First word.\n        while i >= 0 and s[i] == ' ':\n            i -= 1\n        # count length first word\n        while i >= 0 and s[i] != ' ':\n            i -= 1\n            length += 1\n        return length\n")))))}N.isMDXComponent=!0}}]);