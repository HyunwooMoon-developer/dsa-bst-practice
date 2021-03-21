class createBinarySearchTree {
  constructor(key = null) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

function createBalancedBST(array, start = 0, end = array.length) {
  if (start === end) {
    return null;
  }

  const middleIndex = Math.floor((start + end) / 2);
  const middleValue = array[middleIndex];

  const leftSubTree = createBalancedBST(array, (start = 0), middleIndex);
  const rightSubTree = createBalancedBST(array, middleIndex + 1, end);

  const node = new createBinarySearchTree(middleValue);
  node.left = leftSubTree;
  node.right = rightSubTree;
  return node;
}

console.dir(createBalancedBST([1, 2, 3, 5, 7, 9, 11]), { depth: null });
console.dir(createBalancedBST([-2, -1, 3, 5, 7, 9, 11]), { depth: null });
console.dir(createBalancedBST([1, 2, 3, 5, 7, 7, 9, 11]), { depth: null });
console.dir(createBalancedBST([1, 2, 3, 5, 7]), { depth: null });
console.dir(createBalancedBST([1, 2, 3, 5, 7, 9.5, 11]), { depth: null });
console.dir(createBalancedBST([1, 2, 1e6, 1e7, 1e8, 1e9]), { depth: null });
console.dir(createBalancedBST([1, 2]), { depth: null });
console.dir(createBalancedBST([]), { depth: null });
