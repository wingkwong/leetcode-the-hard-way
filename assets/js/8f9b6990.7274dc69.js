"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4060],{66852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"0100-0199/find-minimum-in-rotated-sorted-array-ii-hard","title":"0154 - Find Minimum in Rotated Sorted Array II (Hard)","description":"Author: @yashh0903 | https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/","source":"@site/solutions/0100-0199/0154-find-minimum-in-rotated-sorted-array-ii-hard.md","sourceDirName":"0100-0199","slug":"/0100-0199/find-minimum-in-rotated-sorted-array-ii-hard","permalink":"/solutions/0100-0199/find-minimum-in-rotated-sorted-array-ii-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0154-find-minimum-in-rotated-sorted-array-ii-hard.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Binary Search","permalink":"/solutions/tags/binary-search"}],"version":"current","sidebarPosition":154,"frontMatter":{"description":"Author: @yashh0903 | https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/","tags":["Array","Binary Search"]},"sidebar":"tutorialSidebar","previous":{"title":"0152 - Maximum Product Subarray (Medium)","permalink":"/solutions/0100-0199/maximum-product-subarray-medium"},"next":{"title":"0155 - Min Stack (Medium)","permalink":"/solutions/0100-0199/min-stack-medium"}}');var r=t(74848),a=t(28453);const s={description:"Author: @yashh0903 | https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",tags:["Array","Binary Search"]},d="0154 - Find Minimum in Rotated Sorted Array II (Hard)",o={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{SolutionAuthor:t,TabItem:i,Tabs:s}=n;return t||c("SolutionAuthor",!0),i||c("TabItem",!0),s||c("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"0154---find-minimum-in-rotated-sorted-array-ii-hard",children:"0154 - Find Minimum in Rotated Sorted Array II (Hard)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",children:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Suppose an array of length ",(0,r.jsx)(n.code,{children:"n"})," sorted in ascending order is ",(0,r.jsx)(n.strong,{children:"rotated"})," between ",(0,r.jsx)(n.code,{children:"1"})," and ",(0,r.jsx)(n.code,{children:"n"})," times. For example, the array ",(0,r.jsx)(n.code,{children:"nums = [0,1,4,4,5,6,7]"})," might become:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[4,5,6,7,0,1,4]"})," if it was rotated ",(0,r.jsx)(n.code,{children:"4"})," times."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[0,1,4,4,5,6,7]"})," if it was rotated ",(0,r.jsx)(n.code,{children:"7"})," times."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Notice that ",(0,r.jsx)(n.strong,{children:"rotating"})," an array ",(0,r.jsx)(n.code,{children:"[a[0], a[1], a[2], ..., a[n-1]]"})," 1 time results in the array ",(0,r.jsx)(n.code,{children:"[a[n-1], a[0], a[1], a[2], ..., a[n-2]]"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Given the sorted rotated array ",(0,r.jsx)(n.code,{children:"nums"})," that may contain ",(0,r.jsx)(n.strong,{children:"duplicates"}),", return ",(0,r.jsx)(n.em,{children:"the minimum element of this array"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"You must decrease the overall operation steps as much as possible."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: nums = [1,3,5]\nOutput: 1\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: nums = [2,2,2,0,1]\nOutput: 0\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"n == nums.length"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= n <= 5000"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"-5000 <= nums[i] <= 5000"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nums"})," is sorted and rotated between ",(0,r.jsx)(n.code,{children:"1"})," and ",(0,r.jsx)(n.code,{children:"n"})," times."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Follow up:"})," This problem is similar to\xa0",(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/",children:"Find Minimum in Rotated Sorted Array"}),", but\xa0",(0,r.jsx)(n.code,{children:"nums"})," may contain ",(0,r.jsx)(n.strong,{children:"duplicates"}),". Would this affect the runtime complexity? How and why?"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-binary-search",children:"Approach 1: Binary Search"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The code uses a binary search approach to find the minimum element in the given nums array."}),"\n",(0,r.jsx)(n.li,{children:"We initialize the start and end indices to cover the entire array initially."}),"\n",(0,r.jsx)(n.li,{children:"Inside the while loop, we calculate the middle index using (start + end) / 2."}),"\n",(0,r.jsx)(n.li,{children:"We compare the element at the middle index (nums[mid]) with the element at the end index (nums[end])."}),"\n",(0,r.jsx)(n.li,{children:"If nums[mid] < nums[end], it means the minimum element lies in the left half of the array, so we update the end index to mid."}),"\n",(0,r.jsx)(n.li,{children:"If nums[mid] == nums[end], it means there are duplicate elements in the array. In this case, we can safely reduce the search range by moving the end index one step back."}),"\n",(0,r.jsx)(n.li,{children:"If nums[mid] > nums[end], it means the minimum element lies in the right half of the array, so we update the start index to mid + 1."}),"\n",(0,r.jsx)(n.li,{children:"The loop continues until the start index is equal to the end index, at which point it will point to the minimum element."}),"\n",(0,r.jsx)(n.li,{children:"Finally, we return nums[start] as the minimum element."}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Time Complexity: O(log N), where N is the length of the input array nums. This is because the binary search approach reduces the search range by half in each iteration, resulting in a logarithmic time complexity."}),"\n",(0,r.jsx)(n.li,{children:"Space Complexity: O(1). The code uses a constant amount of extra space, regardless of the input size. We only have a few variables to store indices and intermediate calculations, which do not depend on the input size. Hence, the space complexity is constant."}),"\n"]}),"\n",(0,r.jsx)(s,{children:(0,r.jsxs)(i,{value:"cpp",label:"C++",children:[(0,r.jsx)(t,{name:"@yashh0903"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"\nclass Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        // Starting index of the search range\n        int start = 0;\n        // Ending index of the search range\n        int end = nums.size() - 1;\n        while (start < end) {\n            // Calculate the middle index\n            int mid = start + (end - start) / 2;\n            if (nums[mid] < nums[end]) {\n                // If the element at the middle index is smaller than the element at the end index,\n                // it means the minimum element lies in the left half, so update the end index\n                end = mid;\n            } else if (nums[mid] == nums[end]) {\n                // If the element at the middle index is equal to the element at the end index,\n                // it means there are duplicate elements in the array.\n                // In this case, we can safely reduce the search range by moving the end index one step back.\n                end--;\n            } else {\n                // If the element at the middle index is greater than the element at the end index,\n                // it means the minimum element lies in the right half, so update the start index.\n                start = mid + 1;\n            }\n        }\n        // When the loop ends, the start index will point to the minimum element\n        return nums[start];\n    }\n};\n\n"})})]})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(96540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);