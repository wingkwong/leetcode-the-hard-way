"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(m,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Author: @ColeB2 | https://leetcode.com/problems/jump-game/",tags:["Array","Dynamic Programming","Greedy"]},o="0055 - Jump Game (Medium)",l={unversionedId:"0000-0099/jump-game-medium",id:"0000-0099/jump-game-medium",title:"0055 - Jump Game (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/jump-game/",source:"@site/solutions/0000-0099/0055-jump-game-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/jump-game-medium",permalink:"/solutions/0000-0099/jump-game-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0055-jump-game-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{label:"Greedy",permalink:"/solutions/tags/greedy"}],version:"current",sidebarPosition:55,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/jump-game/",tags:["Array","Dynamic Programming","Greedy"]},sidebar:"tutorialSidebar",previous:{title:"0054 - Spiral Matrix (Medium)",permalink:"/solutions/0000-0099/spiral-matrix-medium"},next:{title:"0056 - Merge Intervals (Medium)",permalink:"/solutions/0000-0099/merge-intervals-medium"}},m={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=u("Tabs"),c=u("TabItem"),d=u("SolutionAuthor"),h={toc:p},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0055---jump-game-medium"},"0055 - Jump Game (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/jump-game/"},"https://leetcode.com/problems/jump-game/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),". You are initially positioned at the array's ",(0,a.kt)("strong",{parentName:"p"},"first index"),", and each element in the array represents your maximum jump length at that position."),(0,a.kt)("p",null,"Return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," ",(0,a.kt)("em",{parentName:"p"},"if you can reach the last index, or")," ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," ",(0,a.kt)("em",{parentName:"p"},"otherwise"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [2,3,1,1,4]\nOutput: true\nExplanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [3,2,1,0,4]\nOutput: false\nExplanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 10^5"))),(0,a.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,a.kt)("p",null,"We can solve this backwards by tracking the furthest position we can jump, and moving it backwards if we can reach that position from the current position."),(0,a.kt)("p",null,"By initializing a $$finish$$ at $$nums.length$$ and iterating backwards through the numbers and setting our $$finish$$ to $$i$$ if the current number plus $$i$$ is greater than or equal to our finish, we can find the answer if we can eventually get our $$finish$$ to reach 0."),(0,a.kt)("p",null,"Time Complexity: $$O(n)$$ where $$n$$ is the length of $$nums$$. We only need to iterate through each number in the $$nums$$ array once."),(0,a.kt)("p",null,"Space Compelxity: $$O(1)$$. We only need constant space to track our $$finish$$ line."),(0,a.kt)(s,{mdxType:"Tabs"},(0,a.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(d,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        # initialize a finish line\n        finish = len(nums) - 1\n        # loop through numbers backwards\n        for i in range(len(nums) - 1, -1, -1):\n            # if we can jump past our finish line from current position:\n            if nums[i] + i >= finish:\n                # move our finish line to current position, as we know\n                # if we ever reach this position, we can reach the finish\n                finish = i\n        # if our finish reaches 0, we know we can successfully reach\n        # the finish line, if not, this will return False.\n        return finish == 0\n")))))}g.isMDXComponent=!0}}]);