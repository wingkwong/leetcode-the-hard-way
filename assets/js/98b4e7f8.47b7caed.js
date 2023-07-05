"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[21281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),k=o,c=m["".concat(s,".").concat(k)]||m[k]||h[k]||r;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={description:"Author: @ColeB2 | https://leetcode.com/problems/koko-eating-bananas/"},i="0875 - Koko Eating Bananas",l={unversionedId:"0800-0899/koko-eating-bananas-medium",id:"0800-0899/koko-eating-bananas-medium",title:"0875 - Koko Eating Bananas",description:"Author: @ColeB2 | https://leetcode.com/problems/koko-eating-bananas/",source:"@site/solutions/0800-0899/0875-koko-eating-bananas-medium.md",sourceDirName:"0800-0899",slug:"/0800-0899/koko-eating-bananas-medium",permalink:"/solutions/0800-0899/koko-eating-bananas-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0875-koko-eating-bananas-medium.md",tags:[],version:"current",sidebarPosition:875,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/koko-eating-bananas/"},sidebar:"tutorialSidebar",previous:{title:"0869 - Reordered Power of 2 (Medium)",permalink:"/solutions/0800-0899/reordered-power-of-2-medium"},next:{title:"0877 - Stone Game (Medium)",permalink:"/solutions/0800-0899/stone-game-medium"}},s={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force - TLE",id:"approach-1-brute-force---tle",level:2},{value:"Approach 2: Binary Search",id:"approach-2-binary-search",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=p("Tabs"),h=p("TabItem"),k=p("SolutionAuthor"),c={toc:u},d="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0875---koko-eating-bananas"},"0875 - Koko Eating Bananas"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/koko-eating-bananas/"},"https://leetcode.com/problems/koko-eating-bananas/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Koko loves to eat bananas. There are ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," piles of bananas, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," pile has ",(0,o.kt)("inlineCode",{parentName:"p"},"piles[i]")," bananas. The guards have gone and will come back in ",(0,o.kt)("inlineCode",{parentName:"p"},"h")," hours."),(0,o.kt)("p",null,"Koko can decide her bananas-per-hour eating speed of ",(0,o.kt)("inlineCode",{parentName:"p"},"k"),". Each hour, she chooses some pile of bananas and eats ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," bananas from that pile. If the pile has less than ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," bananas, she eats all of them instead and will not eat any more bananas during this hour."),(0,o.kt)("p",null,"Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the minimum integer ",(0,o.kt)("inlineCode",{parentName:"em"},"k")," such that she can eat all the bananas within ",(0,o.kt)("inlineCode",{parentName:"em"},"h")," hours"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: piles = [3,6,7,11], h = 8\nOutput: 4\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: piles = [30,11,23,4,20], h = 5\nOutput: 30\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: piles = [30,11,23,4,20], h = 6\nOutput: 23\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= piles.length <= 10^4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"piles.length <= h <= 10^9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= piles[i] <= 10^9"))),(0,o.kt)("h2",{id:"approach-1-brute-force---tle"},"Approach 1: Brute Force - TLE"),(0,o.kt)("p",null,"It is a medium problem, so the brute force will likely TLE, but we can gather some insight by figuring out the brute force solution."),(0,o.kt)("p",null,"First, we must think about what we are trying to solve. Koko loves to eat slowly, but also all of the bananas. So we must find out how slowly can she eat, while still eating all the bananas."),(0,o.kt)("p",null,"Do we know the fastest possible rate she could eat all the bananas? Yes we know if she eats the bananas at a rate of $$k = max(piles)$$, that is at a rate of k being the largest pile of bananas. That she could eat them in $$piles.length$$ time. If she ate faster, we know she still has to wait to move on to a new pile, so it doesn't speed up anything, giving us a max k rate of $$k = max(piles)$$"),(0,o.kt)("p",null,"What about the slowest possible rate? Given an h value, we can calculate the sum of all piles of bananas, and figure out that $$k = Ceil(sum(piles)/h)$$. We will check example 3 for more concrete numbers."),(0,o.kt)("p",null,"Example 3: There are 88 bananas that is $$sum(piles)$$, and we know we have 6 hours to finish them. $$h=6$$. So, $$Ceil(88 / 6) = 15$$. We get a close minimum k value of at least 15 bananas per hour to finish all of them in 6 hours. We also know that if we ate 30 bananas per hour, we could eat all of them in 5 hours. So we have our boundaries, we know we need to eat somewhere between 15 and 30 bananas. So the brute force would be to check, starting at 15, and finishing at 30. For time we will have to do $$O(n)$$ at each k value."),(0,o.kt)("p",null,"Time Complexity: $$O(n(maxKValue - minKValue))$$. Where $$n$$ is the number of banana piles. $$maxKValue$$ is $$max(piles)$$ and $$minKValue$$ is $$Ceil(sum(piles)/h)$$.\nWe know we are going to have to loop through all the possible k values, and inside of each k, we are going to have to do $$O(n)$$ work to find the total time."),(0,o.kt)("p",null,"Space Complexity: O(1)"),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\n        # Base Case, must eat 1 pile an hour. So we can return early.\n        if h == len(piles):\n            return max(piles)\n        # Find the min and max values that k can be.\n        # Sum of all bananas / hours will give us our min.\n        # Note we could start at k=1, but using O(n) work, we can eliminate many\n        # poor k values that won't be close.\n        k_min = math.ceil(sum(piles) / h)\n        # Number of bananas in the largest pile will give us max possible k.\n        k_max = max(piles)\n        # Loop through all possible k values from min to max.\n        for k in range(k_min,k_max):\n            # initialize how many hours it will take to eat all bananas\n            hours_to_eat = 0\n            # loop through each pile of bananas. Note: If we finish before\n            # the hour is up, we still have to wait to move on.\n            for pile in piles:\n                # Time to finish will be the number of bananas in the pile,\n                # divided by the rate in which we eat the bananas\n                hours_to_eat += math.ceil(pile/k)\n            # When ever we hit our target h, we know we are at the perfect k.\n            if hours_to_eat == h:\n                return k\n")))),(0,o.kt)("h2",{id:"approach-2-binary-search"},"Approach 2: Binary Search"),(0,o.kt)("p",null,"Can we improve the brute force approach? Sure our first instinct should be that if we linearly scan all possible ks, that is from the minimum k value to the maximum k value, then it must me it is possible to binary search those values. That means for example 3, given a minimum k of 15, and a maximum k of 30, it makes more sense to start at 22, $$30//15 = 22$$ than it does to start at 15. Then we can also eliminate half of all k values during each iteration."),(0,o.kt)("p",null,"Time Complexity: $$O(nlog(maxKValue-minKValue))$$ Where $$n$$ is the number of banana piles. $$maxKValue$$ is $$max(piles)$$ and $$minKValue$$ is $$Ceil(sum(piles)/h)$$. The log comes from the halving of the number of valid k values each iteration."),(0,o.kt)("p",null,"Space Complexity: $$O(1)$$"),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(k,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\n        # Base Case, must eat 1 pile an hour.\n        if h == len(piles):\n            return max(piles)\n        # Find the min and max values that k can be.\n        k_min = math.ceil(sum(piles) / h)\n        k_max = max(piles)\n        # Initialize our return_k value, since during binary search, we may find\n        # an appropriate answer, but since we are jumping around the array, their\n        # may be a better answer, so we can't return at the first k that works.\n        return_k = k_max\n        # set left, l, and right, r, boundaries to k_min, k_max\n        l,r = k_min, k_max\n        while l < r:\n            #calculate our initial k value to be the middle value. \n            # l +  (r-1) // 2 to prevent integer overflow, doesn't matter for\n            # python but it is good practice for other languages.\n            k = l + (r-l) // 2\n            # initialize our hours to eat, being 0\n            hours_to_eat = 0\n            # loop through every pile\n            for pile in piles:\n                # update our hours to eat, with the time it will take to eat the pile.\n                hours_to_eat += math.ceil(pile/k)\n            # hours to eat < h, eating too fast, and can move our right boundary\n            # hours == h we are eating them all in time, but can still potentially\n            # improve.\n            # ex 3: 24 is enough to eat in 6 hours, but we know 23 is a\n            # better answer. Search for a better answer.\n            if hours_to_eat <= h:\n                # move right bound to find smaller k.\n                r = k\n                # update value of our return k\n                return_k = min(k,return_k)\n            # hours to eat > h\n            # eating too slowly to finish\n            else:\n                # move left bound to find larger k.\n                l = k + 1\n        # return our return k.\n        return return_k\n")))))}b.isMDXComponent=!0}}]);