"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[112],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(8539),s=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/search-insert-position/"},u="0035 - Search Insert Position (Easy)",p={unversionedId:"0000-0099/search-insert-position-easy",id:"0000-0099/search-insert-position-easy",title:"0035 - Search Insert Position (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/search-insert-position/",source:"@site/solutions/0000-0099/0035-search-insert-position-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/search-insert-position-easy",permalink:"/leetcode-the-hard-way/solutions/0000-0099/search-insert-position-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0035-search-insert-position-easy.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/search-insert-position/"},sidebar:"tutorialSidebar",previous:{title:"0034 - Find First and Last Position of Element in Sorted Array (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/find-first-and-last-position-of-element-in-sorted-array-medium"},next:{title:"0039 - Combination Sum (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/combination-sum-medium"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Lower Bound",id:"approach-1-lower-bound",level:2},{value:"Approach 2: Binary Search",id:"approach-2-binary-search",level:2}],d={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0035---search-insert-position-easy"},"0035 - Search Insert Position (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/search-insert-position/"},"https://leetcode.com/problems/search-insert-position/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order."),(0,a.kt)("p",null,"You must write an algorithm with ",(0,a.kt)("inlineCode",{parentName:"p"},"O(log n)")," runtime complexity."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,3,5,6], target = 5\nOutput: 2\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,3,5,6], target = 2\nOutput: 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,3,5,6], target = 7\nOutput: 4\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-104 <= nums[i] <= 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nums")," contains ",(0,a.kt)("strong",{parentName:"li"},"distinct")," values sorted in ",(0,a.kt)("strong",{parentName:"li"},"ascending")," order."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-104 <= target <= 10^4"))),(0,a.kt)("h2",{id:"approach-1-lower-bound"},"Approach 1: Lower Bound"),(0,a.kt)("p",null,"We can use STL to get the answer. lower_bound returns the first element which has a value not less than target. We need to subtract ",(0,a.kt)("inlineCode",{parentName:"p"},"nums.begin()")," to get the index."),(0,a.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        return lower_bound(nums.begin(), nums.end(), target) - nums.begin();\n    }\n};\n")),(0,a.kt)("h2",{id:"approach-2-binary-search"},"Approach 2: Binary Search"),(0,a.kt)("p",null,"Prerequisite: ",(0,a.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/binary-search"},"Binary Search"),"."),(0,a.kt)(i.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int searchInsert(vector<int>& nums, int target) {\n        // init the possible range\n        // as we insert at the end of the array, \n        // use nums.size() instead of nums.size() - 1\n        int l = 0, r = nums.size();\n        while (l < r) {\n            // take the lower mid for even elements\n            int m = l + (r - l) / 2;\n            // exclude m\n            if (target > nums[m]) l = m + 1;\n            // include m\n            else r = m;\n        }\n        return l;\n    }\n};\n")))}h.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);