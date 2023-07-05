"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[51916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"Author: @ColeB2 | https://leetcode.com/problems/generate-parentheses/description/",tags:["String","Dynamic Programming","Backtracking"]},s="0022 - Generate Parentheses (Medium)",i={unversionedId:"0000-0099/generate-parentheses-medium",id:"0000-0099/generate-parentheses-medium",title:"0022 - Generate Parentheses (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/generate-parentheses/description/",source:"@site/solutions/0000-0099/0022-generate-parentheses-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/generate-parentheses-medium",permalink:"/solutions/0000-0099/generate-parentheses-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0022-generate-parentheses-medium.md",tags:[{label:"String",permalink:"/solutions/tags/string"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Backtracking",permalink:"/solutions/tags/backtracking"}],version:"current",sidebarPosition:22,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/generate-parentheses/description/",tags:["String","Dynamic Programming","Backtracking"]},sidebar:"tutorialSidebar",previous:{title:"0021 - Merge Two Sorted Lists (Easy)",permalink:"/solutions/0000-0099/merge-two-sorted-lists-easy"},next:{title:"0023 - Merge k Sorted Lists (Hard)",permalink:"/solutions/0000-0099/merge-k-sorted-lists-hard"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Backtracking",id:"approach-1-backtracking",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=c("Tabs"),h=c("TabItem"),m=c("SolutionAuthor"),d={toc:p},g="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0022---generate-parentheses-medium"},"0022 - Generate Parentheses (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/generate-parentheses/description/"},"https://leetcode.com/problems/generate-parentheses/description/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," pairs of parentheses, write a function to ",(0,r.kt)("em",{parentName:"p"},"generate all combinations of well-formed parentheses"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: n = 3\nOutput: ["((()))","(()())","(())()","()(())","()()()"]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: n = 1\nOutput: ["()"]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 8"))),(0,r.kt)("h2",{id:"approach-1-backtracking"},"Approach 1: Backtracking"),(0,r.kt)("p",null,"To solve this, we need to understack how valid parentheses work. We know that we can not start a valid parentheses pair with a closing parentheses, so we always need an open parentheses before we add a close parentheses. We also know that we can have as many open parentheses as we see fit (obviously limited by $n=8$ in this specific question), as well as open and close pairs inbetween any open and close parentheses pairs. $((()))$ or $(()())$ etc."),(0,r.kt)("p",null,"Knowing that we have can create some rules on how to place parentheses inside our string."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If we reach a limit of both open and close parentheses, then we can add our answer to our output array. ie: $open == close == 0$."),(0,r.kt)("li",{parentName:"ol"},"If we reach a limit of open parentheses but not close, that is number of open parentheses is equal to $n$, but number of close isn't, then we only need to add closing parentheses. ie: $open == 0$ but $close != 0$."),(0,r.kt)("li",{parentName:"ol"},"If we have an even amount of open and close parentheses, we can only place an open parentheses, as there isn't anything to close. ie: $open == close$."),(0,r.kt)("li",{parentName:"ol"},"Finally that means if we have more close parentheses than open and either are not 0. We can place either another open parentheses, or a close parentheses.")),(0,r.kt)("p",null,"Know these rules we can use a stack, and backtrack our way, by placing the appropriate parentheses using our rules at each step, decrementing the proper count of either open or close depending on what we did to the string, and returning our output when we run out of items in the stack."),(0,r.kt)("p",null,"Now the time and space for this is not a simple answer. If we count out the number of parentheses in each output for our $n$ from $1 to 8$, we get counts of $1, 2, 5, 14, 42, 132, 429$, and $1430$. Knowing that, we can see they are not quite bound by $2^n$ ($2, 4, 8, 16, 32, 64, 128, 256$), but they are bound by $2^{(2*n)}$ or $4^n$ ($4, 16, 64, 256, 1024, 4096, 16384, 65536$). They are also even bound by $3^n$ for all n from 1 to 8. "),(0,r.kt)("p",null,"But if we want a more accurate bound, we must use math. An astute reader might also see that the number of parentheses matches very well with the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Catalan_number"},"Catalan Numbers"),". That is true, that our time does more resemble $$O(n * Catalan(n))$$ Where $n$ is the $n$ from our question, the number of parentheses pairs, and $Catalan(n)$ is the nth catalan number. Which asymptotically grows as: $$O(\\frac{4^n}{n^{3/2}\\sqrt(\\pi)})$$. So by removing constant, root of pi, and substituting it in for Catalan(n) we get a closer bound of $$O(\\frac{4^n}{\\sqrt(n)})$$"),(0,r.kt)("p",null,"Time and Space Complexity: $$O(4^n)$$ does a good job as being a loose upper bound, but if you want a close one, $$O(\\frac{4^n}{\\sqrt(n)})$$ works, and I urge you to research more about Catalan number to find out why. But for our case $$O(4^n)$$ is fairly sufficient. "),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(m,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'class Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        # Initialize our output array, and our stack.\n        # Our stack will be formatted in the form of:\n        # (parentheses string, open_left, close_left) Where we will initialize\n        # an empty string, as we haven\'t started yet, and n as remaining number\n        # of opening and closing parentheses.\n        output = []\n        stack = [("", n, n)]\n        while stack:\n            # Here we pop off the stack our parentheses string, and our remaining\n            # count of opening and closing parentheses.\n            paren, _open, _close = stack.pop()\n            # Here we can combine steps 1, and 2 above using some clever python.\n            # If opening has reach 0, we can only add closing parentheses.\n            if _open == 0:\n                # So we add remaining number of closing parentheses to string.\n                # Python can handle that using string multiplication.\n                # If _close > 0 it will, ex 3, it will create ")))" to add to end.\n                # If _close == 0, it will add nothing to the end.\n                # In either case, _close will reach 0, and be ready to add to output.\n                paren += ")" * _close\n                # Add answer to our output and continue.\n                output.append(paren)\n            # If we have even number of open and close parentheses, we know we\n            # can\'t close anything, so we have to add opening parentheses.\n            elif _open == _close:\n                stack.append((paren + "(", _open - 1, _close))\n            # Left in the 4th step, We can do either add an open, or close. So we\n            # will do both, and allow our backtracking stack to handle both cases.\n            else:\n                stack.append((paren + "(", _open - 1, _close))\n                stack.append((paren + ")", _open, _close - 1))\n        return output\n')))))}f.isMDXComponent=!0}}]);