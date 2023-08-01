"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[45849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=s.createContext({}),l=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?s.createElement(b,i(i({ref:t},p),{},{components:n})):s.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(87462),a=(n(67294),n(3905));const r={description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/subsets/",tags:["Array","Backtracking","Bit Manipulation"]},i="0078 - Subsets (Medium)",o={unversionedId:"0000-0099/subsets-medium",id:"0000-0099/subsets-medium",title:"0078 - Subsets (Medium)",description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/subsets/",source:"@site/solutions/0000-0099/0078-subsets-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/subsets-medium",permalink:"/solutions/0000-0099/subsets-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0078-subsets-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Backtracking",permalink:"/solutions/tags/backtracking"},{label:"Bit Manipulation",permalink:"/solutions/tags/bit-manipulation"}],version:"current",sidebarPosition:78,frontMatter:{description:"Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/subsets/",tags:["Array","Backtracking","Bit Manipulation"]},sidebar:"tutorialSidebar",previous:{title:"0077 - Combinations (Medium)",permalink:"/solutions/0000-0099/combinations-medium"},next:{title:"0079 - Word Search (Medium)",permalink:"/solutions/0000-0099/word-search-medium"}},u={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit  Manipulation",id:"approach-1-bit--manipulation",level:2},{value:"Approach 2: Backtracking",id:"approach-2-backtracking",level:2},{value:"Approach 3: Iterative",id:"approach-3-iterative",level:2},{value:"Approach 4: Recursion",id:"approach-4-recursion",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=p("Tabs"),c=p("TabItem"),d=p("SolutionAuthor"),b={toc:l},k="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,s.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0078---subsets-medium"},"0078 - Subsets (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/subsets/"},"https://leetcode.com/problems/subsets/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," of ",(0,a.kt)("strong",{parentName:"p"},"unique")," elements, return ",(0,a.kt)("em",{parentName:"p"},"all possible subsets (the power set)"),"."),(0,a.kt)("p",null,"The solution set ",(0,a.kt)("strong",{parentName:"p"},"must not")," contain duplicate subsets. Return the solution in ",(0,a.kt)("strong",{parentName:"p"},"any order"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3]\nOutput: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [0]\nOutput: [[],[0]] \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-10 <= nums[i] <= 10")),(0,a.kt)("li",{parentName:"ul"},"All the numbers of ",(0,a.kt)("inlineCode",{parentName:"li"},"nums")," are ",(0,a.kt)("strong",{parentName:"li"},"unique"),".")),(0,a.kt)("h2",{id:"approach-1-bit--manipulation"},"Approach 1: Bit  Manipulation"),(0,a.kt)("p",null,"We can try all the possible combinations of the numbers. For each number there are only two options - you either take the number or not. If the bit is set as 1, then it means this number needs to be taken. If the bit is set as 0, we don't take this number."),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> subsets(vector<int>& nums) {\n        int n = nums.size();\n        // number of subsets for n elements would be 2 ^ n\n        // because for each element, you can choose to take it or not\n        // if take = 1, don't take = 0, then we can use bit manipulation \n        int p = 1 << n; // 1 * 2 ^ n\n        vector<vector<int>> ans;\n        for(int i = 0; i < p; i++){\n            vector<int> t; \n            for(int j = 0; j < n; j++){\n               if((1 << j) & i) t.emplace_back(nums[j]); \n            }\n            ans.emplace_back(t);\n        }\n        return ans;\n    }\n};\n")))),(0,a.kt)("h2",{id:"approach-2-backtracking"},"Approach 2: Backtracking"),(0,a.kt)("p",null,"Standard ",(0,a.kt)("a",{parentName:"p",href:"../../tutorials/basic-topics/backtracking"},"Backtracking")," problem."),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void backtrack(vector<vector<int>>& ans, vector<int>& tmp, vector<int>& nums, int start) {\n        ans.push_back(tmp);    \n        for(int i = start; i < nums.size(); i++) {\n            tmp.push_back(nums[i]);\n            backtrack(ans, tmp, nums, i + 1);\n            tmp.pop_back();\n        }\n    }\n    \n    vector<vector<int>> subsets(vector<int>& nums) {\n        vector<vector<int>> ans;\n        vector<int> tmp;\n        sort(nums.begin(), nums.end());\n        backtrack(ans, tmp, nums,  0);\n        return ans;\n    }\n};\n"))),(0,a.kt)(c,{value:"java",label:"java",mdxType:"TabItem"},(0,a.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// n - # of subsets\n// Time complexity: O(n * 2^n)\n// Space complexity: O(n * 2^n), where n is space taken by each subset, 2^n is the total subset\nclass Solution {\n    \n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> subsets = new ArrayList<>();\n        subsetsBacktrack(subsets, new ArrayList<>(), nums, 0);\n        return subsets;\n    }\n    \n    // Input: nums - [1, 2], idx 0\n    private void subsetsBacktrack(List<List<Integer>> subsets, List<Integer> sets, int[] nums, int idx) {\n        // index 0, [] added to result { [] }\n        // index 1, { [], [1] }\n        // index 2, { [], [1], [1, 2] } - index 2 is out of range, so it won't enter into loop\n        subsets.add(new ArrayList<>(sets));\n        for (int i = idx; i < nums.length; i++) {\n            // index 0, sets add [1]\n            // index 1, sets add, [1, 2]\n            /* \n             * index 1, (actually index 0 call stack), so it's add [2] in sets\n             * So, it calls subsets again and it to result set\n             * Finally, result set is like - { [], [1], [1, 2], [2] }\n             */\n            sets.add(nums[i]);\n            // index 0 - calling subsets - { [] }, sets - [1], index - 1\n            // index 1 - calling subsets - { [], [1] }, sets - [1, 2], index 2\n            subsetsBacktrack(subsets, sets, nums, i + 1);\n            // index 1, sets removed it's last element 2, so sets [1], for loops end with 1\n            // index 0, sets removed it's last element 1, so sets [], it can continue with index 1\n            sets.remove(sets.size() - 1);\n        }\n    }\n}\n"))),(0,a.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(d,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    # Iterative Back Tracking approach using a set to catch any dupes.\n    # Initialize with empty tuple, and during each iteration of our \n    # nums array, choose to both add the current number to the tuple,\n    # and not add the number to the tuple.\n    # Time: O(n*2^n) to generate all subsets and copy them into our\n    # power set.\n    # Space: O(n*2^n) for all of our subsets.\n    def subsets(self, nums: List[int]) -> List[List[int]]:\n        # initialize our set to prevent duplicates.\n        power_set = set()\n        # initialize our stack for backtracking\n        # we start with an empty tuple for hashing and idx of where \n        # we are at in our nums array.\n        stack = [((),0)]\n        while stack:\n            # pop off the current subset and index inside nums.\n            subset, idx = stack.pop()\n            # add it to our power set, since its a set it will ignore dupes.\n            power_set.add(subset)\n            # only if our idx is in bounds.\n            if idx < len(nums):\n                # add the current subset when we don't take the\n                # number to the stack for backtracking.\n                stack.append((subset, idx+1))\n                # add the subset when we do add the number to the stack\n                # for backtracking.\n                stack.append((subset + (nums[idx],), idx+ 1))\n        # Convert powerset back to a list and return.\n        return list(power_set)\n")))),(0,a.kt)("h2",{id:"approach-3-iterative"},"Approach 3: Iterative"),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(c,{value:"java",label:"java",mdxType:"TabItem"},(0,a.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// n - # of subsets\n// Time complexity: O(n * 2^n)\n// Space complexity: O(n * 2^n), where n is space taken by each subset, 2^n is the total subset\nclass Solution {\n    \n    // Input: nums - [1, 2]\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> subsets = new ArrayList<>();\n        List<Integer> sets = new ArrayList<>();\n        // Initial - { [] }\n        subsets.add(sets);\n        for (int num : nums) {\n            // num - 1 & n is 1 ( subsets - { [] } )\n            // num - 2 & n is 2 ( subsets - { [], [1] } )\n            int n = subsets.size();\n            for (int i = 0; i < n; i++) {\n                // num - 1 & i = 0, []\n                // num - 2 & i = 0, []\n                // num - 2 & i = 1, [1]\n                List<Integer> item = new ArrayList<>(subsets.get(i));\n                item.add(num);\n                // num - 1 & i = 0, { [], [1] }\n                // num - 2 & i = 0, { [], [1], [2] }\n                // num - 2 & i = 1, { [], [1], [2], [1, 2] } -- Final Result\n                subsets.add(item);\n            }\n        }\n        return subsets;\n    }\n}\n")))),(0,a.kt)("h2",{id:"approach-4-recursion"},"Approach 4: Recursion"),(0,a.kt)("p",null,"Not required to pass result list OR temp list as a argument, just build the result sets from the previous returned values."),(0,a.kt)("p",null,"Implemented using Java 8 functional-programming style. "),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(c,{value:"java",label:"java",mdxType:"TabItem"},(0,a.kt)(d,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    \n    // Just a supplier function, provides the result\n    Supplier<List<List<Integer>>> empty2DList = () -> {\n        List<List<Integer>> sets = new ArrayList<>();\n        sets.add(new ArrayList<>());\n        return sets;\n    };\n\n    // Takes, subsets (2D List) and item as an input and provides output as 2D List\n    BiFunction<List<List<Integer>>, Integer, List<List<Integer>>> combiner = (subsets, item) -> {\n        List<List<Integer>> result = new ArrayList<>();\n        // Java Stream API to traverse list elements and keep generating new list and add it to the result\n        result.addAll(subsets.stream().map(ArrayList::new).collect(Collectors.toList()));\n        // Add item to each result set\n        result.forEach(set -> set.add(0, item));\n        return result;\n    };\n\n    public List<List<Integer>> subsets(int[] nums) {\n        return getSubsets(nums, 0);\n    }\n\n    public List<List<Integer>> getSubsets(int[] nums, int index) {\n        if (nums.length == index) {\n            return empty2DList.get();\n        }\n        List<List<Integer>> result = getSubsets(nums, index + 1);\n        result.addAll(combiner.apply(result, nums[index]));\n        return result;\n    }\n}\n")))))}h.isMDXComponent=!0}}]);