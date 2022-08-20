"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5880],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,k=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91159:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(8539),s=["components"],l={description:"Author: @wingkwong,@heiheihang | https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"},p="1337 - The K Weakest Rows in a Matrix (Easy)",m={unversionedId:"1300-1399/the-k-weakest-rows-in-a-matrix-easy",id:"1300-1399/the-k-weakest-rows-in-a-matrix-easy",title:"1337 - The K Weakest Rows in a Matrix (Easy)",description:"Author: @wingkwong,@heiheihang | https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",source:"@site/solutions/1300-1399/1337-the-k-weakest-rows-in-a-matrix-easy.md",sourceDirName:"1300-1399",slug:"/1300-1399/the-k-weakest-rows-in-a-matrix-easy",permalink:"/leetcode-the-hard-way/solutions/1300-1399/the-k-weakest-rows-in-a-matrix-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1337-the-k-weakest-rows-in-a-matrix-easy.md",tags:[],version:"current",sidebarPosition:1337,frontMatter:{description:"Author: @wingkwong,@heiheihang | https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"},sidebar:"tutorialSidebar",previous:{title:"1334 - Find the City With the Smallest Number of Neighbors at a Threshold Distance (Medium)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance-medium"},next:{title:"1346 - Check If N and Its Double Exist (Easy)",permalink:"/leetcode-the-hard-way/solutions/1300-1399/check-if-n-and-its-double-exist-easy"}},c={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2},{value:"Approach 2: Heap",id:"approach-2-heap",level:2},{value:"Approach 3: Binary Search",id:"approach-3-binary-search",level:2},{value:"Approach 4: Binary Search + Priority Queue",id:"approach-4-binary-search--priority-queue",level:2}],h={toc:u};function k(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1337---the-k-weakest-rows-in-a-matrix-easy"},"1337 - The K Weakest Rows in a Matrix (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"},"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You are given an ",(0,i.kt)("inlineCode",{parentName:"p"},"m x n")," binary matrix ",(0,i.kt)("inlineCode",{parentName:"p"},"mat")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"'s (representing soldiers) and ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"'s (representing civilians). The soldiers are positioned ",(0,i.kt)("strong",{parentName:"p"},"in front")," of the civilians. That is, all the ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"'s will appear to the ",(0,i.kt)("strong",{parentName:"p"},"left")," of all the ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"'s in each row."),(0,i.kt)("p",null,"A row ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," is ",(0,i.kt)("strong",{parentName:"p"},"weaker")," than a row ",(0,i.kt)("inlineCode",{parentName:"p"},"j")," if one of the following is true:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of soldiers in row ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," is less than the number of soldiers in row ",(0,i.kt)("inlineCode",{parentName:"li"},"j"),"."),(0,i.kt)("li",{parentName:"ul"},"Both rows have the same number of soldiers and ",(0,i.kt)("inlineCode",{parentName:"li"},"i < j"),".")),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the indices of the")," ",(0,i.kt)("inlineCode",{parentName:"p"},"k")," ",(0,i.kt)("em",{parentName:"p"}," ",(0,i.kt)("strong",{parentName:"em"},"weakest")," rows in the matrix ordered from weakest to strongest"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: mat = \n[[1,1,0,0,0],\n [1,1,1,1,0],\n [1,0,0,0,0],\n [1,1,0,0,0],\n [1,1,1,1,1]], \nk = 3\nOutput: [2,0,3]\nExplanation: \nThe number of soldiers in each row is: \n- Row 0: 2 \n- Row 1: 4 \n- Row 2: 1 \n- Row 3: 2 \n- Row 4: 5 \nThe rows ordered from weakest to strongest are [2,0,3,1,4].\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: mat = \n[[1,0,0,0],\n [1,1,1,1],\n [1,0,0,0],\n [1,0,0,0]], \nk = 2\nOutput: [0,2]\nExplanation: \nThe number of soldiers in each row is: \n- Row 0: 1 \n- Row 1: 4 \n- Row 2: 1 \n- Row 3: 1 \nThe rows ordered from weakest to strongest are [0,2,3,1].\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m == mat.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n == mat[i].length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2 <= n, m <= 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= k <= m")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"matrix[i][j]")," is either 0 or 1.")),(0,i.kt)("h2",{id:"approach-1-brute-force"},"Approach 1: Brute Force"),(0,i.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("p",null,"Iterate each row to find out the number of soldiers, store the count with the row index. Sort it and take the first ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"k")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k")))))," counts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {\n        vector<int> ans;\n        vector<pair<int, int>> a;\n        for (int i = 0; i < mat.size(); i++) {\n            a.push_back({\n                // number of soldiers\n                accumulate(mat[i].begin(), mat[i].end(), 0),\n                // row index\n                i\n            });\n        }\n        sort(a.begin(), a.end());\n        // or use partial_sort\n        // partial_sort(a.begin(), a.begin() + k, a.end());\n        for (int i = 0; i < k; i++) {\n            // add the count to answer\n            ans.push_back(a[i].second);\n        }\n        return ans;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-2-heap"},"Approach 2: Heap"),(0,i.kt)(o.Z,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:\n        rows = []\n        \n        for i in range(len(mat)):\n            cnt = 0\n            for j in range(len(mat[i])):\n                if(mat[i][j] == 1):\n                    cnt += 1\n                else:\n                    break\n            heappush(rows, [-cnt, -i])\n            if len(rows) > k:\n                heappop(rows)\n            \n        ans = []\n        \n        while rows:\n            cnt, row = heappop(rows)\n            ans.append(-row)\n            \n        ans.reverse()\n        return ans\n")),(0,i.kt)("h2",{id:"approach-3-binary-search"},"Approach 3: Binary Search"),(0,i.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("p",null,"Instead of searching linearly, we can use binary search to find out the number of soldiers. The rest is same as approach 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int n = nums.size(), l = 0, r = n;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            if (nums[m] == target) l = m + 1;\n            else r = m;\n        }\n        return l;\n    }\n\n    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {\n        vector<int> ans;\n        vector<pair<int, int>> a;\n        for (int i = 0; i < mat.size(); i++) {\n            a.push_back({\n                search(mat[i], 1),\n                // accumulate(mat[i].begin(), mat[i].end(), 0),\n                i\n            });\n        }        \n        sort(a.begin(), a.end());\n        // or use partial_sort\n        // partial_sort(a.begin(), a.begin() + k, a.end());\n        for (int i = 0; i < k; i++) {\n            ans.push_back(a[i].second);\n        }\n        return ans;\n    }\n};\n")),(0,i.kt)("h2",{id:"approach-4-binary-search--priority-queue"},"Approach 4: Binary Search + Priority Queue"),(0,i.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("p",null,"Instead of using a vector to store and sort, we use priority queue to handle the order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int n = nums.size(), l = 0, r = n;\n        while (l < r) {\n            int m = l + (r - l) / 2;\n            if (nums[m] == target) l = m + 1;\n            else r = m;\n        }\n        return l;\n    }\n\n    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {\n        vector<int> ans;\n        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n        for (int i = 0; i < mat.size(); i++) {\n            pq.push({\n                search(mat[i], 1),\n                i\n            });\n        }\n        for (int i = 0; i < k; i++) {\n            ans.push_back(pq.top().second);\n            pq.pop();\n        }\n        return ans;\n    }\n};\n")))}k.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",n))}}}]);