---
description: 'Author: @ColeB2 | https://leetcode.com/problems/design-twitter/'
tags: [Hash Table, Linked List, Design, Heap (Priority Queue)]
---

# 0355 - Design Twitter (Medium)

## Problem Link

https://leetcode.com/problems/design-twitter/

## Problem Statement

Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the `10` most recent tweets in the user's news feed.

Implement the `Twitter` class:

- `Twitter()` Initializes your twitter object.

- `void postTweet(int userId, int tweetId)` Composes a new tweet with ID `tweetId` by the user `userId`. Each call to this function will be made with a unique `tweetId`.

- `List<Integer> getNewsFeed(int userId)` Retrieves the `10` most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be **ordered from most recent to least recent**.

- `void follow(int followerId, int followeeId)` The user with ID `followerId` started following the user with ID `followeeId`.

- `void unfollow(int followerId, int followeeId)` The user with ID `followerId` started unfollowing the user with ID `followeeId`.

**Example 1:**

```
Input
["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
Output
[null, null, [5], null, null, [6, 5], null, [5]]

Explanation
Twitter twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
twitter.follow(1, 2);    // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2);  // User 1 unfollows user 2.
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
```

**Constraints:**

- `1 <= userId, followerId, followeeId <= 500`
- `0 <= tweetId <= 10^4`
- All the tweets have **unique** IDs.
- At most `3 * 10^4` calls will be made to `postTweet`, `getNewsFeed`, `follow`, and `unfollow`.

## Approach 1: Heap/Priority Queue

We can use hash maps to track which users make which tweets, and which user follows which user. The tweets will be ordered by time, and we have no need to access random tweets, we can map to a list, and just append the newest tweets to the end. The followers will need easy access though and have no need for repeats, so we can map to a set of followees.

The tricky part is how to get our news feed. We can just get all tweets from all followers and sort them. Slightly more efficient would be to put all tweets from all followers into a heap of size 10. But even better we can put all followees most recent tweets into a heap, thus limiting the size of our heap, and only put their next recent tweet into the heap when we pop off their most recent.

Since a followees second most recent tweet will never be more recent than their most recent tweet, we can do this to maintain a followee-sized heap instead of a 10-sized heap.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Twitter:
    def __init__(self):
        # initialize our timer to track order of tweets
        self.time = 0
        # initialize our dictionaries/hash maps to track our tweets
        # and our followers. Defaultdict just allows us to add a
        # tweet for a user, even if the user doesn't exist in the hash
        # map, as it will make the key:value pair for us.
        self.userTweets = defaultdict(list)
        self.userFollows = defaultdict(set)


    def postTweet(self, userId: int, tweetId: int) -> None:
        # Time: O(1)
        # add the tweet to user's list of tweets with a time.
        self.userTweets[userId].append((self.time, tweetId))
        # decrement time since we are using a min heap variation
        # of the heap. So lower times will appear at the top. Ie -10
        # will be above -9, etc.
        self.time -= 1


    def getNewsFeed(self, userId: int) -> List[int]:
        # Time O(klogk) to create our initial min heap, where
        # k is the number of followees
        # O(10logk) to create our news feed. We need 10 tweets tops,
        # and our heap will organize itself in O(logk) time.
        # initialize our newsFeed, which we will return and our minHeap.
        newsFeed = []
        minHeap = []
        # add our current user to their own folloers to assure we use
        # their own tweets in their own field.
        self.userFollows[userId].add(userId)
        # loop through all followees of the user
        for followeeId in self.userFollows[userId]:
            # if the followee has tweeted before:
            if followeeId in self.userTweets:
                # get the index of their most recent tweet
                tweetIdx = len(self.userTweets[followeeId]) - 1
                # get the time and id of the most recent tweet
                time, tweetId = self.userTweets[followeeId][tweetIdx]
                # push it onto the heap, time must be first as
                # the heap will sort by the first value first.
                heapq.heappush(minHeap, (time, tweetId, followeeId, tweetIdx - 1))

        # while we have minHeap values and our newsFeed isn't full
        while minHeap and len(newsFeed) < 10:
            # pop most recent tweet off the heap.
            time, tweetId, followeeId, tweetIdx = heapq.heappop(minHeap)
            # add it to the news feed.
            newsFeed.append(tweetId)
            # if their are still tweets, ie we haven't reach an index
            # of < 0 in the list:
            if tweetIdx >= 0:
                # get the next most recent tweet for the followee
                time, tweetId = self.userTweets[followeeId][tweetIdx]
                # add it to the heap
                heapq.heappush(minHeap, (time, tweetId, followeeId, tweetIdx - 1))
        # return our news feed.
        return newsFeed


    def follow(self, followerId: int, followeeId: int) -> None:
        # Time O(1)
        # add the followee to the users follower set.
        self.userFollows[followerId].add(followeeId)


    def unfollow(self, followerId: int, followeeId: int) -> None:
        # Time O(1)
        # if our followee exists in our users follow set
        if followeeId in self.userFollows[followerId]:
            # remove that followee from our follow set.
            self.userFollows[followerId].remove(followeeId)
```

</TabItem>
</Tabs>
