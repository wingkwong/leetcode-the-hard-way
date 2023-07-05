"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[88283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,d=m["".concat(l,".").concat(c)]||m[c]||h[c]||o;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>b,frontMatter:()=>o,metadata:()=>s,suggestedProblems:()=>u,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={title:"Hash Map",description:"Hash Map provides quick lookup of certain values in O(1) time.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","hash map","algorithm"]},r=void 0,s={unversionedId:"basic-topics/hash-map",id:"basic-topics/hash-map",title:"Hash Map",description:"Hash Map provides quick lookup of certain values in O(1) time.",source:"@site/tutorials/basic-topics/hash-map.md",sourceDirName:"basic-topics",slug:"/basic-topics/hash-map",permalink:"/tutorials/basic-topics/hash-map",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/basic-topics/hash-map.md",tags:[],version:"current",frontMatter:{title:"Hash Map",description:"Hash Map provides quick lookup of certain values in O(1) time.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","hash map","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Greedy",permalink:"/tutorials/basic-topics/greedy"},next:{title:"Heap (Priority Queue)",permalink:"/tutorials/basic-topics/heap"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Example: 0001 - Two Sum (Easy)",id:"example-0001---two-sum-easy",level:2}],u=[{problemName:"0217 - Contains Duplicate",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/contains-duplicate/",solutionLink:"../../solutions/0200-0299/contains-duplicate-easy"},{problemName:"0219 - Contains Duplicate II",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/contains-duplicate-ii/",solutionLink:"../../solutions/0200-0299/contains-duplicate-ii-easy"},{problemName:"0003 - Longest Substring Without Repeating Characters",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",solutionLink:"../../solutions/0000-0099/longest-substring-without-repeating-characters-medium"},{problemName:"0706 - Design HashMap",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/design-hashmap/",solutionLink:"../../solutions/0700-0799/design-hashmap-medium"}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},h=m("TutorialAuthors"),c=m("Tabs"),d=m("TabItem"),k=m("SolutionAuthor"),y=m("Table"),g={toc:p,suggestedProblems:u},f="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(f,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(h,{names:"@heiheihang, @wingkwong",mdxType:"TutorialAuthors"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,'A Hash map, also known as a hash table, is a data structure that stores key-value pairs and uses a hash function to map keys to their corresponding values. The hash function takes a key as input, performs some calculations on it, and returns an index (also known as a "hash code") where the value corresponding to that key can be found.'),(0,i.kt)("p",null,"The basic idea behind a hash map is to use the key to quickly locate the corresponding value in the table, without having to search through all the elements one by one, like in a linear search. The time complexity of a hash map is $O(1)$ on average, which is much faster than a linear search $O(n)$."),(0,i.kt)("p",null,'A hash map is implemented as an array of "buckets", where each bucket can store one or more key-value pairs. When a key is hashed, the hash function calculates the index of the bucket where the key-value pair should be stored. If two keys hash to the same index, it is called a collision, and there are different strategies to handle collisions, such as chaining or open addressing.'),(0,i.kt)("p",null,"Hash maps are widely used in many applications, such as databases, caches, and programming languages. They are also used as an efficient data structure for implementing other data structures such as sets, dictionaries, and associative arrays. Hash maps have a few advantages over other data structures such as arrays and linked lists:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hash maps have constant time complexity for inserting, retrieving and removing elements, which makes them more efficient than arrays and linked lists, which have linear time complexity."),(0,i.kt)("li",{parentName:"ul"},"Hash maps can store any type of data as a key, while arrays can only store integers as keys."),(0,i.kt)("li",{parentName:"ul"},"Hash maps can be resized dynamically, which allows them to adapt to changing data and usage patterns.")),(0,i.kt)("p",null,"In conclusion, a hash map is a data structure that stores key-value pairs and uses a hash function to quickly locate values based on keys. It has an average time complexity of O(1), which makes it more efficient than other data structures such as arrays and linked lists. Hash maps are widely used in many applications and are an efficient data structure for implementing other data structures such as sets, dictionaries, and associative arrays."),(0,i.kt)("h2",{id:"example-0001---two-sum-easy"},"Example: ",(0,i.kt)("a",{parentName:"h2",href:"https://leetcode.com/problems/two-sum/"},"0001 - Two Sum (Easy)")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Given an array of integers ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", return ",(0,i.kt)("em",{parentName:"p"},"indices of the two numbers such that they add up to ",(0,i.kt)("inlineCode",{parentName:"em"},"target")),"."),(0,i.kt)("p",{parentName:"blockquote"},"You may assume that each input would have ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"exactly")),(0,i.kt)("strong",{parentName:"p"}," one solution"),", and you may not use the ",(0,i.kt)("em",{parentName:"p"},"same")," element twice."),(0,i.kt)("p",{parentName:"blockquote"},"You can return the answer in any order.")),(0,i.kt)("p",null,"For example, given the following input:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"nums = [2,7,11,15], target = 9\n")),(0,i.kt)("p",null,"We can see that the first two elements (",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"7")," ) add up to the target (",(0,i.kt)("inlineCode",{parentName:"p"},"9)"),". So we need to return ",(0,i.kt)("inlineCode",{parentName:"p"},"[0,1]")," , as these two indices refer to ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"7")," ."),(0,i.kt)("p",null,"The naive way to solve this problem is to use a nested for-loop:"),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)(k,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        # locate the first element\n        for i in range(len(nums)):\n            # search the second element from i + 1\n            for j in range(i+1, len(nums)):\n                # check if they add up to target\n                if(nums[i] + nums[j] == target):\n                    # return the two indices if they do\n                    return [i, j]\n        return -1    \n"))),(0,i.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        for (int i = 0; i < nums.size(); i++) {\n            for (int j = i + 1; j < nums.size(); j++) {\n                if (nums[i] + nums[j] == target) {\n                    return {i, j};\n                }\n            }\n        }\n        return {-1, -1};\n    }\n};\n"))),(0,i.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        for (int i = 0; i < nums.length; i++) {\n            for (int j = i + 1; j < nums.length; j++) {\n                if (nums[i] + nums[j] == target) {\n                    return new int[] {i, j};\n                }\n            }\n        }\n        return new int[] {-1, -1};\n    }\n}\n")))),(0,i.kt)("p",null,"We observe that with a nested for-loop, the runtime complexity is $$O(n^2)$$. Let us look at how hash map can help us here."),(0,i.kt)("p",null,"Hash Map basically is a label. For example, if we want to store the (value, index) pair from the example above in a Hash Map."),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)(k,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# we use {} to initialize a hash map\nhash_map = {}\n\n# we want to map the (value, index) pair in this list\ninput_1 = [2,7,11,15]\n\n# we put the (value, index) pair to the hash map\nhash_map[2] = 0 \nhash_map[7] = 1\nhash_map[11] = 2\nhash_map[15] = 3\n"))),(0,i.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// initialize a hash map\nunordered_map<int, int> hash_map;\n\n// sample\nvector<int> input_1 = {2, 7, 11, 15};\n\n// we put the (value, index) pair to the hash map\nfor (int i = 0; i < input_1.size(); i++) {\n    hash_map[input_1[i]] = i;\n}\n"))),(0,i.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// initialize a hash map\nHashMap<Integer, Integer> hash_map = new HashMap<Integer, Integer>();\n\n// sample\nint[] input_1 = {2, 7, 11, 15};\n\n// we put the (value, index) pair to the hash map\nfor (int i = 0; i < input_1.length; i++) {\n    hash_map.put(input_1[i], i);\n}\n")))),(0,i.kt)("p",null,"The special feature of hash map is that, from now on, if we want to know a value exists in ",(0,i.kt)("inlineCode",{parentName:"p"},"input_1")," or not, we can just perform:"),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,i.kt)(k,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'if( 7 in hash_map):\n    print("7 is in input_1")\nelse:\n    print("7 is not in input_1")\n'))),(0,i.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'if (hash_map.find(7) != hash_map.end()) {\n    cout << "7 is in input_1" << endl;\n} else {\n    cout << "7 is not in input_1" << endl;\n}\n\n// or we can use count\nif (hash_map.count(7)) {\n    cout << "7 is in input_1" << endl;\n} else {\n    cout << "7 is not in input_1" << endl;\n}\n'))),(0,i.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(k,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'if (hash_map.containsKey(7)){\n    System.out.println("7 is in input_1");\n} else {\n    System.out.println("7 is not in input_1");\n}\n')))),(0,i.kt)("p",null,"This operation only takes $$O(1)$$ time! Without hash map, we would need to iterate the input to search for a specific element."),(0,i.kt)("p",null,"After understanding Hash Map, are you able to solve ",(0,i.kt)("a",{parentName:"p",href:"../../solutions/0000-0099/two-sum"},"Two Sum")," in $$O(N)$$ time?"),(0,i.kt)(y,{title:"Suggested Problems",data:u,mdxType:"Table"}))}b.isMDXComponent=!0}}]);