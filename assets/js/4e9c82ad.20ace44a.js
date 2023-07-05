"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[67002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),c=a,v=p["".concat(s,".").concat(c)]||p[c]||d[c]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={description:"Author: @wingkwong | https://leetcode.com/problems/moving-average-from-data-stream/"},i="0346 - Moving Average from Data Stream (Easy)",l={unversionedId:"0300-0399/moving-average-from-data-stream-easy",id:"0300-0399/moving-average-from-data-stream-easy",title:"0346 - Moving Average from Data Stream (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/moving-average-from-data-stream/",source:"@site/solutions/0300-0399/0346-moving-average-from-data-stream-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/moving-average-from-data-stream-easy",permalink:"/solutions/0300-0399/moving-average-from-data-stream-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0346-moving-average-from-data-stream-easy.md",tags:[],version:"current",sidebarPosition:346,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/moving-average-from-data-stream/"},sidebar:"tutorialSidebar",previous:{title:"0345 - Reverse Vowels of a String (Easy)",permalink:"/solutions/0300-0399/reverse-vowels-of-a-string-easy"},next:{title:"0347 - Top K Frequent Elements (Medium)",permalink:"/solutions/0300-0399/top-k-frequent-elements-medium"}},s={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Deque",id:"approach-1-deque",level:2}],u=(p="SolutionAuthor",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const d={toc:m},c="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0346---moving-average-from-data-stream-easy"},"0346 - Moving Average from Data Stream (Easy)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/moving-average-from-data-stream/"},"https://leetcode.com/problems/moving-average-from-data-stream/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window."),(0,a.kt)("p",null,"Implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"MovingAverage")," class:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MovingAverage(int size)")," Initializes the object with the size of the window ",(0,a.kt)("inlineCode",{parentName:"li"},"size"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"double next(int val)")," Returns the moving average of the last ",(0,a.kt)("inlineCode",{parentName:"li"},"size")," values of the stream.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input\n["MovingAverage", "next", "next", "next", "next"]\n[[3], [1], [10], [3], [5]]\nOutput\n[null, 1.0, 5.5, 4.66667, 6.0]\n\nExplanation\nMovingAverage movingAverage = new MovingAverage(3);\nmovingAverage.next(1); // return 1.0 = 1 / 1\nmovingAverage.next(10); // return 5.5 = (1 + 10) / 2\nmovingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3\nmovingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= size <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-10^5 <= val <= 10^5")),(0,a.kt)("li",{parentName:"ul"},"At most ",(0,a.kt)("inlineCode",{parentName:"li"},"10^4")," calls will be made to ",(0,a.kt)("inlineCode",{parentName:"li"},"next"),".")),(0,a.kt)("h2",{id:"approach-1-deque"},"Approach 1: Deque"),(0,a.kt)("p",null,"We define a deque $$d$$ to store the values, $$sum$$ to store the sum. If this is not a sliding window problem, for every move, we add the current value to $$sum$$ and output $$sum / (int) d.size()$$."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"deque<int> d;\nint sum = 0;\nfor (auto x : nums) {\n    sum += x;\n    d.push_back(x);\n    cout << (double) sum / (int) d.size() << endl;\n}\n")),(0,a.kt)("p",null,"In general, for sliding window, we have a pointer to track if it is within the window or not. Here we can check the size of $$d$$. If it already has $$n$$ elements, then we need to remove the one from the front (i.e. the leftmost one) before pushing the next one to the back. We also need to subtract the old value and add the new value to $$sum$$."),(0,a.kt)(u,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class MovingAverage {\npublic:\n    deque<int> d;\n    int n, sum;\n    MovingAverage(int size) {\n        n = size;\n        sum = 0;\n    }\n    \n    double next(int val) {\n        // keep track the current sum to avoid recalculation\n        sum += val;\n        // window size is n. need to remove the first one\n        if (d.size() == n) {\n            // substract the first value\n            sum -= d.front();\n            // remove it from the deque\n            d.pop_front();\n        }\n        // add the new value\n        d.push_back(val);\n        // use double as '/' is integer division\n        return (double) sum / (int) d.size();\n    }\n};\n\n/**\n * Your MovingAverage object will be instantiated and called as such:\n * MovingAverage* obj = new MovingAverage(size);\n * double param_1 = obj->next(val);\n */\n")))}v.isMDXComponent=!0}}]);