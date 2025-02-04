"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[53663],{56113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"0300-0399/design-twitter-medium","title":"0355 - Design Twitter (Medium)","description":"Author: @ColeB2 | https://leetcode.com/problems/design-twitter/","source":"@site/solutions/0300-0399/0355-design-twitter-medium.md","sourceDirName":"0300-0399","slug":"/0300-0399/design-twitter-medium","permalink":"/solutions/0300-0399/design-twitter-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0355-design-twitter-medium.md","tags":[{"inline":true,"label":"Hash Table","permalink":"/solutions/tags/hash-table"},{"inline":true,"label":"Linked List","permalink":"/solutions/tags/linked-list"},{"inline":true,"label":"Design","permalink":"/solutions/tags/design"},{"inline":true,"label":"Heap (Priority Queue)","permalink":"/solutions/tags/heap-priority-queue"}],"version":"current","sidebarPosition":355,"frontMatter":{"description":"Author: @ColeB2 | https://leetcode.com/problems/design-twitter/","tags":["Hash Table","Linked List","Design","Heap (Priority Queue)"]},"sidebar":"tutorialSidebar","previous":{"title":"0350 - Intersection of Two Arrays II (Easy)","permalink":"/solutions/0300-0399/intersection-of-two-arrays-ii-easy"},"next":{"title":"0365 - Water and Jug Problem (Medium)","permalink":"/solutions/0300-0399/water-and-jug-problem-medium"}}');var o=n(86070),i=n(32790);const l={description:"Author: @ColeB2 | https://leetcode.com/problems/design-twitter/",tags:["Hash Table","Linked List","Design","Heap (Priority Queue)"]},r="0355 - Design Twitter (Medium)",d={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Heap/Priority Queue",id:"approach-1-heappriority-queue",level:2}];function w(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:n,TabItem:s,Tabs:l}=t;return n||u("SolutionAuthor",!0),s||u("TabItem",!0),l||u("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"0355---design-twitter-medium",children:"0355 - Design Twitter (Medium)"})}),"\n",(0,o.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/design-twitter/",children:"https://leetcode.com/problems/design-twitter/"})}),"\n",(0,o.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(t.p,{children:["Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the ",(0,o.jsx)(t.code,{children:"10"})," most recent tweets in the user's news feed."]}),"\n",(0,o.jsxs)(t.p,{children:["Implement the ",(0,o.jsx)(t.code,{children:"Twitter"})," class:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Twitter()"})," Initializes your twitter object."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"void postTweet(int userId, int tweetId)"})," Composes a new tweet with ID ",(0,o.jsx)(t.code,{children:"tweetId"})," by the user ",(0,o.jsx)(t.code,{children:"userId"}),". Each call to this function will be made with a unique ",(0,o.jsx)(t.code,{children:"tweetId"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"List<Integer> getNewsFeed(int userId)"})," Retrieves the ",(0,o.jsx)(t.code,{children:"10"})," most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ",(0,o.jsx)(t.strong,{children:"ordered from most recent to least recent"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"void follow(int followerId, int followeeId)"})," The user with ID ",(0,o.jsx)(t.code,{children:"followerId"})," started following the user with ID ",(0,o.jsx)(t.code,{children:"followeeId"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"void unfollow(int followerId, int followeeId)"})," The user with ID ",(0,o.jsx)(t.code,{children:"followerId"})," started unfollowing the user with ID ",(0,o.jsx)(t.code,{children:"followeeId"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'Input\n["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]\n[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]\nOutput\n[null, null, [5], null, null, [6, 5], null, [5]]\n\nExplanation\nTwitter twitter = new Twitter();\ntwitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).\ntwitter.getNewsFeed(1);  // User 1\'s news feed should return a list with 1 tweet id -> [5]. return [5]\ntwitter.follow(1, 2);    // User 1 follows user 2.\ntwitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).\ntwitter.getNewsFeed(1);  // User 1\'s news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.\ntwitter.unfollow(1, 2);  // User 1 unfollows user 2.\ntwitter.getNewsFeed(1);  // User 1\'s news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"1 <= userId, followerId, followeeId <= 500"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"0 <= tweetId <= 10^4"})}),"\n",(0,o.jsxs)(t.li,{children:["All the tweets have ",(0,o.jsx)(t.strong,{children:"unique"})," IDs."]}),"\n",(0,o.jsxs)(t.li,{children:["At most ",(0,o.jsx)(t.code,{children:"3 * 10^4"})," calls will be made to ",(0,o.jsx)(t.code,{children:"postTweet"}),", ",(0,o.jsx)(t.code,{children:"getNewsFeed"}),", ",(0,o.jsx)(t.code,{children:"follow"}),", and ",(0,o.jsx)(t.code,{children:"unfollow"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"approach-1-heappriority-queue",children:"Approach 1: Heap/Priority Queue"}),"\n",(0,o.jsx)(t.p,{children:"We can use hash maps to track which users make which tweets, and which user follows which user. The tweets will be ordered by time, and we have no need to access random tweets, we can map to a list, and just append the newest tweets to the end. The followers will need easy access though and have no need for repeats, so we can map to a set of followees."}),"\n",(0,o.jsx)(t.p,{children:"The tricky part is how to get our news feed. We can just get all tweets from all followers and sort them. Slightly more efficient would be to put all tweets from all followers into a heap of size 10. But even better we can put all followees most recent tweets into a heap, thus limiting the size of our heap, and only put their next recent tweet into the heap when we pop off their most recent."}),"\n",(0,o.jsx)(t.p,{children:"Since a followees second most recent tweet will never be more recent than their most recent tweet, we can do this to maintain a followee-sized heap instead of a 10-sized heap."}),"\n",(0,o.jsx)(l,{children:(0,o.jsxs)(s,{value:"python",label:"Python",children:[(0,o.jsx)(n,{name:"@ColeB2"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:"class Twitter:\n    def __init__(self):\n        # initialize our timer to track order of tweets\n        self.time = 0\n        # initialize our dictionaries/hash maps to track our tweets\n        # and our followers. Defaultdict just allows us to add a\n        # tweet for a user, even if the user doesn't exist in the hash\n        # map, as it will make the key:value pair for us.\n        self.userTweets = defaultdict(list)\n        self.userFollows = defaultdict(set)\n\n\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        # Time: O(1)\n        # add the tweet to user's list of tweets with a time.\n        self.userTweets[userId].append((self.time, tweetId))\n        # decrement time since we are using a min heap variation\n        # of the heap. So lower times will appear at the top. Ie -10\n        # will be above -9, etc.\n        self.time -= 1\n\n\n    def getNewsFeed(self, userId: int) -> List[int]:\n        # Time O(klogk) to create our initial min heap, where\n        # k is the number of followees\n        # O(10logk) to create our news feed. We need 10 tweets tops,\n        # and our heap will organize itself in O(logk) time.\n        # initialize our newsFeed, which we will return and our minHeap.\n        newsFeed = []\n        minHeap = []\n        # add our current user to their own folloers to assure we use\n        # their own tweets in their own field.\n        self.userFollows[userId].add(userId)\n        # loop through all followees of the user\n        for followeeId in self.userFollows[userId]:\n            # if the followee has tweeted before:\n            if followeeId in self.userTweets:\n                # get the index of their most recent tweet\n                tweetIdx = len(self.userTweets[followeeId]) - 1\n                # get the time and id of the most recent tweet\n                time, tweetId = self.userTweets[followeeId][tweetIdx]\n                # push it onto the heap, time must be first as\n                # the heap will sort by the first value first.\n                heapq.heappush(minHeap, (time, tweetId, followeeId, tweetIdx - 1))\n\n        # while we have minHeap values and our newsFeed isn't full\n        while minHeap and len(newsFeed) < 10:\n            # pop most recent tweet off the heap.\n            time, tweetId, followeeId, tweetIdx = heapq.heappop(minHeap)\n            # add it to the news feed.\n            newsFeed.append(tweetId)\n            # if their are still tweets, ie we haven't reach an index\n            # of < 0 in the list:\n            if tweetIdx >= 0:\n                # get the next most recent tweet for the followee\n                time, tweetId = self.userTweets[followeeId][tweetIdx]\n                # add it to the heap\n                heapq.heappush(minHeap, (time, tweetId, followeeId, tweetIdx - 1))\n        # return our news feed.\n        return newsFeed\n\n\n    def follow(self, followerId: int, followeeId: int) -> None:\n        # Time O(1)\n        # add the followee to the users follower set.\n        self.userFollows[followerId].add(followeeId)\n\n\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        # Time O(1)\n        # if our followee exists in our users follow set\n        if followeeId in self.userFollows[followerId]:\n            # remove that followee from our follow set.\n            self.userFollows[followerId].remove(followeeId)\n"})})]})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(w,{...e})}):w(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(30758);const o={},i=s.createContext(o);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);