"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[20761],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return t?i.createElement(h,o(o({ref:n},u),{},{components:t})):i.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const a={description:"Author: @wingkwong | https://leetcode.com/problems/contains-duplicate-ii/",tags:["Sliding Window"]},o="0219 - Contains Duplicate II (Easy)",l={unversionedId:"0200-0299/contains-duplicate-ii-easy",id:"0200-0299/contains-duplicate-ii-easy",title:"0219 - Contains Duplicate II (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/contains-duplicate-ii/",source:"@site/solutions/0200-0299/0219-contains-duplicate-ii-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/contains-duplicate-ii-easy",permalink:"/solutions/0200-0299/contains-duplicate-ii-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0219-contains-duplicate-ii-easy.md",tags:[{label:"Sliding Window",permalink:"/solutions/tags/sliding-window"}],version:"current",sidebarPosition:219,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/contains-duplicate-ii/",tags:["Sliding Window"]},sidebar:"tutorialSidebar",previous:{title:"0217 - Contains Duplicate (Easy)",permalink:"/solutions/0200-0299/contains-duplicate-easy"},next:{title:"0225 - Implement Stack using Queues (Easy)",permalink:"/solutions/0200-0299/implement-stack-using-queues-easy"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sliding Window",id:"approach-1-sliding-window",level:2}],u=(m="SolutionAuthor",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const c={toc:p},d="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0219---contains-duplicate-ii-easy"},"0219 - Contains Duplicate II (Easy)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/contains-duplicate-ii/"},"https://leetcode.com/problems/contains-duplicate-ii/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given an integer array ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),", return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if there are two ",(0,r.kt)("strong",{parentName:"p"},"distinct indices")," ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"j")," in the array such that ",(0,r.kt)("inlineCode",{parentName:"p"},"nums[i] == nums[j]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"abs(i - j) <= k"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,1], k = 3\nOutput: true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [1,0,1,1], k = 1\nOutput: true\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,1,2,3], k = 2\nOutput: false\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^9 <= nums[i] <= 10^9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= k <= 10^5"))),(0,r.kt)("h2",{id:"approach-1-sliding-window"},"Approach 1: Sliding Window"),(0,r.kt)("p",null,"Since $k$ is provided, we can use a fixed-length sliding window approach. As we need to check if a variable exists before, we use a hash map to store the occurrence of each number. "),(0,r.kt)("p",null,"We can do the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We push first $min(n, k)$ elements to the hash map. If it exists before, then return true. By specifying $min(n, k)$, we can guarantee that the condition $abs(i - j) <= k$ is always true."),(0,r.kt)("li",{parentName:"ol"},"For $[k .. n)$, if we the element exists in hash map, then return false. Otherwise, we remove $nums","[i - k]","$ from the hash map and include $nums","[i]","$ to the hash map, i.e. sliding the window to the right.")),(0,r.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool containsNearbyDuplicate(vector<int>& nums, int k) {\n        if (k == 0) return false;\n        unordered_map<int, int> m;\n        int n = nums.size();\n        // include elements in the initial fixed-length sliding window\n        for (int i = 0; i < min(n, k); i++) {\n            // if nums[i] exists in the hash map -> then return true\n            if (m[nums[i]]) return true;\n            // push nums[i] to hash map\n            m[nums[i]]++;\n        }\n        // now shifting the window to the right one by one\n        for (int i = k; i < n; i++) {\n            // if nums[i] exists in the hash map -> then return true\n            if (m[nums[i]]) return true;\n            // remove nums[i - k] from the hash map (i.e the leftmost one in the window)\n            m[nums[i - k]]--;\n            // add nums[i] to the hash map (i.e. the rightmost one in the window)\n            m[nums[i]]++;\n        }\n        return false;\n    }\n};\n")),(0,r.kt)("p",null,"Once you get the idea, we can combine both into a single for loop."),(0,r.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool containsNearbyDuplicate(vector<int>& nums, int k) {\n        unordered_map<int, int> m;\n        for (int i = 0; i < nums.size(); i++) {\n            // if nums[i] exists in the hash map -> then return true\n            if (m[nums[i]]) return true;\n            // remove nums[i - k] from the hash map (i.e the leftmost one in the window)\n            if (i >= k) m[nums[i - k]]--;\n            // add nums[i] to the hash map (i.e. the rightmost one in the window)\n            m[nums[i]]++;\n        }\n        return false;\n    }\n};\n")))}h.isMDXComponent=!0}}]);