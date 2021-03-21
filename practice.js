/* eslint-disable no-undef */
const BinarySearchTree = require("./BinarySearchTree");

function main() {
  const numberArray = [3, 1, 4, 6, 9, 2, 5, 7];
  const numberBST = new BinarySearchTree();

  numberArray.forEach((num) => numberBST.insert(num));

  console.log(numberBST);

  const string = "EASY QUESTION";
  const stringBST = new BinarySearchTree();
  let stringArray = [];
  stringArray = string.replace(/\s+/g, "").split("");
  console.log(stringArray);

  stringArray.forEach((str) => stringBST.insert(str));
  console.log(stringBST);

  const emptyBST = new BinarySearchTree();

  emptyBST.insert(2);

  console.log(tree(numberBST));
  console.log(height(numberBST));
  console.log(height(stringBST));
  console.log(height(emptyBST));
  console.log(isBST(numberBST));
  console.log(isBST(stringBST));
  console.log(isBST(emptyBST));
  console.log(nthLargest(numberBST, {start : 0}, 3));
  console.log(isBalanced(numberBST));
  console.log(isBalanced(emptyBST));
}

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.key + tree(t.right);
}

function height(tree) {
  let leftHeight = 0;
  let rightHeight = 0;

  if (!tree) {
    return 0;
  }
  if (!tree.left && !tree.right) {
    return 1;
  } else if (tree.left) {
    leftHeight = height(tree.left);
  } else if (tree.right) {
    rightHeight = height(tree.right);
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

function isBST(tree) {
  !tree && false;
  if (tree.left) {
    if (tree.left.key < tree.key) {
      return isBST(tree.left);
    } else {
      return false;
    }
  }
  if (tree.right) {
    if (tree.right.key < tree.key) {
      return false;
    } else {
      return isBST(tree.right);
    }
  }
  return true;
}

function nthLargest(tree, count, number){
  if(!tree){
    return null;
  }

  let rightNumber = nthLargest(tree.right, count, number);
  if(rightNumber){
    return rightNumber;
  }
  count.start++;

  if(count.start === number){
    return tree.key;
  }
  return nthLargest(tree.left, count, number);
}

function isBalanced(tree){
  if(!tree){
    return false;
  }
  if(!tree.left && !tree.right){
    return true;
  }

  let heightDiff = Math.abs(height(tree.right) - height(tree.left))

  if(heightDiff >= 1){
    return false;
  }
  return true;
}
main();
