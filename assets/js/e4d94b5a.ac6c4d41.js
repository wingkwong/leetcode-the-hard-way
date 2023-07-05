"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[57977],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),m=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=m(t),k=r,h=u["".concat(s,".").concat(k)]||u[k]||c[k]||o;return t?i.createElement(h,l(l({ref:n},p),{},{components:t})):i.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=k;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var m=2;m<o;m++)l[m]=t[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},64679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>m});var i=t(87462),r=(t(67294),t(3905));const o={description:"Author: @hwaiting_dk | https://leetcode.com/problems/minimum-cost-to-merge-stones/",tags:["Array","Dynamic Programming"]},l="1000 - Minimum Cost to Merge Stones (Hard)",a={unversionedId:"1000-1099/minimum-cost-to-merge-stones-hard",id:"1000-1099/minimum-cost-to-merge-stones-hard",title:"1000 - Minimum Cost to Merge Stones (Hard)",description:"Author: @hwaiting_dk | https://leetcode.com/problems/minimum-cost-to-merge-stones/",source:"@site/solutions/1000-1099/1000-minimum-cost-to-merge-stones-hard.md",sourceDirName:"1000-1099",slug:"/1000-1099/minimum-cost-to-merge-stones-hard",permalink:"/solutions/1000-1099/minimum-cost-to-merge-stones-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1000-minimum-cost-to-merge-stones-hard.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"}],version:"current",sidebarPosition:1e3,frontMatter:{description:"Author: @hwaiting_dk | https://leetcode.com/problems/minimum-cost-to-merge-stones/",tags:["Array","Dynamic Programming"]},sidebar:"tutorialSidebar",previous:{title:"0997 - Find the Town Judge (Easy)",permalink:"/solutions/1000-1099/find-the-town-judge-easy"},next:{title:"1004 - Max Consecutive Ones III (Medium)",permalink:"/solutions/1000-1099/max-consecutive-ones-iii-medium"}},s={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Problem Breakdown",id:"problem-breakdown",level:2},{value:"The first thing we need to check can we merge all these piles into 1 pile?",id:"the-first-thing-we-need-to-check-can-we-merge-all-these-piles-into-1-pile",level:3},{value:"Given in the question : A move consists of merging exactly k consecutive piles into one pile and in the end only single pile is left.",id:"given-in-the-question--a-move-consists-of-merging-exactly-k-consecutive-piles-into-one-pile-and-in-the-end-only-single-pile-is-left",level:3},{value:"Sub Problem will range from:",id:"sub-problem-will-range-from",level:3},{value:"Driver Function Call:",id:"driver-function-call",level:3},{value:"Approach 1: Pure Recursion : Matrix Chain Multiplication (TLE)",id:"approach-1-pure-recursion--matrix-chain-multiplication-tle",level:2},{value:"Approach 2: Extension of Recursion : Memoization : Just to get AC via Recursion.",id:"approach-2-extension-of-recursion--memoization--just-to-get-ac-via-recursion",level:2},{value:"Approach 3: Tabulation | Bottom Up",id:"approach-3-tabulation--bottom-up",level:2},{value:"Concise Version",id:"concise-version",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},u=p("Tabs"),c=p("TabItem"),k=p("SolutionAuthor"),h={toc:m},f="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,i.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1000---minimum-cost-to-merge-stones-hard"},"1000 - Minimum Cost to Merge Stones (Hard)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-cost-to-merge-stones/"},"https://leetcode.com/problems/minimum-cost-to-merge-stones/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"There are n piles of stones arranged in a row. The ith pile has stones","[i]"," stones.\nA move consists of merging exactly k consecutive piles into one pile, and the cost of this move is equal to the total number of stones in these k piles.\nReturn the minimum cost to merge all piles of stones into one pile. If it is impossible, return -1."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: stones = [3,2,4,1], k = 2\nOutput: 20\nExplanation: We start with [3, 2, 4, 1].\nWe merge [3, 2] for a cost of 5, and we are left with [5, 4, 1].\nWe merge [4, 1] for a cost of 5, and we are left with [5, 5].\nWe merge [5, 5] for a cost of 10, and we are left with [10].\nThe total cost was 20, and this is the minimum possible.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: stones = [3,2,4,1], k = 3\nOutput: -1\nExplanation: After any merge operation, there are 2 piles left, and we can't merge anymore.  \nSo the task is impossible.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: stones = [3,5,1,2,6], k = 3\nOutput: 25\nExplanation: We start with [3, 5, 1, 2, 6].\nWe merge [5, 1, 2] for a cost of 8, and we are left with [3, 8, 6].\nWe merge [3, 8, 6] for a cost of 17, and we are left with [17].\nThe total cost was 25, and this is the minimum possible.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n == stones.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 30")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= stones[i] <= 100")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2 <= k <= 30"))),(0,r.kt)("h2",{id:"problem-breakdown"},"Problem Breakdown"),(0,r.kt)("p",null,"It's variation of MCM which is Matrix chain multiplication. It is an optimization problem concerning the most efficient way to multiply a given sequence of matrices. For more info, please check out ",(0,r.kt)("a",{href:"https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/"},"GFG Article"),"."),(0,r.kt)("p",null,"Let's understand problem first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"stones = [3,5,1,2,6], k = 3\n")),(0,r.kt)("p",null,"Here we are given stone array and $k$ piles, we have to merge $k$ consecutive piles into $1$ pile with the minimum cost."),(0,r.kt)("p",null,"For example, for $","[3, 5, 1, 2, 6]","$, we can merge $","[5, 1, 2]","$ into $","[8]","$. Then we have $","[3, 8, 6]","$, we can merge them into $","[17]","$. We can stop here. Our total cost = $8 + 17 = 25$."),(0,r.kt)("h3",{id:"the-first-thing-we-need-to-check-can-we-merge-all-these-piles-into-1-pile"},"The first thing we need to check can we merge all these piles into 1 pile?"),(0,r.kt)("p",null,"We can check this : ",(0,r.kt)("inlineCode",{parentName:"p"},"if ((n-1)%(k-1) == 0)")," then only we can do merging."),(0,r.kt)("p",null,"Let's see how we can arrive at this formula. ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"If there's $n$ piles given and $k$ piles are to be merged. Then, ",(0,r.kt)("br",null),"\nAfter the first merge - the length of the array will be $n - (k - 1)$ ",(0,r.kt)("br",null),"\nAfter the second merge - the length of the array will be $n - (k - 1) - (k - 1)$ ",(0,r.kt)("br",null),"\nAfter the third merge - the length of the array will be $n - (k - 1) - (k - 1) - (k - 1)$ ",(0,r.kt)("br",null),"\nand so on...",(0,r.kt)("br",null)),(0,r.kt)("p",null,"For example, for $index = ","[0, 1, 2, 3, 4]","$ and $arr = ","[3, 5, 1, 2, 6]","$, the length is 5. If we do single merge of $","[5, 1, 2]","$ => $","[8]","$, then we have $index = ","[0, 1, 2]","$ and $arr = ","[3, 8, 6]","$.  The length is $n - (k - 1) = 5 - (k - 1) = 5 - (3 - 1) = 5 - 2 = 3$; ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"We know that after $m$ merges the length must be $1$ if we can merge piles. Therefore, we can say that the cost for single merge is $k - 1$ and for $m$ merges will be $m * (k - 1)$ ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"given-in-the-question--a-move-consists-of-merging-exactly-k-consecutive-piles-into-one-pile-and-in-the-end-only-single-pile-is-left"},"Given in the question : A move consists of merging exactly k consecutive piles into one pile and in the end only single pile is left."),(0,r.kt)("p",null,"We can say that: ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"$$\nN - \\text(totalMerges) = 1\n$$"),(0,r.kt)("p",null,"$$\nN - m * (k - 1) = 1\n$$"),(0,r.kt)("p",null,"$$\nN - 1 = m * (k - 1)\n$$"),(0,r.kt)("p",null,"$$\nm = (N - 1) / (k - 1)\n$$"),(0,r.kt)("p",null,"Now, $m$ must be positive number then only we can merge them."),(0,r.kt)("p",null,"In this example: $","[3, 5, 1, 2, 6]","$. Here we got $N = 5$, $k = 3$."),(0,r.kt)("p",null,"$$\nm = (N - 1) / (k - 1)\n$$"),(0,r.kt)("p",null,"$$\nm = (5 - 1) / (3 - 1) = (4) / (2) = 2\n$$"),(0,r.kt)("p",null,"$2$ is positive integer, so here we can merge $2$ times, which is actually true in our case. Here we need range sum which will be added in the cost. For this purpose we will create prefix sum and use it."),(0,r.kt)("p",null,"For $arr = ","[3, 5, 1, 2, 6]","$, the prefix sum would be $","[0, 3, 8, 9, 11, 17]","$. If we are merging $","[5, 1, 2]","$, then index $i = 1$, $j = 3$. The cost will be $prefix","[j + 1]"," - prefix","[i]"," = prefix","[3 + 1]"," - prefix","[1]"," = 11 - 3 = 8$ which is true. ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Also, before calculating cost, for every range we will check if we can merge this or not ",(0,r.kt)("br",null),"\nif ",(0,r.kt)("inlineCode",{parentName:"p"},"((j - i) % (piles - 1) == 0)")," here $j - i =$ current range and piles is $k$. ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"In the induction step, in the for loop we will increment by $k = k + piles - 1$ because after merging, $k - 1$ piles will be deleted for sure (in this case $2$ piles will be deleted after every merge), so we just start from next valid (3rd in this case) pile from current."),(0,r.kt)("h3",{id:"sub-problem-will-range-from"},"Sub Problem will range from:"),(0,r.kt)("p",null,"If we do $rec(stones, i, k) + rec(stones, k + 1, j)$, as in our for loop we will loop till second last_index so that for $rec(k + 1, j)$ here $k + 1$ remains valid."),(0,r.kt)("h3",{id:"driver-function-call"},"Driver Function Call:"),(0,r.kt)("p",null,"return rec(stones, 0, n - 1, k) : we will start from 0th index and last index n-1 which is the valid range. "),(0,r.kt)("h2",{id:"approach-1-pure-recursion--matrix-chain-multiplication-tle"},"Approach 1: Pure Recursion : Matrix Chain Multiplication (TLE)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time Complexity:")," $O((N * (2 ^ N)) / K)$ here as we increment by $K$ piles in every step and for every element we have $2$ options and there are $2 ^ N$ ways."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Space Complexity:"),"  $O(N)$ for prefix sum + $O(N ^ 2)$ for memo + $O(N)$ auxilary stack space."),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(k,{name:"@hwaiting_dk",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> prefixSum = {0};\n    int rec(vector<int> &stones, int i, int j, int piles) {\n        // Base Case: Invalid Index or For single element answer is always 0\n        if (i >= j) return 0;\n        int mini = INT_MAX;\n        for (int k = i; k < j; k = k + piles - 1) {\n            int tempAns = rec(stones, i, k, piles) + rec(stones, k + 1, j, piles);\n            mini = min(tempAns, mini);\n        }\n        if ((j - i) % (piles - 1) == 0) {\n            mini += prefixSum[j + 1] - prefixSum[i];\n        }\n        return mini;\n    }\n    \n    int mergeStones(vector<int>& stones, int k) {\n        int n = stones.size();\n        // If we can't merge all piles into 1 pile, so we our answer is -1;\n        if ((n - 1) % (k - 1) != 0) return -1;\n        for (int i : stones) {\n            prefixSum.emplace_back(prefixSum.back() + i);\n        }\n        return rec(stones, 0, n-1, k);\n    }\n};\n")))),(0,r.kt)("h2",{id:"approach-2-extension-of-recursion--memoization--just-to-get-ac-via-recursion"},"Approach 2: Extension of Recursion : Memoization : Just to get AC via Recursion."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time Complexity"),": $O((N ^ 3) / K)$ here as we increment by $K$ piles in every step ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Space Complexity"),": $O(N)$ for prefix sum + $O(N ^ 2)$ for memo + $O(N)$ auxilary stack space ",(0,r.kt)("br",null)),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(k,{name:"@hwaiting_dk",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> prefixSum = {0};\n    int memo[31][31];\n    int rec(vector<int> &stones, int i, int j, int piles) {\n        // Base Case: Invalid Index or For single element answer is always 0\n        if (i >= j) return 0;\n        if (memo[i][j] != -1) return memo[i][j];\n        int mini = INT_MAX;\n        for (int k = i; k < j; k = k + piles - 1) {\n            // Sub Problems\n            int tempAns = rec(stones, i, k, piles) + rec(stones, k + 1, j, piles);\n            mini = min(tempAns, mini);\n        }\n        // If we can take current segment into our answer: \n        if ((j - i) % (piles - 1) == 0){\n            mini += prefixSum[j + 1] - prefixSum[i];\n        }\n        return memo[i][j] = mini;\n    }\n    \n    int mergeStones(vector<int>& stones, int k) {\n        int n = stones.size();\n        if ((n - 1) % (k - 1) != 0) return -1;\n        for (int i : stones) prefixSum.emplace_back(prefixSum.back() + i);\n        memset(memo, -1, sizeof(memo));\n        return rec(stones, 0, n - 1, k);\n    }\n};  \n")))),(0,r.kt)("h2",{id:"approach-3-tabulation--bottom-up"},"Approach 3: Tabulation | Bottom Up"),(0,r.kt)("p",null,"Basically Tabulation is reverse of memoization. Here we have to think reverse of recursion."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Filling the base cases."),(0,r.kt)("li",{parentName:"ol"},"Adjust pointers. Example: $rec(i, j)$ -> $dp","[i][j]","$ (valid range)."),(0,r.kt)("li",{parentName:"ol"},"Copy the reocurrence from the recursion.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time Complexity"),": $O((N^3)/K)$ here as we increment by $K$ piles in every step ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Space Complexity"),": $O(N)$ for prefix sum + $O(N ^ 2)$ for dp ",(0,r.kt)("br",null)),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(k,{name:"@hwaiting_dk",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    int mergeStones(vector<int>& stones, int k) {\n        int n = stones.size();\n        if ((n - 1) % (k - 1) != 0) return -1;\n        vector<int> prefixSum = {0};\n        for (int i : stones) prefixSum.emplace_back(prefixSum.back() + i);\n        int dp[n][n];\n        // Filling the first base case : if (i >= j) return 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                dp[i][j] = 0;\n            }\n        }\n        // As you can see our driver function, call is rec(stones, 0, n - 1, k);\n        // here in rec => i starts from 0 : means in tabulation : our ith start from last index which is n - 1\n        // here in rec => j starts from n - 1: means in tabulation : out jth starts from starting index which is 0\n        \n        // Here we get our answer at rec(stones, 0, n - 1, k); means we will get our answer at 0th index in "i" and last index of jth i.e n - 1th index: \n        // we have to fill them : so for 0th index : we have to fill from last to first : that\'s how we will reach at 0th index and for jth index:\n        // we have to start from 0th index then we will reach to the last index in the end\n        \n        // NOTE: Here as u can see in base case if (i >= j) return 0; \n    // means our answer at i >= j  is always 0 : so we will start our jth loop from i + 1 index\n        \n        int piles = k;\n        for (int i = n - 1; i >= 0; i--;) {\n            for(int j = i + 1; j < n; j++;) {\n                int mini = INT_MAX;\n                for (int k = i; k < j; k = k + piles - 1;){\n                    // Sub Problems\n                    mini = min(dp[i][k] + dp[k + 1][j], mini);\n                }\n                // If we can take current segment into our answer: \n                if ((j - i) % (piles - 1) == 0){\n                    mini += prefixSum[j + 1] - prefixSum[i];\n                }\n                dp[i][j] = mini;\n            }\n        }\n        return dp[0][n - 1];\n    }\n};  \n')))),(0,r.kt)("h2",{id:"concise-version"},"Concise Version"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Time Complexity"),": $O((N ^ 3)/K)$ here as we increment by $K$ piles in every step ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Space Complexity"),": $O(N)$ for prefix sum + $O(N ^ 2)$ for dp ",(0,r.kt)("br",null)),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(k,{name:"@hwaiting_dk",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int mergeStones(vector<int>& stones, int k) {\n        int n = stones.size();\n        if ((n - 1) % (k - 1) != 0) return -1;\n        vector<int> prefixSum = {0};\n        for (int i : stones) prefixSum.emplace_back(prefixSum.back() + i);\n        int dp[n][n];\n        // Filling the first base case : if (i >= j) return 0;\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j <= i; j++) {\n                dp[i][j] = 0;\n            }\n        }\n        int piles = k;\n        for (int i = n - 1; i >= 0; i--) {\n            for(int j = i + 1; j < n; j++) {\n                int mini = INT_MAX;\n        \n                for (int k = i; k < j; k = k + piles - 1){\n                    // Sub Problems\n                    int tempAns = dp[i][k] + dp[k + 1][j];\n                    mini = min(tempAns, mini);\n                }\n\n                // If we can take current range into our answer: \n                if ((j - i) % (piles - 1) == 0){\n                    mini += prefixSum[j + 1] - prefixSum[i];\n                }\n                dp[i][j] = mini;\n            }\n        }\n        return dp[0][n - 1];\n    }\n")))))}d.isMDXComponent=!0}}]);