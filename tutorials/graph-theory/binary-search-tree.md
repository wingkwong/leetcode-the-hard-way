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

A valid binary search tree is defined as follows:

1. The left node is smaller (or equal) to the root node.
2. The right node is greater (or equal) to the root node.
3. All the nodes of left subtree(tree left side of root node) are smaller (or equal) to the root node.
4. And All the nodes of right subtree (tree right side of the root node) are greater (or equal) to the root node.

<!-- Diagram of BST -->

Like binary tree. We can also traverse BST in **pre**,**post** and **inorder** traversal.
But the amazing fact is that **inorder** traversal
of `BST` will give **sorted data**.

### Inorder traversal in BST

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
  cout<<root->data<<" "; //output: 4 6 7 12 13 15 16
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

### Operations on BST

There are three main operation in BST:

- Search
- Insertion
- Deletion

### 1. Search

##### Algorithm

1. Return node if the target value is equal to the value of the node.
2. keep searching in left subtree if target value is less than the value of node.
3. keep searching in right subtree if target value is greater than the value of node.

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
// For BST search
Node *bstSearch(int target,Node* root){
    if(root == NULL)
        return root;
    if(root->data == target)
        return root;
    if(root->data<target)
        return bstSearch(target,root->right);
    else
        return bstSearch(target,root->left);
}
int main(){
int target = 4;
  Node* searchedNode = bstSearch(target,createTree());

  if(searchedNode){
      cout<<"Node "<<searchedNode->data<<"present in BST"<<endl; // output: Node 4 present in BST
  }else{
      cout<<"Node "<<target<<"not present in BST"<<endl;
  }

  return 0;
}
```

### 2. Insertion

**Algorithm**

1. Insertion begin with searh operation.
2. Search left or right subtree according to the relation between node value and the value of our target node.
3. repeat step 1 until reach into NULL or external node of tree.
4. Add a new node as a right or left child according to the node value and our target node value.

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

// For BST insertion
Node *bstInsertion(int val,Node *node){
    if(node==NULL)
        node = new Node(val);
    else if(node->data>val)
        node->left = bstInsertion(val,node->left);
    else if(node->data<val)
        node->right = bstInsertion(val,node->right);
    return node;
}
// For Inorder traversal
void inorder(Node *root){
    if(root == NULL)
    return;
    inorder(root->left);
    cout<<root->data<<" "; // output 4 6 7 12 13 15 16 80 -> 80 added at right most node of BST
    inorder(root->right);
}


int main(){
int target = 80;
  Node* root = bstInsertion(target,createTree());

  if(root){
      inorder(root);
  }

  return 0;
}
```

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

- Find the inorder successor of that node. (Inorder successor:- can be defined as smallest key but greater than the key of input node means first go right and then left most node is the inorder successor of that input node).
- Replace that node with inorder successor.
- Delete inorder successor from it's original position.

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

Node *createBST(){
Node *root = new Node(12);
  root->left = new Node(6);
  root->left->left = new Node(4);
  root->left->right = new Node(7);
  root->right = new Node(15);
  root->right->left = new Node(13);
  root->right->left->right = new Node(14);
  root->right->right = new Node(16);
  return root;
}

void inorder(Node *root){
    if(root == NULL)
    return;
    inorder(root->left);
    cout<<root->data<<" ";
    inorder(root->right);
}
Node *inorderSuccessor(Node* root){
    Node* currentNode = root;
    while(currentNode->left != NULL)
        currentNode = currentNode->left;
    return currentNode;
}
Node* deleteNode(Node *node,int target){
    if(node==NULL)
        return node;
    if(node->data>target)
        node->left = deleteNode(node->left,target);
    else if(node->data<target)
        node->right = deleteNode(node->right,target);
    else{
        if(node->right == NULL && node->left == NULL){ // for leaf node
            node = NULL;
            return node;
        }
        if(node->right == NULL || node->left == NULL){ // for node which have only one child
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
        temp = inorderSuccessor(node->right);
        node->data = temp->data;
        node->right = deleteNode(node->right,temp->data);

    }
    return node;
}
int main(){
int target = 15
cout<<"Inorder before deletion"<<endl;
inorder(createBST());
Node* root = deleteNode(createBST(),target);

  if(root){
      cout<<"\n";
  cout<<"Inorder after deletion"<<endl;
      inorder(root);
  }

  return 0;
}
```

**Result**

```
  Inorder before deletion
  4 6 7 12 13 14 15 16
  Inorder after deletion
  4 6 7 12 13 14 16 // 15 deleted successfully

```

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

<Table title="Suggested Problems" data={suggestedProblems} />
