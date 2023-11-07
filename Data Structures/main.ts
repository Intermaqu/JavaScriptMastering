import heap from "./heap";
import binaryTree from "./binaryTree"
import SLL from "./singlyLinkedList"

// let myHeap = new heap(10);
// myHeap.insert(1);
// myHeap.insert(2);
// myHeap.insert(3);
// myHeap.insert(4);
// myHeap.insert(5);
// myHeap.print();
// const value = myHeap.remove();
// console.log(value);

// let myTree  = new binaryTree(10)
// myTree.insert(5)
// myTree.insert(2)
// myTree.insert(6)
// myTree.insert(16)
// myTree.insert(12)
// myTree.insert(21)
// myTree.insert(20)
// myTree.insert(22)

// myTree.findHighestValue()
// myTree.findLowestValue()
// myTree.find(20)
// myTree.printInOrder()
// myTree.printTreeByLevel()
// myTree.print2D()


const list = new SLL(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

list.print();
list.reverse();
list.print();