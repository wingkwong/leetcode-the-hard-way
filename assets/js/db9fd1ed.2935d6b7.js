"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[10343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,h=c["".concat(o,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={description:"Author: @wingkwong, @radojicic23, @vigneshshiv | https://leetcode.com/problems/increasing-triplet-subsequence/"},s="0334 - Increasing Triplet Subsequence (Medium)",l={unversionedId:"0300-0399/increasing-triplet-subsequence-medium",id:"0300-0399/increasing-triplet-subsequence-medium",title:"0334 - Increasing Triplet Subsequence (Medium)",description:"Author: @wingkwong, @radojicic23, @vigneshshiv | https://leetcode.com/problems/increasing-triplet-subsequence/",source:"@site/solutions/0300-0399/0334-increasing-triplet-subsequence-medium.md",sourceDirName:"0300-0399",slug:"/0300-0399/increasing-triplet-subsequence-medium",permalink:"/solutions/0300-0399/increasing-triplet-subsequence-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0334-increasing-triplet-subsequence-medium.md",tags:[],version:"current",sidebarPosition:334,frontMatter:{description:"Author: @wingkwong, @radojicic23, @vigneshshiv | https://leetcode.com/problems/increasing-triplet-subsequence/"},sidebar:"tutorialSidebar",previous:{title:"0332 - Reconstruct Itinerary (Hard)",permalink:"/solutions/0300-0399/reconstruct-itinerary-hard"},next:{title:"0338 - Counting Bits (Easy)",permalink:"/solutions/0300-0399/counting-bits-easy"}},o={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=p("Tabs"),m=p("TabItem"),d=p("SolutionAuthor"),h={toc:u},f="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0334---increasing-triplet-subsequence-medium"},"0334 - Increasing Triplet Subsequence (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/increasing-triplet-subsequence/"},"https://leetcode.com/problems/increasing-triplet-subsequence/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," ",(0,i.kt)("em",{parentName:"p"},"if there exists a triple of indices")," ",(0,i.kt)("inlineCode",{parentName:"p"},"(i, j, k)")," ",(0,i.kt)("em",{parentName:"p"},"such that")," ",(0,i.kt)("inlineCode",{parentName:"p"},"i < j < k")," ",(0,i.kt)("em",{parentName:"p"},"and")," ",(0,i.kt)("inlineCode",{parentName:"p"},"nums[i] < nums[j] < nums[k]"),". If no such indices exists, return ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,4,5]\nOutput: true\nExplanation: Any triplet where i < j < k is valid.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [5,4,3,2,1]\nOutput: false\nExplanation: No triplet exists.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [2,1,5,0,4,6]\nOutput: true\nExplanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 5 * 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-2^31 <= nums[i] <= 2^31 - 1"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Follow up:")," Could you implement a solution that runs in ",(0,i.kt)("inlineCode",{parentName:"p"},"O(n)")," time complexity and ",(0,i.kt)("inlineCode",{parentName:"p"},"O(1)")," space complexity?"),(0,i.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,i.kt)("p",null,"Find the first two smallest numbers. If there is a number greater than them, then we can return true. Otherwise, return false at the end."),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(m,{value:"c++",label:"C++",mdxType:"TabItem"},(0,i.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool increasingTriplet(vector<int>& nums) {\n        int first = INT_MAX, second = INT_MAX;\n        for (auto x : nums) {\n            // update the first smallest number\n            if (x <= first) first = x;\n            // update the second smallest number\n            else if (x <= second) second = x;\n            // x > first && x > second -> found the answer\n            else return true;\n        }\n        return false;\n    }\n};\n"))),(0,i.kt)(m,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(d,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def increasingTriplet(self, nums: List[int]) -> bool:        \n        threshold1 = threshold2 = float("inf")\n        for num in nums:\n            # update the first smallest threshold\n            if num <= threshold1:\n                threshold1 = num\n            # update the second smallest threshold\n            elif num <= threshold2:\n                threshold2 = num\n            # if it\'s greater than both thresholds\n            else:\n                return True\n        return False\n'))),(0,i.kt)(m,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)(d,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar increasingTriplet = function(nums) {\n    let threshold1 = Infinity;\n    let threshold2 = Infinity;\n    for (n of nums) {\n        // update the first smallest threshold\n        if (n <= threshold1) threshold1 = n;\n        // update the second smallest threshold\n        else if (n <= threshold2) threshold2 = n;\n        // if it's greater than both tresholds\n        else return true;\n    }\n    return false;\n};\n"))),(0,i.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean increasingTriplet(int[] nums) {\n        int first = Integer.MAX_VALUE, second = Integer.MAX_VALUE;\n        for (int x : nums) {\n            // update the first smallest number\n            if (x <= first) first = x;\n            // update the second smallest number\n            else if (x <= second) second = x;\n            // if x > first && x > second, then found the answer\n            else return true;\n        }\n        return false;\n    }\n}\n")))))}b.isMDXComponent=!0}}]);