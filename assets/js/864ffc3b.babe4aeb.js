"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[81921],{3170:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"0700-0799/design-hashmap-medium","title":"0706 - Design HashMap (Medium)","description":"Author: @vigneshshiv | https://leetcode.com/problems/design-hashmap/","source":"@site/solutions/0700-0799/0706-design-hashmap-medium.md","sourceDirName":"0700-0799","slug":"/0700-0799/design-hashmap-medium","permalink":"/solutions/0700-0799/design-hashmap-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0706-design-hashmap-medium.md","tags":[],"version":"current","sidebarPosition":706,"frontMatter":{"description":"Author: @vigneshshiv | https://leetcode.com/problems/design-hashmap/"},"sidebar":"tutorialSidebar","previous":{"title":"0704 - Binary Search (Easy)","permalink":"/solutions/0700-0799/binary-search-easy"},"next":{"title":"0713 - Subarray Product Less Than K (Medium)","permalink":"/solutions/0700-0799/subarray-product-less-than-k-medium"}}');var t=s(74848),i=s(28453);const l={description:"Author: @vigneshshiv | https://leetcode.com/problems/design-hashmap/"},r="0706 - Design HashMap (Medium)",h={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: With Array and LinkedList",id:"approach-1-with-array-and-linkedlist",level:2}];function d(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:s,TabItem:a,Tabs:l}=n;return s||o("SolutionAuthor",!0),a||o("TabItem",!0),l||o("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"0706---design-hashmap-medium",children:"0706 - Design HashMap (Medium)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/design-hashmap/",children:"https://leetcode.com/problems/design-hashmap/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsx)(n.p,{children:"Design a HashMap without using any built-in hash table libraries."}),"\n",(0,t.jsxs)(n.p,{children:["Implement the ",(0,t.jsx)(n.code,{children:"MyHashMap"})," class:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MyHashMap()"})," initializes the object with an empty map."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"void put(int key, int value)"})," inserts a ",(0,t.jsx)(n.code,{children:"(key, value)"})," pair into the HashMap. If the ",(0,t.jsx)(n.code,{children:"key"})," already exists in the map, update the corresponding ",(0,t.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"int get(int key)"})," returns the ",(0,t.jsx)(n.code,{children:"value"})," to which the specified ",(0,t.jsx)(n.code,{children:"key"})," is mapped, or ",(0,t.jsx)(n.code,{children:"-1"})," if this map contains no mapping for the ",(0,t.jsx)(n.code,{children:"key"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"void remove(key)"})," removes the ",(0,t.jsx)(n.code,{children:"key"})," and its corresponding ",(0,t.jsx)(n.code,{children:"value"})," if the map contains the mapping for the ",(0,t.jsx)(n.code,{children:"key"}),"."]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input\n["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]\n[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]\nOutput\n[null, null, null, 1, -1, null, 1, null, -1]\n\nExplanation\nMyHashMap myHashMap = new MyHashMap();\nmyHashMap.put(1, 1); // The map is now [[1,1]]\nmyHashMap.put(2, 2); // The map is now [[1,1], [2,2]]\nmyHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]\nmyHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]\nmyHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)\nmyHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]\nmyHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]\nmyHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0 <= key, value <= 10^6"})}),"\n",(0,t.jsxs)(n.li,{children:["At most ",(0,t.jsx)(n.code,{children:"10^4"})," calls will be made to ",(0,t.jsx)(n.code,{children:"put"}),", ",(0,t.jsx)(n.code,{children:"get"}),", and ",(0,t.jsx)(n.code,{children:"remove"}),"."]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-with-array-and-linkedlist",children:"Approach 1: With Array and LinkedList"}),"\n",(0,t.jsx)(n.admonition,{title:"Prerequisite",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../tutorials/basic-topics/hash-map",children:"HashMap"})}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"As a problem stated, Design HashMap, but what is HashMap or HashTable ?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"A hash tables is a data structure that maps keys to values"})," for highly efficient lookup (constant ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time)."]}),"\n",(0,t.jsx)(n.p,{children:"In this simple implementation, we use an array of linked lists and a hash code function to store the values."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"To Insert a key"}),","]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["First, compute the key\u2019s hash code, which will usually be an ",(0,t.jsx)(n.code,{children:"int"})," or ",(0,t.jsx)(n.code,{children:"long"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Then, map the hash code to an index in the array. Eg: ",(0,t.jsx)(n.code,{children:"hash(key) % array_length"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Store the key and value in this index"}),", we must use linked list because of collisions."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"How can we design the HashMap which is similar to used in programming languages?"}),"\n",(0,t.jsx)(n.p,{children:"Few points to consider while designing the HashMap,"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"How to handle the collisions? Collision is if the same key is mapped to more than value."}),"\n",(0,t.jsx)(n.li,{children:"HashMap should be efficient and should automatically grow and shrink in size."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We will look at first, How to handle collisions. There are multiple ways of handling HashTable (HashMap) collision, here I have used Chaining with Linked Lists."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Chaining with Linked Lists"})}),"\n",(0,t.jsx)(n.p,{children:"The hash table\u2019s array maps to a linked list of items. We just add the items to this linked list. As long as the number of collisions is fairly small, this will be quite efficient."}),"\n",(0,t.jsxs)(n.p,{children:["In the worst case, lookup is ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", where the ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"n"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of elements in the Linked List."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Automatically increase and decrease in size"})}),"\n",(0,t.jsxs)(n.p,{children:["Since internally, all ",(0,t.jsx)(n.code,{children:"HashMap"})," implementation uses ",(0,t.jsx)(n.em,{children:"array to store the values"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"As we know array's can't be increase or decrease in size automatically, because once we initialize the array with a fixed size, the array is default to the size, until we re-assign the values with new array or re-initialize the array with the new size when program needs."}),"\n",(0,t.jsxs)(n.p,{children:["But HashMap stores and operates thousands and millions of elements seamlessly with constant ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time. As technically it's ",(0,t.jsx)(n.code,{children:"amortized"})," constant ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time."]}),"\n",(0,t.jsx)(n.p,{children:"What is amortized time?"}),"\n",(0,t.jsxs)(n.p,{children:["When the array in it has reached its capacity and need to re-create itself with the doubled size. The array has hit the capacity and we have no slots available. Then we need to create a brand new array with the doubled size. And then copy the items in the old one to the new one, which takes ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," where ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"n"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," is the capacity of the old array and the worst case."]}),"\n",(0,t.jsx)(n.p,{children:"The implementation of HashMap increase / decrease in size happens in the below cases."}),"\n",(0,t.jsxs)(n.p,{children:["Initialize ListNode[] array with ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"16"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"16"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"16"})]})})]}),", it's a default configuration used in languages. We can take other numbers as well, but it's a standard practise to initialize array capacity with ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"16"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"16"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"16"})]})})]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The main reason for that, if the capacity is too low (less than ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"16"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"16"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"16"})]})})]}),"), we have to increase the size (grow our hashmap) immediately after few elements added to HashMap, this is not the best implementation."]}),"\n",(0,t.jsxs)(n.p,{children:["Here another important considerations is when to grow the table or double it's capacity? Since we cannot do that for every insert new element, so we it's better to keep some ranges like if the table reaches ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"50"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"50"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"50"})]})})]}),"% of capacity, or ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"75"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"75"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"75"})]})})]}),"% capacity or ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"90"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"90"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"90"})]})})]}),"%. As per language implementation is ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"75"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"75"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"75"})]})})]}),"%, so we follow the same here."]}),"\n",(0,t.jsxs)(n.p,{children:["The same goes for reduce or decrease HashMap when we remove elements. When the element size is reach ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"N"}),(0,t.jsx)(n.mi,{mathvariant:"normal",children:"/"}),(0,t.jsx)(n.mn,{children:"4"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"N/4"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(n.span,{className:"mord",children:"/4"})]})})]})," capacity i.e, ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"25"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"25"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"25"})]})})]}),"%, we will reduce the capacity to half of the size."]}),"\n",(0,t.jsxs)(n.p,{children:["So HashMap Initial Capacity is set to ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"16"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"16"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"16"})]})})]})," and ",(0,t.jsx)(n.code,{children:"Load Factor"})," is set to ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"75"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"75"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"75"})]})})]}),"%, As soon as the size reaches ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"75"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"75"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"75"})]})})]}),"%, Hashmap does table doubling and shrink automatically to ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"50"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"50"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"50"})]})})]}),"% when it reaches elements of size ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mn,{children:"25"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"25"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"25"})]})})]}),"%."]}),"\n",(0,t.jsxs)(n.p,{children:["Let's consider, ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"m"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"m"})]})})]})," is the actual size of the elements in the ListNode array, and ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"n"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," is the threshold range for the bucket capacity, when ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"m"}),(0,t.jsx)(n.mo,{children:">"}),(0,t.jsx)(n.mi,{children:"n"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"m > n"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(n.span,{className:"mrel",children:">"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})]})]}),", HashMap allocating the memory for ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mn,{children:"2"}),(0,t.jsx)(n.mo,{children:"\u2217"}),(0,t.jsx)(n.mi,{children:"N"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"2*N"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"2"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})]})]})," elements and ",(0,t.jsx)(n.strong,{children:"rehasing the entire array for the newly allocated slots"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{mathvariant:"normal",children:"/"}),(0,t.jsx)(n.mn,{children:"4"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n / 4"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mord",children:"/4"})]})})]})," size reached while removing elements, then Hashmap shrink it to ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mi,{mathvariant:"normal",children:"/"}),(0,t.jsx)(n.mn,{children:"2"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n / 2"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mord",children:"/2"})]})})]})," size."]}),"\n",(0,t.jsxs)(n.p,{children:["The detailed explanation found in MIT 6006 lecture - ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=BRO7mVIFt08",children:"https://www.youtube.com/watch?v=BRO7mVIFt08"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(l,{children:(0,t.jsxs)(a,{value:"java",label:"Java",children:[(0,t.jsx)(s,{name:"@vigneshshiv"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"class MyHashMap {\n    \n    // Initial capacity is set to 16\n    private static final int INITIAL_CAPACITY = 1 << 4;\n\n    // Maximum capcity is set to 65536\n    private static final int MAXIMUM_CAPACITY = 1 << 16;\n\n    // Load factor range is 75% for increase capacity\n    private static final float LOAD_FACTOR = 0.75f;\n\n    private ListNode[] arr;\n\n    private int capacity = INITIAL_CAPACITY;\n    \n    // Threshold range for initial capacity (16) is set to 12. \n    // When the Hashmap is reaches size of 12, it doubles it size and rehashes the elements\n    private int threshold = (int) (INITIAL_CAPACITY * LOAD_FACTOR); // Default\n    \n    // Shrink threshold for initial is set to 0, it will change when the capacity is increased.\n    private int shrink_threshold = 0;\n    \n    // Size of the linked list\n    private int size = 0;\n\n    public MyHashMap() {\n        arr = new ListNode[INITIAL_CAPACITY];\n    }\n\n    /* Value will always be non-negative */\n    public void put(int key, int value) {\n        // Get hashcode for the key and operate on the array\n        int _key = hash(key);\n        ListNode node = arr[_key];\n        // If the hashcode is already found in the array\n        // Then add the current element in the linked list chain\n        if (node != null) {\n            node.add(key, value);\n        } else {\n            node = new ListNode(key, value);\n            arr[_key] = node;\n        }\n        // Threshold Range for Table doubling\n        if (++size > threshold) {\n            grow();\n        }\n    }\n\n    /* Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */\n    public int get(int key) {\n        int _key = hash(key);\n        ListNode node = arr[_key];\n        // Based on the hashcode for the given key, check the elements in the linked list chain\n        Node item;\n        if (node == null || (item = node.find(key)) == null) {\n            return -1;\n        }\n        return item.val;\n    }\n\n    /* Remove the mapping of the specified value of key */\n    public void remove(int key) {\n        int _key = hash(key);\n        ListNode node = arr[_key];\n        if (node == null) return;\n        // Remove key from the linked list chain\n        node.remove(key);\n        // If head is null, then remove that item from array\n        if (node.head == null) {\n            arr[_key] = null;\n        }\n        // Shrink Threshold Range for Table half reducing\n        if (--size < shrink_threshold) {\n            shrink();\n        }\n    }\n\n    /* Stored elements size */\n    public int size() {\n        return size;\n    }\n\n    /* Simple HashCode function */\n    private int hash(int key) {\n        return key % capacity;\n    }\n\n    /* Table doubling or Hashmap increase it's capacity function */\n    private void grow() {\n        // Bit shifting << 1, since it's all capacity is power of 2, shifting 1 to left, doubled it's size.\n        if ((capacity <<= 1) >= MAXIMUM_CAPACITY) {\n            capacity = MAXIMUM_CAPACITY;\n        }\n        ListNode[] oldArr = arr;\n        // Initialized new array capacity with doubled it size\n        ListNode[] newArr = new ListNode[capacity];\n        int count = 0;\n        for (int i = 0; i < oldArr.length; i++) {\n            ListNode node = oldArr[i];\n            /**\n             * Only check if the element is Not null,\n             *  few of remove operation causes remove the element from the array, if the HEAD is null\n             */\n            if (node != null) {\n                // Elements formed in Linked list so using HEAD we can traverse through the elements. \n                Node current = node.head;\n                while (current != null) {\n                    // Re-hashes the existing key for the allocated size\n                    int _key = hash(current.key);\n                    node = newArr[_key]; // New Key check\n                    if (node != null) {\n                        node.add(current.key, current.val);\n                    } else {\n                        node = new ListNode(current.key, current.val);\n                        newArr[_key] = node;\n                    }\n                    current = current.next;\n                }\n                count += 1;\n            }\n        }\n        // Update next threshold\n        threshold = (int) (capacity * LOAD_FACTOR);\n        arr = newArr;\n        size = count; // Actual size\n    }\n\n    /* Table reducing to half, is same as table grow function */\n    private void shrink() {\n        // Bit shifting to right >> 1, reduce half the size for the current capacity\n        if ((capacity >>= 1) <= INITIAL_CAPACITY) {\n            capacity = INITIAL_CAPACITY;\n        }\n        ListNode[] oldArr = arr;\n        ListNode[] newArr = new ListNode[capacity];\n        int count = 0;\n        for (int i = 0; i < oldArr.length; i++) {\n            ListNode node = oldArr[i];\n            if (node != null) {\n                Node current = node.head;\n                while (current != null) {\n                    int _key = hash(current.key);\n                    node = newArr[_key]; // New Key check\n                    if (node != null) {\n                        node.add(current.key, current.val);\n                    } else {\n                        node = new ListNode(current.key, current.val);\n                        newArr[_key] = node;\n                    }\n                    current = current.next;\n                }\n                count += 1;\n            }\n        }\n        // Update next shrink threshold\n        if (capacity == INITIAL_CAPACITY) {\n            shrink_threshold = 0;\n        } else {\n            shrink_threshold = (int) ((capacity >> 1) * LOAD_FACTOR);\n        }\n        arr = newArr;\n        size = count;\n    }\n\n    /* Simple Node class to store the key and value, pointer to the next node */\n    private class Node {\n        int key, val;\n        Node next;\n\n        public Node(int key, int val) {\n            this.key = key;\n            this.val = val;\n        }\n\n        public Node(int key, int val, Node next) {\n            this(key, val);\n            this.next = next;\n        }\n    }\n\n    /**\n     * Linked List Head and Tail node reference for faster adds and remove elements.\n     * \n     * Head and Tail becomes easy to handle operations for add, remove elements\n     */\n    private class ListNode {\n        private Node head;\n        private Node tail;\n\n        private int size = 0;\n\n        private ListNode(int key, int val) {\n            head = new Node(key, val);\n            tail = head;\n            size += 1;\n        }\n\n        /**\n         * Standard linked list operations for Add and update\n         */\n        private void add(int key, int val) {\n            boolean updateNode = update(key, val);\n            if (!updateNode) {\n                Node node = new Node(key, val);\n                if (head == tail) {\n                    head.next = node; // 2nd Node\n                } else {\n                    tail.next = node;\n                }\n                tail = node;\n            }\n            size += updateNode ? 0 : 1;\n        }\n\n        private boolean update(int key, int val) {\n            Node node = find(key);\n            if (node != null) {\n                node.val = val;\n                return true;\n            }\n            return false;\n        }\n\n        private Node find(int key) {\n            if (head == null) return null;\n            Node current = head;\n            while (current != null && current.key != key) {\n                current = current.next;\n            }\n            return current;\n        }\n\n        /* Changing the linked list node pointers when removing the element */\n        private void remove(int key) {\n            if (head == null) return;\n            if (head.key == key) {\n                if (head == tail) {\n                    head = null; tail = null;\n                } else {\n                    head = head.next;\n                }\n            } else {\n                Node current = head, prev = null;\n                while (current != null && current.key != key) {\n                    prev = current;\n                    current = current.next;\n                }\n                if (prev.next == null) return;\n                prev.next = prev.next.next;\n                // Last Node\n                if (prev.next == null) {\n                    if (tail.key == key) {\n                        tail = prev;\n                    } else {\n                        tail = head;\n                    }\n                }\n            }\n            size -= 1;\n        }\n    }\n}\n\n"})})]})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var a=s(96540);const t={},i=a.createContext(t);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);