---
title: 'Linked List'
description: ''
hide_table_of_contents: false
keywords:
  - leetcode
  - template
  - linked list
---

### Floyd's fast and slow pointer

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
ListNode* slow = head;
ListNode* fast = head;
while (fast != nullptr && fast->next != nullptr) {
    // do something here
    slow = slow->next;
    fast = fast->next->next;
}
```

</TabItem>
</Tabs>