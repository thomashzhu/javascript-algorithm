class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return newNode;
    };

    let current = this.root;
    
    while (current) {
      if (current.value === value) {
        return undefined;
      } else if (current.value > value) {
        if (!current.left) {
          current.left = newNode;
          return current.left
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return current.right;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return null;

    let result = this.root;

    while (result.value !== value) {
      if (result.value > value) {
        if (!result.left) return null;
        result = result.left;
      } else if (result.value < value) {
        if (!result.right) return null;
        result = result.right;
      }
    }

    return result;
  }
}
