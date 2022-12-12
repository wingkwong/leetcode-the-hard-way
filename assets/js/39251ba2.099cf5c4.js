"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[31388],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),m=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(t),c=i,g=d["".concat(u,".").concat(c)]||d[c]||p[c]||a;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54823:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return p}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/range-sum-query-mutable/",tags:["Array","Design","Binary Indexed Tree","Segment Tree"]},u="0307 - Range Sum Query - Mutable (Medium)",m={unversionedId:"0300-0399/range-sum-query-mutable-medium",id:"0300-0399/range-sum-query-mutable-medium",title:"0307 - Range Sum Query - Mutable (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/range-sum-query-mutable/",source:"@site/solutions/0300-0399/0307-range-sum-query-mutable-medium.md",sourceDirName:"0300-0399",slug:"/0300-0399/range-sum-query-mutable-medium",permalink:"/leetcode-the-hard-way/solutions/0300-0399/range-sum-query-mutable-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0307-range-sum-query-mutable-medium.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Design",permalink:"/leetcode-the-hard-way/solutions/tags/design"},{label:"Binary Indexed Tree",permalink:"/leetcode-the-hard-way/solutions/tags/binary-indexed-tree"},{label:"Segment Tree",permalink:"/leetcode-the-hard-way/solutions/tags/segment-tree"}],version:"current",sidebarPosition:307,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/range-sum-query-mutable/",tags:["Array","Design","Binary Indexed Tree","Segment Tree"]},sidebar:"tutorialSidebar",previous:{title:"0300 - 0399",permalink:"/leetcode-the-hard-way/solutions/category/0300---0399"},next:{title:"0323 - Number of Connected Components in an Undirected Graph (Medium)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/number-of-connected-components-in-an-undirected-graph-medium"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Segment Tree",id:"approach-1-segment-tree",level:2}],d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)}},c=d("Tabs"),g=d("TabItem"),y=d("SolutionAuthor"),k={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0307---range-sum-query---mutable-medium"},"0307 - Range Sum Query - Mutable (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/range-sum-query-mutable/"},"https://leetcode.com/problems/range-sum-query-mutable/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),", handle multiple queries of the following types:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Update")," the value of an element in ",(0,a.kt)("inlineCode",{parentName:"li"},"nums"),"."),(0,a.kt)("li",{parentName:"ol"},"Calculate the ",(0,a.kt)("strong",{parentName:"li"},"sum")," of the elements of ",(0,a.kt)("inlineCode",{parentName:"li"},"nums")," between indices ",(0,a.kt)("inlineCode",{parentName:"li"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"right")," ",(0,a.kt)("strong",{parentName:"li"},"inclusive")," where ",(0,a.kt)("inlineCode",{parentName:"li"},"left <= right"),".")),(0,a.kt)("p",null,"Implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"NumArray")," class:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NumArray(int[] nums)")," Initializes the object with the integer array ",(0,a.kt)("inlineCode",{parentName:"li"},"nums"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void update(int index, int val)")," ",(0,a.kt)("strong",{parentName:"li"},"Updates")," the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"nums[index]")," to be ",(0,a.kt)("inlineCode",{parentName:"li"},"val"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int sumRange(int left, int right)")," Returns the ",(0,a.kt)("strong",{parentName:"li"},"sum")," of the elements of ",(0,a.kt)("inlineCode",{parentName:"li"},"nums")," between indices ",(0,a.kt)("inlineCode",{parentName:"li"},"left")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"right")," ",(0,a.kt)("strong",{parentName:"li"},"inclusive")," (i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"nums[left] + nums[left + 1] + ... + nums[right]"),").")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input\n["NumArray", "sumRange", "update", "sumRange"]\n[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]\nOutput\n[null, 9, null, 8]\n\nExplanation\nNumArray numArray = new NumArray([1, 3, 5]);\nnumArray.sumRange(0, 2); // return 1 + 3 + 5 = 9\nnumArray.update(1, 2);   // nums = [1, 2, 5]\nnumArray.sumRange(0, 2); // return 1 + 2 + 5 = 8\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 3 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-100 <= nums[i] <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= index < nums.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-100 <= val <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= left <= right < nums.length")),(0,a.kt)("li",{parentName:"ul"},"At most ",(0,a.kt)("inlineCode",{parentName:"li"},"3 * 10^4")," calls will be made to ",(0,a.kt)("inlineCode",{parentName:"li"},"update")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"sumRange"),".")),(0,a.kt)("h2",{id:"approach-1-segment-tree"},"Approach 1: Segment Tree"),(0,a.kt)(c,{mdxType:"Tabs"},(0,a.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(y,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct segtree {\n    vector<long long> sums;\n    int size;\n    \n    void init(int n) {\n        size = 1;\n        while (size < n) size *= 2;\n        sums.assign(size * 2, 0LL);\n    }\n    \n    void set(int i, int v, int x, int lx, int rx) {\n        if (rx - lx == 1) {\n            sums[x] = v;\n            return;\n        }\n        int m = (lx + rx) / 2;\n        if (i < m) {\n            set(i, v, 2 * x + 1, lx, m);\n        } else {\n            set(i, v, 2 * x + 2, m, rx);\n        }\n        sums[x] = sums[2 * x + 1] + sums[2 * x + 2];\n    }\n    \n    void set(int i, int v) {\n        set(i, v, 0, 0, size);\n    }\n    \n    long long sum(int l, int r, int x, int lx, int rx) {\n        // no intersection\n        if (lx >= r || l >= rx) return 0;\n        // inside\n        if (lx >= l && rx <= r) return sums[x];\n        int m = (lx + rx) / 2;\n        long long s1 = sum(l, r, 2 * x + 1, lx, m);\n        long long s2 = sum(l, r, 2 * x + 2, m, rx);\n        return s1 + s2;\n    }\n    \n    \n    long long sum(int l, int r) {\n        return sum(l, r, 0, 0, size);\n    }\n};\n\nclass NumArray {\npublic:\n    NumArray(vector<int>& nums) {\n        n = nums.size();\n        st.init(n);\n        for (int i = 0; i < n; i++) {\n            st.set(i, nums[i]);\n        }\n    }\n    \n    void update(int index, int val) {\n        st.set(index, val);\n    }\n    \n    int sumRange(int left, int right) {\n        return st.sum(left, right + 1);\n    }\n\nprivate: \n    segtree st;\n    int n;\n};\n\n/**\n * Your NumArray object will be instantiated and called as such:\n * NumArray* obj = new NumArray(nums);\n * obj->update(index,val);\n * int param_2 = obj->sumRange(left,right);\n */\n")))))}f.isMDXComponent=!0}}]);