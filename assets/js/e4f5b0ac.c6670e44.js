"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9525],{16476:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"0200-0299/contains-duplicate-easy","title":"0217 - Contains Duplicate (Easy)","description":"Author: @DoubleSpicy, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/contains-duplicate/","source":"@site/solutions/0200-0299/0217-contains-duplicate-easy.md","sourceDirName":"0200-0299","slug":"/0200-0299/contains-duplicate-easy","permalink":"/solutions/0200-0299/contains-duplicate-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0217-contains-duplicate-easy.md","tags":[],"version":"current","sidebarPosition":217,"frontMatter":{"description":"Author: @DoubleSpicy, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/contains-duplicate/"},"sidebar":"tutorialSidebar","previous":{"title":"0215 - Kth Largest Element in an Array (Medium)","permalink":"/solutions/0200-0299/kth-largest-element-in-an-array-medium"},"next":{"title":"0219 - Contains Duplicate II (Easy)","permalink":"/solutions/0200-0299/contains-duplicate-ii-easy"}}');var t=s(74848),i=s(28453);const r={description:"Author: @DoubleSpicy, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/contains-duplicate/"},l="0217 - Contains Duplicate (Easy)",c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Count number of appearance using std::unordered_set",id:"approach-1-count-number-of-appearance-using-stdunordered_set",level:2},{value:"Approach 2: Sort, then see if next element is the same",id:"approach-2-sort-then-see-if-next-element-is-the-same",level:2},{value:"Approach 3: Hash Map",id:"approach-3-hash-map",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:s,TabItem:a,Tabs:r}=n;return s||m("SolutionAuthor",!0),a||m("TabItem",!0),r||m("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"0217---contains-duplicate-easy",children:"0217 - Contains Duplicate (Easy)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/contains-duplicate/",children:"https://leetcode.com/problems/contains-duplicate/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given an integer array ",(0,t.jsx)(n.code,{children:"nums"}),", return ",(0,t.jsx)(n.code,{children:"true"})," if any value appears ",(0,t.jsx)(n.strong,{children:"at least twice"})," in the array, and return ",(0,t.jsx)(n.code,{children:"false"})," if every element is distinct."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [1,2,3,1]\nOutput: true\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [1,2,3,4]\nOutput: false\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [1,1,1,3,3,4,3,2,4,2]\nOutput: true\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums.length <= 10^5"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-10^9 <= nums[i] <= 10^9"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-count-number-of-appearance-using-stdunordered_set",children:"Approach 1: Count number of appearance using std::unordered_set"}),"\n",(0,t.jsx)(n.p,{children:"Perhaps the most straight forward way to find out duplicated elements since nothing could be added into a set when the same value is inside the set already. Then we could compare the number of distinct elements vs. number of elements in nums to judge if there is duplicates."}),"\n",(0,t.jsxs)(n.p,{children:["Some further optimizations could be done. First, we could stop early once we have find a duplicate. Also note that ",(0,t.jsx)(n.code,{children:"std::unordered_set::insert"})," returns a pair object which is an iterator pointing to the newly added element or the element with the same key, followed by a boolean variable telling you that a element is newly inserted or not. There is no need to use ",(0,t.jsx)(n.code,{children:"std::unordered_set::find"})," before insertion."]}),"\n",(0,t.jsxs)(n.p,{children:["Both time and space complexity is ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"N"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(a,{value:"c++",label:"C++",children:[(0,t.jsx)(s,{name:"@DoubleSpicy"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // store distinct elements in nums,\n        // and temporary insertion result.\n        unordered_set<int> appears;\n        pair<unordered_set<int>::iterator, bool> result;\n\n        for (auto const & num: nums){\n            result = appears.insert(num);\n            if (result.second == false){ \n                // stop early once we find a duplicate.\n                return true;\n            }\n        }\n        return false;\n    }\n};\n"})})]}),(0,t.jsxs)(a,{value:"java",label:"Java",children:[(0,t.jsx)(s,{name:"@vigneshshiv"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // HashSet for efficient lookup / add method itself provides true or false based on the key.\n        Set<Integer> table = new HashSet<>();\n        for (int num : nums) {\n            // Returns true - if key is added to the Set \n            // otherwise false if the key is already present.\n            if (!table.add(num)) return true;\n        }\n        return false;\n    }\n}\n"})})]}),(0,t.jsxs)(a,{value:"javascript",label:"JavaScript",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar containsDuplicate = function(nums) {\n    let hash_set = new Set();\n    for (n of nums) {\n        if (hash_set.has(n)) return true;\n        hash_set.add(n);\n    }\n    return false;\n};\n"})})]}),(0,t.jsxs)(a,{value:"python",label:"Python",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        hash_set = set()\n        for n in nums:\n            if n in hash_set:\n                return True\n            hash_set.add(n)\n        return False \n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"approach-2-sort-then-see-if-next-element-is-the-same",children:"Approach 2: Sort, then see if next element is the same"}),"\n",(0,t.jsxs)(n.p,{children:["Another approach is to sort ",(0,t.jsx)(n.code,{children:"nums"})," and then see for each element, whether next element has the same value. For example sorting ",(0,t.jsx)(n.code,{children:"1, 2, 5, 5, 4"})," gives ",(0,t.jsx)(n.code,{children:"1, 2, 4, 5, 5"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["This approach is more memory efficient (",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"l"}),(0,t.jsx)(n.mi,{children:"o"}),(0,t.jsx)(n.mi,{children:"g"}),(0,t.jsx)(n.mi,{children:"N"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(logN)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]}),") then approach 1 since it doesn't need to make copies of input values stored in a set but comes at a price of ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"N"}),(0,t.jsx)(n.mi,{children:"l"}),(0,t.jsx)(n.mi,{children:"o"}),(0,t.jsx)(n.mi,{children:"g"}),(0,t.jsx)(n.mi,{children:"N"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(NlogN)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"Nl"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time complexity."]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(a,{value:"c++",label:"C++",children:[(0,t.jsx)(s,{name:"@DoubleSpicy"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        // sort nums first.\n        // make a variable to store the last value read.\n        sort(nums.begin(), nums.end());\n        int last = nums[0];\n        // for each element, see if the value is equal to last value.\n        for (int i = 1; i < nums.size(); i++){\n            if (last == nums[i])\n                return true;\n            else\n                last = nums[i];\n        }\n        return false;\n    }\n};\n"})})]}),(0,t.jsxs)(a,{value:"javascript",label:"JavaScript",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar containsDuplicate = function(nums) {\n    nums.sort();\n    let last_num = nums[0];\n    for (i = 1; i < nums.length; i++) {\n        if (last_num == nums[i]) return true;\n        else last_num = nums[i];\n    }\n    return false;\n};\n"})})]}),(0,t.jsxs)(a,{value:"python",label:"Python",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def containsDuplicate(self, nums: List[int]) -> bool:\n        nums.sort()\n        last_num = nums[0]\n        for i in range(1, len(nums)):\n            if last_num == nums[i]:\n                return True\n            else:\n                last_num = nums[i]\n        return False \n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"approach-3-hash-map",children:"Approach 3: Hash Map"}),"\n",(0,t.jsxs)(n.p,{children:["In general, we want to make use of ",(0,t.jsx)(n.code,{children:"defaultdict"})," in python."]}),"\n",(0,t.jsxs)(n.p,{children:["We can declare ",(0,t.jsx)(n.code,{children:"dictionary = defaultdict(int)"})," to keep track of what elements we have seen so far."]}),"\n",(0,t.jsxs)(n.p,{children:["You might be thinking: Why can't we simply loop the array for each element to check if there is duplicate? It is less time efficient if we do not use a ",(0,t.jsx)(n.code,{children:"dictionary"}),".\n",(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/24492138/170910845-58aaea00-3a90-4c15-9ca2-fdf9e473baa5.jpg",alt:"1"}),"\n",(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/24492138/170910857-5bcbaf02-22f7-4d31-8b93-94784fa2be73.jpg",alt:"2"}),"\n",(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/24492138/170910863-48ac46bf-dae8-423e-809a-22ec32466b06.jpg",alt:"3"}),"\n",(0,t.jsx)(n.img,{src:"https://user-images.githubusercontent.com/24492138/170910866-22f6ed1d-b58c-4e6a-8e32-11ba7e0b6b29.jpg",alt:"4"})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(a,{value:"py",label:"Python",children:[(0,t.jsx)(s,{name:"@DoubleSpicy"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"hashNum = defaultdict(int)\nfor i in nums:\n  if i not in hashNum:\n    hashNum[i] = 1\n  else:\n    return True\nreturn False\n"})})]}),(0,t.jsxs)(a,{value:"javascript",label:"JavaScript",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar containsDuplicate = function(nums) {\n    let hash_map = new Object();\n    for (n of nums) {\n        if (hash_map.hasOwnProperty(n)) return true;\n        hash_map[n] = 1;\n    }\n    return false;\n};\n"})})]}),(0,t.jsxs)(a,{value:"cpp",label:"C++",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool containsDuplicate(vector<int>& nums) {\n        unordered_map<int, int> hashMap;\n        for (auto n : nums) {\n            if (hashMap.count(n)) {\n                return true;\n            }\n            hashMap[n] = 1;\n        }\n        return false;\n    }\n};\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var a=s(96540);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);