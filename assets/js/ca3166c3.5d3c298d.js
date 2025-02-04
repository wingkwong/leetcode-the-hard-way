"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[34025],{63347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"0700-0799/my-calendar-iii-hard","title":"0732 - My Calendar III (Hard)","description":"Author: @wkw | https://leetcode.com/problems/my-calendar-iii/","source":"@site/solutions/0700-0799/0732-my-calendar-iii-hard.md","sourceDirName":"0700-0799","slug":"/0700-0799/my-calendar-iii-hard","permalink":"/solutions/0700-0799/my-calendar-iii-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0700-0799/0732-my-calendar-iii-hard.md","tags":[{"inline":true,"label":"Binary Search","permalink":"/solutions/tags/binary-search"},{"inline":true,"label":"Design","permalink":"/solutions/tags/design"},{"inline":true,"label":"Segment Tree","permalink":"/solutions/tags/segment-tree"},{"inline":true,"label":"Ordered Set","permalink":"/solutions/tags/ordered-set"}],"version":"current","sidebarPosition":732,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/my-calendar-iii/","tags":["Binary Search","Design","Segment Tree","Ordered Set"]},"sidebar":"tutorialSidebar","previous":{"title":"0724 - Find Pivot Index (Easy)","permalink":"/solutions/0700-0799/find-pivot-index-easy"},"next":{"title":"0733 - Flood Fill (Easy)","permalink":"/solutions/0700-0799/flood-fill-easy"}}');var s=t(86070),i=t(32790);const a={description:"Author: @wkw | https://leetcode.com/problems/my-calendar-iii/",tags:["Binary Search","Design","Segment Tree","Ordered Set"]},o="0732 - My Calendar III (Hard)",l={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Line Sweeping",id:"approach-1-line-sweeping",level:2},{value:"Approach 2: Segment Tree",id:"approach-2-segment-tree",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:a}=n;return t||m("SolutionAuthor",!0),r||m("TabItem",!0),a||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"0732---my-calendar-iii-hard",children:"0732 - My Calendar III (Hard)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/my-calendar-iii/",children:"https://leetcode.com/problems/my-calendar-iii/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"k"}),"-booking happens when ",(0,s.jsx)(n.code,{children:"k"})," events have some non-empty intersection (i.e., there is some time that is common to all ",(0,s.jsx)(n.code,{children:"k"})," events.)"]}),"\n",(0,s.jsxs)(n.p,{children:["You are given some events ",(0,s.jsx)(n.code,{children:"[start, end)"}),", after each given event, return an integer ",(0,s.jsx)(n.code,{children:"k"})," representing the maximum ",(0,s.jsx)(n.code,{children:"k"}),"-booking between all the previous events."]}),"\n",(0,s.jsxs)(n.p,{children:["Implement the ",(0,s.jsx)(n.code,{children:"MyCalendarThree"})," class:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MyCalendarThree()"})," Initializes the object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"int book(int start, int end)"})," Returns an integer ",(0,s.jsx)(n.code,{children:"k"})," representing the largest integer such that there exists a ",(0,s.jsx)(n.code,{children:"k"}),"-booking in the calendar."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input\n["MyCalendarThree", "book", "book", "book", "book", "book", "book"]\n[[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]\nOutput\n[null, 1, 1, 2, 3, 3, 3]\n\nExplanation\nMyCalendarThree myCalendarThree = new MyCalendarThree();\nmyCalendarThree.book(10, 20); // return 1, The first event can be booked and is disjoint, so the maximum k-booking is a 1-booking.\nmyCalendarThree.book(50, 60); // return 1, The second event can be booked and is disjoint, so the maximum k-booking is a 1-booking.\nmyCalendarThree.book(10, 40); // return 2, The third event [10, 40) intersects the first event, and the maximum k-booking is a 2-booking.\nmyCalendarThree.book(5, 15); // return 3, The remaining events cause the maximum K-booking to be only a 3-booking.\nmyCalendarThree.book(5, 10); // return 3\nmyCalendarThree.book(25, 55); // return 3\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= start < end <= 10^9"})}),"\n",(0,s.jsxs)(n.li,{children:["At most ",(0,s.jsx)(n.code,{children:"400"})," calls will be made to ",(0,s.jsx)(n.code,{children:"book"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-line-sweeping",children:"Approach 1: Line Sweeping"}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wkw"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"// Time Complexity: O(N ^ 2)\n// Space Complexity: O(N)\nclass MyCalendarThree {\npublic:\n    // finding number of overlapping elements at time points -> line sweeping\n    MyCalendarThree() {}\n\n    int book(int start, int end) {\n        // new event starts here -> increase by 1\n        lines[start]++;\n        // the event ends here -> decrease by 1\n        // p.s. sometimes you may see `lines[end + 1]--;`. e.g. 2406. Divide Intervals Into Minimum Number of Groups\n        //      you may search `leetcode-the-hard-way` on Discussion to see my solution explanation on that problem\n        //      this is because the interval is inclusive, i.e [start, end]\n        //      however, the interval in this problem is [start, end), so we don't need to add 1 here.\n        lines[end]--;\n        int mx = 0, cnt = 0;\n        for (auto x : lines) {\n            // here we calculate the prefix sum\n            cnt += x.second;\n            // and record the maximum overlapping intervals\n            mx = max(mx, cnt);\n        }\n        return mx;\n    }\nprivate:\n    // can I use `vector` instead?\n    // given that the constraints state 0 <= start < end <= 10 ^ 9\n    // it means we need to sweep from 0 to 10 ^ 9 if we use vector\n    // let's say the books are [10, 20) and [1e9 - 10, 1e9)\n    // then the range [20, 1e9 - 10 - 1] is empty but we still spend time to check them\n\n    // in c++, we can use map instead since we only have at most 400 calls\n    // in line sweeping, we need to ensure the keys are sorted\n    // map is implemented as red-black trees so the it fulfils\n    // lines[i] = j means we have j overlapping elements at time point i\n    map<int, int> lines;\n};\n\n/**\n * Your MyCalendarThree object will be instantiated and called as such:\n * MyCalendarThree* obj = new MyCalendarThree();\n * int param_1 = obj->book(start,end);\n */\n"})})]}),(0,s.jsxs)(r,{value:"java",label:"Java",children:[(0,s.jsx)(t,{name:"@wkw"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// Time Complexity: O(N ^ 2)\n// Space Complexity: O(N)\nclass MyCalendarThree {\n    // can I use `ArrayList` instead?\n    // given that the constraints state 0 <= start < end <= 10 ^ 9\n    // it means we need to sweep from 0 to 10 ^ 9 if we use ArrayList\n    // let's say the books are [10, 20) and [1e9 - 10, 1e9)\n    // then the range [20, 1e9 - 10 - 1] is empty but we still spend time to check them\n\n    // in java, we can use TreeMap instead since we only have at most 400 calls\n    // in line sweeping, we need to ensure the keys are sorted\n    // TreeMap is implemented as red-black trees so the it fulfils\n    // lines[i] = j means we have j overlapping elements at time point i\n    private TreeMap<Integer, Integer> lines;\n\n    // finding number of overlapping elements at time points -> line sweeping\n\n    public MyCalendarThree() {\n        // init TreeMap\n        lines = new TreeMap<>();\n    }\n\n    public int book(int start, int end) {\n        // new event starts here -> increase by 1\n        lines.put(start, lines.getOrDefault(start, 0) + 1);\n        // the event ends here -> decrease by 1\n        // p.s. sometimes you may see `lines[end + 1]--;`. e.g. 2406. Divide Intervals Into Minimum Number of Groups\n        //      you may search `leetcode-the-hard-way` on Discussion to see my solution explanation on that problem\n        //      this is because the interval is inclusive, i.e [start, end]\n        //      however, the interval in this problem is [start, end), so we don't need to add 1 here.\n        lines.put(end, lines.getOrDefault(end, 0) - 1);\n        int mx = 0, cnt = 0;\n        for (int x : lines.values()) {\n            // here we calculate the prefix sum\n            cnt += x;\n            // and record the maximum overlapping intervals\n            mx = Math.max(mx, cnt);\n        }\n        return mx;\n    }\n\n}\n\n/**\n * Your MyCalendarThree object will be instantiated and called as such:\n * MyCalendarThree obj = new MyCalendarThree();\n * int param_1 = obj.book(start,end);\n */\n"})})]}),(0,s.jsxs)(r,{value:"py",label:"Python",children:[(0,s.jsx)(t,{name:"@wkw"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"from sortedcontainers import SortedDict\n\n# Time Complexity: O(N ^ 2)\n# Space Complexity: O(N)\nclass MyCalendarThree:\n\n    def __init__(self):\n        # in line sweeping, we need to ensure the keys are sorted\n        # in python, we can use SortedDict which fulfils the above requirement\n        # lines[i] = j means we have j overlapping elements at time point i\n        self.lines = SortedDict()\n\n\n    # finding number of overlapping elements at time points -> line sweeping\n    def book(self, start: int, end: int) -> int:\n        # new event starts here -> increase by 1\n        self.lines[start] = self.lines.get(start, 0) + 1\n        # the event ends here -> decrease by 1\n        # p.s. sometimes you may see `lines.get(end + 1, 0) - 1;`. e.g. 2406. Divide Intervals Into Minimum Number of Groups\n        #      you may search `leetcode-the-hard-way` on Discussion to see my solution explanation on that problem\n        #      this is because the interval is inclusive, i.e [start, end]\n        #      however, the interval in this problem is [start, end), so we don't need to add 1 here.\n        self.lines[end] = self.lines.get(end, 0) - 1\n        # here we calculate the prefix sum using `accumulate`\n        # and get the maximum overlapping intervals using `max`\n        return max(accumulate(self.lines.values()))\n\n\n# Your MyCalendarThree object will be instantiated and called as such:\n# obj = MyCalendarThree()\n# param_1 = obj.book(start,end)\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"approach-2-segment-tree",children:"Approach 2: Segment Tree"}),"\n",(0,s.jsx)(a,{children:(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wkw"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class MyCalendarThree {\npublic:\n    // modified from https://usaco.guide/plat/sparse-segtree?lang=cpp\n    struct Node {\n        int sum, lazy, tl, tr, l, r;\n        Node() : sum(0), lazy(0), l(-1), r(-1) {}\n    };\n\n    const static int magic = 64 * 200 * 10;\n\n    Node segtree[magic];\n    int cnt = 2;\n\n    void push_lazy(int node) {\n        if (segtree[node].lazy) {\n            segtree[node].sum += segtree[node].lazy;\n            int mid = (segtree[node].tl + segtree[node].tr) / 2;\n            if (segtree[node].l == -1) {\n                segtree[node].l = cnt++;\n                segtree[segtree[node].l].tl = segtree[node].tl;\n                segtree[segtree[node].l].tr = mid;\n            }\n            if (segtree[node].r == -1) {\n                segtree[node].r = cnt++;\n                segtree[segtree[node].r].tl = mid + 1;\n                segtree[segtree[node].r].tr = segtree[node].tr;\n            }\n            segtree[segtree[node].l].lazy += segtree[node].lazy;\n            segtree[segtree[node].r].lazy += segtree[node].lazy;\n            segtree[node].lazy = 0;\n        }\n    }\n\n    void update(int node, int l, int r) {\n        push_lazy(node);\n        if (l == segtree[node].tl && r == segtree[node].tr) {\n            segtree[node].lazy += 1;\n            push_lazy(node);\n        } else {\n            int mid = (segtree[node].tl + segtree[node].tr) / 2;\n            if (segtree[node].l == -1) {\n                segtree[node].l = cnt++;\n                segtree[segtree[node].l].tl = segtree[node].tl;\n                segtree[segtree[node].l].tr = mid;\n            }\n            if (segtree[node].r == -1) {\n                segtree[node].r = cnt++;\n                segtree[segtree[node].r].tl = mid + 1;\n                segtree[segtree[node].r].tr = segtree[node].tr;\n            }\n\n            if (l > mid) update(segtree[node].r, l, r);\n            else if (r <= mid) update(segtree[node].l, l, r);\n            else {\n                update(segtree[node].l, l, mid);\n                update(segtree[node].r, mid + 1, r);\n            }\n            push_lazy(segtree[node].l);\n            push_lazy(segtree[node].r);\n            segtree[node].sum = max(segtree[segtree[node].l].sum, segtree[segtree[node].r].sum);\n        }\n    }\n\n    int query(int node, int l, int r) {\n        push_lazy(node);\n        if (l == segtree[node].tl && r == segtree[node].tr) return segtree[node].sum;\n        else {\n            int mid = (segtree[node].tl + segtree[node].tr) / 2;\n            if (segtree[node].l == -1) {\n                segtree[node].l = cnt++;\n                segtree[segtree[node].l].tl = segtree[node].tl;\n                segtree[segtree[node].l].tr = mid;\n            }\n            if (segtree[node].r == -1) {\n                segtree[node].r = cnt++;\n                segtree[segtree[node].r].tl = mid + 1;\n                segtree[segtree[node].r].tr = segtree[node].tr;\n            }\n            if (l > mid) return query(segtree[node].r, l, r);\n            else if (r <= mid) return query(segtree[node].l, l, r);\n            else return max(query(segtree[node].l, l, mid), query(segtree[node].r, mid + 1, r));\n        }\n    }\n\n\n    MyCalendarThree() {\n        segtree[1].sum = 0; segtree[1].lazy = 0;\n        segtree[1].tl = 0; segtree[1].tr = 1e9;\n    }\n\n    int book(int start, int end) {\n        update(1, start, end - 1);\n        return segtree[1].sum;\n    }\n};\n\n/**\n * Your MyCalendarThree object will be instantiated and called as such:\n * MyCalendarThree* obj = new MyCalendarThree();\n * int param_1 = obj->book(start,end);\n */\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(30758);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);