---
title: "Binary Search Tree (BST)"
description: "Author: @utkarsh"
draft: true
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - binary search tree
  - data structure
---

<TutorialAuthors names="@utkarsh"/>

## Overview

Before jump to BST. We recap some basics to better understand BST:

A tree is a data structure composed of nodes that has some following characteristics:

1. Each tree has root node at the top (also known as Parent Node).
2. The root node has zero or more child nodes.
3. Each child node has zero or more child nodes. This create subtree in the tree. Every node has its own subtree made up of its children etc. This means that every node on its own can be tree.

A valid **binary search tree** (BST) is defined as follows:

1. The left node of the tree is smaller (or equal) to the root node.
2. The right node of the tree is greater (or equal) to the root node.
3. All the nodes of left subtree(tree left side of root node) are smaller (or equal) to the root node.
4. And All the nodes of right subtree (tree right side of the root node) are greater (or equal) to the root node.

<!-- Diagram of BST -->

![image](https://user-images.githubusercontent.com/30936607/195894102-11f3d201-e1ef-4fd7-83de-5e00e6d66eb7.png)

![image](https://user-images.githubusercontent.com/30936607/195677540-23c39b0f-ce06-4c7d-bffa-468b6c1b3f79.png)

Like binary tree. We can also traverse BST in **pre**,**post** and **inorder** traversal.
But the amazing fact is that **inorder** traversal
of `BST` will give **sorted data**.

### Inorder traversal in BST

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@utkarsh"/>

```cpp
#include<bits/stdc++.h>
using namespace std;

class Node{
  public:
    int data;
    Node* left;
    Node* right;
    Node(int d){
        data = d;
        left = NULL;
        right = NULL;
    }
};

void inOrder(Node *root){
  if(root==NULL)
    return;
  inOrder(root->left);
  //output: 4 6 7 12 13 15 16
  cout<<root->data<<" ";
  inOrder(root->right);
}

int main(){
  Node *root = new Node(12);
  root->left = new Node(6);
  root->left->left = new Node(4);
  root->left->right = new Node(7);
  root->right = new Node(15);
  root->right->left = new Node(13);
  root->right->right = new Node(16);
  inorder(root);
  return 0;
}

```

</TabItem>

</Tabs>

### Operations on BST

There are three main operation in BST:

- Search
- Insertion
- Deletion

### 1. Search

##### Algorithm

1. The searching always start from the root node of the tree.
2. We compare the data in each node with our target node that we want to search in tree.
3. If our target node value matches with the value of current node then return that node.
4. If value not matched with current node then we either procced to right or left child according to the condition.
5. If target node value is greater than the current node then we procced towards the right child or right subtree.
6. If target node value is lower than the current node then we proceed towards the left child or left subtree.

`target value: value of node you want to search in tree`
<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@utkarsh"/>

```cpp
// For BST search
Node *bstSearch(int target,Node* root){
    if(root == NULL)
        return root;
    // If target value matches with node value
    if(root->data == target)c
    // Return node
        return root;
    if(root->data<target){
      // search target node in right subtree
        return bstSearch(target,root->right);
    }
    else{
       // search target node in left subtree
        return bstSearch(target,root->left);
    }
}
```

</TabItem>
</Tabs>

### 2. Insertion

**Algorithm**

1. Insertion begin with searh operation.
2. Search left or right subtree according to the relation between node value and the value of our target node as we did in search.
3. Repeat step 1 until we reach to correct place to insert our new node.
4. Add a new node as a right or left child according to the node value and our target node value.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@utkarsh"/>

```cpp
// For BST insertion
Node *bstInsertion(int val,Node *node){
  // Reaches to NULL or external node of tree
    if(node==NULL){
      // Insert new node
        node = new Node(val);
    }
    else if(node->data>val){
        // Search correct place to insert in left subtree
        node->left = bstInsertion(val,node->left);
    }
    else if(node->data<val){
      // Search correct place to insert in right subtree
        node->right = bstInsertion(val,node->right);
    }
    return node;
}
```

</TabItem>
</Tabs>

### 3. Deletion

**Algorithm**

In order to delete any node in BST there are some scenarios we need to cover

1. First of all we need to search that node in BST. Same step as we followed above for search.
2. Now there are three cases for node we got after search that needs to be deleted.

**Case 1**

If the node to be deleted is a leaf node. In such case simply delete that node from tree.

**Case 2**

The node to be deleted has one child node. Then in that case:

- Replace that node with it's child node.
- Delete original child node from the tree.

**Case 3**

The node to be deleted has two child node. Then in that case:

- Find the inorder successor of that node. (Inorder successor:- the leftmost node in the right subtree).
- Replace that node with inorder successor.
- Delete inorder successor from it's original position.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@utkarsh"/>

```cpp
Node *inorderSuccessor(Node* root){
    Node* currentNode = root;
    while(currentNode->left != NULL){
      // Go to left most
        currentNode = currentNode->left;
    }
    return currentNode;
}
Node* deleteNode(Node *node,int target){
    if(node==NULL)
        return node;
    if(node->data>target)
      // Search target node in left subtree
        node->left = deleteNode(node->left,target);
    else if(node->data<target){
      // Search target node in right subtree
        node->right = deleteNode(node->right,target);
    }
    else{
      // for leaf node
        if(node->right == NULL && node->left == NULL){
            node = NULL;
            return node;
        }
        // for node which have only one child
        if(node->right == NULL || node->left == NULL){
            Node *temp;
            if(node->right){
                temp = node->right;
                node->data = temp->data;
                node->right = NULL;
            }else if(node->left){
                temp = node->left;
                node->data = temp->data;
                node->left = NULL;
            }
            return node;
        }
        // for node which have two child
        Node* temp;
        // Find inorder Successor
        temp = inorderSuccessor(node->right);
        // Replace node with it's inorder sucessor
        node->data = temp->data;
        // Delete that  node
        node->right = deleteNode(node->right,temp->data);

    }
    return node;
}

```

</TabItem>
</Tabs>

## Complexity

### Time complexity

| Operation | Best Case    | Average Case | Worst Case |
| --------- | ------------ | ------------ | ---------- |
| Search    | $$O(log n)$$ | $$O(log n)$$ | $$O(n)$$   |
| Insertion | $$O(log n)$$ | $$O(log n)$$ | $$O(n)$$   |
| Deletion  | $$O(log n)$$ | $$O(log n)$$ | $$O(n)$$   |

Here **n** is number of node in the tree

### Space complexity

Space complexity for all the operations is $$O(n)$$

### Example

We learn alot now we will apply this knowledge to solve this problem ([LeetCode Link](https://leetcode.com/problems/validate-binary-search-tree/))

> Given the root of a binary tree, determine if it is a valid binary search tree (BST)

So in order to solve this problem. We need to recap the property of BST.
As i explained in overview of BST.

Condition that run on each nodes:

```cpp
node.value<node.right.value
        and
node.value>node.left.value
```

But we also need to check that all the node in left subtree is lessThan or equal to the rootNode and all the node in right subtree is greaterThan or equal to the rootNode.

So here we also need to maintain upper and lower limits so while traversing the tree need to compare above condition as well as these limit values.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@utkarsh"/>

```cpp
class Node{
  public:
    int val;
    Node* left;
    Node* right;
    Node(int d){
        val = d;
        left = NULL;
        right = NULL;
    }
};

Node *createBST(){
Node *root = new Node(12);
  root->left = new Node(6);
  root->left->left = new Node(4);
  root->left->right = new Node(7);
  root->right = new Node(15);
  root->right->left = new Node(13);
  root->right->right = new Node(16);
  return root;
}

bool validate(Node* root, Node* low, Node* high) {
        // Empty trees are valid BSTs.
        if (root == nullptr) {
            return true;
        }

        // The current node's value must be between low and high.
        if ((low != nullptr and root->val <= low->val) or
            (high != nullptr and root->val >= high->val)) {
            return false;
        }

        // The left and right subtree must also be valid.
        return validate(root->right, root, high) and
               validate(root->left, low, root);
    }

    int main(){
        Node *root = createBST();
        if(validate(root,nullptr,nullptr)){
          // Output: Tree is BST
            cout<<"Tree is BST"<<endl;
        }else{
            cout<<"Tree is not BST"<<endl;

        }
      return 0;
    }

```

</TabItem>
</Tabs>

Suggesting some LC problems. Please try to solve it by using above learnings.

export const suggestedProblems = [
{
"problemName": "108 - Convert Sorted Array to Binary Search Tree",
"difficulty": "Easy",
"leetCodeLink": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
"solutionLink": ""
},
{
"problemName": "701 - Insert into a Binary Search Tree",
"difficulty": "Easy",
"leetCodeLink": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
"solutionLink": ""
},
{
"problemName": "938 - Range Sum of BST",
"difficulty": "Easy",
"leetCodeLink": "https://leetcode.com/problems/range-sum-of-bst/",
"solutionLink": ""
},
{
"problemName": "098 - Validate Binary Search Tree",
"difficulty": "Medium",
"leetCodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
"solutionLink": ""
}
]

<Table title="Suggested Problems" data={suggestedProblems}/>
