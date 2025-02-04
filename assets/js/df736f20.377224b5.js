"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[22121],{57275:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>n,suggestedProblems:()=>c,toc:()=>o});const n=JSON.parse('{"id":"basic-topics/hash-map","title":"Hash Map","description":"Hash Map provides quick lookup of certain values in O(1) time.","source":"@site/tutorials/basic-topics/hash-map.md","sourceDirName":"basic-topics","slug":"/basic-topics/hash-map","permalink":"/tutorials/basic-topics/hash-map","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/hash-map.md","tags":[],"version":"current","frontMatter":{"title":"Hash Map","description":"Hash Map provides quick lookup of certain values in O(1) time.","hide_table_of_contents":true,"keywords":["leetcode","tutorial","hash map","algorithm"]},"sidebar":"tutorialSidebar","previous":{"title":"Greedy","permalink":"/tutorials/basic-topics/greedy"},"next":{"title":"Heap (Priority Queue)","permalink":"/tutorials/basic-topics/heap"}}');var t=a(86070),i=a(32790);const l={title:"Hash Map",description:"Hash Map provides quick lookup of certain values in O(1) time.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","hash map","algorithm"]},r=void 0,h={},c=[{problemName:"0217 - Contains Duplicate",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/contains-duplicate/",solutionLink:"../../solutions/0200-0299/contains-duplicate-easy"},{problemName:"0219 - Contains Duplicate II",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/contains-duplicate-ii/",solutionLink:"../../solutions/0200-0299/contains-duplicate-ii-easy"},{problemName:"0003 - Longest Substring Without Repeating Characters",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",solutionLink:"../../solutions/0000-0099/longest-substring-without-repeating-characters-medium"},{problemName:"0706 - Design HashMap",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/design-hashmap/",solutionLink:"../../solutions/0700-0799/design-hashmap-medium"}],o=[{value:"Overview",id:"overview",level:2},{value:"Example: 0001 - Two Sum (Easy)",id:"example-0001---two-sum-easy",level:2}];function m(e){const s={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:a,TabItem:n,Table:l,Tabs:r,TutorialCredits:h}=s;return a||p("SolutionAuthor",!0),n||p("TabItem",!0),l||p("Table",!0),r||p("Tabs",!0),h||p("TutorialCredits",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{authors:"@heiheihang, @wkw"}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.p,{children:'A Hash map, also known as a hash table, is a data structure that stores key-value pairs and uses a hash function to map keys to their corresponding values. The hash function takes a key as input, performs some calculations on it, and returns an index (also known as a "hash code") where the value corresponding to that key can be found.'}),"\n",(0,t.jsxs)(s.p,{children:["The basic idea behind a hash map is to use the key to quickly locate the corresponding value in the table, without having to search through all the elements one by one, like in a linear search. The time complexity of a hash map is ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," on average, which is much faster than a linear search ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,t.jsx)(s.p,{children:'A hash map is implemented as an array of "buckets", where each bucket can store one or more key-value pairs. When a key is hashed, the hash function calculates the index of the bucket where the key-value pair should be stored. If two keys hash to the same index, it is called a collision, and there are different strategies to handle collisions, such as chaining or open addressing.'}),"\n",(0,t.jsx)(s.p,{children:"Hash maps are widely used in many applications, such as databases, caches, and programming languages. They are also used as an efficient data structure for implementing other data structures such as sets, dictionaries, and associative arrays. Hash maps have a few advantages over other data structures such as arrays and linked lists:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Hash maps have constant time complexity for inserting, retrieving and removing elements, which makes them more efficient than arrays and linked lists, which have linear time complexity."}),"\n",(0,t.jsx)(s.li,{children:"Hash maps can store any type of data as a key, while arrays can only store integers as keys."}),"\n",(0,t.jsx)(s.li,{children:"Hash maps can be resized dynamically, which allows them to adapt to changing data and usage patterns."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"In conclusion, a hash map is a data structure that stores key-value pairs and uses a hash function to quickly locate values based on keys. It has an average time complexity of O(1), which makes it more efficient than other data structures such as arrays and linked lists. Hash maps are widely used in many applications and are an efficient data structure for implementing other data structures such as sets, dictionaries, and associative arrays."}),"\n",(0,t.jsxs)(s.h2,{id:"example-0001---two-sum-easy",children:["Example: ",(0,t.jsx)(s.a,{href:"https://leetcode.com/problems/two-sum/",children:"0001 - Two Sum (Easy)"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["Given an array of integers ",(0,t.jsx)(s.code,{children:"nums"})," and an integer ",(0,t.jsx)(s.code,{children:"target"}),", return ",(0,t.jsxs)(s.em,{children:["indices of the two numbers such that they add up to ",(0,t.jsx)(s.code,{children:"target"})]}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["You may assume that each input would have ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"exactly"})}),"** one solution**, and you may not use the ",(0,t.jsx)(s.em,{children:"same"})," element twice."]}),"\n",(0,t.jsx)(s.p,{children:"You can return the answer in any order."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"For example, given the following input:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"nums = [2,7,11,15], target = 9\n"})}),"\n",(0,t.jsxs)(s.p,{children:["We can see that the first two elements (",(0,t.jsx)(s.code,{children:"2"})," and ",(0,t.jsx)(s.code,{children:"7"})," ) add up to the target (",(0,t.jsx)(s.code,{children:"9)"}),". So we need to return ",(0,t.jsx)(s.code,{children:"[0,1]"})," , as these two indices refer to ",(0,t.jsx)(s.code,{children:"2"})," and ",(0,t.jsx)(s.code,{children:"7"})," ."]}),"\n",(0,t.jsx)(s.p,{children:"The naive way to solve this problem is to use a nested for-loop:"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(n,{value:"py",label:"Python",children:[(0,t.jsx)(a,{name:"@heiheihang"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # locate the first element\n        for i in range(len(nums)):\n            # search the second element from i + 1\n            for j in range(i+1, len(nums)):\n                # check if they add up to target\n                if(nums[i] + nums[j] == target):\n                    # return the two indices if they do\n                    return [i, j]\n        return -1\n"})})]}),(0,t.jsxs)(n,{value:"cpp",label:"C++",children:[(0,t.jsx)(a,{name:"@wkw"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        for (int i = 0; i < nums.size(); i++) {\n            for (int j = i + 1; j < nums.size(); j++) {\n                if (nums[i] + nums[j] == target) {\n                    return {i, j};\n                }\n            }\n        }\n        return {-1, -1};\n    }\n};\n"})})]}),(0,t.jsxs)(n,{value:"java",label:"Java",children:[(0,t.jsx)(a,{name:"@wkw"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        for (int i = 0; i < nums.length; i++) {\n            for (int j = i + 1; j < nums.length; j++) {\n                if (nums[i] + nums[j] == target) {\n                    return new int[] {i, j};\n                }\n            }\n        }\n        return new int[] {-1, -1};\n    }\n}\n"})})]})]}),"\n",(0,t.jsxs)(s.p,{children:["We observe that with a nested for-loop, the runtime complexity is ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n^2)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". Let us look at how hash map can help us here."]}),"\n",(0,t.jsx)(s.p,{children:"Hash Map basically is a label. For example, if we want to store the (value, index) pair from the example above in a Hash Map."}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(n,{value:"py",label:"Python",children:[(0,t.jsx)(a,{name:"@heiheihang"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"# we use {} to initialize a hash map\nhash_map = {}\n\n# we want to map the (value, index) pair in this list\ninput_1 = [2,7,11,15]\n\n# we put the (value, index) pair to the hash map\nhash_map[2] = 0\nhash_map[7] = 1\nhash_map[11] = 2\nhash_map[15] = 3\n"})})]}),(0,t.jsxs)(n,{value:"cpp",label:"C++",children:[(0,t.jsx)(a,{name:"@wkw"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"// initialize a hash map\nunordered_map<int, int> hash_map;\n\n// sample\nvector<int> input_1 = {2, 7, 11, 15};\n\n// we put the (value, index) pair to the hash map\nfor (int i = 0; i < input_1.size(); i++) {\n    hash_map[input_1[i]] = i;\n}\n"})})]}),(0,t.jsxs)(n,{value:"java",label:"Java",children:[(0,t.jsx)(a,{name:"@wkw"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:"// initialize a hash map\nHashMap<Integer, Integer> hash_map = new HashMap<Integer, Integer>();\n\n// sample\nint[] input_1 = {2, 7, 11, 15};\n\n// we put the (value, index) pair to the hash map\nfor (int i = 0; i < input_1.length; i++) {\n    hash_map.put(input_1[i], i);\n}\n"})})]})]}),"\n",(0,t.jsxs)(s.p,{children:["The special feature of hash map is that, from now on, if we want to know a value exists in ",(0,t.jsx)(s.code,{children:"input_1"})," or not, we can just perform:"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(n,{value:"py",label:"Python",children:[(0,t.jsx)(a,{name:"@heiheihang"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'if( 7 in hash_map):\n    print("7 is in input_1")\nelse:\n    print("7 is not in input_1")\n'})})]}),(0,t.jsxs)(n,{value:"cpp",label:"C++",children:[(0,t.jsx)(a,{name:"@wkw"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:'if (hash_map.find(7) != hash_map.end()) {\n    cout << "7 is in input_1" << endl;\n} else {\n    cout << "7 is not in input_1" << endl;\n}\n\n// or we can use count\nif (hash_map.count(7)) {\n    cout << "7 is in input_1" << endl;\n} else {\n    cout << "7 is not in input_1" << endl;\n}\n'})})]}),(0,t.jsxs)(n,{value:"java",label:"Java",children:[(0,t.jsx)(a,{name:"@wkw"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'if (hash_map.containsKey(7)){\n    System.out.println("7 is in input_1");\n} else {\n    System.out.println("7 is not in input_1");\n}\n'})})]})]}),"\n",(0,t.jsxs)(s.p,{children:["This operation only takes ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time! Without hash map, we would need to iterate the input to search for a specific element."]}),"\n",(0,t.jsxs)(s.p,{children:["After understanding Hash Map, are you able to solve ",(0,t.jsx)(s.a,{href:"../../solutions/0000-0099/two-sum",children:"Two Sum"})," in ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"N"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," time?"]}),"\n","\n",(0,t.jsx)(l,{title:"Suggested Problems",data:c})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>r});var n=a(30758);const t={},i=n.createContext(t);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);