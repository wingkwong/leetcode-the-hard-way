"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"Author: @ColeB2 | https://leetcode.com/problems/decode-ways/",tags:["String","Dynamic Programming"]},i="0091 - Decode Ways (Medium)",l={unversionedId:"0000-0099/decode-ways-medium",id:"0000-0099/decode-ways-medium",title:"0091 - Decode Ways (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/decode-ways/",source:"@site/solutions/0000-0099/0091-decode-ways-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/decode-ways-medium",permalink:"/solutions/0000-0099/decode-ways-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0091-decode-ways-medium.md",tags:[{label:"String",permalink:"/solutions/tags/string"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:91,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/decode-ways/",tags:["String","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"0090 - Subsets II (Medium)",permalink:"/solutions/0000-0099/subsets-ii-medium"},next:{title:"0093 - Restore IP Addresses (Medium)",permalink:"/solutions/0000-0099/restore-ip-addresses-medium"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bottom-Up Dynamic Programming",id:"approach-1-bottom-up-dynamic-programming",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=d("Tabs"),m=d("TabItem"),c=d("SolutionAuthor"),h={toc:p},g="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0091---decode-ways-medium"},"0091 - Decode Ways (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/decode-ways/"},"https://leetcode.com/problems/decode-ways/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"A message containing letters from ",(0,r.kt)("inlineCode",{parentName:"p"},"A-Z")," can be ",(0,r.kt)("strong",{parentName:"p"},"encoded")," into numbers using the following mapping:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"'A' -> \"1\"\n'B' -> \"2\"\n...\n'Z' -> \"26\"\n")),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"decode")," an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'"11106"')," can be mapped into:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"AAJF"')," with the grouping ",(0,r.kt)("inlineCode",{parentName:"li"},"(1 1 10 6)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"KJF"')," with the grouping ",(0,r.kt)("inlineCode",{parentName:"li"},"(11 10 6)"))),(0,r.kt)("p",null,"Note that the grouping ",(0,r.kt)("inlineCode",{parentName:"p"},"(1 11 06)")," is invalid because ",(0,r.kt)("inlineCode",{parentName:"p"},'"06"')," cannot be mapped into ",(0,r.kt)("inlineCode",{parentName:"p"},"'F'")," since ",(0,r.kt)("inlineCode",{parentName:"p"},'"6"')," is different from ",(0,r.kt)("inlineCode",{parentName:"p"},'"06"'),"."),(0,r.kt)("p",null,"Given a string ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," containing only digits, return ",(0,r.kt)("em",{parentName:"p"},"the ",(0,r.kt)("strong",{parentName:"em"},"number")," of ways to ",(0,r.kt)("strong",{parentName:"em"},"decode")," it"),"."),(0,r.kt)("p",null,"The test cases are generated so that the answer fits in a ",(0,r.kt)("strong",{parentName:"p"},"32-bit")," integer."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "12"\nOutput: 2\nExplanation: "12" could be decoded as "AB" (1 2) or "L" (12).\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "226"\nOutput: 3\nExplanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input: s = "06"\nOutput: 0\nExplanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 100")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," contains only digits and may contain leading zero(s).")),(0,r.kt)("h2",{id:"approach-1-bottom-up-dynamic-programming"},"Approach 1: Bottom-Up Dynamic Programming"),(0,r.kt)("p",null,"We can use a bottom-up dp approach. By looping backwards we have 2 main cases to worry about. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Current number is not a zero. If the current number was a 0, we would do nothing, and just leave our current number of ways as 0, as we may not have a valid string that can be decoded. If it is not a 0 though, we know we should have at least the same number of ways that we had in the previous case."),(0,r.kt)("li",{parentName:"ol"},"If the current number is a $$1$$, or a $$2$$ and the previous was a $$6$$ or less,  then the number of ways would be equal to whatever the current number of ways is, plus the number of ways from 2 iterations before.")),(0,r.kt)("p",null,"These two cases work in sequence based on each other. If the current number is a 1 or a 2, then we know from the first case that we have at least as many ways as we had on the previous iteration, so we can update our dp value to reflect that. We also know that based on the second case, we can add the values we have from our dp array from 2 iterations before as the current and previous string values can also be counted now as a single letter we can decode."),(0,r.kt)("p",null,"Knowing that, we only ever need to track current, 1 before and 2 before, means we don't need to initialize a dp array of all zeroes, and we can use $$O(1)$$ space to just track the 3 values we need."),(0,r.kt)("p",null,"We can do this, as on any given iteration, we need to know the value of the last iteration $$(dp","[i - 1]",")$$ at least to determine the current value $$(dp","[i]",")$$, and if we can potentially use the current string number as a two-digit string, we would also need to know the value of the dp value from 2 iterations ago $$dp","[i - 2]","$$."),(0,r.kt)("p",null,"Time Complexity: $$O(n)$$ where n is the length of the string."),(0,r.kt)("p",null,"Space Complexity: $$O(1)$$."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(c,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def numDecodings(self, s: str) -> int:\n        # initialize n, and our 3 dp values\n        n = len(s)\n        # values are current, previous 1 and previous 2.\n        # dp[i], dp[i + 1], dp[i + 2] if we utilized a dp array and\n        # looped backwards. Initialize our All of them as 0, to cover\n        # the case if re reach a 0, and initialize dp1/dp[i + 1] as\n        # 1 to assume that we will have at least 1 way to decode string.\n        dp, dp1, dp2 = 0, 1, 0\n        # loop through the numbers backwards\n        for i in range(n - 1, -1, -1):\n            # if number isn't a 0, we need to change it.\n            if s[i] != '0':\n                # set current dp value, which is 0, to the previous\n                # dp value which is dp1/dp[i + 1]\n                dp = dp1\n            # If we aren't the last digit in the string and the digit\n            # is either a 1, or it is a 2, and second is 0->6\n            # ie 10->19 or 20->26\n            if i + 1 < n and (s[i] == '1' or s[i] == '2' and s[i + 1] <= '6'):\n                # add the values from dp2/dp[i + 2] to the current as we\n                # have multiple way we can parse this number.\n                dp += dp2\n            # Reset our dp values. Our current will be 0 again, to handle\n            # the case where number may be 0.\n            # Previous value: dp1/dp[i + 1] will be what the current dp is.\n            # dp2/dp[i + 2] value will be our previous, dp1 value.\n            dp, dp1, dp2 = 0, dp, dp1\n        # return our previous dp1 value we solved. Which would be the\n        # current value on the last iteration, but that gets set to 0.\n        return dp1\n")))))}b.isMDXComponent=!0}}]);