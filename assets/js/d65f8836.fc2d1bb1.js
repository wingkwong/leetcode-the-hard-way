"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={description:"Author: @ColeB2 | https://leetcode.com/problems/detect-squares/",tags:["Array","Hash Table","Design","Counting"]},o="2013 - Detect Squares (Medium)",s={unversionedId:"2000-2099/detect-squares-medium",id:"2000-2099/detect-squares-medium",title:"2013 - Detect Squares (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/detect-squares/",source:"@site/solutions/2000-2099/2013-detect-squares-medium.md",sourceDirName:"2000-2099",slug:"/2000-2099/detect-squares-medium",permalink:"/solutions/2000-2099/detect-squares-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2000-2099/2013-detect-squares-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Hash Table",permalink:"/solutions/tags/hash-table"},{label:"Design",permalink:"/solutions/tags/design"},{label:"Counting",permalink:"/solutions/tags/counting"}],version:"current",sidebarPosition:2013,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/detect-squares/",tags:["Array","Hash Table","Design","Counting"]},sidebar:"tutorialSidebar",previous:{title:"2007 - Find Original Array From Doubled Array (Medium)",permalink:"/solutions/2000-2099/find-original-array-from-doubled-array-medium"},next:{title:"2017 - Grid Game (Medium)",permalink:"/solutions/2000-2099/grid-game-medium"}},l={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Checking for Diagonal Points",id:"approach-1-checking-for-diagonal-points",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("Tabs"),c=p("TabItem"),m=p("SolutionAuthor"),h={toc:u},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2013---detect-squares-medium"},"2013 - Detect Squares (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/detect-squares/"},"https://leetcode.com/problems/detect-squares/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"You are given a stream of points on the X-Y plane. Design an algorithm that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Adds")," new points from the stream into a data structure. ",(0,r.kt)("strong",{parentName:"li"},"Duplicate")," points are allowed and should be treated as different points."),(0,r.kt)("li",{parentName:"ul"},"Given a query point, ",(0,r.kt)("strong",{parentName:"li"},"counts")," the number of ways to choose three points from the data structure such that the three points and the query point form an ",(0,r.kt)("strong",{parentName:"li"},"axis-aligned square")," with ",(0,r.kt)("strong",{parentName:"li"},"positive area"),".\nAn ",(0,r.kt)("strong",{parentName:"li"},"axis-aligned square")," is a square whose edges are all the same length and are either parallel or perpendicular to the x-axis and y-axis.")),(0,r.kt)("p",null,"Implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"DetectSquares")," class:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DetectSquares()")," Initializes the object with an empty data structure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void add(int[] point)")," Adds a new point ",(0,r.kt)("inlineCode",{parentName:"li"},"point = [x, y]")," to the data structure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int count(int[] point)")," Counts the number of ways to form ",(0,r.kt)("strong",{parentName:"li"},"axis-aligned squares")," with point ",(0,r.kt)("inlineCode",{parentName:"li"},"point = [x, y]")," as described above.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/09/01/image.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Input\n["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]\n[[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]\nOutput\n[null, null, null, null, 1, 0, null, 2]\n\nExplanation\nDetectSquares detectSquares = new DetectSquares();\ndetectSquares.add([3, 10]);\ndetectSquares.add([11, 2]);\ndetectSquares.add([3, 2]);\ndetectSquares.count([11, 10]); // return 1. You can choose:\n                               //   - The first, second, and third points\ndetectSquares.count([14, 8]);  // return 0. The query point cannot form a square with any points in the data structure.\ndetectSquares.add([11, 2]);    // Adding duplicate points is allowed.\ndetectSquares.count([11, 10]); // return 2. You can choose:\n                               //   - The first, second, and third points\n                               //   - The first, third, and fourth points\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"point.length == 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= x, y <= 1000")),(0,r.kt)("li",{parentName:"ul"},"At most ",(0,r.kt)("inlineCode",{parentName:"li"},"3000")," calls in total will be made to ",(0,r.kt)("inlineCode",{parentName:"li"},"add")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"count"),".")),(0,r.kt)("h2",{id:"approach-1-checking-for-diagonal-points"},"Approach 1: Checking for Diagonal Points"),(0,r.kt)("p",null,"This a tricky problem that can be greatly simplified by knowing what to do. If for any given count call, we can check all points inside our hash map and only continue with our algorithm if the point is directly diagonal with the point we are given, then we know we can only create a square with those two points, if there are 2 points that are adjacent to those points, to create the other 2 corners."),(0,r.kt)("p",null,"Meaning during our search for diagonal points, we want a difference in $$x,y$$ that is a $$dx, dy$$ where $$dx != dy$$ and the $$x$$ and $$y$$ values of our potential diagonal points aren't equal, otherwise, that means they are on the same axis."),(0,r.kt)("p",null,"When we find a suitable corner, we can check the adjacent positions where a corner would need to exist to create a square and multiply the number of points of all three corners to add to our total result. Obviously, if any of those corners don't exist, we will multiply by $$0$$, not creating a square."),(0,r.kt)("p",null,"Time Complexity:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add: $$O(1)$$, we can add points to our data structure in constant time."),(0,r.kt)("li",{parentName:"ul"},"Count: $$O(n)$$, where $$n$$ is the number of unique points. We are going to check through all unique points once, doing constant time work to determine if we can create a square, and increment our count for the number of squares we find.")),(0,r.kt)("p",null,"Space Complexity: $$O(n)$$ where $$n$$ is the number of unique points. We are going to maintain a hash map for our data structure, only creating keys for unique points, and incrementing a value for those points if we find duplicates."),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(m,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class DetectSquares:\n    # DetectSquares\n    # add O(1) time\n    # count O(n) time\n    # class will maintain a hashmap of O(n) size.\n    def __init__(self):\n        # intiialize our hashmap of points\n        # key: tuple (x,y) coordinate\n        # value: number of times point exists in the plane.\n        self.points = {}\n        \n    def add(self, point: List[int]) -> None:\n        # convert our point to a tuple, so it is hashable in python\n        point = tuple(point)\n        # check point exists in our hash map.\n        if point not in self.points:\n            # doesn't create the key and initialize value to 0\n            self.points[point] = 0\n        # increment the value of the given point\n        self.points[point] += 1\n        \n    def count(self, point: List[int]) -> int:\n        # initialize square, which is the number of squares\n        # we can create with the given point, point.\n        squares = 0\n        # initialize a px, py to represent the x and y coordinates of\n        # the given point, point.\n        px, py = point\n        # loop through all unique points in our hash map, tracking x, y.\n        for (x, y) in self.points.keys():\n            # calculate the absolute distance between given point and\n            # the unique points in our hash map.\n            dx, dy = abs(px - x), abs(py - y)\n            # check if points are diagonal apart, if not continue\n            # if the dy and dx aren't the same, or if the points exist\n            # on the same x/y axis, then they can't be diagonal apart.\n            if (dy != dx) or  px == x or py == y:\n                continue\n            # points are diagonal apart --\x3e check adj corners exist.\n            # if a corner exists, we will use the count from our \n            # self.points hash map, otherwise initialize it with 0.\n            corner1 = self.points[(x, py)] if (x, py) in self.points else 0\n            corner2 = self.points[(px, y)] if (px, y) in self.points else 0\n            # add the values of all 3 points that exist in the hash map\n            # multiplied together. If one of the corners is a 0, we can't\n            # make a square, so it will add 0 to our squares variable.\n            squares += corner1 * corner2 * self.points[(x,y)]\n        return squares\n")))))}y.isMDXComponent=!0}}]);