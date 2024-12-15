"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[46746],{74479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"2400-2499/sort-the-people-easy","title":"2418 - Sort the People (Easy)","description":"Author: @wingkwong, @ganajayant, @lonyehan | https://leetcode.com/problems/sort-the-people/","source":"@site/solutions/2400-2499/2418-sort-the-people-easy.md","sourceDirName":"2400-2499","slug":"/2400-2499/sort-the-people-easy","permalink":"/solutions/2400-2499/sort-the-people-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2400-2499/2418-sort-the-people-easy.md","tags":[],"version":"current","sidebarPosition":2418,"frontMatter":{"description":"Author: @wingkwong, @ganajayant, @lonyehan | https://leetcode.com/problems/sort-the-people/"},"sidebar":"tutorialSidebar","previous":{"title":"2413 - Smallest Even Multiple (Easy)","permalink":"/solutions/2400-2499/smallest-even-multiple-easy"},"next":{"title":"2419 - Longest Subarray With Maximum Bitwise AND (Medium)","permalink":"/solutions/2400-2499/longest-subarray-with-maximum-bitwise-and-medium"}}');var i=t(74848),r=t(28453);const o={description:"Author: @wingkwong, @ganajayant, @lonyehan | https://leetcode.com/problems/sort-the-people/"},l="2418 - Sort the People (Easy)",a={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2},{value:"Approach 2: Heap (Priority Queue)",id:"approach-2-heap-priority-queue",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:t,TabItem:s,Tabs:o}=n;return t||p("SolutionAuthor",!0),s||p("TabItem",!0),o||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2418---sort-the-people-easy",children:"2418 - Sort the People (Easy)"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/sort-the-people/",children:"https://leetcode.com/problems/sort-the-people/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["You are given an array of strings ",(0,i.jsx)(n.code,{children:"names"}),", and an array ",(0,i.jsx)(n.code,{children:"heights"})," that consists of ",(0,i.jsx)(n.strong,{children:"distinct"})," positive integers. Both arrays are of length ",(0,i.jsx)(n.code,{children:"n"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For each index ",(0,i.jsx)(n.code,{children:"i"}),", ",(0,i.jsx)(n.code,{children:"names[i]"})," and ",(0,i.jsx)(n.code,{children:"heights[i]"})," denote the name and height of the ",(0,i.jsx)(n.code,{children:"ith"})," person."]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsx)(n.code,{children:"names"}),(0,i.jsxs)(n.em,{children:["sorted in ",(0,i.jsx)(n.strong,{children:"descending"})," order by the people's heights"]}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: names = ["Mary","John","Emma"], heights = [180,165,170]\nOutput: ["Mary","Emma","John"]\nExplanation: Mary is the tallest, followed by Emma and John.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]\nOutput: ["Bob","Alice","Bob"]\nExplanation: The first Bob is the tallest, followed by Alice and the second Bob.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"n == names.length == heights.length"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= n <= 103"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= names[i].length <= 20"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= heights[i] <= 10^5"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"names[i]"})," consists of lower and upper case English letters."]}),"\n",(0,i.jsxs)(n.li,{children:["All the values of ",(0,i.jsx)(n.code,{children:"heights"})," are distinct."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-sorting",children:"Approach 1: Sorting"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsxs)(s,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wingkwong"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<string> sortPeople(vector<string>& names, vector<int>& heights) {\n        vector<string> ans;\n        // {height, name}\n        vector<pair<int, string>> v;\n        // by putting height at first, we can skip writing a comparator as it'll sort by first element of the pair\n        for (int i = 0; i < names.size(); i++) v.push_back({heights[i], names[i]});\n        // sort in decreasing order\n        sort(v.rbegin(), v.rend());\n        // build the final ans. x.second is the name.\n        for (auto & x : v) ans.push_back(x.second);\n        return ans;\n    }\n};\n"})})]}),(0,i.jsxs)(s,{value:"java",label:"Java",children:[(0,i.jsx)(t,{name:"@ganajayant"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public String[] sortPeople(String[] names, int[] heights) {\n        int[][] people = new int[names.length][2];\n        for (int i = 0; i < names.length; i++) {\n            people[i] = new int[] { heights[i], i };\n        }\n\n        Arrays.sort(people, (a, b) -> b[0] - a[0]);\n\n        String[] result = new String[names.length];\n        for (int i = 0; i < names.length; i++) {\n            result[i] = names[people[i][1]];\n        }\n\n        return result;\n    }\n}\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"approach-2-heap-priority-queue",children:"Approach 2: Heap (Priority Queue)"}),"\n",(0,i.jsx)(o,{children:(0,i.jsxs)(s,{value:"cs",label:"C#",children:[(0,i.jsx)(t,{name:"@lonyehan"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"public class Solution {\n    public string[] SortPeople(string[] names, int[] heights) {\n        PriorityQueue<string, int> pq = new PriorityQueue<string, int>();\n        List<string> list = new List<string>();\n        \n        for(int i = 0; i < names.Length; i++) {\n            pq.Enqueue(names[i], -heights[i]);\n        }\n        \n        while(pq.Count != 0) {\n            list.Add(pq.Dequeue());\n        }\n        \n        return list.ToArray();\n    }\n}\n"})})]})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);