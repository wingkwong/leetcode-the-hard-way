"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2744],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return v}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),v=a,d=c["".concat(p,".").concat(v)]||c[v]||m[v]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},12703:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=(t(8539),["components"]),l={description:"Author: @wingkwong | https://leetcode.com/problems/non-overlapping-intervals/"},p="0435 - Non-overlapping Intervals (Medium)",s={unversionedId:"0400-0499/non-overlapping-intervals-medium",id:"0400-0499/non-overlapping-intervals-medium",title:"0435 - Non-overlapping Intervals (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/non-overlapping-intervals/",source:"@site/solutions/0400-0499/0435-non-overlapping-intervals-medium.md",sourceDirName:"0400-0499",slug:"/0400-0499/non-overlapping-intervals-medium",permalink:"/leetcode-the-hard-way/solutions/0400-0499/non-overlapping-intervals-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0435-non-overlapping-intervals-medium.md",tags:[],version:"current",sidebarPosition:435,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/non-overlapping-intervals/"},sidebar:"tutorialSidebar",previous:{title:"0421 - Maximum XOR of Two Numbers in an Array",permalink:"/leetcode-the-hard-way/solutions/0400-0499/maximum-xor-of-two-numbers-in-an-array"},next:{title:"0438 - Find All Anagrams in a String (Medium)",permalink:"/leetcode-the-hard-way/solutions/0400-0499/find-all-anagrams-in-a-string-medium"}},u={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}],c={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0435---non-overlapping-intervals-medium"},"0435 - Non-overlapping Intervals (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/non-overlapping-intervals/"},"https://leetcode.com/problems/non-overlapping-intervals/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an array of intervals ",(0,i.kt)("inlineCode",{parentName:"p"},"intervals")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"intervals[i] = [starti, endi]"),", return ",(0,i.kt)("em",{parentName:"p"},"the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: intervals = [[1,2],[2,3],[3,4],[1,3]]\nOutput: 1\nExplanation: [1,3] can be removed and the rest of the intervals are non-overlapping.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: intervals = [[1,2],[1,2],[1,2]]\nOutput: 2\nExplanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: intervals = [[1,2],[2,3]]\nOutput: 0\nExplanation: You don't need to remove any of the intervals since they're already non-overlapping.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= intervals.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"intervals[i].length == 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-5 * 10^4 <= starti < endi <= 5 * 10^4"))),(0,i.kt)("h2",{id:"approach-1-greedy"},"Approach 1: Greedy"),(0,i.kt)("p",null,"First we can sort ",(0,i.kt)("inlineCode",{parentName:"p"},"interval"),". Given two intervals, where ",(0,i.kt)("inlineCode",{parentName:"p"},"intervals[j]")," is the previous interval and ",(0,i.kt)("inlineCode",{parentName:"p"},"interval[i]")," is the current interval. We can think of three cases."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The two intervals are not overlapping, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"intervals[i][0]")," >= ",(0,i.kt)("inlineCode",{parentName:"li"},"intervals[j][1]"),". We can simply mark ",(0,i.kt)("inlineCode",{parentName:"li"},"j = i"),"."),(0,i.kt)("li",{parentName:"ol"},"The two intervals are overlapping and the end of the previous interval is greater than that of the current interval. Since it's overlapping, we increase answer by 1. We also mark ",(0,i.kt)("inlineCode",{parentName:"li"},"j = i"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"intervals[j]")," should be removed."),(0,i.kt)("li",{parentName:"ol"},"The two intervals are overlapping and the end of the previous interval is less than that of the current interval. ",(0,i.kt)("inlineCode",{parentName:"li"},"intervals[i]")," should be removed.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int eraseOverlapIntervals(vector<vector<int>>& intervals) {\n        int ans = 0;\n        if (intervals.size() == 0) return ans;\n        sort(intervals.begin(), intervals.end());\n        for (int i = 1, j = 0; i < intervals.size(); i++) {\n          if (intervals[i][0] < intervals[j][1]) {\n            ans++;\n            if (intervals[j][1] > intervals[i][1]) j = i;\n          } else {\n            j = i;\n          }\n        }\n        return ans;\n    }\n};\n")))}v.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",n))}}}]);