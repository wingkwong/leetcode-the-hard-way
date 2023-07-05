"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[56710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>s,suggestedProblems:()=>d,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Bubble Sort",description:"It is sorting algorithm based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they exist in the wrong order.",hide_table_of_contents:!1,keywords:["leetcode","tutorial","sorting","algorithm","bubble sort"]},a=void 0,s={unversionedId:"basic-topics/sorting/bubble-sort",id:"basic-topics/sorting/bubble-sort",title:"Bubble Sort",description:"It is sorting algorithm based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they exist in the wrong order.",source:"@site/tutorials/basic-topics/sorting/bubble-sort.md",sourceDirName:"basic-topics/sorting",slug:"/basic-topics/sorting/bubble-sort",permalink:"/tutorials/basic-topics/sorting/bubble-sort",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/sorting/bubble-sort.md",tags:[],version:"current",frontMatter:{title:"Bubble Sort",description:"It is sorting algorithm based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they exist in the wrong order.",hide_table_of_contents:!1,keywords:["leetcode","tutorial","sorting","algorithm","bubble sort"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/tutorials/basic-topics/sorting/introduction"},next:{title:"Cyclic Sort",permalink:"/tutorials/basic-topics/sorting/cyclic-sort"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"Complexity Analysis",id:"complexity-analysis",level:2},{value:"Time Complexity",id:"time-complexity",level:3},{value:"Space Complexity",id:"space-complexity",level:3},{value:"Example: 2164. Sort Even and Odd Indices Independently",id:"example-2164-sort-even-and-odd-indices-independently",level:2}],d=[{problemName:"0075 -  Sort Colors ",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/sort-colors/",solutionLink:"../../../solutions/0000-0099/sort-colors-medium"},{problemName:"0148 - Sort List",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/sort-list/",solutionLink:"../../../solutions/0100-0199/sort-list-medium"}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=p("TutorialAuthors"),m=p("Contributors"),h=p("Tabs"),b=p("TabItem"),f=p("SolutionAuthor"),g=p("Table"),y={toc:c,suggestedProblems:d},k="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{names:"@RadhikaChhabra17",mdxType:"TutorialAuthors"}),(0,o.kt)(m,{names:"@wingkwong",mdxType:"Contributors"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Bubble Sort is a sorting algorithm which compares the adjacent elements and swap their positions if they are placed in wrong order. At max, we need to compare adjacent elements for $$(n - 1)$$ iterations where $n$ is the size of array to be sorted. At the end of each iteration, larger (or smaller, as required) value is sorted and placed at correct positions."),(0,o.kt)("p",null,"The language that we are using is C++, please refer to your own language of preference if needed."),(0,o.kt)("h2",{id:"algorithm"},"Algorithm"),(0,o.kt)("p",null,"Make two nested loop, the 1st loop would be for number of pass the algorithm woud run, total $n-1$ passes and second would be for comparison in that pass. In each pass, one element is sorted (largest or smallest, as required) and placed in correct position and rest are compared in further passes."),(0,o.kt)("p",null,"If one element is bigger (or smaller in decreasing order case) than its next element, then both should be swapped. "),(0,o.kt)("p",null,"Consider the example of unsorted list and see how the algorithm works."),(0,o.kt)("p",null,"$$\narr = {5, 1, 4, 2, 8}\n$$ "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/77332750/196658633-a3b735de-820b-45de-a0cc-b7933d67d75c.png",alt:"image"})),(0,o.kt)("p",null,"We can use a variable $check$ to see if there is swap in one pass or not. If there is no swapping in one pass, they we don't have to check for other pass."),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(b,{value:"c++",label:"C++",mdxType:"TabItem"},(0,o.kt)(f,{name:"@RadhikaChhabra17",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"void bubblesort(vector<int> &arr) {\n    int n = arr.size();\n    bool check = true;\n    for (int i = 0; i < n - 1 && check; i++) {\n        check = false;\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                swap(arr[j], arr[j + 1]);\n                check = true;\n            }\n        }\n    }\n}\n")))),(0,o.kt)("h2",{id:"complexity-analysis"},"Complexity Analysis"),(0,o.kt)("h3",{id:"time-complexity"},"Time Complexity"),(0,o.kt)("p",null,"For first iteration will run $$(n-1)$$ times. For the second one, it will run $$(n-2)$$ times and so on."),(0,o.kt)("p",null,"Therefore, the Time Complexity for the worst case $= (n - 1) + (n - 2) + (n - 3) + ... + 1 = O(n^2)$"),(0,o.kt)("p",null,"Use of variable $check$ will reduce the time complexity further as if there is no change in any iterations, next iterations will not occurs, this reduces the time complexity."),(0,o.kt)("h3",{id:"space-complexity"},"Space Complexity"),(0,o.kt)("p",null,"Since there is no extra space, Space Complexity = $$O(1)$$. This shows that it is an inline sorting."),(0,o.kt)("h2",{id:"example-2164-sort-even-and-odd-indices-independently"},"Example: ",(0,o.kt)("a",{parentName:"h2",href:"https://leetcode.com/problems/sort-even-and-odd-indices-independently/"},"2164. Sort Even and Odd Indices Independently")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Sort the values at odd indices of nums in non-increasing order. For example, if nums = ","[4,1,2,3]"," before this step, it becomes ","[4,3,2,1]"," after. The values at odd indices 1 and 3 are sorted in non-increasing order."),(0,o.kt)("li",{parentName:"ol"},"Sort the values at even indices of nums in non-decreasing order. For example, if nums = ","[4,1,2,3]"," before this step, it becomes ","[2,1,4,3]"," after. The values at even indices 0 and 2 are sorted in non-decreasing order.")),(0,o.kt)("p",{parentName:"blockquote"},"Return the array formed after rearranging the values of nums.")),(0,o.kt)("p",null,"In this problem, we can run two bubble sort. One for even indices with non decreasing order and one for odd indices with non increasing order."),(0,o.kt)(h,{mdxType:"Tabs"},(0,o.kt)(b,{value:"c++",label:"C++",mdxType:"TabItem"},(0,o.kt)(f,{name:"@RadhikaChhabra17",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> sortEvenOdd(vector<int>& nums) {\n        // work for even indices\n        for (int i = 0; i < nums.size(); i += 2){\n            for (int j = i + 2; j < nums.size(); j += 2){\n                // sort in non-decreasing order\n                if (nums[i] > nums[j]){\n                    swap(nums[i], nums[j]);\n                }\n            }\n        }\n        // work for odd indicies\n        for (int i = 1; i < nums.size(); i += 2){\n           for (int j = i + 2; j < nums.size(); j += 2){\n               // sort in non-increasing order\n                if (nums[i] < nums[j]){\n                    swap(nums[i], nums[j]);\n                }\n           }\n        }\n        return nums;\n    }\n};\n")))),(0,o.kt)(g,{title:"Suggested Problems",data:d,mdxType:"Table"}))}v.isMDXComponent=!0}}]);