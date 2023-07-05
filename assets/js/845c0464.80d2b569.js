"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[94186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={description:"Author: @vigneshshiv | https://leetcode.com/problems/top-k-frequent-words/"},i="0692 - Top K Frequent Words (Medium)",l={unversionedId:"0600-0699/top-k-frequent-words-medium",id:"0600-0699/top-k-frequent-words-medium",title:"0692 - Top K Frequent Words (Medium)",description:"Author: @vigneshshiv | https://leetcode.com/problems/top-k-frequent-words/",source:"@site/solutions/0600-0699/0692-top-k-frequent-words-medium.md",sourceDirName:"0600-0699",slug:"/0600-0699/top-k-frequent-words-medium",permalink:"/solutions/0600-0699/top-k-frequent-words-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0692-top-k-frequent-words-medium.md",tags:[],version:"current",sidebarPosition:692,frontMatter:{description:"Author: @vigneshshiv | https://leetcode.com/problems/top-k-frequent-words/"},sidebar:"tutorialSidebar",previous:{title:"0684 - Redundant Connection (Medium)",permalink:"/solutions/0600-0699/redundant-connection-medium"},next:{title:"0695 - Max Area of Island (Medium)",permalink:"/solutions/0600-0699/max-area-of-island-medium"}},u={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Priority Queue",id:"approach-1-priority-queue",level:2},{value:"Approach 2: Bucket Sort",id:"approach-2-bucket-sort",level:2},{value:"Approach 3: STL (Comparator Interface)",id:"approach-3-stl-comparator-interface",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=p("Tabs"),d=p("TabItem"),m=p("SolutionAuthor"),f={toc:s},h="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0692---top-k-frequent-words-medium"},"0692 - Top K Frequent Words (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/top-k-frequent-words/"},"https://leetcode.com/problems/top-k-frequent-words/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an array of strings ",(0,o.kt)("inlineCode",{parentName:"p"},"words")," and an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),", return the ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," ",(0,o.kt)("em",{parentName:"p"},"most frequent strings"),"."),(0,o.kt)("p",null,"Return the answer ",(0,o.kt)("strong",{parentName:"p"},"sorted")," by ",(0,o.kt)("strong",{parentName:"p"},"the frequency")," from highest to lowest. Sort the words with the same frequency by their ",(0,o.kt)("strong",{parentName:"p"},"lexicographical order"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: words = ["i","love","leetcode","i","love","coding"], k = 2\nOutput: ["i","love"]\nExplanation: "i" and "love" are the two most frequent words.\nNote that "i" comes before "love" due to a lower alphabetical order.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4\nOutput: ["the","is","sunny","day"]\nExplanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 500")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length <= 10")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"words[i]")," consists of lowercase English letters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"k")," is in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[1, The number of unique words[i]]"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow-up"),": Could you solve it in ",(0,o.kt)("inlineCode",{parentName:"p"},"O(n log(k))")," time and ",(0,o.kt)("inlineCode",{parentName:"p"},"O(n)")," extra space?"),(0,o.kt)("h2",{id:"approach-1-priority-queue"},"Approach 1: Priority Queue"),(0,o.kt)("p",null,"The idea is to solve this question by, first count all occurances of each word, and then add each word to a PriorityQueue (heap) that sorts the entries based on the number of occurances counted. If the number of occurances are equal, we want to sort in lexicographical order."),(0,o.kt)("p",null,"The ideal approach is use to ",(0,o.kt)("strong",{parentName:"p"},"MinHeap"),", that helps maintains the elements sorted from smallest to largest. The lowest element will be stayed on top so that it can easily polled out. This allows the optimal runtime because the size of the heap never goes over $(k + 1)$."),(0,o.kt)("p",null,"The heap structure can guarantee the collection stays sorted upon addition and deletion in $O(log m)$ time (where ",(0,o.kt)("strong",{parentName:"p"},"m is the number of elements in the heap"),")."),(0,o.kt)("p",null,"Time Complexity: $O(n log(k))$, where $n$ - # of words, $k$ - top K frequency words"),(0,o.kt)("p",null,"Space Complexity: $O(n)$"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(m,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<String> topKFrequent(String[] words, int k) {\n        LinkedList<String> result = new LinkedList<>();\n        // Word occurrence frequency\n        Map<String, Integer> frequency = new HashMap<>();\n        for (String word : words) {\n            frequency.put(word, frequency.getOrDefault(word, 0) + 1);\n        }\n        Comparator<String> wordComparator = (w1, w2) -> {\n            return frequency.get(w1) == frequency.get(w2) ? w2.compareTo(w1) : frequency.get(w1) - frequency.get(w2);\n        };\n        PriorityQueue<String> priorityQueue = new PriorityQueue<>(wordComparator);\n        for (String word : frequency.keySet()) {\n            priorityQueue.offer(word);\n            if (priorityQueue.size() > k) priorityQueue.poll();\n        }\n        while (!priorityQueue.isEmpty()) {\n            result.addFirst(priorityQueue.poll());\n        }\n        return result;\n    }\n}\n")))),(0,o.kt)("h2",{id:"approach-2-bucket-sort"},"Approach 2: Bucket Sort"),(0,o.kt)("p",null,"Consider, if we could find the no. of occurances of all words and forms frequency ordering element from highest to lowest, the we could solve this problem easily. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Builds a word frequency of all words"),(0,o.kt)("li",{parentName:"ul"},"Then, build a value frequency (no of occurances) of all words from highest to lowest"),(0,o.kt)("li",{parentName:"ul"},"Iterate through value frequency HashMap, and add only top $K$ elements to result and return it. ")),(0,o.kt)("p",null,"Time Complexity: $O(n log(k))$, where $n$ - # of words, $k$ - top K frequency words"),(0,o.kt)("p",null,"Space Complexity: $O(n)$"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(m,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<String> topKFrequent(String[] words, int k) {\n        List<String> result = new LinkedList<>();\n        // Value frequency\n        Map<Integer, List<String>> table = new HashMap<>();\n        // Word occurrence frequency\n        Map<String, Integer> frequency = new HashMap<>();\n        for (String word : words) {\n            frequency.put(word, frequency.getOrDefault(word, 0) + 1);\n        }\n        frequency.forEach((key, value) -> {\n            List<String> keys = table.getOrDefault(value, new ArrayList<>());\n            keys.add(key);\n            table.put(value, keys);\n        });\n        for (int i = words.length; i > 0; i--) {\n            if (table.containsKey(i)) {\n                List<String> sorted = table.get(i).stream().sorted(Comparator.naturalOrder()).collect(Collectors.toList());\n                for (int j = 0; j < sorted.size() && result.size() < k; j++) {\n                    result.add(sorted.get(j));\n                }\n            }\n        }\n        return result;\n    }\n}\n")))),(0,o.kt)("h2",{id:"approach-3-stl-comparator-interface"},"Approach 3: STL (Comparator Interface)"),(0,o.kt)("p",null,"Leveraging the Comparator interface and sorting the elements by considering object attributes for comparison.\nThis feature allows to use Lambda expression in the context of Functional Interfaces. "),(0,o.kt)("p",null,"This is an Optimal solution with minimizing the amount of operation we did in the above two approaches. "),(0,o.kt)("p",null,"Time Complexity: $O(n log(k))$, where $n$ - # of words, $k$ - top K frequency words"),(0,o.kt)("p",null,"Space Complexity: $O(n)$"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(m,{name:"@vigneshshiv",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public List<String> topKFrequent(String[] words, int k) {\n        // Word occurrence frequency\n        Map<String, Integer> frequency = new HashMap<>();\n        for (String word : words) {\n            frequency.put(word, frequency.getOrDefault(word, 0) + 1);\n        }\n        List<String> result = new ArrayList<>(frequency.keySet());\n        Comparator<String> wordCompartor = (w1, w2) -> {\n            return frequency.get(w1) == frequency.get(w2) ? w1.compareTo(w2) : frequency.get(w2) - frequency.get(w1);\n        };\n        Collections.sort(result, wordCompartor);\n        return result.subList(0, k);\n    }\n}\n")))))}k.isMDXComponent=!0}}]);