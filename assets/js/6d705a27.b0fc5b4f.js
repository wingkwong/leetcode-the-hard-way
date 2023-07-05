"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[54077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={description:"Author: @ColeB2 | https://leetcode.com/problems/car-fleet/",tags:["Array","Stack","Sorting","Monotonic Stack"]},o="0853 - Car Fleet (Medium)",s={unversionedId:"0800-0899/car-fleet-medium",id:"0800-0899/car-fleet-medium",title:"0853 - Car Fleet (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/car-fleet/",source:"@site/solutions/0800-0899/0853-car-fleet-medium.md",sourceDirName:"0800-0899",slug:"/0800-0899/car-fleet-medium",permalink:"/solutions/0800-0899/car-fleet-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0853-car-fleet-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Stack",permalink:"/solutions/tags/stack"},{label:"Sorting",permalink:"/solutions/tags/sorting"},{label:"Monotonic Stack",permalink:"/solutions/tags/monotonic-stack"}],version:"current",sidebarPosition:853,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/car-fleet/",tags:["Array","Stack","Sorting","Monotonic Stack"]},sidebar:"tutorialSidebar",previous:{title:"0852 - Peak Index in a Mountain Array (Easy)",permalink:"/solutions/0800-0899/peak-index-in-a-mountain-array-easy"},next:{title:"0867 - Transpose Matrix (Easy)",permalink:"/solutions/0800-0899/transpose-matrix-easy"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Monotonic Stack",id:"approach-1-monotonic-stack",level:2},{value:"Approach 2: Reverse Sorting",id:"approach-2-reverse-sorting",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},h=p("Tabs"),d=p("TabItem"),m=p("SolutionAuthor"),u={toc:c},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0853---car-fleet-medium"},"0853 - Car Fleet (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/car-fleet/"},"https://leetcode.com/problems/car-fleet/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"There are ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," cars going to the same destination along a one-lane road. The destination is ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," miles away."),(0,r.kt)("p",null,"You are given two integer array ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"speed"),", both of length ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"position[i]")," is the position of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ith")," car and ",(0,r.kt)("inlineCode",{parentName:"p"},"speed[i]")," is the speed of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ith")," car (in miles per hour)."),(0,r.kt)("p",null,"A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper ",(0,r.kt)("strong",{parentName:"p"},"at the same speed"),". The faster car will ",(0,r.kt)("strong",{parentName:"p"},"slow down")," to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position)."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"car fleet")," is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet."),(0,r.kt)("p",null,"If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet."),(0,r.kt)("p",null,"Return ",(0,r.kt)("em",{parentName:"p"},"the ",(0,r.kt)("strong",{parentName:"em"},"number of car")," fleets that will arrive at the destination"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]\nOutput: 3\nExplanation:\nThe cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.\nThe car starting at 0 does not catch up to any other car, so it is a fleet by itself.\nThe cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.\nNote that no other cars meet these fleets before the destination, so the answer is 3.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: target = 10, position = [3], speed = [3]\nOutput: 1\nExplanation: There is only one car, hence there is only one fleet.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: target = 100, position = [0,2,4], speed = [4,2,1]\nOutput: 1\nExplanation:\nThe cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.\nThen, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n == position.length == speed.length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= n <= 10^5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 < target <= 10^6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= position[i] < target")),(0,r.kt)("li",{parentName:"ul"},"All the values of ",(0,r.kt)("inlineCode",{parentName:"li"},"position")," are unique."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 < speed[i] <= 10^6"))),(0,r.kt)("h2",{id:"approach-1-monotonic-stack"},"Approach 1: Monotonic Stack"),(0,r.kt)("p",null,"We are given a bunch of cars, on the same road, starting at different positions, going at different speeds, all trying to reach the same destination. Know this we are trying to figure out, how many groups, or fleets will reach the destination. Meaning some cars are going to have to slow down and follow bumper-to-bumper for some of their drive to the destination. Knowing that we are going to solve this using 2 main steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We are going to have to get the position, and speed of each car, in sorted order. We need to know the position because a faster car, stuck behind a slower car, can't pass.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Knowing their position, we can use a monotonic decreasing stack and a little math to find out how many fleets will cross the finish line. "))),(0,r.kt)("p",null,"A quick refresher, a monotonic decreasing stack, is a stack, where every item inside the stack is going to be ordered by largest, to smallest. In our case, we are going to use a little math to order the items in our stack from largest to smallest based on the lead car of a fleet's time to reach the destination. We don't care about cars stuck behind the fleet, just about when the lead car is going to finish."),(0,r.kt)("p",null,"We can calculate a car's time to finish, by taking the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," distance, minus the car's ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," and dividing it by the car's ",(0,r.kt)("inlineCode",{parentName:"p"},"speed"),"."),(0,r.kt)("p",null,"$$time = (target - position) / speed$$"),(0,r.kt)("p",null,"So while looping through a sorted list of cars based on position, we can solve for each car's $$time$$ to finish and check to see if the car's $$time$$ of the car we want to add onto our stack is $$>=$$ to the car's $$time$$ on top of the stack. While that is true, we can pop the cars from the stack, as we have a new fleet leader, and eventually add the car to the stack when our condition is met."),(0,r.kt)("p",null,"When we finish, our stack will be filled with the lead car of all the fleets, finishing $$time$$. So we can return the length of our stack to answer our question."),(0,r.kt)("p",null,"Time Complexity: $$O(nlogn)$$. The time of this will be dominated by the sorting, the creation of our cars array, and looping through it will take $$O(n)$$, but we still need to sort it."),(0,r.kt)("p",null,"Space Complexity: $$O(n)$$. We need to create an array, cars, and a stack."),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(m,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:\n        # Here we will utilize a monotonic decreasing stack, meaning everything\n        # in the stack will be ordered by a car fleet's leading car's \n        # \"time to destination\". This means, any element, with a time larger/slower\n        # than the top of our stack, will force us to remove the faster/smaller times\n        # until the incoming car is no longer slower than the top.\n        # First we initialize an array, cars. We do this by zipping together\n        # the position and speed of our cars - zip(position, speed)\n        # then sorting the array of tuples, python will sort by the first value\n        # first, and second value for ties. Since the question doesn't have cars\n        # starting at the same position, we will only have cars ordered by position. \n        cars = sorted(zip(position,speed))\n        stack = []\n        # Loop through every car in cars.\n        for car in cars:\n            # get the position and speed of the car\n            pos, spe = car[0], car[1]\n            # calculate time to finish\n            time = (target-pos) / spe\n            # Check, if the incoming cars time to finish, is >= top of the stack\n            # we can pop that car, as we have a new fleet leader.\n            while stack and stack[-1] <= time:\n                stack.pop()\n            # No longer have cars to pop, we can add our car to the stack as the\n            # new fleet leader.\n            stack.append(time)\n        # return the length of the stack, which will be the number of fleet\n        # leaders inside our stack.\n        return len(stack)\n")))),(0,r.kt)("h2",{id:"approach-2-reverse-sorting"},"Approach 2: Reverse Sorting"),(0,r.kt)("p",null,"Similar to approach 1, we will need a cars array, but by sorting it in reverse order, and instead, tracking the time to complete of the last fleet of cars, and number of car fleets, we can remove the need to use a stack."),(0,r.kt)("p",null,"This works, by checking the incoming car's $$time$$ to finish, with a variable $$last","_","time$$ which tracks the time of the fleet that is going to finish next. If incoming cars $$time$$ to finish is greater, that means it is going to take longer to finish than the fleet ahead of it. If it is less than $$last","_","time$$ that means it is going to catch the fleet before it finishes. In that case we do nothing, as we already counted the fleet it is going to catch."),(0,r.kt)("p",null,"Time Complexity: $$O(nlogn)$$. The time of this will still be dominated by the sorting, and we also need to create a cars array and loop through it in $$O(n)$$."),(0,r.kt)("p",null,"Space Complexity: $$O(n)$$. We still need a cars array, but no longer need a stack, which will be a slight improvement in space requirements."),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(m,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:\n        # Start by creating a cars array. We will do it by zipping together\n        # the position and speed arrays, then sorting it, setting reverse to true\n        # to get the cars in reverse sorted order. This means the cars closest to\n        # the destination will be first, and the cars further away from the\n        # destination be last.\n        cars = sorted(zip(position,speed), reverse=True)\n        # Here we will track the time of last car to cross destination. By\n        # initializing it to 0, we assure that the first car's time will be \n        # greater than it, triggering our count of fleets to increment by one.\n        last_time = 0\n        # track number of car fleets\n        car_fleets = 0\n        # loop through each car, starting from cars closest to the finish line.\n        for car in cars:\n            # get position and speed of the car.\n            pos, spe = car[0], car[1]\n            # calculate the time it takes to finish. \n            time = (target-pos) / spe\n            # Check, if the time the car is going to finish is greater. There are\n            # 2 conditions here.\n            # 1. It is greater, that means that the last car fleet finished before\n            # this car so it will be apart of a different fleet.\n            # 2. It is less than, thats means it will catch up with the fleets,\n            # We are only tracking car fleets, by leader, so we do nothing here.\n            if time > last_time:\n                # Condition 1, last fleet finished before the car could catch it.\n                # So we update last_time to match time of current car, which will\n                # be our next fleet leader.\n                last_time = time\n                # increment the number of fleets as we are creating a new fleet\n                # with this car being slower than the last.\n                car_fleets += 1\n        return car_fleets\n")))))}g.isMDXComponent=!0}}]);